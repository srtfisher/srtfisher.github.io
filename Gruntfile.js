
module.exports = function (grunt) {
    grunt.initConfig({
        // The clean task ensures the parsed css is removed
        clean: ["_site/css/"],

        // Compress generated css files
        cssmin: {
                "css/screen.css": ["css/screen.css"]
        },

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

        // Add shell tasks
        shell: {
            copyCss: {
                command: "cp css/screen.css _site/css/screen.css"
            }
        }
    });

  // Load tasks so we can use them
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-less");
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
    grunt.registerTask("build", ["clean", "less:compile", "cssmin"]);
};
