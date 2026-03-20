const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-row items-center justify-center bg-gray-100 dark:bg-gray-800">
      {children}
    </div>
  );
};

export default AuthLayout;
