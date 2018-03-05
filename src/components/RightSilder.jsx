import React, {Component} from 'react';

import {List, Form, Switch} from 'antd';

const FormItem = Form.Item;

class RightSilder extends Component {

    constructor(props) {
        super(props)
        this.onMouseOut = this.onMouseOut.bind(this);
    }


    render() {
        return (
            <div ref="rightSilder" className="right_silder" onMouseOut={this.onMouseOut}>
                <Form>
                    <FormItem label="Switch">
                        <Switch/>
                    </FormItem>
                    <FormItem label="Switch">
                        <Switch/>
                    </FormItem>
                </Form>
            </div>
        )
    }

    show() {
        this.refs.rightSilder.className = 'right_silder show';
    }

    hide() {
        this.refs.rightSilder.className = 'right_silder hide';
    }

    onMouseOut() {
        // this.hide()
    }
}


export default RightSilder;