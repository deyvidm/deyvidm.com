<script>
    export let title = "";
    export let tagline = "";
    export let image = "";
    export let link = "";
</script>

<a href={link}>
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body min-h-40">
            <h2 class="card-title">{title}</h2>
            <p>{tagline}</p>
        </div>
        <figure>
            <img src={image} />
        </figure>
    </div>
</a>
