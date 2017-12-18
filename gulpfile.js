var gulp = require('gulp')
var webpack = require('webpack')
var gutil = require('gulp-util')
var del = require('del')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var dest = 'public/dist'
var webpackConfig = require('./webpack')

// Clean build
gulp.task('build', ['delete-files', 'bundle-css-libs', 'webpack'])

// Delete all old build files
gulp.task('delete-files', function () {
  return del([`${dest}/*`], {dot: true})
})

gulp.task('sass', function () {
  return gulp.src(['src/**/*.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('public/css/dist'))
      .on('end', function () { gutil.log('SASS Built.') })
})

gulp.task('sass-minify', function () {
  return gulp.src(['src/**/*.scss'])
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('public/css/dist'))
      .on('end', function () { gutil.log('SASS Built.') })
})

gulp.task('watch-sass', function () {
  gulp.watch(['src/**/*.scss'], ['sass'])
    .on('change',
      function (file) {
        gutil.log(file.path.substring(file.path.lastIndexOf('\\') + 1) + ' was modified. Rebuilding SASS.')
      }
    )
})

// Concat all minified 3rd party css libraries
gulp.task('bundle-css-libs', ['delete-files'], function () {
  return gulp.src([
    'public/css/lib/**/*.min.css'
  ])
    .pipe(concat('lib.min.css'))
    .pipe(gulp.dest(dest))
})

// Run webpack
gulp.task('webpack', ['bundle-css-libs', 'delete-files'], function () {
  return new Promise(function (resolve, reject) {
    webpack(webpackConfig, function (err, stats) {
      if (err) {
        reject(err)
      } else {
        resolve(stats)
      }
    })
  })
  .then(function (stats) {
    gutil.log('[webpack]', stats.toString({
      colors: gutil.colors.supportsColor,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
      children: false,
      version: false,
      cached: false,
      cachedAssets: false,
      reasons: false,
      source: false,
      errorDetails: false
    }))
  })
  .catch(function (err) {
    throw new gutil.PluginError('webpack', err)
  })
})
