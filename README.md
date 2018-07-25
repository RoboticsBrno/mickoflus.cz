# mickoflus.cz

[![Build Status](https://travis-ci.org/RoboticsBrno/mickoflus.cz.svg?branch=master)](https://travis-ci.org/RoboticsBrno/mickoflus.cz)

Web page for Míčkoflus

## How to make image previews on a local computer

The website uses gulp to generate miniatures for images. Therefore when you
clone the repo, there will be no previews. To fix it, just call `gulp build`.
The first execution can take up to 10 minutes to complete.

Note: Gulp is also used to deploy the website. This step is automated using
travis a therefore is not needed to be executed manually.

## For Windows users

The (probably) easiest way to run `gulp` is to use [Windows Subsystem for
Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

Then execute these commands in terminal:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install npm
cd WORKING_DIR_WITH_THIS_PROJECT
npm install
gulp build
```

It could be also necessary install `gulp` separately:

```
sudo npm install -g gulp
```