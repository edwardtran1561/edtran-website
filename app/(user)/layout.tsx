import Header from "@/components/shared/header";

const UserLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-18.75">
      <Header />
      {children}
    </div>
  );
};

export default UserLayout;
