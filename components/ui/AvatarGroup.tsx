interface AvatarGroupProps {
  count?: number;
  size?: "sm" | "md" | "lg";
}

export default function AvatarGroup({ count = 3, size = "md" }: AvatarGroupProps) {
  const sizeStyles = {
    sm: "w-6 h-6 border-[2px]",
    md: "w-9 h-9 border-[2.5px]",
    lg: "w-12 h-12 border-[3px]",
  };

  return (
    <div className="flex -space-x-3">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className={`${sizeStyles[size]} rounded-full border-white bg-gray-200 overflow-hidden relative z-0 hover:z-10 transition-all`}
        >
          <img
            src={`https://i.pravatar.cc/150?img=${i + 10}`}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
