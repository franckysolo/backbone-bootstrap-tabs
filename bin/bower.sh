#!/bin/bash
# After installation configure your dev environment with the following commands
# command to clean up your project when you install boilerplate with bower
find bower_components/backbone-bootstrap-tabs -maxdepth 1 -mindepth 1 -exec mv {} . \;
rm -rf bower_components/backbone-bootstrap-tabs

# Install Grunt required modules
# Maybe you have to run it with sudo! Depends on your env config
# If modules already installed thy will be updated
npm install -g grunt
npm install -g grunt-contrib-jshint
npm install -g grunt-contrib-less
npm install -g grunt-contrib-symlink
npm install -g grunt-contrib-requirejs
npm install -g jshint-stylish

# cd to youy-project-directory
# And link the grunt modules
npm link grunt
npm link grunt-contrib-jshint
npm link grunt-contrib-less
npm link grunt-contrib-symlink
npm link grunt-contrib-requirejs
npm link jshint-stylish

# Run bower to install dependecies
bower update

# Run the task runner
grunt
grunt optimize