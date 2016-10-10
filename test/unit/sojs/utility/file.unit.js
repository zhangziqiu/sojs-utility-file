/**
 * 单元测试类
 * @author zhangziqiu<zhangziqiu@qq.com>
 */

var assert = require('assert');
var file = sojs.using('sojs.utility.file');

describe('===== sojs.utility.file =====', function () {

    it('readFileSync', function () {
        assert.equal(!!file.readFileSync, true);
        var filePath = sojs.getClassPath('sojs.utility.file');
        var fileSource = file.readFileSync(filePath);
        assert.ok(fileSource.length>0);
    });

});
