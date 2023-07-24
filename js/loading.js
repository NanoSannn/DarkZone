document.getElementById('loadingText').innerHTML = '<span style="color: white;"> กำลังโหลด </span><span class="theme-data" id="theme">ข้อมูล . . .</span>';
document.getElementById('loadingAnimation').src = "./images/loading.gif";
document.getElementById('loadingAnimation2').src = "./images/timemie.gif";

setTimeout(function () {
    document.getElementById('loadingScreen').style.display = 'none';
}, 5000);

setTimeout(function () {
    document.getElementById('loadingScreen2').style.display = 'none';
}, 10000);