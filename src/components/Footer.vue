<template>
    <footer class="footer">
        <span class="copyright">Copyright © 2019  All Rights Reserved by Robotix.</span>
        <span class="created">Created by <a href="http://codematters.pl" target="_blank">Codematters</a></span>
    </footer>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.footer {
    height: 80px;
    background-color: #2E4E82;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 16px;

    @include breakpoint($md) {
        padding: 0 32px;
        flex-direction: row;
    }

    .copyright {
        flex-grow: 1;
    }

    .created {
        flex-shrink: 1;
    }

    .copyright, .created {
        font-size: 10px;
        font-family: Montserrat;
        color: #EEEEEE;
        line-height: 26px;

        a {
            color: #EEEEEE;
        }

        @include breakpoint($md) {
            font-size: 12px;
        }
    }
}
</style>
