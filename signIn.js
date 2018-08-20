var signedIn
function signInCheck() {
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

  //checks if the password and username entered match with each user in the database
  for (i in usersArr) {
    if (username_entered == usersArr[i].username && password_entered == usersArr[i].password) {
      signedIn = true;
      alert("correct");
      window.location.assign("https://gwc-chatr.github.io./index.html");
      //not sending user home for some reason, it works when placed outside of this function
      break
    }
  }
  //if the username and password don't match in a user object
  if (signedIn == false) {
    alert("Your username/password is incorrect.");
  }


}

//failed taffy database
// usersDatabase().each(function checkRecords(record,recordnumber) {
//   if (username_entered == record["username"] && password_entered == record["password"]) {
//     signedIn = true;
//     window.location.replace("file:///C:/Users/Girls%20Who%20Code/Desktop/GWC-Chatr.github.io/home.html");
//   }
// )};
