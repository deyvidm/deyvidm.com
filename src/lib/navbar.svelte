<script>
  let menuOpen = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a class="btn btn-ghost outline outline-offset-[2px] normal-case text-xl " href="/"> DM </a>
  </div>
  <div class="navbar-end">
    <div class="dropdown lg:hidden">
      <label tabindex="0" class="btn btn-ghost btn-circle" on:click={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </label>
      {#if menuOpen}
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/about">About Me</a></li>
          <li>
            <details>
              <summary>Projects</summary>
              <ul class="p-2">
                <li><a href="/projects/plantus">Plantus</a></li>
                <li><a href=/projects/whenfight>WhenFight</a></li>
              </ul>
            </details>
          </li>
        </ul>
      {/if}
    </div>
    <ul class="menu menu-horizontal px-1 hidden lg:flex">
      <li><a href="/about">About Me</a></li>
      <li>
        <details>
          <summary>Projects</summary>
          <ul class="p-2">
            <li><a href="/projects/plantus">Plantus</a></li>
            <li><a href=/projects/whenfight>WhenFight</a></li>
          </ul>
        </details>
      </li>
    </ul>
    <label class="flex cursor-pointer gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        />
      </svg>
      <input type="checkbox" value="dark" class="toggle theme-controller" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  </div>
</div>
