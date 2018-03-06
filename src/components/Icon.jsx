import React, {Component} from 'react';


/**
 * 图标
 */
class Icon extends Component {

    render() {
        return (<i className={'fa' + this.props.class} style={this.props.style}></i>);
    }
}

export default Icon;