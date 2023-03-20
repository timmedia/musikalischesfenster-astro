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
  let currentIndex = 0;
  let carousel;
</script>

<div class="rounded-sm overflow-hidden relative shadow-lg">
  <Carousel
    autoplay
    autoplayDuration={5000}
    arrows={true}
    dots={false}
    bind:this={carousel}
    let:showPrevPage
    let:showNextPage
    on:pageChange={(event) => (currentIndex = event.detail)}
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
      <img class="select-none w-full h-full object-cover" src={image} alt="" />
    {/each}
  </Carousel>
</div>
<div class="grid grid-cols-5 gap-2 mt-2 md:gap-5 md:mt-5">
  {#each images as image, index}
    <img
      class={`select-none hover:scale-105 rounded-sm shadow-lg transition-all object-cover h-full w-full cursor-pointer ${
        currentIndex === index ? "grayscale-0" : "grayscale"
      }`}
      src={image}
      alt=""
      on:click={() => {
        carousel.goTo(index);
      }}
      on:keydown={() => {
        carousel.goTo(index);
      }}
    />
  {/each}
</div>
