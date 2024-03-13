import axios from "axios"

const BASE_URL = 'https://jsonplaceholder.typicode.com'



export const API = async (method, endpoint) => {

    return axios({
        method: method,
        url: `${BASE_URL}/${endpoint}`,
    })
        .then((res) => { return res })
        .catch((err) => { throw err })

}

 export const JasonGetAPI = () => API('GET','todos/1').then((res) => { return res }).catch((err) => { return err });



// EXAMPLE OF CALLING IN PAGE
// HomeJobData(data).then((res) => {
//  }).catch(err => {  return err; });
