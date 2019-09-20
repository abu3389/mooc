/////////////////通用获取函数////////////////////
/**
 * [getById 获取该对象]
 * @param  {[string]} id [该对象的id]
 * @return {[type]}    [通过该id获取到的对象]
 */
	function getById(id){
		return document.getElementById(id);
	}
/**
/**
 * [getByTageName 获取符合标签名的数组对象]
 * @param  {[string]} name [这些对象的标签名称]
 * @return {[ary]}      [通过该标签获取得到的数组对象]
 */
	function getByTageName(name){
		return document.getElementsByTagName(name);
	}
/**
 * [getByClassName 获取符合class名的数组对象]
 * @param  {[string]} className [这些对象的class名称]
 * @return {[ary]}           [通过该class获取得到的数组对象]
 */
	function getByClassName(className){
		return document.getElementsByClassName(className);
	}

///////////////////////////////初始化课程包数据/////////////////////////////////////////////////////////////////////////////////////////////////////////
aryLesson("C语言强化1","./img/c.jpg","前端开发","HTML/CSS","初级","1","2","¥100","王老师",["这是C语言强化1的课程介绍","./img/img_01.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介1","sectionTime":"5分钟"},{"sectionName":"面向对象的概念1","sectionTime":"10分钟"},{"sectionName":"面向对象的基本实践1","sectionTime":"14分钟"},{"sectionName":"面向对象的高级实践1","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践1","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化2","./img/cplus.jpg","后端开发","JavaScript","中级","3","4","¥123","张老师",["这是C语言强化2的课程介绍","./img/img_02.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介2","sectionTime":"6分钟"},{"sectionName":"面向对象的概念2","sectionTime":"12分钟"},{"sectionName":"面向对象的基本实践2","sectionTime":"15分钟"},{"sectionName":"面向对象的高级实践2","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践2","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化3","./img/css3.jpg","移动开发","CSS3","高级","5","6","¥145","李老师",["这是C语言强化3的课程介绍","./img/img_03.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介3","sectionTime":"4分钟"},{"sectionName":"面向对象的概念3","sectionTime":"14分钟"},{"sectionName":"面向对象的基本实践3","sectionTime":"14分钟"},{"sectionName":"面向对象的高级实践3","sectionTime":"15分钟"},{"sectionName":"面向对象的特殊实践3","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化4","./img/html.jpg","后端开发","HTML5","初级","7","8","¥126","赵老师",["这是C语言强化4的课程介绍","./img/img_02.jpg","./img/img_03.jpg"],[{"sectionName":"课程简介4","sectionTime":"2分钟"},{"sectionName":"面向对象的概念4","sectionTime":"15分钟"},{"sectionName":"面向对象的基本实践4","sectionTime":"12分钟"},{"sectionName":"面向对象的高级实践4","sectionTime":"18分钟"},{"sectionName":"面向对象的特殊实践4","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化5","./img/ios.jpg","移动开发","Android","高级","9","10","¥145","钱老师",["这是C语言强化5的课程介绍","./img/img_01.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介5","sectionTime":"1分钟"},{"sectionName":"面向对象的概念5","sectionTime":"14分钟"},{"sectionName":"面向对象的基本实践5","sectionTime":"11分钟"},{"sectionName":"面向对象的高级实践5","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践5","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化6","./img/jq.jpg","移动开发","Android","初级","10","9","¥180","孙老师",["这是C语言强化6的课程介绍","./img/img_02.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介6","sectionTime":"8分钟"},{"sectionName":"面向对象的概念6","sectionTime":"13分钟"},{"sectionName":"面向对象的基本实践6","sectionTime":"13分钟"},{"sectionName":"面向对象的高级实践6","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践6","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化7","./img/js.jpg","移动开发","HTML5","高级","8","7","¥145","李老师",["这是C语言强化7的课程介绍","./img/img_01.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介7","sectionTime":"6分钟"},{"sectionName":"面向对象的概念7","sectionTime":"18分钟"},{"sectionName":"面向对象的基本实践7","sectionTime":"17分钟"},{"sectionName":"面向对象的高级实践7","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践7","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化8","./img/java.jpg","后端开发","JavaScript","中级","6","5","¥145","周老师",["这是C语言强化8的课程介绍","./img/img_03.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介8","sectionTime":"4分钟"},{"sectionName":"面向对象的概念8","sectionTime":"18分钟"},{"sectionName":"面向对象的基本实践8","sectionTime":"14分钟"},{"sectionName":"面向对象的高级实践8","sectionTime":"16分钟"},{"sectionName":"面向对象的特殊实践8","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化9","./img/php.jpg","后端开发","JavaScript","中级","4","3","¥185","吴老师",["这是C语言强化9的课程介绍","./img/img_02.jpg","./img/img_03.jpg"],[{"sectionName":"课程简介9","sectionTime":"2分钟"},{"sectionName":"面向对象的概念9","sectionTime":"15分钟"},{"sectionName":"面向对象的基本实践9","sectionTime":"16分钟"},{"sectionName":"面向对象的高级实践9","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践9","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化10","./img/u3d.jpg","移动开发","Android","高级","2","1","¥136","杨老师",["这是C语言强化10的课程介绍","./img/img_01.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介10","sectionTime":"1分钟"},{"sectionName":"面向对象的概念10","sectionTime":"11分钟"},{"sectionName":"面向对象的基本实践10","sectionTime":"19分钟"},{"sectionName":"面向对象的高级实践10","sectionTime":"10分钟"},{"sectionName":"面向对象的特殊实践10","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化11","./img/html.jpg","前端开发","HTML/CSS","初级","8","6","¥256","张老师",["这是C语言强化11的课程介绍","./img/img_02.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介11","sectionTime":"8分钟"},{"sectionName":"面向对象的概念11","sectionTime":"13分钟"},{"sectionName":"面向对象的基本实践11","sectionTime":"25分钟"},{"sectionName":"面向对象的高级实践11","sectionTime":"15分钟"},{"sectionName":"面向对象的特殊实践11","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化12","./img/jq.jpg","移动开发","HTML5","高级","7","7","¥354","王老师",["这是C语言强化12的课程介绍","./img/img_01.jpg","./img/img_03.jpg"],[{"sectionName":"课程简介12","sectionTime":"3分钟"},{"sectionName":"面向对象的概念12","sectionTime":"10分钟"},{"sectionName":"面向对象的基本实践12","sectionTime":"36分钟"},{"sectionName":"面向对象的高级实践12","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践12","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化13","./img/css3.jpg","前端开发","HTML5","中级","6","6","¥256","赵老师",["这是C语言强化13的课程介绍","./img/img_03.jpg","./img/img_03.jpg"],[{"sectionName":"课程简介13","sectionTime":"7分钟"},{"sectionName":"面向对象的概念13","sectionTime":"14分钟"},{"sectionName":"面向对象的基本实践13","sectionTime":"15分钟"},{"sectionName":"面向对象的高级实践13","sectionTime":"25分钟"},{"sectionName":"面向对象的特殊实践13","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化14","./img/jq.jpg","移动开发","HTML5","初级","5","5","¥369","李老师",["这是C语言强化14的课程介绍","./img/img_01.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介14","sectionTime":"2分钟"},{"sectionName":"面向对象的概念14","sectionTime":"16分钟"},{"sectionName":"面向对象的基本实践14","sectionTime":"26分钟"},{"sectionName":"面向对象的高级实践14","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践14","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化15","./img/c.jpg","移动开发","CSS3","高级","4","4","¥145","杨老师",["这是C语言强化15的课程介绍","./img/img_02.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介15","sectionTime":"5分钟"},{"sectionName":"面向对象的概念15","sectionTime":"17分钟"},{"sectionName":"面向对象的基本实践15","sectionTime":"24分钟"},{"sectionName":"面向对象的高级实践15","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践15","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化16","./img/cplus.jpg","前端开发","CSS3","中级","3","3","¥489","吴老师",["这是C语言强化16的课程介绍","./img/img_01.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介16","sectionTime":"6分钟"},{"sectionName":"面向对象的概念16","sectionTime":"11分钟"},{"sectionName":"面向对象的基本实践16","sectionTime":"26分钟"},{"sectionName":"面向对象的高级实践16","sectionTime":"27分钟"},{"sectionName":"面向对象的特殊实践16","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化17","./img/ios.jpg","移动开发","CSS3","高级","2","2","¥456","赵老师",["这是C语言强化17的课程介绍","./img/img_02.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介17","sectionTime":"3分钟"},{"sectionName":"面向对象的概念17","sectionTime":"12分钟"},{"sectionName":"面向对象的基本实践17","sectionTime":"27分钟"},{"sectionName":"面向对象的高级实践17","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践17","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化18","./img/php.jpg","后端开发","JavaScript","中级","1","1","¥475","张老师",["这是C语言强化18的课程介绍","./img/img_03.jpg","./img/img_03.jpg"],[{"sectionName":"课程简介18","sectionTime":"7分钟"},{"sectionName":"面向对象的概念18","sectionTime":"17分钟"},{"sectionName":"面向对象的基本实践18","sectionTime":"29分钟"},{"sectionName":"面向对象的高级实践18","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践18","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化19","./img/html.jpg","前端开发","HTML/CSS","初级","1","3","¥455","王老师",["这是C语言强化19的课程介绍","./img/img_03.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介19","sectionTime":"7分钟"},{"sectionName":"面向对象的概念19","sectionTime":"16分钟"},{"sectionName":"面向对象的基本实践19","sectionTime":"23分钟"},{"sectionName":"面向对象的高级实践19","sectionTime":"26分钟"},{"sectionName":"面向对象的特殊实践19","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化20","./img/java.jpg","前端开发","JavaScript","中级","1","4","¥474","李老师",["这是C语言强化20的课程介绍","./img/img_01.jpg","./img/img_03.jpg"],[{"sectionName":"课程简介20","sectionTime":"2分钟"},{"sectionName":"面向对象的概念20","sectionTime":"12分钟"},{"sectionName":"面向对象的基本实践20","sectionTime":"24分钟"},{"sectionName":"面向对象的高级实践20","sectionTime":"25分钟"},{"sectionName":"面向对象的特殊实践20","sectionTime":"25分钟"}]);
aryLesson("C语言强化21","./img/php.jpg","后端开发","Android","中级","8","1","¥457","孙老师",["这是C语言强化21的课程介绍","./img/img_02.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介21","sectionTime":"3分钟"},{"sectionName":"面向对象的概念21","sectionTime":"17分钟"},{"sectionName":"面向对象的基本实践21","sectionTime":"27分钟"},{"sectionName":"面向对象的高级实践21","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践21","sectionTime":"25分钟"},{"sectionName":"面向对象的特殊实践21","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化22","./img/ios.jpg","移动开发","CSS3","高级","5","8","¥365","赵老师",["这是C语言强化22的课程介绍","./img/img_03.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介22","sectionTime":"4分钟"},{"sectionName":"面向对象的概念22","sectionTime":"16分钟"},{"sectionName":"面向对象的基本实践22","sectionTime":"20分钟"},{"sectionName":"面向对象的高级实践22","sectionTime":"27分钟"},{"sectionName":"面向对象的特殊实践22","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化23","./img/mobile.jpg","移动开发","CSS3","中级","9","3","¥254","周老师",["这是C语言强化23的课程介绍","./img/img_02.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介23","sectionTime":"6分钟"},{"sectionName":"面向对象的概念23","sectionTime":"17分钟"},{"sectionName":"面向对象的基本实践23","sectionTime":"17分钟"},{"sectionName":"面向对象的高级实践23","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践23","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化24","./img/php.jpg","后端开发","Android","初级","7","6","¥324","张老师",["这是C语言强化24的课程介绍","./img/img_03.jpg","./img/img_03.jpg"],[{"sectionName":"课程简介24","sectionTime":"9分钟"},{"sectionName":"面向对象的概念24","sectionTime":"13分钟"},{"sectionName":"面向对象的基本实践24","sectionTime":"15分钟"},{"sectionName":"面向对象的高级实践24","sectionTime":"28分钟"},{"sectionName":"面向对象的特殊实践24","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化25","./img/css3.jpg","前端开发","JavaScript","中级","2","5","¥354","杨老师",["这是C语言强化25的课程介绍","./img/img_03.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介25","sectionTime":"3分钟"},{"sectionName":"面向对象的概念25","sectionTime":"11分钟"},{"sectionName":"面向对象的基本实践25","sectionTime":"15分钟"},{"sectionName":"面向对象的高级实践25","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践25","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化26","./img/jq.jpg","前端开发","HTML/CSS","初级","3","4","¥125","吴老师",["这是C语言强化26的课程介绍","./img/img_01.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介26","sectionTime":"2分钟"},{"sectionName":"面向对象的概念26","sectionTime":"15分钟"},{"sectionName":"面向对象的基本实践26","sectionTime":"14分钟"},{"sectionName":"面向对象的高级实践26","sectionTime":"24分钟"},{"sectionName":"面向对象的特殊实践26","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化27","./img/u3d.jpg","后端开发","JavaScript","中级","8","11","¥135","林老师",["这是C语言强化27的课程介绍","./img/img_01.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介27","sectionTime":"7分钟"},{"sectionName":"面向对象的概念27","sectionTime":"14分钟"},{"sectionName":"面向对象的基本实践27","sectionTime":"15分钟"},{"sectionName":"面向对象的高级实践27","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践27","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化28","./img/java.jpg","移动开发","CSS3","高级","9","12","¥148","李老师",["这是C语言强化28的课程介绍","./img/img_02.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介28","sectionTime":"5分钟"},{"sectionName":"面向对象的概念28","sectionTime":"18分钟"},{"sectionName":"面向对象的基本实践28","sectionTime":"19分钟"},{"sectionName":"面向对象的高级实践28","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践28","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化29","./img/c.jpg","前端开发","JavaScript","初级","5","13","¥148","赵老师",["这是C语言强化29的课程介绍","./img/img_01.jpg","./img/img_03.jpg"],[{"sectionName":"课程简介29","sectionTime":"5分钟"},{"sectionName":"面向对象的概念29","sectionTime":"13分钟"},{"sectionName":"面向对象的基本实践29","sectionTime":"15分钟"},{"sectionName":"面向对象的高级实践29","sectionTime":"25分钟"},{"sectionName":"面向对象的特殊实践29","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化30","./img/cplus.jpg","前端开发","HTML/CSS","中级","8","17","¥155","杨老师",["这是C语言强化30的课程介绍","./img/img_01.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介30","sectionTime":"5分钟"},{"sectionName":"面向对象的概念30","sectionTime":"14分钟"},{"sectionName":"面向对象的基本实践30","sectionTime":"14分钟"},{"sectionName":"面向对象的高级实践30","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践30","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化31","./img/jq.jpg","移动开发","HTML5","高级","6","14","¥358","王老师",["这是C语言强化31的课程介绍","./img/img_03.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介31","sectionTime":"6分钟"},{"sectionName":"面向对象的概念31","sectionTime":"12分钟"},{"sectionName":"面向对象的基本实践31","sectionTime":"15分钟"},{"sectionName":"面向对象的高级实践31","sectionTime":"24分钟"},{"sectionName":"面向对象的特殊实践31","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化32","./img/css3.jpg","前端开发","CSS3","中级","5","21","¥102","张老师",["这是C语言强化32的课程介绍","./img/img_01.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介32","sectionTime":"6分钟"},{"sectionName":"面向对象的概念32","sectionTime":"17分钟"},{"sectionName":"面向对象的基本实践32","sectionTime":"23分钟"},{"sectionName":"面向对象的高级实践32","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践32","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化33","./img/ios.jpg","移动开发","HTML/CSS","高级","7","19","¥223","林老师",["这是C语言强化33的课程介绍","./img/img_02.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介33","sectionTime":"7分钟"},{"sectionName":"面向对象的概念33","sectionTime":"13分钟"},{"sectionName":"面向对象的基本实践33","sectionTime":"15分钟"},{"sectionName":"面向对象的高级实践33","sectionTime":"24分钟"},{"sectionName":"面向对象的特殊实践33","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化34","./img/html.jpg","前端开发","Android","中级","6","20","¥125","周老师",["这是C语言强化34的课程介绍","./img/img_03.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介34","sectionTime":"3分钟"},{"sectionName":"面向对象的概念34","sectionTime":"14分钟"},{"sectionName":"面向对象的基本实践34","sectionTime":"27分钟"},{"sectionName":"面向对象的高级实践34","sectionTime":"23分钟"},{"sectionName":"面向对象的特殊实践34","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化35","./img/jq.jpg","前端开发","CSS3","高级","3","23","¥225","钱老师",["这是C语言强化35的课程介绍","./img/img_01.jpg","./img/img_03.jpg"],[{"sectionName":"课程简介35","sectionTime":"2分钟"},{"sectionName":"面向对象的概念35","sectionTime":"17分钟"},{"sectionName":"面向对象的基本实践35","sectionTime":"26分钟"},{"sectionName":"面向对象的高级实践35","sectionTime":"20分钟"},{"sectionName":"面向对象的特殊实践35","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化36","./img/php.jpg","后端开发","JavaScript","初级","8","18","¥339","李老师",["这是C语言强化36的课程介绍","./img/img_03.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介36","sectionTime":"1分钟"},{"sectionName":"面向对象的概念36","sectionTime":"12分钟"},{"sectionName":"面向对象的基本实践36","sectionTime":"15分钟"},{"sectionName":"面向对象的高级实践36","sectionTime":"21分钟"},{"sectionName":"面向对象的特殊实践36","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化37","./img/php.jpg","后端开发","JavaScript","中级","5","15","¥457","吴老师",["这是C语言强化37的课程介绍","./img/img_01.jpg","./img/img_03.jpg"],[{"sectionName":"课程简介37","sectionTime":"2分钟"},{"sectionName":"面向对象的概念37","sectionTime":"10分钟"},{"sectionName":"面向对象的基本实践37","sectionTime":"14分钟"},{"sectionName":"面向对象的高级实践37","sectionTime":"27分钟"},{"sectionName":"面向对象的特殊实践37","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化38","./img/u3d.jpg","前端开发","Android","高级","7","12","¥205","赵老师",["这是C语言强化38的课程介绍","./img/img_02.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介38","sectionTime":"7分钟"},{"sectionName":"面向对象的概念38","sectionTime":"16分钟"},{"sectionName":"面向对象的基本实践38","sectionTime":"17分钟"},{"sectionName":"面向对象的高级实践38","sectionTime":"23分钟"},{"sectionName":"面向对象的特殊实践38","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化39","./img/ios.jpg","移动开发","CSS3","中级","5","23","¥563","林老师",["这是C语言强化39的课程介绍","./img/img_03.jpg","./img/img_02.jpg"],[{"sectionName":"课程简介39","sectionTime":"3分钟"},{"sectionName":"面向对象的概念39","sectionTime":"14分钟"},{"sectionName":"面向对象的基本实践39","sectionTime":"18分钟"},{"sectionName":"面向对象的高级实践39","sectionTime":"22分钟"},{"sectionName":"面向对象的特殊实践39","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化40","./img/js.jpg","前端开发","CSS3","高级","7","24","¥247","钱老师",["这是C语言强化40的课程介绍","./img/img_01.jpg","./img/img_01.jpg"],[{"sectionName":"课程简介40","sectionTime":"6分钟"},{"sectionName":"面向对象的概念40","sectionTime":"13分钟"},{"sectionName":"面向对象的基本实践40","sectionTime":"13分钟"},{"sectionName":"面向对象的高级实践40","sectionTime":"24分钟"},{"sectionName":"面向对象的特殊实践40","sectionTime":"25分钟"}],"1");
aryLesson("C语言强化41","./img/js.jpg","前端开发","Android","初级","9","11","¥475","张老师",["这是C语言强化41的课程介绍","./img/img_02.jpg","./img/img_03.jpg"],[{"sectionName":"课程简介41","sectionTime":"2分钟"},{"sectionName":"面向对象的概念41","sectionTime":"12分钟"},{"sectionName":"面向对象的基本实践41","sectionTime":"12分钟"},{"sectionName":"面向对象的高级实践41","sectionTime":"25分钟"},{"sectionName":"面向对象的特殊实践41","sectionTime":"25分钟"}],"1");
////////////////////默认读取本地存储课程数据///////////////////
var aLesson=[];
aLesson=JSON.parse(localStorage.getItem("HX170611_allLesson"));
/**
 * [lesson_msg 创建课程包对象属性]
 * @param  {[string]} lessonName     [课程名称]
 * @param  {[string]} lessonImg      [课程图片]
 * @param  {[string]} lessonPosition [课程方向]
 * @param  {[string]} lessonClassify [课程分类]
 * @param  {[string]} lessonRank     [课程难度]
 * @param  {[string]} lessonScore    [课程评分]
 * @param  {[string]} lessonFocus    [课程关注度]
 * @param  {[string]} lessonPrice    [课程价格]
 * @param  {[string]} lessonTeacher  [课程教师名称]
 * @param  {[ary]} lessonDitail   [课程详情]
 * @param  {[ary]} lessonSection  [课程章节]
 * @return {[type]}                [description]
 */
function lesson_msg(lessonName,lessonImg,lessonPosition,lessonClassify,lessonRank,lessonScore,lessonFocus,lessonPrice,lessonTeacher,lessonDitail,lessonSection,pingFenNum){
	this.lessonName_=lessonName;
	this.lessonImg_=lessonImg;
	this.lessonPosition_=lessonPosition;
	this.lessonClassify_=lessonClassify;
	this.lessonRank_=lessonRank;
    this.lessonScore_=lessonScore;
    this.lessonFocus_=lessonFocus;
    this.lessonPrice_=lessonPrice;
    this.lessonTeacher_=lessonTeacher;
    this.lessonDitail_=lessonDitail;
    this.lessonSection_=lessonSection;
    this.pingFenNum_=pingFenNum;
}

/**
 * [aryLesson 存储课程包对象]
 * @param  {[string]} lessonName     [课程名称]
 * @param  {[string]} lessonImg      [课程图片]
 * @param  {[string]} lessonPosition [课程方向]
 * @param  {[string]} lessonClassify [课程分类]
 * @param  {[string]} lessonRank     [课程难度]
 * @param  {[string]} lessonScore    [课程评分]
 * @param  {[string]} lessonFocus    [课程关注度]
 * @param  {[string]} lessonPrice    [课程价格]
 * @param  {[string]} lessonTeacher  [课程教师名称]
 * @param  {[ary]} lessonDitail   [课程详情]
 * @param  {[ary]} lessonSection  [课程章节]
 * @return {[type]}                [description]
 */
function aryLesson(lessonName,lessonImg,lessonPosition,lessonClassify,lessonRank,lessonScore,lessonFocus,lessonPrice,lessonTeacher,lessonDitail,lessonSection,pingFenNum){
   //定义一个空数组存放对象
   var aLesson=[];
   //创建对象,属性赋值
   var oLesson= new lesson_msg(lessonName,lessonImg,lessonPosition,lessonClassify,lessonRank,lessonScore,lessonFocus,lessonPrice,lessonTeacher,lessonDitail,lessonSection,pingFenNum);
   //判断本地存储是否有数据，无则添加一个空表头
   if(localStorage.getItem("HX170611_allLesson")==null){
       localStorage.setItem("HX170611_allLesson",JSON.stringify(aLesson));
   }
   //获取本地存储的课程包
   aLesson=JSON.parse(localStorage.getItem("HX170611_allLesson"));
   //判断课程是否重复加载，重复则不存入
   for(var i=0;i<aLesson.length;i++){
   	  if (aLesson[i].lessonName_==lessonName) {return}
   }
   //将新创建的课程包对象追加进数组
   aLesson.push(oLesson);
   //将新数组存入本地存储
   localStorage.setItem("HX170611_allLesson",JSON.stringify(aLesson));
}


/**
 * [showLessonDiv 显示课程包数据]
 * @param  {[ary]} aryLesson [要显示的数组课程包]
 * @param  {[string]} showId        [要显示的位置的ID]
 * @return {[type]}           [description]
 */
function showLessonDiv(aryLesson,showId){
	var ocontex=document.getElementById(showId);
	ocontex.innerHTML="";
	//构造课程包,循环打印
	for(var i=0;i<aryLesson.length;i++){
       //判断输出的课程包数据是否存在
	   if(!aryLesson[i]){break;}
       ocontex.innerHTML+="<div class='lesson_div' onclick='javascript:lessonDivEvent(this)'>"+
	                          "<div><img src='"+aryLesson[i].lessonImg_+"'></div>"+
	                          "<div><span class='pinfen'>评分："+aryLesson[i].lessonScore_+"</span><span class='guanzhu'>"+aryLesson[i].lessonFocus_+"人关注</span></div>"+
	                          "<div class='lesson_info'>"+
		                      "<span>"+
			                    "<label>"+aryLesson[i].lessonName_+"</label>"+
			                    "<p>C语言有许多独特的地方。从1970年代诞生起。它的历史使命就是编写系统程序。</p>"+
		                      "</span>"+
                              "</div>"+
                          "</div>"
	}
}
//为课程包安装点击事件
function lessonDivEvent(obj){   
    //获取当前点击的课程名
    lessonName=obj.lastChild.firstChild.firstChild;
    //获取当前点击的关注度
    lessonFocus=obj.firstChild.nextElementSibling.lastChild;
    //用户表层关注度加1
    var Focus=Number(lessonFocus.innerText.replace(/[^0-9]+/g,""))+1;
    lessonFocus.innerText=Focus+"人关注";
    //本地存储关注度加1
    //读取本地存储，循环查找当前课程，修改课程关注度，存入本地存储
    var aLesson=JSON.parse(window.localStorage.getItem("HX170611_allLesson"));
    for(var i=0;i<aLesson.length;i++){
    	if(aLesson[i].lessonName_==lessonName.innerText){
    		aLesson[i].lessonFocus_=Focus;//修改课程关注度
    		//重新存入本地存储
            window.localStorage.setItem("HX170611_allLesson",JSON.stringify(aLesson));
            //将当前点击的课程名缓存至本地存储
            window.localStorage.setItem("HX170611_nowLesson",lessonName.innerText);
            //跳转
            window.location.href="./lesson_detail.html";
    	}
    }
}    
/**
 * [showIndexPage 默认显示当前第一页]
 * @param  {[type]} pageId [显示分页按钮位置的ID]
 * @return {[type]}    [description]
 */
function showIndexPage(pageId){
     var aBtn=getById(pageId).getElementsByClassName("pageBtn");
     aBtn[0].onclick();
}

/**
 * [showLessonPage 显示分页按钮并添加点击事件]
 * @param  {[ary]} aryLesson [要显示的所有课程数组]
 * @param  {[number]} num       [每一页要显示的课程个数]
 * @param  {[string]} pageId    [要创建分页按钮位置的ID]
 * @param  {[string]} showId    [要显示课程的位置的ID]
 * @return {[type]}           [description]
 */
function showLessonPage(aryLesson,num,pageId,showId,fun){
    //判断课程包数组是否为空，空则提示无
    if(aryLesson.length==0){
        document.getElementById(showId).innerHTML="<div class='noLesson'><p>啊哦，臣妾找不到啊！暂无相关数据哦~</p></div>";
        return;
    } 
	//计算分页数量
    var pageNum=Math.ceil(aryLesson.length/num);
    //获取分页按钮的放置位置
    var oPage=document.getElementById(pageId);
    //清空分页按钮内容
    oPage.innerHTML="";
    //创建上一页按钮,安装点击事件
    createUpPage(pageId)
    //创建对应分页按钮
    for(var i=0;i<pageNum;i++){
    	var oBtn=document.createElement("button");
    	oBtn.className="pageBtn";
    	oBtn.innerText=i+1;
    	oBtn.style.width="35px";
    	oBtn.style.height="35px";
        oPage.appendChild(oBtn);
    }
    //获取所有的分页按钮
    var aBtn=getById(pageId).getElementsByClassName("pageBtn");
    //给分页按钮安装点击事件
    for(var j=0;j<aBtn.length;j++){
       aBtn[j].pos=j;
       aBtn[j].onclick=function(){
          //点击后显示对应页面
          ///获取当前页要显示的数组
          var newAry=[];
          for(var k=num*(this.pos);k<num*(this.pos+1);k++){
          	//判断最后一页，要显示的对应的下标数组存不存在,存在则存入新数组
          	if(aryLesson[k]!=null){
              newAry.push(aryLesson[k]);
          	}
          }
         //显示对应当前页课程/评论数组
         fun(newAry,showId,pageId,num,this.pos);
         //清除所有按钮颜色
         clearBtnColor(pageId,"pageBtn");
         //显示当前按钮颜色
         this.style.backgroundColor="rgb(67,67,67)";
         this.style.color="white";
       }
    }
    //创建下一页按钮，安装点击事件
    createNextPage(pageId);
    //默认显示第一页
    showIndexPage(pageId);
}

/**
 * [clearBtnColor 清除所有按钮颜色]
 * @param  {[string]} btnClassName [分页按钮的class名称]
 * @return {[type]}              [description]
 */
function clearBtnColor(pageId,btnClassName){
    var aBtn=getById(pageId).getElementsByClassName(btnClassName);
    for(var i=0;i<aBtn.length;i++){
       aBtn[i].style.backgroundColor="";
       aBtn[i].style.color="";
    }
}


/**
 * [createNextPage 创建上一页按钮]
 * @param  {[string]} pageId [要显示按钮的位置的ID]
 * @return {[type]}        [description]
 */
function createUpPage(pageId){
	var oPage=document.getElementById(pageId);
	var oNextPage=document.createElement("button");
	oNextPage.innerText="上一页";
	oNextPage.className="upBtn";
	oNextPage.style.height="35px";
	oNextPage.style.width="60px";
	oPage.appendChild(oNextPage);
	oNextPage.onclick=function(){
		//获取所有的分页按钮
        var aBtn=oPage.getElementsByClassName("pageBtn");
        //循环查找当前有颜色的按钮
        for(var i=0;i<aBtn.length;i++){
           if(aBtn[i].style.color=="white"){
           	 //判断是否为第一页
           	 if(i==0){
           	 	alert("已是第一页！");
           	 	break;
           	 }
             aBtn[i-1].onclick();
             break;
           }
        }
	}
}

/**
 * [createNextPage 创建下一页按钮]
 * @param  {[string]} pageId [要显示按钮的位置的ID]
 * @return {[type]}        [description]
 */
function createNextPage(pageId){
	var oPage=document.getElementById(pageId);
	var oNextPage=document.createElement("button");
	oNextPage.innerText="下一页";
	oNextPage.className="nextBtn";
	oNextPage.style.height="35px";
	oNextPage.style.width="60px";
	oPage.appendChild(oNextPage);
	oNextPage.onclick=function(){
		//获取所有的分页按钮
        var aBtn=oPage.getElementsByClassName("pageBtn");
        //循环查找当前有颜色的按钮
        for(var i=0;i<aBtn.length;i++){
           if(aBtn[i].style.color=="white"){
           	 //判断是否为最后一页
           	 if(i==aBtn.length-1){
           	 	alert("已是最后一页！");
           	 	break;
           	 }
             aBtn[i+1].onclick();
             break;
           }
        }
	}
}


/**
 * [selectUp 给数组对象的属性升序的比较方法 如:ary.sort(selectUp("name"));]
 * @param  {[string]} property [对象属性]
 * @return {[-1,1,0]}          [升序排列,降序排列,正常排列]
 */
function selectUp(property){
   return function(obj1,obj2){  	
      var value1=obj1[property];
      var value2=obj2[property];
      //判断是否可以转换为数字，如果可以就转化成数字 【Number()如果无法转换为数字，返回NaN】
      if(!isNaN(Number(value1))&&!isNaN(Number(value2))){
      	value1=Number(value1);
      	value2=Number(value2);
      }
      if(value1<value2){
      	return -1;
      }else{
      	if(value1>value2){
      		return 1;
      	}else{
      		if(value1==value2){
      			return 0;
      		}
      	}
      }
   }
}


/**
 * [selectDown 给数组对象的属性降序的比较方法 如:ary.sort(selectDown("name"));]
 * @param  {[string]} property [对象属性]
 * @return {[1,-1,0]}          [降序排列,升序排列,正序排列]
 */
function selectDown(property){
   return function(obj1,obj2){  	
      var value1=obj1[property];
      var value2=obj2[property];
      //判断是否可以转换为数字，如果可以就转化成数字 【Number()如果无法转换为数字，返回NaN】
      if(!isNaN(Number(value1))&&!isNaN(Number(value2))){
      	value1=Number(value1);
      	value2=Number(value2);
      }
      if(value1<value2){
      	return 1;
      }else{
      	if (value1>value2){
      		return -1;
      	}else{
      		if(value1==value2){
      			return 0;
      		}
      	}
      }
   }
}

/**
 * [arySelectUp 数组对象的升序功能]
 * @param  {[ary]} ary      [要升序的数组]
 * @param  {[type]} property [要升序的对象属性]
 * @return {[type]}          [description]
 */
function arySelectUp(ary,property){
   var aryUp=ary.sort(selectUp(property));
   return aryUp;
}
/**
 * [arySelectUp 数组对象的降序功能]
 * @param  {[ary]} ary      [要降序的数组]
 * @param  {[type]} property [要降序的对象属性]
 * @return {[type]}          [description]
 */
function arySelectDown(ary,property){
   var aryDown=ary.sort(selectDown(property));
   return aryDown;
}


/**
 * [creatRandomLesson 创建随机课程包]
 * @param  {[number]} num       [需要随机课程包的个数]
 * @param  {[type]} aryLesson [需要随机选取的课程包数组]
 * @return {[type]}           [description]
 */
function creatRandomLesson(num,aryLesson){
	var randomAry=[];
    for(var i=0;i<num;i++){
    	var randomNum=Math.floor(Math.random()*aryLesson.length);
    	randomAry.push(aryLesson[randomNum]);
    }
    return randomAry;
}

/**
 * [showRandomLesson 显示随机课程包数组]
 * @param  {[number]} num       [需要随机课程包的个]
 * @param  {[ary]} aryLesson [需要随机选取的课程包数组]
 * @param  {[string]} id        [要显示的位置的ID]
 * @return {[type]}           [description]
 */
function showRandomLesson(num,aryLesson,id){
	//创建随机课程包数组
    var newLessons=creatRandomLesson(num,aryLesson);
    //显示随机课程包数组
    showLessonDiv(newLessons,id);
}


/**
 * [SearchWord 搜索数组里对象中对应的关键词，并返回该数组]
 * @param {[ary]} SearchAry [要搜索的数组]
 * @param {[string]} UserWord  [搜索的关键词]
 * @return {[ary]}          [含关键词的数组]
 */
function SearchWord(SearchAry,UserWord){
	var resultAry=[];

	for(i=0;i<SearchAry.length;i++){
         if(SearchAry[i].lessonName_.indexOf(UserWord)!=-1){
         	resultAry.push(SearchAry[i]);
         }
	}
	return resultAry;
}

/**
 * [searchEvent 给按钮安装搜索关键词的点击事件]
 * @param  {[type]} btnId     [搜索按钮的ID]
 * @param  {[type]} txtId     [搜索关键词文本框的ID]
 * @param  {[type]} SearchAry [要搜索的数组]
 * @return {[type]}           [description]
 */
function searchEvent(btnId,txtId,SearchAry,pageId){
	var searchBtn=getById(btnId);
	var searchTxt=getById(txtId);
	//安装搜索按钮点击事件	
	searchBtn.onclick=function(){
       whereSearch(txtId,SearchAry,pageId);
	}
	//安装搜索回车事件
	document.onkeydown=function(){
		var e=event||window.event||arguments.callee.caller.arguments[0];
		if(e&&e.keyCode==13&&searchTxt.value!=0){
			whereSearch(txtId,SearchAry,pageId);
		}
	}
}


/**
 * [whereSearch 搜索时，判断当前页是否为课程中心，如果不是，则将搜索结果存入本地存储，跳转到课程中心，读取本地存储的搜索词进行搜索]
 * @param  {[string]} txtId     [搜索关键词文本框的ID]
 * @param  {[ary]} SearchAry [要搜索的数组]
 * @return {[type]}           [description]
 */
function whereSearch(txtId,SearchAry,pageId){
   var searchTxt=getById(txtId);
   var strURL=window.location.href;
   //判断是否为课程中心，不是则跳转
   if (strURL.indexOf("lesson_center.html")==-1){
   	    //将用户搜索关键字存入本地存储
        localStorage.setItem("HX170611_SearchWord",searchTxt.value);
   	    //跳转课程中心
        window.location.href="./lesson_center.html";
        return;
   }else{
      //否则，判断搜索框是否有文字，有加入本地存储
      if(searchTxt.value!=""){
      	//将用户搜索关键字存入本地存储
        localStorage.setItem("HX170611_SearchWord",searchTxt.value);
      }
   }
   //判断本地存储是否为空
   if(localStorage.getItem("HX170611_SearchWord")){
   	   //提取本地存储关键词
       var UserWord=localStorage.getItem("HX170611_SearchWord");
       //提取包含关键词的数组
       var resultAry=SearchWord(SearchAry,UserWord);
       //显示包含关键词的数组
        //为筛选按钮安装点击事件
        selectBtnEven();
        //为排序按钮安装点击事件
        onChangeEvent("selectScore",resultAry);
        onChangeEvent("selectFocus",resultAry);
        onChangeEvent("up_down",resultAry);
        //显示课程分页按钮
        showLessonPage(resultAry,15,"lessonPage","body_contex",showLessonDiv);
        if(resultAry==null){
        	//默认显示第一页
            showIndexPage(pageId);
        }
        //显示随机推荐课程
        showRandomLesson(5,aLesson,"commend_lesson");
        //清空本地存储
        localStorage.removeItem("HX170611_SearchWord");
   }else{
       //否则显示原来的数组
       //为筛选按钮安装点击事件
        selectBtnEven();
        //为排序按钮安装点击事件
        onChangeEvent("selectScore",aLesson);
        onChangeEvent("selectFocus",aLesson);
        onChangeEvent("up_down",aLesson);
        //显示课程分页按钮
        showLessonPage(aLesson,15,"lessonPage","body_contex",showLessonDiv);
        //默认显示第一页
        showIndexPage(pageId);
        //显示随机推荐课程
        showRandomLesson(5,aLesson,"commend_lesson");       
   } 	    
}

// 选项卡点击切换事件
/**
 * [tabEvent 选项卡点击切换事件]
 * @param  {[type]} aTab [选项卡标签的数组]
 * @param  {[type]} aDiv [对应选项卡DIV内容的数组]
 * @return {[type]}      [description]
 */
function tabEvent(aTab,aDiv){
   for(var i=0;i<aTab.length;i++){
   	aTab[i].pos=i;
   	aTab[i].onclick=function(){
      //改变所有选项卡为原来背景颜色,隐藏所有选项卡
      for(var j=0;j<aTab.length;j++){
      	aTab[j].style.backgroundColor="";
      	aTab[j].style.color="";
      	aDiv[j].style.display="none";
      }
      //改变当前点击的选项卡的背景颜色
        aTab[this.pos].style.backgroundColor="#14598C";
        aTab[this.pos].style.color="white";
      //显示当前选项卡对应的div
        aDiv[this.pos].style.display="block";
   	}
   }
}

/**
 * [comment_msg 创建评论对象属性]
 * @param  {[string]} commentLesson  [课程名]
 * @param  {[string]} commentUser    [用户名]
 * @param  {[string]} commentTime    [评论时间]
 * @param  {[string]} commentContent [评论内容]
 * @param  {[number]} goodNum        [good点赞数]
 * @param  {[number]} badNum         [bad点赞数]
 * @param  {[ary]} addedUser      [点赞过的用户]
 * @return {[type]}                [description]
 */
function comment_msg(commentLesson,commentUser,commentTime,commentContent,goodNum,badNum,addedUser){
	this.commentLesson_=commentLesson
	this.commentUser_=commentUser;
	this.commentTime_=commentTime;
	this.commentContent_=commentContent;
	this.goodNum_=goodNum;
	this.badNum_=badNum;
	this.addedUser_=addedUser;
}

/**
 * [comment_msg 存储评论包对象]
 * @param  {[string]} commentLesson  [课程名]
 * @param  {[string]} commentUser    [用户名]
 * @param  {[string]} commentTime    [评论时间]
 * @param  {[string]} commentContent [评论内容]
 * @param  {[number]} goodNum        [good点赞数]
 * @param  {[number]} badNum         [bad点赞数]
 * @param  {[ary]} addedUser      [点赞过的用户]
 * @return {[type]}                [description]
 */
function aryComment(commentLesson,commentUser,commentTime,commentContent,goodNum,badNum,addedUser){
   //定义一个空数组存放对象
   var aComment=[];
   //创建对象,属性赋值
   var oComment= new comment_msg(commentLesson,commentUser,commentTime,commentContent,goodNum,badNum,addedUser);
   //判断本地存储是否有数据，无则添加一个空表头
   if(localStorage.getItem("HX170611_allComment")==null){
       localStorage.setItem("HX170611_allComment",JSON.stringify(aComment));
   }
   //获取本地存储的课程包
   aComment=JSON.parse(localStorage.getItem("HX170611_allComment"));
   //将新创建的课程包对象追加进数组
   aComment.push(oComment);
   //将新数组存入本地存储
   localStorage.setItem("HX170611_allComment",JSON.stringify(aComment));
}

/**
 * [setCommentBtnEvent 添加评论按钮点击事件]
 * @param {[type]} btnId     [提交评论按钮的ID]
 * @param {[type]} showId    [要显示的位置的ID]
 * @param {[type]} editTxtId [编辑文字输入框的ID]
 */
function setCommentBtnEvent(btnId,showId,editTxtId,pageId){
	getById(btnId).onclick=function(){
		//判断用户是否已登录
        if(window.localStorage.getItem("HX170611_nowUser")){
            //获取当前用户信息
        	var nowUserInfo=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
            //获取当前课程名
			var nowLessonName=window.localStorage.getItem("HX170611_nowLesson");
			//是否已购买
            for(var i=0;i<nowUserInfo.ticketYesPay_.length;i++){
            	if(nowUserInfo.ticketYesPay_[i]==nowLessonName){
                    //获取当前评论的登录用户
					var nowUserName=nowUserInfo.user_;
					//获取当前评论时间
					var myDate=new Date();
					var nowTime=myDate.toLocaleString();
					//获取当前评论内容
					var commentContent=getById(editTxtId).innerHTML;
					//字数限制
					if(commentContent.length<6){
						alert("评论至少为六个字符！");
						return;
					}		
					//去除换行符
					commentContent = commentContent.replace(/<\/?.+?>/g,""); 
		            commentContent = commentContent.replace(/[\r\n]/g, "");
					//存入本地存储
			        aryComment(nowLessonName,nowUserName,nowTime,commentContent,0,0,[]);
			        //获取与该课程相关的评论条
			        var wantComment=getAboutCommentBar();
			        //显示评论的分页按钮
		            showLessonPage(wantComment,6,pageId,showId,showCommentBar);
			        //清空编辑框内容
			        getById(editTxtId).innerText="";
			        return;
            	}	
            }
            alert("购买该课程后才能进行评价！");
    }else{
    	alert("请先登录,并购买该课程后才能进行评价！");
    	denglu();
    }
       
    }
}

//获取与该课程相关的评论条
function getAboutCommentBar(){
	//判断本地存储是否有数据，无则添加一个空表头
	//定义一个空数组存放对象
    var aComment=[];
	if(localStorage.getItem("HX170611_allComment")==null){
	    localStorage.setItem("HX170611_allComment",JSON.stringify(aComment));
	}
	//获取本地存储的所有评论条
	aComment=JSON.parse(window.localStorage.getItem("HX170611_allComment"));
	//获取当前课程名
	var nowLessonName=window.localStorage.getItem("HX170611_nowLesson");
	//创建空数组用来存放课程名相关评论
	var aboutComment=[];
	//循环判断是否有符合该课程的评论条，存进新数组

	for(var i=0;i<aComment.length;i++){
       if(aComment[i].commentLesson_==nowLessonName){
       	aboutComment.push(aComment[i]);
       }
	}
	//返回新的评论数组,aComment倒序排列
	return aboutComment.reverse();
}


/**
 * [showCommentBar 显示评论条]
 * @param  {[ary]} aCommentBar [评论条数组]
 * @param  {[string]} showId      [要显示的位置的ID]
 * @return {[type]}             [description]
 */
function showCommentBar(aCommentBar,showId,pageId,num,pos){
	//清空内容
	getById(showId).innerHTML="";
	//获取每一页数组开始坐标，用来标记评论楼层
	var wantComment=getAboutCommentBar();
	var starNum=wantComment.length-pos*num;
	//循环输出每页评论条
   for(var i=0;i<aCommentBar.length;i++){
   	getById(showId).innerHTML+="<div class='commentBar'>"+
			                       "<img src='./img/userHead.png'>"+
			                       "<div class='userComment'>"+
			                          "<div class='user_info'>"+
			                             "<label>"+aCommentBar[i].commentUser_+"</label>"+
			                             "<span>"+aCommentBar[i].commentTime_+"</span>"+
			                          "</div>"+
			                          "<div class='user_contxt'>"+
			                              "<span>"+aCommentBar[i].commentContent_+"</span>"+
			                          "</div>"+
			                       "</div>"+
			                       "<div class='user_updown'>"+
			                            "<div class='user_floor'>"+
			                                "<label class='delete'flag1='"+showId+"' flag2='"+pageId+"' onclick='javascript:deleteCommentBar(this)'>删除</label>"+
			                                "<span class='floor'>#"+Number(starNum-i)+"</span>"+
			                            "</div>"+
			                            "<div class='user_godBad'>"+
			                                "<img src='./img/d1.jpg' onclick='javascript:addGoodNum(this)'>"+
			                                "<span>"+aCommentBar[i].goodNum_+"</span>"+
			                                "<img src='./img/d2.jpg' onclick='javascript:addBadNum(this)'>"+
			                                "<span>"+aCommentBar[i].badNum_+"</span>"+
			                            "</div>"+
			                       "</div>"+
		                    "</div>"
   }
}

/**
 * [deleteCommentBar 删除当前点击的评论条]
 * @param  {[object]} obj [当前点击的对象]
 * @return {[type]}     [description]
 */
function deleteCommentBar(obj){
    //读取本地存储，找到该条评论并从数组中删除，再重新存入本地存储
    var aComment=JSON.parse(window.localStorage.getItem("HX170611_allComment"));
    //获取当前评论条的用户名
    var userName=obj.parentElement.parentElement.previousElementSibling.children[0].children[0].innerText;
    //获取当前登录的用户名,判断该条评论是否属于该用户
    if(JSON.parse(window.localStorage.getItem("HX170611_nowUser"))){
        var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
        var nowUserName=nowUser.user_;
        if(nowUserName==userName){
        	if(confirm("确认是否删除？")){
            	//获取当前评论条的时间
			    var commentTime=obj.parentElement.parentElement.previousElementSibling.children[0].children[1].innerText;
			    //获取当前评论条的内容
			    var commentContent=obj.parentElement.parentElement.previousElementSibling.children[1].children[0].innerText;
			    //循环找出与课程相关的数组
			    for(var i=0;i<aComment.length;i++){
				   	 if(aComment[i].commentUser_==userName && aComment[i].commentTime_==commentTime && aComment[i].commentContent_==commentContent){
				   	 	aComment.splice(i,1);
				   	 	break;
				   	 }
			    }
			    //新数组存入本地存储
			    window.localStorage.setItem("HX170611_allComment",JSON.stringify(aComment));
			    //用户表层移除节点
			    obj.parentElement.parentElement.parentElement.remove();
			    //获取与课程相关的评论
			    var aboutComment=getAboutCommentBar();
			    //显示评论，并创建分页按钮
			    showLessonPage(aboutComment,5,obj.getAttribute("flag2"),obj.getAttribute("flag1"),showCommentBar);
        	}
        }else{
            alert("只能删除您自己的评论！");
            return;
        }
    }else{
    	alert("请先登录再进行删除操作！")
    	return;
    }

}

/**
 * [addGoodNum 增加good点赞数]
 * @param {[object]} obj [当前点击的对象]
 */
function addGoodNum(obj){
	//判断是否有登录的用户名，有则获取,无则提示登录
 	if(JSON.parse(window.localStorage.getItem("HX170611_nowUser"))){
 		//提取登录的用户名
        var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
        var nowUserName=nowUser.user_;
        //获取本地存储
	    var aComment=JSON.parse(window.localStorage.getItem("HX170611_allComment"));
	    //获取当前评论条的用户名
	    var userName=obj.parentElement.parentElement.previousElementSibling.children[0].children[0].innerText;
	    //获取当前评论条的时间
		var commentTime=obj.parentElement.parentElement.previousElementSibling.children[0].children[1].innerText;
		//获取当前评论条的内容
		var commentContent=obj.parentElement.parentElement.previousElementSibling.children[1].children[0].innerText;
		//循环找出该条评论
	    for(var i=0;i<aComment.length;i++){
		   	if(aComment[i].commentUser_==userName && aComment[i].commentTime_==commentTime && aComment[i].commentContent_==commentContent){
                if (aComment[i].addedUser_.length==0) {
                	///////用户表层加1/////
				    var GoodNum=obj.nextElementSibling.innerText;
				    obj.nextElementSibling.innerText=Number(GoodNum)+1;
				    //////本地存储层加1/////
            		aComment[i].goodNum_=Number(GoodNum)+1;
            		//标记用户名
					aComment[i].addedUser_.push(nowUserName);                   		    
				    //新数组存入本地存储
					window.localStorage.setItem("HX170611_allComment",JSON.stringify(aComment));
					break;
                }
                for(var j=0;j<aComment[i].addedUser_.length;j++){
                	if (aComment[i].addedUser_[j]!=nowUserName) {
                		///////用户表层加1/////
					    var GoodNum=obj.nextElementSibling.innerText;
					    obj.nextElementSibling.innerText=Number(GoodNum)+1;
					    //////本地存储层加1/////
                		aComment[i].goodNum_=Number(GoodNum)+1;
                		//标记用户名
						aComment[i].addedUser_.push(nowUserName);                   		    
					    //新数组存入本地存储
						window.localStorage.setItem("HX170611_allComment",JSON.stringify(aComment));
						break;
                	}
                }			   	 	
		   	}
	    }

 	}else{
 		alert("请先登录再进行删除操作！")
    return;
 	}

}

/**
 * [addBadNum 增加bad点赞数]
 * @param {[object]} obj [当前点击的对象]
 */
function addBadNum(obj){
	//判断是否有登录的用户名，有则获取,无则提示登录
 	if(JSON.parse(window.localStorage.getItem("HX170611_nowUser"))){
 		//提取登录的用户名
        var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
        var nowUserName=nowUser.user_;
        //获取本地存储
	    var aComment=JSON.parse(window.localStorage.getItem("HX170611_allComment"));
	    //获取当前评论条的用户名
	    var userName=obj.parentElement.parentElement.previousElementSibling.children[0].children[0].innerText;
	    //获取当前评论条的时间
		var commentTime=obj.parentElement.parentElement.previousElementSibling.children[0].children[1].innerText;
		//获取当前评论条的内容
		var commentContent=obj.parentElement.parentElement.previousElementSibling.children[1].children[0].innerText;
		//循环找出该条评论
	    for(var i=0;i<aComment.length;i++){
		   	if(aComment[i].commentUser_==userName && aComment[i].commentTime_==commentTime && aComment[i].commentContent_==commentContent){
                if (aComment[i].addedUser_.length==0) {
                	///////用户表层加1/////
				    var BadNum=obj.nextElementSibling.innerText;
				    obj.nextElementSibling.innerText=Number(BadNum)+1;
				    //////本地存储层加1/////
            		aComment[i].badNum_=Number(BadNum)+1;
            		//标记用户名
					aComment[i].addedUser_.push(nowUserName);                   		    
				    //新数组存入本地存储
					window.localStorage.setItem("HX170611_allComment",JSON.stringify(aComment));
					return;
                }
                for(var j=0;j<aComment[i].addedUser_.length;j++){
                	if (aComment[i].addedUser_[j]!=nowUserName) {
                		///////用户表层加1/////
					    var BadNum=obj.nextElementSibling.innerText;
					    obj.nextElementSibling.innerText=Number(BadNum)+1;
					    //////本地存储层加1/////
                		aComment[i].badNum_=Number(BadNum)+1;
                		//标记用户名
						aComment[i].addedUser_.push(nowUserName);                   		    
					    //新数组存入本地存储
						window.localStorage.setItem("HX170611_allComment",JSON.stringify(aComment));
						break;
                	}
                }			   	 	
		   	}
	    }

 	}else{
 		alert("请先登录再进行删除操作！")
    return;
 	}

}


/**
 * [showTicketBar 打印未支付订单]
 * @param  {[ary]} aTicketBar [待付款的课程包数组]
 * @param  {[string]} showId     [要显示订单的位置的ID]
 * @return {[type]}            [description]
 */
function showTicketBar(aTicketBar,showId){
   var oContex=getById(showId);
   if(aTicketBar.length==0){
        oContex.innerHTML="<div class='noLesson'><p>暂无订单哦，去添加一些吧！~</p></div>";
        return;
    } 
   //清空内容
   oContex.innerHTML="";
   for(var i=0;i<aTicketBar.length;i++){
   	oContex.innerHTML+= "<tr class='noPayTicket'>"+
                          "<td class='ticketName'>"+
                             "<img src='"+aTicketBar[i].lessonImg_+"' style='padding:10px 0;'>"+
                             "<span>"+aTicketBar[i].lessonName_+"</span>"+
                          "</td>"+
                          "<td class='ticketPrice'>"+
                             "<span>"+aTicketBar[i].lessonPrice_+"</span>"+
                          "</td>"+
                          "<td class='ticketNum'>"+
                             "<img src='./img/reduce.png' onclick='javascript:reduceTicketNum(this)'>"+
                             "<input type='text' name='' value='1'>"+
                             "<img src='./img/add.png' onclick='javascript:addTicketNum(this)'>"+
                          "</td>"+
                          "<td class='ticketTotal'>"+
                             "<span id='ticketTotal'>"+aTicketBar[i].lessonPrice_+"</span>"+
                          "</td>"+
                          "<td class='ticketDelete'>"+
                             "<img src='./img/close.png' onclick='javascript:deleteTicket(this)'>"+
                          "</td>"+
                        "</tr>"
    }
}

/**
 * [addTicketNum 增加单价数量，改变订单价格]
 * @param {[object]} obj [当前点击增加按钮的对象]
 */
function addTicketNum(obj){
	//增加文本框数字
	var addNum=obj.previousElementSibling.getAttribute("value");
	obj.previousElementSibling.setAttribute("value",Number(addNum)+1);
	//获取当前订单单价
	var oPrice=obj.parentElement.previousElementSibling.children[0];
	var price=getNum(oPrice.innerText);
    //改变当前订单价格
    var ticketPrice=obj.parentElement.nextElementSibling.children[0];
    ticketPrice.innerHTML="¥"+(Number(price)*(Number(addNum)+1));
    //获取所有订单价格，改变总价格
    showTotalPrice();

}

/**
 * [reduceTicketNum 减少单价数量，改变订单价格]
 * @param  {[object]} obj [当前点击减少按钮的对象]
 * @return {[type]}     [description]
 */
function reduceTicketNum(obj){
	var reduceNum=obj.nextElementSibling.getAttribute("value");
	//判断数量是否为1
	if(Number(reduceNum)==1){
       //调用删除订单函数
       deleteTicket(obj);
       return;
	}
	//增加文本框数字
	obj.nextElementSibling.setAttribute("value",Number(reduceNum)-1);
	//获取当前订单单价
	var oPrice=obj.parentElement.previousElementSibling.children[0];
	var price=getNum(oPrice.innerText);
    //改变当前订单价格
    var ticketPrice=obj.parentElement.nextElementSibling.children[0];
    ticketPrice.innerHTML="¥"+Number(price)*(Number(reduceNum)-1);
    //获取所有订单价格，改变总价格
    showTotalPrice();
}

/**
 * [deleteTicket 删除该条订单]
 * @param  {[object]} obj [当前点击删除的对象]
 * @return {[type]}     [description]
 */
function deleteTicket(obj){
   
   if(confirm("是否删除该条订单？")){
   	   //用户表层移除
   	   obj.parentElement.parentElement.remove();
   	   ////////本地存储移除//////
   	   //获取当前用户
   	   var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
   	   //获取当前课程名
   	   var nowLessonName=obj.parentElement.parentElement.children[0].children[1].innerText;
   	   //循环判断当前用户信息的订单课程数组是否与该课程名相关
   	   for(var i=0;i<nowUser.ticketNoPay_.length;i++){
   	   	   if(nowUser.ticketNoPay_[i]==nowLessonName){
   	   	   	   nowUser.ticketNoPay_.splice(i,1);//去除订单课程数组中该课程名
   	   	   	   break;
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
   	   //覆盖
   	   window.localStorage.setItem("HX170611_allUser",JSON.stringify(allUser));
   	   //获取所有订单价格，改变总价格
       showTotalPrice();
       //筛选出订单课程，并打印订单
       noPay_tabEvent();
   }
   
}

//获取所有订单价格，改变总价格
function showTotalPrice(){   
    //获取所有订单价格
    var aticketTotal=getById("noPayBody").getElementsByClassName("ticketTotal");
    var totalPrice=0;
    for(var i=0;i<aticketTotal.length;i++){
    	totalPrice+=Number(getNum(aticketTotal[i].innerText));
    }
    //显示总价格
    getById("total").innerHTML="¥"+totalPrice;
}

//从本地存储加载用户未支付的订单列表
function noPay_tabEvent(){
	//获取该登录用户信息
    var oUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
	//获取当前用户未支付订单的课程名数组
	var ticketNoPay=oUser.ticketNoPay_;
	//循环所有课程，找出与该未支付课程数组相关的课程包，存入新数组
	var newAry=[];
	for(var i=0;i<ticketNoPay.length;i++){
		for(var j=0;j<aLesson.length;j++){
			//如果课程名符合,把该课程包放入新数组
			if(ticketNoPay[i]==aLesson[j].lessonName_){
				newAry.push(aLesson[j]);
			}
		}
	}
	//显示打印订单
	showTicketBar(newAry,"noPayBody");
	//获取所有订单价格，改变总价格
    showTotalPrice();
}

/**
 * [yesPay_tabEvent 从本地存储加载用户已支付的订单列表]
 * @param  {[number]} num    [要显示的个数]
 * @param  {[string]} pageId [放置分页按钮位置的ID]
 * @param  {[string]} showId [要显示的位置的ID]
 * @return {[type]}        [description]
 */
function yesPay_tabEvent(num,pageId,showId){
	//获取该登录用户信息
	var oUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
	//获取当前用户已支付订单的课程名数组
	var ticketYesPay=oUser.ticketYesPay_;
	//循环所有课程，找出与该未支付课程数组相关的课程包，存入新数组
	var newAry=[];
	for(var i=0;i<ticketYesPay.length;i++){
		for(var j=0;j<aLesson.length;j++){
			//如果课程名符合,把该课程包放入新数组
			if(ticketYesPay[i]==aLesson[j].lessonName_){
				newAry.push(aLesson[j]);
			}
		}
	}
	//显示打印订单
	showLessonPage(newAry,num,pageId,showId,showLessonDiv);
}


/**
 * [myNote 创建我的笔记对象]
 * @param  {[string]} lessonName [课程名称]
 * @param  {[string]} nowTime    [笔记时间]
 * @param  {[string]} lessonImg  [课程封面图片]
 * @param  {[string]} myNoteTxt  [笔记内容]
 * @return {[type]}            [description]
 */
function myNote(lessonName,nowTime,lessonImg,myNoteTxt){
	this.lessonName_=lessonName;
	this.nowTime_=nowTime;
	this.lessonImg_=lessonImg;
	this.myNoteTxt_=myNoteTxt;
}

/**
 * [myNote 创建我的笔记存入本地存储事件]
 * @param  {[string]} lessonName [课程名称]
 * @param  {[string]} nowTime    [笔记时间]
 * @param  {[string]} lessonImg  [课程封面图片]
 * @param  {[string]} myNoteTxt  [笔记内容]
 * @return {[type]}            [description]
 */
function aMyNote(lessonName,nowTime,lessonImg,myNoteTxt){
	//获取当前用户信息
	var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
	//获取所有用户
	var allUser=JSON.parse(window.localStorage.getItem("HX170611_allUser"));
	//创建我的笔记对象
	oMyNote=new myNote(lessonName,nowTime,lessonImg,myNoteTxt);
	//追加进原先数组
	nowUser.myNote_.push(oMyNote);
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
}


/**
 * [showMyNoteBar 显示我的笔记]
 * @param  {[ary]} aMyNoteBar [我的笔记数组]
 * @param  {[string]} showId     [要显示笔记的位置的ID]
 * @return {[type]}            [description]
 */
function showMyNoteBar(aMyNoteBar,showId){
   //请空
   getById(showId).innerHTML="";
   for(var i=0;i<aMyNoteBar.length;i++){
   	 getById(showId).innerHTML+="<div class='myNoteBar'>"+
					                 "<div class='myNoteInfo'>"+
					                     "<div class='myNoteName'>"+aMyNoteBar[i].lessonName_+"</div>"+
					                     "<div class='myNoteTime'>"+aMyNoteBar[i].nowTime_+"</div>"+
					                 "</div>"+
					                 "<div class='myNoteContent'>"+
					                     "<div><img src='"+aMyNoteBar[i].lessonImg_+"'></div>"+
					                     "<div class='myNoteTxt'>"+
					                         "<div><span>笔记内容：</span></div>"+
					                         "<div><label>"+aMyNoteBar[i].myNoteTxt_+"</label></div>"+
					                     "</div>"+
					                 "</div>"+
					                 "<div class='deleteMyNoteBar'><span id='deleteMyNoteBar' onclick='javascript:deleteMyNoteBar(this)'>删除</span></div>"+
                                "</div>"
   }

}

/**
 * [MyNoteTabEvent 从本地存储加载用户的笔记数组并显示]
 * @param {[number]} num    [要显示的个数]
 * @param {[string]} pageId [要显示分页按钮的位置的ID]
 * @param {[string]} showId [要显示笔记的位置的ID]
 */
function MyNoteTabEvent(num,pageId,showId){
	//获取该用户登录信息
	var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
	//显示打印笔记
	showLessonPage(nowUser.myNote_,num,pageId,showId,showMyNoteBar);
}

/**
 * [deleteMyNoteBar 删除我的笔记]
 * @param  {[object]} obj [当前点击删除的对象]
 * @return {[type]}     [description]
 */
function deleteMyNoteBar(obj){
   //获取当前用户信息
   var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
   //获取所有用户
   var allUser=JSON.parse(window.localStorage.getItem("HX170611_allUser"));
   //获取当前点击对象的课程名
   var nowLessonName=obj.parentElement.parentElement.children[0].children[0].innerText;
   //获取当前点击对象的笔记时间
   var noteTime=obj.parentElement.parentElement.children[0].children[1].innerText;
   //获取当前笔记内容
   var noteContent=obj.parentElement.previousElementSibling.children[1].children[1].innerText;
   for(var i=0;i<nowUser.myNote_.length;i++){
	   	if(nowUser.myNote_[i].lessonName_==nowLessonName&&nowUser.myNote_[i].nowTime_==noteTime&&nowUser.myNote_[i].myNoteTxt_==noteContent){
	        if(confirm("是否删除该条笔记？")){
	        	//用户表层移除
                obj.parentElement.parentElement.remove();
                //笔记数组中去除该订单
                nowUser.myNote_.splice(i,1);
		        //当前用户信息存入本地存储
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
	        }
	   	}
   }
}

/**
 * [myRecord 创建学习记录对象属性]
 * @param  {[string]} lessonName [课程名称]
 * @param  {[string]} learnTime  [学习时间记录]
 * @return {[type]}            [description]
 */
function myRecord(lessonName,learnTime,lessonImg){
	this.lessonImg_=lessonImg;
	this.lessonName_=lessonName;
	this.learnTime_=learnTime;
}
/**
 * [myRecord 创建学习记录存入本地存储事件]
 * @param  {[string]} lessonName [课程名称]
 * @param  {[string]} learnTime  [学习时间记录]
 * @return {[type]}            [description]
 */
function aMyRecord(lessonName,learnTime,lessonImg){
	//获取当前用户信息
	var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
	//获取所有用户
	var allUser=JSON.parse(window.localStorage.getItem("HX170611_allUser"));
	//创建我的笔记对象
	oMyRecord = new myRecord(lessonName,learnTime,lessonImg);
	for(var j=0;j<nowUser.learnRecord_.length;j++){
		//判断课课程名是否重复,重复则替换，不重复则追加
		if(nowUser.learnRecord_[j].lessonName_==oMyRecord.lessonName_){
           nowUser.learnRecord_.splice(j,1,oMyRecord);//替换
           break;
		}else{
           //追加进原先数组
	       nowUser.learnRecord_.push(oMyRecord);
	       break;
		}
	}
	//判断有无数据，无则追加
	if(nowUser.learnRecord_.length==0){
        nowUser.learnRecord_.push(oMyRecord);
	}
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
}

/**
 * [showMyRecord 打印我的学习记录数组]
 * @param  {[ary]} aMyRecord [需要打印的学习记录的数组]
 * @param  {[string]} showId    [需要显示的学习记录的位置的ID]
 * @return {[type]}           [description]
 */
function showMyRecordBar(aMyRecord,showId){
   //倒序
   var aMyRecord=aMyRecord.reverse();
   //请空
   getById(showId).innerHTML="";
   for(var i=0;i<aMyRecord.length;i++){
   	  getById(showId).innerHTML+="<div class='recordBar'>"+
			                        "<div class='recordImg'><img src='"+aMyRecord[i].lessonImg_+"'></div>"+
			                        "<div class='recordContent' id='recordContent'>"+
			                             "<div><span>"+aMyRecord[i].learnTime_+"</span> 学习了 <span>"+aMyRecord[i].lessonName_+"</span></div>"+
			                             "<div><label onclick='javascript:goLearn(this)'>点此继续学习>>></label></div>"+
			                        "</div>"+
                                 "</div>"
   }
}

/**
 * [MyRecordTabEvent 从本地存储加载用户的学习记录数组并显示]
 * @param {[number]} num    [要显示的个数]
 * @param {[type]} pageId [分页按钮要显示的位置的ID]
 * @param {[type]} showId [要显示学习记录的位置的ID]
 */
function MyRecordTabEvent(num,pageId,showId){
	//获取该用户登录信息
	var nowUser=JSON.parse(window.localStorage.getItem("HX170611_nowUser"));
	//显示打印笔记
	showLessonPage(nowUser.learnRecord_,num,pageId,showId,showMyRecordBar);
}
/**
 * [goLearn 继续学习跳转相关课程页面]
 * @param  {[object]} obj [当前点击继续学习的对象]
 * @return {[type]}     [description]
 */
function goLearn(obj){
   //获取当前点击的对象的课程名
   var nowLessonName= obj.parentElement.previousElementSibling.children[1].innerText;
   //改变本地存储当前课程名
   window.localStorage.setItem("HX170611_nowLesson",nowLessonName);
   //跳转视频中心
   window.location.href="./video_center.html";
}
/**
 * [getNum 获取字符串中的数字]
 * @param  {[string]} text [需要获取数字的字符串]
 * @return {[string]}      [从字符串中筛选出来的数字]
 */
function getNum(text){  
    var value = text.replace(/[^0-9]/ig,"");   
    return value;  
}