//给课程中心的左侧选项卡安装点击事件
var aTab=document.getElementById("learnTab").getElementsByTagName("li");
var aDiv=document.getElementById("learn_right").getElementsByClassName("Div");
tabEvent(aTab,aDiv);
//给课程中心的我的课程选项卡安装点击事件
var aTab=document.getElementById("myLesson_tab").getElementsByTagName("li");
var aDiv=document.getElementById("myLesson").getElementsByClassName("Div2");
tabEvent(aTab,aDiv);
//给课程中心的我的订单选项卡安装点击事件
var aTab=document.getElementById("myTicket_tab").getElementsByTagName("li");
var aDiv=document.getElementById("myTicket").getElementsByClassName("Div3");
tabEvent(aTab,aDiv);

//判断用户是否已登录，有则显示该用户信息，无则提示登录，跳转首页
if(window.localStorage.getItem("HX170611_nowUser")){
	//进入学习中心默认加载用户在学的课程包
    yesPay_tabEvent(16,"nowLearnPage","nowLearnContent");
	//获取该登录用户信息
	oUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
    //显示注册日期
    getById("regTime").innerHTML=oUser.regTime_;
    //显示等级
    getById("userExp").innerHTML=oUser.rank_;
    //显示积分
    getById("jifen").innerHTML=oUser.nowScore_;
    //显示金币
    getById("money").innerHTML=oUser.bank_+" 金币";
    //给学习中心的我的课程，在学选项卡添加点击事件
    getById("myLesson_tab").getElementsByTagName("li")[0].addEventListener("click",function(){yesPay_tabEvent(16,"nowLearnPage","nowLearnContent");});
    //给学习中心的我的课程，已学选项卡添加点击事件
    getById("myLesson_tab").getElementsByTagName("li")[1].addEventListener("click",function(){yesPay_tabEvent(16,"finishLearnPage","finishLearnContent");});
    //给学习中心的我的课程，想学选项卡添加点击事件
    getById("myLesson_tab").getElementsByTagName("li")[2].addEventListener("click",function(){
    	//获取当前登录用户信息
	    oUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
    	//获取当前用户收藏的课程名数组
    	var collectLesson=oUser.collectLesson_;
        //循环所有课程，找出与该收藏课程数组相关的课程包，存入新数组
        var newAry=[];
        for(var i=0;i<aLesson.length;i++){
           for(var j=0;j<collectLesson.length;j++){
           	    //如果课程名符合，把该课程包放入新数组
           	    if(collectLesson[j]==aLesson[i].lessonName_){
           	    	newAry.push(aLesson[i]);
           	    }
           }
        }
        //显示打印课程，并创建分页按钮
        showLessonPage(newAry,16,"wantLearn_page","wantLearn_txt",showLessonDiv);
    });
    //选中我的课程默认显示，在学课程选项卡
    getById("learnTab").getElementsByTagName("li")[0].addEventListener("click",function(){
    	getById("myLesson_tab").getElementsByTagName("li")[0].onclick();
    	//从本地存储加载用户在学的课程包
    	yesPay_tabEvent(16,"nowLearnPage","nowLearnContent");
    });
    //给学习中心的我的订单，已支付选项卡添加点击事件
    getById("myTicket_tab").getElementsByTagName("li")[0].addEventListener("click",function(){yesPay_tabEvent(12,"yesPayPage","yesPayContent");});
    //给学习中心的我的订单，未支付选项卡添加点击事件
    getById("myTicket_tab").getElementsByTagName("li")[1].addEventListener("click",noPay_tabEvent);
    //选中我的订单默认显示已支付订单选项卡
    getById("learnTab").getElementsByTagName("li")[1].addEventListener("click",function(){
    	getById("myTicket_tab").getElementsByTagName("li")[0].onclick();
    	//从本地存储加载用户已支付的订单列表
    	yesPay_tabEvent(12,"yesPayPage","yesPayContent");
    	//显示随机推荐课程
        showRandomLesson(5,aLesson,"commend_lesson");
        // 设置更多课程点击事件
        getById("moreLesson").onclick=function(){
		    //显示随机推荐课程
	        showRandomLesson(5,aLesson,"commend_lesson");
        }
    });
    //给学习中心我的笔记添加点击事件
    getById("learnTab").getElementsByTagName("li")[2].addEventListener("click",function(){
    	MyNoteTabEvent(4,"myNotePage","myNoteContex");
    });
    //给学习中心的我的学习记录添加点击事件
    getById("learnTab").getElementsByTagName("li")[3].addEventListener("click",function(){
    	MyRecordTabEvent(6,"recordPage","LearnRecord");
    });
}else{
	//提示登录，跳转首页
	window.location.href="./index.html";
	//本地存储标记
	window.localStorage.setItem("HX170611_login",1);
}

//为结算按钮添加点击事件
getById("totalBtn").onclick=function(){
	//获取当前登录用户信息
	var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
    //获取所有订单所需金额
    var totalPrice=getNum(getById("total").innerText);
    //获取本地存储用户金额
    var userMoney=nowUser.bank_;
    //判断用户金额是否足够
    if(Number(userMoney)>Number(totalPrice)){
    	if(totalPrice==0){
    		alert("购物车空空如也！");
    		return;
    	}
    	if(confirm("当前订单所需"+totalPrice+"元，确认是否购买？成功购买后将跳转至已支付课程页面！")){
    		//循环将当前的用户未支付订单课程数组加入已支付订单课程数组
			for(var i=0;i<nowUser.ticketNoPay_.length;i++){
				nowUser.ticketYesPay_.push(nowUser.ticketNoPay_[i]);
			}
			//清除未支付订单的内容
			nowUser.ticketNoPay_=[];
			//减少用户账户金额
			nowUser.bank_=Number(userMoney)-Number(totalPrice);
			//增加用户积分(消费1金币获得10积分)
			//历史积分
			nowUser.allScore_=Number(nowUser.allScore_)+Number(totalPrice)*10;
			//当前积分
			nowUser.nowScore_=Number(nowUser.nowScore_)+Number(totalPrice)*10;
			//用户等级
			if(Number(nowUser.allScore_)<=3000){
				nowUser.rank_="初级";
			}else{
				if(Number(nowUser.allScore_)>3000&&Number(nowUser.allScore_)<8000){
                   nowUser.rank_="中级";
				}else{
					nowUser.rank_="高级";
				}
			}
		    //覆盖当前用户本地存储
		    window.localStorage.setItem("HX170611_nowUser",JSON.stringify(nowUser));
		    //覆盖所有用户本地存储
		    allUser=JSON.parse(window.localStorage.getItem("HX170611_allUser"));//获取所有用户信息
		    for(var j=0;j<allUser.length;j++){
		   	   if(allUser[j].user_==nowUser.user_){
		       allUser.splice(j,1,nowUser);//替换该用户信息
		       break;
		   	   }
		    }
		    //覆盖所有用户本地存储
		   	window.localStorage.setItem("HX170611_allUser",JSON.stringify(allUser));
		   	//重新加载用户未支付订单列表
		    noPay_tabEvent();
		    //显示用户当前余额
		    getById("money").innerHTML=nowUser.bank_+" 金币";
		    //显示用户当前积分
		    getById("jifen").innerHTML=nowUser.nowScore_;
		    //显示用户等级
		    getById("userExp").innerHTML=nowUser.rank_;
		    //购买成功跳转已支付页面
		    getById("myTicket_tab").getElementsByTagName("li")[0].onclick();
		    //从本地存储加载用户已支付的订单列表
    	    yesPay_tabEvent(12,"yesPayPage","yesPayContent");
    	}    	
    }else{
    	alert("余额不足，请充值！");
    }
	
}

//为积分兑换按钮安装点击事件
getById("duihuan").onclick=function(){
    //获取当前用户信息
    var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
    //获取所有用户信息
    var allUser=JSON.parse(window.localStorage.getItem("HX170611_allUser"));
    var wantRMB=prompt("请输入要兑换的金币数量：（100积分/金币）");
    //是否返回为空
    if(wantRMB!=null){
    	//判断是否为正整数
    	if(wantRMB.match(/^\+?[1-9][0-9]*$/)){
    		//判断积分是否充足
    		if(Number(wantRMB)*100<=Number(nowUser.nowScore_)){
                //改变金币
	    		nowUser.bank_=Number(nowUser.bank_)+Number(wantRMB);
	    		getById("money").innerHTML=nowUser.bank_+" 金币";
	    		//改变积分
	    	    nowUser.nowScore_=Number(nowUser.nowScore_)-Number(wantRMB)*100;
	            getById("jifen").innerHTML=nowUser.nowScore_;
	            //存入当前用户本地存储
	            window.localStorage.setItem("HX170611_nowUser",JSON.stringify(nowUser));
	            //存入所有用户本地存储
	            for(var i=0;i<allUser.length;i++){
	             	if(allUser[i].user_==nowUser.user_){
	             		allUser.splice(i,1,nowUser);
	             		break;
	             	}
	            }
	            window.localStorage.setItem("HX170611_allUser",JSON.stringify(allUser));
	            alert("兑换成功！");
    		}else{
    			alert("积分不够多你咋兑换捏？多买点课程吧！");
    		}
	    }else{
	    	alert("老铁，说实话你是不是瞎输的？！");
	    }
    }
}

//为充值按钮安装点击事件
getById("chongzhi").onclick=function(){
    //获取当前用户信息
    var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
    //获取所有用户信息
    var allUser=JSON.parse(window.localStorage.getItem("HX170611_allUser"));
    var wantRMB=prompt("请输入要充值的金币数量：");
    //是否返回为空
    if(wantRMB!=null){
       //是否为非零正整数
       if(wantRMB.match(/^\+?[1-9][0-9]*$/)){
            //确认密码
            var userPwd=prompt("偷偷告诉我你的登录密码是多少？我不会告诉别人的！");
            if(userPwd!=null){
	          	if(userPwd==nowUser.password_){
	          		//增加金币数量
	          		nowUser.bank_=Number(nowUser.bank_)+Number(wantRMB);
	          		//显示
	          		getById("money").innerHTML=nowUser.bank_+" 金币";
	          		//存入当前用户本地存储
		            window.localStorage.setItem("HX170611_nowUser",JSON.stringify(nowUser));
		            //存入所有用户本地存储
		            for(var i=0;i<allUser.length;i++){
		             	if(allUser[i].user_==nowUser.user_){
		             		allUser.splice(i,1,nowUser);
		             		break;
		             	}
		            }
		            window.localStorage.setItem("HX170611_allUser",JSON.stringify(allUser));
		            alert("便宜你了，不花一分钱这就让你充值成功了？！土豪，我们做朋友吧？");
	          	}else{
	          		alert("密码都错了，你是坏银吧？不要来充值了~");
	          	}
            }
       }else{
       	  alert("老铁，说实话你是不是瞎输的？！");
       }
    }
}



//判断是否为订单跳转
if(window.localStorage.getItem("HX170611_pay")==1){
    getById("learnTab").getElementsByTagName("li")[1].onclick();
    getById("myTicket_tab").getElementsByTagName("li")[1].onclick();
    //显示未支付订单
    noPay_tabEvent();
    //显示随机推荐课程
    showRandomLesson(5,aLesson,"commend_lesson");
    //清除标记
    window.localStorage.removeItem("HX170611_pay");
}

