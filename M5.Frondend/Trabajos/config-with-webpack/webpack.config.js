/* In JavaScript, `const path = require('path');` is importing the `path` module from the Node.js
standard library. The `path` module provides utilities for working with file and directory paths. */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  // AQUI SE AGREGAN LOS LOADERS DE WEBPACK
  module: {
    rules: [
      {
        // test: Significa que tengo que hacer una busqueda. La busqueda la puedo hacer utilizando REGEX.
        // Lo que significa: /\.html$/, es que voy a buscar todos los archivos que terminan en .html
        test: /\.html$/,
        // use: de lo que encotrè, que loader voy a aplicar
        use: [
          {
            loader: "html-loader", //Traducir HTML para que webpack lo entienda
            options: { minimize: true } //Añadir la opcion de minificar los archivos HTML que encuentre
          }
        ]
      }
    ]
  },
  // AQUI SE AGREGAN LOS PLUGINS DE WEBPACK
  plugins: [
    new HtmlWebpackPlugin({
      // QUE ARCHIVO HTML VA A SER LA BASE DE MI PROYECTO EN LA CARPETA src/
      template: "./src/index.html",
      // * QUE UNICO ARCHIVO DE HTML SE VA A GENERAR EN LA CARPETA dist/
      // * EL ARCHIVO DE CONFIGURACION DE WEBPACK SIMULA QUE SE TRABAJA DESDE LA CARPETA dist, POR LO QUE NO SE NECESITA ESPECIFICAR
      filename: "./index.html"
    })
  ]
};