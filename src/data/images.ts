// import joe from "/images/About/joseph-perkins-profile.jpeg";
import unapologetic from "/images/Portfolio/unapologetic.webp";
import unpublished from "/images/Portfolio/unpublished.webp";
import stoolSketch from "/images/Portfolio/stool-sketch.webp";
import star1 from "/images/Portfolio/star-1.webp";
import star2 from "/images/Portfolio/star-2.webp";
import star3 from "/images/Portfolio/star-3.webp";
import europeanGoJournal from "/images/Portfolio/european-go-journal.webp";
import monocle1 from "/images/Portfolio/monocle-1.webp";
// import monocle2 from "/images/Portfolio/monocle-2.png";
import pottery from "/images/Portfolio/pottery.webp";
import dogs from "/images/Portfolio/dogs.webp";

export interface ImageData {
  id: number;
  title: string;
  subtitle: string;
  src: string;
}

export const images: ImageData[] = [
  // {
  //   id: 1,
  //   title: "Star 2",
  //   subtitle: "Peaceful morning in the Alps",
  //   src: joe
  // },
  {
    id: 2,
    title: "Unapologetic",
    subtitle: "Crashing waves at sunset",
    src: unapologetic,
  },
  {
    id: 3,
    title: "Unpublished",
    subtitle: "Mystical woodland trail",
    src: unpublished,
  },
  {
    id: 4,
    title: "stoolSketch",
    subtitle: "Golden sands of the Sahara",
    src: stoolSketch,
  },
  {
    id: 5,
    title: "City Lights",
    subtitle: "Urban nightscape",
    src: star1,
  },
  {
    id: 6,
    title: "Autumn Colors",
    subtitle: "Fall foliage in the park",
    src: star2,
  },
  {
    id: 7,
    title: "Arctic Aurora",
    subtitle: "Northern lights display",
    src: star3,
  },
  {
    id: 8,
    title: "European Go Journal",
    subtitle: "Paradise shore",
    src: europeanGoJournal,
  },
  {
    id: 9,
    title: "Canyon Vista",
    subtitle: "Dramatic rock formations",
    src: monocle1,
  },
  {
    id: 10,
    title: "Canyon Vista",
    subtitle: "Dramatic rock formations",
    src: dogs,
  },
  {
    id: 11,
    title: "Canyon Vista",
    subtitle: "Dramatic rock formations",
    src: pottery,
  },
  // {
  //   id: 2,
  //   title: "Unapologetic",
  //   subtitle: "Crashing waves at sunset",
  //   src: unapologetic,
  // },
  // {
  //   id: 3,
  //   title: "Unpublished",
  //   subtitle: "Mystical woodland trail",
  //   src: unpublished,
  // },
  // {
  //   id: 4,
  //   title: "stoolSketch",
  //   subtitle: "Golden sands of the Sahara",
  //   src: stoolSketch,
  // },
  // {
  //   id: 5,
  //   title: "City Lights",
  //   subtitle: "Urban nightscape",
  //   src: star1,
  // },
  // {
  //   id: 6,
  //   title: "Autumn Colors",
  //   subtitle: "Fall foliage in the park",
  //   src: star2,
  // },
  // {
  //   id: 7,
  //   title: "Arctic Aurora",
  //   subtitle: "Northern lights display",
  //   src: star3,
  // },
  // {
  //   id: 8,
  //   title: "European Go Journal",
  //   subtitle: "Paradise shore",
  //   src: europeanGoJournal,
  // },
  // {
  //   id: 9,
  //   title: "Canyon Vista",
  //   subtitle: "Dramatic rock formations",
  //   src: monocle1,
  // },

  // {
  //   id: 10,
  //   title: "Meadow Flowers",
  //   subtitle: "Spring wildflowers",
  //   src: monocle2
  // }
];
