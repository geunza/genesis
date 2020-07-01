$(document).ready(function(){
    clickEventInit();
    scrollEventInit();
    mouseEventInit();
    sectionActive(section01);
    sectionActive(section02);
    sectionActive(section03);
    sectionActive(section04);
    bxslider();
    youtubePlayer();
});

function clickEventInit(){
    smooth01();
    smooth02();
    lightbox();
}

var distance01, distance02, distance03, distance04, distance05, whereNow;
function scrollEventInit(){
    $(window).scroll(function(){
        distance01 = $("section.concept").offset().top,
        distance02 = $("section.design").offset().top,
        distance03 = $("section.exterior").offset().top,
        distance04 = $("section.interior").offset().top,
        distance05 = $("section.films").offset().top,
        whereNow = $(window).scrollTop();
        headerUp();
        headerListActive(); 
        conceptActive()
    });
}
function smooth01(){
    var $menu = $("nav ul li");
        
        $("header h1").click(function(){
            $("html").stop().animate({scrollTop:0})
        });

        $menu.click(function(e){
            e.preventDefault();
            var idx = $(this).index();
            console.log(idx);
            if(idx==0){
                var targetDistance = $("section.design").offset().top;
                $("html").stop().animate({scrollTop:targetDistance})
            }else if(idx==1){
                var targetDistance = $("section.exterior").offset().top;
                $("html").stop().animate({scrollTop:targetDistance})
            }else if(idx==2){
                var targetDistance = $("section.films").offset().top;
                $("html").stop().animate({scrollTop:targetDistance})
            }else if(idx==3){
                var targetDistance = $("section.interior").offset().top;
                $("html,body").stop().animate({scrollTop:targetDistance})
            }
        });
}
function smooth02(){
    var $menu = $("section.concept ul li"),
        $contents = $("section");

        $menu.click(function(e){
            e.preventDefault();

            var idx = $(this).index();
            console.log(idx);

            var target = $contents.eq(idx+2);
            console.log(target);

            var targetDistance = target.offset().top;
            console.log(targetDistance);

            $("html,body").stop().animate({scrollTop:targetDistance});
        });
}
function headerUp(){
    $(document).scroll(function(){
        if($(window).scrollTop() != 0){
            $('header').addClass('headerUp');
        }else{
            $('header').removeClass('headerUp');
            $("header nav ul li").removeClass('active');
        }
    });
}
function headerListActive(){
    var $menu = $("header nav ul li");
            if(distance05 <= whereNow){
                $menu.removeClass("active");
                $menu.eq(2).addClass("active");
            }else if(distance04 <= whereNow && whereNow < distance05){
                $menu.removeClass("active");
                $menu.eq(3).addClass("active");
            }else if(distance03 <= whereNow && whereNow < distance04){
                $menu.removeClass("active");
                $menu.eq(1).addClass("active");
            }else if(distance02 <= whereNow && whereNow < distance03){
                $menu.removeClass("active");
                $menu.eq(0).addClass("active");
            }else if(distance01 <= whereNow && whereNow < distance02){
            }
}
function conceptActive(){

    if(whereNow > ($("section.banner").height()/2)){
        $("section.concept ul").addClass("active");
    }
    $("section.design").mouseleave(function(){
        $("section.exterior").removeClass("active");
    })
}
var section01=null,section02=null,section03=null,section04=null;
function mouseEventInit(){
    section01=$("section.design div.draft");
    section02=$("section.design div.detail");
    section03=$("section.exterior");
    section04=$("section.interior");
}
function sectionActive(targetSect){
    if($(window).width()<1023){
        section01.addClass("active");
        section02.addClass("active");
    }   
    targetSect.mouseenter(function(){
        $(this).addClass("active");
    })
    // targetSect.mouseleave(function(){
    //     $(this).removeClass("active");
    // })
}

var $button01,$button02,$target,$targetImg;
function lightbox(){
    $button01 = $("section.exterior").find("span"),
    $button02 = $("section.interior").find("span"),
    $target = $("#lightbox-overlay"),
    $targetImg = $target.find('img');
    lightBox01();
    lightBox02();
    lightBox03();
}
function lightBox01(){
       $button01.click(function(){
           var newImg = $(this).find("img").attr("data-lightbox");

               $target.addClass("active");
               $targetImg.attr("src",newImg);
       })
}
function lightBox02(){
       $button02.click(function(){
           var newImg = $(this).find("img").attr("data-lightbox");

               $target.addClass("active");
               $targetImg.attr("src",newImg);
       })
}
function lightBox03(){
    $target.click(function(){
        $(this).removeClass("active");
    })
}
function bxslider(){
    $('.slider').bxSlider({
        mode: 'horizontal',
        speed:500,
        easing:'ease-in-out',
        startSlide:0,
        infiniteLoop:true,
        reponsive:true,
        controls:true,
        auto : true,
        pause : 4000,
        touchEnabled:false,
        autoHover : true
    });
};

function youtubePlayer(){
    var $filmsTarget = $("section.films div span"),
    $changeTarget = $("section.films iframe")
    $filmsTarget.click(function(e){
        e.preventDefault();
        var $newFilms = $(this).attr("data-youtube");
        $changeTarget.attr("src",$newFilms);
    })
}



// function youtubePlayer(){
//     var $filmsTarget = $("section.films div span"),$changeTarget = $("section.films iframe");
//     $filmsTarget
//     $filmsTarget.eq(0).click(function(e){
//         e.preventDefault();
//             $changeTarget.attr("src","https://www.youtube.com/embed/gZn1ax33gCg");
//     })
//     $filmsTarget.eq(1).click(function(e){
//         e.preventDefault();    
//         $changeTarget.attr("src","https://www.youtube.com/embed/iySPJXviQD4");
//     })
//     $filmsTarget.eq(2).click(function(e){
//         e.preventDefault();    
//         $changeTarget.attr("src","https://www.youtube.com/embed/5YO2mcWUKG4");
//     })
// }