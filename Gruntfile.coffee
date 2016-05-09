module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt);

  grunt.initConfig

    # The clean task ensures the parsed css is removed
    clean: [
      "_site/assets/"
      "assets"
    ]

    # Automatically run a task when a file changes
    watch:
      all:
        files: [
          "less/*.less"
          "less/sections/*"
          "js/*"
        ]
        tasks: "build"


    # Compile specified less files
    less:
      compile:
        options:
          # These paths are searched for @imports
          paths: ["less"]

        files:
          "css/screen.css": "less/screen.less"


    # Compress generated css files
    cssmin:
      "assets/screen.min.css": [
        "bower_components/bootstrap/dist/css/bootstrap.css"
        "css/screen.css"
      ]


    # Add shell tasks
    shell:
      copyCss:
        command: "cp assets/screen.min.css _site/assets/screen.min.css"

      copyJs:
        command: "cp assets/site.min.js _site/assets/site.min.js"

      copyAssets:
        command: "cp -R assets _site"

      build:
        command: "jekyll build"

      serve:
        command: "jekyll serve --watch --drafts --baseurl=/"

      buildpdf:
        command: "./bin/md2resume pdf _includes/resume.md ./ --template=modern"

      copyresume:
        command: "mv ./resume.pdf ./Sean-Fisher-Resume.pdf"

    uglify:
      site:
        files:
          "assets/site.min.js": [
            "bower_components/modernizr/modernizr.js"
            "bower_components/jquery/jquery.js"
            "bower_components/bootstrap/js/transition.js"
            "bower_components/bootstrap/js/tooltip.js"
            "bower_components/bootstrap/js/dropdown.js"
            "bower_components/bootstrap/js/button.js"
            "bower_components/bootstrap/js/collapse.js"
            "bower_components/bootstrap/js/modal.js"
            "bower_components/bootstrap/js/popover.js"
            "js/site.js"
          ]

    concurrent:
      server:
        tasks: [
          "watch:all"
          "shell:serve"
        ]
        options:
          logConcurrentOutput: true


  # The default task will show the usage
  grunt.registerTask "default", "Prints usage", ->
    grunt.log.writeln ""
    grunt.log.writeln "Seanfisher.co Development"
    grunt.log.writeln "------------------------"
    grunt.log.writeln ""
    grunt.log.writeln "* run 'grunt --help' to get an overview of all commands."
    grunt.log.writeln "* run 'grunt dev' to start developing."
    grunt.log.writeln "* run `grunt resume` to build the PDF resume"
    return

  # The dev task will be used during development
  grunt.registerTask "dev", [
    "build"
    "concurrent:server"
  ]

  grunt.registerTask "build", [
    "clean"
    "less:compile"
    "cssmin"
    "uglify"
  ]

  grunt.registerTask "resume", [
    "shell:buildpdf"
    "shell:copyresume"
  ]

  return