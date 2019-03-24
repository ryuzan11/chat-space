$(document).on('turbolinks:load', function() {
  function buildMessage(message){
    image = (message.image === null) ? "" :`<img src="${message.image}" class="lower-message__image">`
    var html = `<div class= "message" data-id=${message.id}>
                    <div class= upper-message>
                      <div class= upper-message__user-name>
                        ${message.name}
                      </div>
                      <div class= upper-message__date>
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message__main">
                    <p class="lower-message__content">
                      ${message.text}
                    </p>
                  ${image}
               </div>`
    return html;
  }

  function inputCheck() {
    var check = true;
    var form_text = $('.form__message').val();
    var form_image = $('.hidden').val();

    if(form_text == "" && form_image == ""){
      window.alert('フォームに入力してください');
      check = false;
    }
    return check;
  }

  function scrollbottom(){
    $('.messages__main').animate({scrollTop:$('.messages__main')[0].scrollHeight});
  }

  $('#form-content').on('submit', function(e) {
    e.preventDefault();
    if(!inputCheck() ){return false;}
    var formData = new FormData(this);
    var href = $(this).attr('action');
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message);
      $('.messages__main').append(html);
      $('#form-content')[0].reset()
      scrollbottom()
    })
    .fail(function(){
      alert('error');
    })
    .always(function(){
      $('.form__submit').prop('disabled',false);
    })
  })

  $(function(){
    setInterval(updateMessage, 5000);
  });

  function updateMessage(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    var message_id = $('.message:last').data('id');
    var href = window.location.href;
    console.log(message_id);
    $.ajax({
      url: href,
      type: 'GET',
      data: { id: message_id },
      dataType: 'json'
    })
    .done(function(message){
      var insertHtml = '';
        data.forEach(function(message){
        insertHtml = buildMessage
      });
      $('.messages__main').append(insertHtml).animate({scrollTop:$('.messages__main')[0].scrollHeight});
    })
    .fail(function(){
      alert('自動更新に失敗しました');
    });
    } else {
      clearInterval(update);
    }
  };
});
