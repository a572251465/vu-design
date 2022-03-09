import { App } from 'vue'
import VuMessage from './src/instance'
import { ICommonInstall } from '@vu-design/utils/types'
;(VuMessage as ICommonInstall<any>).install = (app: App): void => {
  app.config.globalProperties.$Message = VuMessage
}

export { VuMessage }
export default VuMessage
