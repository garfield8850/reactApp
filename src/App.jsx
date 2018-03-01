import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, hashHistory, Switch} from 'react-router-dom'
import {RouterAppConfig} from './common/router'
import PropTypes from "prop-types";
import './common/react-extend';
import tool, {Style} from './common/react-tool';
import {Layout, Tabs} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn'

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/antd.css';
import './css/index.css';

import JFMenu from './components/JFMenu';
import Login from './Login';
import Demo from './html/Demo';

const {Header, Footer, Sider, Content} = Layout;
const TabPane = Tabs.TabPane;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuData: [],
            panes: [{id: 'home', text: '首页', closable: false, component: ''}],
            activeKey: 'home',
            collapsed: false
        }

        this.childContextTypes = {
            color: PropTypes.string
        }
        this.onEdit = this.onEdit.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
    }

    getChildContext() {
        return {
            color: "red",
        }
    }

    style() {
        return {
            header: {width: '100%', height: '50px', background: 'rgba(50, 116, 218,0.4)', fontSize: '30px', lineHeight: '50px', color: '#fff', padding: '0 20px'},
            menu: {width: '200px', height: '100%', background: 'rgba(50, 116, 218,0.8)'},
            main: {background: '#ddd'},
            footer: {width: '100%', height: '50px', background: 'rgba(50, 116, 218,0.4)'}
        }
    }

    /*加载菜单数据*/
    loadMenuData() {
        React.httpGet('json/menu-list.json').then((res) => {
            this.setState({menuData: res.data})
        });
    }

    componentDidMount() {
        this.loadMenuData()

    }

    onCollapse(collapsed) {
        this.setState({collapsed});
    }

    /*选择Tab*/
    onChange(activeKey) {
        this.setState({activeKey});
    }

    onEdit(targetKey, action) {
        this[action](targetKey);
    }

    /*添加Tab*/
    addTab(row) {
        const panes = this.state.panes;
        const activeKey = row['id'];
        const hasArray = panes.filter((n, i) => n['id'] === row['id']);
        if (hasArray.length) {
            let activeKey = row['id'];
            this.setState({activeKey});
        } else {
            panes.push(row);
            this.setState({panes, activeKey});
        }


    }

    remove(targetKey) {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.id === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.id !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].id;
        }
        this.setState({panes, activeKey});
    }

    /*进入菜单*/
    intoMenu({item, key, keyPath}) {
        const menuData = item.props.data;
        this.addTab(menuData);
        // this.props.history.push(menuData.url);
    }

    /*渲染DOM*/
    render() {
        return (
            <div style={{height: '100%'}}>
                <Layout style={{height: '100%'}}>
                    <Header>
                    </Header>
                    <Layout style={{height: '100%'}}>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            <JFMenu menuData={this.state.menuData} intoMenu={this.intoMenu.bind(this)}></JFMenu>
                        </Sider>
                        <Content>
                            <Tabs
                                hideAdd
                                onChange={this.onChange}
                                activeKey={this.state.activeKey}
                                type="editable-card"
                                onEdit={this.onEdit}
                                style={tool.fit}
                                ref="mainTab"
                            >
                                {this.state.panes.map(pane => <TabPane style={{height: '100%', padding: '20px'}} tab={pane.text} key={pane.id} closable={pane.closable}>
                                    <Switch>
                                        <Route path="/" component={RouterAppConfig[pane.component]} menu-url={pane.url}></Route>
                                    </Switch>
                                </TabPane>)}
                            </Tabs>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;


const RouteComponent = () => (
    <Switch>
        <Route path='/' component={App}/>
        <Route path="/login" component={Login}/>
    </Switch>
)


ReactDOM.render((
        <BrowserRouter>
            <RouteComponent/>
        </BrowserRouter>
    ),
    document.getElementById('root'));
