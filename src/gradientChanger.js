/*
    目前正在进行的工作：
    选择一些好看的UIGradients渐变，加入到这里面
    现在：已经完成了绿色系添加工作
*/
var gradientLoader="<style>#gradient{background: linear-gradient(to right,";//这一行以及之后的每一行gradientLoader都是用于动态加载style事件的
var allSum=25;//到现在为止，已经有多少组
var r=Math.floor(Math.random()*allSum);//随机数
//document.write(r);
if(r==0){//红色系
    gradientLoader+="#ee9ca7,#ffdde1";
}else if(r==1){
    gradientLoader+="#12c2e9,#c471ed,#f64f59";
}else if(r==2){
    gradientLoader+="#654ea3,#eaafc8";
}else if(r==3){
    gradientLoader+="#DA4453,#89216B";
}else if(r==4){
    gradientLoader+="#bc4e9c,#f80759";
}else if(r==5){
    gradientLoader+="#FC5C7D,#6A82FB";
}else if(r==6){
    gradientLoader+="#ff9966,#ff5e62";
}else if(r==7){
    gradientLoader+="#F2994A,#F2C94C";
}else if(r==8){
    gradientLoader+="#E44D26,#F16529";
}else if(r==9){
    gradientLoader+="#D66D75,#E29587";
}else if(r==10){
    gradientLoader+="#cb2d3e,#ef473a";
}else if(r==11){
    gradientLoader+="#f46b45,#eea849";
}else if(r==12){
    gradientLoader+="#DD5E89,#F7BB97";
}else if(r==13){
    gradientLoader+="#B79891,#94716B";
}else if(r==14){//橙色系
    gradientLoader+="#FDC830,#F37335";
}else if(r==15){
    gradientLoader+="#FFE000,#799F0C";
}else if(r==16){//黄色系
    gradientLoader+="#00b09b,#96c93d";
}else if(r==17){
    gradientLoader+="#dce35b, #45b649";
}else if(r==18){
    gradientLoader+="#ADD100,#7B920A";
}else if(r==19){
    gradientLoader+="#799F0C,#ACBB78";
}else if(r==20){//绿色系
    gradientLoader+="#11998e,#38ef7d";
}else if(r==21){
    gradientLoader+="#00F260,#0575E6";
}else if(r==22){
    gradientLoader+="#76b852,#8DC26F";
}else if(r==23){
    gradientLoader+="#1D976C,#93F9B9";
}else if(r==24){
    gradientLoader+="#BBD2C5,#536976";
}
gradientLoader+="); }</style>";
document.write(gradientLoader);