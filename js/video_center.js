//给视频中心的左侧选项卡安装点击事件
var aTab=document.getElementById("lessonTab").getElementsByTagName("li");
var aDiv=document.getElementById("tabContex").getElementsByClassName("Div");
tabEvent(aTab,aDiv);
//给视频中心的右侧选项卡安装点击事件
var aTab=document.getElementById("videoTab").getElementsByTagName("li");
var aDiv=document.getElementById("videoContex").getElementsByClassName("Div2");
tabEvent(aTab,aDiv);
//给发表提问按钮安装点击事件
setCommentBtnEvent("sendQuestion","questionContent","editQuestion","questionPage");
//给发表评论按钮安装点击事件
setCommentBtnEvent("sendBtn","commentContent","editTxt","commentPage");
//设置评分鼠标移动、点击事件
pingfenMouseOver();
//判断并获取本地存储当前点击的课程
if(window.localStorage.getItem("HX170611_nowLesson")){
	var nowLessonName=window.localStorage.getItem("HX170611_nowLesson");
	var aLesson=JSON.parse(window.localStorage.getItem("HX170611_allLesson"));
    //循环课程数组找到当前课程的数据
    for(var i=0;i<aLesson.length;i++){
    	if(aLesson[i].lessonName_==nowLessonName){
           var lessonInfo=aLesson[i];
           break;
    	}
    }
    ////////显示视频中心的信息//////////
    //显示章节
    getById("videoSection").innerHTML="";
    for(var j=0;j<lessonInfo.lessonSection_.length;j++){
    	getById("videoSection").innerHTML+="<li onclick='javascript:showSection(this)' title='"+"第"+Number(j+1)+"节："+lessonInfo.lessonSection_[j].sectionName+"（"+lessonInfo.lessonSection_[j].sectionTime+")"+"'>"+
    	                                        lessonInfo.lessonName_+" 第"+Number(j+1)+"节："+lessonInfo.lessonSection_[j].sectionName+"（"+lessonInfo.lessonSection_[j].sectionTime+")"+
    	                                   "</li>" 
    }
    //显示课程内容
    getById("descript").innerHTML="<span>"+lessonInfo.lessonDitail_[0]+"</span>"+
                                  "<img src='"+lessonInfo.lessonDitail_[1]+"'>"+
                                  "<img src='"+lessonInfo.lessonDitail_[2]+"'>"
    //获取与该课程相关的评论条
    var wantComment=getAboutCommentBar();
    //显示提问并创建分页按钮
    showLessonPage(wantComment,6,"questionPage","questionContent",showCommentBar);
    //显示评论并创建分页按钮
    showLessonPage(wantComment,6,"commentPage","commentContent",showCommentBar);
    //显示评分
    var allScore=(lessonInfo.lessonScore_/lessonInfo.pingFenNum_).toFixed(1);
    getById("scoreNum").innerText=allScore;
    getById("scoreNum1").innerText="课程质量："+allScore;
    getById("scoreNum2").innerText="老师讲授："+allScore;
    getById("scoreNum3").innerText="作业辅导："+allScore;
    getById("scoreNum4").innerText="是否有用："+allScore;
    /////显示用户评分星星数
    //获取当前登录用户信息
    var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
    //计算星星个数
    for(var k=0;k<nowUser.pingFen_.length;k++){
    	if(nowUser.pingFen_[k].lessonName_==nowLessonName){
    		var starNum=Number(nowUser.pingFen_[k].lessonScore_)/2;
    		//显示星星数
		    var aImg=getById("pinfen_title").getElementsByTagName("img");
		    for(var m=0;m<starNum;m++){
		    	aImg[m].setAttribute("src","./img/star1.png");
		    }
		    //清除鼠标移入事件
            for(var m=0;m<aImg.length;m++){
            	aImg[m].onmouseover=null;
            }
    		break;
    	}
    }
}else{
	//提示登录，跳转首页
	window.location.href="./index.html";
	//本地存储标记
	window.localStorage.setItem("HX170611_login",1);
}

function showSection(obj){
    //清除所有样式
    var aLi=obj.parentElement.children;
    for(var i=0;i<aLi.length;i++){
    	aLi[i].style.height="";
    	aLi[i].style.lineHeight="";
    	aLi[i].style.backgroundColor="";
    }
    //显示当前的样式
    obj.style.height="70px";
    obj.style.lineHeight="70px";
    obj.style.backgroundColor="#14598C";
    obj.style.color="white";

}

//给保存笔记添加点击事件
getById("sendMyNote").onclick=function(){
	//获取当前课程名
	var nowLessonName=window.localStorage.getItem("HX170611_nowLesson");
	//获取当前笔记记录时间
	var myDate=new Date();
	var nowTime=myDate.toLocaleString();
	//获取当前课程封面图片
	for(var i=0;i<aLesson.length;i++ ){
		if(aLesson[i].lessonName_==nowLessonName){
			var lessonImg=aLesson[i].lessonImg_;
			break;
		}
	}
	//获取当前的笔记内容
	var myNoteTxt=getById("myNoteTxt").innerText;
	//去除换行符
	myNoteTxt = myNoteTxt.replace(/<\/?.+?>/g,""); 
	myNoteTxt = myNoteTxt.replace(/[\r\n]/g, "");
	//覆盖更新本地存储
	aMyNote(nowLessonName,nowTime,lessonImg,myNoteTxt);
	alert("保存成功！请在个人中心-->我的笔记查看！");
}

//设置评分鼠标移动、点击事件
function pingfenMouseOver(){
	var aImg=getById("pinfen_title").getElementsByTagName("img");
	for(var i=0;i<aImg.length;i++){
		aImg[i].pos=i;//标记当前星星位置
		//设置当前星星鼠标移入事件
		aImg[i].onmouseover=function(){
			//清空所有的星星颜色
			for(var k=0;k<aImg.length;k++){
			    aImg[k].setAttribute("src","./img/star2.png");
			}
			//显示当前的及以下的星星颜色
			for(var j=0;j<this.pos+1;j++){
                aImg[j].setAttribute("src","./img/star1.png");
			}
		}
		//设置当前星星鼠标点击事件
		aImg[i].onclick=function(){
            //清除鼠标移入事件
            for(var m=0;m<aImg.length;m++){
            	aImg[m].onmouseover=null;
            }
            //获取当前课程本地存储
            var nowLessonName=window.localStorage.getItem("HX170611_nowLesson");
            //获取当前用户本地存储
            var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
            //获取所有课程信息
            var aLesson=JSON.parse(window.localStorage.getItem("HX170611_allLesson"));
            //获取所有用户本地存储
            var allUser=JSON.parse(window.localStorage.getItem("HX170611_allUser"));
            //获取当前课程包信息
            for(var n=0 ;n<aLesson.length;n++){
        	    if(aLesson[n].lessonName_==nowLessonName){
	        		//改变当前课程包的总分数
	                aLesson[n].lessonScore_=Number(aLesson[n].lessonScore_)+(Number(this.pos)+1)*2;
	                //改变当前课程包评分的总人数
	                aLesson[n].pingFenNum_=Number(aLesson[n].pingFenNum_)+1;
	                //改变用户评分的本地存储
	                //判断该用户当前课程是否存在评分
                	for(var a=0;a<nowUser.pingFen_.length;a++){
                		if(nowUser.pingFen_[a].lessonName_==nowLessonName){
                              alert("亲，您已评分过该课程！");
                              return;
                		}
                	}
                	//存入该用户评分信息
                	nowUser.pingFen_.push({"lessonName_":nowLessonName,"lessonScore_":(Number(this.pos)+1)*2});
	                //显示当前课程包的平均评分
	                getById("scoreNum").innerText=(aLesson[n].lessonScore_/aLesson[n].pingFenNum_).toFixed(1);
		    		//存入所有课程包的本地存储
		    		window.localStorage.setItem("HX170611_allLesson",JSON.stringify(aLesson));
		    		//存入当前用户本地存储
				    window.localStorage.setItem("HX170611_nowUser",JSON.stringify(nowUser));
				    //存入所有用户本地存储
				    for(var i=0;i<allUser.length;i++){
				    	if(allUser[i].user_==nowUser.user_){
				    		//替换该用户信息
				    		allUser.splice(i,1,nowUser);
				    		//存入本地存储
				    		window.localStorage.setItem("HX170611_allUser",JSON.stringify(allUser));
				            break;
				    	}
				    }
		            break;
			    }
			}
        }
    }
}