/**
 * @file 工具类
 * @author zhangziqiu@qq.com
 */

/* global sojs */
sojs.define({

    /**
     * merge的快捷函数, 合并时覆盖重名属性.
     * @param  {Object} origin 源对象
     * @param  {Object} obj 合并对象
     * @param  {Object} option 合并参数
     * @return {Object} 合并后的对象
     */
    override: function (origin, obj, option) {
        option = option || {};
        option.conflict = 'override';
        return this.merge(origin, obj, option);
    },

    /**
     * 合并两个对象
     * @param  {Object} origin 源对象
     * @param  {Object} obj 合并对象
     * @param  {Object} option 合并参数
     * @return {Object} 合并后的对象
     */
    merge: function (origin, obj, option) {
        origin = origin || {};
        option = option || {};
        // override 覆盖原属性, skip 保留原属性
        option.conflict = option.conflict || 'skip';
        // 是否只copy自己的属性, 即是否执行hasOwnProperty检测
        option.checkOwnPropery = typeof option.checkOwnPropery === 'undefined' ? true : false;

        for (var key in obj) {
            //检测hasOwnProperty
            if (option.checkOwnPropery) {
                if (!obj.hasOwnProperty(key)) {
                    continue;
                }
            }

            //发生冲突, 判断覆盖类型
            if (typeof origin[key] !== 'undefined') {
                if (option.conflict === 'skip') {
                    continue;
                }
            }

            //属性复制
            origin[key] = obj[key];
        }
        return origin;
    }
});