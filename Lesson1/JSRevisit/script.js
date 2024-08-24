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
