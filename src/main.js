import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/main.css";
Vue.config.productionTip = false;

//font-awesome setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);

//register components globally
import Components from "@/components/shared/index";
for (let key in Components) {
	Vue.component(key, Components[key]);
}

new Vue({
	router,
	render: (h) => h(App)
}).$mount("#app");
