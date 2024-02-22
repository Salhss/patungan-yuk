import {
  formattedCurrency,
  formattedMonthArr,
  generateStrToSlug,
} from "@/app/lib/methods";
import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  const { id, logo, name, packages } = props;

  return (
    <div className="border flex flex-col bg-white phone:rounded-lg h-full phone:p-2 phone:min-w-48 desktop:px-3 desktop:pt-4 desktop:min-w-80">
      <div className="circle bg-[#f5f5f5] self-center rounded-full phone:size-5 phone:mb-2 desktop:size-7"></div>
      <div className="header flex items-center phone:gap-2 phone:mb-3">
        <div className="img-container flex justify-center items-center object-contain phone:size-[30px] desktop:size-12">
          <Image
            src={logo}
            width={45}
            height={45}
            alt={name}
            className="h-auto w-full object-contain"
          />
        </div>
        <h1 className="font-bold text-[#2d2d2d] phone:text-xl">{name}</h1>
      </div>
      <div className="package-container phone:mb-5 desktop:space-y-2">
        {packages.map((item) => (
          <div key={item._id} className="packages">
            <div className="category flex flex-col text-[#2d2d2d] phone:gap-[2px] phone:my-1 desktop:gap-0">
              <p className="phone:text-xs desktop:text-base">{item.name}</p>
              <div className="duration-price flex justify-between items-center">
                <p className="font-bold phone:text-[11px] desktop:text-base">
                  Rp. {formattedCurrency(item.price)}
                  <span className="font-medium">
                    {" "}
                    /
                    {item.durations[0].month > 1
                      ? item.durations[0].month
                      : ""}{" "}
                    bln
                  </span>
                </p>
                <div className=" bg-blue-100 w-fit phone:p-[2px] phone:rounded desktop:p-1 desktop:px-2 desktop:rounded-lg">
                  <p className=" text-blue-600 phone:text-[8px] desktop:text-xs">
                    {formattedMonthArr(item.durations)} bln
                  </p>
                </div>
              </div>
            </div>
            <p></p>
          </div>
        ))}
      </div>
      <Link
        href={`/${generateStrToSlug(name)}?id=${id}`}
        className="text-center text-white bg-blue-400 mt-auto phone:rounded-md phone:py-1 desktop:py-3 desktop:text-xl cursor-pointer hover:bg-blue-300"
      >
        Pesan
      </Link>
    </div>
  );
}
