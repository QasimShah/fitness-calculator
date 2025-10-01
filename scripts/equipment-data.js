// Equipment database structured by workout type and experience level
// Note: Populate with additional products over time. This is a solid starter set to enable the feature end-to-end.

window.EquipmentDB = (function createEquipmentDatabase(){
  /**
   * Each product:
   * - Use real ASINs when possible; affiliateLink uses a placeholder tag `?tag=planyourcalories-20`
   */
  const placeholder = 'https://via.placeholder.com/320x200?text=Equipment';
  const tag = 'planyourcalories-20';
  const amzn = (asin) => `https://www.amazon.com/dp/${asin}?tag=${tag}`;

  function p({ id, name, price, minPrice, maxPrice, asin, rating, reviewCount, image, features, description, category, priority }){
    return {
      id,
      name,
      price,
      minPrice,
      maxPrice,
      amazonASIN: asin,
      affiliateLink: amzn(asin),
      rating,
      reviewCount,
      image: image || placeholder,
      features,
      description,
      category,
      priority
    };
  }

  const strength_beginner = [
    p({ id:'str-beg-db-1', name:'Amazon Basics Neoprene Dumbbell Pair (2×10 lb)', price:'$25-35', minPrice:25, maxPrice:35, asin:'B073HJG8DN', rating:4.8, reviewCount:38000, image:'', features:['Non-slip neoprene','Beginner-friendly weights','Compact storage'], description:'Perfect starter dumbbells for full-body strength circuits at home.', category:'dumbbells', priority:10 }),
    p({ id:'str-beg-band-1', name:'Fit Simplify Resistance Loop Bands (Set of 5)', price:'$10-15', minPrice:10, maxPrice:15, asin:'B01AVDVHTI', rating:4.6, reviewCount:120000, image:'', features:['5 resistance levels','Portable','Great for warm-ups'], description:'Bands add progressive resistance for beginners learning movement patterns.', category:'bands', priority:9 }),
    p({ id:'str-beg-bench-1', name:'Flybird Adjustable Weight Bench', price:'$120-160', minPrice:120, maxPrice:160, asin:'B07FQ9B5C7', rating:4.6, reviewCount:36000, image:'', features:['Adjustable positions','Foldable','300+ lb capacity'], description:'Versatile bench enables presses, rows, and core moves as you progress.', category:'bench', priority:8 }),
    p({ id:'str-beg-kb-1', name:'Yes4All Kettlebell 15 lb', price:'$25-40', minPrice:25, maxPrice:40, asin:'B00U6MR9S4', rating:4.7, reviewCount:21000, image:'', features:['Durable cast iron','Textured handle','Budget-friendly'], description:'Great for swings, goblet squats, and carries to build foundational strength.', category:'kettlebell', priority:7 }),
    p({ id:'str-beg-mat-1', name:'BalanceFrom GoYoga Exercise Mat', price:'$15-25', minPrice:15, maxPrice:25, asin:'B01LP0KPA2', rating:4.5, reviewCount:91000, image:'', features:['1/2 inch thick','Non-slip','Includes strap'], description:'Comfortable mat for floor work, mobility, and core training.', category:'accessories', priority:6 })
  ];

  const strength_intermediate = [
    p({ id:'str-int-db-1', name:'Bowflex SelectTech 552 Adjustable Dumbbells (Pair)', price:'$350-450', minPrice:350, maxPrice:450, asin:'B001ARYU58', rating:4.7, reviewCount:19000, image:'', features:['2–52.5 lb each','Dial system','Space-saving'], description:'One set covers most compound and accessory work for home strength.', category:'dumbbells', priority:10 }),
    p({ id:'str-int-bar-1', name:'CAP 300 lb Olympic Weight Set', price:'$300-450', minPrice:300, maxPrice:450, asin:'B00D3LAZ9C', rating:4.5, reviewCount:3500, image:'', features:['7’ bar + plates','Knurled grip','Home gym essential'], description:'Progressive loading for squats, presses, and deadlifts as you advance.', category:'barbell', priority:9 }),
    p({ id:'str-int-rack-1', name:'Fitness Reality 810XLT Power Rack', price:'$250-350', minPrice:250, maxPrice:350, asin:'B01N4I8FOY', rating:4.7, reviewCount:11000, image:'', features:['800 lb capacity','Pull-up bar','Safety bars'], description:'Safe compound lifting at home with room to grow.', category:'rack', priority:8 })
  ];

  const strength_advanced = [
    p({ id:'str-adv-db-1', name:'NUOBELL 80 lb Adjustable Dumbbells (Pair)', price:'$600-700', minPrice:600, maxPrice:700, asin:'B08XY3J3Y1', rating:4.6, reviewCount:1800, image:'', features:['5–80 lb','Quick change','Commercial feel'], description:'Heavy, fast-adjusting bells for advanced hypertrophy and strength.', category:'dumbbells', priority:10 }),
    p({ id:'str-adv-bar-1', name:'Rogue Ohio Bar (Black Zinc)', price:'$295-350', minPrice:295, maxPrice:350, asin:'B00K6QH8WQ', rating:4.8, reviewCount:1200, image:'', features:['190k PSI','Dual marks','Premium bearings'], description:'Premium barbell for serious training and Olympic lifts.', category:'barbell', priority:9 })
  ];

  const cardio_beginner = [
    p({ id:'car-beg-rope-1', name:'DEGOL Skipping Rope', price:'$8-12', minPrice:8, maxPrice:12, asin:'B0749LQY5N', rating:4.4, reviewCount:48000, image:'', features:['Ball bearing','Adjustable length','Foam handles'], description:'Low-cost cardio anywhere; perfect for short intervals.', category:'jump_rope', priority:10 }),
    p({ id:'car-beg-bike-1', name:'YOSUDA Indoor Cycling Bike', price:'$250-350', minPrice:250, maxPrice:350, asin:'B07D528W98', rating:4.5, reviewCount:44000, image:'', features:['Quiet belt drive','LCD monitor','Cage pedals'], description:'Beginner-friendly stationary bike for low-impact cardio.', category:'bike', priority:8 })
  ];

  const cardio_intermediate = [
    p({ id:'car-int-row-1', name:'Concept2 Model D RowErg', price:'$900-1200', minPrice:900, maxPrice:1200, asin:'B00NH9WEUA', rating:4.9, reviewCount:15000, image:'', features:['PM5 monitor','Folds for storage','Trusted by pros'], description:'Full-body cardio with precise metrics and durability.', category:'rower', priority:10 })
  ];

  const cardio_advanced = [
    p({ id:'car-adv-tm-1', name:'NordicTrack Commercial 1750 Treadmill', price:'$1800-2300', minPrice:1800, maxPrice:2300, asin:'B08179VQPD', rating:4.6, reviewCount:3000, image:'', features:['Incline/decline','iFit','10” touchscreen'], description:'High-end treadmill for advanced runners and HIIT sprints.', category:'treadmill', priority:10 })
  ];

  const hiit_beginner = [
    p({ id:'hiit-beg-timer-1', name:'Gym Boss Interval Timer', price:'$20-25', minPrice:20, maxPrice:25, asin:'B001QOC2FG', rating:4.6, reviewCount:9000, image:'', features:['Clip on','Loud beep','Easy setup'], description:'Makes intervals effortless for newcomers to HIIT.', category:'timer', priority:9 }),
    p({ id:'hiit-beg-band-1', name:'TRX Go Suspension Trainer', price:'$90-120', minPrice:90, maxPrice:120, asin:'B00KBIEX7C', rating:4.7, reviewCount:14000, image:'', features:['Door anchor','Full-body','Portable'], description:'Bodyweight HIIT circuits anywhere with scalable difficulty.', category:'suspension', priority:10 })
  ];

  const hiit_intermediate = [
    p({ id:'hiit-int-rope-1', name:'RX Smart Gear Speed Rope', price:'$50-70', minPrice:50, maxPrice:70, asin:'B07H5QF7LZ', rating:4.6, reviewCount:1800, image:'', features:['Adjustable cable','Fast bearings','Durable'], description:'Double-unders and fast cadence for conditioning.', category:'jump_rope', priority:9 })
  ];

  const hiit_advanced = [
    p({ id:'hiit-adv-br-1', name:'POWER GUIDANCE Battle Rope 1.5”×50’', price:'$80-120', minPrice:80, maxPrice:120, asin:'B01N6K3E6P', rating:4.7, reviewCount:7000, image:'', features:['Protective sleeve','Anchor kit','Harsh conditioning'], description:'Advanced metabolic finishers and power endurance.', category:'battle_rope', priority:10 })
  ];

  const yoga_beginner = [
    p({ id:'yog-beg-mat-1', name:'Gaiam Yoga Mat (6mm)', price:'$20-30', minPrice:20, maxPrice:30, asin:'B00K6S1B3Q', rating:4.6, reviewCount:42000, image:'', features:['Non-slip','6mm cushion','Many colors'], description:'Stable beginner mat for poses and stretching.', category:'mat', priority:10 }),
    p({ id:'yog-beg-block-1', name:'REEHUT Yoga Blocks (2-Pack) + Strap', price:'$15-25', minPrice:15, maxPrice:25, asin:'B01I4EC0F0', rating:4.7, reviewCount:18000, image:'', features:['High-density foam','8’ strap','Support & mobility'], description:'Blocks and strap improve alignment and mobility.', category:'blocks', priority:9 })
  ];

  const yoga_intermediate = [
    p({ id:'yog-int-wheel-1', name:'UpCircleSeven Yoga Wheel', price:'$35-50', minPrice:35, maxPrice:50, asin:'B01N6OKG4N', rating:4.7, reviewCount:10000, image:'', features:['Back opener','Sweat-resistant','Strong core work'], description:'Challenging backbends and core engagement for intermediates.', category:'wheel', priority:8 })
  ];

  const yoga_advanced = [
    p({ id:'yog-adv-premat-1', name:'Manduka PRO Yoga Mat', price:'$110-140', minPrice:110, maxPrice:140, asin:'B0000DZFXZ', rating:4.7, reviewCount:6000, image:'', features:['Lifetime durability','Dense cushioning','Closed-cell'], description:'Premium platform for advanced practice and durability.', category:'mat', priority:9 })
  ];

  const functional_beginner = [
    p({ id:'func-beg-kb-1', name:'CAP Kettlebell 20 lb', price:'$35-45', minPrice:35, maxPrice:45, asin:'B004X4K4G2', rating:4.6, reviewCount:16000, image:'', features:['Solid cast iron','Wide handle','Versatile'], description:'Foundational carries, swings, and squats for functional strength.', category:'kettlebell', priority:10 }),
    p({ id:'func-beg-band-1', name:'WSAKOUE Pull Up Assist Bands Set', price:'$25-40', minPrice:25, maxPrice:40, asin:'B07GQ8S59M', rating:4.7, reviewCount:21000, image:'', features:['Multiple strengths','Door anchor','Mobility + strength'], description:'Great for assisted pull-ups and varied resistance training.', category:'bands', priority:9 })
  ];

  const functional_intermediate = [
    p({ id:'func-int-trx-1', name:'TRX All-in-One Suspension Trainer', price:'$150-200', minPrice:150, maxPrice:200, asin:'B002YRB35I', rating:4.8, reviewCount:20000, image:'', features:['Pro-grade','Door & anchor','Full-body'], description:'Versatile bodyweight system for strength and mobility.', category:'suspension', priority:10 })
  ];

  const functional_advanced = [
    p({ id:'func-adv-sled-1', name:'Rogue Echo Dog Sled (similar on Amazon)', price:'$200-300', minPrice:200, maxPrice:300, asin:'B01N5H7V2Q', rating:4.5, reviewCount:500, image:'', features:['Loadable posts','Grass/garage','Conditioning & power'], description:'Heavy-loaded pushes and drags for advanced conditioning.', category:'sled', priority:8 })
  ];

  const mixed_beginner = [
    p({ id:'mix-beg-adjust-1', name:'Yes4All Adjustable Dumbbells 40 lb Set', price:'$60-90', minPrice:60, maxPrice:90, asin:'B001ARYU74', rating:4.5, reviewCount:14000, image:'', features:['Plates + handles','Space efficient','Good value'], description:'Covers strength accessories and circuits on a budget.', category:'dumbbells', priority:10 }),
    p({ id:'mix-beg-jump-1', name:'WOD Nation Speed Jump Rope', price:'$15-20', minPrice:15, maxPrice:20, asin:'B00S8W8QMG', rating:4.5, reviewCount:17000, image:'', features:['Fast cable','Adjustable','Great for conditioning'], description:'Add cardio finishers to mixed routines.', category:'jump_rope', priority:9 })
  ];

  const mixed_intermediate = [
    p({ id:'mix-int-kbset-1', name:'Kettlebell Set 15/25/35 lb', price:'$150-220', minPrice:150, maxPrice:220, asin:'B07W8S9K8Z', rating:4.6, reviewCount:4000, image:'', features:['Three bells','Powder coat','Progressive loads'], description:'Versatile movement patterns across conditioning and strength.', category:'kettlebell', priority:9 })
  ];

  const mixed_advanced = [
    p({ id:'mix-adv-rack-1', name:'PRx Performance Profile Rack', price:'$700-900', minPrice:700, maxPrice:900, asin:'B08Q3Y8Q9R', rating:4.7, reviewCount:600, image:'', features:['Wall folding','Space-saving','Heavy duty'], description:'High-end compact gym for advanced mixed training.', category:'rack', priority:8 })
  ];

  return {
    strength: { beginner: strength_beginner, intermediate: strength_intermediate, advanced: strength_advanced },
    cardio: { beginner: cardio_beginner, intermediate: cardio_intermediate, advanced: cardio_advanced },
    hiit: { beginner: hiit_beginner, intermediate: hiit_intermediate, advanced: hiit_advanced },
    yoga: { beginner: yoga_beginner, intermediate: yoga_intermediate, advanced: yoga_advanced },
    functional: { beginner: functional_beginner, intermediate: functional_intermediate, advanced: functional_advanced },
    mixed: { beginner: mixed_beginner, intermediate: mixed_intermediate, advanced: mixed_advanced }
  };
})();

