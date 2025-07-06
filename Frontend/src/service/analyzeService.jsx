import axios from 'axios';

const base_url = "http://localhost:52950/api/mental"

export const create = async(text) =>{
    const response = await axios.post(base_url,{text}, {
        headers : {
            'Content-Type':'application/json',
        },
    });

    return response.data;
}

