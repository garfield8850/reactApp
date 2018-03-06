import React, {Component} from 'react';


/**
 * 中间布局
 */
class LayoutCenter extends Component {
    render() {
        return React.createElement('div', {className: 'layout-center', style: this.props.style}, this.props.children);
    }
}

export default LayoutCenter;