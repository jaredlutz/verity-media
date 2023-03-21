import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  colorMode: "dark" | "light";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, colorMode, ...rest }, ref) => {
    return (
      <input
        className={`input ${
          colorMode === "dark" ? "input-dark" : "input-light"
        } ${className}`}
        ref={ref}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
