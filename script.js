/*function checkForm(el) {
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    console.log(state + " - " + pass + " - " + repass);

    return false;
} */

function checkForm(el) {
    var name = el.name.value;
    var pass = el.pass.value;
    var fail = "";

    if (name == "" || pass == "")
        fail = "Feel inputs";
    else if (name.length < 1 || name.length > 50 )
        fail = "Incorrect name"
    else if (pass.length < 8 || pass.length > 25)
        fail = "Incorrect password"
    else (pass.split("-").length > 1)
        fail = "Incorrect password";
    
    if (fail != "") {
        document.getElementsByClassName('error').innerHTML = fail;
        return false;
    } else {
        alert ("All inputs was correct");
        return true;
    }

}