$(document).on('turbolinks:load', function() {
  function build_messageHTML(message){
    image = (message.image === null) ? "" :`<img src="${message.image}" class="lower-message__image">`
    var html = `<div class= "message" "data-message-id"=${message.id}>
                    <div class= upper-message>
                      <div class= upper-message__user-name>
                        ${message.name}
                      </div>
                      <div class= upper-message__date>
                        ${message.created_at}
                      </div>
                    </div>
                    <div class= lower-message>
                        ${ message.text }
                      </div>
                        ${ image }
                    </div>
                </div>`
    return html;
  }

  function scrollbottom(){
    $('.messages__main').animate({scrollTop:$('.messages__main')[0].scrollHeight});
  }

  $('#form-content').on('submit', function(e) {
    e.preventDefault();
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
      var html = build_messageHTML(message);
      $('.messages__main').append(html).scrollHeight;
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
});
