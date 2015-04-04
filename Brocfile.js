var concat = require('broccoli-concat');
var bowerDependencies = require('broccoli-bower');
var mergeTrees = require('broccoli-merge-trees');
var funnel = require('broccoli-funnel');

var app = 'app';
var styles = 'styles';

var sourceTrees = [app, styles];

var bowerFiles = funnel('bower_components', {
  destDir: 'vendor'
});

// creating another tree as the plugins take input
// a single tree and not array of trees
var dependencyTree = mergeTrees(sourceTrees, {overwrite: true});

// concatenating all js files
var javascripts = concat(dependencyTree, {
  inputFiles: ['**/*.js'],
  outputFile: '/assets/app.js'
});

var css = concat(dependencyTree, {
  inputFiles: ['**/*.css'],
  outputFile: '/assets/app.css'
});

// export javascripts, css and public folder
module.exports = mergeTrees([javascripts, css, 'public', bowerFiles]);
