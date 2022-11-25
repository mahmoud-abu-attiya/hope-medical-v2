// send email
function formSubmit() {
   let inpName = document.querySelector("#name");
   let inpEmail = document.querySelector("#email");
   let inpPhone = document.querySelector("#tel");
   let inpSup = document.querySelector(".form-message");
   let inpMsg = document.querySelector("#subject");
   // let inpState = document.querySelector("#validationCustom04");
   let myState = {
      name: inpName.value,
      email: inpEmail.value,
      subject: inpSup.value,
      phone: inpPhone.value,
      // service: inpState.value,
      msg: inpMsg.value,
   };
   function sweetalert() {
      swal("Thanks!", "We will contact you as soon as possible.", "success");
      inpPhone.value = "";
      inpEmail.value = "";
      inpMsg.value = "";
      inpName.value = "";
      inpSup.value = "";
      // inpState.value = "";
   }
   // fetch("https://formsubmit.co/ajax/mahmoud.abuattiya106@gmail.com", {
   fetch("https://formsubmit.co/ajax/mahmoud.abuattiya106@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myState),
   }).then(sweetalert());
}
let form = document.querySelector("#myForm");
form.addEventListener("submit", (e) => {
   e.preventDefault();
   formSubmit();
});
