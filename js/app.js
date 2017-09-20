console.log("JS Loaded!");
$(function() {

resetBoard();
let currentPlayer = 0;
let hasMarked = false;
let p1 = prompt("Enter name for Player 1");
let p2 = prompt("Enter name for Player 2");
$('#p1').html(p1);
$('#p2').html(p2);

function resetBoard() {
    $('td').removeClass('x o');
}

$('#reset').click(resetBoard);

$('table').on('click', 'td', mark);

function mark() {
    console.log($(this));
    let mark = ["x", "o"];
    if (!hasMarked) {
        if (!($(this).hasClass('x') || $(this).hasClass('o'))) {
            $(this).addClass(mark[currentPlayer]);
        }
        hasMarked = true;
    }
}

function nextTurn(){
	$('player').toggleClass('active');
	currentPlayer = (currentPlayer + 1) % 2;
	hasMarked = false;
}






























});