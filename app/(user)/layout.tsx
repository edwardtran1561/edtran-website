import Header from "@/components/shared/header";

const UserLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default UserLayout;
