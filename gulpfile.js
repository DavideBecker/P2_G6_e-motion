'use strict';

var gulp            = require('gulp'),
    path            = require('path'),
    colors          = require('colors'),
    sequence        = require('run-sequence'),
    gutil           = require('gulp-util'),
    clean           = require('gulp-clean'),

    eslint          = require('gulp-eslint'),

    sass            = require('gulp-sass'),
    cssnano         = require('gulp-cssnano'),
    sourcemaps      = require('gulp-sourcemaps'),
    autoprefixer    = require('gulp-autoprefixer'),

    uglify          = require('gulp-uglify'),
    babel           = require('gulp-babel'),
    // concat          = require('gulp-concat'),
    // include         = require('gulp-include'),

    imagemin        = require('gulp-imagemin')

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

var eslintErrorSeverity = ['none', 'Warning'.warn, 'FATAL'.error];

var baseUrl = './';
var distUrl = 'assets/';
var vendorFolder = 'vendor/';

var src = {
    'css': baseUrl + 'src/styles/',
    'js': baseUrl + 'src/scripts/',
    'img': baseUrl + 'src/images/**',
    'svg': baseUrl + 'src/vectors/**',
    'data': baseUrl + 'src/data/**',
    'fonts': baseUrl + 'src/fonts/**',

    'jsMain': 'main.js',
    'cssMain': 'main.sass'
}

var dist = {
    'css': baseUrl + distUrl + 'css/',
    'js': baseUrl + distUrl + 'js/',
    'img': baseUrl + distUrl + 'img/',
    'svg': baseUrl + distUrl + 'svg/',
    'data': baseUrl + distUrl + 'data/',
    'fonts': baseUrl + distUrl + 'fonts/',
}

var scriptPipe = [src.js + '**/*', '!' + src.js + vendorFolder + '**']

function errorHandler(err) {
    console.log()
    console.log('    ERROR'.red)
    console.log('    Plugin', err.plugin.help, 'encountered', err.name)
    console.log('    In', err.fileName.warn, 'on line', String(err.loc.line + ':' + err.loc.column).error)
    console.log()
    console.log('    ', err.message)
    console.log(err.codeFrame)
    console.log()
}

function fixedLength(str, len) {
    return str + Array(len).join(' ').slice(-len + str.length);
}

gulp.task('styles', function() {
    gulp.src(src.css + src.cssMain)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest(dist.css))

    gulp.src(src.css + vendorFolder + '/**').pipe(gulp.dest(dist.css + vendorFolder));
})

gulp.task('scripts:lint', function() {
    gulp.src(scriptPipe)
        .pipe(eslint({
            fix: false,
            useEslintrc: true
        }))
        .pipe(eslint.result((result) => {
            if(result.messages.length) {
                console.log('');
                console.log('    ESLint result for', result.filePath);
                console.log('    # Warnings: ', result.warningCount);
                console.log('    # Errors:   ', result.errorCount);
                result.messages.forEach(function(err) {
                    console.log(
                        '    ' +
                        fixedLength(err.ruleId ? err.ruleId : '', 32).info +
                        fixedLength('Line ' + err.line + ':' + err.column, 16).verbose +
                        fixedLength(eslintErrorSeverity[err.severity], 10) + ' ' + err.message);
                });
            }
        }))
})

gulp.task('scripts', ['scripts:lint'], function() {
    gulp.src(scriptPipe)
        .pipe(sourcemaps.init())
        // .pipe(concat(src.jsMain)).on('error', errorHandler)
        // .pipe(include({
        //     includePaths: [
        //         path.join(__dirname, 'src', 'scripts'),
        //     ]
        // }))
        // .on('error', console.log)
        // .pipe(gulp.dest(dist.js))
        .pipe(babel()).on('error', errorHandler)
        .pipe(uglify()).on('error', errorHandler)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dist.js))

    gulp.src(src.js + vendorFolder + '/**').pipe(gulp.dest(dist.js + vendorFolder));
});

gulp.task('images', function() {
    gulp.src(src.img)
        .pipe(imagemin({
            progressive: true
        }))

        .pipe(gulp.dest(dist.img))
});

gulp.task('vectors', function() {
    gulp.src(src.svg)
        .pipe(gulp.dest(dist.svg))
});

gulp.task('data', function() {
    gulp.src(src.data)
        .pipe(gulp.dest(dist.data))
});

gulp.task('fonts', function() {
    gulp.src(src.fonts)
        .pipe(gulp.dest(dist.fonts))
});

//Images aren't included here as even a few can easily impact performance
gulp.task('watch', function() {
    gulp.watch(src.css + '**', ['styles']);

    gulp.watch(src.js + '**', ['scripts']);

    gulp.watch(src.sprites, ['sprites']);

    gulp.watch(src.svg, ['vectors']);

    gulp.watch(src.data, ['data']);

    gulp.watch(src.fonts, ['fonts']);
})

gulp.task('clean', function() {
    return gulp.src(baseUrl + distUrl)
        .pipe(clean());
})

gulp.task('default', function() {
    sequence('clean', ['styles', 'scripts', 'images', 'vectors', 'data', 'fonts']);
})

gulp.task('pages:clean', function() {
    return gulp.src('./docs/').pipe(clean());
})

gulp.task('pages:generate', function() {
    gulp.src('index.html').pipe(gulp.dest('./docs/'))
    gulp.src(baseUrl + distUrl + '**').pipe(gulp.dest('./docs/' + baseUrl + distUrl))
})

gulp.task('pages', function() {
    sequence(['pages:clean'], ['pages:generate']);
})
