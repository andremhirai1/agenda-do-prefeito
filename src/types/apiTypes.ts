interface ApiResponse {
    actions: {};
    facets: any[];
    items: Item[];
    lastPage: number;
    page: number;
    pageSize: number;
    totalCount: number;
}

interface Item {
    dateCreated: string;
    dateModified: string;
    id: number;
    keywords: any[];
    status: {
        code: number;
        label: string;
        label_i18n: string;
    };
    taxonomyCategoryBriefs: any[];
    startDate: string;
    endDate: string;
    siteID: number;
    title: string;
    location: string;
}


export type { ApiResponse, Item };