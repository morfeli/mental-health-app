import { DonateSVG } from "components/Icons/DonateSVG";
import Link from "next/link";
import { Button } from "./Button";

type DonateBtnProps = {
  styles?: string;
};

export const DonateBtn = ({ styles }: DonateBtnProps) => {
  return (
    <Link href={"/donate"}>
      <Button
        styles={`w-[125px] pl-6 py-2 bg-[#168aad] text-white border-white border-[1px] shadow-2xl hover:bg-bluePrimary text-lg flex items-center relative + ${styles}`}
      >
        Donate
        <DonateSVG />
      </Button>
    </Link>
  );
};
