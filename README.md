# backbone-bootstrap-tabs
Boilerplate using Backbone, Requirejs, jquery ,Bootstrap and Less  
A starting template for development, application with menu tabs  
See the [online demo](http://bbt.franckysolo-development.com/#dashboard)

## Application structure
The application architecture directories :
```
app/
|-- assets/
|---- less/
|-- collections/
|-- dist/
|---- css/
|---- images/
|---- fonts/
|-- models/
|-- routers/
|-- vendor/
|-- views/
|---- templates/
|-- app.js
|-- index.html
|-- main.js
|-- main-built.js
|-- bin/
|---- bower.sh
|---- npm.sh
node_modules/
bower.json
Gruntfile.js
package.json
README.md
```
## Using grunt

For your development, you have to install some required grunt tasks modules :
- grunt
- grunt-contrib-jshint
- grunt-contrib-less
- grunt-contrib-symlink
- grunt-contrib-requirejs
- jshint-stylish

You can add mores grunt modules if you need by update the Gruntfile.

Install your module globally, an example with less
```console
npm install -g grunt-contrib-less
```
Then link the module to your application
```console
cd my-project
npm link grunt-contrib-less
```
## RequireJs Compilation
This Boilerplate is using grunt-contrib-requirejs in order to compile all your
JavaScript application scripts in one file.  
Just run after grunt modules install/linking this commands :  
Linking fonts and compile less to css
```console
grunt
```
Then to compile with r.js
```console
grunt optimize
```

## Installation
You must have node, grunt and bower install on your development environment

You can simply download, clone or fork the project from Github or  
Install via bower, run the following commands :
```console
cd my-project
bower init
bower install backbone-bootstrap-tabs
find bower_components/backbone-bootstrap-tabs -maxdepth 1 -mindepth 1 -exec mv {} . \;
rm -rf bower_components/backbone-bootstrap-tabs  
bower update
```

Install via npm, use the following commands :
```console
cd my-project
npm install backbone-bootstrap-tabs
find node_modules/backbone-bootstrap-tabs -maxdepth 1 -mindepth 1 -exec mv {} . \;
rm -rf node_modules/backbone-bootstrap-tabs
bower update
```

## Automating
Two bash scripts are provided for automatic install, you can make an alias to the  script for using in command line:
```console
cd my-project
npm install backbone-bootstrap-tabs
cp backbone-bootstrap-tabs/bin/*.sh ~/local-script/
```
Make alias:
```console
vi ~/.bash_aliases
alias npm-dev='~/local-scripts/./npm.sh'
alias bower-dev='~/local-scripts/./bower.sh'
```

The when you need to use the backbone-bootstrap-tabs Boilerplate
for each projects you can run this commands for installation.

With bower
```console
cd my-project
bower install backbone-bootstrap-tabs
bower-dev
```

With npm
```console
cd my-project
npm install backbone-bootstrap-tabs
npm-dev
```
