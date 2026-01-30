import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type PageHeroBreadcrumbItem = {
  label: string;
  to?: string;
};

type PageHeroAction = {
  label: React.ReactNode;
  to: string;
  variant?: "default" | "outline";
};

type PageHeroProps = {
  backgroundImage: string;
  backgroundAlt: string;
  breadcrumb: PageHeroBreadcrumbItem[];
  badgeText?: React.ReactNode;
  badgeDotClassName?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primaryAction?: PageHeroAction;
  secondaryAction?: PageHeroAction;
};

 const isExternalHref = (to: string) => /^(https?:|mailto:|tel:)/.test(to);

const PageHero = React.memo(({
  backgroundImage,
  backgroundAlt,
  breadcrumb,
  badgeText,
  badgeDotClassName,
  title,
  description,
  primaryAction,
  secondaryAction,
}: PageHeroProps) => {
  const ActionWrapper = ({
    to,
    children,
    className,
  }: {
    to: string;
    children: React.ReactNode;
    className?: string;
  }) => {
    if (isExternalHref(to)) {
      return (
        <a href={to} className={className}>
          {children}
        </a>
      );
    }

    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <section className="relative pt-28 pb-16 bg-[#1f1f1f] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={backgroundAlt}
          className="w-full h-full object-cover opacity-45 saturate-125 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
            {breadcrumb.map((item, idx) => {
              const isLast = idx === breadcrumb.length - 1;
              return (
                <React.Fragment key={`${item.label}-${idx}`}>
                  {idx > 0 && <span className="text-white/50">/</span>}
                  {item.to && !isLast ? (
                    <Link to={item.to} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-white" : "text-white/70"}>{item.label}</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {badgeText ? (
            <div className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/10 text-white/85 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className={`w-2 h-2 rounded-full ${badgeDotClassName || "bg-[#e11a1a]"}`} />
              {badgeText}
            </div>
          ) : null}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>

          {description ? (
            <p className="text-white/80 text-lg max-w-2xl mx-auto">{description}</p>
          ) : null}

          {(primaryAction || secondaryAction) ? (
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              {primaryAction ? (
                <ActionWrapper to={primaryAction.to} className="w-full sm:w-auto">
                  <Button
                    className={
                      primaryAction.variant === "outline"
                        ? "border-white/25 text-white hover:bg-white/10 rounded-xl px-8 py-6 font-semibold w-full"
                        : "bg-[#e11a1a] hover:bg-red-700 text-white rounded-xl px-8 py-6 font-semibold inline-flex items-center gap-2 w-full"
                    }
                    variant={primaryAction.variant === "outline" ? "outline" : undefined}
                  >
                    {primaryAction.label}
                    {primaryAction.variant === "outline" ? null : <ArrowRight className="w-5 h-5" />}
                  </Button>
                </ActionWrapper>
              ) : null}

              {secondaryAction ? (
                <ActionWrapper to={secondaryAction.to} className="w-full sm:w-auto">
                  <Button
                    variant={secondaryAction.variant === "outline" ? "outline" : undefined}
                    className={
                      secondaryAction.variant === "outline"
                        ? "border-white/25 text-white hover:bg-white/10 rounded-xl px-8 py-6 font-semibold w-full"
                        : "bg-[#e11a1a] hover:bg-red-700 text-white rounded-xl px-8 py-6 font-semibold inline-flex items-center gap-2 w-full"
                    }
                  >
                    {secondaryAction.label}
                    {secondaryAction.variant === "outline" ? null : <ArrowRight className="w-5 h-5" />}
                  </Button>
                </ActionWrapper>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
});

export default PageHero;
