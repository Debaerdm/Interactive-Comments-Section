<script lang="ts">
    import Card from 'components/Card.svelte';
    import Comment from 'components/Comment.svelte';
    import InputText from 'components/InputText.svelte';
    import { chat } from 'shared/store';
</script>

<ul class="chat">
    {#each $chat.comments as comment (comment.id)}
        <Comment {comment} />
    {/each}
    <Card>
        <InputText />
    </Card> 
</ul>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700');

    :global(*) {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
		box-sizing: border-box;
        transition: all 0.5s;
	}

	:global(html),
	:global(body) {
		height: 100%;
	}

	:global(body) {
		display: flex;
		overflow: hidden;
		flex-direction: column;
		font-family: 'Rubit';
		background-color: hsl(228, 33%, 97%);
	}

    :global(p) {
        font-size: 16px;
        color: hsl(211, 10%, 45%);
    }

    :global(button) {
        background-color: transparent;
        cursor: pointer;
    }

    :global(#app) {
        display: flex;
        height: 100%;
        justify-content: center;
        overflow-y: auto;
    }

    :global(button:hover > .icon > path) {
        fill: hsl(238, 40%, 52%);
    }

    :global(.avatar) {
        width: 28px;
        height: 28px;
    }

    .chat {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 3rem;
        width: 700px;
        row-gap: 10px;
    }
</style>