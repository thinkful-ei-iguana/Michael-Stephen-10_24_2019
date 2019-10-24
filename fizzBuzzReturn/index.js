'use strict';

$ (function(){

  $('form').submit(event => {
    
    event.preventDefault();

    $('.js-results').empty();

    let inputValue = parseInt($(event.currentTarget).find('input[name = "number-choice"]').val());

    const result = [];

    for (let i = 1; i <= inputValue; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        result.push($('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));
      }
      else if (i % 5 === 0) {
        result.push($('<div class="fizz-buzz-item buzz"><span>buzz</span></div>'));
      }
      else if (i % 3 === 0) {
        result.push($('<div class="fizz-buzz-item fizz"><span>fizz</span></div>'));
      }
      else {
        result.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
      }
    }

    $('.js-results').append(result);
    
  });
});
