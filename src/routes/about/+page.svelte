<script>
  import { onMount } from 'svelte';

  let modalOpen = false;
  let modalImageSrc = '';

  function openModal(src) {
    modalImageSrc = src;
    modalOpen = true;
  }

  function closeModal() {
    modalOpen = false;
    modalImageSrc = '';
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }


  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });


</script>
  
  <main class="container mx-auto p-8">
    <section class="mb-12 text-center">
      <h1 class="text-4xl font-bold mb-4">Deyvid Mitkov</h1>
      <h3 class="text-xl italic text-gray-500 mb-6">Backend Developer, Certified sudoer</h3>
    </section>
  
    <section class="mb-12">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">The Mission</h2>
          <p>To use my skills in constructing robust scalable data pipelines to solve problems I encounter in my daily life and the lives of others around me. I take deep joy in producing high quality work that helps reflects my team's hallmark of efficiency, dependability, and commitment to our client's needs and goals. </p> 
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">The Person</h2>
          <p class="text-lg mb-6">I can lift a fully-grown horse above my head, and I can hold my breath for ten minutes. To settle a a wager, I once ate a pound of J.B. Winkle's strongest badger poison and then ran a mile barefoot. I am immune to anasthetic, and I can see for two miles unaided by a lens.</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Outisde of Work</h2>
          <p class="text-lg mb-6">Love to scope out the freshest, warmest sunsets with my dog Finn. We love finding cool flowers and neat bugs.</p>
          
          <div class="flex flex-col items-center gap-4">
            <!-- First Row -->
            <div class="w-full h-96">
              <img src="/about_pics/finn.jpg" alt="dog" class="rounded-lg shadow-md w-full h-full object-cover cursor-pointer" on:click={() => openModal('/about_pics/finn.jpg')} />
            </div>
          
            <!-- Second Row -->
            <div class="flex w-full gap-4 h-64">
              <img src="/about_pics/sunset-1.jpg" alt="sunset 1" class="rounded-lg shadow-md w-1/2 h-full object-cover cursor-pointer" on:click={() => openModal('/about_pics/sunset-1.jpg')} />
              <img src="/about_pics/sunset-2.jpg" alt="sunset 2" class="rounded-lg shadow-md w-1/2 h-full object-cover cursor-pointer" on:click={() => openModal('/about_pics/sunset-2.jpg')} />
            </div>
          
            <!-- Third Row -->
            <div class="flex w-full gap-4 h-64">
              <img src="/about_pics/bego.jpg" alt="begonia" class="rounded-lg shadow-md w-1/3 h-full object-cover cursor-pointer" on:click={() => openModal('/about_pics/bego.jpg')} />
              <img src="/about_pics/hydra.jpg" alt="hydrangea" class="rounded-lg shadow-md w-1/3 h-full object-cover cursor-pointer" on:click={() => openModal('/about_pics/hydra.jpg')} />
              <img src="/about_pics/grasshopper.jpg" alt="iris" class="rounded-lg shadow-md w-1/3 h-full object-cover cursor-pointer" on:click={() => openModal('/about_pics/grasshopper.jpg')} />
            </div>
          </div>
          
          {#if modalOpen}
          <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" on:click={closeModal}>
            <div class="bg-white rounded-lg shadow-lg p-1  max-w-7xl  w-full mx-4" on:click|stopPropagation>
              <button class="btn btn-sm btn-circle absolute right-2 top-2" on:click={closeModal}>✕</button>
              <img src={modalImageSrc} alt="Full resolution" class="rounded-lg mx-auto" />
            </div>
          </div>
          {/if}

      </div>
    </section>

  </main>
  