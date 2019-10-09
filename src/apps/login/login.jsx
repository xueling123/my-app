/*
 * @Author: wei.ling
 * @Date: 2019-09-27 17:40:49
 * @Last Modified by: wei.ling
 * @Last Modified time: 2019-09-27 18:02:56
 * @Describe:登录页
 */
import React, { Component } from "react";
import { InputItem, Button } from "antd-mobile";
import { createForm } from "rc-form";
import utils from "../utils";
import "./login.less";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonVerText: "获取验证码"
    };
  }
  getVerCode() {
    console.log("ver");
  }
  phoneChange(e){
    console.log(e);
  }
  submit() {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }
  render() {
    const { buttonVerText } = this.state;
    const { getFieldProps } = this.props.form;
    return (
      <div id='login'>
        <div className='back'>
          <img src={utils.requireImg("icon01.png")} alt='' />
        </div>
        <div className='text'>
          <span>Hi</span>
          <span>欢迎回来</span>
        </div>
        <div className='form'>
          <InputItem
            {...getFieldProps("phone",{
                onChange:this.phoneChange
            })}
            placeholder='请输入手机号'
            type="phone"
            ref={el => (this.autoFocusInst = el)}
          >
            +86
          </InputItem>
          <InputItem
            {...getFieldProps("verCode")}
            placeholder='请输入验证码'
            type="number"
            maxLength="6"
            ref={el => (this.autoFocusInst = el)}
            extra={<button>{buttonVerText}</button>}
            onExtraClick={this.getVerCode}
          />
          <Button onClick={()=>this.submit()} className='primary' type='primary'>
            登录
          </Button>
        </div>
      </div>
    );
  }
}
export default createForm()(Login);
