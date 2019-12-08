/**
 * 重写trim(),传参的时候删除前后两边与参数对应的字符串，否则删除空白字符
 * @param {String} 在原字符串中，删除传入的指定字符串。
 * @desc 例：console.log(method.Fun_trim("asdss&ads&","&"))
 */
String.prototype.trim = function(char) {
  if (char === '') {
    return this.replace(/^\s+|\s+$/g, '');
  } else {
    return this.replace(new RegExp(`^${char}|${char}$`, 'ig'), '');
  }
};
