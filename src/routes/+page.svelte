<script>
    import PortfolioCard from "$lib/portfolio-card.svelte";
    import Socials from "$lib/socials.svelte";
</script>

<div class="container mx-auto">
    <div class="container flex justify-around gap-8 items-center p-4 bg-base-200 rounded-lg">
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

    <!-- <div class="container mx-auto bg-base-300 mt-10 p-4 rounded-lg">
        <h1>Portfolio</h1>
        <PortfolioCard />
    </div> -->
</div>
