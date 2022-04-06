const { src, dest } = require('gulp');
const { createGulpEsbuild } = require('gulp-esbuild');
const { glsl } = require('esbuild-plugin-glsl');
const gulpEsbuild = createGulpEsbuild({ incremental: true });

// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

function build() {
  return src('./src/index.ts')
    .pipe(
      gulpEsbuild({
        outfile: 'outfile.js',
        bundle: true,
        format: 'esm',
        minify: isProduction,
        plugins: [glsl({ minify: isProduction })],
      })
    )
    .pipe(dest('./dist'));
}

module.exports = build;
