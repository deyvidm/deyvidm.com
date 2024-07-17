<script>
    export let projectTitle = "Plantus 🌵";
    export let projectTagline = "A small UI wrpaper around Terra Greenhouses' latest inventory.";
    export let overview = "This project is designed to empower Sales Associates with the latest info on product pricing and inventory. I designed the project after observing Sales Associates struggle to navigate Terra's website while addressing customer needs. The project has received a lot of positive feedback and seen rapid adoption by brand new Ssasonal hires.";
    export let features = [
      "Clutter-free user experience",
      "Mobile-first design for on-the-go use by Sales Associates",
      "Unparalleled performance",
      "Intuitive search functionality and filtering",
      "Product links to more in-depth information",
    ];
    export let technologies = [
      "Svelte",
      "Tailwind CSS",
      "DaisyUI",
      "GoLang (Asynq)",
      "SQLite"
    ];
    export let roadmap = [
      { phase: "Phase 1", details: "Initial project setup and basic features implementation." },
      { phase: "Phase 2", details: "Adding user authentication and profile management." },
      { phase: "Phase 3", details: "Integrating real-time data updates and notifications." },
      { phase: "Phase 4", details: "Optimizing performance and preparing for deployment." }
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
          <div class="flex flex-wrap space-x-2">
            {#each technologies as tech}
              <span class="badge badge-primary">{tech}</span>
            {/each}
          </div>
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
          <p>If you have any questions or would like to discuss this project further, please don't hesitate to contact me at <a href="mailto:your-email@example.com" class="text-blue-500 underline">your-email@example.com</a>.</p>
        </div>
      </div>
    </section>
  </main>
  