# backbone-bootstrap-tabs
Boilerplate using Backbone, Requirejs, jquery ,Bootstrap and Less  
A starting template application with menu tabs  
See the [online demo](http://bbt.franckysolo-development.com/#dashboard)

## Installation
You must have node, grunt and bower install on your development environment  
Install via npm :
```console
cd my-project
npm install backbone-bootstrap-tabs --save-dev
```
This command will install the backbone-bootstrap-tabs application in a node_modules directory.   
Move or copy the content of the backbone-bootstrap-tabs directory to you root directory of your new project.  
```console
find node_modules/backbone-bootstrap-tabs -maxdepth 1 -mindepth 1 -exec mv {} . \;
rm -rf node_modules/backbone-bootstrap-tabs
```
Then install dependencies inside your project with the command :
```console
bower update
```

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

You can add all modules you need!

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
