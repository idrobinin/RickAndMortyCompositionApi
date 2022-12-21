<template>
  <div
    id="footer"
    class="bg-content-bg text-gray-400 flex flex-col items-center"
  >
    <ul class="flex flex-wrap mb-2 items-center xs:flex-col">
      <li class="inline-block uppercase text-sm font-bold self-center xs:mb-2">
        <a href="https://rickandmortyapi.com/api/character">characters: 826 </a>
      </li>
      <li
        class="ml-7 inline-block uppercase text-sm font-bold self-center xs:ml-0 xs:mb-2"
      >
        <a href="https://rickandmortyapi.com/api/location">locations: 126</a>
      </li>
      <li
        class="ml-7 inline-block uppercase text-sm font-bold self-center xs:ml-0"
      >
        <a href="https://rickandmortyapi.com/api/episode">episodes: 51</a>
      </li>
    </ul>
    <div class="mb-5">
      <a href="https://status.rickandmortyapi.com/">
        <span class="uppercase text-sm font-bold mr-2">server status</span>
        <span class="inline-block rounded-full w-2.5 h-2.5 bg-green-500"></span>
      </a>
    </div>
    <ul class="mb-5">
      <li class="inline-block uppercase text-sm font-bold">
        <a href="https://github.com/afuh/rick-and-morty-api">GitHub</a>
      </li>
      <li class="ml-7 inline-block uppercase text-sm font-bold">
        <a href="https://twitter.com/rickandmortyapi">Twitter</a>
      </li>
      <li class="ml-7 inline-block uppercase text-sm font-bold">
        <a href="https://rickandmortyapi.com/support-us/">Support</a>
      </li>
    </ul>

    <div class="mb-6">
      <a
        class="block px-5 py-1 border border-slate-400 rounded-md"
        href="https://www.netlify.com/"
      >
        <p class="uppercase text-[10px] font-md">deploys by</p>
        <p class="font-bold text-lg text-white">netlify</p>
      </a>
    </div>

    <div>
      <span>❮❯ by</span>
      <a
        class="border-b mx-2 border-orange-400 hover:border-0"
        href="https://github.com/afuh"
      >
        <span class="text-slate-100 hover:text-orange-400 font-medium"
          >Axel Fuhrmann</span
        >
      </a>
      <span>2022</span>
    </div>
  </div>
</template>
