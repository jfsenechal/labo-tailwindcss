<template>
  <div class="col-start-1 col-end-6 row-start-2 row-end-3 h-96 bg-no-repeat bg-bottom bg-hero-pattern bg-cover">
    <div class="flex mx-auto justify-center flex-col pt-12 w-1/2 text-center">
      <h1 class="text-2xl	pb-12 text-white font-extrabold">Bienvenue à Marche-en-Famenne</h1>
      <form action="/" method="get" class="">
        <label>
          <input type="search" name="s" placeholder="Que cherchez vous ?" class="pl-4 w-134 rounded-2xl h-12 focus:ring-blue-400" autocomplete="off">
        </label>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZoneSearch"
}
</script>
