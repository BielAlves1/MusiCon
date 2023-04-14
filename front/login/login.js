function login() {
    let credenciais = {
        "email": document.querySelector(".email").value,
        "senha": document.querySelector(".senha").value,
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    options.body = JSON.stringify(credenciais);
    fetch("http://localhost:5000/usuarios/login", options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200) {
                localStorage.setItem("info", JSON.stringify(
                    {
                        "id_user": resp.id_user, 
                        "nome_user":resp.nome_user, 
                        "email":resp.email, 
                        "senha":resp.senha
                    }
                    ));
                window.location.href = "../../home/home.html";
            }
            else {
                alert("Email ou Senha Incorretas")
            }
        })
};