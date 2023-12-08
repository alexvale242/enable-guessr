<script lang="ts">
    import { onMount } from 'svelte'
    import pageState from '../../state/page-state'

    let pageUrl = ''

    onMount(() => {
        pageState.currentPage.subscribe(($currentPage) => {
            pageUrl = $currentPage.imageUrl
        })
    })

    function getNextPage(): void {
        pageState.nextPage()
        event?.preventDefault();
    }
</script>

<section class="page-heading">
    <h1>Enable Guessr</h1>
    <p>
        Mini game based on GeoGeussr. Identify the page from the Enable platform
        without any text content! Enter the title of the page (the text in the
        big green heading) to move onto the next page. Each correct guess gives
        points, the faster you answer the more points you get!
    </p>
</section>
<section class="page-content">
    <div class="image-container">
        <img src={pageUrl} alt="Screenshot of one of the pages of Enable" />
    </div>
</section>
<section>
    <form on:submit={getNextPage} class="answer-controls">
        <eds-form-field label="Name" name="name">
            <input
                class="eds-input"
                id="name"
                name="name"
                type="text"
                placeholder="Guess here!"
                value=""
            />
        </eds-form-field>
        <button class="eds-button" type="submit">Guess</button>
    </form>
</section>

<style lang="scss">
    .page-heading {
        padding-top: 2rem;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        h1 {
            text-align: center;
        }
    }

    .page-content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .image-container {
            width: 80%;
            border: 1px solid var(--eds-brand-color-border-base);
        }
    }

    .page-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        button {
            &:not(:first-child) {
                margin-left: 2rem;
            }
        }
    }

    .answer-controls {
        display: flex;
        align-items: center;
        justify-content: center;

        eds-form-field {
            flex: 2 1 0;
        }

        :not(:first-child) {
            margin-left: 2rem;
        }
    }
</style>
