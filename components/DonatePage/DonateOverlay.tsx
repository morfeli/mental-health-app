import classNames from "classnames";
import { HeroOverlayProps } from "components/Layouts.tsx/HeroOverlay";

export const DonateOverlay = ({ children }: HeroOverlayProps) => {
  return (
    <div className="relative bg-gradient-to-tl from-blue-400 from-10% to-emerald-600 to-90% 2xl:h-screen">
      {children}
    </div>
  );
};

// bg-gradient-to-tl from-blue-400 to-emerald-400
