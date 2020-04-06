const path = require('path');

var config =  {
	mode: "development",
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "source/javascripts"),
		filename: "acelog.js",
	},
	module: {
		rules: [{ 
			test: /\.tsx?$/,
			loader: "ts-loader" 
		}]
	}
}

module.exports = (env, argv) => {
	if (argv.mode !== 'production') {
		config.devtool = 'source-map';
	}
	return config
}