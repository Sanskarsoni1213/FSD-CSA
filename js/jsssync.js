//synchronous
function displayData(){
    waitfor5second();
    console.log('display data end');
}
function login(){
    waitfor5second();
    console.log('login end');
}
function register(){
    waitfor5second();
    console.log('login end');
}
function waitfor5second(){
    const ms=new Date().getTime()+5000;
    while(new Date().getTime()<ms){

    }
}



