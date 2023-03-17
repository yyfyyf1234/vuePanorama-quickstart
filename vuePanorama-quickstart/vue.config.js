module.exports = {
	publicPath: './',
	productionSourceMap: false,
	//changeOrigin:true,
	devServer: {
		host: 'localhost',
		port: 9527,
		open: true,
		proxy: {
			//配置跨域
			'/api': {
				target: "http://localhost:9527",
				changOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		},

	},



}
