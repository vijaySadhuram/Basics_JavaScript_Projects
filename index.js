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
    const random=(Math.random()*25).toFixed(0);// it will generate number from 0 to 25 upto 5 char  
    console.log(random);
 text=text+letter[random];
    }
 return text;
 
}

// console.log(RandomgenerateWord(0));

const input=document.getElementById("numOfword");
console.log(input);

// // console.log(Math.);
// // console.log(input);
// // const tag=document.createElement("p");
// // document.querySelector(".myPara").append(tag)
total=" ";
const getPara=()=>{
    const Num=Number(input.value);
   //  console.log(Num);
   //  get value of placeholder 
   
   for(let i=0;i<Num;i++){
      console.log()
      // console.log((Math.random()*Num).toFixed(0))
      total=total+RandomgenerateWord((Math.random()*2).toFixed(0))+" "
   }
    const para=document.createElement("p");
   //  console.log(para);
   //  // console.log(Num);
    para.setAttribute("class","myPara")
    const val=document.querySelector(".container").append(para);
   //  for(let i=0;i<Num;i++){
   //  console.log(RandomgenerateWord((Math.random()*Num).toFixed(0)));
   para.innerText=total

   
    }
//     para.innerText="sample"
    
// }
