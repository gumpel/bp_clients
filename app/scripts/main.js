setInterval(function() {
    //$('div.bp_client_list ul').prepend($('div.bp_client_list ul li:last-child'))
}, 1500)



var bpLeft = $('#bp_client_control_left:not(.stop)'),
    bpRight = $('#bp_client_control_right:not(.stop)'),
    bpClientObj = new Object(),
    bpHelpObj = new Object(),
    bpClientNumber = $('#bp_client_list > ul > li').length,
    bpClient = $('#bp_client_list > ul > li'),
    index = 5;


$('#bp_client_list > ul > li').each(function() {
    $(this).attr('data-index', $(this).index())
    console.log($(this).find('.bp_client_title').text());
    bpHelpObj.title = $(this).find('.bp_client_title').text();
    bpHelpObj.link = $(this).find('.bp_client_link').text();
    bpHelpObj.href = $(this).find('.bp_client_link').attr('href')
    bpHelpObj.coment = $(this).find('.bp_client_coment').text();
    bpHelpObj.logoSrc = $(this).find('.bp_main_logo_con img').attr('src');
    bpClientObj[$(this).index()] = bpHelpObj
    bpHelpObj = new Object();
})


$(bpRight).on('click', function(e) {
    if (!$(this).is('.stop')) {
        $('div.bp_client_list ul').prepend($('div.bp_client_list ul li:last-child'));
        $(this).addClass('stop');
        index = (index + bpClientNumber + 1)  % bpClientNumber ;
        printClient(index);
        setTimeout(function() {
            $(bpRight).removeClass('stop');
        }, 600);
    }
});

$(bpLeft).on('click', function(e) {
    if (!$(this).is('.stop')) {
        $('div.bp_client_list ul').append($('div.bp_client_list ul li:first-child'));
        $(this).addClass('stop');
        index = (index + bpClientNumber - 1 ) % bpClientNumber ;
        printClient(index);
        setTimeout(function() {
            $(bpLeft).removeClass('stop');
        }, 600);
    }
});

function printClient(index){
	$('#bp_client_nr').html(index+1);
	$('#bp_client_of').html('/0'+bpClientNumber);
	$('#bp_client_title').html(bpClientObj[index].title);
	$('#bp_client_link').html(bpClientObj[index].link);
	$('#bp_client_link').attr('href',bpClientObj[index].link);
	$('#bp_client_coment').html(bpClientObj[index].coment);
	$('#bp_main_logo_con img').attr('src',bpClientObj[index].logoSrc);
}


