import React, {Component} from 'react';


class LayoutLeft extends Component {
    render() {
        return React.createElement('div', {className: 'layout-left', style: this.props.style}, this.props.children);
    }
}

export default LayoutLeft;