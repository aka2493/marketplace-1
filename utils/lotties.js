import Lottie from "lottie-react";
import cardAnimation from "../LottieJSONFiles/payment-card.json"
import bankAccountAnimation from '../LottieJSONFiles/bank.json'

export const PaymentCardAnimation = () => {
    return <Lottie animationData={cardAnimation} />;
};

export const BankAccountAnimation = () => {
    return <Lottie animationData={bankAccountAnimation} />;
};