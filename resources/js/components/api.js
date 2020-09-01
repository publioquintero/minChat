import axios from 'axios';
import { URLserver } from './functions'

axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    'Accept': "application/json",
}

export default axios.create({
    baseURL: URLserver
})