import React, { useState, useCallback, useMemo, createContext } from "react";

type MindScapeProviderProps = {
  children: React.ReactNode;
};

type MindScapeContextType = {
  storedInfoData: {
    firstName: string;
    lastName: string;
    email: string;
    twitter: string;
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

  infoDataIsValid: boolean;
  donorWallIsValid: boolean;
  paymentIsValid: boolean;

  storeInfoData: (
    data: {
      firstName: string;
      lastName: string;
      email: string;
      twitter: string;
    },
    valid: boolean
  ) => void;
  storePaymentData: (
    data: {
      cardName: string;
      cardNumber: string;
      expiration: string;
      ccv: string;
      zip: string;
    },
    valid: boolean
  ) => void;
  storeDonorWallData: (
    data: { fullName: string; message: string },
    valid: boolean
  ) => void;
};

const MindScapeDefaultState = {
  storeInfoData: () => {},
  storePaymentData: () => {},
  storeDonorWallData: () => {},
  storedInfoData: {
    firstName: "",
    lastName: "",
    email: "",
    twitter: "",
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
  infoDataIsValid: false,
  donorWallIsValid: false,
  paymentIsValid: false,
};

export const MindScapeContext = createContext<MindScapeContextType>(
  MindScapeDefaultState
);

export const MindScapeProvider = ({ children }: MindScapeProviderProps) => {
  const [storedInfoData, setInfoData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    twitter: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    twitter: "",
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

  const [infoDataIsValid, setInfoDataIsValid] = useState<boolean>(false);
  const [paymentIsValid, setPaymentIsValid] = useState<boolean>(false);
  const [donorWallIsValid, setDonorWallIsValid] = useState<boolean>(false);

  // Set State Handlers

  const storeInfoData = (
    data: {
      firstName: string;
      lastName: string;
      email: string;
      twitter: string;
    },
    valid: boolean
  ) => {
    setInfoData(data);
    setInfoDataIsValid(valid);
  };

  const storePaymentData = (
    data: {
      cardName: string;
      cardNumber: string;
      expiration: string;
      ccv: string;
      zip: string;
    },
    valid: boolean
  ) => {
    setPaymentData(data);
    setPaymentIsValid(valid);
  };

  const storeDonorWallData = (
    data: { fullName: string; message: string },
    valid: boolean
  ) => {
    setDonorWallData(data);
    setDonorWallIsValid(valid);
  };

  const state = useMemo(
    () => ({
      storeInfoData,
      storePaymentData,
      storeDonorWallData,
      storedInfoData,
      storedPaymentData,
      storedDonorWallData,
      infoDataIsValid,
      paymentIsValid,
      donorWallIsValid,
    }),
    [
      storeInfoData,
      storedInfoData,
      storePaymentData,
      storedPaymentData,
      storedPaymentData,
      storedDonorWallData,
      infoDataIsValid,
      paymentIsValid,
      donorWallIsValid,
    ]
  );

  return (
    <MindScapeContext.Provider value={state}>
      {children}
    </MindScapeContext.Provider>
  );
};
