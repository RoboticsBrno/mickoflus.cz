# mickoflus.cz

[![Build Status](https://travis-ci.org/RoboticsBrno/mickoflus.cz.svg?branch=master)](https://travis-ci.org/RoboticsBrno/mickoflus.cz)

Web page for Míčkoflus

## How to make image previews on a local computer
For all images are automatically created preview by [Travis CI](https://travis-ci.org/) and then uploaded throw FTP on the web. When you want to see preview images on the local computers (after cloning repo) you need to do next a few steps.


Firstly you need some Linux terminal (e.g. Ubuntu, [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)).

Then use this commands:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install npm
cd WORKING_DIR_WITH_THIS_PROJECT
npm install
gulp build 
```
Command `gulp build` could work a few minutes (e.g. 10 minutes). After that the previews are ready.


Could be also necessary install `gulp` separately:
```
sudo npm install -g gulp
```