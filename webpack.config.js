const path = require('path');
module.exports = {
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ],
        },
        {
            test: /\.(png|gif|jpg)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],

          },
        ]
    },
     entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
};
