var gulp = require('gulp')
var pug = require('gulp-pug')
var browserSync = require('browser-sync').create()

gulp.task('pug', function() {
  gulp.src('./src/*.pug')
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('./out/'))
})

gulp.task('pug-watch', ['pug'], function(done) {
  browserSync.reload()
  done()
})

gulp.task('serve', ['pug'], function() {
  browserSync.init({
    server: {
      baseDir: "./out"
    },
    notify: false
  })

  gulp.watch('./src/*.pug', ['pug'])
})
