import React, {Component} from 'react';


/**
 * 左布局
 */
class LayoutLeft extends Component {
    render() {
        return React.createElement('div', {className: 'layout-left', style: this.props.style}, this.props.children);
    }
}

export default LayoutLeft;