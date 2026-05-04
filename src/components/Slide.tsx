import React from "react";

interface SlideComponentProps {
  sectionLabel: string;
  children: React.ReactNode;
}

const Slide = ({ sectionLabel, children }: SlideComponentProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-20 relative">
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-12 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-12 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/20" />

      {/* Section label */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <p className="font-mono text-[10px] tracking-[0.5em] text-primary/40 uppercase">
          {sectionLabel}
        </p>
      </div>

      <div className="w-full max-w-6xl">{children}</div>
    </div>
  );
};

export default Slide;
