//给课程详情的选项卡安装点击事件
var aTab=document.getElementById("lessonTab").getElementsByTagName("li");
var aDiv=document.getElementById("tabContex").getElementsByClassName("Div");
tabEvent(aTab,aDiv);
//给发表评论按钮安装点击事件
setCommentBtnEvent("sendBtn","commentContent","editTxt","commentPage");
//显示随机推荐课程
showRandomLesson(5,aLesson,"commend_lesson");
// 设置更多课程点击事件
getById("moreLesson").onclick=function(){
	//显示随机推荐课程
    showRandomLesson(5,aLesson,"commend_lesson");
}

//判断并获取本地存储当前点击的课程
if(window.localStorage.getItem("HX170611_nowLesson")){
	var nowLessonName=window.localStorage.getItem("HX170611_nowLesson");
    //循环课程数组找到当前课程的数据
    for(var i=0;i<aLesson.length;i++){
    	if(aLesson[i].lessonName_==nowLessonName){
           var lessonInfo=aLesson[i];
           break;
    	}
    }
    ////////显示详情页的内容
    /////显示面包屑导航的信息
    getById("lesson_title").innerHTML="课程 >"+lessonInfo.lessonPosition_+" > "+lessonInfo.lessonClassify_+" > "+lessonInfo.lessonRank_+" > "+lessonInfo.lessonName_
    //显示课程名
    getById("lessonName").innerText=lessonInfo.lessonName_;
    //显示课程难度
    getById("info").innerText="难度："+lessonInfo.lessonRank_;
    //显示课程介绍
    getById("descript").innerHTML="<span>"+lessonInfo.lessonDitail_[0]+"</span>"+
                                  "<img src='"+lessonInfo.lessonDitail_[1]+"'>"+
                                  "<img src='"+lessonInfo.lessonDitail_[2]+"'>"
    //显示章节
    getById("section").innerHTML="";
    for(var i=0;i<lessonInfo.lessonSection_.length;i++){
        getById("section").innerHTML+= "<div>"+
                                            "<span>第"+Number(i+1)+"节  </span><label>"+lessonInfo.lessonSection_[i].sectionName+"</label>"+
                                            "<p>【录播】第"+Number(i+1)+"节："+lessonInfo.lessonSection_[i].sectionName+"（"+lessonInfo.lessonSection_[i].sectionTime+"）</p>"+
                                       "</div>"
    }
    //显示开始学习
    getById("starLearn").innerText="立即报名>>";
    //判断用户是否已登录，有显示是否已收藏，是否已经购买，已经购买显示开始学习
    if(window.localStorage.getItem("HX170611_nowUser")){
    	//显示价格
        getById("starLearn").innerText="加入购物车（"+lessonInfo.lessonPrice_+" )"
    	//获取当前用户信息
    	var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
    	//判断是否已收藏
    	for(var i=0;i<nowUser.collectLesson_.length;i++){
    		if(nowUser.collectLesson_[i]==nowLessonName){
    			//收藏图片改变
    			getById("colect").children[0].src="./img/collect2.png";
    			//收藏文字改变
    			getById("colect").children[1].innerText="取消收藏";
    	    }
    	}
    	//判断是否已加入购物车
    	for(var j=0;j<nowUser.ticketNoPay_.length;j++){
    		if(nowUser.ticketNoPay_[j]==nowLessonName){
    			//显示已加入购物车
                getById("starLearn").innerText="已加入购物车，去支付>>>";
    		}
    	}
    	//判断是否已购买
    	for(var k=0;k<nowUser.ticketYesPay_.length;k++){
    		if(nowUser.ticketYesPay_[k]==nowLessonName){
    			//显示已加入购物车
                getById("starLearn").innerHTML="开始学习";
    		}
    	}
    }

    
    //获取与该课程相关的评论条
    var wantComment=getAboutCommentBar();
    //显示评论并创建分页按钮
    showLessonPage(wantComment,6,"commentPage","commentContent",showCommentBar);
}


//给收藏设置点击事件
getById("colect").onclick=function(){
	//判断用户是否登录
	if(window.localStorage.getItem("HX170611_nowUser")){
		//判断收藏状态
		if(this.children[1].innerText=="收藏"){
		  //收藏图片改变
		  this.children[0].src="./img/collect2.png";
		  //收藏文字改变
		  this.children[1].innerText="取消收藏";  
		  //获取当前课程名
		  var nowLessonName=window.localStorage.getItem("HX170611_nowLesson");
		  //获取该登录用户信息
		  var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
		  //从用户的收藏信息追加该该课程名
		  nowUser.collectLesson_.push(nowLessonName);
		  //存入当前用户信息
		  window.localStorage.setItem("HX170611_nowUser",JSON.stringify(nowUser));
          //存入所有用户信息
          var allUser=JSON.parse(window.localStorage.getItem("HX170611_allUser"));
          for(var i=0;i<allUser.length;i++){
          	if(allUser[i].user_==nowUser.user_){
          		allUser.splice(i,1);
          		allUser.push(nowUser);
          		window.localStorage.setItem("HX170611_allUser",JSON.stringify(allUser));
          		break;
          	}
          }
	    }else{
	    	if(confirm("当前课程已收藏，是否取消收藏？")){
	    		//收藏图片改变
		        this.children[0].src="./img/collect1.png";
		        //收藏文字改变
		        this.children[1].innerText="收藏";
		        //获取当前课程名
				var nowLessonName=window.localStorage.getItem("HX170611_nowLesson");
				//获取该登录用户信息
				var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
				//从当前用户的收藏信息删除该该课程名
				for(var i=0;i<nowUser.collectLesson_.length;i++){
					if(nowUser.collectLesson_[i]==nowLessonName){
						nowUser.collectLesson_.splice(i,1);
						break;
					}
				}
				//存入当前用户信息
				window.localStorage.setItem("HX170611_nowUser",JSON.stringify(nowUser));
		        //存入所有用户信息
		        var allUser=JSON.parse(window.localStorage.getItem("HX170611_allUser"));
		        for(var i=0;i<allUser.length;i++){
		          	if(allUser[i].user_==nowUser.user_){
		          		allUser.splice(i,1);
		          		allUser.push(nowUser);
		          		window.localStorage.setItem("HX170611_allUser",JSON.stringify(allUser));
		          		break;
		          	}
		        }
	    	}
	    	 
	    }
	}else{
		alert("请先登录才能收藏课程！");
		denglu();
	}
	
}

//给开始学习设置点击事件
getById("starLearn").onclick=function(){
	//判断用户是否登录
	if(window.localStorage.getItem("HX170611_nowUser")){
		//模糊匹配按钮关键字，判断当前状态
		var string=this.innerText;
		if(string.indexOf("加入购物车（")!=-1){
            //改变按钮状态
			this.innerText="已加入购物车，去支付>>>"
	        //获取当前课程名
			var nowLessonName=window.localStorage.getItem("HX170611_nowLesson");
			//获取该登录用户信息
			var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
			//从用户的未支付订单信息中追加该该课程名
			nowUser.ticketNoPay_.push(nowLessonName);
			//存入当前用户信息
			window.localStorage.setItem("HX170611_nowUser",JSON.stringify(nowUser));
	        //存入所有用户信息
	        var allUser=JSON.parse(window.localStorage.getItem("HX170611_allUser"));
	        for(var i=0;i<allUser.length;i++){
	          	if(allUser[i].user_==nowUser.user_){
	          		allUser.splice(i,1);
	          		allUser.push(nowUser);
	          		window.localStorage.setItem("HX170611_allUser",JSON.stringify(allUser));
	          		break;
	          	}
	        }
		}else{
			if(this.innerText=="开始学习"){
			  	//获取当前课程名
			    var nowLessonName=window.localStorage.getItem("HX170611_nowLesson");
			    //获取当前笔记记录时间
	            var myDate=new Date();
	            var nowTime=myDate.toLocaleString();
	            //获取当前课程名对应的课程封面
	            for(var i=0;i<aLesson.length;i++){
	            	if(aLesson[i].lessonName_==nowLessonName){
	            		var lessonImg=aLesson[i].lessonImg_;
	            		break;
	            	}
	            }
			  	//本地存储记录学习记录
			  	aMyRecord(nowLessonName,nowTime,lessonImg);
			  	//跳转视频中心
			  	window.location.href="./video_center.html";
			}else{
               if (confirm("是否跳转到学习中心支付？")) {
			  	//跳转学习中心
			  	window.location.href="./learn_center.html";
			  	//标记
			  	window.localStorage.setItem("HX170611_pay",1)
			   }
			}			  				
		}			

	}else{
		alert("请先登录才能学习课程！");
		denglu();
	}
}