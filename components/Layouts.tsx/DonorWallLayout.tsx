type DonorWallLayoutProps = {
  children: React.ReactNode;
};

export const DonorWallLayout = ({ children }: DonorWallLayoutProps) => {
  return (
    <div className="relative flex flex-col justify-between h-screen overflow-x-hidden bg-slate-100 font-Author">
      <div className="w-[800px] h-[800px] bg-bluePrimary blur-[70px] rounded-full absolute right-[20%] top-[-30%]" />
      {/* <div className="w-[400px] h-[400px] bg-bluePrimary blur-[40px] rounded-full absolute left-[-10%] bottom-[-10%]" /> */}
      {children}
    </div>
  );
};
