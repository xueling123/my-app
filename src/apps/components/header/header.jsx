/*
 * @Author: wei.ling
 * @Date: 2019-09-24 09:59:57
 * @Last Modified by: wei.ling
 * @Last Modified time: 2019-09-24 17:05:59
 * @Describe: 公共头部
 */
import React, { Component } from "react";
import { Popover, NavBar, Icon } from "antd-mobile";
import utils from "../../utils";
import "./header.less";
const Item = Popover.Item;
const myImg = src => (
  <img
    src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`}
    className='am-icon am-icon-xs'
    alt=''
  />
);
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selected: ""
    };
  }
  onSelect = opt => {
    console.log(opt.props.value);
    this.setState(
      {
        visible: false,
        selected: opt.props.value
      },
      () => {
        const { selected } = this.state;
        switch (selected) {
          case "scan":
            this.openSweep();
            break;
          default:
            console.log("事件出错");
            break;
        }
      }
    );
  };
  // 打开扫一扫
  openWx() {
    let locatUrl = "weixin://";
    debugger;
    if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
      var ifr = document.createElement("iframe");

      ifr.src = locatUrl;

      ifr.style.display = "none";

      document.body.appendChild(ifr);
    } else {
      window.location.href = locatUrl;
    }
  }
  openSweep() {
    console.log("打开扫一扫");
    debugger;
    window.location.href = "weixin://";
  }
  handleVisibleChange = visible => {
    this.setState({
      visible
    });
  };
  render() {
    return (
      <header className='App-header'>
        <NavBar
          mode='light'
          leftContent={<img src={utils.requireImg("address.png")} alt='' />}
          rightContent={
            <Popover
              mask
              overlayClassName='fortest'
              overlayStyle={{ color: "currentColor" }}
              visible={this.state.visible}
              overlay={[
                <Item
                  key='4'
                  value='scan'
                  icon={myImg("tOtXhkIWzwotgGSeptou")}
                  data-seed='logId'
                >
                  Scan
                </Item>,
                <Item key='6' value='Help' icon={myImg("uQIYTFeRrjPELImDRrPt")}>
                  <span style={{ marginRight: 5 }}>Help</span>
                </Item>
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0]
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div
                style={{
                  height: "100%",
                  padding: "0 15px",
                  marginRight: "-15px",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <Icon type='ellipsis' />
              </div>
            </Popover>
          }
        >
          {this.props.title}
        </NavBar>
      </header>
    );
  }
}
