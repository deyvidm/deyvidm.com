<script>
    import PortfolioCard from "$lib/portfolio-card.svelte";
    import Socials from "$lib/socials.svelte";
</script>

<div class="container mx-auto">
    <div
        class="container flex justify-around gap-8 items-center p-4 bg-base-200 rounded-lg"
    >
        <!-- <img src="/src/static/pro-blank.png" class="max-w-sm rounded-lg shadow-2xl" /> -->
        <img src="/pro.png" alt="" class="max-w-60 rounded-lg" />
        <div class="">
            <div class="badge badge-outline">Hi, I'm Deyvid! 👋</div>
            <h1 class="text-5xl font-bold">
                Versatile Backend Developer with a Passion for Precision and
                Leadership.
            </h1>
            <p class="text-xl py-6">
                Welcome to my page! Please feel free to explore and reach out if
                you'd like to learn more about me and my work.
            </p>
            <Socials />
        </div>
    </div>
    <div class="container mx-auto bg-base-200 p-40 rounded-lg mt-10"></div>

    <div class="contaienr flex flex-col mx-auto bg-base-200 mt-10 p-4 rounded-lg ">
        
        <div class="container"> 
            <h1 class="mb-4 text-3xl font-extrabold">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Recent Projects
                </span>
            </h1>
        </div>

        <div class="container flex flex-wrap justify-between">
            <PortfolioCard title="Portfolio" />
            <PortfolioCard title="Plan" />
            <PortfolioCard title="Plang" />
        </div>
    </div>
</div>
