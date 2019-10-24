'use strict';
$(function () {

  $('button').on('submit', event => {
    event.preventDefault();
    let input = $('form input').val();
    console.log(input);
  })


})