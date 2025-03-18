
//higher order function
function a(b){
    console.dir(b);
    b()
}


//call back function
a(function(){
    console.log('hiiiiiiiiiii');
})


