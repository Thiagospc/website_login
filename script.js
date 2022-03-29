function entrada() {
    let i = 0;
    var users = [
        {email: 'thiago.spc1029@gmail.com', senha: 123},
        {email: 'admin@gmail.com', senha: 321}
    ];
    
    users.map((val) => {

        let email_ = document.getElementById('email').value;
        let senha_ = document.getElementById('senha').value;

        if ((val.email == email_) && (val.senha == senha_)){
            alert('login feito com sucesso!')
            i = 1;
        }
        

    });

    if (i === 0){
        alert('email ou senha incorretos!')
    }
};

function linkar(){
    alert()
}




