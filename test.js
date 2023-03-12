let tab1= [3, 1, 7, 9]
let tab2= [13, 10, 16, 15] ; (10, 13 ,10,13)
var test ; 
var sum = 0

for( let i=0;i < tab1.lengh ; i++){
    test = false;
    for(let j=0 ; j< tab2.length ; j++ ){
    if (tab1[i]=== tab2[j]){
  test = true
    }
    }
    if(test ===true){
        sum+= tab1[i]

    }
}
for( let i=0;i < tab2.lengh ; i++){
    test = false;
    for(let j=0 ; j< tab1.length ; j++ ){
    if (tab2[i]=== tab1[j]){
  test = true
    }
    }
    if(test ===true){
        sum+= tab2[i]

    }
}


console.log(sum)


