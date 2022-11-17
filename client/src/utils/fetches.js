export default async function fetchSource(last_name, location) {
    const url = `https://jailbase-jailbase.p.rapidapi.com/search/?last_name=${last_name}&source_id=${location}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '61325cc49fmshb5d885ec5735cbcp11059fjsneb23015e6f19',
            'X-RapidAPI-Host': 'jailbase-jailbase.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const records = data.records;
    return records
}