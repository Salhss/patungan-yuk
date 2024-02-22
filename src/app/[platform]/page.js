import { notFound } from "next/navigation";
import { findPlaformById, platforms } from "../lib/platform";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { formattedCurrency } from "../lib/methods";

export function generateStaticParams() {
  return platforms.map((item) => ({
    platform: item.name.toLowerCase().split(" ").join("-"),
  }));
}

export const dynamicParams = false;

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Platform({ params, searchParams }) {
  const { platform } = params;
  const { id } = searchParams;

  const getPlatformById = findPlaformById(id);
  if (getPlatformById.length == 0) return notFound();

  const dataPlatform = getPlatformById[0];
  return (
    <div className={nunito.className}>
      <div className="container bg-gray-400 mx-auto phone:pt-5">
        <h1 className="phone:mb-5">Pilih Paket</h1>
        <div className="grid phone:grid-cols-2 phone:gap-2">
          {dataPlatform.packages.map((item) => (
            <div key={item._id} className="border rounded-md phone:p-2">
              <div className="flex items-center phone:gap-2 phone:mb-2">
                <Image
                  src={dataPlatform.logoUrl}
                  width={45}
                  height={45}
                  alt={dataPlatform.name}
                  className="h-auto phone:w-5"
                />
                <h1 className="font-bold phone:text-sm phone:leading-4">
                  {dataPlatform.name}
                </h1>
              </div>
              <p className="phone:text-sm">{item.name}</p>
              <p className="font-bold phone:text-sm">
                Rp. {formattedCurrency(item.price)} /{" "}
                {item.durations[0].month > 1
                  ? item.durations[0].month + " Bulan"
                  : " Bulan"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
