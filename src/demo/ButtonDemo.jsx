import React, {Component} from 'react';
import {Button} from 'antd';


class ButtonDemo extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
                <div>
                    <Button type="primary" shape="circle" icon="search"/>
                    <Button type="primary" icon="search">Search</Button>
                    <Button shape="circle" icon="search"/>
                    <Button icon="search">Search</Button>
                    <br/>
                    <Button shape="circle" icon="search"/>
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search"/>
                    <Button type="dashed" icon="search">Search</Button>
                </div>
            </div>
        )
    }

}

export default ButtonDemo;
