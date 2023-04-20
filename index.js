// const btn=document.getElementById("paraBtn");
// const para=document.createElement("p");
// para.innerText="helo";
// document.querySelector(".paraContainer").prepend(para);


   

// const paraGeneration=function(){
    
    
// }

let text="";
const RandomgenerateWord=(numOfword)=>{
    const letter="abcdefghjiklmnopqrstuvwxyz";
    for(let i=0;i<numOfword;i++){
    const random=(Math.random()*25).toFixed(0);
 text=text+letter[random];
    }
 return text;
 
}

console.log(RandomgenerateWord(5));

const input=document.getElementById("numOfword");

// console.log(Math.);
// console.log(input);
// const tag=document.createElement("p");
// document.querySelector(".myPara").append(tag)
const getPara=()=>{
    const Num=Number(input.value);
    const para=document.createElement("p");
    // console.log(para);
    // console.log(Num);
    para.setAttribute("class","myPara")
    const val=document.querySelector(".container").append(para);
    console.log(RandomgenerateWord((Math.random()*5).toFixed(0)));
    para.innerText="sample"
    
}