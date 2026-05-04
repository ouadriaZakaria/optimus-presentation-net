interface PlaceholderProps {
  type: "title" | "text" | "image" | "list";
  label?: string;
}

const Placeholder = ({ type, label }: PlaceholderProps) => {
  if (type === "title") {
    return (
      <div className="border border-dashed border-glow/30 rounded-lg p-6 box-glow">
        <p className="font-display text-3xl md:text-5xl lg:text-6xl tracking-wider uppercase text-primary/40 text-glow-sm">
          {label || "[Section Title]"}
        </p>
      </div>
    );
  }

  if (type === "text") {
    return (
      <div className="border border-dashed border-primary/20 rounded-lg p-6 mt-6 min-h-[120px] flex items-start">
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          {label || "[Your text content goes here. Replace this placeholder with your description.]"}
        </p>
      </div>
    );
  }

  if (type === "image") {
    return (
      <div className="border border-dashed border-primary/20 rounded-lg p-8 mt-6 min-h-[300px] flex items-center justify-center bg-secondary/30">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-primary/30 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-muted-foreground font-mono text-sm">{label || "[Image Placeholder]"}</p>
        </div>
      </div>
    );
  }

  if (type === "list") {
    return (
      <div className="border border-dashed border-primary/20 rounded-lg p-6 mt-6 space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-primary/40 font-mono text-sm">[{i}]</span>
            <div className="h-px flex-1 bg-primary/10" />
            <span className="text-muted-foreground font-body text-sm">[Reference {i}]</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default Placeholder;
