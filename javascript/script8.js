function validate(){
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    const email=document.getElementById("email").value;
    const pwd=document.getElementById("pwd").value;
    const repwd=document.getElementById("repwd").value;
    const age=parseInt(document.getElementById("age").value);

    const phno=document.getElementById("phno").value;
    const addr=document.getElementById("addr").value;
    const state=document.getElementById("state").value;
    var cnt=0;
    if(fname.length<4){
        cnt++;
        document.getElementById("fnamemsg").innerText="POOR";
        document.getElementById("fnamemsg").style.color="red"
    }
    else{
        document.getElementById("fnamemsg").innerText="STRONG";
        document.getElementById("fnamemsg").style.color="lightgreen"
    }
    if(lname.length<4){
        cnt++;
        document.getElementById("lnamemsg").innerText="POOR";
        document.getElementById("lnamemsg").style.color="red"
    }
    else{
        document.getElementById("lnamemsg").innerText="STRONG";
        document.getElementById("lnamemsg").style.color="lightgreen"
    }
    if(!email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)){
        cnt++;
        document.getElementById("emailmsg").innerText="POOR";
        document.getElementById("emailmsg").style.color="red"
    }
    else{
        document.getElementById("emailmsg").innerText="STRONG";
        document.getElementById("emailmsg").style.color="lightgreen"
    }
    if(!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
        cnt++;
        document.getElementById("pwdmsg").innerText="POOR";
        document.getElementById("pwdmsg").style.color="red"
    }
    else{
        if(pwd.length<14){
            document.getElementById("pwdmsg").innerText="MEDIUM";
            document.getElementById("pwdmsg").style.color="lightblue"
        }
        else{
            document.getElementById("pwdmsg").innerText="STRONG";
            document.getElementById("pwdmsg").style.color="lightgreen"
        }
    }
    if(repwd.length==0 || pwd!=repwd){
        cnt++;
        document.getElementById("repwdmsg").innerText="POOR OR MISMATCH";
        document.getElementById("repwdmsg").style.color="red"
    }
    else{
        document.getElementById("repwdmsg").innerText="STRONG";
        document.getElementById("repwdmsg").style.color="lightgreen"
    }
    if(!(age>0 && age<150)){
        cnt++;
        document.getElementById("agemsg").innerText="POOR";
        document.getElementById("agemsg").style.color="red"
    }
    else{
        document.getElementById("agemsg").innerText="STRONG";
        document.getElementById("agemsg").style.color="lightgreen"
    }
    if(!phno.match(/^\d{10}$/)){
        cnt++;
        document.getElementById("phnomsg").innerText="POOR";
        document.getElementById("phnomsg").style.color="red"
    }
    else{
        document.getElementById("phnomsg").innerText="STRONG";
        document.getElementById("phnomsg").style.color="lightgreen"
    }
    if(addr.length==0){
        cnt++;
        document.getElementById("addrmsg").innerText="POOR";
        document.getElementById("addrmsg").style.color="red"
    }
    else{
        document.getElementById("addrmsg").innerText="STRONG";
        document.getElementById("addrmsg").style.color="lightgreen"
    }
    if(state.length<3){
        cnt++;
        document.getElementById("statemsg").innerText="POOR";
        document.getElementById("statemsg").style.color="red"
    }
    else{
        document.getElementById("statemsg").innerText="STRONG";
        document.getElementById("statemsg").style.color="lightgreen"
    }
    if(cnt>0){
        return false;
    }
    return true;
}