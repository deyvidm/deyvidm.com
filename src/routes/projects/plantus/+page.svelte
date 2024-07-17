<script>
    let demoLink = "https://plants.deyvid.ca";
    let gitLInk = "https://github.com/deyvidm/pterra";

    let projectTitle = "Plantus 🌵";
    let projectTagline = "A small UI wrpaper around Terra Greenhouses' latest inventory.";
    let overview = "This project is designed to empower Sales Associates with the latest info on product pricing and inventory. I designed the project after observing Sales Associates struggle to navigate Terra's website while addressing customer needs. The project has received a lot of positive feedback and seen rapid adoption by brand new Seasonal hires.";

    let projectStructure = ""

    let features = [
      "Clutter-free user experience",
      "Mobile-first design for on-the-go use by Sales Associates",
      "Unparalleled performance",
      "Intuitive search functionality and filtering",
      "Product links to more in-depth information",
      "Feedback page with optional contact form",
    ];
    let technologies = [
      "AWS (EC2)",
      "Docker",
      "docker-compose",
      "Nginx",
      "GoLang Server",
      "Asynq Task Queue (Golang)",
      "SQLite",
      "SvelteKit",
      "Tailwind CSS",
      "DaisyUI",
    ];
    let roadmap = [
      { phase: "Milestone 1", details: "Automated scraping runs of Terra Greenhouses' inventory. Currently each run is configured and launched manually." },
      { phase: "Milestone 1.1", details: "Scraper integration: Launch a scraper run (live inventory update) from the frontend." },
      { phase: "Milestone 2", details: "Automated container CI/CD pipeline. Current deployment require manual approval." },
      { phase: "Milestone 3", details: "Frontend GPT integration: upload plant image and automatically navigate to product page." },
      { phase: "Milestone 4", details: "GPT Scraper integration: provide off-season care instructions tailored to local seasonal conditions." },
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
      
      <div class="mb-12 card bg-base-100">
        <div class="card-body">
            <div class="opacity-90 flex justify-center gap-4 mt-4 lg:ml-4 space-x-4">
                <a href={demoLink} class="btn btn-outline bg-green-500 text-white hover:bg-green-700">Live Demo</a>
                <a href={gitLInk} class="btn btn-outline text-black hover:bg-gray-700">Github Link</a>
            </div>
        </div>  
      </div>

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl">Overview</h2>
          <p>{overview}</p>
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
  
    <div class="divider"></div>

    <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Project Structure</h2>
        <p>The technological architecture of this project is built around three main components: the SvelteKit server, the Golang backend server, and the Golang task queue scraper. Each of these components plays a crucial role in ensuring the project runs smoothly and efficiently.</p>
    
        <div class="my-8">
          <!-- Space for Diagram -->
          <div class="border rounded-lg p-4 bg-gray-100">
            <img src="/plantus-diagram.png" alt="diagram">
          </div>
        </div>
    
        <div class="card bg-base-100 shadow-xl mb-8">
          <div class="card-body">
            <h3 class="card-title text-xl">SvelteKit Server</h3>
            <p>The SvelteKit server handles the frontend, providing a dynamic and responsive user interface. It interacts with the backend server to fetch and display data to users in real-time.</p>
            <ul class="list-disc ml-5 mt-2">
              <li><strong>Technology:</strong> <a href="https://kit.svelte.dev/" class="text-blue-500 underline">SvelteKit</a></li>
              <li><strong>Role:</strong> Manages client-side rendering and routing.</li>
              <li><strong>Features:</strong>
                <ul class="list-disc ml-5">
                  <li>Dynamic and reactive user interface</li>
                  <li>Efficient state management</li>
                  <li>Easy integration with the backend via API calls</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    
        <div class="card bg-base-100 shadow-xl mb-8">
          <div class="card-body">
            <h3 class="card-title text-xl">Golang Backend Server</h3>
            <p>The Golang backend server is responsible for handling business logic, managing the database, and serving API requests. It acts as the core engine driving the application's functionality.</p>
            <ul class="list-disc ml-5 mt-2">
              <li><strong>Technology:</strong> <a href="https://golang.org/" class="text-blue-500 underline">Golang</a></li>
              <li><strong>Role:</strong> Processes client requests and manages data.</li>
              <li><strong>Features:</strong>
                <ul class="list-disc ml-5">
                  <li>High performance and concurrency</li>
                  <li>RESTful API design</li>
                  <li>Secure and scalable architecture</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    
        <div class="card bg-base-100 shadow-xl mb-8">
          <div class="card-body">
            <h3 class="card-title text-xl">Golang Task Queue Scraper</h3>
            <p>The task queue scraper, built with Golang, runs in the background to scrape data from various sources and feed it into the system. It uses a task queue to manage and process scraping tasks efficiently.</p>
            <ul class="list-disc ml-5 mt-2">
              <li><strong>Technology:</strong> <a href="https://github.com/hibiken/asynq" class="text-blue-500 underline">Asynq</a></li>
              <li><strong>Role:</strong> Asynchronous task processing for web scraping.</li>
              <li><strong>Features:</strong>
                <ul class="list-disc ml-5">
                  <li>Efficient task scheduling and execution</li>
                  <li>Fault-tolerant and scalable</li>
                  <li>Seamless integration with the backend server</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-xl">Links to Technologies</h3>
            <ul class="list-disc ml-5 mt-2">
              <li><a href="https://kit.svelte.dev/" class="text-blue-500 underline">SvelteKit</a></li>
              <li><a href="https://golang.org/" class="text-blue-500 underline">Golang</a></li>
              <li><a href="https://github.com/hibiken/asynq" class="text-blue-500 underline">Asynq</a></li>
            </ul>
          </div>
        </div>
      </section>

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
  
    <section class="mb-12">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl">Contact</h2>
          <p>If you have any questions or would like to discuss this project further, please don't hesitate to contact me at <a href="mailto:your-email@example.com" class="text-blue-500 underline">deyvidmitkov@gmail.com</a>.</p>
        </div>
      </div>
    </section>
  </main>
  