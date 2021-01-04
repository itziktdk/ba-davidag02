export const environment = {
  production: true
};

export const snapshotToArray = snapshot => {
  const returnArray = [];
  snapshot.forEach(element => {
    const item = element.val();
    item.key = element.key;
    console.log(item);
    returnArray.push(item);
  });

  return returnArray;
};
