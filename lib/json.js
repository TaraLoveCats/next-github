const axios = require('axios')
const isServer = typeof window === 'undefined';
const colorsJson = require('../colors.json')

async function request({ method = 'GET', url }) {
    if (!url) {
        throw Error('url must be provided')
    }
    if (isServer) {
        const colors = JSON.parse(JSON.stringify(colorsJson));
        return {
            data: colors
        };
    } else {
        //`http://localhost:3000/${url}`
        return await axios({
            method,
            url
        });
    }
}

module.exports = {
    request
}