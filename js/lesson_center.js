//判断本地存储是否有搜索词，有则显示搜索词的结果
whereSearch("search_txt",aLesson,"lessonPage");

/**
 * [changeBtnColor 筛选按钮点击改变颜色样式]
 * @param  {[string]} id [筛选类别的ID]
 * @return {[type]}    [description]
 */
function changeBtnColor(id){
	var aBtn=getById(id).getElementsByTagName("span");
	for(var i=0;i<aBtn.length;i++){
      aBtn[i].onclick=function(){
      	//清空所有按钮颜色
      	for(var j=0;j<aBtn.length;j++){
      		aBtn[j].style.backgroundColor="";
      		aBtn[j].style.color="";
      	}
      	//显示当前按钮颜色
      	this.style.backgroundColor="black";
      	this.style.color="white";
      }
	}
}


//为筛选按钮安装点击事件
function selectBtnEven(){
	//安装点击该条筛选类别的按钮改变颜色事件
	changeBtnColor("position");
    changeBtnColor("classify");
    changeBtnColor("rank");
	//获取所有筛选按钮，安装点击筛选事件
	var aBtn=document.getElementById("body_select").getElementsByTagName("span");
    for(var i=0;i<aBtn.length;i++){
    	aBtn[i].addEventListener("click",function(){
            //循环获取有颜色的按钮的内容，放进数组
            var colorContext=[];
            for(var j=0;j<aBtn.length;j++){
            	if(aBtn[j].style.color=="white"){
            	   colorContext.push(aBtn[j].innerText);
                }
            }
            //从课程包中筛选需要的数组，存入新数组
            //筛选课程方向
            var positionLesson=[];
            //判断用户所选该级是否为全部
        	if(colorContext[0]=="全部"){
                positionLesson=aLesson;
        	}else{
        		for(var k=0;k<aLesson.length;k++){
	            	//判断符合当前选中的方向的课程
	                if(aLesson[k].lessonPosition_==colorContext[0]){
	                   positionLesson.push(aLesson[k]);
	                }
                }
        	}
            //筛选课程类别
            var classifyLesson=[];
            //判断用户所选该级是否为全部
            if(colorContext[1]=="全部"){
                classifyLesson=positionLesson;
            }else{
            	for(var m=0;m<positionLesson.length;m++){
            		//判断符合当前选中的分类的课程
            		if(positionLesson[m].lessonClassify_==colorContext[1]){
            			classifyLesson.push(positionLesson[m]);
            		}
            	}
            }
            //筛选课程难度
            var rankLesson=[];
            //判断用户所选该级是否为全部
            if(colorContext[2]=="全部"){
            	rankLesson=classifyLesson;
            }else{
            	for(var n=0;n<classifyLesson.length;n++){
            		//判断符合当前选中的难度按钮
            		if (classifyLesson[n].lessonRank_==colorContext[2]) {
            			rankLesson.push(classifyLesson[n]);
            		}
            	}
            }
            //判断当前选中的时候是哪种排序,重新排序并显示
            reSort(rankLesson);
            //添加排序下拉框的值改变时的事件
            onChangeEvent("up_down",rankLesson);
            //添加单选按钮的值改变时的事件
            onChangeEvent("selectScore",rankLesson);
            onChangeEvent("selectFocus",rankLesson);
            //显示随机推荐课程
            showRandomLesson(5,aLesson,"commend_lesson");
    	})
    }

}
//为升降排序安装按钮值改变的事件
function getSelectMotion(ary,property1,property2){
        var oScore=getById("selectScore");
        var oFocus=getById("selectFocus");
        var oUpDown=getById("up_down");
        var aryResult=[];
        if (oScore.checked==true){
	        switch(oUpDown.value){
	        case '0':
	        aryResult=ary;
	        break;
	        case 'up':
	        aryResult=arySelectUp(ary,property1);
	        break;
	        case 'down':
	        aryResult=arySelectDown(ary,property1);
	        break;
	        }
        }else{
	        if (oFocus.checked==true){
	          switch(oUpDown.value){
	            case '0':
	            aryResult=ary;
	            break;
	            case 'up':
	            aryResult=arySelectUp(ary,property2);
	            break;
	            case 'down':
	            aryResult=arySelectDown(ary,property2);
	            break;
	          }
	        }
        }
        return aryResult;
}
//按钮的值改变时，显示对应排序的内容
//*id 选项值改变时要产生排序事件的选项按钮的id
//* ary 要排序的内容
function onChangeEvent(id,ary){
   getById(id).onchange=function(){
        reSort(ary);
    }
}
//判断当前选中的是哪种排序,重新排序并显示
////* ary 要重新排序的内容
function reSort(ary){
    var motionAry =getSelectMotion(ary,"lessonScore_","lessonFocus_");
    showLessonPage(motionAry,15,"lessonPage","body_contex",showLessonDiv);  //显示当前获取的新数组的课程内容
}

//为更多推荐课程安装点击事件
document.getElementById("moreLesson").onclick=function(){
   showRandomLesson(5,aLesson,"commend_lesson");
}
