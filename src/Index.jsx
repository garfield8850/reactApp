import React, {Component} from 'react';
import {Route, hashHistory, Switch} from 'react-router-dom'
import {RouterAppConfig} from './common/router'
import tool, {Style} from './common/react-tool';
import {Layout, Tabs, Breadcrumb} from 'antd';


import JFMenu from './components/JFMenu';
import JFrame from "./components/JFrame";
import JHeadMenu from "./components/JHeadMenu";


const {Header, Footer, Sider, Content} = Layout;
const TabPane = Tabs.TabPane;

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuData: [],
            panes: [{id: 'home', text: '首页', closable: false, component: ''}],
            activePanel: {},
            activeKey: 'home',
            collapsed: false,
        }
        this.onEdit = this.onEdit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
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
        React.httpGet('https://www.easy-mock.com/mock/5a97a928d0638e626376df03/react/menulist').then((res) => {
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
        const target = menuData['target'];
        if (target && target == 'blank') {
            window.open(menuData.url);
            return;
        }
        if (this.props.mode == 1 || this.props.mode == 2) {
            this.addTab(menuData);
        } else {
            this.setState({activePanel: menuData})
            this.setState({activeCompontent: RouterAppConfig[menuData.component]})
        }

        // this.props.history.push(menuData.url);
    }

    /*渲染DOM*/
    render() {
        if (this.props.mode == 1) {
            return (
                <Layout style={{height: '100%'}}>
                    <Header>
                        <JHeadMenu></JHeadMenu>
                    </Header>
                    <Layout>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            <JFMenu menuData={this.state.menuData} intoMenu={this.intoMenu.bind(this)}></JFMenu>
                        </Sider>
                        <Layout>
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
                                    {this.state.panes.map(pane => {
                                        if (pane.url) {
                                            return <TabPane style={{height: '100%', padding: '20px'}} tab={pane.text} key={pane.id} closable={pane.closable}>
                                                <JFrame src={pane.url}></JFrame>
                                            </TabPane>
                                        } else {
                                            return <TabPane style={{height: '100%', padding: '20px'}} tab={pane.text} key={pane.id} closable={pane.closable}>
                                                <Switch>
                                                    <Route path="/" component={RouterAppConfig[pane.component]}></Route>
                                                </Switch>
                                            </TabPane>
                                        }
                                    })}
                                </Tabs>

                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            );
        }
        if (this.props.mode == 2) {
            return (
                <Layout style={{height: '100%'}}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <JFMenu menuData={this.state.menuData} intoMenu={this.intoMenu.bind(this)}></JFMenu>
                    </Sider>
                    <Layout>
                        <Header>
                            <JHeadMenu></JHeadMenu>
                        </Header>
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
                                {this.state.panes.map(pane => {
                                    if (pane.url) {
                                        return <TabPane style={{height: '100%', padding: '20px'}} tab={pane.text} key={pane.id} closable={pane.closable}>
                                            <JFrame src={pane.url}></JFrame>
                                        </TabPane>
                                    } else {
                                        return <TabPane style={{height: '100%', padding: '20px'}} tab={pane.text} key={pane.id} closable={pane.closable}>
                                            <Switch>
                                                <Route path="/" component={RouterAppConfig[pane.component]}></Route>
                                            </Switch>
                                        </TabPane>
                                    }
                                })}
                            </Tabs>
                        </Content>
                    </Layout>
                </Layout>
            );
        }
        if (this.props.mode == 3) {
            var p = null;
            if (this.state.activePanel.url) {
                console.log(this.state.activePanel.url)
                p = <JFrame src={this.state.activePanel.url}></JFrame>
            } else {
                p = <Switch> <Route path="/" component={RouterAppConfig[this.state.component]}></Route></Switch>
            }
            return (
                <Layout style={{height: '100%'}}>
                    <Header>
                        <JHeadMenu></JHeadMenu>
                    </Header>
                    <Layout>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            <JFMenu menuData={this.state.menuData} intoMenu={this.intoMenu.bind(this)}></JFMenu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                                {p}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            );
        }
        if (this.props.mode == 4) {
            var p = null;
            if (this.state.activePanel.url) {
                console.log(this.state.activePanel.url)
                p = <JFrame src={this.state.activePanel.url}></JFrame>
            } else {
                p = <Switch> <Route path="/" component={RouterAppConfig[this.state.component]}></Route></Switch>
            }
            return (
                <Layout style={{height: '100%'}}>
                    <Header>
                        <JHeadMenu></JHeadMenu>
                    </Header>
                    <Layout>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            <JFMenu menuData={this.state.menuData} intoMenu={this.intoMenu.bind(this)}></JFMenu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                                {p}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            );
        }


    }
}

export default Index;

