/*
 * @Author: wei.ling
 * @Date: 2019-09-25 14:43:50
 * @Last Modified by: wei.ling
 * @Last Modified time: 2019-09-25 16:07:30
 * @Describe: 个人中心
 */
import React, { Component } from "react";
import { List } from "antd-mobile";
import "./personalCenter.less";
const Item = List.Item;
const Brief = Item.Brief;
export default class PersonalCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id='personalCenter'>
        <List className='my-list'>
          <Item arrow='horizontal' onClick={() => {}}>
            我的订单
          </Item>
          <Item arrow='horizontal' multipleLine onClick={() => {}}>
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
      </div>
    );
  }
}
