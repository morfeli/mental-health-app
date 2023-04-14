import React, { useState, useCallback, useMemo, createContext } from "react";

type MindScapeProviderProps = {
  children: React.ReactNode;
};

type MindScapeContextType = {
  storedInfoData: {
    firstName: string;
    lastName: string;
    email: string;
    amount: number;
  };

  storedDonorWallData: {
    fullName: string;
    message: string;
  };

  infoDataIsValid: boolean;
  donorWallIsValid: boolean;
  paymentIsValid: boolean;
  reviewIsValid: boolean;

  storeInfoData: (
    data: {
      firstName: string;
      lastName: string;
      email: string;
      amount: number;
    },
    valid: boolean
  ) => void;
  storeDonorWallData: (
    data: { fullName: string; message: string },
    valid: boolean
  ) => void;
  paymentValidityHandler: () => void;
};

const MindScapeDefaultState = {
  storeInfoData: () => {},
  paymentValidityHandler: () => {},
  storeDonorWallData: () => {},
  storedInfoData: {
    firstName: "",
    lastName: "",
    email: "",
    amount: 0,
  },
  storedDonorWallData: {
    fullName: "",
    message: "",
  },
  infoDataIsValid: false,
  donorWallIsValid: false,
  paymentIsValid: false,
  reviewIsValid: false,
};

export const MindScapeContext = createContext<MindScapeContextType>(
  MindScapeDefaultState
);

export const MindScapeProvider = ({ children }: MindScapeProviderProps) => {
  const [storedInfoData, setInfoData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    amount: number;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    amount: 0,
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
  const [reviewIsValid, setReviewIsValid] = useState<boolean>(false);

  // Set State Handlers

  const storeInfoData = (
    data: {
      firstName: string;
      lastName: string;
      email: string;
      amount: number;
    },
    valid: boolean
  ) => {
    setInfoData(data);
    setInfoDataIsValid(valid);
  };

  const paymentValidityHandler = () => {
    setPaymentIsValid(true);
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
      paymentValidityHandler,
      storeDonorWallData,
      storedInfoData,
      storedDonorWallData,
      infoDataIsValid,
      paymentIsValid,
      donorWallIsValid,
      reviewIsValid,
    }),
    [
      storeInfoData,
      storedInfoData,
      paymentValidityHandler,
      storedDonorWallData,
      infoDataIsValid,
      paymentIsValid,
      donorWallIsValid,
      reviewIsValid,
    ]
  );

  return (
    <MindScapeContext.Provider value={state}>
      {children}
    </MindScapeContext.Provider>
  );
};
