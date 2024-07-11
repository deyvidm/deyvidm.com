<script>
    export let title = "";
    export let tagline = "";
    export let image = "";
    export let link = "";
</script>

<a href={link}>
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">{title}</h2>
            <div class="divider"></div>
            <p>{tagline}</p>
        </div>
        <figure class="p-4">
            <img class="rounded-lg w-full" src={image} />
        </figure>
    </div>
</a>
