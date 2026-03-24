import Container from "../ui/container";

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 py-10">
      <Container>{date.getFullYear()}</Container>
    </footer>
  );
};

export default Footer;
