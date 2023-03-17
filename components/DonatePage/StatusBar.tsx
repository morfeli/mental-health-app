export const StatusBar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-[90vw] h-1 bg-slate-100 mx-auto">
        <div className="relative flex items-center justify-center w-5 h-5 bg-white border-2 border-blue-700 rounded-full">
          <p className="absolute text-[0.7rem] top-6">Info</p>
          <div className="w-2 h-2 bg-blue-700 rounded-full" />
        </div>
        <div className="relative flex items-center justify-center">
          <p className="absolute text-[0.7rem] top-7">Payment</p>
          <div className="bg-white rounded-full border-[3px] border-slate-200 w-5 h-5" />
        </div>
        <div className="relative flex items-center justify-center">
          <p className="absolute text-[0.7rem] text-center top-7 w-[70px]">
            Donor Wall
          </p>
          <div className="bg-white rounded-full border-[3px] border-slate-200 w-5 h-5" />
        </div>
        <div className="relative flex items-center justify-center">
          <p className="absolute text-[0.7rem] top-7">Review</p>
          <div className="bg-white rounded-full border-[3px] border-slate-200 w-5 h-5" />
        </div>
      </div>
    </>
  );
};
