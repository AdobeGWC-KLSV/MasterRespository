var usersArr = []; //NEED to load users to a file and read it back in each time page loaded

 //defines a new user object and adds info to user array; users numbered by their index in the list based on when they were added
function createAccount() {
  var userObj = {};
  userObj.username = document.getElementById('newUsernameBox').value; //adding the inputted value based on the element ID
  userObj.password = document.getElementById('newPwdBox').value;
  userObj.emailAddress = document.getElementById('newEmailBox').value;
  usersArr.push(userObj);
  alert("We are still working on attaching a json file to the user database. Here is your info: username: " + usersArr[0].password + ", password: " + usersArr[0].password + " & email: " + usersArr[0].emailAddress);
};
