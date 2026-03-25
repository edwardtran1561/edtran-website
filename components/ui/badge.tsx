import React from "react";
import classNames from "classnames";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const variantStyles = {
      primary:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      secondary:
        "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
      success:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      warning:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    };

    const sizeStyles = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-base",
    };

    return (
      <span
        ref={ref}
        className={classNames(
          "inline-flex items-center font-medium rounded-full",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;

