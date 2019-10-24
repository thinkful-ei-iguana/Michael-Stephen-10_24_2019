'use strict';

$('.thumbnail').on('click', e => {
    $('.hero').children().remove();
    $(event.currentTarget).clone().removeClass().appendTo('.hero');
  });
  