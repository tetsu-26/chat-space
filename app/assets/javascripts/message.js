$(document).on('turbolinks:load', function() {
  $(function(){
    function buildHTML(message){
      // var img =  ""
      // if (image.present?) {
      //   img = ${message.img}
      // }
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
        $('.hidden').val('')
        $('.form__message').val('')
      })
      .fail(function(){
        alert('error');
      })
    })
  })
});
