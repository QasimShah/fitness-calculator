(function(){
  const exerciseDatabase = {
    beginner: {
      chest: [
        {name:"Push-ups", equipment:"bodyweight", sets:3, reps:"8-15", rest:"60s", form:"Straight line head to heels"},
        {name:"Incline Push-ups", equipment:"bench/step", sets:3, reps:"10-15", rest:"60s", form:"Hands elevated"},
        {name:"Wall Push-ups", equipment:"wall", sets:2, reps:"15-20", rest:"45s", form:"Arms length from wall"},
        {name:"Knee Push-ups", equipment:"bodyweight", sets:3, reps:"10-20", rest:"60s", form:"Modified position"},
        {name:"Decline Push-ups", equipment:"bench/step", sets:2, reps:"5-12", rest:"75s", form:"Feet elevated"}
      ],
      back: [
        {name:"Superman", equipment:"bodyweight", sets:3, reps:"12-15", rest:"45s", form:"Lift chest and legs"},
        {name:"Reverse Snow Angels", equipment:"bodyweight", sets:3, reps:"15-20", rest:"45s", form:"Sweep arms"},
        {name:"Bent-over Reverse Fly", equipment:"light weights", sets:3, reps:"12-15", rest:"60s", form:"Squeeze blades"},
        {name:"Bird Dog", equipment:"bodyweight", sets:3, reps:"8 each side", rest:"45s", form:"Opposite limbs"},
        {name:"Prone Y-Raises", equipment:"bodyweight", sets:2, reps:"12-15", rest:"45s", form:"Arms in Y shape"}
      ],
      legs: [
        {name:"Bodyweight Squats", equipment:"bodyweight", sets:3, reps:"15-20", rest:"60s", form:"Knees over toes"},
        {name:"Lunges", equipment:"bodyweight", sets:3, reps:"10/leg", rest:"60s", form:"Both knees at 90°"},
        {name:"Wall Sit", equipment:"wall", sets:3, reps:"30-45s", rest:"60s", form:"Thighs parallel"},
        {name:"Calf Raises", equipment:"bodyweight", sets:3, reps:"15-20", rest:"45s", form:"Controlled tempo"}
      ],
      shoulders: [
        {name:"Arm Circles", equipment:"bodyweight", sets:2, reps:"10 each dir", rest:"30s", form:"Small to large"},
        {name:"Pike Push-ups", equipment:"bodyweight", sets:2, reps:"8-12", rest:"60s", form:"Hips high"},
        {name:"Wall Handstand Hold", equipment:"wall", sets:2, reps:"10-30s", rest:"60s", form:"Feet against wall"},
        {name:"Shoulder Shrugs", equipment:"bodyweight", sets:2, reps:"15-20", rest:"45s", form:"Lift shoulders up"}
      ],
      core: [
        {name:"Plank", equipment:"bodyweight", sets:3, reps:"20-45s", rest:"60s", form:"Neutral spine"},
        {name:"Mountain Climbers", equipment:"bodyweight", sets:3, reps:"20 total", rest:"60s", form:"Fast but controlled"},
        {name:"Dead Bug", equipment:"bodyweight", sets:3, reps:"8/side", rest:"45s", form:"Opposite limbs"},
        {name:"Bicycle Crunches", equipment:"bodyweight", sets:3, reps:"15 each side", rest:"45s", form:"Controlled rotation"},
        {name:"Side Plank", equipment:"bodyweight", sets:2, reps:"15-30s each side", rest:"60s", form:"Straight line"}
      ],
      arms: [
        {name:"Wall Push-ups", equipment:"wall", sets:2, reps:"10-15", rest:"60s", form:"Arms length from wall"},
        {name:"Tricep Dips (Chair)", equipment:"chair", sets:2, reps:"8-12", rest:"60s", form:"Elbows back"},
        {name:"Arm Circles", equipment:"bodyweight", sets:2, reps:"10 each dir", rest:"30s", form:"Small to large"},
        {name:"Water Bottle Curls", equipment:"water bottles", sets:2, reps:"12-15", rest:"45s", form:"Controlled bicep curl"},
        {name:"Wall Tricep Push", equipment:"wall", sets:2, reps:"10-12", rest:"60s", form:"Hands close together"},
        {name:"Resistance Band Curls", equipment:"resistance band", sets:2, reps:"15-20", rest:"45s", form:"Squeeze at top"}
      ]
    },
    intermediate: {
      chest: [
        {name:"Barbell Bench Press", equipment:"barbell", sets:4, reps:"8-12", rest:"90s", form:"Pause at chest"},
        {name:"Dumbbell Flyes", equipment:"dumbbells", sets:3, reps:"10-15", rest:"75s", form:"Slight elbow bend"},
        {name:"Dips", equipment:"dip bars", sets:3, reps:"8-15", rest:"75s", form:"Lean forward"}
      ],
      back: [
        {name:"Pull-ups/Chin-ups", equipment:"pull-up bar", sets:4, reps:"6-12", rest:"90s", form:"Full hang"},
        {name:"Bent-over Barbell Rows", equipment:"barbell", sets:4, reps:"8-12", rest:"90s", form:"Hinge at hips"},
        {name:"Lat Pulldowns", equipment:"cable", sets:3, reps:"10-15", rest:"75s", form:"Pull to chest"}
      ],
      legs: [
        {name:"Barbell Back Squats", equipment:"barbell", sets:4, reps:"8-12", rest:"120s", form:"Chest up"},
        {name:"Romanian Deadlifts", equipment:"barbell", sets:4, reps:"8-12", rest:"90s", form:"Hip hinge"},
        {name:"Bulgarian Split Squats", equipment:"dumbbells", sets:3, reps:"10/leg", rest:"75s", form:"Rear foot elevated"},
        {name:"Walking Lunges", equipment:"dumbbells", sets:3, reps:"12/leg", rest:"75s", form:"Alternating"}
      ],
      shoulders: [
        {name:"Overhead Press", equipment:"barbell/dumbbells", sets:4, reps:"8-12", rest:"90s", form:"Core tight"},
        {name:"Lateral Raises", equipment:"dumbbells", sets:3, reps:"12-15", rest:"60s", form:"To shoulder height"},
        {name:"Face Pulls", equipment:"cable", sets:3, reps:"15-20", rest:"60s", form:"Squeeze rear delts"}
      ],
      core: [
        {name:"Hanging Knee Raises", equipment:"bar", sets:3, reps:"10-15", rest:"60s", form:"No swing"},
        {name:"Cable Woodchops", equipment:"cable", sets:3, reps:"10-15", rest:"60s", form:"Rotate through core"}
      ],
      arms: [
        {name:"Barbell Curls", equipment:"barbell", sets:3, reps:"10-12", rest:"75s", form:"No swinging"},
        {name:"Close-Grip Bench Press", equipment:"barbell", sets:3, reps:"8-12", rest:"90s", form:"Elbows in"},
        {name:"Hammer Curls", equipment:"dumbbells", sets:3, reps:"12-15", rest:"60s", form:"Neutral grip"},
        {name:"Tricep Dips", equipment:"dip bars", sets:3, reps:"8-15", rest:"75s", form:"Upright torso"},
        {name:"Dumbbell Curls", equipment:"dumbbells", sets:3, reps:"10-15", rest:"60s", form:"Full range"},
        {name:"Overhead Tricep Extension", equipment:"dumbbells", sets:3, reps:"10-15", rest:"75s", form:"Keep elbows still"},
        {name:"Cable Curls", equipment:"cable", sets:3, reps:"12-15", rest:"60s", form:"Constant tension"},
        {name:"Tricep Pushdowns", equipment:"cable", sets:3, reps:"12-15", rest:"60s", form:"Squeeze at bottom"}
      ]
    },
    advanced: {
      chest: [
        {name:"Barbell Bench Press", equipment:"barbell", sets:5, reps:"5-8", rest:"120s", form:"Leg drive"},
        {name:"Weighted Dips", equipment:"dip belt", sets:4, reps:"6-10", rest:"90s", form:"Explosive up"},
        {name:"Incline Dumbbell Press", equipment:"dumbbells", sets:4, reps:"8-12", rest:"90s", form:"Full ROM"}
      ],
      back: [
        {name:"Weighted Pull-ups", equipment:"weight belt", sets:5, reps:"5-10", rest:"120s", form:"Dead hang"},
        {name:"T-Bar Rows", equipment:"t-bar", sets:4, reps:"8-12", rest:"90s", form:"Chest supported"},
        {name:"Barbell Rows", equipment:"barbell", sets:4, reps:"6-10", rest:"90s", form:"Strict"}
      ],
      legs: [
        {name:"Back Squats (Heavy)", equipment:"barbell", sets:5, reps:"3-6", rest:"180s", form:"Depth"},
        {name:"Conventional Deadlifts", equipment:"barbell", sets:5, reps:"3-6", rest:"180s", form:"Neutral spine"},
        {name:"Front Squats", equipment:"barbell", sets:4, reps:"6-10", rest:"120s", form:"Upright torso"},
        {name:"Hip Thrusts", equipment:"barbell", sets:4, reps:"8-15", rest:"90s", form:"Squeeze top"}
      ],
      shoulders: [
        {name:"Arnold Press", equipment:"dumbbells", sets:4, reps:"8-12", rest:"90s", form:"Rotate"},
        {name:"Heavy Overhead Press", equipment:"barbell", sets:5, reps:"5-8", rest:"120s", form:"Strict form"},
        {name:"Weighted Lateral Raises", equipment:"dumbbells", sets:4, reps:"8-12", rest:"75s", form:"Controlled"},
        {name:"Handstand Push-ups", equipment:"wall", sets:3, reps:"5-10", rest:"90s", form:"Full range"}
      ],
      core: [
        {name:"Ab Wheel Rollouts", equipment:"ab wheel", sets:4, reps:"8-12", rest:"75s", form:"No arch"},
        {name:"Weighted Planks", equipment:"weight plate", sets:4, reps:"30-60s", rest:"90s", form:"Perfect form"},
        {name:"Dragon Flags", equipment:"bench", sets:3, reps:"5-10", rest:"120s", form:"Advanced control"},
        {name:"Weighted Russian Twists", equipment:"weight plate", sets:4, reps:"15-20", rest:"60s", form:"Core tight"}
      ],
      arms: [
        {name:"Weighted Chin-ups", equipment:"weight belt", sets:4, reps:"6-10", rest:"90s", form:"Full ROM"},
        {name:"Skull Crushers", equipment:"barbell", sets:4, reps:"8-12", rest:"90s", form:"Elbows fixed"},
        {name:"Preacher Curls", equipment:"preacher bench", sets:4, reps:"8-12", rest:"75s", form:"Slow negative"},
        {name:"Diamond Push-ups", equipment:"bodyweight", sets:3, reps:"8-15", rest:"60s", form:"Hands together"},
        {name:"Concentration Curls", equipment:"dumbbells", sets:4, reps:"8-12", rest:"75s", form:"Strict form"},
        {name:"Weighted Tricep Dips", equipment:"weight belt", sets:4, reps:"6-12", rest:"90s", form:"Deep range"},
        {name:"Cable Hammer Curls", equipment:"cable", sets:4, reps:"10-15", rest:"60s", form:"Neutral grip"},
        {name:"Overhead Cable Extension", equipment:"cable", sets:4, reps:"10-15", rest:"75s", form:"Full stretch"}
      ]
    }
  };

  function selectExercises(db, split, avoidList, preferredList, repRange, restTime){
    const picks = {};

    function pickFrom(groupName, count){
      const group = db[groupName] || [];
      const safe = group.filter(ex => !avoidList.includes(ex.name.toLowerCase()));
      
      if (safe.length === 0) return;
      
      // Create a pool of exercises with weighted randomness
      const exercisePool = [];
      
      safe.forEach(ex => {
        let weight = 1; // Base weight for all exercises
        
        // Boost weight for preferred exercises (but don't dominate)
        preferredList.forEach(pref => {
          const prefWord = pref.split('_')[0];
          if (ex.name.toLowerCase().includes(prefWord)) {
            weight += 1.5; // Moderate preference boost
          }
        });
        
        // Add multiple copies based on weight for random selection
        const copies = Math.ceil(weight * 3);
        for (let i = 0; i < copies; i++) {
          exercisePool.push(ex);
        }
      });
      
      // Randomly select exercises without replacement
      const selected = [];
      const poolCopy = [...exercisePool];
      
      picks[groupName] = [];
      for (let i = 0; i < Math.min(count, safe.length); i++){
        if (poolCopy.length === 0) break;
        
        const randomIndex = Math.floor(Math.random() * poolCopy.length);
        const selectedEx = poolCopy[randomIndex];
        
        // Remove all copies of this exercise to avoid duplicates
        for (let j = poolCopy.length - 1; j >= 0; j--) {
          if (poolCopy[j].name === selectedEx.name) {
            poolCopy.splice(j, 1);
          }
        }
        
        picks[groupName].push({ ...selectedEx, reps: repRange, rest: restTime, bodyPart: groupName });
      }
    }

    if (split === 'full_body'){
      pickFrom('chest', 2);
      pickFrom('back', 2);
      pickFrom('legs', 2);
      pickFrom('shoulders', 2);
      pickFrom('arms', 2);
      pickFrom('core', 2);
    } else if (split === 'upper_lower'){
      pickFrom('chest', 2);
      pickFrom('back', 2);
      pickFrom('shoulders', 2);
      pickFrom('arms', 2);
      pickFrom('core', 2);
      pickFrom('legs', 2);
    } else { // push_pull_legs
      pickFrom('chest', 2);
      pickFrom('shoulders', 2);
      pickFrom('arms', 2);
      pickFrom('back', 2);
      pickFrom('legs', 2);
      pickFrom('core', 2);
    }
    
    return picks;
  }

  function generateWorkoutPlan(age, gender, activityLevel, goal){
    const { getActivityData, getAgeModifications, getGoalData, getGenderPreferences } = window.App.Calculator;
    const activityData = getActivityData(activityLevel);
    const experienceLevel = activityData.experienceLevel;
    const workoutDays = activityData.workoutDays;
    const ageMod = getAgeModifications(age);
    const goalData = getGoalData(goal);
    const genderPrefs = getGenderPreferences(gender);

    const db = exerciseDatabase[experienceLevel];

    let split = 'full_body';
    if (workoutDays <= 3) split = 'full_body';
    else if (workoutDays === 4) split = 'upper_lower';
    else split = 'push_pull_legs';

    const selectedExercises = selectExercises(
      db,
      split,
      ageMod.avoidExercises.map(s=>s.toLowerCase()),
      genderPrefs.preferredExercises.map(s=>s.toLowerCase()),
      goalData.repRange,
      goalData.restTime
    );

    return {
      frequency: `${workoutDays} days per week`,
      split,
      exercises: selectedExercises,
      cardio: `${activityData.cardioMinutes} minutes post-workout`
    };
  }

  window.App = window.App || {};
  window.App.Exercises = {
    exerciseDatabase,
    selectExercises,
    generateWorkoutPlan
  };
})();

