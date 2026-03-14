import classNames from "classnames";
import type { Variant } from "@/types/global";
import type { PolymorphicComponentProps } from "@/types/global";

type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    variant?: Variant;
  }
>;

const Button = <C extends React.ElementType = "button">({
  variant = "primary",
  children,
  className,
  as,
  ...props
}: ButtonProps<C>) => {
  const classes = classNames({
    "p-3 rounded-lg cursor-pointer disabled:opacity-50": true,
    ["bg-blue-600 hover:bg-blue-700 text-white"]: variant === "primary",
    ["bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"]:
      variant === "secondary",
    ["border-2 border-gray-200 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"]:
      variant === "outlined",
    [className || ""]: !!className,
  });

  const Component = as || "button";

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Button;
