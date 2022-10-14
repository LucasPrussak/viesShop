function check(){
    let senhaEl = document.getElementById("senhaUsu")
    let senhaConfEl = document.getElementById("senhaConfUsu")
    let checkboxEl = document.getElementById("checkbox")

    if (checkboxEl.checked == true) {
        senhaConfEl.type = "text"
        senhaEl.type = "text"
    } else {
        senhaConfEl.type = "password"
        senhaEl.type = "password"
    }
  

   


}