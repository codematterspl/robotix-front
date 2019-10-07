<template>
    <section class="lego">
        <div class="lego__image">
            <img class="image" src="@/assets/images/boxes.png" />
        </div>
        <div class="lego__text">
            <p class="text">
                Prowadzimy zajęcia na podstawie<br /> Lego WeDo:<br />
                CITYCAMP, SAFARICAMP oraz STARCAMP!
            </p>
        </div>
    </section>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.lego {
    padding: 0 16px;
    margin: 32px 0;

    @include breakpoint($md) {
        padding: 0 128px;
    }

    @include breakpoint($lg) {
        display: flex;
        padding: 0 32px;
    }

    @include breakpoint($elg) {
        padding: 0 calc((100% - 1200px) / 2);
    }

    &__text {
        display: flex;
        align-items: center;
        justify-content: center;

        @include breakpoint($lg) {
            flex: 1;
        }

        .text {
            color: #000;
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 900;
            text-align: center;

            @include breakpoint($md) {
                font-size: 24px;
            }
        }
    }

    &__image {
        display: flex;
        justify-content: center;
        align-items: center;

        @include breakpoint($lg) {
            flex: 1;
        }

        .image {
            max-width: 300px;

            @include breakpoint($md) {
                max-width: 550px;
            }
        }
    }
}
</style>
