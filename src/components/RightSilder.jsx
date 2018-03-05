import React, {Component} from 'react';

import {Card, List, Form, Switch, Radio} from 'antd'
import PropTypes from 'prop-types';

const FormItem = Form.Item;

class RightSilder extends Component {

    constructor(props) {
        super(props)
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.state = {
            value: 1
        }
        this.thread = null;
    }


    onChange(e) {
        this.setState({
            value: e.target.value,
        });
        this.context.changeMode(e.target.value)
    }

    render() {
        const RadioGroup = Radio.Group;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <div ref="rightSilder" className="right_silder" onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver}>
                <Card title="主题风格" bordered={false}>
                    <RadioGroup onChange={e => this.onChange(e)} value={this.state.value}>
                        <Radio style={radioStyle} value={1}>模式一</Radio>
                        <Radio style={radioStyle} value={2}>模式二</Radio>
                        <Radio style={radioStyle} value={3}>模式三</Radio>
                        <Radio style={radioStyle} value={4}>模式四</Radio>
                    </RadioGroup>
                </Card>
                <Card title="其他设置" bordered={false}>
                    <List>
                        <List.Item>
                            <div className="list_item">设置1：<Switch/></div>
                        </List.Item>
                        <List.Item>
                            <div className="list_item">设置1：<Switch/></div>
                        </List.Item>
                        <List.Item>
                            <div className="list_item">设置1：<Switch/></div>
                        </List.Item>
                        <List.Item>
                            <div className="list_item">设置1：<Switch/></div>
                        </List.Item>
                        <List.Item>
                            <div className="list_item">设置1：<Switch/></div>
                        </List.Item>
                    </List>
                </Card>
            </div>
        )
    }

    show() {
        this.refs.rightSilder.className = 'right_silder show';
    }

    hide() {
        this.refs.rightSilder.className = 'right_silder hide';
    }

    onMouseOver() {
        clearTimeout(this.thread);
        this.thread = null;
    }


    onMouseOut() {
        if (!this.thread) {
            this.thread = setTimeout(() => {
                this.hide()
                clearTimeout(this.thread);
                this.thread = null;
            }, 1000)
        }
    }

}

RightSilder.contextTypes = {
    changeMode: PropTypes.func
};
export default RightSilder;