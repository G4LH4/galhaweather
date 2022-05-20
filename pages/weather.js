// Components
import Header from "../components/header";
import MainSection from "../components/MainSection";

export default function Weather() {
  return (
    <div className="w-screen h-screen font-mono text-white bg-bgColor">
      <Header />

      <MainSection />
    </div>
  );
}
