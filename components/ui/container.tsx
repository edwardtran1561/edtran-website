interface ContainerProps extends React.PropsWithChildren {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const classes = ["max-w-full w-[1024px] mx-auto px-3", className || ""].join(
    " ",
  );

  return <div className={classes}>{children}</div>;
};

export default Container;
