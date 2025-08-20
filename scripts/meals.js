(function(){
  // Complete goal-categorized meal database
  const mealDatabase = {
    regular: {
      lose_weight: {
        breakfast: [
          { name: "Protein Egg Scramble", foods: "3 egg whites + 1 whole egg + 100g spinach + 100g mushrooms + 1 slice whole wheat toast", calories: 380, protein: 28, carbs: 25, fat: 12 },
          { name: "Greek Yogurt Bowl", foods: "200g Greek yogurt + 100g berries + 20g almonds + 10g honey", calories: 420, protein: 25, carbs: 35, fat: 14 },
          { name: "Lean Oatmeal", foods: "40g oats + 200ml skim milk + 1 medium banana + 15g peanut butter", calories: 465, protein: 20, carbs: 58, fat: 16 },
          { name: "Cottage Cheese & Berries", foods: "200g cottage cheese + 150g berries + 20g granola", calories: 385, protein: 30, carbs: 35, fat: 8 },
          { name: "Protein Smoothie", foods: "200ml skim milk + 20g protein powder + 1 banana + 100g spinach", calories: 365, protein: 32, carbs: 35, fat: 4 },
          { name: "Egg White Wrap", foods: "4 egg whites + 1 tortilla + 100g vegetables + 20g avocado", calories: 420, protein: 26, carbs: 42, fat: 12 }
        ],
        lunch: [
          { name: "Chicken Salad", foods: "120g grilled chicken + 200g mixed greens + 100g cucumber + 100g tomatoes + 1 tbsp olive oil", calories: 485, protein: 38, carbs: 15, fat: 18 },
          { name: "Tuna & Beans", foods: "120g canned tuna + 150g white beans + 150g mixed salad + 1 tbsp olive oil", calories: 520, protein: 42, carbs: 35, fat: 16 },
          { name: "Turkey Wrap", foods: "80g turkey slices + 1 large tortilla + 200g vegetables + 1/4 avocado", calories: 465, protein: 35, carbs: 45, fat: 14 },
          { name: "Shrimp Salad", foods: "120g shrimp + 200g mixed greens + 100g quinoa + 1 tbsp olive oil", calories: 465, protein: 35, carbs: 38, fat: 14 },
          { name: "Chicken Soup", foods: "100g chicken + 400ml broth + 200g vegetables + 50g rice", calories: 385, protein: 28, carbs: 32, fat: 8 },
          { name: "Fish Tacos", foods: "120g white fish + 2 corn tortillas + 150g cabbage slaw + 1/4 avocado", calories: 485, protein: 32, carbs: 48, fat: 14 },
          { name: "Lean Beef Salad", foods: "100g lean beef + 200g mixed greens + 100g vegetables + 1 tbsp olive oil", calories: 445, protein: 30, carbs: 18, fat: 16 }
        ],
        dinner: [
          { name: "Baked Fish", foods: "150g white fish + 200g steamed vegetables + 100g quinoa + 1 tsp olive oil", calories: 420, protein: 38, carbs: 35, fat: 10 },
          { name: "Chicken & Veggies", foods: "120g chicken breast + 250g roasted vegetables + 1 tsp olive oil", calories: 385, protein: 35, carbs: 25, fat: 12 },
          { name: "Lean Beef Stir-Fry", foods: "100g lean beef + 200g vegetables + 100g brown rice + 1 tsp sesame oil", calories: 450, protein: 32, carbs: 42, fat: 14 },
          { name: "Turkey Meatballs", foods: "120g ground turkey + 200g zucchini noodles + 150g marinara + 100g vegetables", calories: 415, protein: 35, carbs: 28, fat: 14 },
          { name: "Grilled Salmon", foods: "130g salmon + 200g asparagus + 100g cauliflower rice + 1 tsp olive oil", calories: 465, protein: 38, carbs: 18, fat: 22 },
          { name: "Chicken Lettuce Wraps", foods: "120g ground chicken + 6 lettuce leaves + 200g vegetables + 1 tbsp sesame oil", calories: 395, protein: 32, carbs: 22, fat: 16 },
          { name: "White Fish & Quinoa", foods: "140g white fish + 100g quinoa + 200g steamed vegetables + 1 tsp olive oil", calories: 435, protein: 36, carbs: 38, fat: 12 }
        ],
        snacks: [
          { name: "Protein Yogurt", foods: "150g Greek yogurt + 100g berries", calories: 180, protein: 18, carbs: 20, fat: 2 },
          { name: "Apple & Almonds", foods: "1 medium apple + 20g almonds", calories: 215, protein: 6, carbs: 25, fat: 12 },
          { name: "Turkey Roll-ups", foods: "60g turkey slices + 20g cheese + 100g cucumber sticks", calories: 195, protein: 22, carbs: 8, fat: 8 },
          { name: "Protein Bar", foods: "1 protein bar (25g protein) + 1 medium orange", calories: 245, protein: 25, carbs: 28, fat: 6 },
          { name: "Hard-Boiled Eggs", foods: "2 hard-boiled eggs + 100g cherry tomatoes", calories: 185, protein: 14, carbs: 8, fat: 12 }
        ]
      },
      gain_muscle: {
        breakfast: [
          { name: "Power Oatmeal", foods: "60g oats + 250ml whole milk + 100g Greek yogurt + 1 banana + 30g almonds", calories: 685, protein: 32, carbs: 75, fat: 22 },
          { name: "Muscle Scramble", foods: "3 whole eggs + 50g cheese + 2 slices whole wheat bread + 1/2 avocado", calories: 720, protein: 35, carbs: 38, fat: 42 },
          { name: "Protein Pancakes", foods: "2 eggs + 60g oats + 1 banana + 250ml milk + 20g peanut butter", calories: 765, protein: 35, carbs: 68, fat: 28 },
          { name: "Breakfast Burrito", foods: "2 eggs + 50g cheese + 1 large tortilla + 100g black beans + 1/2 avocado", calories: 745, protein: 32, carbs: 58, fat: 35 },
          { name: "French Toast", foods: "2 slices thick bread + 2 eggs + 250ml milk + 100g Greek yogurt + 30g maple syrup", calories: 685, protein: 30, carbs: 78, fat: 22 },
          { name: "Smoothie Bowl", foods: "250ml milk + 100g Greek yogurt + 1 banana + 30g protein powder + 40g granola", calories: 725, protein: 42, carbs: 65, fat: 18 }
        ],
        lunch: [
          { name: "Chicken Power Bowl", foods: "150g chicken + 200g brown rice + 150g vegetables + 1 tbsp olive oil + 50g nuts", calories: 785, protein: 52, carbs: 78, fat: 28 },
          { name: "Salmon & Sweet Potato", foods: "130g salmon + 250g sweet potato + 150g broccoli + 1 tbsp olive oil", calories: 745, protein: 45, carbs: 65, fat: 22 },
          { name: "Beef & Pasta", foods: "130g lean beef + 120g whole wheat pasta + 150g vegetables + 1 tbsp olive oil", calories: 720, protein: 45, carbs: 58, fat: 22 },
          { name: "Turkey & Quinoa Bowl", foods: "150g ground turkey + 180g quinoa + 150g vegetables + 2 tbsp olive oil", calories: 765, protein: 48, carbs: 68, fat: 24 },
          { name: "Chicken Burrito Bowl", foods: "140g chicken + 150g rice + 100g black beans + 100g vegetables + 1/2 avocado", calories: 785, protein: 48, carbs: 78, fat: 25 },
          { name: "Tuna & Pasta", foods: "130g tuna + 120g pasta + 150g vegetables + 50g cheese + 1 tbsp olive oil", calories: 745, protein: 42, carbs: 65, fat: 22 },
          { name: "Steak Salad", foods: "120g lean steak + 200g mixed greens + 150g quinoa + 100g vegetables + 2 tbsp olive oil", calories: 725, protein: 38, carbs: 58, fat: 26 }
        ],
        dinner: [
          { name: "Steak & Rice", foods: "120g lean steak + 200g brown rice + 200g vegetables + 1 tbsp olive oil", calories: 720, protein: 42, carbs: 75, fat: 18 },
          { name: "Turkey & Quinoa", foods: "150g ground turkey + 180g quinoa + 150g vegetables + 1 tbsp olive oil", calories: 695, protein: 48, carbs: 58, fat: 20 },
          { name: "Chicken Thighs & Rice", foods: "150g chicken thighs + 180g jasmine rice + 200g vegetables + 1 tbsp olive oil", calories: 745, protein: 48, carbs: 68, fat: 24 }
        ],
        snacks: [
          { name: "Protein Shake", foods: "250ml milk + 30g whey protein + 1 banana + 2 tbsp peanut butter", calories: 485, protein: 38, carbs: 35, fat: 18 },
          { name: "Trail Mix", foods: "40g mixed nuts + 30g dried fruit + 20g dark chocolate", calories: 385, protein: 10, carbs: 32, fat: 26 }
        ]
      },
      bulk_up: {
        breakfast: [
          { name: "Mass Gainer Oats", foods: "80g oats + 300ml whole milk + 150g Greek yogurt + 2 bananas + 40g peanut butter", calories: 920, protein: 42, carbs: 95, fat: 35 },
          { name: "Calorie Bomb Scramble", foods: "4 whole eggs + 80g cheese + 3 slices bread + 1 whole avocado + 2 tbsp butter", calories: 1085, protein: 48, carbs: 55, fat: 68 }
        ],
        lunch: [
          { name: "Double Chicken Bowl", foods: "200g chicken + 250g brown rice + 200g vegetables + 2 tbsp olive oil + 60g nuts", calories: 1120, protein: 68, carbs: 98, fat: 42 },
          { name: "Salmon & Pasta", foods: "180g salmon + 150g pasta + 200g vegetables + 2 tbsp olive oil + 50g cheese", calories: 1065, protein: 58, carbs: 78, fat: 38 }
        ],
        dinner: [
          { name: "Steak & Potatoes", foods: "180g steak + 300g mashed potatoes + 200g vegetables + 2 tbsp butter", calories: 1025, protein: 52, carbs: 88, fat: 35 },
          { name: "Turkey & Rice", foods: "200g ground turkey + 250g rice + 200g vegetables + 2 tbsp olive oil", calories: 985, protein: 58, carbs: 95, fat: 28 }
        ],
        snacks: [
          { name: "Mass Shake", foods: "300ml milk + 40g whey protein + 2 bananas + 40g peanut butter + 30g oats", calories: 785, protein: 52, carbs: 68, fat: 28 },
          { name: "Power Mix", foods: "60g mixed nuts + 40g dried fruit + 30g dark chocolate", calories: 565, protein: 15, carbs: 42, fat: 38 }
        ]
      },
      tone_up: {
        breakfast: [
          { name: "Balanced Scramble", foods: "2 whole eggs + 1 egg white + 50g cheese + 100g vegetables + 1 slice toast", calories: 520, protein: 32, carbs: 28, fat: 28 },
          { name: "Protein Oats", foods: "50g oats + 200ml milk + 100g Greek yogurt + 1 banana + 25g almonds", calories: 585, protein: 28, carbs: 65, fat: 20 }
        ],
        lunch: [
          { name: "Chicken & Quinoa", foods: "130g chicken + 150g quinoa + 150g vegetables + 1 tbsp olive oil", calories: 625, protein: 42, carbs: 55, fat: 18 },
          { name: "Salmon Salad", foods: "120g salmon + 200g mixed greens + 100g quinoa + 100g vegetables + 1 tbsp olive oil", calories: 595, protein: 38, carbs: 42, fat: 22 }
        ],
        dinner: [
          { name: "Turkey & Sweet Potato", foods: "130g ground turkey + 200g sweet potato + 200g vegetables + 1 tbsp olive oil", calories: 565, protein: 38, carbs: 58, fat: 16 },
          { name: "Fish & Rice", foods: "140g white fish + 150g brown rice + 200g vegetables + 1 tbsp olive oil", calories: 545, protein: 35, carbs: 62, fat: 14 }
        ],
        snacks: [
          { name: "Greek Yogurt & Nuts", foods: "150g Greek yogurt + 100g berries + 25g almonds", calories: 285, protein: 20, carbs: 25, fat: 14 },
          { name: "Protein Smoothie", foods: "200ml milk + 20g protein powder + 1 banana + 15g almond butter", calories: 385, protein: 28, carbs: 38, fat: 15 }
        ]
      },
      maintain: {
        breakfast: [
          { name: "Balanced Oatmeal", foods: "50g oats + 200ml milk + 100g Greek yogurt + 1 banana + 25g almonds", calories: 565, protein: 28, carbs: 62, fat: 18 },
          { name: "Classic Scramble", foods: "2 whole eggs + 40g cheese + 100g vegetables + 2 slices toast", calories: 585, protein: 30, carbs: 35, fat: 32 }
        ],
        lunch: [
          { name: "Chicken Bowl", foods: "130g chicken + 180g brown rice + 150g vegetables + 1 tbsp olive oil", calories: 665, protein: 45, carbs: 68, fat: 18 },
          { name: "Tuna Pasta", foods: "120g tuna + 100g pasta + 150g vegetables + 1 tbsp olive oil", calories: 625, protein: 38, carbs: 58, fat: 16 }
        ],
        dinner: [
          { name: "Salmon & Quinoa", foods: "130g salmon + 150g quinoa + 200g vegetables + 1 tbsp olive oil", calories: 645, protein: 42, carbs: 48, fat: 26 },
          { name: "Chicken & Rice", foods: "140g chicken + 150g rice + 200g vegetables + 1 tbsp olive oil", calories: 625, protein: 45, carbs: 58, fat: 18 }
        ],
        snacks: [
          { name: "Greek Yogurt Parfait", foods: "150g Greek yogurt + 100g berries + 30g granola", calories: 285, protein: 18, carbs: 35, fat: 8 },
          { name: "Mixed Nuts", foods: "35g mixed nuts + 1 medium apple", calories: 265, protein: 8, carbs: 28, fat: 18 }
        ]
      }
    },

    vegan: {
      lose_weight: {
        breakfast: [
          { name: "Tofu Scramble Light", foods: "120g tofu + 100g spinach + 100g mushrooms + 1 slice whole wheat bread + 1 tsp olive oil", calories: 385, protein: 22, carbs: 28, fat: 18 },
          { name: "Oat Bowl", foods: "40g oats + 200ml oat milk + 100g berries + 20g almonds", calories: 420, protein: 12, carbs: 52, fat: 16 },
          { name: "Green Smoothie", foods: "200ml almond milk + 100g spinach + 1 banana + 20g vegan protein + 15g chia seeds", calories: 385, protein: 22, carbs: 38, fat: 14 },
          { name: "Chia Pudding", foods: "30g chia seeds + 200ml coconut milk + 100g berries + 20g almonds", calories: 445, protein: 12, carbs: 35, fat: 28 },
          { name: "Avocado Toast", foods: "2 slices whole wheat bread + 1/2 avocado + 100g tomatoes + 15g hemp seeds", calories: 465, protein: 18, carbs: 48, fat: 22 },
          { name: "Quinoa Breakfast Bowl", foods: "60g cooked quinoa + 200ml soy milk + 100g berries + 25g walnuts", calories: 425, protein: 16, carbs: 52, fat: 18 }
        ],
        lunch: [
          { name: "Lentil Salad", foods: "150g cooked lentils + 200g mixed greens + 100g vegetables + 1 tbsp tahini", calories: 465, protein: 20, carbs: 45, fat: 16 },
          { name: "Chickpea Bowl", foods: "150g chickpeas + 100g quinoa + 200g vegetables + 1 tbsp olive oil", calories: 485, protein: 22, carbs: 58, fat: 14 },
          { name: "Buddha Bowl", foods: "100g quinoa + 150g black beans + 200g roasted vegetables + 1 tbsp tahini", calories: 525, protein: 24, carbs: 68, fat: 16 },
          { name: "Hummus Wrap", foods: "1 large tortilla + 80g hummus + 200g vegetables + 30g sunflower seeds", calories: 445, protein: 18, carbs: 52, fat: 18 },
          { name: "Tofu Salad", foods: "120g tofu + 200g mixed greens + 100g quinoa + 100g vegetables + 1 tbsp olive oil", calories: 465, protein: 20, carbs: 48, fat: 16 },
          { name: "Bean & Veggie Soup", foods: "150g white beans + 300ml vegetable broth + 200g vegetables + 1 slice bread", calories: 425, protein: 18, carbs: 58, fat: 8 },
          { name: "Quinoa Stuffed Tomatoes", foods: "3 large tomatoes + 100g quinoa + 100g black beans + 1 tbsp olive oil", calories: 485, protein: 20, carbs: 65, fat: 12 }
        ],
        dinner: [
          { name: "Bean Curry", foods: "150g black beans + 200g vegetables + 100g quinoa + 1 tsp coconut oil", calories: 445, protein: 20, carbs: 65, fat: 8 },
          { name: "Stuffed Peppers", foods: "2 bell peppers + 100g quinoa + 100g black beans + 100g vegetables", calories: 420, protein: 18, carbs: 68, fat: 6 },
          { name: "Vegetable Stir-Fry", foods: "120g tofu + 200g vegetables + 100g brown rice + 1 tsp sesame oil", calories: 465, protein: 18, carbs: 58, fat: 12 },
          { name: "Lentil Soup", foods: "150g red lentils + 300ml vegetable broth + 200g vegetables + 1 slice bread", calories: 425, protein: 20, carbs: 62, fat: 6 },
          { name: "Mushroom & Bean Stew", foods: "200g mushrooms + 150g white beans + 200g vegetables + 1 tsp olive oil", calories: 385, protein: 18, carbs: 52, fat: 8 },
          { name: "Cauliflower Curry", foods: "200g cauliflower + 150g chickpeas + 200ml coconut milk + 100g spinach", calories: 465, protein: 18, carbs: 45, fat: 22 },
          { name: "Zucchini Noodles", foods: "300g zucchini noodles + 120g tofu + 150g marinara + 100g vegetables", calories: 385, protein: 20, carbs: 35, fat: 16 }
        ],
        snacks: [
          { name: "Hummus & Veggies", foods: "60g hummus + 150g vegetables", calories: 185, protein: 8, carbs: 22, fat: 8 },
          { name: "Apple & Nuts", foods: "1 apple + 20g almonds", calories: 215, protein: 6, carbs: 25, fat: 12 },
          { name: "Energy Balls", foods: "30g dates + 20g almonds + 10g chia seeds", calories: 225, protein: 6, carbs: 28, fat: 10 },
          { name: "Veggie Smoothie", foods: "200ml almond milk + 100g spinach + 1/2 banana + 15g hemp seeds", calories: 195, protein: 8, carbs: 22, fat: 12 },
          { name: "Roasted Chickpeas", foods: "80g roasted chickpeas + 100g cucumber + 50g cherry tomatoes", calories: 205, protein: 12, carbs: 28, fat: 6 }
        ]
      },
      gain_muscle: {
        breakfast: [
          { name: "Power Tofu Scramble", foods: "150g tofu + 50g nutritional yeast + 2 slices bread + 1/2 avocado + 1 tbsp olive oil", calories: 625, protein: 28, carbs: 45, fat: 35 },
          { name: "Protein Oat Bowl", foods: "60g oats + 250ml soy milk + 30g vegan protein + 1 banana + 30g peanut butter", calories: 720, protein: 35, carbs: 68, fat: 28 },
          { name: "Chia Power Bowl", foods: "40g chia seeds + 250ml coconut milk + 1 banana + 30g almonds + 20g hemp seeds", calories: 685, protein: 22, carbs: 42, fat: 48 }
        ],
        lunch: [
          { name: "Lentil Power Bowl", foods: "200g lentils + 150g quinoa + 200g vegetables + 2 tbsp tahini", calories: 745, protein: 32, carbs: 85, fat: 22 },
          { name: "Chickpea Curry", foods: "200g chickpeas + 150g brown rice + 200ml coconut milk + 100g spinach", calories: 785, protein: 28, carbs: 95, fat: 28 },
          { name: "Tempeh Bowl", foods: "150g tempeh + 150g quinoa + 200g vegetables + 2 tbsp olive oil", calories: 720, protein: 32, carbs: 75, fat: 28 }
        ],
        dinner: [
          { name: "Bean & Grain Bowl", foods: "150g black beans + 150g quinoa + 200g roasted vegetables + 2 tbsp olive oil", calories: 685, protein: 25, carbs: 95, fat: 20 },
          { name: "Tofu & Rice", foods: "150g tofu + 180g brown rice + 200g vegetables + 1 tbsp sesame oil", calories: 645, protein: 28, carbs: 88, fat: 18 },
          { name: "Lentil Pasta", foods: "150g lentils + 120g pasta + 200g vegetables + 2 tbsp olive oil", calories: 725, protein: 28, carbs: 98, fat: 20 }
        ],
        snacks: [
          { name: "Protein Smoothie", foods: "250ml oat milk + 30g vegan protein + 1 banana + 2 tbsp almond butter", calories: 485, protein: 32, carbs: 38, fat: 22 },
          { name: "Power Mix", foods: "40g mixed nuts + 30g dried fruit + 20g dark chocolate + 10g hemp seeds", calories: 425, protein: 12, carbs: 32, fat: 28 }
        ]
      }
    },

    vegetarian: {
      lose_weight: {
        breakfast: [
          { name: "Veggie Omelet", foods: "2 whole eggs + 1 egg white + 50g cheese + 100g vegetables + 1 slice toast", calories: 445, protein: 32, carbs: 25, fat: 22 },
          { name: "Cottage Cheese Bowl", foods: "200g cottage cheese + 100g berries + 20g granola", calories: 385, protein: 28, carbs: 35, fat: 8 },
          { name: "Protein Smoothie", foods: "200ml skim milk + 100g Greek yogurt + 1 banana + 20g protein powder", calories: 420, protein: 35, carbs: 45, fat: 4 }
        ],
        lunch: [
          { name: "Caprese Salad", foods: "100g mozzarella + 200g tomatoes + 150g mixed greens + 1 tbsp olive oil + 1 slice bread", calories: 485, protein: 28, carbs: 35, fat: 22 },
          { name: "Lentil Salad", foods: "150g lentils + 200g mixed vegetables + 50g feta + 1 tbsp olive oil", calories: 465, protein: 25, carbs: 45, fat: 16 },
          { name: "Egg Salad Wrap", foods: "2 hard-boiled eggs + 1 tortilla + 150g vegetables + 1 tbsp mayo", calories: 445, protein: 22, carbs: 42, fat: 18 }
        ],
        dinner: [
          { name: "Stuffed Eggplant", foods: "200g eggplant + 100g quinoa + 50g ricotta + 100g vegetables + 1 tsp olive oil", calories: 420, protein: 18, carbs: 52, fat: 12 },
          { name: "Veggie Pasta", foods: "80g pasta + 200g vegetables + 50g parmesan + 1 tbsp olive oil", calories: 465, protein: 20, carbs: 58, fat: 16 },
          { name: "Bean Curry", foods: "150g mixed beans + 200g vegetables + 100g rice + 1 tsp coconut oil", calories: 485, protein: 22, carbs: 72, fat: 10 }
        ],
        snacks: [
          { name: "Greek Yogurt", foods: "150g Greek yogurt + 100g berries", calories: 185, protein: 18, carbs: 22, fat: 2 },
          { name: "Cheese & Apple", foods: "30g cheese + 1 medium apple", calories: 205, protein: 8, carbs: 28, fat: 8 }
        ]
      },
      gain_muscle: {
        breakfast: [
          { name: "Cheese Omelet", foods: "3 eggs + 80g cheese + 100g vegetables + 2 slices bread + 1 tbsp butter", calories: 785, protein: 42, carbs: 38, fat: 48 },
          { name: "Protein Pancakes", foods: "2 eggs + 60g oats + 250ml milk + 100g Greek yogurt + 25g maple syrup", calories: 745, protein: 38, carbs: 75, fat: 22 }
        ],
        lunch: [
          { name: "Cheese & Bean Bowl", foods: "150g mixed beans + 150g quinoa + 100g cheese + 200g vegetables + 1 tbsp olive oil", calories: 745, protein: 38, carbs: 75, fat: 25 },
          { name: "Egg & Avocado Wrap", foods: "2 whole eggs + 1 large tortilla + 1 whole avocado + 100g vegetables + 50g cheese", calories: 785, protein: 32, carbs: 52, fat: 48 }
        ],
        dinner: [
          { name: "Pasta & Cheese", foods: "120g pasta + 100g ricotta + 100g vegetables + 50g parmesan + 1 tbsp olive oil", calories: 685, protein: 32, carbs: 78, fat: 22 },
          { name: "Bean & Rice Bowl", foods: "150g black beans + 180g brown rice + 100g cheese + 200g vegetables + 1 tbsp olive oil", calories: 745, protein: 32, carbs: 95, fat: 20 }
        ],
        snacks: [
          { name: "Protein Shake", foods: "250ml milk + 30g whey protein + 1 banana + 2 tbsp peanut butter", calories: 485, protein: 38, carbs: 35, fat: 18 },
          { name: "Cheese & Nuts", foods: "50g cheese + 30g mixed nuts + 1 apple", calories: 385, protein: 18, carbs: 25, fat: 25 }
        ]
      }
    }
  };
  const foodDatabase = {
    regular: {
      proteins: [
        {name:"Chicken Breast (grilled)", cal:165, protein:31, carbs:0, fat:3.6, serving:"150g"},
        {name:"Salmon (baked)", cal:208, protein:25, carbs:0, fat:12, serving:"120g"},
        {name:"Ground Turkey (93/7)", cal:120, protein:26, carbs:0, fat:1.7, serving:"100g"},
        {name:"Lean Beef (sirloin)", cal:158, protein:26, carbs:0, fat:5.4, serving:"100g"},
        {name:"White Fish (cod)", cal:82, protein:18, carbs:0, fat:0.7, serving:"150g"},
        {name:"Tuna (canned in water)", cal:116, protein:25, carbs:0, fat:1, serving:"100g"},
        {name:"Eggs (whole)", cal:155, protein:13, carbs:1.1, fat:11, serving:"2 large"},
        {name:"Egg Whites", cal:52, protein:11, carbs:0.7, fat:0.2, serving:"4 whites"},
        {name:"Cottage Cheese (low-fat)", cal:72, protein:12, carbs:4.3, fat:1, serving:"150g"}
      ],
      carbs: [
        {name:"Brown Rice (cooked)", cal:123, protein:2.6, carbs:25, fat:0.9, serving:"150g"},
        {name:"Quinoa (cooked)", cal:120, protein:4.4, carbs:22, fat:1.9, serving:"150g"},
        {name:"Oats (rolled, cooked)", cal:68, protein:2.5, carbs:12, fat:1.4, serving:"200g"},
        {name:"Sweet Potato (baked)", cal:90, protein:2, carbs:21, fat:0.1, serving:"150g"},
        {name:"Whole Wheat Pasta (cooked)", cal:124, protein:5, carbs:25, fat:1.1, serving:"100g"},
        {name:"Whole Wheat Bread", cal:247, protein:13, carbs:41, fat:4.2, serving:"2 slices"},
        {name:"Banana", cal:89, protein:1.1, carbs:23, fat:0.3, serving:"1 medium"},
        {name:"Apple", cal:52, protein:0.3, carbs:14, fat:0.2, serving:"1 medium"}
      ],
      vegetables: [
        {name:"Broccoli (steamed)", cal:35, protein:2.8, carbs:7, fat:0.4, serving:"200g"},
        {name:"Spinach (fresh)", cal:23, protein:2.9, carbs:3.6, fat:0.4, serving:"100g"},
        {name:"Bell Peppers (mixed)", cal:26, protein:1, carbs:6, fat:0.3, serving:"150g"},
        {name:"Asparagus (grilled)", cal:22, protein:2.4, carbs:4, fat:0.2, serving:"150g"},
        {name:"Green Beans", cal:31, protein:1.8, carbs:7, fat:0.1, serving:"150g"},
        {name:"Cauliflower (roasted)", cal:25, protein:2, carbs:5, fat:0.3, serving:"200g"}
      ],
      fats: [
        {name:"Avocado", cal:160, protein:2, carbs:9, fat:15, serving:"100g"},
        {name:"Olive Oil", cal:884, protein:0, carbs:0, fat:100, serving:"1 tbsp"},
        {name:"Almonds", cal:579, protein:21, carbs:22, fat:50, serving:"30g"},
        {name:"Walnuts", cal:654, protein:15, carbs:14, fat:65, serving:"30g"}
      ]
    },
    vegetarian: {
      proteins: [
        {name:"Greek Yogurt (plain)", cal:59, protein:10, carbs:3.6, fat:0.4, serving:"200g"},
        {name:"Cottage Cheese", cal:98, protein:11, carbs:3.4, fat:4.3, serving:"150g"},
        {name:"Eggs (whole)", cal:155, protein:13, carbs:1.1, fat:11, serving:"2 large"},
        {name:"Milk (2%)", cal:50, protein:3.3, carbs:4.8, fat:2, serving:"250ml"},
        {name:"Cheese (mozzarella)", cal:280, protein:28, carbs:2.2, fat:17, serving:"100g"},
        {name:"Lentils (cooked)", cal:116, protein:9, carbs:20, fat:0.4, serving:"200g"},
        {name:"Chickpeas (cooked)", cal:164, protein:8.9, carbs:27, fat:2.6, serving:"200g"},
        {name:"Black Beans (cooked)", cal:132, protein:8.9, carbs:24, fat:0.5, serving:"200g"},
        {name:"Tofu (firm)", cal:144, protein:15, carbs:3.5, fat:9, serving:"150g"},
        {name:"Tempeh", cal:190, protein:20, carbs:7.6, fat:11, serving:"100g"},
        {name:"Protein Powder (whey)", cal:103, protein:20, carbs:3.5, fat:1.3, serving:"1 scoop"}
      ],
      carbs: [
        {name:"Brown Rice (cooked)", cal:123, protein:2.6, carbs:25, fat:0.9, serving:"150g"},
        {name:"Quinoa (cooked)", cal:120, protein:4.4, carbs:22, fat:1.9, serving:"150g"},
        {name:"Oats (rolled, cooked)", cal:68, protein:2.5, carbs:12, fat:1.4, serving:"200g"}
      ],
      vegetables: [
        {name:"Broccoli (steamed)", cal:35, protein:2.8, carbs:7, fat:0.4, serving:"200g"},
        {name:"Spinach (fresh)", cal:23, protein:2.9, carbs:3.6, fat:0.4, serving:"100g"}
      ],
      fats: [
        {name:"Avocado", cal:160, protein:2, carbs:9, fat:15, serving:"100g"},
        {name:"Olive Oil", cal:884, protein:0, carbs:0, fat:100, serving:"1 tbsp"},
        {name:"Almonds", cal:579, protein:21, carbs:22, fat:50, serving:"30g"}
      ]
    },
    vegan: {
      proteins: [
        {name:"Tofu (extra firm)", cal:144, protein:15, carbs:3.5, fat:9, serving:"150g"},
        {name:"Tempeh", cal:190, protein:20, carbs:7.6, fat:11, serving:"100g"},
        {name:"Seitan", cal:175, protein:21, carbs:14, fat:2, serving:"100g"},
        {name:"Lentils (red, cooked)", cal:116, protein:9, carbs:20, fat:0.4, serving:"200g"},
        {name:"Chickpeas (cooked)", cal:164, protein:8.9, carbs:27, fat:2.6, serving:"200g"},
        {name:"Black Beans", cal:132, protein:8.9, carbs:24, fat:0.5, serving:"200g"},
        {name:"Quinoa (cooked)", cal:120, protein:4.4, carbs:22, fat:1.9, serving:"200g"},
        {name:"Hemp Seeds", cal:553, protein:31, carbs:8.7, fat:49, serving:"30g"},
        {name:"Pea Protein Powder", cal:108, protein:21, carbs:2, fat:2, serving:"1 scoop"},
        {name:"Nutritional Yeast", cal:325, protein:50, carbs:36, fat:7.6, serving:"30g"}
      ],
      carbs: [
        {name:"Brown Rice (cooked)", cal:123, protein:2.6, carbs:25, fat:0.9, serving:"150g"},
        {name:"Oats (cooked)", cal:68, protein:2.5, carbs:12, fat:1.4, serving:"200g"},
        {name:"Sweet Potato (baked)", cal:90, protein:2, carbs:21, fat:0.1, serving:"150g"}
      ],
      vegetables: [
        {name:"Spinach (raw)", cal:23, protein:2.9, carbs:3.6, fat:0.4, serving:"100g"},
        {name:"Broccoli (raw)", cal:34, protein:2.8, carbs:7, fat:0.4, serving:"100g"},
        {name:"Kale (raw)", cal:35, protein:2.9, carbs:4.4, fat:1.5, serving:"100g"}
      ],
      fats: [
        {name:"Avocado", cal:160, protein:2, carbs:9, fat:15, serving:"100g"},
        {name:"Olive Oil", cal:884, protein:0, carbs:0, fat:100, serving:"1 tbsp"},
        {name:"Almonds", cal:579, protein:21, carbs:22, fat:50, serving:"30g"}
      ]
    },
    keto: {
      proteins: [
        {name:"Salmon (fatty)", cal:208, protein:25, carbs:0, fat:12, serving:"150g"},
        {name:"Mackerel", cal:305, protein:19, carbs:0, fat:25, serving:"100g"},
        {name:"Grass-Fed Beef", cal:250, protein:26, carbs:0, fat:15, serving:"100g"},
        {name:"Beef Belly", cal:518, protein:9.3, carbs:0, fat:53, serving:"100g"},
        {name:"Eggs (whole)", cal:155, protein:13, carbs:1.1, fat:11, serving:"2 large"},
        {name:"Cheese (cheddar)", cal:403, protein:25, carbs:1.3, fat:33, serving:"100g"},
        {name:"Chicken Thighs (skin-on)", cal:247, protein:26, carbs:0, fat:15, serving:"150g"}
      ],
      vegetables: [
        {name:"Spinach (raw)", cal:23, protein:2.9, carbs:3.6, fat:0.4, serving:"100g"},
        {name:"Kale (raw)", cal:35, protein:2.9, carbs:4.4, fat:1.5, serving:"100g"},
        {name:"Broccoli (raw)", cal:34, protein:2.8, carbs:7, fat:0.4, serving:"100g"},
        {name:"Cauliflower (raw)", cal:25, protein:2, carbs:5, fat:0.3, serving:"100g"},
        {name:"Zucchini", cal:17, protein:1.2, carbs:3.1, fat:0.3, serving:"200g"},
        {name:"Bell Peppers (green)", cal:20, protein:0.9, carbs:4.6, fat:0.2, serving:"150g"}
      ],
      fats: [
        {name:"Avocado", cal:160, protein:2, carbs:2, fat:15, serving:"100g"},
        {name:"MCT Oil", cal:828, protein:0, carbs:0, fat:93, serving:"1 tbsp"},
        {name:"Coconut Oil", cal:862, protein:0, carbs:0, fat:99, serving:"1 tbsp"},
        {name:"Olive Oil", cal:884, protein:0, carbs:0, fat:100, serving:"1 tbsp"},
        {name:"Macadamia Nuts", cal:718, protein:7.9, carbs:5.2, fat:76, serving:"30g"},
        {name:"Pecans", cal:691, protein:9.2, carbs:4, fat:72, serving:"30g"}
      ],
      carbs: []
    },
    mediterranean: {
      proteins: [
        {name:"Tilapia (baked)", cal:128, protein:26, carbs:0, fat:2.7, serving:"150g"},
        {name:"Canned Tuna in Water", cal:116, protein:25, carbs:0, fat:1, serving:"100g"},
        {name:"Chicken Breast (herb-seasoned)", cal:165, protein:31, carbs:0, fat:3.6, serving:"150g"},
        {name:"Greek Yogurt", cal:59, protein:10, carbs:3.6, fat:0.4, serving:"200g"},
        {name:"Mozzarella Cheese", cal:280, protein:28, carbs:2.2, fat:17, serving:"100g"},
        {name:"Chickpeas (canned)", cal:164, protein:8.9, carbs:27, fat:2.6, serving:"200g"},
        {name:"Kidney Beans (canned)", cal:127, protein:8.7, carbs:23, fat:0.5, serving:"200g"}
      ],
      carbs: [
        {name:"Bulgur Wheat", cal:83, protein:3, carbs:19, fat:0.2, serving:"150g"},
        {name:"Farro (cooked)", cal:170, protein:5, carbs:35, fat:1.5, serving:"150g"},
        {name:"Whole Wheat Couscous", cal:112, protein:3.8, carbs:23, fat:0.2, serving:"150g"}
      ],
      vegetables: [
        {name:"Tomatoes (fresh)", cal:18, protein:0.9, carbs:3.9, fat:0.2, serving:"200g"},
        {name:"Cucumber", cal:16, protein:0.7, carbs:4, fat:0.1, serving:"200g"},
        {name:"Eggplant (grilled)", cal:35, protein:0.8, carbs:8.7, fat:0.2, serving:"200g"},
        {name:"Artichokes", cal:47, protein:3.3, carbs:11, fat:0.2, serving:"150g"}
      ],
      fats: [
        {name:"Olive Oil", cal:884, protein:0, carbs:0, fat:100, serving:"1 tbsp"},
        {name:"Walnuts", cal:654, protein:15, carbs:14, fat:65, serving:"30g"}
      ]
    }
  };

  function selectFoodDatabase(dietPreference){
    return foodDatabase[dietPreference] || foodDatabase.regular;
  }

  function buildMealPlan(mealCalories, proteinGrams, carbGrams, fatGrams, foodDb){
    const meals = ['breakfast','lunch','snack','dinner'];
    const macroSplits = {
      breakfast: {p:0.25,c:0.30,f:0.20},
      lunch:     {p:0.30,c:0.35,f:0.30},
      snack:     {p:0.15,c:0.15,f:0.20},
      dinner:    {p:0.30,c:0.20,f:0.30}
    };

    const plan = {};
    meals.forEach(meal=>{
      const target = {
        calories: Math.round(mealCalories[meal]),
        protein: Math.round(proteinGrams * macroSplits[meal].p),
        carbs: Math.round(carbGrams * macroSplits[meal].c),
        fat: Math.round(fatGrams * macroSplits[meal].f)
      };
      plan[meal] = selectFoodsForMeal(target, foodDb, meal);
    });

    return plan;
  }

  function selectFoodsForMeal(target, foodDb, mealType){
    const mealTemplates = {
      breakfast: ['proteins','carbs','fats'],
      lunch: ['proteins','carbs','vegetables','fats'],
      snack: ['proteins','fats'],
      dinner: ['proteins','vegetables','carbs']
    };

    const template = mealTemplates[mealType];
    const chosen = [];

    template.forEach(category=>{
      const pool = foodDb[category] && foodDb[category].length ? foodDb[category] : (foodDb.proteins || []);
      const item = findBestMacroMatch(pool, target, chosen);
      if (item) chosen.push(item);
    });

    const approxCalories = chosen.reduce((sum,i)=> sum + i.cal, 0);
    return { items: chosen, target, approxCalories: Math.round(approxCalories) };
  }

  function findBestMacroMatch(items, target, selected){
    if (!items || items.length === 0) return null;
    
    const current = selected.reduce((acc,i)=>{
      acc.protein += (i.protein||0);
      acc.carbs += (i.carbs||0);
      acc.fat += (i.fat||0);
      acc.calories += (i.cal||0);
      return acc;
    }, {protein:0, carbs:0, fat:0, calories:0});

    // Score all items and add randomness for variety
    const scoredItems = items.map(it => {
      const nextProtein = current.protein + (it.protein||0);
      const nextCalories = current.calories + (it.cal||0);

      const proteinDiff = Math.abs(target.protein - nextProtein);
      const calDiff = Math.abs(target.calories - nextCalories);

      const macroScore = proteinDiff * 1.6 + calDiff * 0.4;
      const varietyBonus = Math.random() * 50; // Add randomness for variety
      const finalScore = macroScore - varietyBonus; // Lower is better

      return { item: it, score: finalScore };
    });

    // Sort by score and pick from top 30% for variety
    scoredItems.sort((a,b) => a.score - b.score);
    const topCount = Math.max(1, Math.ceil(scoredItems.length * 0.3));
    const randomIndex = Math.floor(Math.random() * topCount);
    
    return scoredItems[randomIndex]?.item || scoredItems[0]?.item;
  }

  function generateMealPlan(age, gender, weightKg, heightCm, activityLevel, goal, dietPreference){
    const { calculateBMR, getActivityData, getGoalData, getGenderPreferences } = window.App.Calculator;

    const bmr = calculateBMR(age, gender, weightKg, heightCm);
    const activityData = getActivityData(activityLevel);
    const tdee = bmr * activityData.multiplier;
    const goalData = getGoalData(goal);
    const targetCalories = tdee + goalData.calorieAdjustment;

    const proteinGrams = weightKg * goalData.proteinMultiplier;
    const proteinCals = proteinGrams * 4;
    const fatCals = targetCalories * (goalData.fatPercentage / 100);
    const fatGrams = fatCals / 9;
    const carbCals = targetCalories - proteinCals - fatCals;
    const carbGrams = Math.max(0, carbCals / 4);

    const genderPrefs = getGenderPreferences(gender);
    const mealCalories = {
      breakfast: targetCalories * genderPrefs.mealDistribution[0],
      lunch: targetCalories * genderPrefs.mealDistribution[1],
      snack: targetCalories * genderPrefs.mealDistribution[2],
      dinner: targetCalories * genderPrefs.mealDistribution[3]
    };

    const foodDb = selectFoodDatabase(dietPreference);
    return buildMealPlan(mealCalories, proteinGrams, carbGrams, fatGrams, foodDb);
  }

  // -------- Weekly meal plan API --------
  function generateWeeklyMealPlanByMacros(dailyCalories, dailyMacros, dietPreference){
    const weeklyPlan = { breakfast: [], lunch: [], dinner: [], snack: [] };
    const varietyStrategy = {
      breakfast: { uniqueMeals: 4, allowRepetition: true },
      lunch: { uniqueMeals: 6, allowRepetition: true },
      dinner: { uniqueMeals: 7, allowRepetition: false },
      snack: { uniqueMeals: 5, allowRepetition: true }
    };

    Object.keys(weeklyPlan).forEach(mealType => {
      const strat = varietyStrategy[mealType];
      const uniqueMeals = generateUniqueMeals(
        mealType,
        strat.uniqueMeals,
        dailyCalories,
        dailyMacros,
        dietPreference
      );
      weeklyPlan[mealType] = fillWeekWithMeals(uniqueMeals, strat.allowRepetition);
    });
    return weeklyPlan;
  }

  function generateUniqueMeals(mealType, count, dailyCalories, dailyMacros, dietPreference){
    const mealCalories = getMealCalories(mealType, dailyCalories);
    const mealMacros = getMealMacros(mealType, dailyMacros);
    const foodDb = selectFoodDatabase(dietPreference);
    const uniqueMeals = [];
    const seen = new Set();

    for (let i = 0; i < count; i++){
      let attempt = 0;
      let meal;
      do {
        meal = createBalancedMeal(mealType, mealCalories, mealMacros, foodDb);
        attempt++;
      } while (seen.has(meal.signature) && attempt < 10);
      seen.add(meal.signature);
      uniqueMeals.push(meal);
    }
    return uniqueMeals;
  }

  function fillWeekWithMeals(uniqueMeals, allowRepetition){
    if (uniqueMeals.length >= 7 || !allowRepetition){
      return uniqueMeals.slice(0,7);
    }
    const week = [];
    for (let day = 0; day < 7; day++){
      const idx = day % uniqueMeals.length;
      const base = uniqueMeals[idx];
      week.push({ ...base, day: day + 1, isRepeat: day >= uniqueMeals.length });
    }
    return week;
  }

  function getMealCalories(mealType, dailyCalories){
    const dist = { breakfast: 0.25, lunch: 0.35, snack: 0.15, dinner: 0.25 };
    return Math.round(dailyCalories * (dist[mealType] || 0.25));
  }

  function getMealMacros(mealType, dailyMacros){
    const splits = {
      breakfast: { p:0.25, c:0.30, f:0.20 },
      lunch:     { p:0.30, c:0.35, f:0.30 },
      snack:     { p:0.15, c:0.15, f:0.20 },
      dinner:    { p:0.30, c:0.20, f:0.30 }
    };
    const s = splits[mealType] || splits.breakfast;
    return {
      protein: Math.round(dailyMacros.protein * s.p),
      carbs: Math.round(dailyMacros.carbs * s.c),
      fat: Math.round(dailyMacros.fat * s.f)
    };
  }

  function createBalancedMeal(mealType, mealCalories, mealMacros, foodDb){
    const target = { calories: mealCalories, protein: mealMacros.protein, carbs: mealMacros.carbs, fat: mealMacros.fat };
    const selection = selectFoodsForMealWithShuffle(target, foodDb, mealType);
    const foods = selection.items.map(item => ({ quantity: item.serving || '1 serving', unit: '', name: item.name }));
    const calories = selection.approxCalories || target.calories;
    const signature = foods.map(f => f.name).join(' | ');
    return { foods, calories, signature };
  }

  function selectFoodsForMealWithShuffle(target, foodDb, mealType){
    const mealTemplates = {
      breakfast: ['proteins','carbs','fats'],
      lunch: ['proteins','carbs','vegetables','fats'],
      snack: ['proteins','fats'],
      dinner: ['proteins','vegetables','carbs']
    };
    const template = mealTemplates[mealType];
    const chosen = [];
    template.forEach(category => {
      const pool = (foodDb[category] && foodDb[category].length ? foodDb[category] : (foodDb.proteins || [])).slice();
      shuffleArray(pool);
      const item = findBestMacroMatch(pool, target, chosen);
      if (item) chosen.push(item);
    });
    const approxCalories = chosen.reduce((sum,i)=> sum + i.cal, 0);
    return { items: chosen, target, approxCalories: Math.round(approxCalories) };
  }

  function shuffleArray(arr){
    for (let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Diet filter rules for Regular, Vegetarian, Vegan, Keto, Mediterranean
  function filterMealDatabaseForDiet(db, diet){
    const d = (diet || 'regular').toLowerCase();
    if (d === 'regular') return db;

    const meatFish = ['chicken','turkey','beef','salmon','cod','shrimp','tuna','mackerel','pork','fish'];
    const animalProducts = ['egg','eggs','milk','yogurt','cheese','honey','butter'];
    const mediterraneanHints = ['olive oil','tomatoes','cucumber','chickpeas','tuna','salmon','cod','quinoa','farro','whole wheat','beans','lentils'];

    const result = { breakfast: [], lunch: [], dinner: [], snacks: [] };

    function containsAny(text, needles){
      return needles.some(k => text.indexOf(k) !== -1);
    }

    function byDiet(list, category){
      const lower = (s) => (s || '').toLowerCase();
      if (d === 'vegetarian'){
        const filtered = list.filter(item => !containsAny(lower(item.foods), meatFish));
        return filtered.length ? filtered : list;
      }
      if (d === 'vegan'){
        const filtered = list.filter(item => {
          const foods = lower(item.foods);
          if (containsAny(foods, meatFish)) return false;
          if (containsAny(foods, animalProducts)) return false;
          return true;
        });
        // If nothing suitable, degrade gracefully to vegetarian set
        const veg = list.filter(item => !containsAny(lower(item.foods), meatFish));
        return filtered.length ? filtered : (veg.length ? veg : list);
      }
      if (d === 'keto'){
        // Carb thresholds
        const threshold = category === 'snacks' ? 15 : 30;
        let filtered = list.filter(item => (item.carbs || 0) <= threshold);
        if (filtered.length < 3){
          // fallback to lowest-carb options
          filtered = list.slice().sort((a,b)=> (a.carbs||0) - (b.carbs||0)).slice(0, Math.min(5, list.length));
        }
        return filtered.length ? filtered : list;
      }
      if (d === 'mediterranean'){
        let filtered = list.filter(item => containsAny(lower(item.foods), mediterraneanHints));
        if (!filtered.length){
          // Prefer options with olive oil / fish / legumes by scoring
          filtered = list.slice().sort((a,b)=> scoreMed(b) - scoreMed(a)).slice(0, Math.min(7, list.length));
        }
        return filtered.length ? filtered : list;
      }
      return list;
    }

    function scoreMed(item){
      const foods = (item.foods || '').toLowerCase();
      let score = 0;
      if (foods.includes('olive oil')) score += 2;
      if (foods.includes('tomato')) score += 1;
      if (foods.includes('cucumber')) score += 1;
      if (foods.includes('chickpeas') || foods.includes('beans') || foods.includes('lentils')) score += 2;
      if (foods.includes('salmon') || foods.includes('tuna') || foods.includes('cod')) score += 2;
      if (foods.includes('quinoa') || foods.includes('whole wheat') || foods.includes('farro')) score += 1;
      return score;
    }

    result.breakfast = byDiet(db.breakfast, 'breakfast');
    result.lunch = byDiet(db.lunch, 'lunch');
    result.dinner = byDiet(db.dinner, 'dinner');
    result.snacks = byDiet(db.snacks, 'snacks');
    return result;
  }

  // Pick top K meals closest to target calories, ensure variety
  function pickTopForTarget(list, targetCalories, k){
    const scored = list
      .map((item, i) => ({ item, score: Math.abs(item.calories - targetCalories), i }))
      .sort((a,b) => a.score - b.score || a.i - b.i)
      .slice(0, Math.min(k, list.length))
      .map(s => s.item);
    // Rotate for variety
    return scored;
  }

  window.App = window.App || {};
  window.App.Meals = {
    foodDatabase,
    selectFoodDatabase,
    buildMealPlan,
    selectFoodsForMeal,
    findBestMacroMatch,
    generateMealPlan,
    // Previous weekly generator retained for compatibility
    generateWeeklyMealPlanByMacros,
    // New goal-aware weekly generator: uses both diet and goal for meal selection
    generateWeeklyMealPlan: function(userCalories, userGoal, dietPreference){
      // Get meals for specific diet and goal combination
      const dietKey = dietPreference || 'regular';
      const goalKey = userGoal || 'maintain';
      
      const goalMeals = mealDatabase[dietKey] && mealDatabase[dietKey][goalKey] 
        ? mealDatabase[dietKey][goalKey]
        : mealDatabase.regular.maintain; // Fallback

      const weeklyPlan = [];
      for (let day = 1; day <= 7; day++){
        const dayIndex = day - 1;
        weeklyPlan.push({
          day,
          breakfast: goalMeals.breakfast[dayIndex % goalMeals.breakfast.length],
          lunch: goalMeals.lunch[dayIndex % goalMeals.lunch.length],
          dinner: goalMeals.dinner[dayIndex % goalMeals.dinner.length],
          snack: goalMeals.snacks[dayIndex % goalMeals.snacks.length]
        });
      }
      return weeklyPlan;
    },
    mealDatabase
  };
})();

