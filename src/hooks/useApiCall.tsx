import { useEffect, useState } from 'react';
import { ApiResponse } from '../types';


function useApiCall(url: string) {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                const response = await fetch(url, {
                    headers: {
                        'Authorization': 'Basic ' + btoa('test@liferay.com:test')
                    }
                });
                if (!response.ok) {
                    throw new Error('Falha ao obter os dados da API');
                }

                const jsonData: ApiResponse = await response.json();

                setData(jsonData);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
}

export default useApiCall