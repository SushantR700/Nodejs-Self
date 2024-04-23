function sum(name, add){
console.log(name, "created a callback and result is", add(0,0));
}


sum("Sushant", (a,b) => {
   
    if((a+b)<1){
   console.log(" Negative or zero")
    }
else{
    console.log("+ve");
}
return a+b;
})