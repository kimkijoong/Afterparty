var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
/webpack.config.js
HTML 및 JS 작성
<!DOCTYPE html>
<html>

   <head>
      <meta charset="UTF-8">
      <title>React App</title>
   </head>

   <body>
      <div id="root"></div>
      <script src="bundle.js"></script>
   </body>

</html>
/public/index.html
HTML 및 JS 작성
import React from 'react';

class App extends React.Component {
    render(){

        return (
                <h1>Hello React Skeleton</h1>
        );
    }
}

export default App;
/src/components/App.js
Time to Code, Again.
src/components/ContactInfo.js
import React from 'react';

export default class ContactInfo extends React.Component {
    render() {
        return (
            <div>{this.props.contact.name} {this.props.contact.phone}</div>
        );
    }
}
점심 휴식
12:30 ~ 13:30
