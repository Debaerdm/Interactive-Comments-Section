<script lang="ts">
    import type { Comment } from "models";
    import { chat } from "shared/store";
    import Icon from "./Icon.svelte";

    export let comment: Comment;
</script>

<div class="score">
    <button on:click={() => ++comment.score}>
        <Icon class="icon" src="icon-plus" />
    </button>
    <span class="result">{comment.score}</span>
    <button on:click={() => --comment.score}>
        <Icon class="icon" src="icon-minus" />
    </button>
</div>

<style lang="scss">
    .score {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        background-color: hsl(228, 33%, 97%);
        border-radius: 10px;

        .result {
            margin-block: 0.5rem;
            color: hsl(238, 40%, 52%);
            font-weight: 700;
            text-align: center;
            width: 16px;
        }
    }
</style>