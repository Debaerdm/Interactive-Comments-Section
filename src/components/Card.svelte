<li class="card {$$restProps.class ?? ''}">
    <div class="item">
        <slot />
    </div>
</li>

<style lang="scss">
    .card {
        list-style: none;
    }
    
    .item{
        display: flex;
        align-items: center;
        background-color: hsl(0, 0%, 100%);
        border-radius: 10px;
        padding: 1rem;
    }

    .reply, .replyTo {
        border-left: 2px solid hsl(223, 19%, 93%);
        padding-left: 2rem;
        margin-left: 2rem;
    }

    .replyTo {

    }

    .reply {
        padding-top: 1rem;
    }
</style>