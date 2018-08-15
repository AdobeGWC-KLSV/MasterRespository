var usersArr = []; //NEED to load users to a file and read it back in each time page loaded

function createAccount(username, pwd, email) { //submit the variables and change the screen to the home screen
  var userObj = {}; //defines a new user object and adds info to user array; users numbered by their index in the list based on when they were added
  userObj.username = username;
  userObj.password = pwd;
  userObj.emailAddress = email;
  usersArr.push(userObj);
//as a check: alert prints the username value stored in the user object in the first index of the array
//how do I reference the username property's value in the first object (in the array)?
  alert(usersArr[0].username);
};
