import axios from 'axios'
import routes from '../config/api.config'

import AuthenticationService from '../authentication/authenticationService'

export const authentication = new AuthenticationService(axios, routes)

export const api = {

}
