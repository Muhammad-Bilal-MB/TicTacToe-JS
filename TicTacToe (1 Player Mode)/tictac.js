

flag = 1;                      // I am using this for turn, 1 set for user's turn and 0 for computer's turn


//This function I am using is for turn changing to cross manually
function clickcross() {               
    flag = 1;
    document.getElementById('print').innerHTML = "Again Player X Turn";   

}

//This function I am using is for turn changing to circle manually
function clickcircle() {
    flag = 0; 
    document.getElementById('print').innerHTML = "Again Player O Turn";  
    computer(); 
}


//This function checks for all possible win or tie conditions by getting the value present in input tag
function fun() {

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
  
        window.alert('Player X won');
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        window.alert('Player X won');
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player X won');
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player X won');
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
  
    else if ((b1 == 'O' || b1 == 'O') && (b2 == 'O' || 
        b2 == 'O') && (b3 == 'O' || b3 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b1 == 'O' || b1 == 'O') && (b4 == 'O' || 
        b4 == 'O') && (b7 == 'O' || b7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b7 == 'O' || b7 == 'O') && (b8 == 'O' || 
        b8 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b3 == 'O' || b3 == 'O') && (b6 == 'O' || 
        b6 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b1 == 'O' || b1 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b3 == 'O' || b3 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b7 == 'O' || b7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b2 == 'O' || b2 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b8 == 'O' || b8 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b4 == 'O' || b4 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b6 == 'O' || b6 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
  
    
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||  b5 == 'O') 
            && (b6 == 'X' || b6 == 'O') && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) 
            {
            document.getElementById('print').innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player 0 Turn";
        }
    }
}
  

//Function being called on reset button to clear all the content and reload the game for replaying
function reset() {
    location.reload();
    document.getElementById('print').innerHTML = '';
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
  
}


cells = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"];

//Function for finding all the empty cells or places to put a mark on
function count() {
    
    var array = [];

    for (var i = 0 ; i < 9 ; i++){

        if (document.getElementById(cells[i]).value == ''){
            array.push(cells[i]);
        }
    }
    return array;
}

//Computer turn, it will put a mark randomly in any of the empty cell
function computer() {
    if (flag == 0){

        setTimeout(function() {
            var arr = count();
            randomNumber = arr[Math.floor(Math.random() * arr.length)];
            document.getElementById(randomNumber).value = "O";
            document.getElementById(randomNumber).disabled = true;
            flag = 1;
            document.getElementById('print').innerHTML = "Player X Turn";
        }, 1000);
        
    }
}
 
//Below are functions for user move with respect to each cell
function b1() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
        computer();
    }
}
  
function b2() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
        computer();
    }
}
  
function b3() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
        computer();
    }
}
 
function b4() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
        computer();
    }
}
  
function b5() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
        computer();
    }
}
  
function b6() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
        computer();
    }
}
  
function b7() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
        computer();
    }
}
  
function b8() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
        computer();
    }
}
  
function b9() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
        computer();
    }
}
