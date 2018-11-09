/**
 * Created by andy on 2018/7/14.
 */

//标签获取
var tag_images = document.getElementsByClassName("slide");
var tag_imageArea = document.getElementsByClassName("menu-img");
var tag_nav = document.getElementsByClassName("menu-bar")[0].getElementsByTagName("div");

console.log(tag_nav)
//给导航添加下标，以及鼠标事件
for(var i = 0;i<tag_nav.length;i++){
    tag_nav[i].index=i;
    tag_nav[i].onclick=stopImgNew;
    tag_nav[i].onmouseover=cursorState;
    tag_nav[i].onmouseout=startImg;
}

//设置定时器
var timer = null,
    index = 0;
startImg();
showImg();
//图片开始轮播
function startImg(){
    //timer为空
    if(!timer){
        timer = setInterval(function(){
            //下标自增
            index++;
            if(index > tag_images.length-1){
                index=0;
            }

            showImg();
        },1000)
    }
}

function showImg(){
    //清除之前的
    for(var i = 0;i <tag_images.length;i++){
        tag_images[i].style.display="none";
        tag_nav[i].className="";
    }

    //图片切换
    tag_images[index].style.display="block";
    //菜单切换
    tag_nav[index].className="hover";
}

/*添加图片事件*/
tag_imageArea[0].onmouseover=stopImg;
tag_imageArea[0].onmouseout = startImg;
/*消除定时器*/
function stopImg(){
    clearInterval(timer);
    timer=null;
}
//设置菜单光标
function cursorState(){
    stopImg();
    this.style.cursor="pointer";
}

/*添加图片切换*/
function stopImgNew(){
    //图片停止
    stopImg();
    //清除之前的图片及导航样式
    tag_images[index].style.display="none";
    tag_nav[index].className="";
    //下标获取
    var index1 = this.index;
    //图片跳转及导航样式
    tag_images[index1].style.display="block";
    this.className="hover";
    //设置当前图片的下标
    index = index1;
}