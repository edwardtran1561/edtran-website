import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const UserLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-18.75">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;
