module.exports = function(grunt) {
     
    grunt.initConfig({
  
        pkg: grunt.file.readJSON('package.json'),
  
        copy: {
          directive: {
              src: './src/WireConfigDirective.js',
              dest: './npm/WireConfigDirective.js'
          },
          package: {
            src: './package.directive.json',
            dest: './npm/package.json'
          },        
          readme: {
            src: './README.directive.md',
            dest: './npm/README.md'
          },
        }
        
    });
  
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    grunt.registerTask('default', ['copy']);
  
  };