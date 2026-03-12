import { Search } from "lucide-react";
import Input from "../ui/input";
import Button from "../ui/button";
import classNames from "classnames";

interface SearchBoxProps {
  className?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ className }) => {
  const classes = classNames({
    "flex basis-auto shrink-0 lg:w-60 rounded-lg overflow-hidden": true,
    [className || ""]: !!className,
  });
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit} className={classes}>
      <Input
        variant="none"
        className="flex-1 w-full text-sm border-t-2 border-l-2 border-b-2 border-gray-200 rounded-tr-none rounded-br-none dark:border-gray-600"
        name="q"
        placeholder="Search content..."
      />
      <Button
        type="submit"
        variant="secondary"
        className="rounded-none shrink-0"
      >
        <Search size={20} />
      </Button>
    </form>
  );
};

export default SearchBox;
