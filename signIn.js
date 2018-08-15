var signedIn
function signInCheck(){
  signedIn = false;

  //sign in test w/ info:
  var usersArr = [];
  var userObj = {};
  userObj.username = "a";
  userObj.password = "b";
  userObj.emailAddress = "c@c.com";
  usersArr.push(userObj);

  //set the inputs to variables
  var username_entered = document.getElementById('usernameSignInBox').value;
  var password_entered = document.getElementById('passwordSignInBox').value;

  //checks if the password and username entered match with each user in the array
  for (i in usersArr) {
    if (username_entered == usersArr[i].username && password_entered == usersArr[i].password) {
      signedIn = true;
      alert("correct (Pretend we sent you to the home page)")
      // need to send user to home screen
    }
  }
  //if the username and password don't match in a user object
  if (signedIn == false) {
    alert("Your username/password is incorrect.")
  }

}
