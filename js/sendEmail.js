// send email
function formSubmit() {
   let inpName = document.querySelector("#name");
   let inpEmail = document.querySelector("#email");
   let inpPhone = document.querySelector("#tel");
   let inpMsg = document.querySelector("#myForm textarea");
   let inpSup = document.querySelector("#subject");
   let myState = {
      name: inpName.value,
      email: inpEmail.value,
      subject: inpSup.value,
      phone: inpPhone.value,
      Message: inpMsg.value,
   };
   function sweetalert() {
      swal("Thanks!", "We will contact you as soon as possible.", "success");
      inpPhone.value = "";
      inpEmail.value = "";
      inpMsg.value = "";
      inpName.value = "";
      inpSup.value = "";
   }
   fetch("https://formsubmit.co/ajax/info@hopemedical.qa", {
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
