var gulp        = require('gulp'),
    scss        = require('gulp-sass'),
    pug         = require('gulp-pug'),
    browserSync = require('browser-sync');

gulp.task('scss', async () => {
    return gulp.src('app/scss/main.scss')
        .pipe(scss())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('pug', async () => {
    return gulp.src('app/pug/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', async () => {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scss-watch', async () => {
    gulp.watch('app/scss/*.scss', gulp.parallel('scss'));
});

gulp.task('pug-watch', async () => {
    gulp.watch('app/pug/*.pug', gulp.parallel('pug'));
});

gulp.task('default', gulp.parallel('scss', 'pug', 'browser-sync', 'scss-watch', 'pug-watch'));