import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import gulpif from 'gulp-if';
import sass from 'gulp-sass';
import yargs from 'yargs';
import templateCache from 'gulp-angular-templatecache';
import server from 'browser-sync';
import del from 'del';
import path from 'path';
import child from 'child_process';

const exec = child.exec;
const argv = yargs.argv;
const root = 'src/';

const paths = {
  dist: './dist/',
  scripts: [`${root}/app/**/*.js`],
  styles: [`${root}/sass/*.scss`, 'node_modules/bootstrap/dist/css/bootstrap.css'],
  fonts: 'node_modules/bootstrap/dist/fonts/*',
  templates: `${root}/app/**/*.html`,
  modules: [
    'angular/angular.js',
    'angular-ui-router/release/angular-ui-router.js',
    'bootstrap/dist/js/bootstrap'
  ],
  static: [
    `${root}/index.html`,
    `${root}/img/**/*`
  ]
};

server.create();

gulp.task('clean', cb => del(paths.dist + '**/*', cb));

gulp.task('templates', () => {
  return gulp.src(paths.templates)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(templateCache({
      root: 'app',
      standalone: true,
      transformUrl: function (url) {
        console.log('template.url', url.replace(path.dirname(url), '.'));
        return url.replace(path.dirname(url), '.');
      }
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('modules', ['templates'], () => {
  return gulp.src(paths.modules.map(item => 'node_modules/' + item))
.pipe(concat('vendor.js'))
  .pipe(gulpif(argv.deploy, uglify()))
  .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('styles', () => {
  return gulp.src(paths.styles)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest(paths.dist + 'css/'));
});

gulp.task('fonts', () => {
  return gulp.src(paths.fonts, { base: '' })
    .pipe(gulp.dest(paths.dist + 'fonts/'));
});

gulp.task('scripts', ['modules'], () => {
  return gulp.src([
      `${root}/app/**/*.module.js`,
      ...paths.scripts,
    './templates.js'
])
.pipe(concat('bundle.js'))
  .pipe(gulpif(argv.deploy, uglify()))
  .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('serve', () => {
  return server.init({
    files: [`${paths.dist}/**`],
    port: 4000,
    server: {
      baseDir: paths.dist
    }
  });
});

gulp.task('copy', ['clean'], () => {
  return gulp.src(paths.static, { base: 'src' })
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', ['serve', 'scripts'], () => {
  gulp.watch([paths.scripts, paths.templates], ['scripts']);
gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', [
  'copy',
  'styles',
  'fonts',
  'serve',
  'watch'
]);

gulp.task('production', [
  'copy',
  'scripts'
]);
