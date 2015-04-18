/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: port,
					base: '.',
                    livereload: true,
                    open: true
				}
			}
		},

		watch: {
            html: {
                files: [ 'index.html']
            }
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );
};
