const password = prompt("Please enter a new password");

// Password must be 6+ characters
if (password.length >=6){
    console.log("Long enough password!");
} else {
    console.log("Your password is too short! Must be 6+ characters!");
}

// Password cannot include space

//"hello".indexOf (' ') --> -1

if (password.indexOf(' ') === -1) {
    console.log("Good job! No space!");
} else {
    console.log("Password cannot contain spaces!");
}