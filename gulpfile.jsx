const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

const srcScss = 'src/scss/**/*.scss';

function css(done) {
	src(srcScss)
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(dest('src'));

	done();
}

function dev(done) {
	watch(srcScss, css);

	done();
}

exports.css = css;
exports.dev = parallel(dev);
exports.plumber = plumber;
