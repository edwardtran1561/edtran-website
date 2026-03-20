"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

type CheckboxProps = {
  label: string;
  name: string;
  onChange: (value: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange, name }) => {
  const [check, setCheck] = useState<boolean>(false);

  const handleChange = () => {
    setCheck((prev) => !prev);
  };

  useEffect(() => {
    onChange(check);
  }, [check, onChange]);

  return (
    <div className="relative select-none cursor-pointer" onClick={handleChange}>
      <div className="flex flex-row gap-2 items-center">
        <div className="border-2 border-gray-300 w-5 h-5 rounded-md flex items-center justify-center dark:border-gray-600">
          {check && <Check size={14} />}
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{label}</p>
      </div>
      <input
        className="hidden"
        name={name}
        type="checkbox"
        checked={check}
        readOnly
      />
    </div>
  );
};

export default Checkbox;
