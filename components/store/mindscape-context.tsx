import React, { useState, useCallback, useMemo, createContext } from "react";

type MindScapeProviderProps = {
  children: React.ReactNode;
};

type MindScapeContextType = {
  storedInfoData: {
    firstName: string;
    lastName: string;
    email: string;
  };
  storedPaymentData: {
    cardName: string;
    cardNumber: string;
    expiration: string;
    ccv: string;
    zip: string;
  };
  storedDonorWallData: {
    fullName: string;
    message: string;
  };
  storeInfoData: (data: {
    firstName: string;
    lastName: string;
    email: string;
  }) => void;
  storePaymentData: (data: {
    cardName: string;
    cardNumber: string;
    expiration: string;
    ccv: string;
    zip: string;
  }) => void;
  storeDonorWallData: (data: { fullName: string; message: string }) => void;
};

const MindScapeDefaultState = {
  storeInfoData: () => {},
  storePaymentData: () => {},
  storeDonorWallData: () => {},
  storedInfoData: {
    firstName: "",
    lastName: "",
    email: "",
  },
  storedPaymentData: {
    cardName: "",
    cardNumber: "",
    expiration: "",
    ccv: "",
    zip: "",
  },
  storedDonorWallData: {
    fullName: "",
    message: "",
  },
};

export const MindScapeContext = createContext<MindScapeContextType>(
  MindScapeDefaultState
);

export const MindScapeProvider = ({ children }: MindScapeProviderProps) => {
  const [storedInfoData, setInfoData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [storedPaymentData, setPaymentData] = useState<{
    cardName: string;
    cardNumber: string;
    expiration: string;
    ccv: string;
    zip: string;
  }>({
    cardName: "",
    cardNumber: "",
    expiration: "",
    ccv: "",
    zip: "",
  });

  const [storedDonorWallData, setDonorWallData] = useState<{
    fullName: string;
    message: string;
  }>({
    fullName: "",
    message: "",
  });

  // Set State Handlers

  const storeInfoData = (data: {
    firstName: string;
    lastName: string;
    email: string;
  }) => {
    setInfoData(data);
  };

  const storePaymentData = (data: {
    cardName: string;
    cardNumber: string;
    expiration: string;
    ccv: string;
    zip: string;
  }) => {
    setPaymentData(data);
  };

  const storeDonorWallData = (data: { fullName: string; message: string }) => {
    setDonorWallData(data);
  };

  const state = useMemo(
    () => ({
      storeInfoData,
      storePaymentData,
      storeDonorWallData,
      storedInfoData,
      storedPaymentData,
      storedDonorWallData,
    }),
    [
      storeInfoData,
      storedInfoData,
      storePaymentData,
      storedPaymentData,
      storedPaymentData,
      storedDonorWallData,
    ]
  );

  return (
    <MindScapeContext.Provider value={state}>
      {children}
    </MindScapeContext.Provider>
  );
};
