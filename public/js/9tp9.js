$(function(){
    $('.main-div .social .twitter .send-tweet').click(function(){
        let tweet = $(this).parent().find('textarea[name="tweet-body"]').val();
        tweet = '@9TeamPontis9 ' + encodeURIComponent(tweet);
        let url = `https://twitter.com/intent/tweet?text=${tweet}`;
        window.open(url, '_blank');
    });
});