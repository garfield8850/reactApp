import React, {Component} from 'react';

class JFrame extends Component {


    constructor(props) {
        super(props);
        console.log(this.props.src)
        this.state = {
            path: ''
        }
    }


    render() {
        return (
            <iframe src={this.state.path} style={{width: '100%', height: '100%', border: 'none'}}></iframe>
        )
    }

    componentDidMount() {
        this.setState({path: this.props.src});
    }

}

export default JFrame;