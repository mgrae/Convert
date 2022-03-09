function changeCurrency(){
    $.get('https://v6.exchangerate-api.com/v6/087411d545b0e01f539eb2a6/latest/EUR')
  .done(function(data) {
    const ratio = data.conversion_rates.USD
    const select = $( ".pricing-terms h6" )
    select[0].replaceWith(select[0].outerText.slice(0, -1) * ratio + ' $')
    select[1].replaceWith(select[1].outerText.slice(0, -1) * ratio + ' $')
    select[2].replaceWith(select[2].outerText.slice(0, -3) * ratio + '+ $')
  })
  .fail(function() {
    alert( "error" );
  })
};
changeCurrency()
