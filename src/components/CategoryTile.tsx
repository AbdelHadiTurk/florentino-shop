import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

type Props = {
  to: string;
  label: string;
  sublabel: string;
  images: string[];
};

export function CategoryTile({ to, label, sublabel, images }: Props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-background shadow-sm block"
    >
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={label}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 group-hover:scale-105 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <p className="font-display text-2xl text-background">{label}</p>
        <p className="text-xs uppercase tracking-widest text-background/80 mt-1">{sublabel}</p>
      </div>
    </Link>
  );
}
