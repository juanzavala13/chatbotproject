function askQuestion() {
  var input = document.getElementById("input").value;
  var giveresponse = responses[input]
  document.getElementById("chat-area").innerHTML += input + ": " + giveresponse + " ";
}

var responses = {
"how are you?" :"Aah my friend i am doing very well, thank you comrade.<br> <br/>",

"what is your name?" : "My name is Yuri Kalashnikova, ok my friend.<br> <br/>",

"how old are you?" : "My age doesn't matter ok my friend.<br> <br/>",

"where do you live?": "My friend I live in Moscow you should visit very beautiful place ok my friend.<br> <br/>",

"hello": "Hello Comrade.<br> <br/>"
}
