const path = require ("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry : {
        app : "./src/index.js"
    },

    output : {
      publicPath: '/',
        path : path.join(__dirname , "build"),
        filename : 'js/bundle.js',
        assetModuleFilename: 'images/[name].[ext]'
    },

    devServer: {
        static: {
          directory: path.join(__dirname, "build"),
        },
        port: 9000,
        devMiddleware: {
          writeToDisk: true,
        },
        hot: false, 
        liveReload: true,
        open: true,
      },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
      
    module : {
        rules: [
            {
                test: /\.(sass|css|scss)$/,
              use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
              ],
            },
            {
              test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
              type: 'asset/resource'
           },
          
            {

              test: /\.html$/i,
  
              loader: 'html-loader',
  
            },

            {
              test: require.resolve("jquery"),
              loader: "expose-loader",
              options: {
                exposes: ["$", "jQuery"],
              },
            },
          ],
    },

    plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/projects.html',
        filename: 'projects.html',
      }),
      new HtmlWebpackPlugin({
        template: './src/project-details.html',
        filename: 'project-details.html',
      }),
      new HtmlWebpackPlugin({
        template: './src/blog.html',
        filename: 'blog.html',
      }),
      new HtmlWebpackPlugin({
        template: './src/blog-details.html',
        filename: 'blog-details.html',
      }),
      new HtmlWebpackPlugin({
        template: './src/add-blog.html',
        filename: 'add-blog.html',
      }),
      new HtmlWebpackPlugin({
        template: './src/about.html',
        filename: 'about.html',
      }),
      new HtmlWebpackPlugin({
        template: './src/contact.html',
        filename: 'contact.html',
      }),

      new MiniCssExtractPlugin({
        filename: "css/style.css"
      })
    ],
  mode : "development",
};