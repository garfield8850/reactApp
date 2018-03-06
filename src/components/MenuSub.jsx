import React, {Component} from 'react';


/**
 * 子菜单
 */
class MenuSub extends Component {

    render() {
        return React.createElement('ul', {className: 'sub-menu'}, this.props.children)

    }
}

export default MenuSub;