    var usr=getById("reg_users");
    var pwd=getById("reg_password");
    var repwd=getById("reg_repassword");
    var mail=getById("reg_email");
    //默认导航添加搜索按钮的点击事件
    searchEvent("search_btn","search_txt",aLesson,"lessonPage");
    //获取登录用户信息
    var uerInfo=[];
    userInfo=JSON.parse(localStorage.getItem("HX170611_nowUser"));
    //每页检查本地存储是否有登记用户登录信息，有则提取显示该登录用户信息
    cheakUserInfo();

// ////////////////////////////////////显示和隐藏子菜单/////////////////////////////////////
     var onavSub=getById("menu_sub");
     var anavbd=[];
     anavbd=getById("menu").getElementsByTagName("li");
     //鼠标移动显示子菜单
     anavbd[3].onmouseover=function(){
   	    onavSub.style.display="block";
     }
     //鼠标移出隐藏子菜单
     anavbd[3].onmouseout=function(){
        onavSub.style.display="none";
     }
// /////////////////////////////////////注册、登录、注销、模块////////////////////////////////////////
// 上部登录、注册按钮点击事件
// 上部登录点击事件
function denglu(){
    //清空用户输入
    getById("users").value="";
    getById("password").value="";
    getById("login_code").value="";
    //显示遮罩、登录框，隐藏注册框
    getById("bg").style.display="block";
    getById("login_msg").style.display="block";
    getById("regist_msg").style.display="none";
   
    // 窗口关闭按钮点击事件
    getById("close_login").onclick=function(){
    getById("bg").style.display="none";
    getById("login_msg").style.display="none";
    }
    //背景点击事件
    getById("bg").onclick=function(){
    getById("bg").style.display="none";
    getById("login_msg").style.display="none";
    }
    //默认加载验证码
    createCode(4,"code",[1,2,3,4,5,6,7,8,9,0,"q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]);
    //验证码点击更新事件
    getById("code").onclick=function(){
    createCode(4,"code",[1,2,3,4,5,6,7,8,9,0,"q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]);
    }
    //登录按钮点击事件
    getById("login_btn").onclick=function(){
    login_cheak("users","password","login_code","code");   
    }

}
// 上部注册点击事件
function zhuce(){
    getById("bg").style.display="block";
    getById("regist_msg").style.display="block";
    getById("login_msg").style.display="none";
    
    // 窗口关闭按钮点击事件
    getById("close_regist").onclick=function(){
    getById("bg").style.display="none";
    getById("regist_msg").style.display="none";
    }
    // 背景点击事件
    getById("bg").onclick=function(){
    getById("bg").style.display="none";
    getById("regist_msg").style.display="none";
    }
    //注册按钮点击事件
    getById("regist_btn").onclick=function(){
         var reg_div=getById("regist_msg");
         var aspan=reg_div.getElementsByClassName("spanstyle");
         //统计输入合法的个数
         var count=0;        
         for(var i=0;i<aspan.length;i++){
            if(aspan[i].style.color=="green"){
                 count++;
            }
         }
         //判断输入是否全部合法
         if(count==aspan.length){
            //获取当前日期为注册日期
            var myDate=new Date();
            var today=myDate.getFullYear()+"/"+(myDate.getMonth()+1)+"/"+myDate.getDate();
            //注册信息存入本地存储
            aryPerson(usr.value,pwd.value,mail.value,"./img/userHead.png",today,"888","4523","初级","1000","1000",[],[],[],[],[],[]);
            alert("注册成功！");
            //展示登录窗
            denglu();
         }else{
            alert("注册失败！请检查输入是否合法！")
         }       
    }
    //注册信息重置按钮点击事件
    getById("regReset_btn").onclick=function(){
    // 循环清除文本框内容和sapn提示标签
    var aInput=getById("regist_msg").getElementsByTagName("input");
    var aSpan=getById("regist_msg").getElementsByClassName("spanstyle");
       for(var i=0;i<aInput.length;i++){
           aInput[i].value="";
           aSpan[i].innerHTML="";
           aSpan[i].style.background="";
       }
    }
}
/////////////////////////////创建注册用户信息对象属性//////////////////////////////////
function person(user,password,email,pic,regTime,bank,paiMing,rank,allScore,nowScore,collectLesson,ticketNoPay,ticketYesPay,myNote,learnRecord,pingFen){
   this.user_=user;
   this.password_=password;
   this.email_=email;
   this.userPic_=pic;
   this.regTime_=regTime;
   this.bank_=bank;
   this.paiMing_=paiMing;
   this.rank_=rank;
   this.allScore_=allScore;
   this.nowScore_=nowScore;
   this.collectLesson_=collectLesson;
   this.ticketNoPay_=ticketNoPay;
   this.ticketYesPay_=ticketYesPay;
   this.myNote_=myNote;
   this.learnRecord_=learnRecord;
   this.pingFen_=pingFen;
}

////////////////////////////////////存储用户信息数据///////////////////////////////////
function aryPerson(ousr,opwd,oemail,pic,regTime,bank,paiMing,rank,allScore,nowScore,collectLesson,ticketNoPay,ticketYesPay,myNote,learnRecord,pingFen){
    //创建对象，属性赋值
    var operson=new person(ousr,opwd,oemail,pic,regTime,bank,paiMing,rank,allScore,nowScore,collectLesson,ticketNoPay,ticketYesPay,myNote,learnRecord,pingFen);
    var aperson=[];
    //判断是否有数据
    if (localStorage.getItem("HX170611_allUser")==null){
        localStorage.setItem("HX170611_allUser",JSON.stringify(aperson));//创建一个key
        }
    //提取本地存储的数组，解析
    aperson=JSON.parse(localStorage.getItem("HX170611_allUser"));
    //加入数组
    aperson.push(operson);
    //转换，存入数组
    localStorage.setItem("HX170611_allUser",JSON.stringify(aperson));              
}   
////////////在每一页检查本地存储是否有登记用户登录信息，有则提取显示该登录用户信息/////////////////
function cheakUserInfo(){
  if (localStorage.getItem("HX170611_nowUser")==null) {
    return;
  }else{
    //提取该用户个人登录信息
        var userInfo=[];
        userInfo=JSON.parse(localStorage.getItem("HX170611_nowUser"));
    //显示用户个人信息
        showUserInfo(userInfo.user_,userInfo.userPic_);
  }
} 

///////////////////////////////////登录成功显示用户头像、昵称//////////////////////////////////
function showUserInfo(userName,userHead){
   var userInfo=getById("login_reg");
   userInfo.innerHTML="";
   userInfo.innerHTML="<span><img src='"+userHead+"'></img><a>欢迎您,"+userName+"</a></span>"+
                       "<span style='color: white;'> | </span>"+
                       "<span><a onclick='zhuxiao()'>注销</a></span>"
   //改变宽度                   
   // getById("menu_right").style.width="500px"; 
}
//上部用户注销点击事件
function zhuxiao(){
    var userInfo=getById("login_reg");
    if(confirm("确认是否退出？")){
            userInfo.innerHTML="";
    userInfo.innerHTML="<span><a onclick='denglu()'>登录</a></span>"+
                       "<span style='color: white;'> | </span>"+
                       "<span><a onclick='zhuce()'>注册</a></span>"
    //还原宽度                  
    // getById("menu_right").style.width="370px";
    //清除登录的用户个人信息                   
    localStorage.removeItem("HX170611_nowUser");
    //跳转首页
    window.location.href="./index.html";
    }
}

// //////////////////////////////////////////隐藏的登录框///////////////////////////////////////////
        

//生成随机验证码函数
//*codeLength 验证码长度
//*codeId 放置验证码的框的ID
//*CodeAry 随机数的取值内容范围
function createCode(codeLength,codeId,CodeAry){
    var code;
    code ="";
    var oCode=document.getElementById(codeId);
    var nCodeLength=codeLength
    var aCodeChars=CodeAry;
    // alert(aCodeChars.length);
    for(var i=0;i<codeLength;i++){
        var charNum = Math.floor(Math.random()*aCodeChars.length)
        code +=aCodeChars[charNum];//随机取数组下标对应的值
    }
    oCode.innerHTML=code;
}

//封装登录检查函数
//*usrId 用户名文本框的ID
//*pwdId 密码文本框的ID
//*codetxtId 验证码文本框的ID
//*codeId 要显示验证码框的ID
function login_cheak(usrId,pwdId,codetxtId,codeId){
   var users=document.getElementById(usrId);
   var password=document.getElementById(pwdId);
   var codetxt=document.getElementById(codetxtId);
   var codeID=document.getElementById(codeId);

   var aperson=[];
   //判断是否有数据
    if (localStorage.getItem("HX170611_allUser")==null){
        localStorage.setItem("HX170611_allUser",JSON.stringify(aperson));//创建一个key
        }
   aperson=JSON.parse(localStorage.getItem("HX170611_allUser")); //提取本地存储的数组
   var mark=1;
   for(i=0;i<aperson.length;i++){
       if (aperson[i].user_==users.value && aperson[i].password_==password.value && codetxt.value==codeID.innerText){
        alert("登录成功！");
        //显示用户信息
        showUserInfo(aperson[i].user_,aperson[i].userPic_);
        //存储该用户个人登录信息到本地存储
        var userInfo=[];
        userInfo=aperson[i];
        localStorage.setItem("HX170611_nowUser",JSON.stringify(userInfo));
        //关闭遮罩
        getById("bg").style.display="none";
        getById("login_msg").style.display="none";
        mark=0;
        //刷新当前页
        location.reload();        
        break;
       }
   }

   if(mark==1){
        if(users.value=="" || password.value=="" || codetxt.value==""){
            alert("输入不能为空！");
        }else{
            if(codetxt.value!=codeID.innerText){
                alert("验证码错误！");
            }else{
                alert("用户名或密码错误，请重新输入！");
            }
        }
    
  }
}

////////////////////////////////////////隐藏的注册框//////////////////////////////////////
//用户名合法性检查
usr.onblur=function(){
    var cheakNum=reg_cheak("reg_users","Usr_result",/^[a-zA-Z]\w{4,9}$/,"以字母开头的5-9位字符！");
    //合法后判断是否已被注册
    if (cheakNum) {
        canUser(usr,pwd,mail);
    }
}
usr.onkeyup=function(){
    usr.onblur();
}
//密码合法性检查
pwd.onblur=function(){
    reg_cheak("reg_password","Pwd_result",/^[a-zA-Z0-9_\W]{6,}$/,"请输入6位或以上密码！");
    repwd.onblur();
}
pwd.onkeyup=function(){
    pwd.onblur();
    repwd.onblur();
}
//重新密码合法性检查
repwd.onblur=function(){
    var ospan_repwd=document.getElementById("rePwd_result");
    if(pwd.value!==repwd.value){
        ospan_repwd.innerHTML="";
        if(repwd.value==""){
            ospan_repwd.innerText="请再次输入密码！";
        }else{
            ospan_repwd.innerText="与密码不一致，请重新输入！";
        }
        ospan_repwd.style.color="red";
        ospan_repwd.style.background="url(./img/icon_wrong.png) left center no-repeat";
    }else{
        if(pwd.value==""){
            ospan_repwd.innerHTML="";
            ospan_repwd.innerText="密码不能为空！";
            ospan_repwd.style.color="red";
            ospan_repwd.style.background="url(./img/icon_wrong.png) left center no-repeat";
        }else{
            ospan_repwd.innerHTML="";
            ospan_repwd.innerText="正确";
            ospan_repwd.style.color="green";
            ospan_repwd.style.background="url(./img/icon_right.png) left center no-repeat";
        }
        
    }

}
repwd.onkeyup=function(){
    repwd.onblur();
}
//邮箱合法性检查
mail.onblur=function(){
    reg_cheak("reg_email","Mail_result",/^\w+@\w+.[a-z]{2,4}$/,"请检查邮箱合法性！");
}
mail.onkeyup=function(){
    mail.onblur();
}
//封装检查输入合法性函数
//*input_id 输入框的ID
//*span_id 显示判断结果标签的ID 
//*reg 正则表达式
//*wrong_msg 要提示的额错误信息
function reg_cheak(input_id,span_id,reg,wrong_msg){
    
    var oInput=document.getElementById(input_id);
    var oSpan=document.getElementById(span_id);
    var ret = oInput.value.match(reg);
    oSpan.innerHTML="";
    if (ret) {
        oSpan.innerText="正确";
        oSpan.style.color="green";
        oSpan.style.background="url(./img/icon_right.png) left center no-repeat";
        return 1;
    }else{
        oSpan.innerText=wrong_msg;
        oSpan.style.color="red";
        oSpan.style.background="url(./img/icon_wrong.png) left center no-repeat";
        return 0;
    } 
}

//判断用户名是否可以使用
function canUser(ousr){
    oUsr_result=document.getElementById("Usr_result");
    var aperson=[];
    //判断是否有数据
    if (localStorage.getItem("HX170611_allUser")==null){
        localStorage.setItem("HX170611_allUser",JSON.stringify(aperson));//创建一个key
        }
    //提取本地存储的数组，解析
    aperson=JSON.parse(localStorage.getItem("HX170611_allUser"));
    //判断用户名是否重复
    var mark=1;
    for(var i=0;i<aperson.length;i++){
        if(aperson[i].user_==ousr.value){          
            oUsr_result.innerText="该用户名已存在！";
            oUsr_result.style.color="red";
            oUsr_result.style.background="url(./img/icon_wrong.png) left center no-repeat";
            mark=0;
            break;
        }
    }                          
    if(mark==1){
    oUsr_result.innerText="该用户名可用！";
    oUsr_result.style.color="green";
    oUsr_result.style.background="url(./img/icon_right.png) left center no-repeat";
    }               
}