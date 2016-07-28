$(document).ready(function() {
 $('#signup').validate({
   
   rules: {
     email: {
        required: true,
        email: true
     },
     password: {
        required: true,
        rangelength:[8,16]
     },
     confirm_password: {equalTo:'#password'},
     spam: "required"
   }, //koniec literału obiektowego rules
   messages: {
      email: {
         required: "Podaj adres e-mail.",
         email: "To nie jest prawidłowy adres e-mail."
       },
      password: {
        required: 'Wpisz hasło.',
        rangelength: 'Hasło musi mieć od 8 do 16 znaków.'
      },
      confirm_password: {
        equalTo: 'Podane hasła nie pasują do siebie.'
      }
   },
   errorPlacement: function(error, element) { 
       if ( element.is(":radio") || element.is(":checkbox")) {
          error.appendTo( element.parent()); 
        } else {
          error.insertAfter(element);
        } 
    }

  }); // koniec funkcji validate 

}); // koniec funkcji ready


$(document).ready(function(){

  $("#burger-nav .icon-menu").on("click", function(){

    $("#menu li").toggleClass("open");
  });


});