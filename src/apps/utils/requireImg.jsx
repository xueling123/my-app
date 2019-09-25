/*
 * @Author: wei.ling 
 * @Date: 2019-09-21 17:46:14 
 * @Last Modified by: wei.ling
 * @Last Modified time: 2019-09-21 17:58:40
 * @Describe:传入图片名称即可require图片
 */
// 'use strict';

//require 图片路径 方法
export const requireImg = function(image){
    if(image){
        const URL = require('../../assets/images/' + image);
        return URL;
    }else{
        console.error('requireImg error:  ' + image);
    }
}
