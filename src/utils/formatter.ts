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


export const formatHours = (date: string): string => {
    const newDate = new Date(date);

    return `${newDate.getHours()}${newDate.getMinutes() ? `:${newDate.getMinutes()}` : ''}h`;
}


export const formatURL = (url: string, date: Value): string => {
    if (date instanceof Date) {
        const newUrl = new URL(url);
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        const formattedDate = `${date.getFullYear()}-${month}-${day}`;
        const minDate = `${formattedDate}T00:00:00Z`;
        const maxDate = `${formattedDate}T23:59:59Z`;

        newUrl.searchParams.append('filter', `startDate gt ${minDate} and endDate lt ${maxDate}`);
        newUrl.searchParams.append('sort', 'startDate:asc');

        return newUrl.toString();
    }

    return '';
}

