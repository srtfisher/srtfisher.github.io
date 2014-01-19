
module.exports = function (grunt) {
    grunt.initConfig({
        // The clean task ensures the parsed css is removed
        clean: ["_site/assets/", "assets"],

        // Automatically run a task when a file changes
        watch: {
            styles: {
                files: ["less/*.less", "less/sections/*"],
                tasks: "less"
            }
        },

        // Compile specified less files
        less: {
            compile: {
                options: {
                    // These paths are searched for @imports
                    paths: ["less"]
                },
                files: {
                    "css/screen.css": "less/screen.less"
                }
            }
        },

        // Compress generated css files
        cssmin: {
                "assets/screen.min.css": [
                  "bower_components/bootstrap/dist/css/bootstrap.css",
                  "css/screen.css"
                ]
        },

        // Add shell tasks
        shell: {
            copyCss: {
                command: "cp assets/screen.min.css _site/assets/screen.min.css"
            },

            copyJs: {
                command: "cp assets/site.min.js _site/assets/site.min.js"
            },

            build: {
              command: "jekyll build"
            },

            serve: {
              command: "jekyll serve --watch"
            }
        },

        uglify: {
          site: {
            files: {
              'assets/site.min.js': [
                'bower_components/modernizr/modernizr.js',
                'bower_components/jquery/jquery.js',
                'bower_components/bootstrap/js/transition.js',
                'bower_components/bootstrap/js/tooltip.js',
                'bower_components/bootstrap/js/dropdown.js',
                'bower_components/bootstrap/js/button.js',
                'bower_components/bootstrap/js/collapse.js',
                'bower_components/bootstrap/js/modal.js',
                'bower_components/bootstrap/js/popover.js',
                'js/site.js'
              ],
            }
          }
        },

        bower: {
          dev: {
            dest: 'dest/path',
            options: {
              basePath: 'components/'
            }
          }
        }
    });

  // Load tasks so we can use them
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-bower");
    grunt.loadNpmTasks("grunt-shell");

    // The default task will show the usage
    grunt.registerTask("default", "Prints usage", function () {
        grunt.log.writeln("");
        grunt.log.writeln("Product site development");
        grunt.log.writeln("------------------------");
        grunt.log.writeln("");
        grunt.log.writeln("* run 'grunt --help' to get an overview of all commands.");
        grunt.log.writeln("* run 'grunt dev' to start developing.");
    });

    // The dev task will be used during development
    grunt.registerTask("dev", ["clean", "less:compile", "watch:styles"]);
    grunt.registerTask("build", ["clean", "less:compile", "cssmin", "uglify"]);
};
