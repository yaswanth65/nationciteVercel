interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function PrimaryButton({
  children,
  onClick,
  href,
  className = "",
  variant = "primary",
  size = "md",
}: PrimaryButtonProps) {
  const baseStyles =
    "flex justify-center items-center font-semibold rounded-xl transition-all hover:opacity-90 whitespace-nowrap";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-4 py-2 w-[174px] h-[52px] text-[18px]",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-[#FF8D28] text-white shadow-[0px_2px_4px_rgba(31,30,130,0.04)] hover:-translate-y-0.5",
    secondary: "bg-white text-gray-900 border border-gray-300",
    outline: "border-2 border-[#FF8D28] text-[#FF8D28] hover:bg-[#FF8D28]/10",
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
