const judgeVegetable = function(veggies, chars){
  let result;

  // Create array of redness values
  let rednessArray = [];
  veggies.forEach(veg => rednessArray.push(veg[chars]));

  // Find object with highest redness value and return it's submitter
  let bestRedness = Math.max(...rednessArray);
  veggies.forEach(veg => {
    if (veg[chars] === bestRedness){
      result = veg.submitter;
    }
  });
  
  return result;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },{
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },{
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));