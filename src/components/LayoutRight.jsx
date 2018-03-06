import React, {Component} from 'react';


/**
 * 右布局
 */
class LayoutRight extends Component {
    render() {
        return React.createElement('div', {className: 'layout-right', style: this.props.style}, this.props.children);
    }
}

export default LayoutRight;