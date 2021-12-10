// eslint-disable-next-line no-underscore-dangle
export const baseURL = window._env_?.apiHost || 'localhost:8080'

export default {
  loginRoute: `${baseURL}/token`,
}
