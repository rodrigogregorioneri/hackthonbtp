<template>
    <div class="container login">
        <div class="card text-center" style="width: 18rem;">
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Matrícula <img class="imglogin" src="../assets/image/login.png"></label>
    <input type="text" class="form-control" id="matricula" aria-describedby="matriculaHelp" placeholder="Número da matrícula">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" >Senha <img class="imglogin" src="../assets/image/login.png"> </label>
    <input type="password" class="form-control" id="senha" placeholder="Digite sua senha">
  </div>
  <button type="submit" class="btn btn-primary">Entrar</button>
</form>
        </div>
    </div>
</template>

<style>
    .login{
        margin-top: 8%;
        margin-left: 40%;
    }
    .btn-primary{
        background-color: #a4af15;
        border-color: #2a565e;
    }
    .btn-primary:hover {
    background-color: #2a565e;
    color: white;
    }
    .form-control{
        border-radius: 24px;
    }
    form{
        margin: 32px;
    }
    label{
        font-weight: bold;
        font-size: 16px;
    }
    .imglogin {
    width: 35%;
    margin-left: 0;
    }
    @media (max-width: 420px){
        .login {
        margin-left: 8%;
    }
    h1, h2 {
    margin-left: 0;
    }
    .logo{
        margin-left: 0;
    }
    }
</style>
