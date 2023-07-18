export const calculateMakros = (foodLogs, numDays) => {
  const dailyMakroLogs = {};
  dailyMakroLogs['total'] = { calori: 0, protein: 0, carbohydrate: 0, fat: 0 };
  
  if (numDays < Object.keys(foodLogs).length) {
    const initIndex = Object.keys(foodLogs).length - numDays;
    const rangedDays = Object.keys(foodLogs).slice(initIndex);
    
    for (const day of rangedDays) {
      dailyMakroLogs[day] = { calori: 0, protein: 0, carbohydrate: 0, fat: 0 };
      for (const log of Object.values(foodLogs[day])) {
        dailyMakroLogs['total'].calori += log.calori * log.qt;
        dailyMakroLogs[day].calori += log.calori * log.qt;
        dailyMakroLogs['total'].protein += log.protein * log.qt;
        dailyMakroLogs[day].protein += log.protein * log.qt;
        dailyMakroLogs['total'].carbohydrate += log.carbohydrate * log.qt;
        dailyMakroLogs[day].carbohydrate += log.carbohydrate * log.qt;
        dailyMakroLogs['total'].fat += log.fat * log.qt;
        dailyMakroLogs[day].fat += log.fat * log.qt;
      }
    }
  } else {
    
    for (const day of Object.keys(foodLogs)) {
      dailyMakroLogs[day] = { calori: 0, protein: 0, carbohydrate: 0, fat: 0 };
      for (const log of Object.values(foodLogs[day])) {
        dailyMakroLogs['total'].calori += log.calori * log.qt;
        dailyMakroLogs[day].calori += log.calori * log.qt;
        dailyMakroLogs['total'].protein += log.protein * log.qt;
        dailyMakroLogs[day].protein += log.protein * log.qt;
        dailyMakroLogs['total'].carbohydrate += log.carbohydrate * log.qt;
        dailyMakroLogs[day].carbohydrate += log.carbohydrate * log.qt;
        dailyMakroLogs['total'].fat += log.fat * log.qt;
        dailyMakroLogs[day].fat += log.fat * log.qt;
      }
    }
  }
  return dailyMakroLogs;
};
