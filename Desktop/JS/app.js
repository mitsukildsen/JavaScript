// 条件分岐
// var orange = 120;
// var apple = 120;

// if(orange < apple){
// 	alert('みかんの値段がリンゴより安い');
// }
// else if(orange == apple){
// 	alert('みかんとりんごが同じ値段');
// }
// else{
// 	alert('みかんの値段がリンゴより高い');
// }


// while文
// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
// 	num = num * 2;
// 	count = count + 1;
// }
// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// do...while文
// do{
//   最低1回は行われる処理
// }while(条件式);

// for文
// var i;
// var num = 0;

// for(i = 1; i < 11; i++){
// 	num = num + i;
// }
// alert('1から10まで足し算した結果は' + num + 'です');


// 練習問題(2章)
// alert(5 + 3);
// alert(6 - 2);
// alert(3 * 3);
// alert(8 / 4);


// 3章
var alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
	var addStr = "Hello " + strA;
	return addStr;
}