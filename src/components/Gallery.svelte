<script>
  import Carousel from "svelte-carousel";
  const images = [
    "/images/008.jpg",
    "/images/010.jpg",
    "/images/009.jpg",
    "/images/011.jpg",
    "/images/001.jpg",
    "/images/002.jpg",
    "/images/003.jpg",
    "/images/004.jpg",
    "/images/005.jpg",
    "/images/006.jpg",
  ];
</script>

<div class="rounded-sm overflow-hidden relative">
  <Carousel
    autoplay
    autoplayDuration={5000}
    arrows={true}
    dots={false}
    let:showPrevPage
    let:showNextPage
  >
    <div
      slot="prev"
      role="button"
      on:click={showPrevPage}
      on:keypress={showPrevPage}
      class="absolute h-full w-16 text-white font-black text-4xl bg-gradient-to-l to-[rgba(0,0,0,0.3)] from-transparent left-0 flex flex-col justify-center items-center cursor-pointer z-10 select-none"
    >
      ⟨
    </div>
    <div
      slot="next"
      role="button"
      on:click={showNextPage}
      on:keypress={showNextPage}
      class="absolute h-full w-16 text-white font-black text-4xl bg-gradient-to-l from-[rgba(0,0,0,0.3)] to-transparent right-0 flex flex-col justify-center items-center cursor-pointer z-10 select-none"
    >
      ⟩
    </div>

    {#each images as image}
      <div class="w-full max-h-[650px]">
        <img class="select-none" src={image} alt="" />
      </div>
    {/each}
  </Carousel>
</div>
