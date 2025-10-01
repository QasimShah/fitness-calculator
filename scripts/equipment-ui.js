// UI for equipment recommendations

window.EquipmentUI = (function EquipmentUIFactory(){
  const R = window.EquipmentRecommender;

  function createButton(){
    const btn = document.createElement('button');
    btn.className = 'eq-button';
    btn.type = 'button';
    btn.textContent = '🏋️ Get Equipment Recommendations';
    btn.setAttribute('aria-label','Get Equipment Recommendations');
    return btn;
  }

  function renderModal(){
    let modal = document.getElementById('eq-modal');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'eq-modal';
    modal.className = 'eq-modal hidden';
    modal.innerHTML = `
      <div class="eq-backdrop"></div>
      <div class="eq-dialog" role="dialog" aria-modal="true" aria-labelledby="eq-title">
        <div class="eq-header">
          <h3 id="eq-title">Personalized Equipment</h3>
          <button class="eq-close" aria-label="Close">✕</button>
        </div>
        <div class="eq-content">
          <div class="eq-summary"></div>
          <div class="eq-cards"></div>
          <div class="eq-tips">
            <h4>Money-saving tips</h4>
            <ul>
              <li>Start with essentials; add premium upgrades later.</li>
              <li>Choose adjustable gear to cover more weights.</li>
              <li>Watch for deals and open-box discounts.</li>
            </ul>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.querySelector('.eq-backdrop').addEventListener('click', ()=> hideModal());
    modal.querySelector('.eq-close').addEventListener('click', ()=> hideModal());
    return modal;
  }

  function showModal(){
    const modal = renderModal();
    modal.classList.remove('hidden');
    document.body.classList.add('no-scroll');
  }
  function hideModal(){
    const modal = document.getElementById('eq-modal');
    if (modal){ modal.classList.add('hidden'); }
    document.body.classList.remove('no-scroll');
  }

  function cardFor(item, workoutType){
    const div = document.createElement('div');
    div.className = 'eq-card';
    div.innerHTML = `
      <img class="eq-img" src="${item.image}" alt="${item.name}" loading="lazy"/>
      <div class="eq-info">
        <h5 class="eq-name">${item.name}</h5>
        <div class="eq-meta">
          <span class="eq-price">${item.price}</span>
          <span class="eq-rating">⭐ ${item.rating} (${item.reviewCount.toLocaleString()})</span>
        </div>
        <ul class="eq-features">
          ${item.features.slice(0,3).map(f=>`<li>${f}</li>`).join('')}
        </ul>
        <p class="eq-why">Why recommended: ${item.description}</p>
        <a class="eq-buy" href="${item.affiliateLink}" target="_blank" rel="nofollow sponsored noopener">Buy on Amazon</a>
      </div>`;
    const buy = div.querySelector('.eq-buy');
    buy.addEventListener('click', ()=> {
      try { gtag && gtag('event','equipment_click',{ item_id:item.id, workout_type:workoutType }); } catch(_e){}
    });
    return div;
  }

  function mountRecommendations({ workoutPlan, userInputs, budget }){
    const workoutType = R.analyzeWorkoutType(workoutPlan);
    const level = R.determineExperienceLevel(userInputs);
    const items = R.getEquipmentRecommendations(workoutType, level, budget);
    const budgetSummary = R.summarizeBudget(items);

    const modal = renderModal();
    const cards = modal.querySelector('.eq-cards');
    const summary = modal.querySelector('.eq-summary');
    cards.innerHTML = '';
    items.forEach(item => cards.appendChild(cardFor(item, workoutType)));
    summary.innerHTML = `
      <div class="eq-summary-grid">
        <div><strong>Workout type:</strong> ${workoutType}</div>
        <div><strong>Level:</strong> ${level}</div>
        <div><strong>Est. setup cost:</strong> $${budgetSummary.min}–$${budgetSummary.max}</div>
      </div>`;

    showModal();
    try { gtag && gtag('event','equipment_view',{ workout_type:workoutType, level }); } catch(_e){}
  }

  return { createButton, mountRecommendations, showModal, hideModal };
})();

