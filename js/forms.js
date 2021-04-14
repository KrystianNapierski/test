    function checkForm(){
     var error=false; //to znaczy, że danych nie brakuje
     var errorText=""; //komunikat z błędem
     var contactName = document.getElementById("contactName");
     var contactInfo = document.getElementById("info"); 
     var contactEmail = document.getElementById("contactEmail"); 
     if (contactName.value == ""){
     error=true;
     document.getElementById("errorName").className="text-danger uninvisible"; 
     } 
     if (contactEmail.value == ""){
     error=true;
     document.getElementById("errorName1").className="text-danger uninvisible"; 
    } 
    if (contactInfo.value == ""){
      error=true;
      document.getElementById("errorName2").className="text-danger uninvisible"; 
      } 
    if (!error) return true; else{
     return false;} 
     if(contactEmail.value == ""){
     error=true;

    } else
    {
     var email = contactEmail.value;
      var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
    if(regex.test(email)==false)
    {
    error=true;
    }
    } 
    }
function zmiana()
{
  var contactName = document.getElementById("contactName");
  var contactInfo = document.getElementById("info"); 
  var contactEmail = document.getElementById("contactEmail"); 
  if (contactName.value == ""){
    error=true;
    document.getElementById("contactName").className="form-control is-invalid"; 
    } 
    else
    {
      document.getElementById("contactName").className="form-control is-valid";
    }
    if (contactEmail.value == ""){
    error=true;
    document.getElementById("contactEmail").className="form-control is-invalid"; 
   } 
   else
    {
     var email = contactEmail.value;
      var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

    if(regex.test(email)==false)
    {
    error=true;
    document.getElementById("contactEmail").className="form-control is-invalid"; 
    }
    else
    {
      document.getElementById("contactEmail").className="form-control is-valid"; 

    }
    }

   if (contactInfo.value == ""){
     error=true;
     document.getElementById("info").className="form-control is-invalid"; 
     } 
     else
     {
      document.getElementById("info").className="form-control is-valid"; 
     }
     if (!error) {
     return true; }
     else{
     return false; } 
    
}