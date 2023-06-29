function username_validation(){
    var username = document.getElementById("username").value
    // console.log(username)
    if(!username.match(/^[a-z]+/)){
        displayMsg("error_username","username must be start with alphabet", 'red' )
        // document.getElementById("error_username").innerHTML = "username must be start with alphabet"
        // document.getElementById("error_username").style.color = 'red'
    }
    else if(username.length < 5){ // 4
        displayMsg("error_username","username must be atleast 4 character", 'red' )
        // document.getElementById("error_username").innerHTML = "username must be atleast 4 character"
        // document.getElementById("error_username").style.color = 'red'
    }
    else{
        displayMsg("error_username", 'valid username', 'green')
        // document.getElementById("error_username").innerHTML = 'valid username'
        // document.getElementById("error_username").style.color = 'green'
    }
}

function displayMsg(id, msg, color){
    document.getElementById(id).innerHTML = msg;
        document.getElementById(id).style.color = color;
}