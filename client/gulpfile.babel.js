import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import browserSync from "browser-sync";
import clean from "gulp-clean";
import imagemin, { mozjpeg, svgo } from "gulp-imagemin";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import gulpif from "gulp-if";
import browserify from "browserify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";

const sass = gulpSass(dartSass);

const configPath = {
  src: {
    html: "./src/*.html",
    scss: "./src/scss/main.scss",
    js: "./src/js/main.js",
    images: "./src/image/**/*.*",
  },
  prod: {
    self: "./prod",
    html: "./prod",
    scss: "./prod/style",
    js: "./prod/js",
    images: "./prod/img",
  },

  setEnv() {
    this.isProd = process.argv.includes("--prod");
    this.isDev = !this.isProd;
  },
};

const htmlBuild = () =>
  gulp
    .src(configPath.src.html)
    .pipe(gulp.dest(configPath.prod.html))
    .pipe(browserSync.stream());

const imagesBuild = () =>
  gulp
    .src(configPath.src.images)
    .pipe(gulp.dest(configPath.prod.images))
    .pipe(browserSync.stream());

const imageminBuild = () =>
  gulp
    .src(configPath.src.images)
    .pipe(imagemin([mozjpeg({ quality: 80 }), svgo()]))
    .pipe(gulp.dest(configPath.prod.images))
    .pipe(browserSync.stream());

const jsBuild = () =>
  browserify(configPath.src.js, { debug: true })
    .transform("babelify", { presets: ["@babel/preset-env"] })
    .bundle()
    .on("error", function browserifyError(error) {
      console.log(error.stack);
      this.emit("end");
    })
    .pipe(source("main.min.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulpif(configPath.isProd, uglify()))
    .pipe(gulp.dest(configPath.prod.js))
    .pipe(browserSync.stream());

const scssBuild = () =>
  gulp
    .src(configPath.src.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(configPath.isProd, autoprefixer({ cascade: false })))
    .pipe(gulpif(configPath.isProd, cleanCSS({ compatibility: "ie8" })))
    .pipe(gulp.dest(configPath.prod.scss))
    .pipe(browserSync.stream());

const server = browserSync.create();

const watcher = (callback) => {
  server.init({
    server: {
      baseDir: configPath.prod.self,
    },
  });
  gulp.watch(configPath.src.html, htmlBuild).on("change", server.reload);
  gulp.watch("./src/scss/**/*.scss", scssBuild).on("change", server.reload);
  gulp.watch(configPath.src.images, imageminBuild).on("change", server.reload);
  gulp.watch("./src/js/**/*.js", jsBuild).on("change", server.reload);

  callback();
};

const cleanTask = () =>
  gulp.src(configPath.prod.html, { allowEmpty: true }).pipe(clean());

gulp.watch(configPath.src.html, htmlBuild);
gulp.watch(configPath.src.scss, scssBuild);
gulp.watch(configPath.src.js, jsBuild);
gulp.watch(configPath.src.images, imagesBuild);
gulp.watch(configPath.src.images, imageminBuild);

configPath.setEnv();

gulp.task(
  "dev",
  gulp.series(
    cleanTask,
    htmlBuild,
    jsBuild,
    scssBuild,
    imagesBuild,
    imageminBuild,
    watcher
  )
);

gulp.task(
  "build",
  gulp.series(
    cleanTask,
    htmlBuild,
    jsBuild,
    scssBuild,
    imagesBuild,
    imageminBuild
  )
);

// gulp.series(htmlBuild, imagesBuild, scssBuild);
// gulp.parallel(htmlBuild, imagesBuild, scssBuild);
