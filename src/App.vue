<template>
    <div id="app">
        <Topbar />
        <router-view></router-view>
        <Contact id="contact" />
        <Footer />
    </div>
</template>
<script>
import Topbar from '@/components/Topbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
    name: 'App',
    components: {
        Topbar,
        Footer,
        Contact
    },
};

</script>
<style lang="scss">
#app {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,600,700,800,900&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap');
    font-family: 'Roboto', sans-serif;
    position: relative;
}
</style>
