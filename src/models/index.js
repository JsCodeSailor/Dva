//  1 './'当前目录
//  2 flase 不循环遍历
//  3 /\.js$/正则表达式，寻找.js文件
const context = require.context('./', false, /\.js$/);
//导出这个文件
console.log('context',context)
export default context

//keys() 方法用于从数组创建一个包含数组键的可迭代对象。
//如果对象是数组返回 true，否则返回 false。
  .keys()
  .filter(item => item !== './index.js')
  .map(key => context(key));