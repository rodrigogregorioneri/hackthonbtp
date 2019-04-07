<template>
    <div class="home">
        <div class="container curso">
            <div class="info">
            <h2>Bem vindo (a) colaborador (a) <a href="#">(Sair)</a></h2>
            <a href="#">Consulte aqui a agenda de cursos Abril/2019</a><br>
            <a href="#">Mural de Oportunidades</a><br>
            <a href="#">Saldo BTP Points</a><br>
            <div class="midia">
                <p>BTP na Mídia:</p>
                <a href="https://g1.globo.com/sp/santos-regiao/porto-mar/noticia/2019/04/06/maratona-de-30h-reune-desenvolvedores-para-encontrar-solucoes-ao-porto-de-santos-sp.ghtml"><img src="../assets/image/hackathon.jpg" alt=""></a><br>
                <p>Hackathon na BTP!</p>
            </div>
            </div>
        <div>
            <p>Venha assistir a vídeo aula:</p>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/tZiAapocj7E?controls=0" frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    </div>
</template>

<style scoped>
    .curso{
        margin-top: 50px;
        border: #2a565e 2px solid;
        padding: 20px;
        display: flex;

    }
    h2{
        margin-left: 0;
        font-size: 20px;
    }

    .midia{
        margin-top: 3%;
    }

    .info{
        width: 50%;
        margin-left: 5%;
    }

    a {
    color: #2a565e;
    text-decoration: none;
    }
    a:hover {
    color: #a4af15;
    }
    h2 a{
        color: black;
        font-size: 10px;
    }
    img{
        width: 25%;
    }
</style>