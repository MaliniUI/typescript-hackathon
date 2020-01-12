// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

 var   noOfTestCases = 1;
var strLen = 7;
var diff = 2;
var nationality2 = "afcbedf";
var inStr1= "afcbedf";
var alpha = ["-1","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var myArr : any[] = [];
var myTempArr: any[]=[];
  function test(): any{
	myArr = nationality2.split("");
for(var k=0; k< strLen; k++){
  console.log("k--> " +k + myArr[k]);
  for(var l=1; l< strLen; l++){
    console.log("l--> "+l+ myArr[l]);
    console.log("diff ==> "+(alpha.indexOf(myArr[k])-alpha.indexOf(myArr[l])));
    console.log("=========================================");
    console.log("if greater ==> "+ (alpha.indexOf(myArr[k]) > alpha.indexOf(myArr[l])));
    if((alpha.indexOf(myArr[l]) > alpha.indexOf(myArr[k]))){
    if((alpha.indexOf(myArr[l])-alpha.indexOf(myArr[k])) == diff){
      //debugger;
      console.log("myTempArr ==>"+myTempArr);
      console.log("dup k ==> "+myTempArr.indexOf(myArr[k]));
      console.log("dup l ==> "+myTempArr.indexOf(myArr[l]));
      debugger;
      if(myTempArr.indexOf(myArr[k]) == -1 && myTempArr.indexOf(myArr[l]) == -1){
        console.log("pushed k --> "+myArr[k]);
        console.log("pushed l --> "+myArr[l]);
        myTempArr.push(myArr[k]);
        myTempArr.push(myArr[l]);
      }
    }
      
    }
  }
}

if(myTempArr.length > 0){
  console.log("Final --> "+ myTempArr.length);
  return myTempArr;
}
	}
	var nationality1 = test();
	console.log("*************************************************"+ nationality1);

