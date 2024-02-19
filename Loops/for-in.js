let obj = {
  notepad: 50,
  washcloth: 60,
  laserpointer: 70,
  glitter: 50,
  chain: 52,
  rat: 56,
  shovel: 45,
  paint: 30,
};

for (const key in obj) {
  console.log("Number of " + key + " is " + obj[key]);
}
