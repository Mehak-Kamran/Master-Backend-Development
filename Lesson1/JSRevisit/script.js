//array
var arr=[1,2,3];
var arr1=[1,"hi",["a","b"],{name:"mak"}]
console.log(arr1)
console.log(arr)
//for each
arr.forEach((i)=>{
     console.log(i*2)
})
//map
var mapped=arr.map((i)=>{
    return i*2
})
console.log(mapped)
console.log(arr)

//filter
var filtered=mapped.filter((i)=>{
    if(i===2){
        return true
    }
})
console.log(filtered)

//find
//find always find one elemet that it find first
var finded=arr.find((i)=>{
    if(i>1){
        return i
    }
})
console.log(finded)

//indexof
console.log(arr.indexOf(2))

///////////////////END//////////////////////////////////////////////////////

//OBJECTS

var car={
    name:"civic",
    model:"5",
    color:"pink",
    manual:false,
    automatic:true
}
console.log(car)
console.log(car.manual,car.automatic)
console.log(car["model"])
car.color="blue"
console.log(car["color"])
Object.freeze(car)//if you want that the object should be immutable
car.name="toyota"
console.log(car.name)

///////////////////END//////////////////////////////////////////////////////

//length
let numbers=[56,34,89,77]
let grooming=function(a,b,c){
   console.log("hello")
}
console.log("length of array is ",numbers.length,"length of function",grooming.length)

//asyncawait
 async function homework(){
    var blob =await fetch("url")
    var ans=blob.json()
    console.log(ans)
}
homework()
