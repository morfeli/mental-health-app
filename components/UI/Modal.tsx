import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Image from "next/image";
import { Close } from "./Close";

type ModalProps = {
  children?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  show: boolean;
};

export const Modal = ({ show, onClose, children }: ModalProps) => {
  const [sendPortal, sentSendPortal] = useState(false);

  useEffect(() => {
    sentSendPortal(true);
  }, []);

  let modalContent = show ? (
    <div className="fixed top-0 z-50 flex items-center justify-center w-screen h-screen bg-overLay backdrop-blur-sm">
      <div className="w-[80vw] py-28 flex relative items-center bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 rounded-md justify-evenly z-[40px] text-white shadow-md border-4 border-white shadow-slate-500">
        <button>
          <Close />
        </button>

        <div className="flex flex-col">
          {children && (
            <p className="text-xl text-center w-[600px] leading-10">
              {children}
            </p>
          )}
        </div>
        <Image
          src={"/nami-support-2.png"}
          width={300}
          height={300}
          alt="nami-logo"
        />
      </div>
    </div>
  ) : null;

  if (sendPortal) {
    const portalDiv = document.getElementById("modal-root")!;

    return ReactDOM.createPortal(modalContent, portalDiv);
  } else {
    return null;
  }
};
