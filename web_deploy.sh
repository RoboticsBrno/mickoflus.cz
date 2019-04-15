#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then # work just for master
  zip -r web.zip css fonts img js preview files *.html *.ico
  mkdir split
  zipsplit -n 30000000 -b split web.zip
  for f in split/*.zip; do
   curl -sS -F "file=@$f" -F "token=$HOST_SECRET" $HOST_UPLOAD; 
  done
fi
