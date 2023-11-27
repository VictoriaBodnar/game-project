import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    //baseURL: 'https://jsonplaceholder.typicode.com',
    /*headers: {
        'Access-Control-Allow-Origin': true,   
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },*/     
    params: {
        //key: 'c7b18323a47d40c394ea5b019646b1f5'
        key: '4e96fc8aca064832bd6ff774b1597ab0'
    }
})

