function login() {
    let email = document.querySelector("#email").value
    let senha = document.querySelector("#senha").value

    let credenciais = {
        "email": email,
        "senha": senha,
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credenciais)
    }
    if(email.length > 0 && senha.length > 0){
        fetch("http://localhost:5000/login", options)
        .then(resp => {return resp.json()})
        .then(data => {
            if (data.erro === undefined) {
                localStorage.setItem("info", JSON.stringify(
                    {
                        "id_User": data.id_User, 
                        "user_name":data.user_name, 
                        "email":data.email, 
                        "token":data.token
                    }
                    ));
                window.location.href = "../home/home.html";
            }
            else {
                alert(data.erro)
            }
        })
    }else{
        alert("PREENCHA TODOS OS CAMPOS!")
    }
    
};