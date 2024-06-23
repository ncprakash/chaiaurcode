
// {}scope
if (true){
    let a=10;
    const b=20;
     var c=30;

}
console.log(c);
//nested scope
 function one(){
    const username="naprkaash"
    function two (){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website)

    two()
 }
 one()
if (true){
    const username="ncprakash"
    if(username==="ncprakash"){
        website="youtube";

    }
    // console.log(website)


}
// console.log(username)
//++++++++++++++++++interesting++++++++++++++++



function addon(num){
    return num+1

}
console.log(addon(5))

addtwo(5)
const addtwo=function(num){
    return num+2
}
