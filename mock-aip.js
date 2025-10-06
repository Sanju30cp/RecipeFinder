// Mock API Server - Save this as mock-api.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Enhanced Mock Indian Recipes Database
const indianRecipes = [
  {
    id: 1,
    title: "Butter Chicken",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    region: "North Indian",
    cuisineType: ["Punjabi"],
    ingredients: [
      "500g chicken breast, cubed",
      "2 tbsp butter",
      "1 cup heavy cream",
      "3 tomatoes, pureed",
      "2 onions, finely chopped",
      "4 garlic cloves, minced",
      "1 inch ginger, grated",
      "2 tbsp garam masala",
      "1 tbsp turmeric powder",
      "1 tbsp red chili powder",
      "1 tsp cumin seeds",
      "Salt to taste",
      "Fresh coriander for garnish",
    ],
    steps: [
      "Marinate chicken with yogurt, ginger-garlic paste, and spices for 2 hours",
      "Heat butter in a pan and sauté cumin seeds until fragrant",
      "Add chopped onions and cook until golden brown",
      "Add ginger-garlic paste and cook for 2 minutes",
      "Add tomato puree and cook until oil separates from masala",
      "Add all dry spices and cook for another 2 minutes",
      "Add marinated chicken and cook for 10 minutes on medium heat",
      "Add cream and simmer for 5 minutes on low heat",
      "Garnish with fresh coriander and serve hot with naan or rice",
    ],
    nutrition: {
      calories: 450,
      protein: 35,
      carbs: 12,
      fat: 28,
    },
  },
  {
    id: 2,
    title: "Masala Dosa",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    time: 60,
    servings: 3,
    difficulty: "Hard",
    region: "South Indian",
    cuisineType: ["Andhra Pradesh", "Karnataka", "Tamil Nadu"],
    ingredients: [
      "2 cups rice",
      "1 cup urad dal (black lentils)",
      "1/2 tsp fenugreek seeds",
      "Salt to taste",
      "Oil for cooking",
      "For potato filling:",
      "4 potatoes, boiled and mashed",
      "2 onions, sliced",
      "2 green chilies, chopped",
      "1 tsp mustard seeds",
      "1 tsp turmeric powder",
      "10-12 curry leaves",
      "2 tbsp oil",
    ],
    steps: [
      "Soak rice, urad dal, and fenugreek seeds separately for 6 hours",
      "Grind to make a smooth batter and ferment overnight",
      "For filling, heat oil and add mustard seeds",
      "Add curry leaves, green chilies, and onions",
      "Sauté until onions turn translucent",
      "Add turmeric and mashed potatoes, mix well",
      "Heat a dosa pan and spread batter thinly",
      "Cook until golden brown and crisp",
      "Place potato filling on one side and fold",
      "Serve hot with coconut chutney and sambar",
    ],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 45,
      fat: 7,
    },
  },
  {
    id: 3,
    title: "Palak Paneer",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
    time: 30,
    servings: 3,
    difficulty: "Easy",
    region: "North Indian",
    cuisineType: ["Punjabi"],
    ingredients: [
      "250g paneer, cubed",
      "500g spinach leaves",
      "2 onions, chopped",
      "3 tomatoes, chopped",
      "4 garlic cloves",
      "1 inch ginger",
      "2 green chilies",
      "1 tsp cumin seeds",
      "1 tbsp coriander powder",
      "1 tsp garam masala",
      "2 tbsp cream",
      "Salt to taste",
      "2 tbsp oil",
    ],
    steps: [
      "Blanch spinach leaves in boiling water for 2 minutes",
      "Drain and immediately transfer to ice water",
      "Grind spinach with ginger, garlic, and green chilies to make puree",
      "Heat oil in a pan and add cumin seeds",
      "Add chopped onions and cook until golden",
      "Add tomatoes and cook until soft and mushy",
      "Add all dry spices and cook for 2 minutes",
      "Add spinach puree and cook for 10 minutes",
      "Add paneer cubes and simmer for 5 minutes",
      "Add cream and mix gently",
      "Serve hot with roti or naan",
    ],
    nutrition: {
      calories: 320,
      protein: 18,
      carbs: 15,
      fat: 22,
    },
  },
  {
    id: 4,
    title: "Chole Bhature",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a00876c88f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvbGUlMjBiaGF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
    time: 40,
    servings: 3,
    difficulty: "Medium",
    region: "North Indian",
    cuisineType: ["Punjabi"],
    ingredients: [
      "2 cups chickpeas, soaked overnight",
      "3 onions, finely chopped",
      "3 tomatoes, pureed",
      "2 tbsp chole masala",
      "1 tbsp ginger-garlic paste",
      "1 tsp turmeric powder",
      "1 tsp red chili powder",
      "2 tea bags for color",
      "Salt to taste",
      "For bhature:",
      "2 cups maida (all-purpose flour)",
      "1/2 cup yogurt",
      "1 tsp sugar",
      "1 tsp baking powder",
      "Oil for frying",
    ],
    steps: [
      "Pressure cook chickpeas with tea bags until soft",
      "Heat oil in a pan, add onions and cook until brown",
      "Add ginger-garlic paste and cook for 2 minutes",
      "Add tomato puree and cook until oil separates",
      "Add all spices and cooked chickpeas",
      "Simmer for 15-20 minutes",
      "For bhature, knead dough with all ingredients",
      "Rest dough for 2 hours",
      "Roll into circles and deep fry until puffed",
      "Serve hot chole with bhature and onions",
    ],
    nutrition: {
      calories: 520,
      protein: 22,
      carbs: 65,
      fat: 18,
    },
  },
  {
    id: 5,
    title: "Hyderabadi Biryani",
    image:
      "https://images.unsplash.com/photo-1563379091339-163f3a36d12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    region: "South Indian",
    cuisineType: ["Hyderabadi"],
    ingredients: [
      "500g basmati rice",
      "750g chicken, with bone",
      "3 onions, sliced",
      "2 cups yogurt",
      "4 tbsp biryani masala",
      "1 cup mint leaves",
      "1 cup coriander leaves",
      "4 green chilies",
      "1 cup fried onions",
      "Saffron strands soaked in milk",
      "4 tbsp ghee",
      "Whole spices: bay leaves, cardamom, cinnamon, cloves",
    ],
    steps: [
      "Marinate chicken with yogurt, biryani masala, and herbs for 4 hours",
      "Soak basmati rice for 30 minutes",
      "Parboil rice with whole spices until 70% cooked",
      "In a heavy bottom pot, layer marinated chicken",
      "Add layer of partially cooked rice",
      "Sprinkle fried onions, saffron milk, and ghee",
      "Seal the pot with dough and cook on dum for 25 minutes",
      "Let it rest for 15 minutes before serving",
      "Serve hot with raita and salad",
    ],
    nutrition: {
      calories: 580,
      protein: 38,
      carbs: 75,
      fat: 25,
    },
  },
  {
    id: 6,
    title: "Idli Sambar",
    image:
      "ttps://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWRsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    region: "South Indian",
    cuisineType: ["Tamil Nadu"],
    ingredients: [
      "For idli:",
      "2 cups idli rice",
      "1 cup urad dal",
      "1/2 tsp fenugreek seeds",
      "Salt to taste",
      "For sambar:",
      "1 cup toor dal",
      "2 cups mixed vegetables",
      "2 tbsp sambar powder",
      "1 tsp tamarind paste",
      "1 tsp mustard seeds",
      "10 curry leaves",
      "2 dry red chilies",
      "2 tbsp oil",
    ],
    steps: [
      "Soak rice and dal separately for 6 hours",
      "Grind to smooth batter and ferment overnight",
      "Steam batter in idli molds for 10-12 minutes",
      "For sambar, pressure cook toor dal with vegetables",
      "Add sambar powder and tamarind extract",
      "Temper with mustard seeds, curry leaves, and red chilies",
      "Serve hot idlis with sambar and coconut chutney",
    ],
    nutrition: {
      calories: 220,
      protein: 12,
      carbs: 35,
      fat: 5,
    },
  },
  {
    id: 7,
    title: "Rogan Josh",
    image:
      "https://images.unsplash.com/photo-1633878352894-8e454c91e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkdSUyMHZhZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
    time: 50,
    servings: 4,
    difficulty: "Medium",
    region: "North Indian",
    cuisineType: ["Kashmiri"],
    ingredients: [
      "750g lamb, with bone",
      "2 cups yogurt",
      "4 onions, finely sliced",
      "2 tbsp kashmiri red chili powder",
      "1 tbsp ginger powder",
      "1 tbsp fennel powder",
      "1 tsp asafoetida",
      "4 green cardamoms",
      "2 black cardamoms",
      "4 cloves",
      "1 inch cinnamon stick",
      "1/2 cup mustard oil",
      "Salt to taste",
    ],
    steps: [
      "Heat mustard oil until smoking point, then cool slightly",
      "Fry onions until golden brown and set aside",
      "In same oil, add whole spices and asafoetida",
      "Add lamb pieces and sear on all sides",
      "Add ginger powder and kashmiri red chili powder",
      "Add yogurt gradually while stirring continuously",
      "Add fried onions and fennel powder",
      "Add water and pressure cook for 6-7 whistles",
      "Let pressure release naturally",
      "Garnish with fresh coriander and serve hot",
    ],
    nutrition: {
      calories: 480,
      protein: 42,
      carbs: 18,
      fat: 32,
    },
  },
  {
    id: 8,
    title: "Medu Vada",
    image:
      "https://images.unsplash.com/photo-1633878352894-8e454c91e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    region: "South Indian",
    cuisineType: ["Karnataka"],
    ingredients: [
      "2 cups urad dal (black lentils)",
      "2 onions, finely chopped",
      "2 green chilies, finely chopped",
      "1 inch ginger, grated",
      "10-12 curry leaves, chopped",
      "1 tsp black pepper corns",
      "1 tsp cumin seeds",
      "Oil for deep frying",
      "Salt to taste",
    ],
    steps: [
      "Soak urad dal for 4 hours in water",
      "Drain water completely and grind to thick batter",
      "Add chopped onions, green chilies, ginger, curry leaves",
      "Add spices and salt, mix well",
      "Heat oil for deep frying",
      "Wet hands and shape batter into donut shapes",
      "Fry on medium heat until golden brown and crisp",
      "Drain on paper towels",
      "Serve hot with sambar and coconut chutney",
    ],
    nutrition: {
      calories: 280,
      protein: 15,
      carbs: 32,
      fat: 12,
    },
  },
  {
    id: 9,
    title: "Pav Bhaji",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    region: "West Indian",
    cuisineType: ["Maharashtrian"],
    ingredients: [
      "4 potatoes, boiled and mashed",
      "2 cups mixed vegetables (cauliflower, peas, carrots)",
      "3 onions, finely chopped",
      "3 tomatoes, pureed",
      "4 tbsp pav bhaji masala",
      "2 tbsp butter",
      "8 pav buns",
      "1 capsicum, finely chopped",
      "Lemon wedges",
      "Fresh coriander",
      "Salt to taste",
    ],
    steps: [
      "Boil and mash all vegetables together",
      "Heat butter in a large pan, add onions and cook until golden",
      "Add capsicum and cook for 2 minutes",
      "Add tomato puree and cook until oil separates",
      "Add pav bhaji masala and cook for 2 minutes",
      "Add mashed vegetables and mix well",
      "Add water to get desired consistency and simmer for 10 minutes",
      "Toast pav buns with butter",
      "Garnish bhaji with butter, coriander and lemon juice",
      "Serve hot with buttered pav",
    ],
    nutrition: {
      calories: 350,
      protein: 12,
      carbs: 55,
      fat: 15,
    },
  },
  {
    id: 10,
    title: "Dhokla",
    image: "d",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    region: "West Indian",
    cuisineType: ["Gujarati"],
    ingredients: [
      "2 cups besan (gram flour)",
      "1 cup yogurt",
      "1 tsp ginger-green chili paste",
      "1 tsp fruit salt (eno)",
      "1 tsp turmeric powder",
      "Salt to taste",
      "For tempering:",
      "2 tbsp oil",
      "1 tsp mustard seeds",
      "1 tsp sesame seeds",
      "10-12 curry leaves",
      "2 green chilies, slit",
      "2 tbsp sugar",
      "2 tbsp water",
    ],
    steps: [
      "Mix besan, yogurt, ginger-chili paste, turmeric and salt",
      "Add water to make pouring consistency batter",
      "Grease a dhokla plate and keep steamer ready",
      "Add fruit salt to batter and mix gently",
      "Pour batter immediately into plate and steam for 15 minutes",
      "Check with toothpick - if it comes out clean, it's done",
      "For tempering, heat oil and add mustard seeds",
      "When they crackle, add sesame seeds, curry leaves, green chilies",
      "Add sugar and water, let it simmer for a minute",
      "Pour tempering over dhokla and cut into pieces",
      "Serve with green chutney",
    ],
    nutrition: {
      calories: 180,
      protein: 8,
      carbs: 25,
      fat: 6,
    },
  },
  {
    id: 11,
    title: "Fish Curry",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    region: "Coastal",
    cuisineType: ["Goan", "Kerala"],
    ingredients: [
      "500g fish pieces (pomfret/salmon)",
      "2 onions, finely chopped",
      "3 tomatoes, chopped",
      "1 cup coconut milk",
      "2 tbsp red chili powder",
      "1 tbsp coriander powder",
      "1 tsp turmeric powder",
      "1 tsp tamarind paste",
      "8-10 kokum pieces",
      "10 curry leaves",
      "2 tbsp coconut oil",
      "Salt to taste",
    ],
    steps: [
      "Clean and marinate fish with turmeric and salt for 15 minutes",
      "Heat coconut oil in a pan, add onions and sauté until golden",
      "Add tomatoes and cook until soft",
      "Add all spice powders and cook for 2 minutes",
      "Add coconut milk and bring to a gentle boil",
      "Add tamarind paste, kokum and curry leaves",
      "Add fish pieces carefully and simmer for 8-10 minutes",
      "Do not stir vigorously to avoid breaking fish",
      "Adjust consistency with water if needed",
      "Serve hot with steamed rice",
    ],
    nutrition: {
      calories: 320,
      protein: 28,
      carbs: 12,
      fat: 18,
    },
  },
  {
    id: 12,
    title: "Aloo Paratha",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    region: "North Indian",
    cuisineType: ["Punjabi"],
    ingredients: [
      "3 cups whole wheat flour",
      "4 potatoes, boiled and mashed",
      "2 onions, finely chopped",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1 tsp ajwain (carom seeds)",
      "1 tsp garam masala",
      "1 tsp amchur (dry mango powder)",
      "Salt to taste",
      "Ghee or butter for cooking",
      "Fresh coriander, chopped",
    ],
    steps: [
      "Knead wheat flour with water to make soft dough, rest for 30 minutes",
      "Mix mashed potatoes with all spices, onions, green chilies and coriander",
      "Divide dough and potato mixture into equal portions",
      "Take one dough ball, flatten and place potato mixture in center",
      "Bring edges together and seal properly",
      "Roll gently into round paratha",
      "Heat tawa and cook paratha on both sides with ghee",
      "Press edges while cooking for even cooking",
      "Cook until golden brown spots appear",
      "Serve hot with butter, yogurt or pickle",
    ],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 45,
      fat: 9,
    },
  },
];

// API Routes
app.get("/api/recipes/search", (req, res) => {
  const { ingredients, limit = 12 } = req.query;

  if (!ingredients) {
    return res.status(400).json({ error: "Ingredients parameter is required" });
  }

  const searchIngredients = ingredients
    .split(",")
    .map((ing) => ing.trim().toLowerCase());

  const matchingRecipes = indianRecipes
    .filter((recipe) => {
      const recipeIngredients = recipe.ingredients.join(" ").toLowerCase();
      return searchIngredients.some((ingredient) =>
        recipeIngredients.includes(ingredient)
      );
    })
    .slice(0, parseInt(limit));

  res.json({
    success: true,
    count: matchingRecipes.length,
    recipes: matchingRecipes,
  });
});

app.get("/api/recipes/:id", (req, res) => {
  const recipeId = parseInt(req.params.id);
  const recipe = indianRecipes.find((r) => r.id === recipeId);

  if (!recipe) {
    return res.status(404).json({ error: "Recipe not found" });
  }

  res.json({
    success: true,
    recipe: recipe,
  });
});

app.get("/api/recipes", (req, res) => {
  const { limit = 12, region } = req.query;
  let recipes = indianRecipes;

  if (region) {
    recipes = recipes.filter((recipe) =>
      recipe.region.toLowerCase().includes(region.toLowerCase())
    );
  }

  res.json({
    success: true,
    count: recipes.length,
    recipes: recipes.slice(0, parseInt(limit)),
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Indian Recipe API is running",
    totalRecipes: indianRecipes.length,
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mock Indian Recipe API running on http://localhost:${PORT}`);
  console.log(`📚 Total recipes available: ${indianRecipes.length}`);
  console.log(
    `🔍 Search endpoint: GET /api/recipes/search?ingredients=chicken,rice`
  );
  console.log(`📖 Recipe details: GET /api/recipes/1`);
});

module.exports = app;
