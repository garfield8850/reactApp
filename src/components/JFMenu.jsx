import React, {Component} from 'react';
import {Menu, Icon, Button} from 'antd';

const {SubMenu} = Menu;


/**
 * 菜单
 */
class JFMenu extends Component {

    constructor(props) {
        super(props);
    }


    componentWillMount() {
        console.log(this.props)
    }


    render() {
        var menuData = this.props.menuData;
        var array = [];
        menuData.forEach((n, i) => {
            array.push(this.callMe(n));
        })
        return (
            <div>
                <Menu theme="dark" mode="inline" onClick={this.props.intoMenu}>
                    {array}
                </Menu>
            </div>
        );
    }


    callMe(data) {
        if (data.children) {
            var children = []
            data.children.forEach((n, i) => {
                children.push(this.callMe(n));
            })
            return (
                <SubMenu key={data.id} title={<span><Icon type={data.icon}/><span>{data.text}</span></span>}>
                    {children}
                </SubMenu>
            );
        } else {
            return (<Menu.Item key={data.id} icon={data.icon} text={data.text} data={data}>
                <Icon type={data.icon}/>
                <span>{data.text}</span>
            </Menu.Item>);
        }
    }
}

export default JFMenu;