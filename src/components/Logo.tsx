import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-24 w-24 scale-1.5", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo3.png"
      alt="NotifyFlow"
      width={1254}
      height={1254}
      className={className}
      priority={priority}
    />
  );
}
