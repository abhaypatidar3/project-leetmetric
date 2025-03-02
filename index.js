// let a= "hello i am abhay";
// let words= a.split(" ");
// console.log(words);

// console.log(words.join("__"));



// let solve=(a,b)=>{
//     call();
//     return a*b;
// }

// let prob=(a,b,c=solve(a,b))=>
// {
//     console.log(`answer is ${c}`);
// }
// var a=5;
// var b=6;
// prob(a,b);

// let person= {
//     name:"Abhay",
//     cast:"patidar",
//     category:"general",
//     call:function call(){
//         let a = "hello multiplication starteted";
//         console.log(a);
//         return a;
//     }
// }

// console.log(person.call);
// person.call();


// let brr=[1,2,3,4,5,6,86,4,3,23,45];
// let brr1=brr.sort((a,b)=>b-a);
// console.log(brr1);

// for(let key in person)
// {
//     console.log(key);
// }

// try{
//     console.log(x);
// }
// catch(error)
// {
//     throw new Error(`declare x first`);
// }
// finally{
//     console.log("program terminated");
// }

// function onclick(event){
//     console.log(event);
//     let fpara= document.getElementById("fpara");
//     fpara.textContent="hii this is Abhay";
// }

// let fpara= document.getElementById('fpara');
// fpara.addEventListener('click', onclick);






// async function getData(){
//     setTimeout(function(){
//         console.log("Abhay");
//     },4000);

//     console.log("he is good men");
// }
// let output=getData();





async function getData(){
    // let response = await fetch('https://jsonplaceholder.typicode.com/posts'); // this route provide array of objects
    let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1'); // this route provide array of comments 
    let data = await response.json();
    console.log(data);
}
getData();
/* scenario
//prepare url / API endpoint -> sync. code
// fetch data -> network call -> async. code...........we have to mark (await) for this
// process data -> sync. code      if this line is processed before fetching data........then it will show undefines behaviour
so we have to mark Await for fetch data 
*/ 