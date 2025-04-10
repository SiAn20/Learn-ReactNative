// lib/nasa.js
export async function getLatestImages() {
  const SEARCH_URL =
    "https://images-api.nasa.gov/search?q=space&media_type=image";

  const rawData = await fetch(SEARCH_URL);
  const json = await rawData.json();
  const items = json.collection.items;

  return items.slice(0, 10).map((item) => {
    const data = item.data[0];
    const img = item.links ? item.links[0].href : null;
    const year = new Date(data.date_created).getFullYear();

    return {
      title: data.title,
      description: data.description,
      image: img,
      nasa_id: data.nasa_id,
      year: year,
    };
  });
}
