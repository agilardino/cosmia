 
 // NAVEGACION

 const nav = document.querySelector("#nav");
 const abrir = document.querySelector("#abrir");
 const cerrar = document.querySelector("#cerrar");
 
 abrir.addEventListener("click", () => {
     nav.classList.add("visible");
 })
 
 cerrar.addEventListener("click", () => {
     nav.classList.remove("visible");
 })

// owl carousel


$(document).scroll(function() {
  var y = $(this).scrollTop();
  var windowHeight = $(window).height(); // Get window height

  if (y > windowHeight / 15) {
    $(".chevron").hide();
  } else {
    $(".chevron").show();
  }
});

// $(window).scroll(function() {
//   var y = $(this).scrollTop();
//   var windowHeight = $(window).height(); // Obtener la altura de la ventana

//   if (y > windowHeight / 50) {
//     $(".whatsapp").show();
//   } else {
//     $(".whatsapp").hide();
//   }
// });

$(document).scroll(function(){
  var y = $(this).scrollTop();
  if (y>50){
    $("header").hide();
  }else {
    $("header").show();
  }
});




// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()