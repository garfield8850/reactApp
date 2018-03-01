import React, {Component} from 'react';


class LayoutBottom extends Component {
    render() {
        return React.createElement('div', {className: 'layout-bottom', style: this.props.style}, this.props.children);
    }
}

export default LayoutBottom;