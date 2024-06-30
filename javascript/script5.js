function validate(){
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    url=document.getElementById("url").value;
    msg=document.getElementById("msg").value;
    var cnt=0;
    if(name.length<6){
        cnt++;
        document.getElementById("namemsg").innerText="This field is required";
        document.getElementById("namemsg").style.color="red";
        document.getElementById("name").style.borderColor="red";
    }
    else{
        document.getElementById("namemsg").innerText="";
        document.getElementById("name").style.borderColor="";
    }
    if(!email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)){
        cnt++;
        document.getElementById("emailmsg").innerText="This field is required";
        document.getElementById("emailmsg").style.color="red";
        document.getElementById("email").style.borderColor="red";
    }
    else{
        document.getElementById("emailmsg").innerText="";
        document.getElementById("email").style.borderColor="";
    }
    if(!url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)){
        cnt++;
        document.getElementById("urlmsg").innerText="This field is required";
        document.getElementById("urlmsg").style.color="red";
        document.getElementById("url").style.borderColor="red";
    }
    else{
        document.getElementById("urlmsg").innerText="";
        document.getElementById("url").style.borderColor="";
    }
    if(msg.length==0){
        cnt++;
        document.getElementById("errmsg").innerText="This field is required";
        document.getElementById("errmsg").style.color="red";
        document.getElementById("msg").style.borderColor="red";
    }
    else{
        document.getElementById("errmsg").innerText="";
        document.getElementById("msg").style.borderColor="";
    }
    if(cnt>0){
        return false;
    }
    return true;
}