import { Guitar, Piano, Drum, Wind, Headphones, Disc3, Mic, Music, Sliders, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SubCategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  icon: LucideIcon;
  emoji: string;
  subcategories: SubCategory[];
}

export const categories: Category[] = [
  {
    name: "String Instruments",
    slug: "strings",
    icon: Guitar,
    emoji: "🎸",
    subcategories: [
      { name: "Electric Guitars", slug: "electric-guitars" },
      { name: "Acoustic Guitars", slug: "acoustic-guitars" },
      { name: "Bass Guitars", slug: "bass-guitars" },
      { name: "Ukulele", slug: "ukulele" },
      { name: "Violins", slug: "violins" },
      { name: "Cellos", slug: "cellos" },
      { name: "Harps", slug: "harps" },
      { name: "Mandolin", slug: "mandolin" },
      { name: "Banjo", slug: "banjo" },
    ],
  },
  {
    name: "Keyboard Instruments",
    slug: "keyboards",
    icon: Piano,
    emoji: "🎹",
    subcategories: [
      { name: "Digital Keyboards", slug: "digital-keyboards" },
      { name: "MIDI Controllers", slug: "midi-controllers" },
      { name: "Digital Pianos", slug: "digital-pianos" },
      { name: "Synthesizers", slug: "synthesizers" },
      { name: "Workstations", slug: "workstations" },
    ],
  },
  {
    name: "Percussion Instruments",
    slug: "percussion",
    icon: Drum,
    emoji: "🥁",
    subcategories: [
      { name: "Acoustic Drum Kits", slug: "acoustic-drum-kits" },
      { name: "Electronic Drum Kits", slug: "electronic-drum-kits" },
      { name: "Cajon", slug: "cajon" },
      { name: "Bongos", slug: "bongos" },
      { name: "Congas", slug: "congas" },
      { name: "Tabla", slug: "tabla" },
      { name: "Djembe", slug: "djembe" },
      { name: "Hand Percussion", slug: "hand-percussion" },
    ],
  },
  {
    name: "Wind Instruments",
    slug: "wind",
    icon: Wind,
    emoji: "🎺",
    subcategories: [
      { name: "Flute", slug: "flute" },
      { name: "Clarinet", slug: "clarinet" },
      { name: "Saxophone", slug: "saxophone" },
      { name: "Trumpet", slug: "trumpet" },
      { name: "Trombone", slug: "trombone" },
      { name: "Harmonica", slug: "harmonica" },
      { name: "Recorder", slug: "recorder" },
    ],
  },
  {
    name: "Studio & Recording",
    slug: "studio",
    icon: Headphones,
    emoji: "🎧",
    subcategories: [
      { name: "Audio Interfaces", slug: "audio-interfaces" },
      { name: "Studio Monitors", slug: "studio-monitors" },
      { name: "Microphones", slug: "microphones" },
      { name: "Headphones", slug: "headphones" },
      { name: "Mixers", slug: "mixers" },
      { name: "Sound Cards", slug: "sound-cards" },
    ],
  },
  {
    name: "DJ Equipment",
    slug: "dj",
    icon: Disc3,
    emoji: "🎛️",
    subcategories: [
      { name: "DJ Controllers", slug: "dj-controllers" },
      { name: "Turntables", slug: "turntables" },
      { name: "DJ Mixers", slug: "dj-mixers" },
      { name: "PA Systems", slug: "pa-systems" },
      { name: "Lighting Equipment", slug: "lighting" },
    ],
  },
  {
    name: "Live Sound & Stage",
    slug: "live-sound",
    icon: Mic,
    emoji: "🎤",
    subcategories: [
      { name: "Speakers", slug: "speakers" },
      { name: "Amplifiers", slug: "amplifiers" },
      { name: "Wireless Systems", slug: "wireless-systems" },
      { name: "Cables & Accessories", slug: "cables" },
    ],
  },
  {
    name: "Indian Classical",
    slug: "indian-classical",
    icon: Music,
    emoji: "🎼",
    subcategories: [
      { name: "Tabla", slug: "tabla-indian" },
      { name: "Veena", slug: "veena" },
      { name: "Sitar", slug: "sitar" },
      { name: "Mridangam", slug: "mridangam" },
      { name: "Harmonium", slug: "harmonium" },
      { name: "Tanpura", slug: "tanpura" },
    ],
  },
  {
    name: "Music Production",
    slug: "production",
    icon: Sliders,
    emoji: "🎵",
    subcategories: [
      { name: "MIDI Pads", slug: "midi-pads" },
      { name: "Launchpads", slug: "launchpads" },
      { name: "Loop Stations", slug: "loop-stations" },
      { name: "Grooveboxes", slug: "grooveboxes" },
    ],
  },
  {
    name: "Accessories",
    slug: "accessories",
    icon: Wrench,
    emoji: "🪕",
    subcategories: [
      { name: "Strings", slug: "strings-acc" },
      { name: "Picks", slug: "picks" },
      { name: "Drumsticks", slug: "drumsticks" },
      { name: "Stands", slug: "stands" },
      { name: "Cases", slug: "cases" },
      { name: "Tuners", slug: "tuners" },
      { name: "Capos", slug: "capos" },
    ],
  },
];
