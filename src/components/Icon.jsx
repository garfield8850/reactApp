import React, {Component} from 'react';


class Icon extends Component {

    render() {
        return (<i className={'fa' + this.props.class} style={this.props.style}></i>);
    }
}

export default Icon;