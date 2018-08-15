function signInCheck(username_entered, password_entered){
  //dict["key"] --> key[list] (in list, 0 = pwd and 1 = email)

  //sign in test w/ info:
  var usersArr = [];
  var userObj = {};
  userObj.username = username;
  userObj.password = pwd;
  userObj.emailAddress = email;
  usersArr.push(userObj);

  //checks if the password and username entered math with a user in the array
  if (username_entered in usersArr[0]) {
    if (password_entered in usersArr[0])
      alert(correct)
    // need to send user to home screen
  }
  // else {
  //   alert(Your username/password was not correct.);
  // };
};
