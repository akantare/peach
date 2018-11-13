$(function(){
var menu = $('#slide_menu'), // スライドインするメニューを指定
    menuBtn = $('#button'), // メニューボタンを指定
    body = $(document.body),
    menuWidth = menu.outerWidth();

    // メニューボタンをクリックした時の動き
    menuBtn.on('click', function(){
    // body に open クラスを付与する
    body.toggleClass('open');
        if(body.hasClass('open')){
            // open クラスが body についていたらメニューをスライドインする
            body.animate({'right' : menuWidth }, 300);
            menu.animate({'right' : 0 }, 300);
        } else {
            // open クラスが body についていなかったらスライドアウトする
            menu.animate({'right' : -menuWidth }, 300);
            body.animate({'right' : 0 }, 300);
        }
    });
});

$(function(){
var menu = $('#slide_menu'), // スライドインするメニューを指定
    menuBtn = $('#button2'), // メニューボタンを指定
    body = $(document.body),
    menuWidth = menu.outerWidth();

    // メニューボタンをクリックした時の動き
    menuBtn.on('click', function(){
    // body に open クラスを付与する
    body.toggleClass('open');
        if(body.hasClass('open')){
            // open クラスが body についていたらメニューをスライドインする
            body.animate({'right' : menuWidth }, 300);
            menu.animate({'right' : 0 }, 300);
        } else {
            // open クラスが body についていなかったらスライドアウトする
            menu.animate({'right' : -menuWidth }, 300);
            body.animate({'right' : 0 }, 300);
        }
    });

});

//ページ内リンク時にスライドメニューを収納する
$(function() {
    $('#link1').click(function(){ // headerにclass名「open_nav」を追加及び削除
        $('header').toggleClass('open_nav');
    });

    $('#link1 a').on('click', function(){
        if (window.innerWidth <= 768) {
            $('#button').click();
        }
    });
});

//ページ内リンク時にスライドメニューを収納する
$(function() {
    $('#link2').click(function(){ // headerにclass名「open_nav」を追加及び削除
        $('header').toggleClass('open_nav');
    });

    $('#link2 a').on('click', function(){
        if (window.innerWidth <= 768) {
            $('#button').click();
        }
    });
});

// ページ上部へ戻るボタン
$(document).ready(function() {
  var pagetop = $('.pagetop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
    pagetop.fadeIn();
   } else {
    pagetop.fadeOut();
      }
   });
      pagetop.click(function () {
   $('body, html').animate({ scrollTop: 0 }, 500);
  return false;
   });
});

$(function(){
  // 一旦コンテンツを隠す
  $(`.ivents-contents`).hide();
  // タイトルをクリックした際の挙動
  $(`.year`).click(function(){
    // this(タイトルをクリックした要素）の次の要素を表示する
    $(this).next().slideToggle(500);
  });
});

$(function(){
  // 一旦コンテンツを隠す
  $(`.oil`).hide();
  // タイトルをクリックした際の挙動
  $(`.title`).click(function(){
    // this(タイトルをクリックした要素）の次の要素を表示する
    $(this).next().slideToggle(500);
  });
});

//一つだけあけるアコーディオン
(function($) {
// 読み込んだら開始
$(function() {

// アコーディオン
$(".accordion").each(function() {
var accordion = $(this);
$(this).find(".switch").click(function() {
//$("> .switch", this).click(function() { // 上段の別の書き方
var targetContentWrap = $(this).next(".contentWrap");
if ( targetContentWrap.css("display") === "none" ) {
accordion.find(".contentWrap").slideUp();
accordion.find(".switch.open").removeClass("open");
}
targetContentWrap.slideToggle();
$(this).toggleClass("open");
});
});

});
})(jQuery);

$(function() {
    $(".switch").click(function () {
        var i = $(".switch").index(this)
        var p = $(".area").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, 600,);
        // return false;
    });
});


//gallery_tab_simple
$(function () {
  /*初期表示*/
  $('.ChangeElem_Panel').hide();
  $('.ChangeElem_Panel').eq(0).show();
  $('.ChangeElem_Btn').eq(0).addClass('is-active');
  /*クリックイベント*/
  $('.ChangeElem_Btn').each(function () {
    $(this).on('click', function () {
      var index = $('.ChangeElem_Btn').index(this);
      $('.ChangeElem_Btn').removeClass('is-active');
      $(this).addClass('is-active');
      $('.ChangeElem_Panel').hide();
      $('.ChangeElem_Panel').eq(index).show();
    });
  });
});
