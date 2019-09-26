/*
 * @Author: wei.ling
 * @Date: 2019-09-21 16:16:43
 * @Last Modified by: wei.ling
 * @Last Modified time: 2019-09-25 17:17:22
 * @descrite "首页"
 */
import React, { Component } from "react";
import { Carousel,Grid } from "antd-mobile";
import utils from "../utils";
import "./index.less";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: [],
      imgHeight: 176,
      gridData:[]
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
        bannerData: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      });
    }, 100);
    this.setState({
      gridData:[
        {
          icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text:"缴费"
        },
        {
          icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text:"联系物业"
        },
        {
          icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text:"家电维修"
        },
        {
          icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text:"家政服务"
        },
        {
          icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text:"医疗咨询"
        },
        {
          icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text:"教育"
        },
        {
          icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text:"保险服务"
        },
        {
          icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text:"汽车服务"
        },
        {
          icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text:"交友社区"
        }
      ]
    })
  }
  // 常用功能点击事件
  gridCellClick(el,index){
    console.log(el,index);
  }
  render() {
    const { bannerData,gridData } = this.state;
    return (
      <div id='home'>
        <div
          style={{
            backgroundColor: "white",
            height: "100%",
            textAlign: "center"
          }}
        >
          <main>
            {utils.isNotEmpty(bannerData) && (
              <Carousel
                autoplay={true}
                infinite
              >
                {bannerData.map(val => (
                  <a
                    key={val}
                    href='http://www.alipay.com'
                    style={{
                      display: "inline-block",
                      width: "100%",
                      height: this.state.imgHeight
                    }}
                  >
                    <img
                      src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                      alt=''
                      style={{ width: "100%", verticalAlign: "top" }}
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event("resize"));
                        this.setState({ imgHeight: "auto" });
                      }}
                    />
                  </a>
                ))}
              </Carousel>
            )}
            <Grid data={gridData} itemStyle={{color:"#666"}} hasLine={false} columnNum="4" isCarousel={true} onClick={(el,index)=>this.gridCellClick(el,index)}/>
          </main>
        </div>
      </div>
    );
  }
}
