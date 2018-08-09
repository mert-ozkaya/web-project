const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );

/*
 *
 */
gulp.task( 'sass', () => {

  gulp.src( './sass/**/*.scss' )
    .pipe( sass().on( 'error', ( err ) => console.log( err ) ) )
    .pipe( gulp.dest( './assets/css' ) );
});

/*
 *
 */
gulp.task( 'sass-watch', () => {

  gulp.watch( './sass/**/*.scss', [ 'sass' ] );
});
