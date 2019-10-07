<template>
    <section class="banner">
        <div class="banner__image">
            <p class="text">
                Nie czekaj! Już teraz zapisz swoje dziecko i odkrywajcie razem wspaniały świat Robotix!
            </p>
            <router-link to="/" class="link">kliknij i wypełnij formularz</router-link>
        </div>
    </section>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.banner {
    background-color: #e3000b;
    display: flex;

    @include breakpoint($md) {
        padding: 0 128px;
    }

    @include breakpoint($lg) {
        padding: 0 32px;
    }

    @include breakpoint($elg) {
        padding: 0 calc((100% - 1200px) / 2);
    }

    &__image {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 32px;
        height: 320px;
        width: 100%;
        background-image: url('~assets/images/banner-mobile.jpg');
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;

        @include breakpoint($md) {
            background-image: url('~assets/images/banner-desktop.jpg');
        }

        .text {
            color: #fff;
            font-family: Montserrat;
            font-weight: 700;
            text-align: center;
        }

        .link {
            margin-top: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 68px;
            background-color: #76187E;
            text-transform: uppercase;
            color: #fff;
            font-family: Roboto;
            font-weight: bold;
            font-size: 12px;
            border-radius: 50px;
            text-decoration: none;
            padding: 0px 32px;
            transition: all 0.3s;

            @include breakpoint($md) {
                padding: 0 128px;
            }

            &:hover {
                background-color: #64126b;
            }
        }
    }
}
</style>
