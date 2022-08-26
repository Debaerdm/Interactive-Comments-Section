<script lang="ts">
    import { chat } from 'shared/store';

    export let isReply: boolean = false;
</script>

<div class="input" {...$$restProps}>
    <img class="avatar" src={$chat.currentUser.image.png} alt={$chat.currentUser.username} />
    <textarea placeholder="Add a comment..."></textarea>
    {#if isReply}
        <button>REPLY</button>
    {:else}
        <button>SEND</button>
    {/if}
</div>


<style lang="scss">
    .input {
        display: flex;
        width: 100%;
    }

    textarea {
        flex: 1 0 auto;
        border: 1px solid #000;
        border-radius: 5px;
        margin-inline: 1rem;
        height: 80px;
        padding: 0.5rem 1rem;
        resize: none;
    }

    button {
        color: hsl(0, 0%, 100%);
        background-color: hsl(238, 40%, 52%);
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-family: 'Rubik';
        height: fit-content;

        &:hover {
            background-color: hsl(239, 57%, 85%);
        }
    }
</style>