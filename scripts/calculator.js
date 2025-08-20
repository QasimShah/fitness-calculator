(function(){
  const activityMap = {
    sedentary: { multiplier: 1.2, workoutDays: 2, experienceLevel: 'beginner', cardioMinutes: 15 },
    light: { multiplier: 1.375, workoutDays: 3, experienceLevel: 'beginner', cardioMinutes: 20 },
    moderate: { multiplier: 1.55, workoutDays: 4, experienceLevel: 'intermediate', cardioMinutes: 25 },
    active: { multiplier: 1.725, workoutDays: 5, experienceLevel: 'intermediate', cardioMinutes: 30 },
    very_active: { multiplier: 1.9, workoutDays: 6, experienceLevel: 'advanced', cardioMinutes: 35 }
  };

  const goalMap = {
    lose_weight: { calorieAdjustment: -500, proteinMultiplier: 2.2, fatPercentage: 25, repRange: '12-20', restTime: '45-60s', priority: 'deficit' },
    gain_muscle: { calorieAdjustment: 400, proteinMultiplier: 2.0, fatPercentage: 30, repRange: '6-12', restTime: '90-120s', priority: 'surplus' },
    tone_up: { calorieAdjustment: -200, proteinMultiplier: 2.0, fatPercentage: 25, repRange: '10-15', restTime: '60-75s', priority: 'recomp' },
    bulk_up: { calorieAdjustment: 600, proteinMultiplier: 2.4, fatPercentage: 35, repRange: '5-10', restTime: '120-180s', priority: 'bulk' }
  };

  function calculateBMR(age, gender, weightKg, heightCm){
    if (gender === 'male'){
      return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    }
    return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  function getActivityData(level){ return activityMap[level]; }

  function getGoalData(goal){ return goalMap[goal]; }

  function calculateTDEE(bmr, activityLevel){
    const data = getActivityData(activityLevel);
    return bmr * data.multiplier;
  }

  function adjustForGoal(tdee, goal){
    const { calorieAdjustment } = getGoalData(goal);
    return Math.max(1200, tdee + calorieAdjustment);
  }

  function getGenderPreferences(gender){
    if (gender === 'male'){
      return {
        preferredExercises: ['bench', 'deadlifts', 'squats', 'rows', 'press'],
        mealDistribution: [0.20, 0.35, 0.15, 0.30],
        supplementFocus: 'strength'
      };
    }
    return {
      preferredExercises: ['squats', 'lunges', 'raises', 'push', 'pulldowns'],
      mealDistribution: [0.25, 0.30, 0.20, 0.25],
      supplementFocus: 'toning'
    };
  }

  function getAgeModifications(age){
    if (age >= 16 && age <= 25){
      return { intensityMultiplier: 1.2, recoveryDays: 1, avoidExercises: [], preferredExercises: ['deadlifts','squats','bench','weighted'] };
    } else if (age >= 26 && age <= 40){
      return { intensityMultiplier: 1.0, recoveryDays: 1, avoidExercises: [], preferredExercises: ['press','rows','squats'] };
    } else if (age >= 41 && age <= 55){
      return { intensityMultiplier: 0.9, recoveryDays: 2, avoidExercises: ['jumps'], preferredExercises: ['push','pull','bodyweight'] };
    }
    return { intensityMultiplier: 0.8, recoveryDays: 2, avoidExercises: ['heavy','deadlifts'], preferredExercises: ['bodyweight','wall','light'] };
  }

  function calculateMacros(calories, weightKg, goal){
    const goalData = getGoalData(goal);
    const proteinGrams = Math.round(weightKg * goalData.proteinMultiplier);
    const proteinCals = proteinGrams * 4;
    const fatCals = Math.round(calories * (goalData.fatPercentage/100));
    const fatGrams = Math.round(fatCals / 9);
    const carbCals = Math.max(0, Math.round(calories - proteinCals - fatCals));
    const carbGrams = Math.round(carbCals / 4);
    return { proteinGrams, carbGrams, fatGrams };
  }

  window.App = window.App || {};
  window.App.Calculator = {
    calculateBMR,
    calculateTDEE,
    adjustForGoal,
    calculateMacros,
    getActivityData,
    getGoalData,
    getGenderPreferences,
    getAgeModifications
  };
})();

