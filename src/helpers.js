export const reviewBudget = (budget, avaliableBudget) => {
    let category;
  
    if (budget / 4 > avaliableBudget) {
      category = "money-left-zero";
    } else if (budget / 2 > avaliableBudget) {
      category = "money-left-half";
    } else {
      category = "money-left";
    }
  
    return category;
};