import Image from "next/image";

export default function Card(props) {
  const { id, logo, name, packages } = props;

  const formattedCurrency = (num) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(num);
  };

  const formattedMonthArr = (arr) => {
    return arr.map((item) => item.month).join(", ");
  };
  return (
    <div className="border flex flex-col bg-white phone:rounded-lg phone:min-h-44 phone:p-2 phone:min-w-48">
      <div className="circle bg-[#f5f5f5] self-center rounded-full phone:w-5 phone:h-5 phone:mb-2"></div>
      <div className="header flex items-center phone:gap-2 phone:mb-3">
        <div className="img-container flex justify-center items-center object-contain phone:w-[30px] phone:h-[30px]">
          <Image
            src={logo}
            width={45}
            height={45}
            alt={name}
            className="h-auto w-full object-contain"
          />
        </div>
        <h1 className="font-bold text-[#2d2d2d] phone:text-[14px]">{name}</h1>
      </div>
      <div
        className={`package-container ${
          packages.length > 2 ? "phone:h-44" : "phone:h-28"
        }`}
      >
        {packages.map((item) => (
          <div key={item._id} className="packages">
            <div className="category flex flex-col text-[#2d2d2d] phone:gap-[2px] phone:my-1">
              <p className="phone:text-xs">{item.name}</p>
              <div className="duration-price flex justify-between items-center">
                <p className="font-bold phone:text-[11px]">
                  {formattedCurrency(item.price)}
                  <span className="font-medium">
                    {" "}
                    /{item.durations[0].name}bln
                  </span>
                </p>
                <div className=" bg-blue-100 w-fit phone:p-[2px] phone:rounded">
                  <p className=" text-blue-600 phone:text-[8px]">
                    {formattedMonthArr(item.durations)} bln
                  </p>
                </div>
              </div>
            </div>
            <p></p>
          </div>
        ))}
      </div>
      <div className="text-center text-white bg-blue-400 phone:rounded-md phone:py-1">
        Pesan
      </div>
    </div>
  );
}
