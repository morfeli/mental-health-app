import { Button } from "components/UI/Button";
import { PayBtn } from "components/UI/PayBtn";
import { TextareaField, TextField } from "./Fields";

export const FormRedo = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-between p-8">
        <h2>Info Credentials</h2>

        <TextField name="firstName" type="text" className="col-span-1 my-1">
          First Name
        </TextField>

        <TextField name="lastName" type="text" className="col-span-1 my-1">
          Last Name
        </TextField>

        <TextField name="email" type="email" className="col-span-1 my-1">
          Email address
        </TextField>

        <TextField name="twitterTag" type="text" className="col-span-1 my-1">
          Twitter Tag
        </TextField>
      </div>
      <div className="flex flex-col justify-between p-8">
        <h2>Payment Credentials</h2>

        <TextField name="cardName" type="text" className="col-span-1 my-1">
          Name on card
        </TextField>

        <TextField name="cardNumber" type="number" className="col-span-1 my-1">
          Card Number
        </TextField>

        <TextField name="expiration" type="number" className="col-span-1 my-1">
          Expiration
        </TextField>

        <TextField name="ccv" type="number" className="col-span-1 my-1">
          CCV
        </TextField>

        <TextField name="zipCode" type="number" className="col-span-1 my-1">
          Zip
        </TextField>
      </div>
      <div className="flex flex-col justify-between p-8">
        <h2>Post a message on our Donor Wall</h2>

        <TextField name="fullName" type="text" className="col-span-1 my-1">
          Full Name
        </TextField>

        <TextareaField
          name="message"
          type="text"
          className="col-span-1 my-1 scroll-pb-12"
        >
          Message
        </TextareaField>
      </div>
      <div className="p-8">
        <h2>Review</h2>

        <div>
          <h3>Info</h3>
          <p>Hello</p>
        </div>

        <div>
          <h3>Payment</h3>
          <p>2000</p>
        </div>

        <div>
          <h3>Donor Wall</h3>
          <p>Good stuff</p>
        </div>

        <PayBtn />
      </div>
    </div>
  );
};
