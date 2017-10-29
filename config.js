import minify from 'rollup-plugin-butternut'

export default {
  input: 'index.js',
  targets: [
    {
      file: 'build/index.js',
      format: 'cjs'
    },
    {
      file: 'build/index.umd.js',
      format: 'umd',
      name: 'utils'
    }
  ],
  plugins: [minify()]
}
