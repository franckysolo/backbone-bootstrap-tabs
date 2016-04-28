# backbone-bootstrap-tabs
Boilerplate using Backbone, Requirejs, jquery ,Bootstrap and Less  
A starting template application with menu tabs

## Installation

```
comming soom...
```

## Application structure
The application architecture schema :
```
app/
|-- assets/
|-- collections/
|-- dist/
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

For your development, you have to install some required grunt modules :
- grunt
- grunt-contrib-jshint
- grunt-contrib-less
- grunt-contrib-symlink
- grunt-contrib-requirejs

You can add all modules you need!

Install your module globally
```
npm install -g grunt-contrib-less
```
The link the module to your application
```
cd my-project
npm link grunt-contrib-less
```
## RequireJs Compilation
This Boilerplate is using grunt-contrib-requirejs in order to compile all your
JavaScript application scripts in one file.  
Just run after grunt modules install/linking this commands :  
Linking fonts and compile less to css
```
grunt
```
Then to compile with r.js
```
grunt optimize
```
