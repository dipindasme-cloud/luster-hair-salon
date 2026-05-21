import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, LabelHTMLAttributes } from "react";

export const FormLabel = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("block text-sm text-background/70 mb-2 font-medium", className)}
      {...props}
    >
      {children}
      {required && <span className="text-accent-soft ml-0.5" aria-hidden="true">*</span>}
    </label>
  )
);
FormLabel.displayName = "FormLabel";

export const FormInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { error?: string }>(
  ({ className, error, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background",
        "placeholder-background/55 focus:outline-none focus:ring-2 focus:ring-accent-soft focus:ring-offset-2 focus:ring-offset-foreground",
        "transition-colors min-h-[44px] text-base",
        error && "border-red-400 focus:ring-red-400",
        className
      )}
      {...props}
    />
  )
);
FormInput.displayName = "FormInput";

export const FormSelect = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement> & { error?: string }>(
  ({ className, error, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background",
        "focus:outline-none focus:ring-2 focus:ring-accent-soft focus:ring-offset-2 focus:ring-offset-foreground",
        "transition-colors min-h-[44px] text-base appearance-none cursor-pointer",
        error && "border-red-400 focus:ring-red-400",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
);
FormSelect.displayName = "FormSelect";

export const FormTextarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }>(
  ({ className, error, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background",
        "placeholder-background/55 focus:outline-none focus:ring-2 focus:ring-accent-soft focus:ring-offset-2 focus:ring-offset-foreground",
        "transition-colors text-base resize-none",
        error && "border-red-400 focus:ring-red-400",
        className
      )}
      {...props}
    />
  )
);
FormTextarea.displayName = "FormTextarea";

export function FormField({ label, required, error, children }: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <FormLabel required={required}>{label}</FormLabel>
      {children}
      {error && <p className="text-red-400 text-sm mt-1.5" role="alert">{error}</p>}
    </div>
  );
}
