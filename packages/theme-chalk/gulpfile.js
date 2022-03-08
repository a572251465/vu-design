const gulpSass = require('gulp-sass')
const dartSass = require('sass')
const { series, src, dest } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const path = require('path')

/**
 * @author lihh
 * @description 处理css文件
 */
const compile = () => {
  const sass = gulpSass(dartSass)

  return src(path.resolve(__dirname, './src/*.scss')).pipe(sass.sync()).pipe(autoprefixer({})).pipe(cleanCSS()).pipe(dest('./dist/css'))
}

/**
 * @author lihh
 * @description 进行字体copy
 */
const copyFont = () => {
  return src(path.resolve(__dirname, './src/fonts/**')).pipe(cleanCSS()).pipe(dest('./dist/fonts'))
}

/**
 * @author lihh
 * @description 进行样式copy
 */
const copyStyle = () => {
  return src(path.resolve(__dirname, 'dist/**')).pipe(dest(path.resolve(__dirname, '../../dist/theme-chalk')))
}

const buildStyle = series(
  compile,
  copyFont,
  copyStyle
)

exports.default = buildStyle
