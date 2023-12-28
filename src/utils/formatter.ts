import { Value } from "../types";


export const formatExtendedDate = (date: Value): string => {
    if (date instanceof Date) {
        const dateFormatOptions: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };

        const formatOfDate = new Intl.DateTimeFormat('pt-BR', dateFormatOptions);
        const dataFormatada = formatOfDate.format(date);

        return dataFormatada;
    }

    return "";
}


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

