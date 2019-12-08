/*
 * @Author: yaodongyi
 * @Date: 2019-12-06 16:26:12
 * @Description: 
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
