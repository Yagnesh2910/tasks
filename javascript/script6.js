var pp={"user1":"Password@1","user2":"Password@2","user3":"Password@3","user4":"Password@4"}
        function validate(){
            var uname=document.getElementById("uname").value;
            var pwd=document.getElementById("pwd").value;
            var log={"user1":"Password@1","user2":"Password@2","user3":"Password@3","user4":"Password@4"}
            document.getElementById("msg").style.textAlign="center";
            if(uname.length==0){
                document.getElementById("msg").innerHTML="Please supply Username";
                document.getElementById("msg").style.color="red";
                return false;
            }
            else if(!(uname in log)){
                document.getElementById("msg").innerHTML="Username is not registered";
                document.getElementById("msg").style.color="red";
                return false;
            }
            else if(!((uname in log) && pwd==log[uname])){
                document.getElementById("msg").innerHTML="Username or Password is incorrect";
                document.getElementById("msg").style.color="red";
                return false;
            }
            document.getElementById("msg").innerHTML="Successfully logged in (redirecting in 2sec)";
            document.getElementById("msg").style.color="lightgreen";
            setTimeout(1000);
            document.getElementById("msg").innerHTML="Successfully logged in (redirecting in 1sec)";
            setTimeout(1000);
            return true;
        }