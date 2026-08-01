const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const btn = document.querySelector(".btn")

btn.addEventListener("click", (e) => {
  e.preventDefault()

   if (email.value.trim() === "" || senha.value.trim() === "") {
    alert("Campos não preenchidos!")
    return
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regexEmail.test(email.value.trim())) {
    alert("Por favor, insira um e-mail válido!")
    return
  }

  const regexSenha = /(?=.*[a-zA-Z])(?=.*\d).{6,}/
  if (!regexSenha.test(senha.value)) {
    alert("A senha deve ter pelo menos 6 caracteres e conter letras e números!")
    return
  }

  alert("Preenchido, pronto para login!")
})