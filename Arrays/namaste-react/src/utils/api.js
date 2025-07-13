import fetch from "node-fetch";

export default async function handler(req, res) {
  const { id } = req.query;

  const response = await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.6244807&restaurantId=${id}`,
    {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept": "application/json",
        "Referer": "https://www.swiggy.com/",
        "Origin": "https://www.swiggy.com",
      },
    }
  );

  try {
    const data = await response.json(); // will throw if response is HTML
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    // fallback in case HTML is returned
    const text = await response.text();
    res.status(500).json({
      error: "Failed to parse JSON. Swiggy may have blocked the request.",
      rawResponse: text.slice(0, 300), // show start of HTML
    });
  }
}
