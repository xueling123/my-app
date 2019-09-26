/*
 * @Author: wei.ling
 * @Date: 2019-09-21 16:16:43
 * @Last Modified by: wei.ling
 * @Last Modified time: 2019-09-25 16:01:07
 * @descrite "首页"
 */
import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import Header from "../components/header/header";
import Home from "../home/index";
import PersonalCenter from "../personalCenter/personalCenter";
import "./index.less";
export default class Entrance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "首页",
      data: ["1", "2", "3"],
      imgHeight: 176,
      selectedTab: "1"
    };
  }
  static getDerivedStateFromProps(props, state) {
    return state;
  }
  componentDidCatch(error, info) {
    debugger;
    console.error(error, info);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    return true;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      });
    }, 100);
  }
  onPressTab(key) {
    
    switch (key) {
      case "1":
        this.setState({
          title: "首页"
        });
        break;
      case "2":
        this.setState({
          title: "购物"
        });
        break;
      case "3":
        this.setState({
          title: "消息"
        });
        break;
      case "4":
        this.setState({
          title: "个人中心"
        });
        break;
      default:
        break;
    }
    this.setState({
      selectedTab: key
    });
  }
  render() {
    const { title } = this.state;
    return (
      <div id='entrance'>
        <Header title={title} />
        <div
          className="tabBarBox"
        >
          <TabBar
            unselectedTintColor='#949494'
            tintColor='#33A3F4'
            barTintColor='white'
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title='首页'
              key='Life'
              icon={
                <div
                  className='iconfont iconshouye'
                  style={{
                    width: "22px",
                    height: "22px",
                    color: "rgb(148, 148, 148)"
                  }}
                />
              }
              selectedIcon={
                <div
                  className='iconfont iconshouye'
                  style={{
                    width: "22px",
                    height: "22px",
                    color: "rgb(51, 163, 244)"
                  }}
                />
              }
              selected={this.state.selectedTab === "1"}
              onPress={() => this.onPressTab("1")}
              data-seed='logId'
            >
              <Home />
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  className='iconfont iconGroup'
                  style={{
                    width: "22px",
                    height: "22px",
                    color: "rgb(148, 148, 148)"
                  }}
                />
              }
              selectedIcon={
                <div
                  className='iconfont iconGroup'
                  style={{
                    width: "22px",
                    height: "22px",
                    color: "rgb(51, 163, 244)"
                  }}
                />
              }
              title='购物'
              key='Koubei'
              selected={this.state.selectedTab === "2"}
              onPress={() => this.onPressTab("2")}
              data-seed='logId1'
            >
              sdfasdfasdf
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  className='iconfont iconxiaoxi'
                  style={{
                    width: "22px",
                    height: "22px",
                    color: "rgb(148, 148, 148)"
                  }}
                />
              }
              selectedIcon={
                <div
                  className='iconfont iconxiaoxi'
                  style={{
                    width: "22px",
                    height: "22px",
                    color: "rgb(51, 163, 244)"
                  }}
                />
              }
              title='消息'
              key='Friend'
              selected={this.state.selectedTab === "3"}
              onPress={() => this.onPressTab("3")}
            >
              asdfasdfasdf
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  className='iconfont icon53'
                  style={{
                    width: "22px",
                    height: "22px",
                    color: "rgb(148, 148, 148)"
                  }}
                />
              }
              selectedIcon={
                <div
                  className='iconfont icon53'
                  style={{
                    width: "22px",
                    height: "22px",
                    color: "rgb(51, 163, 244)"
                  }}
                />
              }
              title='个人中心'
              key='my'
              selected={this.state.selectedTab === "4"}
              onPress={() => this.onPressTab("4")}
            >
              <PersonalCenter/>
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}
