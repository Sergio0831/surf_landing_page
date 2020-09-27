const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const del = require("del");
const autoprefixer = require("gulp-autoprefixer");
const { src, series, parallel, dest, watch } = require("gulp");

gulp.task("clean", async function () {
  del.sync("dist");
});

scss = () => {
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 8 versions"],
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({ stream: true }));
};

css = () => {
  return gulp
    .src([
      "node_modules/normalize.css/normalize.css",
      "node_modules/slick-carousel/slick/slick.css",
      "node_modules/animate.css/animate.css",
    ])
    .pipe(concat("_libs.scss"))
    .pipe(gulp.dest("app/scss"))
    .pipe(browserSync.reload({ stream: true }));
};

html = () => {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
};

script = () => {
  return gulp.src("app/js/*.js").pipe(browserSync.reload({ stream: true }));
};

js = () => {
  return gulp
    .src([
      "node_modules/slick-carousel/slick/slick.js",
      "node_modules/wow.js/dist/wow.js",
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"))
    .pipe(browserSync.reload({ stream: true }));
};

browserReload = () => {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });

  gulp.watch("app/scss/**/*.scss", scss);
  gulp.watch("app/*.html", html);
  gulp.watch("app/js/*.js", script);
};

build = (done) => {
  let buildHtml = gulp.src("app/**/*.html").pipe(gulp.dest("dist"));

  let buildCss = gulp.src("app/css/**/*.css").pipe(gulp.dest("dist/css"));

  let buildJs = gulp.src("app/js/**/*.js").pipe(gulp.dest("dist/js"));

  let buildImg = gulp.src("app/img/**/*.*").pipe(gulp.dest("dist/img"));

  done();
};

exports.build = series("clean", build);

exports.default = parallel(html, script, css, scss, js, browserReload);
