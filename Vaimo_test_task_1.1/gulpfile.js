const gulp = require ('gulp');
const sass = require ('gulp-sass');
const wait = require('gulp-wait');
const livereload = require('gulp-livereload');
const spritesmith = require('gulp.spritesmith');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
    return gulp.src('./assets/scss/style.scss')
        .pipe(wait(200))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false
        }))
	    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
    livereload.listen();    
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('default', ["sass"]); 

gulp.task('sprite', function () {
    var spriteData = gulp.src('./assets/css/images/icons/*.png').pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      padding: 20
    }));
    return spriteData.pipe(gulp.dest('assets/css/sprites/'));
  });


//   gulp.task('sass', function () {
//     gulp.src('./assets/scss/style.scss')
//         .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
// 	    .pipe(gulp.dest('./assets/css'));
// });

