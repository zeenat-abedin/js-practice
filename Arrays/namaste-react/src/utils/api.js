import fetch from "node-fetch";

export default async function handler(req, res) {
  const { id } = req.query;
  const response = await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.6244807&restaurantId=${id}`
  );
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
