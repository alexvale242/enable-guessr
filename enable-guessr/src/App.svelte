<script lang="ts">
    import AppHeader from './web/app-header.svelte'
    import EnableGuessrPage from './web/enable-guessr/enableGuessrPage.svelte'
</script>

<main>
    <section class="heading">
        <AppHeader />
    </section>
    <EnableGuessrPage></EnableGuessrPage>
</main>

<style lang="scss">
    .heading {
        height: 4rem;
    }
</style>
