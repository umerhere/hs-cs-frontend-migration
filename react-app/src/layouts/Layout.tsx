import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div style={{ height: 65 }} aria-hidden="true" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
