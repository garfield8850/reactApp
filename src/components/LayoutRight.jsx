import React, {Component} from 'react';


class LayoutRight extends Component {
    render() {
        return React.createElement('div', {className: 'layout-right', style: this.props.style}, this.props.children);
    }
}

export default LayoutRight;