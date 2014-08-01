module.exports = function(grunt) {
	// load the jshint module
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// initialization
	grunt.initConfig({
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				ignores: ['js/**/bad-code.js']
			},
			// work on the Gruntfile and all directories with the files ending in js 
			target1: ['Gruntfile.js', 'js/**/*.js']
		}
	});
	// Define the default task
	grunt.registerTask('default', ['jshint']);
};
