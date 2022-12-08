import { persistence } from '../../../store/persistence'
import proxyWithPersist from '../../../store/valtio-persist'
import { DEFAULT_SETTINGS, INITIAL_SETTINGS } from './initial'

const particleSettings = proxyWithPersist({
  name: 'particleSettings',
  initialState: INITIAL_SETTINGS,
  version: 0,
  migrations: {},
  ...persistence,
})

export const resetSettings = () => Object.assign(particleSettings, DEFAULT_SETTINGS)

export default particleSettings
