//繧ｹ繝�繝ｼ繧ｺ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 300;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


//繝壹�繧ｸ繝医ャ繝�
$(function() {
    var topBtn = $('#pagetop');    
    topBtn.hide();
    //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺�400縺ｫ驕斐＠縺溘ｉ繝懊ち繝ｳ陦ｨ遉ｺ
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
        //繝懊ち繝ｳ縺ｮ陦ｨ遉ｺ譁ｹ豕�
            topBtn.fadeIn();
        } else {
        //繝懊ち繝ｳ縺ｮ髱櫁｡ｨ遉ｺ譁ｹ豕�
            topBtn.fadeOut();
        }
    });
    //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励※繝医ャ繝�
    topBtn.click(function () {
        $('body,  html').animate({
            scrollTop: 0
        },   500);
        return false;
    });
});


//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励※縺ｵ繧上▲縺ｨ陦ｨ遉ｺ
$(function(){
    $(window).scroll(function (){
        $('.fadein,.fadeinleft,.fadeinright,.fadeinbottom,.fadeinbig').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
});


//繝ｭ繝ｼ繝臥判髱｢
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
  //繝ｭ繝ｼ繝牙ｾ御ｻ伜刈繧ｯ繝ｩ繧ｹ
  $(".fade-1,.fade-2,.fade-3,.fade-4").addClass("load");
}

//郢ｧ�｢郢ｧ�ｳ郢晢ｽｼ郢晢ｿｽ縺�ｹｧ�ｪ郢晢ｽｳ
$(function(){
    $('.acctitle').click(function(){
        $(this).toggleClass('active');
        $(this).next('.accshow').slideToggle(300);
    });
});