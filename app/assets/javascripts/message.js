$(document).on('turbolinks:load', function() {
  $(function(){
    function buildHTML(message){
      var img = message.image ? `<img src=${ message.image } >` : "";
      var html = `<div class="submit">
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
        var html = buildHTML(data);
        $('.in-rightcontent').append(html)
        $("html,body").animate({scrollTop: $('.in-rightcontent')[0].scrollHeight}, 'fast');
        $('form')[0].reset();
      })
      .fail(function(){
        alert('error');
      })
    })
  })
});
