import FirstSection from "./components/FirstSection";
import SecondeSection from "./components/SecondeSection";

export default function Home() {
  return (
    <div className="p-10 bg-white w-full h-screen">
      <div className="flex md:flex-row flex-col justify-center items-center w-full ">
        <div>
          <FirstSection />
        </div>
        <div>
          <SecondeSection />
        </div>
      </div>
    </div>
  );
}
