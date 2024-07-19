<script>
let demoLink = "https://whenfight.deyvid.ca";
let gitLInk = "https://github.com/deyvidm/whenfight.ca";

let projectTitle = "WhenFight 🏆";
let projectTagline = "A UI wrapper for Smoothcomp (BJJ); tracking BJJ tournament matchches on competition day. ";

let features = [
    "Significantly improved mobile user experience with minimal performance overhead",
    "Selectable competitor schedule and history for each match",
    "Toggle visibility of finished matches",
];
let technologies = [
    "AWS (EC2)",
    "Docker",
    "docker-compose",
    "Nginx",
    "GoLang Server",
    "Asynq Task Queue (Golang)",
    "Redis",
    "SvelteKit",
    "Tailwind CSS",
    "DaisyUI",
];
let roadmap = [{
        phase: "Milestone 1",
        details: "Adjustable tournament selection: Currently preconfigured for 2023"
    },
    {
        phase: "Milestone 1.1",
        details: "Dynamic club selection"
    },
    {
        phase: "Milestone 2",
        details: "Container restructure: reduce exposed services and utilize internal docker networks"
    },
    {
        phase: "Milestone 2.1",
        details: "Automated CI/CD pipeline. Current deployments require manual approval."
    },
];
</script>
  
  <style>
.roadmap-item {
    @apply mb-4 p-4 bg-gray-100 rounded-lg shadow-md;
}
</style>

<main class="container mx-auto p-8">
    <section class="mb-12">
        <h1 class="text-4xl font-bold text-center mb-4">{projectTitle}</h1>
        <p class="text-xl text-center mb-6">{projectTagline}</p>
        <section class="mb-12">
            <div class="mb-12 card bg-base-100">
                <div class="card-body">
                    <div class="opacity-90 flex justify-center gap-4 mt-4 lg:ml-4 space-x-4">
                        <a href={demoLink} class="btn btn-outline bg-green-500 text-white hover:bg-green-700">Live Demo</a>
                        <a href={gitLInk} class="btn btn-outline text-black hover:bg-gray-700">Github Link</a>
                    </div>
                </div>
            </div>
        </section>
    </section>

    <div role="tablist" class="tabs tabs-lifted">
        <input type="radio" name="whenfight_tabs" role="tab" class="tab" aria-label="Overview"  checked="checked" />

        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">

            <section class="mb-12">

                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-2xl">Overview</h2>
                        <p><a href="https://smoothcomp.com/en">Smoothcomp</a>  is the leading tournament software for organizing combat sports. WhenFight is a UI wrapper for Smoothcomp (BJJ) that enables users to track grappling matches on tournament day for any participant of  <a href="https://www.currentbjj.com/" class="text-blue-500 underline">CurrentBJJ</a></p>
                    </div>
                </div>
            </section>

            <section class="mb-12">
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-2xl">Features</h2>
                        <ul class="list-disc ml-5">
                            {#each features as feature}
                            <li>{feature}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </section>

        </div>

        <input type="radio" name="whenfight_tabs" role="tab" class="tab" aria-label="Tech" />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <section class="mb-12">
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-2xl">Technologies Used</h2>
                        <div class="flex flex-wrap space-x-2 mt-4">
                            {#each technologies as tech}
                            <span class="badge badge-primary m-1">{tech}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold mb-4">Technological Structure</h2>
                <p>The technological architecture of the `WhenFight` project is built around three main components: the SvelteKit frontend, the Golang backend, and the Redis data cache. Each component plays a crucial role in providing a seamless user experience for managing and viewing BJJ tournament data.</p>

                <div class="my-8">
                    <!-- Space for Diagram -->
                    <div class="border rounded-lg p-4 bg-gray-100">
                        <img src="/whenfight-diagram.png" alt="diagram">
                    </div>
                </div>

                <div role="tablist" class="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_3" role="tab" class="tab" aria-label="SvelteKit" checked="checked" />

                    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div class="container mx-auto">
                            <h3 class="card-title text-xl">SvelteKit Frontend</h3>
                            <p>The SvelteKit frontend queries the backend for competition and tournament match data, including information about winners, losers, match dates, times, mat locations, and end results.</p>
                            <ul class="list-disc ml-5 mt-2">
                                <li><strong>Technology:</strong> <a href="https://kit.svelte.dev/" class="text-blue-500 underline">SvelteKit</a></li>
                                <li><strong>Role:</strong> Manages the user interface and client-side rendering.</li>
                                <li><strong>Features:</strong>
                                    <ul class="list-disc ml-5">
                                        <li>Dynamic and responsive user interface</li>
                                        <li>Fetches match data from the backend in real-time</li>
                                        <li>Displays comprehensive tournament details</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_3" role="tab" class="tab" aria-label="GoLang" />
                    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div class="container mx-auto">
                            <h3 class="card-title text-xl">Golang Backend</h3>
                            <p>The Golang backend uses Redis as a data cache. It first checks Redis for participant data and, if the data is missing, it scrapes information from Smoothcomp.</p>
                            <ul class="list-disc ml-5 mt-2">
                                <li><strong>Technology:</strong> <a href="https://golang.org/" class="text-blue-500 underline">Golang</a></li>
                                <li><strong>Role:</strong> Handles business logic, data retrieval, and interaction with the data cache.</li>
                                <li><strong>Features:</strong>
                                    <ul class="list-disc ml-5">
                                        <li>High performance and concurrency</li>
                                        <li>Checks Redis cache before scraping data</li>
                                        <li>Scrapes data from Smoothcomp if not found in Redis</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_3" role="tab" class="tab" aria-label="Redis"  />

                    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div class="container mx-auto">
                            <h3 class="card-title text-xl">Redis Data Cache</h3>
                            <p>Redis is used to store match participant data for 10 seconds. When the data expires, it is expunged from the cache.</p>
                            <ul class="list-disc ml-5 mt-2">
                                <li><strong>Technology:</strong> <a href="https://redis.io/" class="text-blue-500 underline">Redis</a></li>
                                <li><strong>Role:</strong> Provides a temporary data cache for match participant data.</li>
                                <li><strong>Features:</strong>
                                    <ul class="list-disc ml-5">
                                        <li>Stores data temporarily for quick retrieval</li>
                                        <li>Expunges data after 10 seconds</li>
                                        <li>Reduces the load on the backend and Smoothcomp</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
        <input type="radio" name="whenfight_tabs" role="tab" class="tab" aria-label="Roadmap"  />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <section class="mb-12">
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-2xl">Roadmap</h2>
                        {#each roadmap as item}
                        <div class="roadmap-item">
                            <h3 class="text-lg font-semibold">{item.phase}</h3>
                            <p>{item.details}</p>
                        </div>
                        {/each}
                    </div>
                </div>
            </section>
        </div>
    </div>

    <div class="mt-40 card bg-base-100 ">
        <div class="card-body">
            <h2 class="card-title text-xl">Contact</h2>
            <p>If you have any questions or would like to discuss this project further, please don't hesitate to contact me at <a href="mailto:your-email@example.com" class="text-blue-500 underline">deyvidmitkov@gmail.com</a>.</p>
        </div>
    </div>
</main>
