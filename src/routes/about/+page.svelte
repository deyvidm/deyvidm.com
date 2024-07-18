<script>
    export let name = "WhenFight";
    export let description = "WhenFight is a UI wrapper for BJJ tournament software. It provides a seamless user experience for viewing competition and tournament match data, including winners, losers, match dates, times, mat locations, end results, and more.";
    export let mission = "Our mission is to simplify the way BJJ tournaments are managed and viewed, making it easier for participants and spectators to access important match information.";
    export let team = [
      {
        name: "John Doe",
        role: "Founder & Lead Developer",
        bio: "John has a passion for BJJ and software development. With over 10 years of experience in the tech industry, he leads the WhenFight project to bridge the gap between sports and technology."
      },
      {
        name: "Jane Smith",
        role: "UI/UX Designer",
        bio: "Jane is a creative designer with a keen eye for detail. She ensures that WhenFight's interface is intuitive and user-friendly, providing the best possible experience for users."
      }
    ];
  </script>
  
  <main class="container mx-auto p-8">
    <section class="mb-12 text-center">
      <h1 class="text-4xl font-bold mb-4">About {name}</h1>
      <p class="text-lg mb-6">{description}</p>
    </section>
  
    <section class="mb-12">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Our Mission</h2>
          <p>{mission}</p>
        </div>
      </div>
    </section>
  
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4 text-center">Meet the Team</h2>
      <div class="flex flex-wrap justify-center">
        {#each team as member}
          <div class="card w-full md:w-1/3 bg-base-100 shadow-xl m-4">
            <div class="card-body">
              <h3 class="card-title text-xl">{member.name}</h3>
              <p class="text-gray-500 mb-2">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>
  </main>
  