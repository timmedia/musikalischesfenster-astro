<script>
  const tracks = [
    {
      name: "Praeludium B-Dur WK I BWV 866",
      file: "02 Praeludium B-Dur WK I BWV 866.mp3",
    },
    {
      name: "Canon a 2 in unisono",
      file: "03 Canon a 2 in unisono.mp3",
    },
    {
      name: "Canon a 2 per Augmentationem",
      file: "05 Canon a 2 per Augmentationem.mp3",
    },
    {
      name: "Goldbergvariationen Canone alla Terza BWV 988",
      file: "10 Goldbergvariationen Canone alla Terza BWV 988.mp3",
    },
    {
      name: "Triosonate I_ Largo",
      file: "12 Triosonate I_ Largo.mp3",
    },
    {
      name: "Goldbergvariationen Aria",
      file: "13 Goldbergvariationen Aria BWV 988.mp3",
    },
    {
      name: "Sonate F-Dur  Allegro e moderato",
      file: "14 Sonate F-Dur  Allegro e moderato Falck 10.mp3",
    },
    {
      name: "Bach Triosonate c-Moll musikalisches Opfer II Allegro",
      file: "Bach Triosonate c-Moll musikalisches Opfer II Allegro 256kbit.mp3",
    },
    {
      name: "Praeludium c-Moll Bach Moscheles",
      file: "Praeludium c-Moll Bach Moscheles mp3 320 kbit.mp3",
    },
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {#each tracks as track}
    <div class="flex flex-col justify-between">
      <p class="text-center text-sm">{track.name}</p>
      <audio class="w-full" controls>
        <source src="music/{track.file}" type="audio/mp3" />
        <p><a href="music/{track.file}">Datei Herunterladen</a></p>
      </audio>
    </div>
  {/each}
</div>
