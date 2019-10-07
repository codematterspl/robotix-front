<template>
    <section class="faq">
        <div class="faq__header">
            <h1 class="header">faq - czyli najczęściej zadawane pytania</h1>
        </div>
        <ul class="faq__list">
            <li class="item" v-for="(item, index) in items" :key="index" @click="toggle(item)">
                <div class="item__icon">
                    <img
                        v-if="item.opened"
                        src="@/assets/images/minus.svg"
                    />
                    <img
                        v-else
                        src="@/assets/images/plus.svg"
                    />
                </div>
                <div class="item__text">
                    <h2 class="question">{{ item.question }}</h2>
                    <p class="answer" v-if="item.opened">{{ item.answer }}</p>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    question: 'Jak mogę zapisać moje dziecko na zajęcia?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus justo non velit egestas, ac pretium risus porta. Aenean luctus ligula eu ultricies porta. Aliquam ut condimentum sapien.',
                    opened: false,
                }, {
                    question: 'Ile kosztują zajęcia?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus justo non velit egestas, ac pretium risus porta. Aenean luctus ligula eu ultricies porta. Aliquam ut condimentum sapien.',
                    opened: false,
                }, {
                    question: 'Czy podczas zajęć dzieci mają przerwy?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus justo non velit egestas, ac pretium risus porta. Aenean luctus ligula eu ultricies porta. Aliquam ut condimentum sapien.',
                    opened: false,
                }, {
                    question: 'Czy zajęcia prowadzone są tylko przy komputerach?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus justo non velit egestas, ac pretium risus porta. Aenean luctus ligula eu ultricies porta. Aliquam ut condimentum sapien.',
                    opened: false,
                }, {
                    question: 'Dlaczego dzieci pracują w parach?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus justo non velit egestas, ac pretium risus porta. Aenean luctus ligula eu ultricies porta. Aliquam ut condimentum sapien.',
                    opened: false,
                },
            ],
        }
    },
    methods: {
        toggle(item) {
            item.opened = !item.opened
        }
    }
}
</script>
<style lang="scss" scoped>
.faq {
    margin-top: 32px;
    padding: 0 16px;

    @include breakpoint($md) {
        padding: 0 32px;
    }

    @include breakpoint($lg) {
        padding: 0 128px;
    }

    @include breakpoint($elg) {
        padding: 0 calc((100% - 1200px) / 2 + 128px);
    }

    &__header {
        text-align: center;
        padding: 0 48px;
    }

    &__list {
        margin-top: 32px;

        .item {
            display: flex;
            list-style-type: none;
            margin-bottom: 16px;
            border: 2px solid #F8F8F8;
            border-radius: 50px;
            padding: 32px;
            align-items: center;
            cursor: pointer;

            &__icon {
                .icon {
                    height: 60px;
                    width: 60px;
                }
            }

            &__text {
                padding-left: 24px;

                .answer {
                    margin-top: 16px;
                    font-family: Roboto;
                    color: #6D6D6D;
                    font-size: 12px;
                    line-height: 24px;
                    font-weight: 500;
                }
            }
        }
    }
}
</style>
