import React, {Component} from 'react';

class Header extends Component {



    style() {
        return {fontSize: '30px', lineHeight: '50px', color: '#fff', padding: '0 20px'}
    }

    render() {
        return (
            <div class="logo" style={this.props.style}>
                <i class="fa fa-windows" style={this.style()}></i>
            </div>
        )
    }
}

export default Header;