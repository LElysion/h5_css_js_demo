window.onload=function(){
	//alert("ok");
	waterFall('main','box');
	var dataInt={
		"data":[{"src":'pic (24).jpg'},
		{"src":'pic (25).jpg'},{"src":'pic (26).jpg'},{"src":'pic (27).jpg'},{"src":'pic (28).jpg'},
		{"src":'pic (29).jpg'},{"src":'pic (30).jpg'},{"src":'pic (31).jpg'},{"src":'pic (32).jpg'},
		{"src":'pic (33).jpg'},{"src":'pic (34).jpg'},{"src":'pic (35).jpg'},{"src":'pic (36).jpg'},
		{"src":'pic (37).jpg'},{"src":'pic (38).jpg'},{"src":'pic (39).jpg'},{"src":'pic (40).jpg'},
		{"src":'pic (41).jpg'},{"src":'pic (42).jpg'},{"src":'pic (43).jpg'},{"src":'pic (44).jpg'},
		{"src":'pic (45).jpg'},{"src":'pic (46).jpg'},{"src":'pic (47).jpg'},{"src":'pic (48).jpg'},
		{"src":'pic (49).jpg'},{"src":'pic (50).jpg'},{"src":'pic (51).jpg'},{"src":'pic (52).jpg'},
		{"src":'pic (53).jpg'},{"src":'pic (54).jpg'},{"src":'pic (55).jpg'},{"src":'pic (56).jpg'},
		{"src":'pic (57).jpg'},{"src":'pic (58).jpg'},{"src":'pic (59).jpg'},{"src":'pic (60).jpg'},
		{"src":'pic (61).jpg'},{"src":'pic (62).jpg'},{"src":'pic (63).jpg'},{"src":'pic (64).jpg'},
		{"src":'pic (65).jpg'},{"src":'pic (66).jpg'},{"src":'pic (67).jpg'},{"src":'pic (68).jpg'},
		{"src":'pic (69).jpg'},{"src":'pic (70).jpg'},{"src":'pic (71).jpg'},{"src":'pic (72).jpg'},
		{"src":'pic (73).jpg'},{"src":'pic (74).jpg'},{"src":'pic (75).jpg'},{"src":'pic (76).jpg'},
		{"src":'pic (77).jpg'},{"src":'pic (78).jpg'},{"src":'pic (79).jpg'},{"src":'pic (80).jpg'},
		{"src":'pic (81).jpg'},{"src":'pic (82).jpg'},{"src":'pic (83).jpg'},{"src":'pic (84).jpg'},
		]}
	window.onscroll=function(){
		if(checkScrollSlide()){
			var oParent=document.getElementById('main');
			//将数据块渲染到当前页面尾部
			for(var i=0;i<dataInt.data.length;i++){
				var oBox=document.createElement('div');
				oBox.className='box';
				oParent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src='img/'+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			waterFall('main','box');
		}
		
	}
}

function waterFall(parent,box){
	//将main下的所有class为box的元素取出来
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	//console.log(oBoxs.length);
	//计算整个页面显示的列数(页面宽/box宽)
	var oBoxW=oBoxs[0].offsetWidth;//获取元素的宽
	//console.log(oBoxW);
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
	//console.log(cols);
	oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto';
	var hArr=[];//存放每列高度
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			var index=getMinhIndex(hArr,minH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			//oBoxs[i].style.left=oBoxW*index+'px';
			oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	}
	console.log(index);
}

//根据class获取元素
function getByClass(parent,clsName){
	var boxArr=new Array();//获取所有class为box的元素
		oElements=parent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}

function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}
//检测是否加载数据块条件
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var oBoxs=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	//console.log(scrollTop);
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	//console.log(height);
	return (lastBoxH<scrollTop+height)?true:false;
}


