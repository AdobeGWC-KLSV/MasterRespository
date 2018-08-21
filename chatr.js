// var chat = [];
var post1Filled = false;
//hiding the post boxes
var post1 = document.getElementById("postBox1");
// post1.style.visibility = "hidden";
post1.hide();
var post2 = document.getElementById("postBox2");
// post2.style.display = "none";
function post() {
    var postTextEntered = document.getElementById("myText2").value;
    if(post1Filled == false) {
      document.getElementById("textSpace1").innerHTML = postTextEntered;
      post1Filled = true;

      console.log("in if statement")
    }
    else {//need to add more else ifs and variables for more posts
      document.getElementById("textSpace2").innerHTML = postTextEntered;
    }


}

// var chat2 = [];
var count = 1;
function comment() {
    var x = document.getElementById("myText").value;
    // chat2.push(x);
    var p = document.createElement("p");
    p.className = 'chatMessage';
    p.innerHTML = count + ". " + x;
    document.getElementById("second").appendChild(p);
    count = count + 1; // count++; or ++count; or count += 1;
}

function moveIcon() {
  var icon1 = document.getElementById("thumbsup");
  document.getElementById("icon").innerHTML = icon1;

}

function thumbsup() {
  document.getElementById("downicon").style.display = "none";
  document.getElementById("thumbicon").style.display = "block";
}

function thumbsdown() {
  document.getElementById("thumbicon").style.display ="none";
  document.getElementById("downicon").style.display = "block";
}
