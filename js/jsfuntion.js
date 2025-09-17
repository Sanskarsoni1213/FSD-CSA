function hloo(user='guest'){
    console.log('noicee ${user}');
}
hloo();
hloo('sanskar')

function sum(a=0,b=0){
    console.log('before return');
    return a+b;
    //console.log('after return');//unreachable code
}
const z=sum(12,13);
console.log("sum"+z);

const add=(a,b)=>{a+b}
console.log(add(12,13));

(function(){
    console.log('inside iife')
})();

function f1(user,callback){
    console.log(`hello ${user}`);
    callback();
}
f1('admin',()=>{
    console.log(add(12,13));
});

