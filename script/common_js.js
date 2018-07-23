
    apiready = function() {
        //手机端导航背景色
        $api.fixStatusBar($api.dom('header'));


        // 底部弹出选择内容
        var UIActionSelector = api.require('UIActionSelector');
        // 选择城市
        $api.addEvt($api.dom('#chooseCity'), 'click', function(){
            UIActionChoose('widget://res/city.json');
        });
        // 选择时间
        $api.addEvt($api.dom('#chooseDate'), 'click', function(){
            UIActionChoose('widget://res/date.json');
        });
        $api.addEvt($api.dom('#chooseGender'), 'click', function(){
            UIActionChoose('widget://res/godal.json',1);
        });
        function UIActionChoose(jsonData,ColNum) {
            UIActionSelector.open({
                datas: jsonData,
                layout: {
                    row: 5,
                    col: ColNum,
                    height: 40,
                    size: 12,
                    sizeActive: 15,
                    rowSpacing: 5,
                    colSpacing: 10,
                    maskBg: 'rgba(0,0,0,0.4)',
                    bg: '#fff',
                    color: '#888',
                    colorActive: '#000',
                    colorSelected: '#000'
                },
                animation: true,
                cancel: {
                    text: '取消',
                    size: 14,
                    w: 90,
                    h: 35,
                    bg: '#fff',
                    bgActive: '#fff',
                    color: '#333',
                    colorActive: '#333'
                },
                ok: {
                    text: '确定',
                    size: 14,
                    w: 90,
                    h: 35,
                    bg: '#fff',
                    bgActive: '#fff',
                    color: '#f42d2b',
                    colorActive: '#f42d2b'
                },
                title: {
                    text: ' ',
                    size: 12,
                    h: 44,
                    bg: '#fff',
                    color: '#fff'
                },
                fixedOn: api.frameName
            }, function(ret, err) {
                if (ret) {
                    alert(JSON.stringify(ret));
                } else {
                    alert(JSON.stringify(err));
                }
            });
        }

        // 底部弹出框

        $api.addEvt($api.byId('goodsMoreBtn'), 'click', function(){
            footerModal();
        });

        function footerModal() {
            api.actionSheet({
                cancelTitle: '取消',
                buttons: ['分享', '收藏']
            }, function(ret, err) {
                var index = ret.buttonIndex;
            });
        }


        //选项卡切换
        switchTab=function(index,target,parentBox){

            var lis=$api.domAll('.'+target+' li');
            for( var i=0;i<lis.length;i++){
                $api.removeCls(lis[i],'active');
            }
            $api.addCls(lis[index-1],'active');

            var contents=$api.domAll('.'+parentBox+'>div');
            console.log(contents);
            for( var j=0;j<contents.length;j++){
                $api.removeCls(contents[j],'active');
            }
            $api.addCls(contents[index-1],'active');
        };
      };


    // REM适配
    function RemWidth(){
        var design_width = 360;//ui设计图的width像素值
        var scale = 1;//整体调整元素大小，1表示不调整，0.8表示调整为80%
        //这样做的目的，是量图的值除以100得出rem值，fontSize的值如果是5px这样的值，页面里面的width:10rem会失效，所以x100保证fontSize大于5px
        //这种做法，可以让实际运行效果和设计图保持大概一致的比例
        document.documentElement.style.fontSize = (window.screen.width / design_width) * 100 * scale + "px";
        //apiAlert(api.winWidth + " " + document.documentElement.style.fontSize + " " + location.href);
    }
    RemWidth();



