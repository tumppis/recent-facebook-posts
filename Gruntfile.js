module.exports = function(grunt) {

	// Config
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// define tasks
		uglify: {
			files: {
				expand: true,
				src: [ 'assets/js/*.js', '!assets/js/*.min.js' ],  // source files
				ext: '.min.js'   // replace .js with .min.js
			}
		},

		cssmin: {
			minify: {
				expand: true,
				src: [ 'assets/css/*.css', '!assets/css/*.min.css' ],
				ext: '.min.css'
			}
		},

		watch: {
			js:  {
				files: 'assets/js/*.js',
				tasks: [ 'uglify' ]
			},
			css: {
				files: 'assets/css/*.css',
				tasks: [ 'cssmin' ]
			}
		},

		// I18n
		addtextdomain: {
			options: {
				textdomain: '<%= pkg.name %>'
			},
			php: {
				files: {
					src: [
						'*php', '**/*.php', '!node_modules/**', '!includes/library/**'
					]
				}
			}
		},

		checktextdomain: {
			options: {
				text_domain: '<%= pkg.name %>',
				keywords: [
					'__:1,2d',
					'_e:1,2d',
					'_x:1,2c,3d',
					'_ex:1,2c,3d',
					'_n:1,2,4d',
					'_nx:1,2,4c,5d',
					'_n_noop:1,2,3d',
					'_nx_noop:1,2,3c,4d',
					'esc_attr__:1,2d',
					'esc_html__:1,2d',
					'esc_attr_e:1,2d',
					'esc_html_e:1,2d',
					'esc_attr_x:1,2c,3d',
					'esc_html_x:1,2c,3d'
				]
			},
			files: {
				expand: true,
				src: [
					'**/*.php', '!node_modules/**'
				]
			}
		},

		makepot: {
			plugin: {
				options: {
					domainPath: '/languages',
					potFilename: '<%= pkg.name %>.pot',
					processPot: function(pot) {
						pot.headers['report-msgid-bugs-to'] = 'https://wordpress.org/support/plugin/recent-facebook-posts\n';
						pot.headers['plural-forms'] = 'nplurals=2; plural=n != 1;';
						pot.headers['last-translator'] = 'Danny van Kooten <hi@dannyvankooten.com>\n';
						pot.headers['x-generator'] = 'grunt-wp-i18n 0.4.4';
						pot.headers['x-poedit-basepath'] = '.';
						pot.headers['x-poedit-language'] = 'English';
						pot.headers['x-poedit-country'] = 'UNITED STATES';
						pot.headers['x-poedit-sourcecharset'] = 'utf-8';
						pot.headers['x-poedit-keywordslist'] = '__;_e;_x:1,2c;_ex:1,2c;_n:1,2; _nx:1,2,4c;_n_noop:1,2;_nx_noop:1,2,3c;esc_attr__; esc_html__;esc_attr_e; esc_html_e;esc_attr_x:1,2c; esc_html_x:1,2c;';
						pot.headers['x-poedit-bookmarks'] = '';
						pot.headers['x-poedit-searchpath-0'] = '.';
						pot.headers['x-textdomain-support'] = 'yes';
						return pot;
					},
					type: 'wp-plugin'
				}
			}
		}

	});

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-checktextdomain');
	grunt.loadNpmTasks('grunt-wp-i18n');

	// register tasks
	grunt.registerTask('default', [ 'uglify', 'cssmin', 'addtextdomain', 'makepot' ]);
	grunt.registerTask('check', [ 'checktextdomain' ]);
};