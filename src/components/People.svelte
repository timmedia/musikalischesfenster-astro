<script lang="ts">
  type Person = {
    name: string;
    role?: string;
    position?: string;
    phone?: string;
    mail?: string;
    picture?: string;
  };
  const people: Person[] = [
    {
      name: "Karin Klemm",
      role: "Seelsorgerin",
      position: "Präsidentin",
      // phone: "056 470 35 12",
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
      mail: "martin.pirktl@gmail.com",
      picture: "/martin.jpg",
    },
    {
      name: "Margareta Graf",
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
        class="relative overflow-hidden h-32 w-24 md:w-32 md:h-40 lg:w-48 lg:h-64 sm:mr-3 shadow-lg bg-slate-400"
      >
        {#if person?.picture}
          <img
            class="absolute h-full w-full object-cover rounded-sm"
            src={person.picture}
            alt={person.name}
          />
        {/if}
      </div>
      <div class="flex-shrink">
        <h1 class="text-2xl">{person.name}</h1>
        {#if person?.role}
          <p class="mb-0">{person.role}</p>
        {/if}
        {#if person?.position}
          <p class="mb-1 md:mb-2">{person.position}</p>
        {/if}
        {#if person?.phone}
          <a class="block md:mb-1" href={`tel:${person.phone}`}
            >{person.phone}</a
          >
        {/if}
        {#if person?.mail}
          <a class="block" href={`mailto:${person.mail}`}>{person.mail}</a>
        {/if}
      </div>
    </section>
  {/each}
</div>
