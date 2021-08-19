document.getElementById('login-submit').addEventListener(
    'click', function(){
       const emailField = document.getElementById('used-email');
       const usereMail = emailField.value ;
    //    console.log(usereMail);

    //    get use passwordfield 
    //    const passwordField = document.getElementById('used-password');
       const usedPassword =  document.getElementById('used-password').value;

    //    console.log(usedPassword);

       if(usereMail == 'gazisabbir924@gmail.com'&& usedPassword == 'Ma+Father=4'){
           
      window.location.href ='banking.html';
       }
    }
)