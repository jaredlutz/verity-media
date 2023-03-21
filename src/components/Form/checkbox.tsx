import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={`rounded-sm border-0 bg-[#333] outline-0 checked:bg-[#333] hover:bg-[#444] focus:ring-0 focus:ring-offset-0 active:bg-[#444] ${className}`}
        {...rest}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
