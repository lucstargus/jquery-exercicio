$(document).ready(function () {

  // Carousel
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    arrows: true
  })

  // Máscaras
  $('#telefone').mask('(00) 00000-0000')
  $('#cpf').mask('000.000.000-00')

  // Validação
  $('#formCadastro').validate({
    rules: {
      nome: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      nome: 'Informe seu nome completo',
      email: 'Informe um email válido'
    }
  })
})
