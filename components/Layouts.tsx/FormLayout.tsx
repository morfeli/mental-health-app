import type { LayoutProps } from "./BlurredOverlay";

export const FormLayout = ({ children }: LayoutProps) => {
  return (
    <div className="relative bg-slate-50 flex flex-col justify-between m-4 p-8  rounded-md 2xl:w-[600px] shadow-xl shadow-slate-500 border-4 border-bluePrimary overflow-hidden z-50">
      {children}
    </div>
  );
};

// bg-bluePrimary
// bg-gradient-to-tl from-blue-400 from-10% to-emerald-400 to-90%
