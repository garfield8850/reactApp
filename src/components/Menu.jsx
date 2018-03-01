import React, {Component} from 'react';
import MenuItem from 'MenuItem'
import MenuSub from "./MenuSub";

class Menu extends Component {

    componentWillMount() {
        console.log(this.props)
    }

    expand() {
        alert(3)
    }

    render() {
        var menuData = this.props.menuData;
        var array = [];
        menuData.forEach((n, i) => {
            array.push(this.callMe(n));
        })
        return React.createElement('ul', {className: 'menu'}, array)
    }


    callMe(data) {
        if (data.children) {
            var children = []
            data.children.forEach((n, i) => {
                children.push(this.callMe(n));
            })
            console.log(children)
            return (
                <MenuItem key={data.id} icon={data.icon} text={data.text} data={data} callParent={this.expand}>
                    <MenuSub>
                        {children}
                    </MenuSub>
                </MenuItem>);
        } else {
            return (<MenuItem key={data.id} icon={data.icon} text={data.text} data={data}></MenuItem>);
        }
    }
}

export default Menu;