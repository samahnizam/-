
function validateForm()
 {
  let x = document.forms["myform"]["user"].value;
  let y=document.forms["myform"]["password"].value;
  if( (x == "")||(y==""))
   {
    alert("يجب إدخال اسم المستخدم وكلمة المرور");
    return false;
 }
}

function checkpassword()
{
    let x=document.getElementById("pass1").value;
    let y=document.getElementById("pass2").value;
    if(x!=y)
    {
    alert( "the passrword isn't same");
    document.getElementById("pass1").value="";
    document.getElementById("pass2").value="";

    return false;
    }
    else
    {
       return false;
    }
}

function checksignout()
{
    let email=document.getElementById("Email").value;
    let password=document.getElementById("pass1").value;
    let password2=document.getElementById("pass2").value;
    if(email=="" || password=="" || password2=="")
    {
        alert("you should Enter all information")
        return false
    }
    else
    {
        alert("you sign up succesfuly");
        return false;
    }
}

function checkpasswordlenght()

{
    let x1=document.getElementById("pass1").value;
    
    if(x1.length<8)
    {
        alert("the password should be more than 7 characters")
        document.getElementById("pass1").value="";
    
    }
    return false;
}



