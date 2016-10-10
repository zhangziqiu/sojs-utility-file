require('sojs');
// 设置类库加载路径
sojs.setPath({ 'sojs.utility.file': __dirname });
// 返回类,以便支持node自身的require机制
module.exports = sojs.using('sojs.utility.file');