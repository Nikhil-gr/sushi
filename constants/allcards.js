const makiLists = [
  {
    name: "SPICY TUNA MAKI",
    description:
      "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
    price: "$5",
    imageUrl: "/images/maki.png",
  },
  {
    name: "MANGO MAKI",
    description:
      "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
    price: "$5",
    imageUrl: "/images/maki1.png",
  },
  {
    name: "SALMON MAKI",
    description:
      "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
    price: "$5",
    imageUrl: "/images/maki3.png",
  },
  {
    name: "TUNA MAKI",
    description:
      "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
    price: "$5",
    imageUrl: "/images/maki4.png",
  },
];

const uramakiLists = [
  {
    name: "VOLCANO DELIGHT",
    description:
      "Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.",
    price: "$12",
    imageUrl: "/images/uramaki.png",
  },
  {
    name: "RAINBOW FUSION",
    description:
      "A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.",
    price: "$12",
    imageUrl: "/images/uramaki1.png",
  },
  {
    name: "DRAGON ELEGANCE",
    description:
      "Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.",
    price: "$12",
    imageUrl: "/images/uramaki2.png",
  },
  {
    name: "SUNSET SERENITY",
    description:
      "Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.",
    price: "$12",
    imageUrl: "/images/uramaki3.png",
  },
  {
    name: "MYSTIC GARDEN",
    description:
      "Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.",
    price: "$12",
    imageUrl: "/images/uramaki4.png",
  },
  {
    name: "OCEAN BREEZE",
    description:
      "A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.",
    price: "$12",
    imageUrl: "/images/uramaki5.png",
  },
  {
    name: "TOKYO BLOSSOM",
    description:
      "Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.",
    price: "$12",
    imageUrl: "/images/uramaki6.png",
  },
];

const specialrollsLists = [
  {
    name: "SUNRISE BLISS",
    description:
      "A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.",
    price: "$16",
    imageUrl: "/images/specialrolls.png",
  },
  {
    name: "MANGO TANGO FUSION",
    description:
      "A Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.",
    price: "$16",
    imageUrl: "/images/specialrolls1.png",
  },
  {
    name: "TRUFFLE INDULGENCE",
    description:
      "Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.",
    price: "$16",
    imageUrl: "/images/specialrolls2.png",
  },
  {
    name: "PACIFIC FIRECRACKER",
    description:
      "Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.",
    price: "$16",
    imageUrl: "/images/specialrolls4.png",
  },
  {
    name: "ETERNAL EEL ENCHANTMENT",
    description:
      "An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.",
    price: "$16",
    imageUrl: "/images/specialrolls5.png",
  },
];

const allCards = [...makiLists, ...uramakiLists, ...specialrollsLists];

export default allCards;
