'use strict';

$(function () {

    $('.xss').on('click', function () {
        $.ajax({
            url: '/q/',
            type: 'post',
            data: {
                q: $('.search-text').val()
            }
        }).done(function (res) {
            console.log(res);
            $('#result').html('你搜索的是' + res);
        });
    });
});