var userDict = {};
function createAccount(username, pwd, email) { //submit the variables and change the screen to the home screen
  userInfoList = [];
// push = append
  userInfoList.push(pwd, email);
  userDict["username"] = userInfoList
  console.log(username);
};
