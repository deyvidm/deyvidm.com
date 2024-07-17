<script>
    import PortfolioCard from "$lib/portfolio-card.svelte";
    import Socials from "$lib/socials.svelte";
</script>

<div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div
        class="container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 p-4  rounded-lg"
    >   
        <!-- <img src="/src/static/pro-blank.png" class="max-w-sm rounded-lg shadow-2xl" /> -->
        <img src="/pro.png" alt="" class="max-w-60 rounded-lg md:max-w-xs" />
        <div class="flex flex-col gap-4">
            <div class="badge badge-outline self-start">Hi, I'm Deyvid! 👋</div>
            <h1 class="text-5xl font-bold md:text-6xl">
                Versatile Backend Developer with a Passion for Precision and
                Leadership.
            </h1>
            <p class="text-xl py-6 md:text-2xl">
                Welcome to my page! Please feel free to explore and reach out if
                you'd like to learn more about me and my work.
            </p>
            <Socials />
        </div>
    </div>

    <div class="divider m-16"></div>

    <!-- <div class="container mx-auto bg-base-200 p-40 rounded-lg mt-10 md:mt-16"></div> -->

    <div class="container flex flex-col mx-auto bg-base-200 mt-10 p-4 rounded-lg md:p-8">
        <div class="container"> 
            <h1 class="mb-4 text-3xl font-extrabold md:text-5xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Recent Projects
                </span>
            </h1>
        </div>

        <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
            <PortfolioCard title="Plantus 🌵" tagline="A snappy mobile-first inventory browser for Terra Greenhouses's latest offerings." image="/projects/plantus-card.png" demoLink="https://plants.deyvid.ca" pageLink="/projects/plantus"/>
            <PortfolioCard title="WhenFight 🏆" tagline="Smoothcomp (BJJ) tournament schedule condensed UI wrapper for competition day." image="/projects/whenfight-card.png" demoLink="https://whenfight.deyvid.ca" pageLink="projects/whenfight"/>
        </div>
    </div>
</div>

