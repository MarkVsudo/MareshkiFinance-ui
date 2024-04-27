import { atom } from "jotai";

export const receiverDataAtom = atom({
    selectedDate: "",
    receiverName: "",
    receiverIBAN: "",
    receiverBIC: "",
    receiverBank: "",
    description: "",
    currency: "",
    amount: 10.0,
    paymentSystem: "",
    senderName: "",
  });