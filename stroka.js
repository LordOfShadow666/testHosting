//var abc = document.getElementById("str1");
// var abc = "Вася, 18, 180, 120;"+
// "Игорь, 21, 180, 120;"+
// "Глеб, 17, 180, 11;"+
// "Дима, 65, 180, 10";


// var strAr = new Array;
// strAr = abc.split(";");
// console.log(strAr);
// for(var i = 0; i <strAr.length;i++){
//     strAr[i] = strAr[i].split(",");
// }
// console.log(strAr);
// for(var i = 0; i <strAr.length;i++){
//     var a = strAr[i];
//     if(a[0]=="Глеб"){
//         console.log(a);
//     }
// }

// var fruit = "ЯбЛоКо";
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());

// var corzina = "яблоко,груша,Слива,ЯБЛОко,Персик,Ананас,Груша";
// var corzinaX = new Array;
// corzinaX = corzina.split(",");
// for(var i = 0; i < corzinaX.length; i++){
//     corzinaX[i] = corzinaX[i].toUpperCase();
// }
// console.log(corzinaX);
// var result = new Array;
// for(var i = 0; i < corzinaX.length; i++){
//     unic = 1;
//     for (var j = 0;j < result.length;j++){
//         if(corzinaX[i]==result[j]){
//             unic = 0;
//         }
//     }
//     if(unic == 1){
//         result.push(corzinaX[i])
//     }
//     console.log(result);
// }

// var corzina = "яблоко,груша,Слива,ЯБЛОко,Персик,Ананас,Груша";

// var result = "Яблоко,2,Груша,2,Слива,1,Персик,1,Ананас,1"

strs = document.getElementsByClassName("str");
function chgStr() {
    txtr = document.getElementById("txt1").value;
    var textStr = "";
    for (i = 0; i < txtr.length; i++) {
        var temp = txtr.substring(i, i + 1);
        if (temp == " ") {
            textStr = txtr.substring(0, i);
            var num = parseInt(txtr.substring(i + 1, i + 2));
        }
    }
    strs[num].innerHTML = textStr;
}

// if(isChet(i)){

// }
function chgStr1() {
    txtr = document.getElementById("txt1").value;
    var str1 = new Array;
    var res = "";
    str1 = txtr.split("");
    for (i = 0; i < str1.length; i++) {
        if (isChet(i)) {
            res += str1[i];
        }
        else {
            res += i;
        }
    }
    console.log(res);
}
function isChet(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function unicEl(){
    str = "wwweeee";   
    str1 = str.split("");
    console.log(str1);
    str2 = new Array;
    for(i=0;i<str1.length;i++){
        var unic = true;
        for(j = 0; j<str2.length;j++){
            if(str1[i]==str2[j]){
                unic = false;
            }
        }
        if(unic){
            str2.push(str[i]);
        }
        else{
            continue;
        }
    }
    console.log(str2);
    
    for(i = 0; i< str2.length; i++){
        count = 0;
        for(j = 0; j < str1.length; j++){
            if(str2[i]==str[j]){
                count++;
            }
        }
        console.log(str2[i],count)
    }
}

