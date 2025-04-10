module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: {
                    compress: true
                },
                files: {
                    'main.min.css' : 'source/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    './source/scripts/main.min.js' : 'main.js'
                }
            }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.registerTask('default', ['less', 'uglify'])
}