import minify from 'rollup-plugin-butternut'

export default {
  input: 'index.js',
  output: [
    {
      file: 'build/index.es.js',
      format: 'es'
    },
    {
      file: 'build/index.umd.js',
      format: 'umd',
      name: 'utils'
    }
  ],
  plugins: [minify()]
}
