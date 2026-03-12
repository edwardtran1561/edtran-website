import type { InputVariant } from "@/types/global";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import classNames from "classnames";

interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  variant?: InputVariant;
}

const Input: React.FC<InputProps> = ({
  variant = "outlined",
  className,
  ...props
}) => {
  const classes = classNames({
    "px-3 py-2 outline-none rounded-lg": true,
    "border-2 border-gray-200": variant === "outlined",
    [className || ""]: !!className,
  });
  return <input className={classes} {...props} />;
};

export default Input;
