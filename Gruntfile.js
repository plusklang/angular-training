module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'src/assets/styles/main.css': 'src/assets/styles/sass/main.scss',       // 'destination': 'source'
      }
    }
  },

  copy: {
    main: {
      expand: true,
      cwd: 'src/assets/images',
      src: '**',
      dest: 'dist/assets/images',
    },
  },

  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'dist/assets/scripts/main.min.js': ['src/assets/scripts/main.js']
      }
    }
  },

  minifyHtml: {
    options: {
      cdata: true
    },
    dist: {
      files: {
        'dist/index.html': 'src/index.html'
      }
    }
  },

  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'src/assets/styles',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/assets/styles',
        ext: '.min.css'
      }]
    }
  }
  /*
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
      dest: 'dist/built.js',
    },
  },
  */
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.registerTask('default', ['sass', 'copy', 'uglify', 'minifyHtml', 'cssmin']);

};