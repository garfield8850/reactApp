import React from 'react';
import axios from 'axios';

Object.defineProperty(React, 'http', {
    value: function (config) {
        return axios.request(config)
    }
})
Object.defineProperty(React, 'httpGet', {
    value: function (url, config) {
        return axios.get(url, config)
    }
})
Object.defineProperty(React, 'clone', {
    value: function (target) {
        return JSON.parse(JSON.stringify(target));
    }
})

