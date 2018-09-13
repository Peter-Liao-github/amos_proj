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

$(function(){
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