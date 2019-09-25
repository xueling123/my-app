/*
 * @Author: wei.ling
 * @Date: 2019-09-24 16:35:24
 * @Last Modified by: wei.ling
 * @Last Modified time: 2019-09-24 17:51:16
 * @Describe:过滤空字段 && 判断字段是否为空
 */

//参数是否为空

export const isNotEmpty = function(param) {
  // '[object Object]' => 'Object'
  const str = Object.prototype.toString.call(param);
  const _param = str.substr(8, str.length - 9);
  let flag = false;
  switch (_param) {
    case "Undefined":
      // flag = false
      break;
    case "Null":
      // flag = false
      break;
    case "Boolean":
      if (param) {
        flag = true;
      }
      break;
    case "String":
      if (param.length > 0) {
        flag = true;
      }
      break;
    case "Number":
      // Object.prototype.toString.call(NaN);
      // '[object Number]'
      flag = true;
      break;
    case "Object":
      if (Object.keys(param).length > 0) {
        flag = true;
      }
      break;
    case "Array":
      if (param.length > 0) {
        flag = true;
      }
      break;
    default:
      console.error("数据类型判断异常" + param);
      break;
  }
  return flag;
};
