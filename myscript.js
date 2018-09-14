startTime();
function startTime() {
    var today = new Date();
    var lastday = new Date("Oct 31, 2018 00:00:00");
    var timeInterval = lastday - today;
    var d = Math.floor((timeInterval / (24 * 3600 * 1000)));
    var h = Math.floor((timeInterval / (3600 * 1000)) - d * 24);
    var m = Math.floor((timeInterval / (60 * 1000)) - (d*24+h) * 60);
    var s = Math.floor((timeInterval / (1000)) - ((d*24+h) * 60+m) * 60);
    // add a zero in front of numbers<10
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('r-day').innerHTML = d;
    document.getElementById('r-hour').innerHTML = h;
    document.getElementById('r-min').innerHTML = m;
    document.getElementById('r-sec').innerHTML = s;
    t = setTimeout('startTime()', 1000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i }
    return i
}

rollProgress();
function rollProgress() {
    var today = new Date();
    var stday = new Date("Aug 25, 2018 00:00:00");
    var lastday = new Date("Oct 31, 2018 00:00:00");
    var timeInterval = today - stday;
    var totaltimeInterval = lastday - stday;
    var d1 = Math.floor((timeInterval/(24 * 3600 * 1000)));
    var d2 = Math.floor((totaltimeInterval/(24 * 3600 * 1000)));
    
    function checkTimeWidth(i) {
        if (i > 1) { i = 1 }
        return i
    }
    var w = d1/d2;
    w = checkTimeWidth(w) *100;

    $('.pro-bar-inner').delay(1500).animate({width: w + "%"},900);
    $('.pro-bar-ball').delay(1500).animate({left: w + "%"},900);
    $('.bar-inner').delay(1500).animate({height: (w/100)*633 + "px"},900);
    $('.bar-ball').delay(1500).animate({top: (w/100)*633 + "px"},900);

}

$(function(){
    //team member card
    for (let j = 1; j < 10; j++) {
        k = 2*j-1
        $('.thum:nth-of-type('+k+')').click(openIntro);
        $('.closeX').click(closeIntro);
        function openIntro() {  
            $('#intro'+j+'>*').css("display","initial")
            $('#intro'+j).parent('.introbg').css("display","initial")
        }
        function closeIntro() {
            $('#intro'+j).parent('.introbg').css("display","none")
            $('#intro'+j+'>*').css("display","none")
        }
    }

    //four-core
    showAndDn(1,2,3,4);
    showAndDn(2,1,3,4);
    showAndDn(3,4,1,2);
    showAndDn(4,3,1,2);

    function showAndDn(w,x,y,z) {
        $('.btn-to-'+w).click(function(){
            $('.core-'+w).css('display','initial')
            $('.core-img .core-'+w+' img').css('display','initial')
            $('.core-text .core-p .core-'+w).css('display','initial')
            $('.core-text .core-num-btn .core-'+w).css('display','initial')
            $('.core-arrow img.core-'+w).css('display','initial')
            $('.core-'+x).css('display','none')
            $('.core-text .core-p .core-'+x).css('display','none')
            $('.core-text .core-num-btn .core-'+x).css('display','none')
            $('.core-arrow img.core-'+x).css('display','none')
            $('.core-'+y).css('display','none')
            $('.core-text .core-p .core-'+y).css('display','none')
            $('.core-text .core-num-btn .core-'+y).css('display','none')
            $('.core-arrow img.core-'+y).css('display','none')
            $('.core-'+z).css('display','none')
            $('.core-text .core-p .core-'+z).css('display','none')
            $('.core-text .core-num-btn .core-'+z).css('display','none')
            $('.core-arrow img.core-'+z).css('display','none')
        })
    }
})

window.sr = ScrollReveal({ 
    // 參數設定[註1]
    origin: "bottom",  // 起始位置
    distance: "80px",  // 距離
    duration: 800,  // 動畫時間
    delay: 200,  // 動畫延遲時間
    rotate: { x: 0, y: 0, z: 0 },  // 旋轉角度
    opacity: 0,  // 透明度
    scale: 1, // 縮放比例
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", // 動畫速度曲線
    container: window.document.documentElement, // 外層
    mobile: true, // 支援行動裝置
    reset: true, // 每次都啟動動畫
    useDelay: "always", // 延遲動畫次數
    viewFactor: 0.2, // 當該物件在可視範圍內，則顯示此物件(0.2表示可視範圍20%)
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, // 當外層有設定間隔造成偏移，則請設定在此維持精準度
    beforeReveal: function (domEl) { console.log(1) }, // 當啟動前，則執行此函式
    beforeReset: function (domEl) {console.log(2) }, // 當重啟前，則執行此函式
    afterReveal: function (domEl) {console.log(3) }, // 當啟動後，則執行此函式
    afterReset: function (domEl) {console.log(4) } // 當重啟後，則執行此函式
});
sr.reveal( ".appear", {
    // 參數設定[註1]
});

function iEsc() {
    return false;
}
function iRec() {
    return true;
}
function DisableKeys() {
    if (event.ctrlKey || event.shiftKey || event.altKey) {
        window.event.returnValue = false;
        iEsc();
    }
}
document.ondragstart = iEsc;
document.onkeydown = DisableKeys;
document.oncontextmenu = iEsc;
if (typeof document.onselectstart != "undefined")
    document.onselectstart = iEsc;
else {
    document.onmousedown = iEsc;
    document.onmouseup = iRec;
}

function DisableRightClick(qsyzDOTnet) {
    if (window.Event) {
        if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3)
            iEsc();
    } else
    if (event.button == 2 || event.button == 3) {
        event.cancelBubble = true
        event.returnValue = false;
        iEsc();
    }
}