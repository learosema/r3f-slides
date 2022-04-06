import { dest, src } from 'gulp';
import imagemin from 'gulp-imagemin';
// Grabs all images, runs them through imagemin
// and plops them in the dist folder
const images = async () => {
  // We have specific configs for jpeg and png files to try
  // to really pull down asset sizes
  return src('./src/images/**/*')
    .pipe(
      imagemin(
        [
          imagemin.mozjpeg({ quality: 60, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5, interlaced: null }),
        ],
        {
          silent: true,
        }
      )
    )
    .pipe(dest('./dist/images'));
};

module.exports = images;
