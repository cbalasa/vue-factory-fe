const req = require.context(".", true, /\.vue$/);

const components = {};

//create object with all components from shared folder and use it in main.js to register globally
req.keys().forEach((fileName) => {
	console.log(fileName);
	if (fileName === "./index.js") return;
	const componentName = fileName
		.substring(fileName.lastIndexOf("/") + 1)
		.replace(/(\.\/|\.vue)/g, "");
	components[componentName] = req(fileName).default;
});
export default components;
