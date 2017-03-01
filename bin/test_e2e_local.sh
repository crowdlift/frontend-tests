#!/bin/bash

# Run local web server and nightwatch
# TODO: rewrite this in node

TIME_TO_WAIT_FOR_PORT=60
RUN_NIGHTWATCH=0

function print_state() {
  echo "Nightwatchify: $1"
}

function kill_process() {
  if [[ $1 ]]; then
    pkill -TERM -P $1
    kill -9 $1
  fi
}

function is_port_alive() {
  lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null
}

function check_for_port_to_be_in_use() {
  end=$((SECONDS+$TIME_TO_WAIT_FOR_PORT))
  while [ $SECONDS -lt $end ]; do
    if (($SECONDS > $TIME_TO_WAIT_FOR_PORT-1)); then
      print_state "server did not spin up in time. I am killing the process."
      kill_process $APP_SERVER
      break;
    elif is_port_alive; then
      print_state "I found a server running on port $PORT"
      RUN_NIGHTWATCH=1
      break;
    fi
    sleep 1
    echo "#"
  done
}

if is_port_alive; then
  print_state "local web server running"
  RUN_NIGHTWATCH=1
else
  npm run serve & APP_SERVER=$!
  sleep 1
  print_state "Waiting for local web server to boot"
  check_for_port_to_be_in_use
fi

if (($RUN_NIGHTWATCH==1)); then
  npm run nightwatch & NIGHTWATCH=$!
  wait $NIGHTWATCH
  kill_process $APP_SERVER
fi
