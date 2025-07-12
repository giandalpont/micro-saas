import { cn } from "@/app/lib/utils";

export const Button = ({
  children,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn(
        "p-3 px-6 text-white rounded-xl cursor-pointer font-bold whitespace-nowrap hover:opacity-95 disa bled:opacity-70",
        variant === "primary" && "bg-accent-purple hover:bg-accent-purple/90",
        variant === "secondary" && "bg-background-tertiary hover:bg-background-tertiary/90 ",
        variant === "ghost" && "border-border-primary hover:border-border-primary/90",
        props.className
      )}
    >
      {children}
    </button>
  );
}

export default Button
