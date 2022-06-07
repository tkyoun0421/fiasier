$(function(){
    // 변수 선언
    const modalBar = $('.header-wrap .modal-bar');
    const modalBoxWrap = $('.modal-box-wrap');
    const modalBoxClose = $('.modal-box-wrap a');
    const mainSlideArticle = $('.main-wrap article');
    const mainSlideWrap = $('.main-wrap .slide-wrap');
    const indexNumberNow = $('.index-number .now');
    const slideInfoBar = $('.slide-info-bar');
    const slideInfoH3 = $('.slide-info-bar h3');
    const mainSlideH3 = $('.main-wrap .texts h3');
    const mainSlideText = $('.main-wrap .texts');
    const bannerArticle = $('.banner-1 article');
    const bannerVideo = $('.banner-1 video');
    const bannerImage = $('.banner-1 .image');
    let mainSlideDataNum = 0;
    let mainSlideIndex = 0;
    let bannerIndex = 0;




    // 1

    function modalOn (){
        modalBoxWrap.css({
            right: '0px'
        });
    }

    function modalClose (){
        modalBoxWrap.css({
            right: '-800px'
        });
    }

    function mainSwipeLeft (){
        mainSlideIndex++;
        mainSlideDataNum = mainSlideArticle.eq(mainSlideIndex).attr('data-num');
        if (mainSlideIndex >= 7) {
            mainSlideDataNum = 0;
        };  
        if (mainSlideIndex >= 7) {
            mainSlideIndex = 0;
        }      
        mainSlideArticle.css({
            'z-index' : 95,
            'opacity' : 0
        });
        mainSlideArticle.eq(mainSlideDataNum).css({
            'z-index' : 96,
            'opacity' : 1
        });
        indexNumberNow.text(parseInt(mainSlideDataNum) + parseInt(1));
        console.log(mainSlideDataNum);
        slideInfoBar.css({
            width: ((parseInt(mainSlideDataNum) * 5 + 30 + '%'))
        });
        slideInfoH3.text(mainSlideH3.eq(mainSlideIndex).text());
        slideInfoH3.css({
            color: '#fff'
        });
        mainSlideText.css({
            display: 'none'
        });
        mainSlideText.fadeIn(1400);
    }

    function mainSwipeRight (){
        mainSlideIndex--;
        mainSlideDataNum = mainSlideArticle.eq(mainSlideIndex).attr('data-num');
        if (mainSlideIndex <= -1) {
            mainSlideDataNum = 6;
        };  
        if (mainSlideIndex <= -1) {
            mainSlideIndex = 6;
        }      
        mainSlideArticle.css({
            'z-index' : 95,
            'opacity' : 0
        });
        mainSlideArticle.eq(mainSlideDataNum).css({
            'z-index' : 96,
            'opacity' : 1
        });
        indexNumberNow.text(parseInt(mainSlideDataNum) + parseInt(1));
        slideInfoBar.css({
            width: ((parseInt(mainSlideDataNum) * 5 + 30 + '%'))
        });
        slideInfoH3.text(mainSlideH3.eq(mainSlideIndex).text());
        slideInfoH3.css({
            color: '#fff'
        });
        mainSlideText.css({
            display: 'none'
        });
        mainSlideText.fadeIn(1400);
    }

    function bannerMouseEnter (){
        
    }

    // 2

    modalBar.click(modalOn);
    modalBoxClose.click(modalClose);
    mainSlideWrap.swipeleft(mainSwipeLeft);
    mainSlideWrap.swiperight(mainSwipeRight);
    bannerArticle.mouseenter(function(){
        bannerIndex = $(this).index();
        bannerArticle.css({
            width: '14%'
        });
        bannerArticle.eq(bannerIndex).css({
            width: '70%'
        });
        bannerVideo.eq(bannerIndex).css({
            opacity: 1,
            display: 'block',
        });
        bannerImage.eq(bannerIndex).css({
            opacity: 0.7
        });
    });
    bannerArticle.mouseleave(function(){
        bannerIndex = $(this).index();
        bannerArticle.css({
            width: 'calc(100% / 3 - 10px)'
        });
        bannerVideo.css({
            opacity: 0,
        });
        bannerImage.css({
            opacity: 1
        })
    });
});