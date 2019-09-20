//默认显示随机推荐课程
showRandomLesson(5,aLesson,"what_lesson")
////////////////////// 轮播动画效果///////////////////////
var oLeft=getById("banner_Left");
var oRight=getById("banner_Right");
var oPage=getById("banner_Page");
var abannerImg=getById("banner_Img").getElementsByTagName("img");
//显示轮播图分页按钮
showPageBtn("banner_Page",abannerImg,1,"div");
//默认自动播放图片
autoPlay();
// 给右侧按钮安装点击事件
oRight.onclick=function(){
	// 获取图片数组，循环查找当前显示的图片下标,显示下一张
	for(var i=0;i<abannerImg.length;i++){
		if(abannerImg[i].className=="showDiv"){
            //判断是否为最后一张，坐标归零
            if(i==abannerImg.length-1){
            	var pos=0; //从第一张重新开始
            }else{
            	var pos=i+1
            }
            //显示下一张
            var aBtn=oPage.getElementsByClassName("pageBtn");
            aBtn[pos].onclick();
            //跳出循环
            break;
		}
	}
}

// 给左侧按钮安装点击事件
oLeft.onclick=function(){
	// 获取图片数组，循环查找当前显示的图片下标,显示上一张
	for(var i=0;i<abannerImg.length;i++){
		if(abannerImg[i].className=="showDiv"){
            //判断是否为第一张，坐标归最大
            if(i==0){
            	var pos=abannerImg.length-1; //从最后一张重新开始
            }else{
            	var pos=i-1;
            }
            //显示上一张
            var aBtn=oPage.getElementsByClassName("pageBtn");
            aBtn[pos].onclick();
            //跳出循环
            break;
		}
	}
}

//鼠标移入事件
getById("banner_Div").onmouseover=function(){
	clearInterval(timer);
}
//鼠标移出事件
getById("banner_Div").onmouseout=function(){
	autoPlay();
}

/**
 * 显示分页按钮，并安装点击事件
 * @param  {[string]} page_id     [要生成分页按钮位置的ID]
 * @param  {[ary]} showAry         [要与按钮联动显示的对象数组]
 * @param  {[num]} onePageNum [每一页要显示的个数]
 * @param  {[string]} btnElementType [分页按钮的标签元素类型]
 * @return {[type]}             [description]
 */
function showPageBtn(page_id,showAry,onePageNum,btnElementType){
	var oPage=document.getElementById(page_id);
	//计算需分页页数
	var pageNum=Math.ceil(showAry.length/onePageNum);
	//循环创建按钮
    for(var i=0;i<pageNum;i++){
    	var oBtn=document.createElement(btnElementType);
    	oBtn.className="pageBtn";
    	oBtn.innerHTML=i+1;
    	oPage.appendChild(oBtn);//追加按钮到要显示的地方
    }
    //获取所有分页按钮，给按钮安装点击事件
    var aBtn=oPage.getElementsByClassName("pageBtn");
    aBtn[0].style.backgroundColor="orange";//默认显示第一张
    for(var j=0;j<pageNum;j++){
    	aBtn[j].pos=j;
        aBtn[j].onclick=function(){
        	//隐藏所有内容
        	for(var k=0;k<showAry.length;k++){
               showAry[k].className="hideDiv";
               aBtn[k].style.backgroundColor="#fff";
        	}
        	//显示当前内容
        	showAry[this.pos].className="showDiv";
        	aBtn[this.pos].style.backgroundColor="orange";
        }

    }
}

/**
 * 自动播放图片
 * @return {[type]} [description]
 */
function autoPlay(){
	timer=setInterval(function(){
		oRight.onclick();
	},2000);
}

//////////////////////////随机推荐课程///////////////////////////
//点击查看更多课程随机出现课程
getById("moreLesson").onclick=function(){
    showRandomLesson(5,aLesson,"what_lesson");
}

///////////////////// 师资团队 手风琴动画效果//////////////////////
    var oTeacher=getById("teachers");
    var aTeachers=[];
	 aTeachers=oTeacher.getElementsByTagName("div");
	for(var i=0;i<aTeachers.length;i++){
		aTeachers[i].num=i;
		aTeachers[i].onmouseover=function(){
            for(var m=0;m<aTeachers.length;m++){
            	//遍历缩小所有div尺寸
            	aTeachers[m].style.width=62+"px";
            }
            //改变放大当前鼠标所在div尺寸
			aTeachers[this.num].style.width=580+"px";
		}
		aTeachers[i].onmouseout=function(){
            for(var j=0;j<aTeachers.length;j++){
            //恢复原来的尺寸
			aTeachers[j].style.width=136+"px";
		    }
		}
	}
///////////////////// 学员作品 走马灯动画效果///////////////////////
var oWorks=getById("why_works");
var oWorker1=getById("worker1");
var oWorker2=getById("worker2");
oWorker2.innerHTML=oWorker1.innerHTML;
//滚动效果函数
function reMove(){
	if (oWorker1.offsetWidth==oWorks.scrollLeft) {
        oWorks.scrollLeft=0;
	}else{
		oWorks.scrollLeft++;
	}
}
//默认滚动
var timer2=setInterval('reMove()',20);

//鼠标移进事件
oWorks.onmouseover=function(){
	clearInterval(timer2);
}
//鼠标移出事件
oWorks.onmouseout=function(){
   timer2=setInterval('reMove()',20);
}

//是否弹窗登录标记
if(window.localStorage.getItem("HX170611_login")){
    alert("亲，您还未登录哦！");
    denglu();
    window.localStorage.removeItem("HX170611_login");
}