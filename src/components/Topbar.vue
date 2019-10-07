<template>
    <nav class="topbar">
        <div class="topbar__logo">
            <router-link to="/">
                <img src="@/assets/images/robotix_logo.jpg" />
            </router-link>
        </div>
        <div class="topbar__menu">
            <Hamburger />
            <router-link
                class="menu-item"
                to="about"
            >
                O nas
            </router-link>
            <router-link
                class="menu-item"
                to="offer"
            >
                Oferta
            </router-link>
            <router-link
                class="menu-item"
                to="faq"
            >
                FAQ
            </router-link>
            <router-link
                class="menu-item"
                to="contact"
            >
                Kontakt
            </router-link>
            <router-link
                class="button-sign"
                to="sign"
            >
                Zapisy
            </router-link>
        </div>
    </nav>
</template>
<script>
import Hamburger from './topbar/Hamburger'

export default {
    components: {
        Hamburger,
    },
}
</script>
<style lang="scss" scoped>
.topbar {
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    justify-content: space-between;
    background-color: #fff;
    z-index: 2;

    @include breakpoint($lg) {
        padding: 0 36px;
    }

    @include breakpoint($elg) {
        padding: 0 calc((100% - 1200px) / 2);
    }

    &__menu {
        display: flex;

        .hamburger {
            @include breakpoint($lg) {
                display: none;
            }
        }

        .menu-item {
            display: none;

            @include breakpoint($lg) {
                display: flex;
                height: 80px;
                padding: 0 16px;
                border: none;
                background: transparent;
                outline: none;
                font-size: 16px;
                font-family: Roboto;
                font-weight: 300;
                color: #6D6D6D;
                transition: 0.3s all;
                box-sizing: border-box;
                text-decoration: none;
                align-items: center;
                border-bottom: 4px solid transparent;

                &:hover {
                    border-bottom: 4px solid #00A1ED;
                    color: #00A1ED;
                }
            }
        }

        .button-sign {
            display: none;

            @include breakpoint($lg) {
                display: flex;
                margin-left: 16px;
                align-self: center;
                padding: 0 32px;
                color: #fff;
                font-size: 16px;
                font-weight: 500;
                text-decoration: none;
                text-transform: uppercase;
                height: 40px;
                border-radius: 20px;
                background-color: #E2342B;
                align-items: center;
                transition: 0.3s all;

                &:hover {
                    background-color: #B82820;
                }
            }
        }
    }
}
</style>
