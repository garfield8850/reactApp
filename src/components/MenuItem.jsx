import React, {Component} from 'react';
import Icon from "./Icon";

class MenuItem extends Component {

    into(data, e) {
        console.log(e)
        console.log(data)
        if(data.children){
           this.props.callParent(e);
        }else{

        }
    }

    render() {
        return (<li>
            <a href={'javascript:;'} onClick={this.into.bind(this,this.props.data)}>
                <Icon class={this.props.icon}/>
                <span>{this.props.text}</span>
            </a>{this.props.children}</li>)

    }
}

export default MenuItem;