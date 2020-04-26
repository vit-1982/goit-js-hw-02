const logItems = function (array) {
  for (const item of array) {
    const itemNo = array.indexOf(item) + 1;
    console.log(`${itemNo} - ${item}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
