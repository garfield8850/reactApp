import React, {Component} from 'react';

class JFrame extends Component {


    constructor(props) {
        super(props);
        this.state = {
            path: ''
        }

    }


    render() {
        return (
            <iframe src={this.props.src} style={{width: '100%', height: '100%', border: 'none'}}></iframe>
        )
    }

    componentDidMount() {
        this.setState({path: this.props.src});
    }

}

export default JFrame;