var chat = [];
function myFunction() {
    var x = document.getElementById("myText2").value;
    chat.push(x);
    document.getElementById("demo").innerHTML = chat;
}

// var chat2 = [];
var count = 1;
function myFunction2() {
    var x = document.getElementById("myText").value;
    // chat2.push(x);
    var p = document.createElement("p");
    p.className = 'chatMessage';
    p.innerHTML = count + ". " + x;
    document.getElementById("second").appendChild(p);
    count = count + 1; // count++; or ++count; or count += 1;
}
