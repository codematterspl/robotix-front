<template>
    <section class="landing">
        <div class="landing__motto">
            <span class="motto">Nauka robotyki w Robotix<br /> jest dziecinnie prosta!</span>
            <router-link to="#" class="link">Odkryj świat robotów razem z nami!</router-link>
            <div class="socials">
                <Icon name="instagram" />
                <Icon name="facebook" />
            </div>
        </div>
        <div class="landing__illustration">
            <img class="illustration" src="@/assets/images/robotix_ilu.png" />
        </div>
    </section>
</template>
<script>
import Icon from '@/components/Icon'

export default {
    components: {
        Icon,
    },
}
</script>
<style lang="scss" scoped>
.landing {
    height: calc(100vh - 80px);
    margin-top: 80px;
    background: radial-gradient(farthest-corner at 40px 40px, #4F6C9C, #2E4E82);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 48px 16px;

    @include breakpoint($md) {
        padding: 128px 32px;
    }

    @include breakpoint($lg) {
        padding: 0 32px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        position: relative;
    }

    @include breakpoint($elg) {
        padding: 0 calc((100% - 1200px) / 2);
    }

    &__motto {
        display: flex;
        flex-direction: column;
        z-index: 1;

        @include breakpoint($lg) {
            position: absolute;
            align-items: flex-end;
            align-self: center;
        }

        .motto {
            color: #fff;
            font-family: Montserrat;
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;
            text-align: center;

            @include breakpoint($md) {
                font-size: 40px;
                line-height: 48px;
            }

            @include breakpoint($lg) {
                text-align: right;
            }
        }

        .link {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 68px;
            font-family: Roboto;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            margin-top: 16px;
            background-color: #0AADF9;
            padding: 0px 24px;
            border-radius: 50px;
            text-align: center;
            transition: all 0.3s;

            @include breakpoint($md) {
                padding: 0 128px;
            }

            &:hover {
                background-color: #138bc2;
            }
        }

        .socials {
            display: flex;
            justify-content: center;
            margin-top: 24px;

            .icon {
                padding: 0 8px;
            }
        }
    }

    &__illustration {
        @include breakpoint($lg) {
            position: absolute;
            left: 0;
        }

        .illustration {
            margin-top: 16px;
            width: 100%;
            height: auto;
            max-width: 662px;
        }
    }
}
</style>
