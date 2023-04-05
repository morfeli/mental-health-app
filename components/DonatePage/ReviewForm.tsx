import { useMindScapeContext } from "components/store/useMindScapeContext";
import { GoBackBtn } from "components/UI/GoBackBtn";
import { PayBtn } from "components/UI/PayBtn";
import { formProps } from "./DonatePage";
import { StripeForm } from "./StripeForm";

export const ReviewForm = ({ setFormType }: formProps) => {
  const mindScapeCtx = useMindScapeContext();

  return (
    <div>
      <h2>Review</h2>

      <div>
        {mindScapeCtx.storedInfoData.firstName}
        {mindScapeCtx.storedInfoData.lastName}
        {mindScapeCtx.storedInfoData.email}
      </div>

      <div>
        {mindScapeCtx.storedPaymentData.cardName}
        {mindScapeCtx.storedPaymentData.cardNumber}
        {mindScapeCtx.storedPaymentData.expiration}
        {mindScapeCtx.storedPaymentData.ccv}
        {mindScapeCtx.storedPaymentData.zip}
      </div>

      <div>
        <StripeForm />
      </div>

      <div>
        {mindScapeCtx.storedDonorWallData.fullName}
        {mindScapeCtx.storedDonorWallData.message}
      </div>
      <div onClick={() => setFormType("donorWall")}>
        <GoBackBtn />
      </div>
      <PayBtn />
    </div>
  );
};
