import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  SelectHTMLAttributes,
} from "react";
//   import type { SelectProps } from "@radix-ui/react-select";
import classNames from "classnames";

//   import {
//     Select,
//     SelectContent,
//     SelectTrigger,
//     SelectValue,
//   } from "~/components/form/Select";

const formClasses =
  "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ id, children, ...props }: LabelProps) {
  return (
    <label
      htmlFor={id}
      className="block mb-3 text-sm font-medium text-gray-700"
      {...props}
    >
      {children}
    </label>
  );
}

export interface TextFieldProps {
  name: string;
  className?: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];

  autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  children: LabelHTMLAttributes<HTMLLabelElement>["children"];
  value?: InputHTMLAttributes<HTMLInputElement>["defaultValue"];
}

export function TextField({
  name,
  type,
  className = "",
  children,
  autoComplete,
  value,
}: TextFieldProps) {
  return (
    <div className={className}>
      {children && <Label id={name}>{children}</Label>}

      <input
        type={type}
        defaultValue={value}
        autoComplete={autoComplete}
        id={name}
        className={classNames(formClasses, className)}
      />

      {/* {error && <span className="text-red">{error}</span>} */}
    </div>
  );
}

export function TextareaField({
  name,
  className = "",
  children,
  autoComplete,
  value,
}: TextFieldProps) {
  return (
    <div className={className}>
      {children && <Label id={name}>{children}</Label>}

      <textarea
        defaultValue={value}
        autoComplete={autoComplete}
        id={name}
        className={classNames(formClasses, className)}
      />

      {/* {error && <span className="text-red">{error}</span>} */}
    </div>
  );
}

// export interface SelectFieldProps extends SelectProps {
//   label?: SelectHTMLAttributes<HTMLSelectElement>["children"];
//   name: string;
//   className?: string;
// }

// export function SelectField({
//   label,
//   name,
//   className,
//   children,
//   ...props
// }: SelectFieldProps) {
//   const { error, getInputProps } = useField(name);

//   return (
//     <div className={className}>
//       {label && <Label id={name}>{label}</Label>}
//       <Select
//         name={name}
//         {...props}
//         {...getInputProps({})}
//         // className={clsx(formClasses, "pr8")}
//       >
//         <SelectTrigger>
//           <SelectValue placeholder="..." />
//         </SelectTrigger>
//         <SelectContent>{children}</SelectContent>
//       </Select>
//       {error && <span className="text-red">{error}</span>}
//     </div>
//   );
// }
