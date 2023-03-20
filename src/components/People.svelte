<script lang="ts">
  type Person = {
    name: string;
    role?: string;
    position: string;
    phone: string;
    mail: string;
    picture: string;
  };
  const people: Person[] = [
    {
      name: "Karin Klemm",
      role: "Hospizseelsorgerin",
      position: "Präsidentin",
      phone: "056 470 35 12",
      mail: "imfluss@karinklemm.ch",
      picture: "/karin.jpg",
    },
    {
      name: "Stefan Müller",
      position: "Musiker",
      phone: "076 388 36 63",
      mail: "stefanmuellerclavier@gmail.com",
      picture: "/stefan.jpg",
    },
    {
      name: "Martin Pirktl",
      position: "Musiker",
      phone: "079 321 18 63",
      mail: "pirktl@bluewin.ch",
      picture: "/martin.jpg",
    },
    {
      name: "Daniela Mustone",
      position: "Krebsliga Aargau ",
      phone: "079 716 42 87",
      mail: "dani.mustone@gmail.com",
      picture: "/daniela.jpg",
    },
    {
      name: "Peter Wendel",
      position: "Kassier",
      phone: "079 277 29 06",
      mail: "p.th.wendel@outlook.com",
      picture: "/peter.jpg",
    },
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 mb-10 gap-4">
  {#each people as person}
    <section
      class="flex flex-row-reverse sm:flex-row justify-between sm:justify-start"
    >
      <div
        class="relative overflow-hidden h-32 w-24 md:w-32 md:h-40 lg:w-48 lg:h-64 sm:mr-3 shadow-lg"
      >
        <img
          class="absolute h-full w-full object-cover rounded-sm"
          src={person.picture}
          alt={person.name}
        />
      </div>
      <div class="flex-shrink">
        <h1 class="text-2xl">{person.name}</h1>
        <p class="mb-0">{person?.role ?? ""}</p>
        <p class="mb-1 md:mb-2">{person.position}</p>
        <a class="block md:mb-1" href={`tel:${person.phone}`}>{person.phone}</a>
        <a class="block" href={`mailto:${person.mail}`}>{person.mail}</a>
      </div>
    </section>
  {/each}
</div>
