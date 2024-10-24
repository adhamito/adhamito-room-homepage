import FirstSection from "./components/FirstSection";
import SecondeSection from "./components/SecondeSection";

export default function Home() {
  return (
    <div className="bg-white w-full md:h-96  md:p-20">
      <div className="flex md:flex-col flex-col items-start w-full ">
        <div className="w-full md:h-96 h-fit">
          <FirstSection className="w-full " />
        </div>
        <div className="w-full h-full ">
          <SecondeSection className="w-full" />
        </div>
      </div>
    </div>
  );
}
