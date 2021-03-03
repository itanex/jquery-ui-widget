const GulpClient = require("gulp");
const gulp = require("gulp");

gulp.task('hello', () => { return console.log('hello world') })
// const ts = require("gulp-typescript");

// const tsProject = ts.createProject("tsconfig.json");


// gulp.task('default', () => {
//     return tsProject
//         .src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest('src/'))

// })



// var gulp = require('gulp');
// var concat = require('gulp-concat');

// var config = {
//     distRoot: './src/',
//     vendors: {
//         root: './src/lib/',
//         js: {
//             sources: [
//                 'node_modules/jquery/dist/jquery.min.js',
//                 'jquery-ui-1.11.4.custom/jquery-ui.min.js'
//             ],
//             dest: 'vendors.js'
//         },
//         css: {
//             sources: [
//                 'jquery-ui-1.11.4.custom/jquery-ui.min.css'
//             ],
//             dest: 'vendors.css'
//         }
//     }
// };

// gulp.task('default', [
//     'build:vendorjs', 
//     'build:vendorcss'
// ]);

// gulp.task('build:vendorjs', () => {
//     return gulp.src(config.vendors.js.sources)
//         .pipe(concat(config.vendors.js.dest))
//         .pipe(gulp.dest(config.vendors.root));
// });

// gulp.task('build:vendorcss', () => {
//     return gulp.src(config.vendors.css.sources)
//         .pipe(concat(config.vendors.css.dest))
//         .pipe(gulp.dest(config.vendors.root));
// });
