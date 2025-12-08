interface HeroWithAvatarsProps {
  avatarCount?: number;
  avatarLabel?: string;
}

export default function HeroWithAvatars({
  avatarCount = 3,
  avatarLabel = "1000+ Researchers Listed",
}: HeroWithAvatarsProps) {
  return (
    <div className="flex flex-row items-center gap-3 h-9">
      <div className="flex -space-x-3">
        {[...Array(avatarCount)].map((_, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-full border-[2.5px] border-white bg-gray-200 overflow-hidden relative z-0 hover:z-10 transition-all"
          >
            <img
              src={`https://i.pravatar.cc/150?img=${i + 10}`}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <span className="text-large text-[#021165]">{avatarLabel}</span>
    </div>
  );
}
