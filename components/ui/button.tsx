import classNames from "classnames";
import type { Variant } from "@/types/global";
import type { PolymorphicComponentProps } from "@/types/global";

type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    variant?: Variant;
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
  }
>;

const Button = <C extends React.ElementType = "button">({
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  className,
  as,
  ...props
}: ButtonProps<C>) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const classes = classNames({
    "rounded-md cursor-pointer disabled:opacity-50 transition flex items-center justify-center gap-2": true,
    [sizeClasses[size]]: true,
    ["bg-indigo-600 hover:bg-indigo-700 text-white"]: variant === "primary",
    ["bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 drop-shadow"]:
      variant === "secondary",
    ["border-2 border-gray-200 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"]:
      variant === "outlined",
    [className || ""]: !!className,
  });

  const Component = as || "button";

  return (
    <Component className={classes} {...props}>
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </Component>
  );
};

export default Button;
