//Asynchronous
function displayData(){
    return new Promise(()=>{
        setTimeout(()=>{
        console.log('display data end');
        resolve();
    },5000)
    })
    
    
}
function login(cb){
    return new Promise(()=>{
        setTimeout(()=>{
        console.log('login end');
        resolve();
    },5000)
    })
}
function cv(cb){
    setTimeout(()=>{
        console.log('cv end');
    },5000)
    cb();
    
}
function waitfor5second(){
    const ms=new Date().getTime()+5000;
    while(new Date().getTime()<ms){

    }
}
//using promise
displayData().then(login)
             .then(cv);

console.log("hello")

