<template>
  <div
    id="header"
    class="h-1/2 pt-4 bg-white bg-header-bg bg-contain bg-no-repeat bg-center"
  >
    <div class="container">
      <nav class="flex justify-between">
        <a href="https://rickandmortyapi.com/"
          ><img
            class="w-10 h-10"
            src="../assets/images/navlogo.jpg"
            alt="Hello"
        /></a>
        <ul class="flex items-center gap-8">
          <li>
            <a
              href="https://rickandmortyapi.com/documentation/"
              class="font-medium text-xl text-gray-900"
              >Docs</a
            >
          </li>
          <li>
            <a
              href="https://rickandmortyapi.com/about/"
              class="font-medium text-xl text-gray-900"
              >About</a
            >
          </li>
          <li class="sm:hidden">
            <a
              href="https://rickandmortyapi.com/support-us/"
              class="font-medium text-sm text-gray-900 uppercase border-solid border-[1px] border-orange-500 py-2 px-4 rounded-lg hover:text-white transition-colors hover:bg-orange-500"
              >Support Us</a
            >
          </li>
          <li class="hidden sm:block">
            <a
              href="https://rickandmortyapi.com/support-us/"
              class="rounded-full"
              ><img
                src="../assets/images/heart-icon.jpg"
                class="h-8 w-8 rounded-lg"
                alt=""
            /></a>
          </li>
        </ul>
      </nav>
      <h1
        class="mt-24 text-8xl font-black text-center text-gray-900 lg:text-7xl xs:mt-12 xs:text-6xl xxs:mt-7"
      >
        The Rick and Morty API
      </h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-header",
});
</script>

<style scoped></style>
