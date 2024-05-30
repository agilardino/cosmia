 
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


$(document).scroll(function(){
  var y = $(this).scrollTop();
  if (y>20){
    $(".chevron").hide();
  }else {
    $(".chevron").show();
  }
});

$(document).scroll(function(){
  var y = $(this).scrollTop();
  if (y>100){
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