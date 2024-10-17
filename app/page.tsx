import FirstSection from "./components/FirstSection";
import SecondeSection from "./components/SecondeSection";

export default function Home() {
  return (
    <div className="bg-white w-full  md:p-10">
      <div className="flex md:flex-col flex-col justify-center items-center w-full">
        <div className="w-full">
          <FirstSection className="w-full" />
        </div>
        <div className="w-full">
          <SecondeSection className="w-full" />
        </div>
      </div>
    </div>
  );
}
