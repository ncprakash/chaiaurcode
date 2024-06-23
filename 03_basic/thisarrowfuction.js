const user={
    username:"lilly",
    price:"999",
    welcomeMessege:function(){
        console.log(`${this.username} ,welcome to website`)
    }
}
user.welcomeMessege()
console.log(this)
function chai(){
    console.log(this)
}
chai()