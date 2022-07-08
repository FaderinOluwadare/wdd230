const registerUser =  async (event) => {
  event.preventDefault();


  
     event.target.lname.value = "";
    event.target.fname.value = "";
    event.target.email.value = "";
    event.target.subject.value = "";
    event.target.message.value = "";
    alert("Your Application has been sent");
  
};

document.querySelector(".form").addEventListener("submit", registerUser);
