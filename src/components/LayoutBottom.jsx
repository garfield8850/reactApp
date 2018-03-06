import React, {Component} from 'react';



/**
 * 下布局
 */
class LayoutBottom extends Component {
    render() {
        return React.createElement('div', {className: 'layout-bottom', style: this.props.style}, this.props.children);
    }
}

export default LayoutBottom;