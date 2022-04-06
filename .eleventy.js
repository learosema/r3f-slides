export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img/*.png');
  eleventyConfig.addPassthroughCopy('src/css/*.css');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
}
