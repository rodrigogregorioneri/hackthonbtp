<template>
    <div class="color">
        <div>
            <img class="logo" src="../assets/image/logo.png">
        </div>
            <div class="titulo text-center">
                <h1>BTP pra você!</h1>
                <h2>A plataforma do colaborador</h2>
            </div>
    </div>
</template>


<style>
    .color{
        background-color: #2a565e;
        padding: .5rem 1rem;
        display: flex;
    }
    .color a{
        margin-top: 2%;
        margin-left: 3%;
    }
    .logo{
        width: 60%;
        margin-left: 50px;
    }
    .avatar{
        width: 7%;
    }

    .nav-avatar span{
        color: #a4af15;
    }

    .nav-avatar{
        text-align: end;
        flex-direction: row;
    }
    h1, h2{
        margin-left: 25%;
        margin-top: 1%;
        font-weight: bold;
        color: #a4af15;
        text-transform: uppercase;
    }
    h2 {
        font-size: 15px;
    }
    .titulo{
        width: 60%;
    }

</style>
