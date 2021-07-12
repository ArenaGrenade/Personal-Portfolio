#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
echo 'web.rohan-asokan.tech' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:ArenaGrenade/ArenaGrenade.github.io.git main:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ArenaGrenade/portfolio.git main:gh-pages

cd -
