import { Value } from "../types";

export const formatURL = (url: string, date: Value): string => {
    if (date instanceof Date) {
        const newUrl = new URL(url);
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const minDate = `${formattedDate}T00:00:00Z`;
        const maxDate = `${formattedDate}T23:59:59Z`;

        newUrl.searchParams.append('filter', `startDate gt ${minDate} and endDate lt ${maxDate}`);

        return newUrl.toString();
    }
    
    return '';
}