<script>
  import Carousel from "svelte-carousel";
  const images = [
    "images/008.jpg",
    "images/010.jpg",
    "images/009.jpg",
    "images/011.jpg",
    "images/001.jpg",
    "images/002.jpg",
    "images/003.jpg",
    "images/004.jpg",
    "images/005.jpg",
    "images/006.jpg",
  ];
</script>

<Carousel autoplay autoplayDuration={5000}>
  {#each images as image}
    <img src={image} alt="" />
  {/each}
</Carousel>
