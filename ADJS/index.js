let name1 ={
    first:"Rakesh",
    last: "Mohapatra"

}


let printfullname =function()
{
    console.log(this.first+ " "+this.last)

}
printfullname.call(name1);



let name2 ={
    first: "raja",
last: "Yoyo"

}
printfullname.call(name2);