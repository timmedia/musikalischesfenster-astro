<script lang="ts">
  interface Termin {
    date: Date;
    title: string;
    content: string;
    cancelled?: boolean;
    flyer?: string;
    flyerURL?: string;
  }
  export let termin: Termin;
  export let past: boolean;
</script>

<li class="mb-5 {past ? 'text-stone-500' : 'text-stone-800'}">
  <h1 class="md:text-xl text-inherit {termin?.cancelled ? 'line-through' : ''}">
    <strong class="font-semibold text-inherit">
      {[
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
      ][termin.date.getDay()]}

      {termin.date.getDate()}. {[
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ][termin.date.getMonth()]}
      {termin.date.getUTCFullYear()},
    </strong>
    {@html termin.title}:
  </h1>
  <p>{@html termin.content}</p>
  {#if termin?.flyer}
    <p>
      <a
        href={termin.flyer}
        download={termin.flyer}
        target="_blank"
        class="text-blue-400 underline font-bold"
      >
        Flyer
      </a>
    </p>
  {/if}
  {#if termin?.flyerURL}
    <p>
      <a href={termin.flyerURL} target="_blank" class="text-blue-400 underline"
        >Flyer</a
      >
    </p>
  {/if}
</li>
