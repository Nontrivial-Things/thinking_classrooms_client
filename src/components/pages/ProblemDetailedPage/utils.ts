import { format } from "date-fns";
import { pl } from "date-fns/locale";

export const formatDate = (date: string): string => {
  return format(new Date(date), "d MMM y", {
    locale: pl,
  });
};
