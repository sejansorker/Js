
// const namee = ["sejan",10,11,12,true,false, "sorker", "safi" , "saila","hasan", "shima"]
// console.log(namee[0]);




// const sonkha = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20]
// console.log(sonkha);
// sonkha.map((item)=>{
//     console.log(item);
    
// })



// const stud = {
//     namee:"sejan",
//     roll:"1",
//     mark:"90",
//     class : 11
// }

// const fdr = [
//     {
//     id:"1",
//     namee:"sejan",
//     roll:"1",
//     mark:"90",
//     class : 11
//     },
//     {
//     id:"2",
//     namee:"sorker",
//     roll:"2",
//     mark:"91",
//     class : 12
//     },
//     {
//     id:"3",
//     namee:"safi",
//     roll:"3",
//     mark:"92",
//     class : 13
//     },
//     {
//     id:"4",
//     namee:"ssss",
//     roll:"4",
//     mark:"93",
//     class : 14
//     },
// ]
// const result = fdr.filter(item => item.id === "2");

// console.log(result);


// rest oparator

let sum = 0
function abc(...a){
    a.map((item)=>{
        sum += item
    })
    console.log(sum);
}
abc(10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000)



// spret Oparetop

const data = {
    id: 1,
    nam:"sejan",
    age:22,
    salary:30000,
   
}
const extra ={
    father:"nazmul",
    mother:"sultana",
     ...data
}

console.log(extra);
