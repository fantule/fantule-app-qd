import { createPinia } from 'pinia'
import piNiaPluginPersistedState from 'pinia-plugin-persistedstate'

// 创建 piNia 实例
const piNia = createPinia()

// 使用持久化插件
piNia.use(piNiaPluginPersistedState)

export default piNia