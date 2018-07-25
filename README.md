# mickoflus.cz

[![Build Status](https://travis-ci.org/RoboticsBrno/mickoflus.cz.svg?branch=master)](https://travis-ci.org/RoboticsBrno/mickoflus.cz)

Web page for Míčkoflus

## How to make image previews on a local computer

There are an automatically created miniatures for all images by [Travis
CI](https://travis-ci.org/) and then uploaded via FTP on the web. When you
want to see preview images on a local computer (after cloning the repo) you need
to do following steps.


Fist you need a Linux terminal (e.g. Ubuntu, [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)).

Then use this commands:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install npm
cd WORKING_DIR_WITH_THIS_PROJECT
npm install
gulp build
```
Command `gulp build` can take few minutes to complete (e.g. 10 minutes). After
that the previews are ready.


It could be also necessary install `gulp` separately:

```
sudo npm install -g gulp
```