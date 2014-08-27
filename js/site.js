/**
 * Sean Fisher 2014
**/
var SF = {};
SF.home = function() {
  if (location.hash == '#work') scrollToId('#work');

  $('#nav-contact a, #spotlight-contact').click(function(e)
  {
    e.preventDefault();
    scrollToId('#contact');
    $('#contact-textarea').focus();

    ga('send', 'event', 'Button', 'Click', 'Contact '  + $(this).data('medium'));
  });

  $('#nav-work a').click(function(e)
  {
    e.preventDefault();
    scrollToId('#work');
  });

  $('#nav-home a, #nav-logo a').click(function(e)
  {
    e.preventDefault();
    scrollToId('body');
  });
};

$(function() {
  $('body').scrollTop(1);

  $('#nav-toggle').click(function()
  {
      $('.nav-wrap').toggle();
  });

  $('.btn[data-type]').click(function(e)
  {
      e.preventDefault();
      var type = $(this).data('type');

      onComplete = function() {
          if (type == 'message')
              $('#contact-textarea').focus();
          else
              $('#your-name').focus();
      };

      $('form[data-form-type!="'+type+'"]').fadeOut(200);
      $('.alt-btns .btn[data-type!="'+type+'"]').removeClass('btn-primary').addClass('btn-default');

      $('form[data-form-type="'+type+'"]').fadeIn(400, onComplete);
      $('.alt-btns .btn[data-type="'+type+'"]').removeClass('btn-default').addClass('btn-primary');
  });

  $('form.contact-form').submit(function(e)
  {
      e.preventDefault();
      btn = $(this).find('button.btn');
      btn.button('loading');

      $('#contact-error').hide();
      $(this).find('input[name="is-robot"]').val('no');

      var formData = $(this).serialize(),
          email = $(this).find('input[name="email"]').val();

      $.ajax({
        url: $(this).attr('action') + '?callback=?',
        type: 'POST',
        data: formData,
        crossDomain: true
      }).success(function(j) {
        console.log(j);
          if (j.status == 'ok')
          {
              $('.alt-btns').hide();
              $('form.contact-form').slideUp();
              $('#contact-sent').fadeIn();

              ga('send', 'event', 'ContactFrom', 'Submit', email);
          }
          else
          {
              btn.button('reset');
              $('#contact-error').fadeIn();
          }
      });


  });

  // Tooltip
  $('.tipsy').tooltip();
  $('#contact-btn').popover();
});

function scrollToId(id)
{
    offset = $('#global-nav').height() + 10;
     $('html,body').animate({
          scrollTop: ( $(id).offset().top)-offset
     },'slow');
}
