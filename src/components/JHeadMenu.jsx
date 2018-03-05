import React, {Component} from 'react';
import {Dropdown, Menu, Icon, Avatar, Badge, Popover} from 'antd';
import RightSilder from "RightSilder";

class JHeadMenu extends Component {


    constructor(props) {
        super(props);
        this.changeMode = this.changeMode.bind(this);
        this.menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"> <Icon type="laptop"/> 锁屏</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" onClick={this.changeMode}> <Icon type="code"/> 切换模式</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"> <Icon type="setting"/> 系统设置</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"> <Icon type="unlock"/> 修改密码</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/"> <Icon type="poweroff"/> 退出登录</a>
                </Menu.Item>
            </Menu>
        );
    }

    changeMode() {
        this.refs.rightSilder.show()
    }


    render() {
        const text = <span>Title</span>;
        const content = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        );
        return (
            <div className="user_right">
                <Popover placement="bottomRight" title={text} content={content}>
                    <Badge className="message_badge" count={15}>
                        <Icon className="message_icon" type="mail"/>
                    </Badge>
                </Popover>
                <Dropdown overlay={this.menu} placement="bottomRight">
                    <div className="user_dropdown"><Avatar className="user_photo" icon="user"/><span className="login_name">admin</span></div>
                </Dropdown>
                <RightSilder ref="rightSilder"></RightSilder>
            </div>
        )
    }

}

export default JHeadMenu;