
    var jmpaccount = document.getElementById("myaccount");
    jmpaccount.onclick = function() {
        document.getElementById("loginBg").style.visibility="visible";
        document.getElementById("loginBox").style.visibility="visible";
        // document.getElementById("loginBox").style.height="300px";
        // document.getElementById("loginBox").style.width="500px";
        // document.getElementById("loginForm").style.visibility="visible";
    }
    var close = document.getElementById("loginClose");
    close.onclick = function() {
        document.getElementById("loginBox").style.visibility="hidden";
        document.getElementById("loginBg").style.visibility="hidden";
        document.getElementById("alert1").style.visibility="hidden";
        document.getElementById("alert2").style.visibility="hidden";
        document.getElementById("alert3").style.visibility="hidden";
    }
    var loginAlert1 = document.getElementById("alert1");
    var loginAlert2 = document.getElementById("alert2");
    var loginAlert3 = document.getElementById("alert3");
    var input1 = document.getElementById("inputId");
    var input2 = document.getElementById("inputPass");
    var input3 = document.getElementById("inputCode");

    var flag1 = 0;
    var flag2 = 0;
    var flag3 = 0;

    input1.onblur = function() {
        if(input1.value=="") {
            loginAlert1.style.visibility = "visible";
            flag1 = 0;
        }
        else {
            loginAlert1.style.visibility = "hidden";
            flag1 = 1;
        }
    }
    input2.onblur = function() {
        if(input2.value=="") {
            loginAlert2.style.visibility = "visible";
            flag2 = 0;
        }
        else {
            loginAlert2.style.visibility = "hidden";
            flag2 = 1;
        }
    }
    input3.onblur = function() {
        if(input3.value=="") {
            loginAlert3.style.visibility = "visible";
            flag3 = 0;
        }
        else {
            loginAlert3.style.visibility = "hidden";
            flag3 = 1;
        }
    }
    var btnSure = document.getElementById("loginSure");
    btnSure.onclick = function() {
        if(flag1&flag2&flag3) {
            // alert(flag1&flag2&flag3);
            document.getElementById("loginForm").submit;
            window.location.href = "info.html";
        }
        else if(input1.value=="") {
            loginAlert1.style.visibility = "visible";
        }
        else if(input2.value=="") {
            loginAlert2.style.visibility = "visible";
        }
        else if(input3.value=="") {
            loginAlert3.style.visibility = "visible";
        }
    }
    
    var divphoto = document.getElementsByClassName("divPhoto");
    var divhot = document.getElementsByClassName("divHot");
    var photoview = document.getElementById("showphoto");
    var photoleft = document.getElementById("btnleft");
    var photoright = document.getElementById("btnright");

	var imgs=["photos/chinaView1.jpg","photos/chinaView2.jpg","photos/chinaView3.jpg","photos/chinaView4.jpg","photos/chinaView5.jpg","photos/chinaView6.jpg"];
    var i=0;
    function change(){
        photoview.src = imgs[i];
        if(i==5){
            i=0;
        }
        else{
            i++;
        }
    }
    setInterval("change()",2000);
    photoright.onclick = function() {
        if(i>=5){
            i=0;
            photoview.src = imgs[i];
        }
        else {
            i++;
            photoview.src = imgs[i];
        }
    }
    photoleft.onclick = function() {
        if(i<=0){
            i=5;
        }
        else {
            i--;
        }
        photoview.src = imgs[i];
    }
