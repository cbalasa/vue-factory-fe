import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/main.css";
Vue.config.productionTip = false;

//font-awesome setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

//register components globally
import Components from "@/components/shared/index";
for (let key in Components) {
	Vue.component(key, Components[key]);
}

//import JSON file

import projectJSON from "./data/project.json";
Vue.prototype.$projectJSON = projectJSON;
new Vue({
	router,
	render: (h) => h(App)
}).$mount("#app");
