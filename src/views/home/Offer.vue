<template>
    <section class="offer">
        <div class="offer__header">
            <h1 class="header">w naszej ofercie znajdą państwo!</h1>
        </div>
        <ul class="offer__list">
            <li class="item">
                <div class="item__icon">
                    <Icon name="tick-inside-circle" class="icon" style="fill: #00A1ED" />
                </div>
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus justo non velit egestas, ac pretium risus porta. Aenean luctus ligula eu ultricies porta. Aliquam ut condimentum sapien.
                </p>
            </li>
            <li class="item">
                <div class="item__icon">
                    <Icon name="tick-inside-circle" class="icon" style="fill: #76187E" />
                </div>
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus justo non velit egestas, ac pretium risus porta. Aenean luctus ligula eu ultricies porta. Aliquam ut condimentum sapien.
                </p>
            </li>
            <li class="item">
                <div class="item__icon">
                    <Icon name="tick-inside-circle" class="icon" style="fill: #E50019" />
                </div>
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus justo non velit egestas, ac pretium risus porta. Aenean luctus ligula eu ultricies porta. Aliquam ut condimentum sapien.
                </p>
            </li>
        </ul>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.offer {
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

            @include breakpoint($lg) {
                margin-bottom: 48px;
            }

            &__icon {
                .icon {
                    height: 60px;
                    width: 60px;
                }
            }

            .text {
                padding-left: 24px;
                font-family: Roboto;
                color: #6D6D6D;
                font-size: 12px;
                line-height: 24px;
                font-weight: 500;
            }
        }
    }
}
</style>
