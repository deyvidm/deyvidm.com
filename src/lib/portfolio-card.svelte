<script>
    export let title = "";
    export let tagline = "";
    export let image = "";
    export let demoLink = "";
    export let pageLink = "";
</script>



<div class="card lg:card-side bg-base-100 shadow-xl p-6 rounded-lg flex flex-col lg:flex-row">
    <figure class="w-full lg:w-1/3 mb-4 lg:mb-0">
        <img alt="product-img" class="rounded-lg w-full" src={image} />
    </figure>
    <div class="flex flex-col justify-between w-full lg:w-2/3">
        <div class="card-body p-4 ">
            <h2 class="card-title text-xl font-semibold mb-2">{title}</h2>
            <p class="text-gray-600 mb-4">{tagline}</p>
        </div>
        <div class="opacity-90 flex justify-center lg:justify-start mt-4 lg:ml-4 space-x-4">
            <a href={demoLink} class="btn bg-green-500 text-white hover:bg-green-700">Live Demo</a>
            <a href={pageLink} class="btn bg-orange-500 text-white hover:bg-orange-700">Learn More</a>
        </div>
    </div>
</div>





