import { createSSRApp } from 'vue';
import App from './App.vue';
import piNia from './store';

export function createApp() {
  const app = createSSRApp(App);
  app.use(piNia);
  return {
    app,
  };
}
