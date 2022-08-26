<script lang="ts">
    import type { Comment } from "models";
    import { chat } from 'shared/store';
    import Card from "./Card.svelte";
    import Icon from "./Icon.svelte";
    import Score from "./Score.svelte";
    import InputText from "./InputText.svelte";

    export let comment: Comment;
    
    let reply: boolean = false;
</script>

<div class="comment">
    <Card {...$$restProps}>
        <Score {comment} />
        <div class="content">
            <div class="header">
                <div class="user">
                    <img class="avatar" src={comment.user.image.png} alt={comment.user.username} />
                    <span class="name">{comment.user.username}</span>
                    {#if comment.user.username === $chat.currentUser.username}
                        <span class="chip">you</span>
                    {/if}
                    <span class="date">{comment.createdAt}</span>
                </div>
                <button class="reply" on:click={() => reply = !reply}>
                    <Icon class="icon" src="icon-reply" />
                    Reply
                </button>
            </div>
            <p>{comment.content}</p>
        </div>
    </Card>
    {#if reply} 
        <Card class="replyTo">
            <InputText isReply />
        </Card> 
    {/if}
    {#if !!comment.replies}
        {#each comment.replies as reply (reply.id)}
            <svelte:self comment={reply} class="reply"/>
        {/each}
    {/if}
</div>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        padding-left: 1rem;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 1rem;

            .user {
                display: flex;
                align-items: center;

                *:not(:last-child) {
                    margin-right: 1rem;
                }

                .name {
                    color: hsl(212, 24%, 26%);
                    font-weight: 700;
                }

                .date {
                    font-size: 16px;
                    font-weight: 400;
                    color: hsl(211, 10%, 45%);
                }
            }

            .reply {
                display: flex;
                justify-content: center;
                align-items: center;
                color: hsl(238, 40%, 52%);
                font-weight: 700;

                &:hover {
                    color: hsl(239, 57%, 85%);

                    > :global(svg > path) {
                        fill: hsl(239, 57%, 85%);
                    }
                }

                > :global(svg) {
                    margin-right: 0.5rem;
                }
            }
        }
    }
</style>