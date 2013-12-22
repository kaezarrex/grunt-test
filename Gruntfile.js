module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'src/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jsbeautifier: {
            modify: {
                src: ['Gruntfile.js', 'src/*.js'],
                options: {
                    config: '.jsbeautifyrc'
                }
            },
            verify: {
                src: ['Gruntfile.js', 'src/*.js'],
                options: {
                    mode: 'VERIFY_ONLY',
                    config: '.jsbeautifyrc'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('build', ['uglify']);
    grunt.registerTask('verify', ['jsbeautifier:verify', 'jshint']);
    grunt.registerTask('clean', ['jsbeautifier:modify', 'jshint']);

};
