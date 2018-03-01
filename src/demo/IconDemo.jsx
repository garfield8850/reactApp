import React, {Component} from 'react';
import {Icon} from 'antd';


class IconDemo extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Icon type="question" style={{fontSize: 16, color: '#08c'}}/>
            </div>
        )
    }

}

export default IconDemo;
