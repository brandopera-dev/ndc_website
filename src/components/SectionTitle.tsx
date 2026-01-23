import React from "react";

type SectionTitleProps = {
  kicker: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
};

const SectionTitle = ({
  kicker,
  title,
  description,
  align = "left",
  variant = "light",
  className = "",
}: SectionTitleProps) => {
  const titleColor = variant === "dark" ? "text-white" : "text-gray-900";
  const descriptionColor = variant === "dark" ? "text-white/65" : "text-gray-500";
  const alignWrap = align === "center" ? "text-center items-center" : "text-left items-start";
  const kickerWrap = align === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`flex flex-col gap-4 ${alignWrap} ${className}`.trim()}>
      <div className={`flex items-center gap-3 ${kickerWrap}`.trim()}>
        <div className="text-xs font-semibold tracking-wider text-[var(--ndc-red)] uppercase">
          {kicker}
          <span className="ml-3 inline-block w-12 h-[2px] bg-[var(--ndc-red)] align-middle" />
        </div>
      </div>

      <h2 className={`text-3xl md:text-5xl font-extrabold leading-tight ${titleColor}`.trim()}>
        {title}
      </h2>

      {description ? (
        <div className={`text-sm md:text-base leading-relaxed max-w-3xl ${descriptionColor}`.trim()}>
          {description}
        </div>
      ) : null}
    </div>
  );
};

export default SectionTitle;
