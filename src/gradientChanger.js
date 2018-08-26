/*
    目前正在进行的工作：
    选择一些好看的UIGradients渐变，加入到这里面
*/
var gradientLoader="<style>#gradient{background: linear-gradient(to right,";//这一行以及之后的每一行gradientLoader都是用于动态加载style事件的
var allSum=1;//到现在为止，已经有多少组
var r=Math.floor(Math.random()*allSum);//随机数
//document.write(r);
if(r==0){
    gradientLoader+="#00416A";
    gradientLoader+=',';
    gradientLoader+="#E4E5E6";
}
gradientLoader+="); }</style>";
document.write(gradientLoader);