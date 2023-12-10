
// when terms and condiions box is checked, enable the submit button and change the opacity
document.getElementById('t&c').addEventListener('change', e => {
    let submit = document.getElementById('submit')
    if(e.target.checked){
        submit.disabled = false
        submit.style.opacity = 1
    }
    else{
        submit.style.opacity = 0.4
    }

}
)



function submitForm() {
  let name = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  let email = document.getElementById("email").value;
  let psswd = document.getElementById("password").value;
  let confirm_psswd = document.getElementById("cpassword").value;
  let gender = document.querySelector("form").elements["gender"].value;

//   if password and conform password are the same, set the values in local storage
  if (psswd == confirm_psswd) {
    localStorage.setItem("name", name);
    localStorage.setItem("DOB", dob);
    localStorage.setItem("email", email);
    localStorage.setItem("password", psswd);
    localStorage.setItem("gender", gender);
    localStorage.setItem('signedIn', true)
    return true;
  } else {
    alert("Passwords don't match");
    // resets all values in the form
    document.querySelector("form").reset()
    localStorage.setItem('signedIn', false)
    return false;
  }

}

// display user's name on home page
function displayName() {
  let name = localStorage.getItem("name");
  if (name != null) {
    document.getElementById("intro").innerHTML += ", " + name;
  }
}

function isSignedIn() {
  let isSignedIn = localStorage.getItem('signedIn')
  if(isSignedIn == 'true'){
    document.getElementById('signin').innerHTML = `<h2>YOU ARE SIGNED IN ALREADY<h2>
    <br><button onClick='signOut()'>SIGN OUT</button>
    `
  }
  else{
    
  }
}

function signOut(){
  alert('Signing out...')
  localStorage.setItem('signedIn', false)
  localStorage.clear()
  location.reload()
}