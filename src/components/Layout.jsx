import React, {Component} from 'react';


class Layout extends Component {

    style() {
        if (this.props.fit) {
            return {width: '100%', height: '100%'};
        } else {
            return {};
        }
    }

    componentWillMount() {
        console.log(this.props)
    }

    render() {
        return React.createElement('div', {className: 'layout', style: this.style()}, this.props.children);
    }
}

export default Layout;