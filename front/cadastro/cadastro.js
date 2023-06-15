const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confsenha = document.querySelector("#confsenha");
const username = document.querySelector("#username");

const verificaEmail = () => {
    fetch("http://localhost:5000/usuario/readEmail")
        .then(resp => { return resp.json() })
        .then(data => {
            if (data.email == null) {
                verificaUserName()
            }else{
                alert("Este email já está cadastrado.")
            }
    })
}

const verificaUserName = () => {
    fetch("http://localhost:5000/usuario/readUserName")
        .then(resp => { return resp.json() })
        .then(data => {
            if (data.user_name != username.value) {
                criarUsuario()
            }else{
                alert("Nome de usuário indisponível.")
            }
    })
}

function criarUsuario() {
    if (senha.value == confsenha.value) {
        if(senha.value.length >= 8) {
            let usuario = {
                "user_name": username.value,
                "email": email.value,
                "senha": senha.value
            }
    
            fetch("http://localhost:5000/usuario/create", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(usuario)
            })
                .then(res => { return res.json() })
                .then(data => {
                    if (data != undefined) {
                        alert("Usuário cadastrado com sucesso!");
                        window.location.href = "../login/login.html";
                    } else {
                        alert("Erro no Sistema!")
                    }
                })
        }else{
            alert("A Senha deve ter pelo menos 8 caracteres!")
        }
    }else{
        alert("Digite a exata mesma senha nos dois campos!")
    }

}