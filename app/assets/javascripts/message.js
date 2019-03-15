$(document).on('turbolinks:load', function() {
  $(function(){
    function buildSendMessageHTML(message){
      var img = message.image ? `<img src=${ message.image } >` : "";
      var html = `<div class="submit" data-id=${ message.id}>
                    <ul class="submit--record">
                      <li class="submit--record__name">
                        ${message.user_name}
                      </li>
                      <li class="submit--record__date">
                        ${message.date}
                      </li>
                      <p class="submit--text">
                        ${message.content}
                      </p>
                      ${img}
                    </ul>
                  </div>`
      return html;
    }
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildSendMessageHTML(data);
        $('.in-rightcontent').append(html)
        $("html,body").animate({scrollTop: $('.in-rightcontent')[0].scrollHeight}, 'fast');
        $('form')[0].reset();
      })
      .fail(function(){
        alert('error');
      })
    })

    var current_page_reload = setInterval(autoUpdate, 1000*5);
    function autoUpdate(){
      var new_message_id = $('.submit:last').data('id');
      $.ajax({
        type: 'GET',
        url: location.href,
        data: {id: new_message_id},
        dataType: 'json'
      })
      .done(function(new_messages) {
        if(new_messages.length != 0 ){
          new_messages.forEach(function(new_message) {
            var AddHTML = buildSendMessageHTML(new_message);
            $('.in-rightcontent').append(AddHTML);
          })
          $("html,body").animate({scrollTop: $('.in-rightcontent')[0].scrollHeight}, 'fast');
        }
      })
      .fail(function(messages) {
        console.log('更新できませんでした。');
      });
    };
  })
});
