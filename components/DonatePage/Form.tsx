import { PayBtn } from "components/UI/PayBtn";
import { TextField } from "./Fields";
import { StatusBar } from "./StatusBar";

export const Form = () => {
  return (
    <form className="pt-24">
      <StatusBar />
      <div className="grid grid-cols-2 pt-8 gap-y-8 gap-x-8">
        <TextField name="businessName" type="text" className="col-span-1">
          First Name
        </TextField>

        <TextField name="phone" type="text" className="col-span-1">
          Last Name
        </TextField>

        <TextField name="email" type="text" className="col-span-1">
          Email address
        </TextField>

        <TextField name="number" type="text" className="col-span-1">
          Card Number
        </TextField>

        <TextField name="number" type="text" className="col-span-1">
          Expiration
        </TextField>

        <TextField name="number" type="text" className="col-span-1">
          CCV
        </TextField>

        <TextField name="number" type="text" className="col-span-1">
          Zip
        </TextField>

        <PayBtn />
      </div>
    </form>
  );
};
