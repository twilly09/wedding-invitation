/* main.js */
    $(function(){
    $( ".galleryList a" ).click(function() {
        var imgSrc = $(this).find("img").attr("src");

        //메인 이미지에 imgSrc 주소값 쓰기
        $("#gallery figure img").attr('src', imgSrc);

    
        return false; //기본 이벤트 해제
    });

});
    