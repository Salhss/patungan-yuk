import Image from "next/image";
import Card from "./components/ui/card";
import { platforms } from "./lib/platform";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex justify-center items-center laptop:h-screen">
      <div className="plaftform-container grid phone:grid-cols-2 phone:gap-2 laptop:grid-cols-4 laptop:gap-8">
        {platforms.map((platform) => (
          <div className={nunito.className} key={platform._id}>
            <Card
              id={platform._id}
              logo={platform.logoUrl}
              name={platform.name}
              packages={platform.packages}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
