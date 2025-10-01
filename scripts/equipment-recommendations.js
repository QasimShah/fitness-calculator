// Core recommendation logic: analyze workout, determine level, and pick items

window.EquipmentRecommender = (function EquipmentRecommenderFactory(){
  const DB = window.EquipmentDB;

  function analyzeWorkoutType(workoutPlan){
    if (!workoutPlan || !workoutPlan.exercises) return 'mixed';
    const counts = { strength:0, cardio:0, hiit:0, yoga:0, functional:0 };
    const byPart = workoutPlan.exercises || {};
    Object.keys(byPart).forEach(part => {
      (byPart[part] || []).forEach(ex => {
        const equip = (ex.equipment || '').toLowerCase();
        const name = (ex.name || '').toLowerCase();
        if (equip.includes('barbell') || equip.includes('dumbbell') || equip.includes('machine') || name.includes('press') || name.includes('row')) counts.strength++;
        if (equip.includes('treadmill') || equip.includes('bike') || equip.includes('elliptical') || name.includes('run')) counts.cardio++;
        if (name.includes('hiit') || name.includes('burpee') || name.includes('sprint') || equip.includes('timer')) counts.hiit++;
        if (name.includes('yoga') || equip.includes('mat') || equip.includes('block') || equip.includes('strap')) counts.yoga++;
        if (equip.includes('kettlebell') || equip.includes('band') || equip.includes('trx') || name.includes('carry') || name.includes('swing')) counts.functional++;
      });
    });
    const primary = Object.entries(counts).sort((a,b)=>b[1]-a[1])[0];
    if (!primary || primary[1] === 0) return 'mixed';
    return primary[0];
  }

  function determineExperienceLevel(userInputs){
    if (!userInputs) return 'beginner';
    const activity = userInputs.activity || userInputs.activityLevel || 'sedentary';
    const goal = userInputs.goal || '';
    if (activity === 'very_active') return 'advanced';
    if (activity === 'active' || activity === 'moderate') return 'intermediate';
    if (goal === 'muscle_gain' && (activity === 'moderate')) return 'intermediate';
    return 'beginner';
  }

  function pickFromDB(type, level){
    const typeKey = DB[type] ? type : 'mixed';
    const levelKey = (DB[typeKey] && DB[typeKey][level]) ? level : 'beginner';
    const items = (DB[typeKey][levelKey] || []).slice();
    items.sort((a,b)=> (b.priority||0) - (a.priority||0));
    return items;
  }

  function getEquipmentRecommendations(workoutType, experienceLevel, budget){
    const items = pickFromDB(workoutType, experienceLevel);
    // Basic budget-aware filter
    if (budget && typeof budget === 'number'){
      const within = items.filter(i => (i.minPrice||0) <= budget);
      if (within.length >= 3) return within.slice(0,5);
    }
    return items.slice(0,5);
  }

  function summarizeBudget(items){
    const min = items.reduce((s,i)=> s + (i.minPrice||0), 0);
    const max = items.reduce((s,i)=> s + (i.maxPrice||0), 0);
    return { min, max };
  }

  return { analyzeWorkoutType, determineExperienceLevel, getEquipmentRecommendations, summarizeBudget };
})();

