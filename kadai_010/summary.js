$(function() {
  // 「文字色変化」ボタンが押された時の処理
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red'); // 文字色を赤に変更
  });

  // 「文字内容変化」ボタンが押された時の処理
  $('#change-text').on('click', function() {
    $('#target').text('Hello!'); // テキスト内容を変更
  });

  // 「フェードアウト」ボタンが押された時の処理
  $('#fade-out').on('click', function() {
    $('#target').fadeOut(); // フェードアウトで文字を消す
  });

  // 「フェードイン」ボタンが押された時の処理
  $('#fade-in').on('click', function() {
    $('#target').fadeIn(); // フェードインで文字を表示
  });
});
