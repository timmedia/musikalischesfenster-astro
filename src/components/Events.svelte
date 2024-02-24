<script lang="ts">
  import EventListing from "./EventListing.svelte";
  import type { ComponentProps } from "svelte";
  /**
   * Convert a date from a string to a JS date object.
   * @param stamp {string} in format "DD.MM.YYYY"
   */
  function date(stamp: string) {
    const [dd, mm, yyyy] = stamp.split(".").map((s) => parseInt(s));
    return new Date(yyyy, mm - 1, dd);
  }
  const today = Date.now();
  interface Termin {
    date: Date;
    title: string;
    content: string;
    cancelled?: boolean;
    flyer?: string;
    flyerURL?: string;
  }

  const termine: ComponentProps<EventListing>["termin"][] = [
    {
      date: date("05.03.2023"),
      title: "11 Uhr, Hospiz Zentralschweiz (Littau)",
      content:
        '"Bach ganz leise"<br />Martin Pirktl, Gitarre; Stefan Müller, Cembalo',
    },
    {
      date: date("16.12.2023"),
      title: "14 Uhr, Hospiz Aargau (Brugg)",
      content:
        '"Siciliano": Adventliche Musik<br />Bernhard Kühne, Blockflöte und Oboe; Stefan Müller, Polygonal',
      flyer: "./flyer_161223.pdf",
    },
    {
      date: date("03.03.2024"),
      title: "17 Uhr, Kath. Kirche Leibstadt",
      content:
        'Benefizkonzert "Bach ganz leise"<br />Martin Pirktl, Gitarre; Stefan Müller, Cembalo und Orgel; Texte Karin Klemm',
      flyer: "./flyer_030324.jpg",
    },
    {
      date: date("02.02.2024"),
      title: "15 Uhr, Alters- und Pflegeheim Döttingen, 2. Stock",
      content:
        '"Somewhere over the rainbow" - Schubert, Wagner und Jazz <br />Susannah Haberfeld, Mezzosopran; Stefan Müller, Harmonium; Texte Peter Zürn',
      flyer: "/flyer_020224.jpg",
    },
    {
      date: date("23.05.2024"),
      title: "19 Uhr, Ref. Kirche Wettingen",
      content: "19:00 Uhr Konzert <br />19:45 Uhr Generalversammlung",
    },
    {
      date: date("04.08.2023"),
      title: "15 Uhr, Alters- und Pflegeheim Döttingen",
      content:
        '"Little Wing": Musik von Brahms, Hendrix und den Beatles. <br />Ueli Angstmann, Saxophon; Stefan Müller, Harmonium; Texte Peter Zürn',
    },
    {
      date: date("09.09.2023"),
      title: "15 Uhr, Palliative Care Spital Zofingen",
      content:
        "Goldbergvariationen und Schubert. Martin Pirktl, Gitarre; Stefan Müller, Cembalo; Texte Karin Klemm",
    },
    {
      date: date("21.10.2023"),
      title: "16 Uhr, Palliative Care Spital Zofingen",
      content:
        '"Music for a while" - Musik von Henry Purcell. Martin Pirktl, Gitarre; Stefan Müller, Virginal',
      flyer: "/flyer_211023.jpg",
    },
    {
      date: date("18.11.2023"),
      title: "16 Uhr, Palliative Care Spital Zofingen",
      content:
        '"Little Wing": Musik von Brahms, Hendrix und den Beatles. Ueli Angstmann, Saxophon; Stefan Müller, Harmonium',
      flyer: "/flyer_181123.jpg",
    },
    {
      date: date("15.12.2023"),
      title: "15 Uhr, Pflegeheim Kehl, Baden, 3. Stock",
      content:
        '"Siziliano": Adventliche Musik des Barocks, Barock-Oboe, Blockflöte und Cembalo; Bernhard Kühne und Stefan Müller; Texte Karin Klemm',
      flyer: "/flyer_151223.jpg",
    },
    {
      date: date("16.12.2023"),
      title: "16 Uhr, Palliative Care Spital Zofingen",
      content:
        '"Siciliano": Adventliche Musik. Bernhard Kühne, Blockflöte und Oboe; Stefan Müller, Polygonal',
      flyer: "/flyer_161223.jpg",
    },
    {
      date: new Date(2018, 11, 4),
      title: "18 Uhr, Hospiz Brugg",
      content: "Bach - ganz leise: Brandenburgisches Konzert Nr. 6",
    },
    {
      date: new Date(2018, 11, 17),
      title: "19 Uhr,  Pflegeheim Zofingen, Palliativabteilung",
      content:
        "Bach - ganz leise: Brandenburgisches Konzert Nr. 6, Inventionen und Praeludien",
    },
    {
      date: new Date(2019, 0, 26),
      title: "16 Uhr, Pflegeheim Zofingen, Palliativabteilung",
      content:
        "Bach - ganz leise: Brandenburgisches Konzert Nr. 3, Beethoven: Adagio",
      flyer: "/Flyer_Zofingen.pdf",
    },
    {
      date: new Date(2019, 2, 10),
      title: "16 Uhr,  Pflegeheim Zofingen, Palliativabteilung",
      content:
        "Sandra Weiss, Saxophon und Fagott; Stefan Müller, Cembalo; von Telemann bis zu den Beatles",
    },
    {
      date: new Date(2019, 4, 5),
      title: "16 Uhr,  Pflegeheim Zofingen, Palliativabteilung",
      content:
        "Ueli Angstmann, Saxophon; Stefan Müller, Harmonium Doors / Led Zeppelin / Mozart",
    },
    {
      date: new Date(2019, 5, 23),
      title: "16 Uhr,  Pflegeheim Zofingen, Palliativabteilung",
      content: "Stefan Müller (Tasten), Martin Pirktl (Gitarre)",
    },
    {
      date: new Date(2019, 4, 6),
      title: "19 Uhr, Ref. Kirchgemeindehaus Neuenhof",
      content:
        "Erste Mitgliederversammlung des Vereins 'Musikalisches Fenster'",
    },
    {
      date: new Date(2019, 9, 12),
      title: "15:30 Uhr, Pflegeheim Zofingen, Palliativabteilung ",
      content: "Stefan Müller, Tasteninstrumente, N.N. (Infos folgen)",
    },
    {
      date: new Date(2019, 10, 3),
      title: "15 Uhr, Hospiz Brugg",
      content:
        "Sandra Weiss, Fagott und Saxophon; Stefan Müller, Tasteninstrument",
    },
    {
      date: new Date(2019, 6, 28),
      title: "15 Uhr, Pflegeheim Zofingen, Palliativabteilung ",
      content: "Daniel Pérez, Bariton und Stefan Müller (Virginal)",
    },
    {
      date: new Date(2019, 8, 1),
      title: "14 Uhr, Pflegeheim Zofingen, Palliativabteilung",
      content:
        "Martin Pirktl (Gitarre) und Stefan Müller (Italienisches Cembalo)",
    },
    {
      date: new Date(2019, 11, 7),
      title: "14:30 Uhr, Palliativstation Zofingen",
      content:
        "Es kommt ein Schiff geladen. Larissa Bretscher, Sporan; Martin Pirktl, GitCembalo und Celesta: Stefan Müller",
    },
    {
      date: new Date(2020, 0, 11),
      title: "14:30 Uhr",
      content:
        "In a sentimental Mood. Ueli Angstmann (Saxophon), Stefan Müller (Tasteninstrumente)",
    },
    {
      date: new Date(2020, 1, 8),
      title: "14:30 Uhr, Palliativstation Zofingen",
      content:
        "Gitarre und Tafelclavier, Bach ganz leise, Martin Pirktl und Stefan Müller",
    },
    {
      date: new Date(2020, 2, 21),
      title:
        "(Verschoben, Infos folgen...) 14:30 Uhr, Palliativstation Zofingen",
      content: "Gesang und Cembalo, Susannah Haberfeld, Stefan Müller",
      cancelled: true,
    },
    {
      date: new Date(2020, 3, 19),
      title: "14:30 Uhr, Palliativstation Zofingen",
      content:
        "Gesang, Klarinette und Gitarren. Anouk Hartmann, Julia Dietrich und Martin Pirktl",
    },
    {
      date: new Date(2020, 4, 31),
      title: "14:30 Uhr, Palliativstation Zofingen",
      content: "Violine und Tafelclavier, Mario Huter und Stefan Müller",
    },
    {
      date: new Date(2020, 2, 27),
      title: "18:00 Uhr, Ref. Kirche Windisch",
      content:
        "Konzert Bach ganz leise. Um 19.00 Uhr, Kirchgemeindehaus ref. Kirche: Öffentliche Mitgliederversammlung musikalisches Fenster",
    },
    {
      date: new Date(2020, 4, 22),
      title: "19:00 Uhr, Hospiz Zentralschweiz, Gasshofstrasse 18, 6014 Littau",
      content:
        'Mit der Hospizseelsorgerin Karin Klemm, Martin Pirktl (Gitarre) und Stefan Müller (Tafelklavier), Duo "Bach-ganz leise".',
    },
    {
      date: new Date(2020, 8, 11),
      title:
        "19:30 Uhr, Katholische Kirche St. Johannes, Chilbert 24, Döttingen",
      content:
        "Werke von J. S. Bach für Blockflöte, Gitarre und Cembalo. Teresa Hackel, Martin Pirktl und Stefan Müller. Texte Karin Klemm.",
    },
    {
      date: new Date(2021, 0, 16),
      title:
        "11:30-12:15 / 12:30-13:15 / 13:30-14:00 Uhr, Reformierte Stadtkirche Aarau",
      content:
        "Bach - ganz leise, Stefan Müller, Tafelclavier und Celesta; Martin Pirktl, Gitarre; Karin Klemm, Texte. Bitte informieren Sie sich ab dem 9. Januar 2021 auf www.musikalisches-fenster.ch, ob das Konzert coronabedingt stattfinden kann oder nicht. Falls nein, können Sie über dieselbe Website von zu Hause aus teilnehmen.",
      flyerURL:
        "https://drive.google.com/file/d/1gVeWByAelEtdOoFYRPPFVCO7aiorI-W1/view?usp=sharing",
      cancelled: true,
    },
    {
      date: new Date(2021, 5, 11),
      title: "18:30 Uhr Generalversammlung, Stadtkirche Brugg",
      content:
        "Am Freitag, den 11. Juni findet die Generalversammlung des Musikalischen Fenster in der reformierten Stadtkirche Brugg statt. Um 18.30 Uhr spielt das Duo Bach-ganz leise, bestehend aus Martin Pirktl, Gitarre und Stefan Müller, Cembalo / Orgel in der Kirche, um 19.30 findet die Generalversammlung im Saal statt. Zum Konzert und zur Generalversammlung sind alle herzlich eingeladen.",
    },
    {
      date: new Date(2021, 7, 27),
      title: "15:30 Uhr, Pflegestation Altersheim Döttingen",
      content: "Stefan Müller, Cembalo",
    },
    {
      date: new Date(2021, 8, 27),
      title: "14:00 Uhr, Pflegeheim St. Bernhard Wettingen",
      content:
        "„Volksmusik und Goldbergvariationen“ <br>Stefan Müller, Cembalo; Karin Klemm, Texte",
    },
    {
      date: new Date(2021, 9, 23),
      title: "16:00 Uhr, Palliativabteilung Spital Zofingen",
      content:
        "Schweizer Volksmusik auf dem Hohner-Harmonium <br>Hochbarocke Variationen von J. Pachelbel <br>Stefan Müller, Tasteninstrumente; Karin Klemm, Texte",
    },
    {
      date: new Date(2021, 11, 12),
      title: "14:30 Uhr, Palliative Care Spital Zofingen",
      content:
        "„Musik für Violine und Virginal von Castello, Fontana und Bach“ <br>Sabine Hochstrasser, Violine; Stefan Müller, Cembalo; Karin Klemm, Texte",
    },
    {
      date: new Date(2021, 11, 18),
      title: "17:00 Uhr, Hospiz Brugg",
      content:
        "„Musik von Telemann, Händel und Bach“ <br>Teresa Hackel, Blockflöten; Stefan Müller, Cembalo",
    },
    {
      date: new Date(2022, 2, 6),
      title: "18:00 Uhr, Kath. Kirche Döttingen",
      content:
        "Wort und Musik zum Krankensonntag <br>Frühbarocke Werke von Fontana und Cestello <br> Sabine Hochstrasser, Barockvioline; Stefan Müller, Chororgel und Cembalo; Karin Klemm, Texte",
    },
    {
      date: new Date(2022, 4, 12),
      title:
        "19:00 Uhr Konzert, 19:40 Uhr Generalversammlung <br>Ökumenisches Zentrum, Hochstrasse 8, Dättwil",
      content:
        "„Bach - ganz leise: Musik für Cembalo und Gitarre“ <br>Martin Pirktl, Gitarre; Stefan Müller, Cembalo; Karin Klemm, Worte aus der Poesie",
    },
    {
      date: new Date(2022, 11, 15),
      title: "20:30 Uhr, Hospiz Brugg",
      content:
        "Adventsmusik des Barock <br>Teresa Hackel, Blockflöte; Martin Pirktl, Gitarre",
    },
    {
      date: new Date(2022, 11, 3),
      title: "15:00 Uhr, Palliative Care Spital Zofingen",
      content:
        "„Auf den Flügeln des Gesanges“ <br>Susannah Haberfeld, Mezzo; Stefan Müller, Cembalo; Karin Klemm, Texte",
    },
    {
      date: new Date(2022, 10, 6),
      title: "14:00 Uhr, Palliative Care Spital Zofingen",
      content:
        "Werke für Cello und Cembalo: „Von Bach bis Schubert“ <br>Daniel Schaerer, Cello; Stefan Müller, Cembalo Karin Klemm, Texte",
    },
    {
      date: new Date(2022, 8, 4),
      title: "14:00 Uhr, Palliative Care Spital Zofingen",
      content:
        "„Bach- ganz leise“: Werke von Kittel und Bach <br>Martin Pirktl, Gitarre; Stefan Müller, Cembalo; Karin Klemm, Texte",
    },
    {
      date: new Date(2023, 0, 30),
      title: "15:00 Uhr, Demenzabteilung St. Bernhard Wettingen",
      flyer: "/flyer_300123.pdf",
      content:
        "„Here Comes the Sun“: Werke von den Beatles und Brahms <br>Ueli Angstmann, Bassklarinette und Saxophon; Stefan Müller, Harmonium",
    },
    {
      date: new Date(2023, 2, 5),
      title: "18:00 Uhr, Kirche Staufberg bei Lenzburg",
      content: "Konzert",
      flyer: "/flyer_050323.jpg",
    },
    {
      date: new Date(2023, 4, 11),
      title: "19:00 Uhr, Kath. Kirche St. Sebastian",
      content: "19:00 Uhr Konzert <br>19:45 Uhr Generalversammlung",
    },
  ];

  const upcoming = termine
    .filter((termin) => termin.date.valueOf() >= today)
    .sort((a, b) => a.date.valueOf() - b.date.valueOf());
  const past = termine
    .filter((termin) => termin.date.valueOf() < today)
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
</script>

<ul>
  {#each upcoming as termin}
    <EventListing {termin} past={false} />
  {/each}
  <hr class="py-3 border-stone-400" />
  {#each past as termin}
    <EventListing {termin} past={true} />
  {/each}
</ul>
