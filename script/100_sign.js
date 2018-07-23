function thirdPartySign() {
    layer.open({
        type: 1,
        content: '<div class="c_third_party_sign " onclick="api.openWin({name:\'300_sign_binding_phone\',url:\'300_sign_binding_phone.html\'})">\n' +
        '    <div class="item">\n' +
        '        <div class="icon o_icon_sign_qq"></div>\n' +
        '        <div class="tit">QQ</div>\n' +
        '    </div>\n' +
        '    <div class="item" onclick="api.openWin({name:\'300_sign_binding_phone\',url:\'300_sign_binding_phone.html\'})">\n' +
        '        <div class="icon o_icon_sign_wechat"></div>\n' +
        '        <div class="tit">微信</div>\n' +
        '    </div>\n' +
        '    <div class="item" onclick="api.openWin({name:\'300_sign_binding_phone\',url:\'300_sign_binding_phone.html\'})">\n' +
        '        <div class="icon o_icon_sign_weibo"></div>\n' +
        '        <div class="tit">微博</div>\n' +
        '    </div>\n' +
        '</div>',
        anim: 'up',
        style: ' position: absolute;left: 0;bottom: 0;width: 100%;box-shadow:none;',
        shade: ' background: rgba(0, 0, 0, 0.6);'

    });

}