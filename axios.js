import axios from "axios";

const url = axios.create({
    baseUrl: 'http://178.63.13.157:8090/mock-api/api/'
})

export default url