/*
 * @Author: yaodongyi
 * @Date: 2019-12-08 16:13:40
 * @Description: 如不需要实例化请使用static创建方法，如果需要调用Meth实例化对象请先new。
 */
export default class Meth {
  constructor() {
    //
    console.log('请先new Meth()');
  }
  static demo() {
    console.log('直接调用行了');
  }
}
