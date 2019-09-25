/*
 * @Author: wei.ling
 * @Date: 2019-09-24 09:59:57
 * @Last Modified by: wei.ling
 * @Last Modified time: 2019-09-24 17:05:59
 * @Describe: 公共头部
 */
import React, { Component } from "react";
import utils from "../../utils";
import "./header.less";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className='App-header'>
        <div className='left'>
          <img src={utils.requireImg("address.png")} alt='' />
        </div>
        <div className='middle'>{this.props.title}</div>
        <div className='right'>个人中心</div>
      </header>
    );
  }
}
