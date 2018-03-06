import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, hashHistory, Switch} from 'react-router-dom'
import './common/react-extend';
import PropTypes from 'prop-types';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn'

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/antd.less';
import './css/index.css';

import Login from './Login';
import Index from "./Index";
import RightSilder from "./components/RightSilder";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 1
        }

    }

    /*应用上下文*/
    getChildContext() {
        var self = this;
        return {
            changeMode: function (mode) {
                self.setState({mode: mode});
            },
            showRightSlider: function () {
                self.refs.rightSilder.show()
            }
        };
    }


    /*渲染DOM*/
    render() {
        return (
            <React.Fragment>
                <Index mode={this.state.mode}/>
                <RightSilder ref="rightSilder"></RightSilder>
            </React.Fragment>
        )
    }
}

App.childContextTypes = {
    changeMode: PropTypes.func,
    showRightSlider: PropTypes.func
};

export default App;


const RouteComponent = () => (
    <Switch>
        <Route path='/' component={App}/>
        <Route path="/login" component={Login}/>
    </Switch>
)


ReactDOM.render((
        <React.Fragment>
            <BrowserRouter>
                <RouteComponent/>
            </BrowserRouter>
        </React.Fragment>
    ),
    document.getElementById('root'));
