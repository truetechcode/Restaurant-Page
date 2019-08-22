const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
      main: ['./src/javascript/index.js', './src/sass/index.scss']
    },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
    module: {
     rules: [
        {
          test: /\.js$/,
        },
        {
          test: /\.(sa|sc|c)ss$/,    
          use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                 {
                   loader: "css-loader",
                 },
                 {
                   loader: "postcss-loader"
                 },
                 {
                   loader: "sass-loader",
                   options: {
                     implementation: require("sass")
                   }
                 }
               ]
        }
    ]    
   },
   plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })  
  ]   
};