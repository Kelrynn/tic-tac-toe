console.log("JS Loaded!");
$(function() {

    let currentPlayer = 0;
    let hasMarked = false;
    let p1 = prompt("Enter name for Player 1");
    let p2 = prompt("Enter name for Player 2");
    $('#p1').html(p1);
    $('#p2').html(p2);
    resetBoard();

    function resetBoard() {
        $('td').removeClass('x o');
        hasMarked = false;
        $('#nextTurn').css('opacity', '.3');
        if (currentPlayer) {
        	currentPlayer = 0;
        	$('.player').toggleClass('active');
        }
    }

    $('#reset').click(resetBoard);

    $('table').on('click', 'td', mark);
    $('#nextTurn').click(nextTurn);


    function mark() {
        console.log($(this));
        let mark = ["x", "o"];
        if (!hasMarked) {
            if (!($(this).hasClass('x') || $(this).hasClass('o'))) {
                $(this).addClass(mark[currentPlayer]);
                hasMarked = true;
                $('#nextTurn').css('opacity', '1');
            }
        }

    }

    function nextTurn() {
        if (hasMarked) {
            $('.player').toggleClass('active');
            currentPlayer = (currentPlayer + 1) % 2;
            hasMarked = false;
            $('#nextTurn').css('opacity', '.3');
        }
    }


































});