<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-btp">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">             
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Curso</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Conteúdo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Prova</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Procurar Curso" aria-label="Search">
      <button class="btn btn-btp my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>
</template>
<style>
    .bg-btp{
        background-color: #61a236;
    }
    .btn-btp{
        background-color: white;
        color: #a4af15;
        margin-left: 30px;
        padding: 6px 45px;
    }
    .btn-btp button{
        color: #a4af15;

    }
</style>
