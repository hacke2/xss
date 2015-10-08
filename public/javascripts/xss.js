$(function() {

    // search
    $('.xss').on('click', function() {
        $.ajax({
            url : '/q/',
            type : 'post',
            data : {
                q : $('.search-text').val()
            }
        }).done(function(res) {
            console.log(res);
            $('#result').html('你搜索的是' + res);
        })
    });

    //comment
    $('.submit-comment').on('click', function() {
        $.ajax({
            url : '/comment/',
            type : 'post',
            data : {
                comment : $('.comment-text').val()
            }
        }).done(function(res) {
            $('.comment-text').val('');
            $('.comment-list').append('<p>' + res + '<p>');
        })
    })
});
