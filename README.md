# Frontend Kit Tests


## Upgrade Packages

[npm-check-updates](https://github.com/tjunnone/npm-check-updates)

```bash
# Check which packages can be upgrade in package.json
npm-check-updates # or ncu

# Upgrade all packages
ncu -a

# Upgrade to the highest version available packages, including beta
ncu -a -t

# Upgrade all packages to latest within package.json and yarn.lock paramenters
yarn upgrade
```


## Release Update

```bash
# Build release
yarn build
```

Bump version in package.json and `git commit` it.

```bash
# Create a new tag
git tag v1.1.2
# Update latest tag
git tag latest
# OR push all tags
git push origin --tags


###############################
# Other useful commands

# Push a specific tag
git push origin v3.1.0

# Delete local tag
git tag -d v0.1.1

# Delete a remote tag
git push origin :refs/tags/v0.1.1
# or github allows shorthand
git push origin :v0.1.1
```
