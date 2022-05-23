// Components
import Header from "../components/header";
import MainSection from "../components/MainSection";
import Footer from "../components/footer";

export default function Weather() {
  return (
    <div className="flex flex-col w-screen h-screen font-mono text-white bg-bgColor">
      <Header />

      <MainSection />

      <Footer />
    </div>
  );
}
