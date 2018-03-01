import React, {Component} from 'react';
import {Layout, Form, Icon, Input, Button} from 'antd';

import tool, {Style} from '../common/react-tool';

const {Header, Content} = Layout;
const FormItem = Form.Item;


class Demo extends Component {

    constructor() {
        super();
    }

    fromStyle() {
        return {
            width: '400px',
            margin: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        }

    }


    handleSubmit(e) {
        // e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('Received values of form: ', values);
        //     }
        // });
        this.props.history.push('/');
    }


    render() {
        return (
            <Layout style={tool.fit}>
                <Header></Header>
                <Content style={tool.fit}>
                    <Form style={this.fromStyle()}>
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password" placeholder="Password"/>
                        </FormItem>
                        <FormItem><Button type="primary" style={{width: '100%'}} onClick={this.handleSubmit.bind(this)}>登录</Button>
                        </FormItem>
                    </Form>
                </Content>
            </Layout>
        )
    }

}

export default Demo;
