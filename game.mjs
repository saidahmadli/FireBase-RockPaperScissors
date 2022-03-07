import { db, set, ref, onValue, push, remove } from './module.js';
const branch = ref(db, '/players')
var userName;
var choice;
var choiceOne;
var choiceTwo;
$("#click").on("click", function (e) {
    e.preventDefault();
    userName = $("#userName").val();
    arr.push({
        name: userName,
        choice: null,
    });
    set(branch, arr);
    console.log(arr.length);
    // $('.userForm').empty();
    $('.userForm').find('*:not("#reclick")').remove();
    var h2 = $('<h2>');
    if (arr.length === 1) {
        h2.html('Hi ' + userName + ' ! You are player 1');        
    }
    else {
        h2.html('Hi ' + userName + ' ! You are player 2');
    }
    h2.attr('class', 'text-center');
    $('.userForm').prepend(h2);
    $('#reclick').css('display','block');
})

$("#reclick").on("click", function (e) {
    e.preventDefault();
    console.log("hello");
    const rootRef = ref(db, "players");
    console.log(rootRef);
    remove(rootRef);
    location.reload();  
})


var arr = [];

onValue(branch, function (snapshot) {
    var obj = snapshot.val();
    // console.log(obj);
    arr = obj || [];
    if (arr.length > 2) {
        arr = [];
    }
    if (arr[0] && arr[0].name === userName) {
        $('#userName1').empty();
        $('#userName1').append(arr[0].name);
        $('#choice1').show();
        // $('#choice2').hide();
        if (arr[1]) {
            $('#userName2').empty();
            $('#userName2').append(arr[1].name);
            $('#choice2').show();
            // $('#choice1').show();
        }
    } else if (arr[0] && arr[0].name !== userName) {
        $('#userName1').empty();
        $('#userName1').append(arr[0].name);
        $('#userName2').empty();
        $('#userName2').append(arr[1].name);
        $('#choice1').show();
        $('#choice2').show();
    }
});

var onWork = false;
$('#choice1 li').on('click', function(){
    if(onWork !== true){
        choice = $(this).html();
        console.log(choice);
    
        set(ref(db, '/players/0/'), {choice, name:arr[0].name});
        onWork = true;
    }
});
$('#choice2 li').on('click', function(){
    if(onWork !== true){
        choice = $(this).html();
        console.log(choice);
        set(ref(db, '/players/1/'), {choice, name:arr[1].name});
        }
        onWork = true;
});
onValue(branch, function(snapshot){
    var obj = snapshot.val();
    // console.log(obj);
    arr = obj || [];
    if (arr.length > 2) {
        arr = [];
    }
     choiceOne = arr[0].choice;
     choiceTwo = arr[1].choice;
    if (arr[0].choice && arr[0].choice === choice) {
        var oneh3 = $('<h3>');
        oneh3.html(arr[0].choice);
        $('#choice1').empty();
        $('#choice1').append(oneh3);
    }
    if (arr[1].choice && arr[1].choice === choice) {
        var twoh3 = $('<h3>');
            twoh3.html(arr[1].choice);
            $('#choice2').empty();
            $('#choice2').append(twoh3);
    }
    startGame(choiceOne,choiceTwo);      
})
$('#send').on('click', function(e){
    e.preventDefault();
    const message = $('#message').val();
    var messagePush = ref(db, '/messages');
    set(messagePush, {message:message});
});
onValue(ref(db, '/messages'), function(snap) {
    const messages = snap.val();
    const chat = $('#chat');
    const messageNode = $('<div>');
    messageNode.html(messages.message);
    var hr = $('<hr>')
    chat.append(messageNode);
    chat.append(hr);
    $('#message').html()="";
});
var startGame = function(choiceOne,choiceTwo){
    var playerOneWon = function() {
        $("#result").html("<h2>" + arr[0].name + "</h2><h2>Wins!</h2>");
    };
    var playerTwoWon = function() {
        $("#result").html("<h2>" + arr[1].name + "</h2><h2>Wins!</h2>");
    };
    var tie = function() {
        $("#result").html("<h2>Tie Game!</h2>");
    };
    if(choiceOne === 'Rock' && choiceTwo === 'Rock'){
        tie();
    }else if(choiceOne === 'Paper' && choiceTwo === 'Paper'){
        tie();
    }else if(choiceOne === 'Scissors' && choiceTwo === 'Scissors'){
        tie();
    }else if(choiceOne === 'Rock' && choiceTwo === 'Scissors'){
        playerOneWon();
    }else if(choiceOne === 'Paper' && choiceTwo === 'Rock'){
        playerOneWon();
    }else if(choiceOne === 'Scissors' && choiceTwo === 'Paper'){
        playerOneWon();
    }else if(choiceOne === 'Rock' && choiceTwo === 'Paper'){
        playerTwoWon();
    }else if(choiceOne === 'Scissors' && choiceTwo === 'Rock'){
        playerTwoWon();
    }else if(choiceOne === 'Paper' && choiceTwo === 'Scissors'){
        playerTwoWon();
    }
}