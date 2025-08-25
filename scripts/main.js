(function(){
  // Ad initialization function (no-op, inline banner handles its own loading)
  function initializeAds() {
    // intentionally left blank to prevent duplicate pushes
  }

  const form = document.getElementById('planner-form');
  const heightInputs = document.getElementById('height-inputs');
  const heightToggleBtns = Array.from(document.querySelectorAll('[data-height-unit]'));
  const weightToggleBtns = Array.from(document.querySelectorAll('[data-weight-unit]'));
  const weightInput = document.getElementById('weight-value');
  const resultsSection = document.getElementById('results');
  const loading = document.getElementById('loading');
  const kpiCalories = document.getElementById('kpi-calories');
  const kpiProtein = document.getElementById('kpi-protein');
  const kpiCarbs = document.getElementById('kpi-carbs');
  const kpiFat = document.getElementById('kpi-fat');

  const mealPlanEl = document.getElementById('meal-plan');
  const workoutPlanEl = document.getElementById('workout-plan');
  const changePlanBtn = document.getElementById('change-plan-btn');

  let heightUnit = 'cm';
  let weightUnit = 'kg';

  // Global safety nets: if any runtime error bubbles, ensure spinner hides
  window.addEventListener('error', function(){ try { loading.hidden = true; } catch(_){} });
  window.addEventListener('unhandledrejection', function(){ try { loading.hidden = true; } catch(_){} });

  // Ensure spinner is hidden on initial load regardless of caching/state
  try { showLoading(false); } catch(_){}
  document.addEventListener('DOMContentLoaded', function(){ 
    try { showLoading(false); } catch(_){}
    // Initialize ads when page loads
    initializeAds();
    
    // Initialize real-time validation
    initializeRealTimeValidation();
  });
  window.addEventListener('load', function(){ try { showLoading(false); } catch(_){} });

  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply saved theme on load
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (darkModeToggle) {
    darkModeToggle.innerHTML = currentTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      darkModeToggle.innerHTML = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
  }

  heightToggleBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if (btn.classList.contains('is-active')) return;
      heightToggleBtns.forEach(b=>{ b.classList.remove('is-active'); b.setAttribute('aria-pressed','false');});
      btn.classList.add('is-active'); btn.setAttribute('aria-pressed','true');
      heightUnit = btn.dataset.heightUnit;
      renderHeightInputs();
    });
  });

  function renderHeightInputs(){
    heightInputs.innerHTML = '';
    if (heightUnit === 'cm'){
      const cm = document.createElement('input');
      cm.id = 'height-value';
      cm.name = 'heightValue';
      cm.type = 'number';
      cm.placeholder = 'cm';
      cm.min = '120';
      cm.max = '220';
      cm.required = true;
      cm.inputMode = 'decimal';
      heightInputs.appendChild(cm);
    } else {
      const ft = document.createElement('input');
      ft.id = 'height-ft';
      ft.name = 'heightFt';
      ft.type = 'number';
      ft.placeholder = 'ft';
      ft.min = '4';
      ft.max = '7';
      ft.required = true;
      ft.inputMode = 'numeric';

      const inch = document.createElement('input');
      inch.id = 'height-in';
      inch.name = 'heightIn';
      inch.type = 'number';
      inch.placeholder = 'in';
      inch.min = '0';
      inch.max = '11';
      inch.required = true;
      inch.inputMode = 'numeric';

      heightInputs.appendChild(ft);
      heightInputs.appendChild(inch);
    }
  }

  weightToggleBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if (btn.classList.contains('is-active')) return;
      weightToggleBtns.forEach(b=>{ b.classList.remove('is-active'); b.setAttribute('aria-pressed','false');});
      btn.classList.add('is-active'); btn.setAttribute('aria-pressed','true');
      weightUnit = btn.dataset.weightUnit === 'lb' ? 'lb' : 'kg';
      weightInput.placeholder = weightUnit;
      // Reset weight value when unit changes (like height)
      weightInput.value = '';
    });
  });

  function cmFromHeight(){
    if (heightUnit === 'cm'){
      const v = Number(document.getElementById('height-value')?.value || 0);
      return v;
    }
    const ft = Number(document.getElementById('height-ft')?.value || 0);
    const inch = Number(document.getElementById('height-in')?.value || 0);
    const totalIn = ft * 12 + inch;
    return Math.round(totalIn * 2.54);
  }

  function kgFromWeight(){
    const v = Number(weightInput.value || 0);
    if (weightUnit === 'kg') return v;
    return Math.round(v * 0.453592 * 10) / 10;
  }

  // Enhanced validation functions with specific error messages
  function validateAge() {
    const ageInput = document.getElementById('age');
    const age = Number(ageInput.value || 0);
    const isValid = !Number.isNaN(age) && age >= 16 && age <= 80;
    
    if (isValid) {
      clearFieldError(ageInput);
    } else {
      showFieldError(ageInput, 'Age must be between 16 and 80');
    }
    
    return isValid;
  }

  function validateHeight() {
    const heightInputs = document.getElementById('height-inputs');
    const currentHeightInput = heightInputs.querySelector('input');
    
    // Check if height input exists
    if (!currentHeightInput) {
      return false;
    }
    
    const heightCm = cmFromHeight();
    const isValid = heightCm && heightCm >= 120 && heightCm <= 220;
    
    if (isValid) {
      clearFieldError(currentHeightInput);
    } else {
      showFieldError(currentHeightInput, 'Height must be between 120cm and 220cm (4ft-7ft)');
    }
    
    return isValid;
  }

  function validateWeight() {
    const weightInput = document.getElementById('weight-value');
    const weightKg = kgFromWeight();
    const isValid = weightKg && weightKg >= 30 && weightKg <= 200;
    
    if (isValid) {
      clearFieldError(weightInput);
    } else {
      showFieldError(weightInput, 'Weight must be between 30kg and 200kg (66lbs-441lbs)');
    }
    
    return isValid;
  }

  function validateRequired(fieldId, fieldName) {
    const field = document.getElementById(fieldId);
    const value = field.value;
    const isValid = value && value.trim() !== '';
    
    if (isValid) {
      clearFieldError(field);
    } else {
      showFieldError(field, `${fieldName} is required`);
    }
    
    return isValid;
  }

  function showFieldError(element, message) {
    // Remove existing error
    clearFieldError(element);
    
    // Add error styling
    element.classList.add('field-error');
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error-message';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    
    // Handle height and weight fields differently (they have toggle buttons)
    if (element.id === 'height-value' || element.id === 'height-ft' || element.id === 'height-in') {
      // For height: insert after the unit-row (which contains input + toggle buttons)
      const unitRow = element.closest('.unit-row');
      if (unitRow && unitRow.parentNode) {
        unitRow.parentNode.insertBefore(errorDiv, unitRow.nextSibling);
      } else {
        element.parentNode.appendChild(errorDiv);
      }
    } else if (element.id === 'weight-value') {
      // For weight: insert after the unit-row (which contains input + toggle buttons)
      const unitRow = element.closest('.unit-row');
      if (unitRow && unitRow.parentNode) {
        unitRow.parentNode.insertBefore(errorDiv, unitRow.nextSibling);
      } else {
        element.parentNode.appendChild(errorDiv);
      }
    } else if (element.classList.contains('select-display')) {
      // For custom select buttons: insert after the <ul> tag (dropdown menu)
      const customSelect = element.closest('.custom-select');
      if (customSelect) {
        const ulElement = customSelect.querySelector('ul');
        if (ulElement && ulElement.parentNode) {
          ulElement.parentNode.insertBefore(errorDiv, ulElement.nextSibling);
        } else {
          customSelect.appendChild(errorDiv);
        }
      } else {
        element.parentNode.appendChild(errorDiv);
      }
    } else if (element.classList.contains('health-input')) {
      // For regular input fields (like age): insert directly after the input element
      element.parentNode.insertBefore(errorDiv, element.nextSibling);
    } else {
      // For any other elements: insert after the element
      element.parentNode.insertBefore(errorDiv, element.nextSibling);
    }
  }

  function clearFieldError(element) {
    element.classList.remove('field-error');
    
    // Handle height and weight fields differently (they have toggle buttons)
    if (element.id === 'height-value' || element.id === 'height-ft' || element.id === 'height-in') {
      // For height: look for error after the unit-row
      const unitRow = element.closest('.unit-row');
      if (unitRow && unitRow.nextSibling && 
          unitRow.nextSibling.classList && 
          unitRow.nextSibling.classList.contains('field-error-message')) {
        unitRow.nextSibling.remove();
      }
    } else if (element.id === 'weight-value') {
      // For weight: look for error after the unit-row
      const unitRow = element.closest('.unit-row');
      if (unitRow && unitRow.nextSibling && 
          unitRow.nextSibling.classList && 
          unitRow.nextSibling.classList.contains('field-error-message')) {
        unitRow.nextSibling.remove();
      }
    } else if (element.classList.contains('select-display')) {
      // For custom select buttons: look for error after the <ul> tag (dropdown menu)
      const customSelect = element.closest('.custom-select');
      if (customSelect) {
        const ulElement = customSelect.querySelector('ul');
        if (ulElement && ulElement.nextSibling && 
            ulElement.nextSibling.classList && 
            ulElement.nextSibling.classList.contains('field-error-message')) {
          ulElement.nextSibling.remove();
        }
      }
    } else if (element.classList.contains('health-input')) {
      // For regular input fields (like age): look for error directly after the input element
      if (element.nextSibling && 
          element.nextSibling.classList && 
          element.nextSibling.classList.contains('field-error-message')) {
        element.nextSibling.remove();
      }
    } else {
      // For any other elements: look for error after the element
      if (element.nextSibling && 
          element.nextSibling.classList && 
          element.nextSibling.classList.contains('field-error-message')) {
        element.nextSibling.remove();
      }
    }
  }

  function initializeRealTimeValidation() {
    // Age validation on blur only (not on every keystroke)
    const ageInput = document.getElementById('age');
    if (ageInput) {
      ageInput.addEventListener('blur', validateAge);
    }
    
    // Height validation on blur only (not on every keystroke)
    const heightInput = document.getElementById('height-value');
    if (heightInput) {
      heightInput.addEventListener('blur', validateHeight);
    }
    
    // Also validate when height inputs are dynamically created
    const heightInputs = document.getElementById('height-inputs');
    if (heightInputs) {
      // Use MutationObserver to watch for dynamically added height inputs
      const observer = new MutationObserver(() => {
        const currentHeightInput = heightInputs.querySelector('input');
        if (currentHeightInput) {
          // Remove existing listeners to prevent duplicates
          currentHeightInput.removeEventListener('blur', validateHeight);
          // Add new listeners
          currentHeightInput.addEventListener('blur', validateHeight);
        }
      });
      observer.observe(heightInputs, { childList: true });
    }
    
    // Weight validation on blur only (not on every keystroke)
    const weightInput = document.getElementById('weight-value');
    if (weightInput) {
      weightInput.addEventListener('blur', validateWeight);
    }
    
    // Height toggle - no validation needed
    const heightToggleBtns = document.querySelectorAll('[data-height-unit]');
    heightToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Clear any existing height errors when toggling
        setTimeout(() => {
          const currentHeightInput = document.getElementById('height-inputs').querySelector('input');
          if (currentHeightInput) {
            clearFieldError(currentHeightInput);
          }
        }, 100);
      });
    });
    
    // Weight toggle - no validation needed
    const weightToggleBtns = document.querySelectorAll('[data-weight-unit]');
    weightToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Clear any existing weight errors when toggling
        setTimeout(() => {
          const weightInput = document.getElementById('weight-value');
          if (weightInput) {
            clearFieldError(weightInput);
          }
        }, 100);
      });
    });
  }

  function validate(){
    const ageValid = validateAge();
    const heightValid = validateHeight();
    const weightValid = validateWeight();
    
    const genderHidden = document.getElementById('gender-hidden');
    const gender = genderHidden ? genderHidden.value : '';
    const genderValid = gender && gender.trim() !== '';
    if (!genderValid) {
      // Target the custom select display button for red border
      const genderSelect = document.querySelector('[data-select="gender"] .select-display');
      showFieldError(genderSelect, 'Gender selection is required');
    }

    // Validate activity level selection
    const activity = document.getElementById('activity').value;
    const activityValid = activity && activity.trim() !== '';
    if (!activityValid) {
      // Target the custom select display button for red border
      const activitySelect = document.querySelector('[data-select="activity"] .select-display');
      showFieldError(activitySelect, 'Activity level selection is required');
    }

    // Validate goal selection
    const goal = document.getElementById('goal').value;
    const goalValid = goal && goal.trim() !== '';
    if (!goalValid) {
      // Target the custom select display button for red border
      const goalSelect = document.querySelector('[data-select="goal"] .select-display');
      showFieldError(goalSelect, 'Goal selection is required');
    }

    // Validate diet preference selection
    const diet = document.getElementById('diet').value;
    const dietValid = diet && diet.trim() !== '';
    if (!dietValid) {
      // Target the custom select display button for red border
      const dietSelect = document.querySelector('[data-select="diet"] .select-display');
      showFieldError(dietSelect, 'Diet preference selection is required');
    }

    return ageValid && heightValid && weightValid && genderValid && activityValid && goalValid && dietValid;
  }

  function showLoading(show){
    if (!loading) return;
    loading.hidden = !show;
    if (show) loading.classList.add('is-visible'); else loading.classList.remove('is-visible');
  }

  function smoothReveal(el){
    el.hidden = false;
    el.classList.remove('results-hidden'); // Remove hidden state
    el.style.opacity = 0;
    el.style.visibility = 'visible'; // Ensure visibility is set
    el.style.transition = 'opacity 0.4s ease'; // Match CSS transition
    requestAnimationFrame(()=>{
      el.style.opacity = 1;
    });
    
    // Ads are initialized inline; avoid duplicate pushes here
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    // Clear any existing errors first
    document.querySelectorAll('.field-error-message').forEach(errorMsg => {
      errorMsg.remove();
    });
    document.querySelectorAll('.field-error').forEach(field => {
      field.classList.remove('field-error');
    });
    
    if (!validate()){
      // Scroll to first error
      const firstError = document.querySelector('.field-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    const age = Number(document.getElementById('age').value);
    const gender = (document.getElementById('gender-hidden') || {}).value;
    const heightCm = cmFromHeight();
    const weightKg = kgFromWeight();
    const activity = document.getElementById('activity').value;
    const goal = document.getElementById('goal').value;
    const diet = document.getElementById('diet').value;

    showLoading(true);

    setTimeout(()=>{
      try {
        const C = (window.App && window.App.Calculator) || {};
        const M = (window.App && window.App.Meals) || {};
        const E = (window.App && window.App.Exercises) || {};

        if (!C.calculateBMR || !M.generateWeeklyMealPlan || !E.generateWorkoutPlan) {
          throw new Error('Core modules failed to load');
        }

      const bmr = C.calculateBMR(age, gender, weightKg, heightCm);
      const tdee = C.calculateTDEE(bmr, activity);
      const calories = Math.round(C.adjustForGoal(tdee, goal));
      const macros = C.calculateMacros(calories, weightKg, goal);

        const dailyMacrosForWeekly = { protein: macros.proteinGrams, carbs: macros.carbGrams, fat: macros.fatGrams };
        const weeklyMealPlan = M.generateWeeklyMealPlan(calories, goal, diet);
      const workoutPlan = E.generateWorkoutPlan(age, gender, activity, goal);

      updateKpis(calories, macros);
        displayWeeklyMealPlan(weeklyMealPlan);
        const mealResults = document.getElementById('meal-plan-results');
        if (mealResults) mealResults.style.display = 'block';
      renderWorkoutPlan(workoutPlan);

      smoothReveal(resultsSection);

      // Add form blur effect
      form.classList.add('form-blurred');

      // Scroll to results smoothly
      setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

      try { localStorage.setItem('hf_last_plan', JSON.stringify({age,gender,heightCm,weightKg,activity,goal,diet,calories,macros,weeklyMealPlan,workoutPlan})); } catch(_e){}
      } catch (err) {
        console.error(err);
        alert('Oops! Something went wrong generating your plan. Please try again.');
      } finally {
        showLoading(false);
      }
    }, 700);
  });

  function updateKpis(calories, macros){
    kpiCalories.textContent = `${calories.toLocaleString()} kcal`;
    kpiProtein.textContent = `${macros.proteinGrams} g`;
    kpiCarbs.textContent = `${macros.carbGrams} g`;
    kpiFat.textContent = `${macros.fatGrams} g`;
  }

  // Weekly display
  function displayWeeklyResults(weeklyPlan, dailyCalories, dailyMacros){
    const dcal = document.getElementById('daily-calories');
    const dpro = document.getElementById('daily-protein');
    const dcar = document.getElementById('daily-carbs');
    const dfat = document.getElementById('daily-fat');
    if (dcal) dcal.textContent = Math.round(dailyCalories).toString();
    if (dpro) dpro.textContent = Math.round(dailyMacros.protein).toString();
    if (dcar) dcar.textContent = Math.round(dailyMacros.carbs).toString();
    if (dfat) dfat.textContent = Math.round(dailyMacros.fat).toString();

    Object.keys(weeklyPlan).forEach(mealType => {
      const container = document.getElementById(`${mealType}-meals`);
      if (!container) return;
      container.innerHTML = '';
      weeklyPlan[mealType].forEach((meal, index) => {
        const dayNumber = index + 1;
        const isRepeat = !!meal.isRepeat;
        const mealDiv = document.createElement('div');
        mealDiv.className = `daily-meal ${isRepeat ? 'repeat' : ''}`;
        mealDiv.innerHTML = `
          <div class="day-number">Day ${dayNumber}${isRepeat ? ' (Repeat)' : ''}</div>
          <div class="meal-content">${formatMealContent(meal)}</div>
          <div class="meal-calories">~${Math.round(meal.calories)} calories</div>
        `;
        container.appendChild(mealDiv);
      });
    });
  }

  function formatMealContent(meal){
    if (!meal || !meal.foods) return '';
    return meal.foods.map(f => `${f.quantity} ${f.unit} ${f.name}`.trim()).join(' + ');
  }

  // New structured weekly meal plan renderer (Day 1..7 with named meals)
  function displayWeeklyMealPlan(weeklyPlan){
    const container = document.getElementById('weekly-meal-container');
    if (!container) return;
    container.innerHTML = '';

    weeklyPlan.forEach(dayPlan => {
      const dayDiv = document.createElement('div');
      dayDiv.className = 'day-meal-plan';
      dayDiv.innerHTML = `
        <div class="day-header"><h4>Day ${dayPlan.day}</h4></div>
        <div class="meals-grid">
          <div class="meal-item">
            <h5>Breakfast:</h5>
            <p class="meal-name">${dayPlan.breakfast.name} - <span class="meal-macros">${dayPlan.breakfast.calories} cal | ${dayPlan.breakfast.protein}g protein</span></p>
            <p class="meal-foods">${dayPlan.breakfast.foods}</p>
          </div>
          <div class="meal-item">
            <h5>Lunch:</h5>
            <p class="meal-name">${dayPlan.lunch.name} - <span class="meal-macros">${dayPlan.lunch.calories} cal | ${dayPlan.lunch.protein}g protein</span></p>
            <p class="meal-foods">${dayPlan.lunch.foods}</p>
          </div>
          <div class="meal-item">
            <h5>Dinner:</h5>
            <p class="meal-name">${dayPlan.dinner.name} - <span class="meal-macros">${dayPlan.dinner.calories} cal | ${dayPlan.dinner.protein}g protein</span></p>
            <p class="meal-foods">${dayPlan.dinner.foods}</p>
          </div>
          <div class="meal-item">
            <h5>Snacks:</h5>
            <p class="meal-name">${dayPlan.snack.name} - <span class="meal-macros">${dayPlan.snack.calories} cal | ${dayPlan.snack.protein}g protein</span></p>
            <p class="meal-foods">${dayPlan.snack.foods}</p>
          </div>
        </div>
      `;
      container.appendChild(dayDiv);
    });
  }

  function renderWorkoutPlan(plan){
    workoutPlanEl.innerHTML = '';
    const header = document.createElement('div');
    header.className = 'workout';
    header.innerHTML = `
      <h4>Overview</h4>
      <div class="meta">${plan.frequency} • Split: ${(plan.split || '').split('_').join('/')} • Cardio: ${plan.cardio}</div>
    `;
    workoutPlanEl.appendChild(header);

    // Group exercises by body part for better organization
    const exercisesByBodyPart = plan.exercises;
    const bodyPartNames = {
      chest: '🧘🏻‍♀️ Chest',
      back: '🧗 Back', 
      legs: '🦵 Legs',
      shoulders: '🏋️ Shoulders',
      arms: '💪 Arms',
      core: '🎯 Core'
    };

    Object.keys(exercisesByBodyPart).forEach(bodyPart => {
      if (exercisesByBodyPart[bodyPart] && exercisesByBodyPart[bodyPart].length > 0) {
        const bodyPartSection = document.createElement('div');
        bodyPartSection.className = 'workout body-part-section';
        bodyPartSection.innerHTML = `
          <h4>${bodyPartNames[bodyPart] || bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}</h4>
      <ul class="list">
            ${exercisesByBodyPart[bodyPart].map(ex => 
              `<li>${ex.name} — ${ex.sets}×${ex.reps}, Rest ${ex.rest} <span class="meta">(${ex.equipment}; ${ex.form})</span></li>`
            ).join('')}
      </ul>
        `;
        workoutPlanEl.appendChild(bodyPartSection);
      }
    });

    const tips = document.createElement('div');
    tips.className = 'workout tips';
    tips.innerHTML = `<div class="meta">💡 Tips: Use controlled tempo, full range of motion, and log your progression weekly.</div>`;
    workoutPlanEl.appendChild(tips);
  }

  renderHeightInputs();

  try {
    const last = JSON.parse(localStorage.getItem('hf_last_plan') || 'null');
    if (last){
      document.getElementById('age').value = last.age || '';
      // Do not auto-select gender; keep dropdown placeholder unless already chosen previously
      const gh = document.getElementById('gender-hidden');
      if (gh && last.gender){ gh.value = last.gender; const gs = document.getElementById('gender-selected'); if (gs) gs.textContent = last.gender.charAt(0).toUpperCase()+last.gender.slice(1); }
      if (heightUnit === 'cm'){
        document.getElementById('height-value').value = last.heightCm;
      }
      weightInput.value = (last.weightKg || '');
      const act = document.getElementById('activity'); if (act && last.activity){ act.value = last.activity; const as = document.getElementById('activity-selected'); if (as) as.textContent = rootLabelForActivity(last.activity); }
      const goal = document.getElementById('goal'); if (goal && last.goal){ goal.value = last.goal; const gs2 = document.getElementById('goal-selected'); if (gs2) gs2.textContent = rootLabelForGoal(last.goal); }
      const diet = document.getElementById('diet'); if (diet && last.diet){ diet.value = last.diet; const ds = document.getElementById('diet-selected'); if (ds) ds.textContent = last.diet.charAt(0).toUpperCase()+last.diet.slice(1); }
    }
  } catch(_e){}

  // Custom dropdown functionality - single clean implementation
  (function initCustomDropdowns(){
    function closeAll(except){
      document.querySelectorAll('.custom-select.open').forEach(el=>{ 
        if (!except || el !== except) {
          el.classList.remove('open'); 
          const display = el.querySelector('.select-display');
          if (display) display.setAttribute('aria-expanded','false');
        }
      });
    }

    // Smart dropdown direction detection
    function setDropdownDirection(dropdown) {
      const menu = dropdown.querySelector('.select-menu');
      if (!menu) return;
      
      // Reset any previous direction classes
      menu.classList.remove('dropdown-up', 'dropdown-down');
      
      const rect = dropdown.getBoundingClientRect();
      const menuHeight = 200; // Approximate menu height
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;
      
      // If not enough space below but enough above, show upward
      if (spaceBelow < menuHeight && spaceAbove > menuHeight) {
        menu.classList.add('dropdown-up');
      } else {
        menu.classList.add('dropdown-down');
      }
    }

    // Handle all dropdown clicks
    document.addEventListener('click', (e)=>{
      const display = e.target.closest('.select-display');
      if (display){
        e.preventDefault();
        e.stopPropagation();
        const root = display.closest('.custom-select');
        if (!root) return;
        
        const isOpen = root.classList.contains('open');
        closeAll(root);
        
        if (!isOpen) {
          root.classList.add('open');
          display.setAttribute('aria-expanded','true');
          // Set direction after opening
          setDropdownDirection(root);
        } else {
          root.classList.remove('open');
          display.setAttribute('aria-expanded','false');
        }
        return;
      }

      // Handle option selection
      const option = e.target.closest('.option');
      if (option){
        e.preventDefault();
        e.stopPropagation();
        const root = option.closest('.custom-select');
        if (!root) return;

        const selectKey = root.getAttribute('data-select');
        const selectedSpan = document.getElementById(`${selectKey}-selected`);
        const hiddenInput = document.getElementById(`${selectKey}-hidden`) || document.getElementById(selectKey);

        // Update display text
        if (selectedSpan) selectedSpan.textContent = option.textContent;
        
        // Update hidden input value
        if (hiddenInput) hiddenInput.value = option.getAttribute('data-value') || '';

        // Update aria-selected
        root.querySelectorAll('.option').forEach(o => o.removeAttribute('aria-selected'));
        option.setAttribute('aria-selected','true');

        // Close dropdown
        closeAll();
        return;
      }

          // Click outside closes all
    if (!e.target.closest('.custom-select')) closeAll();
  });

  // Update dropdown direction on scroll to handle dynamic positioning
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.custom-select.open').forEach(dropdown => {
      setDropdownDirection(dropdown);
    });
  });

  // Update dropdown direction on window resize
  window.addEventListener('resize', () => {
    document.querySelectorAll('.custom-select.open').forEach(dropdown => {
      setDropdownDirection(dropdown);
    });
  });
})();
  // Gender custom select sync
  // Reset any cookie/localStorage prefill to keep placeholders until user interacts
  (function resetInitialState(){
    const el = (id) => document.getElementById(id);
    const setText = (id, text) => { const n = el(id); if (n) n.textContent = text; };
    const setVal = (id, val) => { const n = el(id); if (n) n.value = val; };
    setVal('age',''); setVal('height-value',''); setVal('height-ft',''); setVal('height-in',''); setVal('weight-value','');
    setVal('gender-hidden',''); setText('gender-selected','Select gender');
    setVal('activity',''); setText('activity-selected','Select activity level');
    setVal('goal',''); setText('goal-selected','Select your goal');
    setVal('diet',''); setText('diet-selected','Select diet');
  })();

  // Change plan button functionality
  if (changePlanBtn) {
    changePlanBtn.addEventListener('click', () => {
      // Remove form blur first
      form.classList.remove('form-blurred');
      
      // Scroll to the very top of the page smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // After scroll completes, fade out the results
      setTimeout(() => {
        resultsSection.classList.add('results-hidden');
      }, 800); // Wait for scroll to complete
    });
  }


})();

