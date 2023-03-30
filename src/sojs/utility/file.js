/**
 * 文件操作工具类
 * @author zhangziqiu@qq.com
 */

sojs.define({
    deps: {
        sync: 'sojs.utility.file.sync',
        fileWatch: 'sojs.utility.file.watch'
    },

    $file: function () {
        // 创建sync类的代理函数
        var sync = this.sync;
        for (var i = 0, count = this.syncClassMethods.length; i < count; i++) {
            var key = this.syncClassMethods[i];
            this[key] = sync[key].proxy(sync);
        }

        // 创建watch类的代理函数
        var watch = this.fileWatch;
        for (var i = 0, count = this.watchClassMethods.length; i < count; i++) {
            var key = this.watchClassMethods[i];
            this[key] = watch[key].proxy(watch);
        }
    },

    syncClassMethods: [
        'existsSync',
        'statSync',
        'readFileSync',
        'copyDirectorySync',
        'copyFileSync',
        'mkdirSync',
        'getFileListSync',
        'getDirectoryListSync'
    ],

    watchClassMethods: [
        'watch'
    ]
    
});
