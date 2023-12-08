<script lang="ts">
    // your script goes here
</script>

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

    .page-content{
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

        button {
            &:not(:first-child) {
                margin-left: 2rem;
            }
        }
    }
</style>

<section class="page-heading">
    <h1>Enable Guessr</h1>
    <p>Do the thing and that</p>
</section>
<section class="page-content">
    <div class="image-container">
        <img src="test.png" alt="Screenshot of one of the pages of Enable">
    </div>
</section>
<section class="page-actions">
    <button class="eds-button">Next</button>
</section>