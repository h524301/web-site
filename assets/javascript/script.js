$(document).ready(function () {
  // 將目標以外的 section 進行隱藏
  $('main.container > section:not(#about)').hide();

  // 幫 navbar 底下的 a 標籤掛上一個點擊事件
  $('.navbar > a').click(function () {
    // 將 main.container 內全部的 section 進行隱藏
    $('main.container > section').hide();

    // 將區塊 href 內的 ID 選擇器抽出，並顯示區塊
    $($(this).attr('href')).show();

    // 刪除全部 navbar 底下 a 的 active class
    $('.navbar > a.active').removeClass('active');

    // 幫我們目前點擊的區塊加上 active
    $(this).addClass('active');

    // 讓原本的 HTML 操作不執行 javascript
    return false;
  });

  $('.aside__menu').click(function () {
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
    $('.aside__mask').toggleClass('active');
  });

  $('.aside__mask').click(function () {
    $('.aside__menu').toggleClass('active');
    $('.aside__container').toggleClass('active');
    $('.aside__mask').toggleClass('active');
  });
});
