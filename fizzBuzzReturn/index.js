'use strict';

$ (function(){

  $('form').submit(e => {
    //have function that accepts user input
    event.preventDefault();
    let inputValue = $(event.currentTarget).find('input').val();

    //put stuff into js-results
    //.js-results
    function logRes(input) {
      for (let i = 0; i <= input; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
          $('.js-results').append('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>');
        }
        else if (i % 5 === 0) {
          $('.js-results').append('<div class="fizz-buzz-item buzz"><span>buzz</span></div>');
        }
        else if (i % 3 === 0) {
          $('.js-results').append('<div class="fizz-buzz-item fizz"><span>fizz</span></div>');
        }
        else {
          $('.js-result').append(`<div class="fizz-buzz-item"><span>${i}</span></div>`);
        }
      }
    }

    logRes(inputValue);

  });
});
