// ==UserScript==
// @name         Xueqiu Performance
// @namespace    https://github.com/jarod/tmscripts/
// @version      2025-05-11
// @description  auto refresh the xueqiu performance page
// @author       Jarod Liu
// @match        https://xueqiu.com/performance
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xueqiu.com
// @grant        none
// ==/UserScript==

var xpRefreshedCount = 0;
var xpIntervalPtr = null;

function tam_refresh_performance() {
    $('.market i.iconfont').trigger('click');
    
    xpRefreshedCount += 1;
    if (xpRefreshedCount>=100) {
        clearInterval(xpIntervalPtr);
        console.log('tam refresh ended');
    } else {
        console.log('tam refresh');
    }
}
(function() {
    'use strict';

    xpIntervalPtr = setInterval(tam_refresh_performance, 10000);
    console.log('tam setInterval');
})();
