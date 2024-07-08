<script>
    export let title = "";
    export let tagline = "";
    export let image = "";
    export let link = "";
</script>

<a href={link}>
    <div class="card bg-base-100 w-96 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">{title}</h2>
            <p>{tagline}</p>
        </div>
        <figure>
            <img src={image} />
        </figure>
    </div>
</a>
