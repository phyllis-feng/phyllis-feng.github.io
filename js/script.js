$(document).ready(function () {
    $('#tldr h2').on('mouseover', function () {
        $('#tldrphoto').show();
}).on('mouseleave', function () {
        $('#tldrphoto').hide();
});

    $('#pamelas h2').on('mouseover', function () {
        $('#pamelasphoto').show();
}).on('mouseleave', function () {
        $('#pamelasphoto').hide();
});

    $('#falooda h2').on('mouseover', function () {
        $('#faloodaphoto').show();
}).on('mouseleave', function () {
        $('#faloodaphoto').hide();
});

    $('#housebayou h2').on('mouseover', function () {
        $('#housebayouphoto').show();
}).on('mouseleave', function () {
        $('#housebayouphoto').hide();
});

    $('h2.background').on('click', function () {
        $('p.background').show();
        $('p.current').hide();
        $('p.favorites').hide()
})
    $('h2.current').on('click', function () {
        $('p.background').hide();
        $('p.current').show();
        $('p.favorites').hide()
})
    $('h2.favorites').on('click', function () {
        $('p.background').hide();
        $('p.current').hide();
        $('p.favorites').show()
})

});;

$(document).ready(function(){
$(window).scroll(function(){
if ($(window).scrollTop() > 170){
    $('#NavBar').addClass( "sticky");  
}

else {

    $('#NavBar').removeClass( "sticky");
    }
});
});

/* from https://jsfiddle.net/tcloninger/e5qaD/ */

$(document).ready(function() {
    $(window).scroll( function(){
        $('#Work h1, #tldr, #housebayou, #pamelas, #falooda, #aboutHeadings,\
        #selfie, #brunch, #incline, #mural, #cupcake, #apples, #reflection, #cat,\
        #bio, #siteInfo, #footer').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);   
            }
            
        }); 
    
    });
    
});