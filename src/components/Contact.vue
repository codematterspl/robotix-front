<template>
    <section class="contact">
        <div class="contact__header">
            <h1 class="header">Chcesz dowiedzieć się więcej? Napisz lub zadzwoń!</h1>
        </div>
        <div class="contact__data">
            <div class="contact__data__item">
                <img src="@/assets/images/envelop-gear.svg" />
                <a href="mailto:kontakt@robotix.edu.pl" class="email">kontakt@robotix.edu.pl</a>
            </div>
            <div class="contact__data__item">
                <img src="@/assets/images/phone-gear.svg" />
                <a href="tel:797295465" class="phone">797 295 465</a>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.contact {
    margin-top: 80px;
    padding: 0 16px;

    @include breakpoint($md) {
        padding: 0 32px;
    }

    @include breakpoint($elg) {
        padding: 0 calc((100% - 1200px) / 2);
    }

    &__header {
        text-align: center;
        padding: 0 48px;

        .header {
            @include breakpoint($lg) {
                padding: 0 25%;
            }
        }
    }

    &__data {
        display: flex;
        flex-direction: column;
        margin-top: 32px;

        @include breakpoint($md) {
            font-size: 24px;
            flex-direction: row;
            padding: 0 128px;
        }

        @include breakpoint($lg) {
            padding: 0 192px;
        }

        &__item {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex: 1;

            @include breakpoint($md) {
                justify-content: center;
            }

            .email, .phone {
                padding-left: 24px;
                font-size: 16px;
                font-weight: 900;
                font-family: Montserrat;
                text-decoration: none;
            }

            .email {
                color: #E50019;
            }

            .phone {
                color: #00A1ED;
            }
        }
    }
}
</style>
