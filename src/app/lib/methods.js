export const formattedCurrency = (num) => {
  return new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR",
  }).format(num);
};

export const formattedMonthArr = (arr) => {
  return arr.map((item) => item.month).join(", ");
};

export const generateStrToSlug = (str) => {
  return str.toLowerCase().split(" ").join("-");
};
