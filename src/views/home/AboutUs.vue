<template>
    <section class="about">
        <div class="about__section">
            <img class="image" src="@/assets/images/globe.svg" />
            <span class="header">Kim jesteśmy?</span>
            <p class="text">Jesteśmy pasjonatami, których przygoda z robotyką rozpoczęła się kilka lat temu w Wielkiej Brytanii i otworzyła nam oczy na możliwości rozwoju, kreatywności i poznawania nowych pasji poprzez interaktywną edukację.</p>
        </div>
        <div class="about__section about__section--bulb">
            <img class="image" src="@/assets/images/bulb.svg" />
            <span class="header">po co to robimy?</span>
            <p class="text">Wstępne programowanie jest świetnym pierwszym krokiem dla naszych młodych inżynierów do polubienia i zrozumienia przedmiotów ścisłych. Pomoże im to nabrać pewności siebie. Łatwiej przyjdzie im pochłaniać wiedzę. Faktem jest, że na całym świecie robotyka i programowanie szturmem przebija się do przedszkoli i szkół.</p>
        </div>
        <div class="about__section about__section--microprocessor">
            <img class="image" src="@/assets/images/microprocessor.svg" />
            <span class="header">dlaczego my?</span>
            <p class="text">W ofercie mamy niezwykle ciekawe i unikatowe projekty. Dzięki nim przyszli inżynierowie nie tylko budują i programują obiekty, ale też uczą się ich historii i sposobu działania. Końcowy etap naszych lekcji, to prezentacja zbudowanych robotów oraz dyskusja, co wspaniale wpływa na wysoką samoocenę i pewność siebie naszych uczniów.</p>
        </div>
    </section>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.about {
    margin-top: 32px;
    padding: 0 16px;

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

    &__section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 32px;

        @include breakpoint($lg) {
            flex: 1;

            & + .about__section {
                margin-left: 32px;
            }
        }

        .image {
            height: 80px;
            width: 80px;
        }

        .header {
            color: #E50019;
            font-size: 24px;
            font-family: Montserrat;
            text-transform: uppercase;
            margin-top: 16px;
            font-weight: 900;
        }

        .text {
            color: #6D6D6D;
            font-size: 12px;
            line-height: 24px;
            font-family: Roboto;
            text-align: justify;
            margin-top: 16px;
        }

        &--bulb {
            .header {
                color: #00A1ED;
            }
        }

        &--microprocessor {
            .header {
                color: #76187E;
            }
        }
    }
}
</style>
