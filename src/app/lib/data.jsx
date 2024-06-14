import { parse } from 'papaparse';

export const fetchPreguntasAndTeoria = async (url) => {
    const response = await fetch(url, { next: { revalidate: 30 } });
    const csvData = await response.text();
    const jsonData = parse(csvData, { header: true });
    return jsonData.data;
}