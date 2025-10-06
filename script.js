// Mock API Configuration
const MOCK_API_BASE_URL = "http://localhost:3001/api";

// Enhanced Animation utility functions
function showNotification(message, type = "success") {
  const notification = document.getElementById("notification");
  if (!notification) return;

  notification.textContent = message;
  notification.className = "notification";

  if (type === "warning") {
    notification.style.backgroundColor = "var(--warning)";
  } else if (type === "error") {
    notification.style.backgroundColor = "var(--error)";
  } else {
    notification.style.backgroundColor = "var(--primary)";
  }

  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// Enhanced animation for elements
function animateElement(element, animationName, duration = 500) {
  element.style.animation = `${animationName} ${duration}ms ease forwards`;
}

// Mock API Service
class MockRecipeAPI {
  constructor() {
    this.baseURL = MOCK_API_BASE_URL;
  }

  async searchByIngredients(ingredients, limit = 12) {
    try {
      const ingredientsString = ingredients.join(",");
      const response = await fetch(
        `${this.baseURL}/recipes/search?ingredients=${ingredientsString}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error(`Mock API error: ${response.status}`);
      }

      const data = await response.json();
      return data.recipes;
    } catch (error) {
      console.error("Error searching recipes:", error);
      // Fallback to local mock data if API is down
      return this.getLocalRecipes(ingredients, limit);
    }
  }

  async getRecipeInformation(recipeId) {
    try {
      const response = await fetch(`${this.baseURL}/recipes/${recipeId}`);

      if (!response.ok) {
        throw new Error(`Mock API error: ${response.status}`);
      }

      const data = await response.json();
      return data.recipe;
    } catch (error) {
      console.error("Error getting recipe information:", error);
      throw error;
    }
  }

  // Local fallback data
  getLocalRecipes(ingredients, limit) {
    const localRecipes = [
      {
        id: 1,
        title: "Butter Chicken",
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
        time: 45,
        servings: 4,
        difficulty: "Medium",
        region: "North Indian",
        ingredients: [
          "chicken",
          "butter",
          "cream",
          "tomatoes",
          "spices",
          "garlic",
          "ginger",
          "onions",
        ],
        steps: [
          "Marinate chicken with yogurt and spices for 2 hours",
          "Heat butter in a pan and sauté onions until golden",
          "Add ginger-garlic paste and cook for 2 minutes",
          "Add tomato puree and cook until oil separates",
          "Add cream and simmer for 5 minutes",
          "Add marinated chicken and cook for 15-20 minutes",
          "Garnish with fresh cream and coriander leaves",
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
          "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
        time: 60,
        servings: 3,
        difficulty: "Hard",
        region: "South Indian",
        ingredients: [
          "rice",
          "lentils",
          "potatoes",
          "onions",
          "mustard seeds",
          "curry leaves",
          "coconut chutney",
        ],
        steps: [
          "Soak rice and lentils separately for 6 hours",
          "Grind to make a smooth batter and ferment overnight",
          "Heat a dosa pan and spread the batter thinly",
          "Cook until golden brown and crisp",
          "For filling, boil and mash potatoes",
          "Sauté onions, mustard seeds, and curry leaves",
          "Add mashed potatoes and spices, mix well",
          "Place filling on dosa and serve with chutney",
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
          "https://images.unsplash.com/photo-1664970903256-38c0d69bf701?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWRsaSUyMHNhbWJhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
          "https://images.unsplash.com/photo-1633878352894-8e454c91e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9nYW4lMjBqb3NofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
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
          "https://images.unsplash.com/photo-1633878352894-8e454c91e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkdSUyMHZhZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
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
          "https://images.unsplash.com/photo-1606499339577-3d370ff5a88c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF2JTIwYmhhaml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
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
        image:
          "https://images.unsplash.com/photo-1585937421612-70a00876c88f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGhva2xhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
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
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMGN1cnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
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
          "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxvb28lMjBwYXJhdGhhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
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
      {
        id: 13,
        title: "Pongal",
        image:
          "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9uZ2FsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        time: 30,
        servings: 4,
        difficulty: "Easy",
        region: "South Indian",
        cuisineType: ["Tamil Nadu"],
        ingredients: [
          "1 cup rice",
          "1/2 cup moong dal",
          "4 cups water",
          "1 tsp black pepper",
          "1 tsp cumin seeds",
          "10-12 cashews",
          "1 inch ginger, grated",
          "10 curry leaves",
          "2 tbsp ghee",
          "Salt to taste",
        ],
        steps: [
          "Dry roast moong dal until golden and aromatic",
          "Wash rice and roasted dal together",
          "Pressure cook with water and salt for 4-5 whistles",
          "Heat ghee in a pan, add cumin seeds and black pepper",
          "Add cashews and fry until golden",
          "Add ginger and curry leaves, sauté for a minute",
          "Add this tempering to the cooked rice-dal mixture",
          "Mix well and cook for 2-3 minutes",
          "Serve hot with sambar and coconut chutney",
        ],
        nutrition: {
          calories: 320,
          protein: 12,
          carbs: 55,
          fat: 8,
        },
      },
      {
        id: 14,
        title: "Bisi Bele Bath",
        image:
          "https://images.unsplash.com/photo-1563379091339-163f3a36d12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlzaSUyMGJlbGUlMjBiYXRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        time: 45,
        servings: 4,
        difficulty: "Medium",
        region: "South Indian",
        cuisineType: ["Karnataka"],
        ingredients: [
          "1 cup rice",
          "1/2 cup toor dal",
          "1 cup mixed vegetables",
          "3 tbsp bisi bele bath powder",
          "1 tsp tamarind paste",
          "2 tbsp ghee",
          "10-12 cashews",
          "1 tsp mustard seeds",
          "10 curry leaves",
          "2 dry red chilies",
          "Salt to taste",
        ],
        steps: [
          "Pressure cook rice and dal together with vegetables",
          "Soak tamarind in warm water and extract juice",
          "Add tamarind juice and bisi bele bath powder to cooked rice",
          "Add water to adjust consistency and cook for 10 minutes",
          "Heat ghee, add mustard seeds and let them crackle",
          "Add cashews, curry leaves, and red chilies",
          "Pour tempering over the rice mixture and mix well",
          "Serve hot with papad and potato chips",
        ],
        nutrition: {
          calories: 380,
          protein: 15,
          carbs: 65,
          fat: 10,
        },
      },
      {
        id: 15,
        title: "Uttapam",
        image:
          "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXR0YXBhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
        time: 20,
        servings: 3,
        difficulty: "Easy",
        region: "South Indian",
        cuisineType: ["Tamil Nadu"],
        ingredients: [
          "2 cups dosa batter",
          "1 onion, finely chopped",
          "1 tomato, finely chopped",
          "2 green chilies, chopped",
          "1 capsicum, finely chopped",
          "Fresh coriander, chopped",
          "Oil for cooking",
          "Salt to taste",
        ],
        steps: [
          "Heat a dosa tawa and grease with oil",
          "Pour a ladle of batter and spread thickly",
          "Sprinkle onions, tomatoes, green chilies, capsicum and coriander",
          "Drizzle oil around the edges",
          "Cook on medium flame until bottom turns golden",
          "Flip and cook the other side for 2 minutes",
          "Serve hot with sambar and coconut chutney",
        ],
        nutrition: {
          calories: 180,
          protein: 6,
          carbs: 32,
          fat: 4,
        },
      },
      {
        id: 16,
        title: "Rasam",
        image:
          "https://images.unsplash.com/photo-1585937421612-70a00876c88f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFzYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
        time: 25,
        servings: 4,
        difficulty: "Easy",
        region: "South Indian",
        cuisineType: ["Tamil Nadu"],
        ingredients: [
          "1 cup toor dal",
          "2 tomatoes, chopped",
          "1 tsp tamarind paste",
          "2 tsp rasam powder",
          "1 tsp mustard seeds",
          "1 tsp cumin seeds",
          "10 curry leaves",
          "2 dry red chilies",
          "2 tbsp coriander leaves",
          "1/2 tsp turmeric powder",
          "Salt to taste",
        ],
        steps: [
          "Pressure cook toor dal until soft and mash well",
          "Boil tomatoes in water until soft",
          "Add tamarind extract and rasam powder",
          "Add cooked dal and bring to boil",
          "Temper with mustard seeds, cumin seeds, curry leaves and red chilies",
          "Garnish with coriander leaves",
          "Serve hot with rice or drink as soup",
        ],
        nutrition: {
          calories: 120,
          protein: 8,
          carbs: 20,
          fat: 2,
        },
      },
      {
        id: 17,
        title: "Vada Sambar",
        image:
          "https://images.unsplash.com/photo-1633878352894-8e454c91e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFkYSUyMHNhbWJhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
        time: 30,
        servings: 3,
        difficulty: "Medium",
        region: "South Indian",
        cuisineType: ["Tamil Nadu"],
        ingredients: [
          "For vada:",
          "2 cups urad dal",
          "2 green chilies",
          "1 inch ginger",
          "10 curry leaves",
          "1 tsp pepper corns",
          "Oil for frying",
          "For sambar:",
          "1 cup toor dal",
          "1 cup vegetables",
          "2 tbsp sambar powder",
          "1 tsp tamarind paste",
          "2 tbsp coconut",
          "Salt to taste",
        ],
        steps: [
          "Soak urad dal for 4 hours and grind to thick batter",
          "Add spices and make donut shaped vadas",
          "Deep fry until golden brown",
          "For sambar, cook dal and vegetables together",
          "Add sambar powder and tamarind",
          "Serve hot vadas with sambar",
        ],
        nutrition: {
          calories: 280,
          protein: 12,
          carbs: 35,
          fat: 10,
        },
      },
      {
        id: 18,
        title: "Chicken Tikka Masala",
        image:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHRpa2thJTIwbWFzYWxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        time: 50,
        servings: 4,
        difficulty: "Medium",
        region: "North Indian",
        cuisineType: ["Punjabi"],
        ingredients: [
          "500g chicken breast, cubed",
          "1 cup yogurt",
          "2 tbsp tikka masala",
          "1 cup cream",
          "3 tomatoes, pureed",
          "2 onions, finely chopped",
          "4 garlic cloves, minced",
          "1 inch ginger, grated",
          "2 tbsp oil",
          "1 tsp garam masala",
          "Salt to taste",
          "Fresh coriander for garnish",
        ],
        steps: [
          "Marinate chicken in yogurt and tikka masala for 2 hours",
          "Grill or bake chicken until cooked through",
          "Heat oil in a pan, sauté onions until golden",
          "Add ginger-garlic paste and cook for 2 minutes",
          "Add tomato puree and cook until oil separates",
          "Add cream and simmer for 5 minutes",
          "Add grilled chicken and cook for 10 minutes",
          "Garnish with fresh coriander and cream",
          "Serve hot with naan or rice",
        ],
        nutrition: {
          calories: 420,
          protein: 38,
          carbs: 15,
          fat: 25,
        },
      },
      {
        id: 19,
        title: "Vegetable Biryani",
        image:
          "https://images.unsplash.com/photo-1563379091339-163f3a36d12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
        time: 55,
        servings: 4,
        difficulty: "Medium",
        region: "Hybrid",
        cuisineType: ["Mughlai"],
        ingredients: [
          "2 cups basmati rice",
          "3 cups mixed vegetables",
          "2 onions, sliced",
          "1 cup yogurt",
          "3 tbsp biryani masala",
          "1/2 cup mint leaves",
          "1/2 cup coriander leaves",
          "4 green chilies",
          "1/2 cup fried onions",
          "Saffron strands",
          "4 tbsp ghee",
          "Whole spices",
          "Salt to taste",
        ],
        steps: [
          "Soak basmati rice for 30 minutes",
          "Parboil rice with whole spices",
          "Sauté vegetables with biryani masala",
          "Layer vegetables and rice in a pot",
          "Add fried onions, herbs, and saffron milk",
          "Seal and cook on dum for 25 minutes",
          "Let it rest for 15 minutes",
          "Serve hot with raita",
        ],
        nutrition: {
          calories: 380,
          protein: 12,
          carbs: 65,
          fat: 12,
        },
      },
    ];

    // Filter recipes based on ingredients
    const matchingRecipes = localRecipes.filter((recipe) => {
      const recipeIngredients = recipe.ingredients.join(" ").toLowerCase();
      return ingredients.some((ingredient) =>
        recipeIngredients.includes(ingredient.toLowerCase())
      );
    });

    return matchingRecipes.slice(0, limit);
  }
}

// Create API instance
const recipeAPI = new MockRecipeAPI();

// Recipe Finder Page JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Check if user is logged in
  const user = localStorage.getItem("user") || sessionStorage.getItem("user");
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  // DOM Elements
  const ingredientInput = document.getElementById("ingredient-input");
  const addIngredientBtn = document.getElementById("add-ingredient");
  const ingredientsList = document.getElementById("ingredients-list");
  const findRecipesBtn = document.getElementById("find-recipes");
  const clearIngredientsBtn = document.getElementById("clear-ingredients");
  const recipesContainer = document.getElementById("recipes-container");
  const loadingElement = document.getElementById("loading");
  const resultsHeader = document.getElementById("results-header");
  const resultsCount = document.getElementById("results-count");
  const emptyState = document.getElementById("empty-state");
  const userGreeting = document.getElementById("user-greeting");
  const logoutBtn = document.getElementById("logout-btn");
  const btnText = document.querySelector(".btn-text");
  const btnLoader = document.querySelector(".btn-loader");
  const recipeModal = document.getElementById("recipe-modal");
  const modalContent = document.getElementById("modal-recipe-content");
  const closeModal = document.querySelector(".close-modal");

  // Array to store ingredients
  let ingredients = [];

  // Set user greeting
  if (user) {
    const userData = JSON.parse(user);
    userGreeting.textContent = `Welcome, ${
      userData.name || userData.email.split("@")[0]
    }!`;
  }

  // Enhanced logout functionality
  logoutBtn.addEventListener("click", function () {
    animateElement(logoutBtn, "pulse", 300);
    setTimeout(() => {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      showNotification("Logged out successfully", "success");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    }, 300);
  });

  // Enhanced modal functionality
  closeModal.addEventListener("click", function () {
    animateElement(recipeModal, "fadeOut", 300);
    setTimeout(() => {
      recipeModal.classList.add("hidden");
    }, 300);
  });

  recipeModal.addEventListener("click", function (e) {
    if (e.target === recipeModal) {
      animateElement(recipeModal, "fadeOut", 300);
      setTimeout(() => {
        recipeModal.classList.add("hidden");
      }, 300);
    }
  });

  // Add ingredient when button is clicked
  addIngredientBtn.addEventListener("click", addIngredient);

  // Add ingredient when Enter key is pressed
  ingredientInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addIngredient();
    }
  });

  // Clear all ingredients
  clearIngredientsBtn.addEventListener("click", clearIngredients);

  // Enhanced suggestion tags functionality
  document.querySelectorAll(".suggestion-tag").forEach((tag) => {
    tag.addEventListener("click", function () {
      animateElement(this, "bounce", 300);
      const ingredient = this.getAttribute("data-ingredient");
      ingredientInput.value = ingredient;
      setTimeout(() => {
        addIngredient();
      }, 300);
    });
  });

  // Function to add ingredient
  function addIngredient() {
    const ingredient = ingredientInput.value.trim().toLowerCase();

    if (ingredient && !ingredients.includes(ingredient)) {
      ingredients.push(ingredient);
      updateIngredientsList();
      ingredientInput.value = "";
      showNotification(`Added "${ingredient}" to your ingredients`);

      // Animate the add button
      animateElement(addIngredientBtn, "pulse", 300);
    } else if (ingredients.includes(ingredient)) {
      showNotification("You have already added this ingredient!", "warning");
      animateElement(ingredientInput, "shake", 500);
    } else {
      showNotification("Please enter an ingredient", "warning");
      animateElement(ingredientInput, "shake", 500);
    }

    ingredientInput.focus();
  }

  // Function to update the displayed ingredients list
  function updateIngredientsList() {
    ingredientsList.innerHTML = "";

    if (ingredients.length === 0) {
      ingredientsList.innerHTML =
        '<p class="no-ingredients">No ingredients added yet</p>';
      return;
    }

    ingredients.forEach((ingredient, index) => {
      const ingredientTag = document.createElement("div");
      ingredientTag.className = "ingredient-tag";
      ingredientTag.style.animationDelay = `${index * 0.1}s`;
      ingredientTag.innerHTML = `
                ${ingredient}
                <span class="remove" data-ingredient="${ingredient}">&times;</span>
            `;
      ingredientsList.appendChild(ingredientTag);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll(".ingredient-tag .remove").forEach((button) => {
      button.addEventListener("click", function () {
        const ingredientToRemove = this.getAttribute("data-ingredient");
        ingredients = ingredients.filter((ing) => ing !== ingredientToRemove);
        updateIngredientsList();
        showNotification(
          `Removed "${ingredientToRemove}" from your ingredients`
        );
      });
    });
  }

  // Function to clear all ingredients
  function clearIngredients() {
    if (ingredients.length === 0) {
      showNotification("No ingredients to clear", "warning");
      return;
    }

    // Animate clearing
    const tags = document.querySelectorAll(".ingredient-tag");
    tags.forEach((tag, index) => {
      setTimeout(() => {
        animateElement(tag, "fadeOut", 300);
      }, index * 100);
    });

    setTimeout(() => {
      ingredients = [];
      updateIngredientsList();
      showNotification("All ingredients cleared");
    }, tags.length * 100);
  }

  // Find recipes when button is clicked
  findRecipesBtn.addEventListener("click", findRecipes);

  // Function to find recipes using Mock API
  async function findRecipes() {
    if (ingredients.length === 0) {
      showNotification("Please add at least one ingredient!", "warning");
      animateElement(findRecipesBtn, "shake", 500);
      return;
    }

    // Enhanced loading state on button
    btnText.classList.add("hidden");
    btnLoader.classList.remove("hidden");
    findRecipesBtn.disabled = true;
    animateElement(findRecipesBtn, "pulse", 300);

    // Show loading indicator with animation
    loadingElement.classList.remove("hidden");
    animateElement(loadingElement, "fadeIn", 300);

    recipesContainer.innerHTML = "";
    resultsHeader.classList.add("hidden");
    emptyState.classList.add("hidden");

    try {
      // Use Mock API to search recipes
      const recipes = await recipeAPI.searchByIngredients(ingredients, 12);

      // Enhanced loading transition
      setTimeout(() => {
        loadingElement.classList.add("hidden");

        // Show results header with animation
        resultsHeader.classList.remove("hidden");
        animateElement(resultsHeader, "slideInDown", 500);
        resultsCount.querySelector("span").textContent = recipes.length;

        // Display recipes
        displayRecipes(recipes);

        if (recipes.length === 0) {
          showNotification("No recipes found with your ingredients", "warning");
        } else {
          showNotification(
            `Found ${recipes.length} authentic Indian recipes for you!`
          );
        }
      }, 1000);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      showNotification("Error loading recipes. Using demo data.", "warning");

      // Final fallback
      const mockRecipes = recipeAPI.getLocalRecipes(ingredients, 8);
      setTimeout(() => {
        loadingElement.classList.add("hidden");
        displayRecipes(mockRecipes);
        resultsHeader.classList.remove("hidden");
        animateElement(resultsHeader, "slideInDown", 500);
        resultsCount.querySelector("span").textContent = mockRecipes.length;
      }, 1000);
    } finally {
      // Reset button state
      setTimeout(() => {
        btnText.classList.remove("hidden");
        btnLoader.classList.add("hidden");
        findRecipesBtn.disabled = false;
      }, 1000);
    }
  }

  // Enhanced function to display recipes
  function displayRecipes(recipes) {
    recipesContainer.innerHTML = "";

    if (recipes.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "no-results";
      noResults.innerHTML = `
                <div class="empty-icon">
                    <i class="fas fa-search"></i>
                </div>
                <h3>No recipes found</h3>
                <p>Try adding different ingredients or check your spelling.</p>
            `;
      recipesContainer.appendChild(noResults);
      animateElement(noResults, "fadeIn", 500);
      return;
    }

    recipes.forEach((recipe, index) => {
      const recipeCard = document.createElement("div");
      recipeCard.className = "recipe-card";
      recipeCard.style.animationDelay = `${index * 0.1}s`;

      recipeCard.innerHTML = `
                <div class="recipe-image-container">
                    <img src="${recipe.image}" alt="${
        recipe.title
      }" class="recipe-image" 
                         onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
                    <div class="recipe-overlay">
                        <span class="difficulty-badge">${
                          recipe.difficulty
                        }</span>
                    </div>
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <div class="recipe-info">
                        <span><i class="far fa-clock"></i> ${
                          recipe.time
                        } min</span>
                        <span><i class="fas fa-user-friends"></i> ${
                          recipe.servings
                        } servings</span>
                        <span class="recipe-region">${recipe.region}</span>
                    </div>
                    <div class="recipe-ingredients">
                        <h4>Key Ingredients:</h4>
                        <ul class="ingredients-list-small">
                            ${recipe.ingredients
                              .slice(0, 4)
                              .map((ing) => {
                                const ingredientText =
                                  typeof ing === "string"
                                    ? ing
                                    : ing.text || ing;
                                return `<li>${
                                  ingredientText.split(",")[0]
                                }</li>`;
                              })
                              .join("")}
                            ${
                              recipe.ingredients.length > 4
                                ? "<li>...</li>"
                                : ""
                            }
                        </ul>
                    </div>
                    <button class="view-recipe-btn" data-recipe-id="${
                      recipe.id
                    }">
                        <i class="fas fa-book-open"></i> View Recipe & Steps
                    </button>
                </div>
            `;

      recipesContainer.appendChild(recipeCard);
    });

    // Add event listeners to view recipe buttons
    document.querySelectorAll(".view-recipe-btn").forEach((button) => {
      button.addEventListener("click", async function () {
        animateElement(this, "pulse", 300);
        const recipeId = parseInt(this.getAttribute("data-recipe-id"));
        setTimeout(() => {
          showRecipeDetails(recipeId);
        }, 300);
      });
    });

    // Enhanced card animations
    const recipeCards = document.querySelectorAll(".recipe-card");
    recipeCards.forEach((card) => {
      card.style.animation = "cardAppear 0.6s ease forwards";
    });
  }

  // Enhanced function to show recipe details in modal
  async function showRecipeDetails(recipeId) {
    try {
      // Show loading in modal with animation
      modalContent.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                    <p>Loading recipe details...</p>
                </div>
            `;
      recipeModal.classList.remove("hidden");
      animateElement(recipeModal, "fadeIn", 300);

      // Get recipe information
      const recipeInfo = await recipeAPI.getRecipeInformation(recipeId);

      setTimeout(() => {
        displayRecipeModal(recipeInfo);
      }, 500);
    } catch (error) {
      console.error("Error loading recipe details:", error);
      showNotification("Failed to load recipe details", "error");
      // Fallback to mock data
      displayMockRecipeModal(recipeId);
    }
  }

  // Enhanced function to display recipe in modal
  function displayRecipeModal(recipeInfo) {
    modalContent.innerHTML = `
            <div class="modal-recipe-header">
                <h2>${recipeInfo.title}</h2>
                <span class="recipe-region">${recipeInfo.region}</span>
            </div>
            
            <div class="modal-image-container">
                <img src="${recipeInfo.image}" alt="${
      recipeInfo.title
    }" class="modal-recipe-image"
                     onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
                <div class="image-overlay"></div>
            </div>
            
            <div class="recipe-details">
                <div class="detail-item">
                    <i class="far fa-clock"></i>
                    <div class="label">Cooking Time</div>
                    <div class="value">${recipeInfo.time} minutes</div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-user-friends"></i>
                    <div class="label">Servings</div>
                    <div class="value">${recipeInfo.servings} people</div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-fire"></i>
                    <div class="label">Difficulty</div>
                    <div class="value">${recipeInfo.difficulty}</div>
                </div>
            </div>
            
            <div class="recipe-section">
                <h3><i class="fas fa-shopping-basket"></i> Ingredients</h3>
                <div class="ingredients-grid">
                    ${recipeInfo.ingredients
                      .map((ingredient, index) => {
                        const ingredientText =
                          typeof ingredient === "string"
                            ? ingredient
                            : ingredient.text || ingredient;
                        return `
                            <div class="ingredient-item" style="animation-delay: ${
                              index * 0.1
                            }s">
                                <i class="fas fa-check-circle"></i>
                                <span>${ingredientText}</span>
                            </div>
                        `;
                      })
                      .join("")}
                </div>
            </div>
            
            <div class="recipe-section">
                <h3><i class="fas fa-list-ol"></i> Cooking Steps</h3>
                <ol class="steps-list">
                    ${recipeInfo.steps
                      .map(
                        (step, index) => `
                        <li class="step-item" style="animation-delay: ${
                          index * 0.2
                        }s">${step}</li>
                    `
                      )
                      .join("")}
                </ol>
            </div>
            
            ${
              recipeInfo.nutrition
                ? `
            <div class="recipe-section">
                <h3><i class="fas fa-chart-pie"></i> Nutrition (per serving)</h3>
                <div class="nutrition-grid">
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipeInfo.nutrition.calories}</div>
                        <div class="nutrition-label">Calories</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipeInfo.nutrition.protein}g</div>
                        <div class="nutrition-label">Protein</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipeInfo.nutrition.carbs}g</div>
                        <div class="nutrition-label">Carbs</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipeInfo.nutrition.fat}g</div>
                        <div class="nutrition-label">Fat</div>
                    </div>
                </div>
            </div>
            `
                : ""
            }
        `;

    // Animate modal content
    setTimeout(() => {
      document.querySelectorAll(".ingredient-item").forEach((item) => {
        animateElement(item, "slideInRight", 500);
      });

      document.querySelectorAll(".step-item").forEach((item) => {
        animateElement(item, "slideInRight", 500);
      });
    }, 100);
  }

  function displayMockRecipeModal(recipeId) {
    modalContent.innerHTML = `
            <div class="modal-recipe-header">
                <h2>Demo Recipe</h2>
                <p>This is demo data. Make sure your mock API server is running.</p>
            </div>
            <div class="recipe-section">
                <h3>How to Start Mock API</h3>
                <p>Run these commands in your terminal:</p>
                <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
cd your-project-folder
npm install
node mock-api.js
                </pre>
                <p>Then refresh this page and try again.</p>
            </div>
        `;
  }

  // Initialize with some sample ingredients for demo
  setTimeout(() => {
    ingredients = ["chicken", "rice", "spices"];
    updateIngredientsList();
  }, 1000);
});
