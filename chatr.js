var chat = [];
function myFunction() {
    var x = document.getElementById("myText2").value;
    chat.push(x);
    document.getElementById("demo").innerHTML = chat;
}

function myFunction2() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo2").innerHTML = x;
}



$.fn.usernames = function() {
  $(this).each(function() {
    $(this).html($(this).text().split("").map(function(v, i) {
      return '<span class="usernames-' + (i % 2 == 0 ? 'gold' : 'blue') + '">' + v + '</span>';
    }).join(""));
  });
};

$(function() { // don't forget $(document).ready!
  $('h1.usernames').usernames();
});
