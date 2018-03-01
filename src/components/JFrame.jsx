import React, {Component} from 'react';

class JFrame extends Component {


    constructor(props) {
        super(props);
        console.log(121)
        console.log(this)
    }


    render() {
        return (
            <iframe src="https://www.baidu.com" style={{width: '100%', height: '100%',border:'none'}}></iframe>
        )
    }
}

export default JFrame;