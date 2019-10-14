<template>
    <div class="home">
        <Landing />
        <AboutUs id="about" />
        <Lego />
        <Banner />
        <Offer id="offer" />
        <FAQ id="faq" />
    </div>
</template>
<script>
import Landing from './Landing'
import AboutUs from './AboutUs'
import Lego from './Lego'
import Banner from './Banner'
import Offer from './Offer'
import FAQ from './FAQ'

export default {
    components: {
        Landing,
        AboutUs,
        Lego,
        Banner,
        Offer,
        FAQ,
    },
    name: 'Home',
};
</script>
<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    background-image: url('~assets/images/bg.jpg');
}
</style>
