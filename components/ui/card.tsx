import React from "react";
import classNames from "classnames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hoverable = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          "rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-200",
          {
            "hover:shadow-lg hover:-translate-y-1 cursor-pointer": hoverable,
            "shadow-sm": !hoverable,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;

