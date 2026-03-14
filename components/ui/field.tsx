import classNames from "classnames";
import type { ControllerFieldState, FieldError } from "react-hook-form";
import { AlertCircle } from "lucide-react";

type FieldProps = {
  fieldState: ControllerFieldState;
  className?: string;
} & React.PropsWithChildren;

const Field: React.FC<FieldProps> = ({
  fieldState,
  className = "",
  children,
}) => {
  const classes = classNames({
    "relative w-full flex flex-col gap-2": true,
    [className]: !!className,
  });
  return (
    <div className={classes}>
      {children}
      {fieldState.invalid && <FieldErrorMessage error={fieldState.error!} />}
    </div>
  );
};

const FieldErrorMessage: React.FC<{
  error: FieldError;
}> = ({ error }) => {
  return (
    <div className="p-2 rounded-lg text-xs bg-red-200 text-red-600 flex flex-row gap-3 items-center">
      <AlertCircle />
      <p>{error.message}</p>
    </div>
  );
};

export default Field;
