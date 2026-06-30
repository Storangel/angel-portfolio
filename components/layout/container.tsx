import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "narrow" | "full";
}

const maxWidthClasses = {
  default: "max-w-[1120px]",
  narrow: "max-w-[720px]",
  full: "max-w-full",
} as const;

export function Container({
  className,
  variant = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 md:px-6 lg:px-8",
        maxWidthClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
