document.querySelector(".enviar").addEventLister("click", () => {
  let nome = document.querySelector("#nomesobrenome").value;
  let email = document.querySelector("#email").value;
  let celular = document.querySelector("#celular").value;

  if(nome ==""){
      alert("Preencha o campo")
      return false;
  }
});
