import React, {Component} from 'react';


/**
 * 顶部布局
 */
class LayoutTop extends Component {


    componentWillMount() {
        console.log(this.props)
    }

    render() {
        return React.createElement('div', {className: 'layout-top', style: this.props.style}, this.props.children);
    }
}

export default LayoutTop;