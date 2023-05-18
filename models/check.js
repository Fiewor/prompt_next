const checkDuplicates = (array) => {
  const obj = {};
  array.map((el) => (obj[el] = (obj[el] || 0) + 1));
  obj;
  //   Object.keys(obj)
};

checkDuplicates([4, 4, 5, 5, 6]);
