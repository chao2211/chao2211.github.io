var date = new Date();
var year = date.getFullYear();
var selectYear = document.getElementById("chooseYear");
var selectMonth = document.getElementById("chooseMonth");
for(let i=1940;i<=year;i++){
    let curNode = document.createElement("option");
    curNode.innerText = i;
    selectYear.appendChild(curNode);
}

for(let i=1;i<=12;i++){
    let curNode = document.createElement("option");
    curNode.innerText = i;
    selectMonth.appendChild(curNode);
}


var uidflag = false;
var unameflag = false;
var upassflag = false;
var repassflag = false;
var uemailflag = false;
var ucodecheckflag = false;

var uid = document.getElementById("userId");
uid.onblur = function() {
    var flag = uid.value.length<=12&&uid.value.length>=6;
    // alert(uid.value);
    // alert(uid.value.length);
    if(flag) {
        document.getElementById("uidcheck").style.display="none";
        uidflag = true;
    }
    else {
        document.getElementById("uidcheck").style.display="inline";
        uidflag = false;
    }
    // alert(uidflag);
}

var uname = document.getElementById("userName");
uname.onblur = function() {
    var flag = uname.value.length<=12&&uname.value.length>=2;
    if(flag) {
        document.getElementById("unamecheck").style.display="none";
        unameflag = true;
    }
    else {
        document.getElementById("unamecheck").style.display="inline";
        unameflag = false;
    }
}

var upass = document.getElementById("userPass");
upass.onblur = function() {
    var flag = upass.value.length<=12&&upass.value.length>=6;
    if(flag) {
        document.getElementById("upasscheck").style.display="none";
        upassflag = true;
    }
    else {
        document.getElementById("upasscheck").style.display="inline";
        upassflag = false;
    }
}

var repass = document.getElementById("rePass");
repass.onblur = function() {
    if(repass.value == document.getElementById("userPass").value) {
        document.getElementById("repasscheck").style.display="none";
        repassflag = true;
    }
    else {
        document.getElementById("repasscheck").style.display="inline";
        repassflag = false;
    }
}

var uemail = document.getElementById("userEmail");
uemail.onblur = function() {
    if(uemail.value!="") {
        document.getElementById("uemailcheck").style.display="none";
        uemailflag = true;
    }
    else {
        document.getElementById("uemailcheck").style.display="inline";
        uemailflag = false;
    }
}

var ucodecheck = document.getElementById("checkCode");
ucodecheck.onblur = function() {
    if(ucodecheck.value!="") {
        document.getElementById("ucodecheck").style.display="none";
        ucodecheckflag = true;
    }
    else {
        document.getElementById("ucodecheck").style.display="inline";
        ucodecheckflag = false;
    }
}

var clickreset = document.getElementById("btnClear");
clickreset.onclick = function() {
    uidflag = false;
    unameflag = false;
    upassflag = false;
    repassflag = false;
    uemailflag = false;
    ucodecheckflag = false;
}

var clicksubmit = document.getElementById("btSure");
clicksubmit.onclick = function() {
    var flagall = uidflag&unameflag&upassflag&repassflag&uemailflag&ucodecheckflag;
    // alert(flagall);
    // alert(uidflag+" "+unameflag+" "+upassflag+" "+repassflag+" "+uemailflag+" "+ucodecheckflag);
    if(flagall == true) {
        document.getElementById("form1").submit;
        alert("注册成功");
        window.location.href="index.html";
    }
    else if(uidflag==false&&unameflag==false&&upassflag==false&&repassflag==false&&uemailflag==false&&ucodecheckflag==false){
        var tmp = document.getElementsByTagName("span");
        for(var i=0;i<tmp.length;i++){
            tmp[i].style.display = "inline";
            document.getElementById("repasscheck").style.display="none";
        }
    }
}

