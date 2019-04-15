#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ] && [ "$TRAVIS_PULL_REQUEST" == false ]; then # work just for master (not PR to master)
  zip -r web.zip css fonts img js preview files *.html *.ico
  mkdir split
  zipsplit -n 30000000 -b split web.zip
  for f in split/*.zip; do
   curl -sS -F "file=@$f" -F "token=$HOST_SECRET" $HOST_UPLOAD; 
  done
fi
