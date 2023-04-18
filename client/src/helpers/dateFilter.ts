import { Item } from "../types/item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}/${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string) => {
  const [year, month] = date.split("/");

  const newList: Item[] = list.filter(item => {
    const [itemDay, itemMonth, itemYear] = item.date.split("/");
    return +year === +itemYear && +month === +itemMonth
  });

  return newList
};

// export const updateDate = (date: Date) => {
//   let day = String(date.getDate());
//   let month = String(date.getMonth());
//   let year = String(date.getFullYear());

//   if (day.length == 1) day = `0${day}`;
//   if (month.length == 1) month = `0${month}`;

//   return `${day}/${month}/${year}`;
// };

export const formatDate = (date: string) => {
  let [year, month] = date.split("/");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outrubro",
    "Novembro",
    "Dezembro",
  ];

  return `${months[+month - 1]} de ${year}`;
};

export const updateDate = (date: string) => {
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}