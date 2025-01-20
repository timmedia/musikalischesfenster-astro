<script>
  const images = [
    ["/images/010.jpg", "Stefan und Martin"],
    ["/images/008.jpg", "Martin und Stefan"],
    ["/images/009.jpg", "Martin und Stefan"],
    ["/images/011.jpg", "Stefan und Martin"],
    ["/images/001.jpg", "Stefan"],
    ["/images/002.jpg", "Stefan und Martin"],
    ["/images/003.jpg", "Zuhörer"],
    ["/images/004.jpg", "Stefan"],
    ["/images/005.jpg", "Spital"],
    ["/images/006.jpg", "Musiker"],
    ["/images/012.jpg", "Stefan"],
    ["/images/013.jpg", "Zuhörer"],
    ["/images/014.jpg", "Stefan"],
  ];
  let currentIndex = 0;
  const carouselTimer = setInterval(
    () => (currentIndex = (currentIndex + 1) % images.length),
    5000
  );
</script>

<div class="rounded-sm overflow-hidden relative shadow-lg">
  <img
    class="select-none w-full h-full aspect-video object-cover"
    src={images[currentIndex][0]}
    alt={images[currentIndex][1]}
  />
</div>
<div class="grid grid-cols-5 gap-2 mt-2 md:gap-5 md:mt-5">
  {#each images as [image, alt], index}
    <img
      class={`select-none hover:scale-105 rounded-sm shadow-lg transition-all object-cover h-full w-full cursor-pointer ${
        currentIndex === index ? "grayscale-0" : "grayscale"
      }`}
      src={image}
      alt=""
      on:click={() => {
        currentIndex = index;
        clearInterval(carouselTimer);
      }}
      on:keydown={() => {
        currentIndex = index;
        clearInterval(carouselTimer);
      }}
    />
  {/each}
</div>
