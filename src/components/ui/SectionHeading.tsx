import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ label, title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", align === "center" ? "text-center" : "text-left", className)}>
      {label && (
        <span className="inline-block text-muted-rose text-sm font-medium tracking-widest uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn("mt-8 h-px w-16 bg-muted-rose", align === "center" ? "mx-auto" : "")} />
    </div>
  );
}
