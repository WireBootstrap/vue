import { createApp } from 'vue'
import App from './App.vue'
import WireConfigDirective from './WireConfigDirective.js';

const app = createApp(App);

app.directive('wire-config', WireConfigDirective);

app.mount('#app');