var g="<style>#gradient{background: linear-gradient(to right,";//这一行以及之后的每一行g(g:gradient)都是用于动态加载style事件的
var allSum=64;//到现在为止，已经有64组了^_^
var r=Math.floor(Math.random()*allSum);//随机数
//document.write(r);
if(r==0){//红色系
    g+="#ee9ca7,#ffdde1";
}else if(r==1){
    g+="#12c2e9,#c471ed,#f64f59";
}else if(r==2){
    g+="#654ea3,#eaafc8";
}else if(r==3){
    g+="#DA4453,#89216B";
}else if(r==4){
    g+="#bc4e9c,#f80759";
}else if(r==5){
    g+="#FC5C7D,#6A82FB";
}else if(r==6){
    g+="#ff9966,#ff5e62";
}else if(r==7){
    g+="#F2994A,#F2C94C";
}else if(r==8){
    g+="#E44D26,#F16529";
}else if(r==9){
    g+="#D66D75,#E29587";
}else if(r==10){
    g+="#cb2d3e,#ef473a";
}else if(r==11){
    g+="#f46b45,#eea849";
}else if(r==12){
    g+="#DD5E89,#F7BB97";
}else if(r==13){
    g+="#B79891,#94716B";
}else if(r==14){//橙色系
    g+="#FDC830,#F37335";
}else if(r==15){
    g+="#FFE000,#799F0C";
}else if(r==16){//黄色系
    g+="#00b09b,#96c93d";
}else if(r==17){
    g+="#dce35b, #45b649";
}else if(r==18){
    g+="#ADD100,#7B920A";
}else if(r==19){
    g+="#799F0C,#ACBB78";
}else if(r==20){//绿色系
    g+="#11998e,#38ef7d";
}else if(r==21){
    g+="#00F260,#0575E6";
}else if(r==22){
    g+="#76b852,#8DC26F";
}else if(r==23){
    g+="#1D976C,#93F9B9";
}else if(r==24){
    g+="#BBD2C5,#536976";
}else if(r==25){//浅蓝色系
    g+="#2193b0,#6dd5ed";
}else if(r==26){
    g+="#0F2027,#203A43,#2C5364";
}else if(r==27){
    g+="#aa4b6b,#6b6b83,#2C5364";
}else if(r==28){
    g+="#1f4037,#99f2c8";
}else if(r==29){
    g+="#7F7FD5,#86A8E7,#91EAE4";
}else if(r==30){
    g+="#155799,#159957";
}else if(r==31){
    g+="#00B4DB,#0083B0";
}else if(r==32){
    g+="#11998e,#38ef7d";
}else if(r==33){
    g+="#00b09b,#96c93d";
}else if(r==34){
    g+="#667db6,#0082c8,#0082c8,#667db6";
}else if(r==35){
    g+="#74ebd5,#ACB6E5";
}else if(r==36){
    g+="#06beb6,#48b1bf";
}else if(r==37){
    g+="#159957,#155799";
}else if(r==38){
    g+="#56CCF2,#2F80ED";
}else if(r==39){
    g+="#4AC29A,#BDFFF3";
}else if(r==40){
    g+="#9CECFB,#65C7F7,#0052D4";
}else if(r==41){
    g+="#457fca,#5691c8";
}else if(r==42){
    g+="#24C6DC,#514A9D";
}else if(r==43){
    g+="#2193b0,#6dd5ed";
}else if(r==44){//深蓝色系
    g+="#373B44,#4286f4";
}else if(r==45){
    g+="#654ea3,#eaafc8";
}else if(r==46){
    g+="#4568DC,#B06AB3";
}else if(r==47){
    g+="#6441A5,#2a0845";
}else if(r==48){
    g+="#283048,#859398";
}else if(r==49){//粉色系
    g+="#f953c6,#b91d73";
}else if(r==50){
    g+="#800080,#ffc0cb";
}else if(r==51){
    g+="#41295a,#2F0743";
}else if(r==52){
    g+="#B993D6,#8CA6DB";
}else if(r==53){
    g+="#DA22FF,#9733EE";
}else if(r==54){
    g+="#FBD3E9,#BB377D";
}else if(r==55){
    g+="#c0392b,#8e44ad";
}else if(r==56){//黑白灰色系
    g+="#EDE574,#E1F5C4";
}else if(r==57){
    g+="#757F9A,#D7DDE8";
}else if(r==58){
    g+="#9796f0,#fbc7d4";
}else if(r==59){
    g+="#355C7D,#6C5B7B,#C06C84";
}else if(r==60){
    g+="#ADA996,#F2F2F2,#DBDBDB,#EAEAEA";
}else if(r==61){
    g+="#232526,#414345";
}else if(r==62){
    g+="#B79891,#94716B";
}else if(r==63){
    g+="#1F1C2C,#928DAB";
}
g+="); }</style>";
document.write(g);