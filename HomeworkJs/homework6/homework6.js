//Domasna br 6 ,,Formular za registriranje na korisnik"//
window.onload = function(){
    const myButton=document.querySelector(`#btn`)
    myButton.addEventListener(`click`,()=>{
        let firstName=document.getElementById("FirstName").value;
        let lastName=document.getElementById("lastName").value;
        let email=document.getElementById("email").value;

        console.log(`FirstName ${firstName}`);
        console.log(`LaststName ${lastName}`);
        console.log(`Email ${email}`);
        console.error(`Critical security error do not print out passwords`);

    });

}