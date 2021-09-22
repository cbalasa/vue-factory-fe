const req = require.context(".", false, /\.vue$/);

const components = {};

//create object with all components from shared folder and use it in main.js to register globally
req.keys().forEach((fileName) => {
	if (fileName === "./index.js") return;
	const componentName = fileName.replace(/(\.\/|\.vue)/g, "");
	components[componentName] = req(fileName).default;
});
console.log(components);
export default components;
