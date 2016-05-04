const path=require("path");
const PATHS={
	app:path.join(__dirname,'app'),
	build:path.join(__dirname,'build')
}

module.exports={
	//Entry accepts a path or an object of entries.
	//we'll be using the latter form given it's convenient with more complex configuration
	entry:{
		app:PATHS.app
	},
	output:{
		path:PATHS.build,
		filename:'bundle.js'
	}
}