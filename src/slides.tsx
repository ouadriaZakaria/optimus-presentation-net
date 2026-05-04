import Slide from "@/components/Slide";
import SlidePlaceholder from "@/components/SlidePlaceholder";
import optimusHero from "@/assets/optimus-hero.jpg";
import React from "react";

export const slides = [
  // INTRODUCTION (Slides 1-3)
  <Slide sectionLabel="01 // Introduction" key="intro-1">
    <div className="text-center relative">
      <div className="absolute inset-0 -z-10 opacity-20 rounded-2xl overflow-hidden">
        <img src={optimusHero} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="font-mono text-xs tracking-[0.5em] text-primary/60 uppercase mb-6">T E S L A</p>
      <SlidePlaceholder type="title" label="[Project Title]" />
      <SlidePlaceholder type="subtitle" label="[Subtitle / Tagline]" />
    </div>
  </Slide>,
  <Slide sectionLabel="01 // Introduction" key="intro-2">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <SlidePlaceholder type="title" label="[Introduction Title]" />
        <SlidePlaceholder type="text" label="[Short description — introduce your project here]" />
      </div>
      <SlidePlaceholder type="image" label="[Introduction Image]" />
    </div>
  </Slide>,
  <Slide sectionLabel="01 // Introduction" key="intro-3">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <SlidePlaceholder type="image" label="[Background Image]" />
      <div>
        <SlidePlaceholder type="title" label="[Background]" />
        <SlidePlaceholder type="text" label="[Background information placeholder]" />
      </div>
    </div>
  </Slide>,

  // HARDWARE (Slides 4-10)
  ...Array.from({ length: 7 }, (_, i) => (
    <Slide key={`hw-${i}`} sectionLabel="02 // Hardware">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <SlidePlaceholder type="title" label={`[Hardware — Slide ${i + 1}/7]`} />
          <SlidePlaceholder type="text" label="[Hardware description placeholder]" />
        </div>
        <SlidePlaceholder type="image" label="[Hardware Image]" />
      </div>
    </Slide>
  )),

  // SOFTWARE (Slides 11-20)
  ...Array.from({ length: 10 }, (_, i) => (
    <Slide key={`sw-${i}`} sectionLabel="03 // Software">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <SlidePlaceholder type="image" label="[Software Image]" />
        <div>
          <SlidePlaceholder type="title" label={`[Software — Slide ${i + 1}/10]`} />
          <SlidePlaceholder type="text" label="[Software description placeholder]" />
        </div>
      </div>
    </Slide>
  )),

  // CONCLUSION (Slides 21-27)
  ...Array.from({ length: 7 }, (_, i) => (
    <Slide key={`cl-${i}`} sectionLabel="04 // Conclusion">
      <div className="max-w-4xl mx-auto text-center">
        <SlidePlaceholder type="title" label={`[Conclusion — Slide ${i + 1}/7]`} />
        <SlidePlaceholder type="text" label="[Summary and closing thoughts placeholder]" />
      </div>
    </Slide>
  )),

  // REFERENCES (Slides 28-30)
  ...Array.from({ length: 3 }, (_, i) => (
    <Slide key={`ref-${i}`} sectionLabel="05 // References">
      <div className="max-w-4xl mx-auto">
        <SlidePlaceholder type="title" label={`[References — Slide ${i + 1}/3]`} />
        <SlidePlaceholder type="list" items={6} />
      </div>
    </Slide>
  )),
];
