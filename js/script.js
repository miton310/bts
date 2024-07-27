//スムーズスクロール
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
  
  
  //ページトップ
  $(function() {
      var topBtn = $('#pagetop');    
      topBtn.hide();
      //スクロールが400に達したらボタン表示
      $(window).scroll(function () {
          if ($(this).scrollTop() > 400) {
          //ボタンの表示方法
              topBtn.fadeIn();
          } else {
          //ボタンの非表示方法
              topBtn.fadeOut();
          }
      });
      //スクロールしてトップ
      topBtn.click(function () {
          $('body,  html').animate({
              scrollTop: 0
          },   500);
          return false;
      });
  });
  
  
  //スクロールしてふわっと表示
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
  
  
  //ロード画面
  window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    //ロード後付加クラス
    $(".fade-1,.fade-2,.fade-3,.fade-4").addClass("load");
  }
  

  $(function(){
      $('.acctitle').click(function(){
          $(this).toggleClass('active');
          $(this).next('.accshow').slideToggle(300);
      });
  });