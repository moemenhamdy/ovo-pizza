export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  prices: {
    large?: number;
    xlarge?: number;
    family?: number;
  };
  isNew?: boolean;
}

export interface MenuCategory {
  id: string;
  nameEn: string;
  nameAr: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "classic",
    nameEn: "Classic",
    nameAr: "كلاسيك",
    icon: "local_pizza",
    items: [
      {
        id: "margherita",
        nameAr: "مارجريتا",
        nameEn: "Margherita",
        descriptionAr: "صلصه - جبنه موتزاريلا",
        descriptionEn: "Tomato sauce, mozzarella cheese",
        prices: { large: 125, xlarge: 145, family: 200 },
      },
      {
        id: "mixed-cheese",
        nameAr: "مشكل جبن",
        nameEn: "Mixed Cheese",
        descriptionAr: "صلصه - جبنه جوده - جبنه موتزاريلا - جبنه كبري",
        descriptionEn: "Tomato sauce, gouda, mozzarella, cheddar cheese",
        prices: { large: 170, xlarge: 210, family: 275 },
      },
      {
        id: "veggie",
        nameAr: "خضار",
        nameEn: "Veggie",
        descriptionAr: "صلصه - جبنه موتزاريلا - فلفل الوان - فلفل اخضر - بصل - زيتون",
        descriptionEn: "Tomato sauce, mozzarella, bell peppers, green pepper, onion, olives",
        prices: { large: 125, xlarge: 145, family: 200 },
      },
      {
        id: "blue-cheese",
        nameAr: "بلو تشيز",
        nameEn: "Blue Cheese",
        descriptionAr: "جبنه جوده - جبنه ريكفورد - جبنه موتزاريلا",
        descriptionEn: "Gouda, roquefort, mozzarella cheese",
        prices: { large: 170, xlarge: 210, family: 275 },
      },
    ],
  },
  {
    id: "meat",
    nameEn: "Meat",
    nameAr: "لحوم",
    icon: "lunch_dining",
    items: [
      {
        id: "pastrami",
        nameAr: "بسطرمه",
        nameEn: "Pastrami",
        descriptionAr: "صلصه - جبنه موتزاريلا - بسطرمه - فلفل اخضر",
        descriptionEn: "Tomato sauce, mozzarella, pastrami, green pepper",
        prices: { large: 170, xlarge: 210, family: 270 },
      },
      {
        id: "sausage",
        nameAr: "سجق",
        nameEn: "Sausage",
        descriptionAr: "صوص تيكساس - جبنه موتزاريلا - سجق - فلفل اخضر - بصل",
        descriptionEn: "Texas sauce, mozzarella, sausage, green pepper, onion",
        prices: { large: 170, xlarge: 210, family: 270 },
      },
      {
        id: "doner",
        nameAr: "دونر",
        nameEn: "Doner",
        descriptionAr: "صوص تيكساس - جبنه موتزاريلا - دونر كباب - بصل",
        descriptionEn: "Texas sauce, mozzarella, doner kebab, onion",
        prices: { large: 170, xlarge: 210, family: 270 },
      },
      {
        id: "pepperoni",
        nameAr: "بيبروني",
        nameEn: "Pepperoni",
        descriptionAr: "صلصه - جبنه موتزاريلا - بيبروني",
        descriptionEn: "Tomato sauce, mozzarella, pepperoni",
        prices: { large: 170, xlarge: 210, family: 270 },
      },
      {
        id: "mix-sharqi",
        nameAr: "مكس شرقي",
        nameEn: "Oriental Mix",
        descriptionAr: "صلصه - جبنه موتزاريلا - بسطرمه - سجق - فلفل اخضر - بصل",
        descriptionEn: "Tomato sauce, mozzarella, pastrami, sausage, green pepper, onion",
        prices: { large: 170, xlarge: 210, family: 270 },
      },
      {
        id: "super-supreme",
        nameAr: "سوبر سوبريم",
        nameEn: "Super Supreme",
        descriptionAr: "صوص تيكساس - جبنه موتزاريلا - بيبروني - سجق - فلفل اخضر - بصل - زيتون",
        descriptionEn: "Texas sauce, mozzarella, pepperoni, sausage, green pepper, onion, olives",
        prices: { large: 170, xlarge: 210, family: 270 },
      },
      {
        id: "beef-bacon",
        nameAr: "بيف بيكون",
        nameEn: "Beef Bacon",
        descriptionAr: "صوص تيكساس - جبنه موتزاريلا - قطع لحم بقري مدخن",
        descriptionEn: "Texas sauce, mozzarella, smoked beef cuts",
        prices: { large: 170, xlarge: 210, family: 270 },
      },
      {
        id: "beef-ranch",
        nameAr: "بيف رانش",
        nameEn: "Beef Ranch",
        descriptionAr: "صوص تيكساس - جبنه موتزاريلا - لحم بقري مدخن - قطع دجاج رانش",
        descriptionEn: "Texas sauce, mozzarella, smoked beef, ranch chicken pieces",
        prices: { large: 175, xlarge: 215, family: 275 },
      },
      {
        id: "super-ovo",
        nameAr: "سوبر OVO",
        nameEn: "Super OVO",
        descriptionAr: "صوص تيكساس - جبنه موتزاريلا - دونر كباب - سجق - بسطرمه",
        descriptionEn: "Texas sauce, mozzarella, doner kebab, sausage, pastrami",
        prices: { large: 180, xlarge: 225, family: 280 },
        isNew: true,
      },
    ],
  },
  {
    id: "chicken",
    nameEn: "Chicken",
    nameAr: "فراخ",
    icon: "set_meal",
    items: [
      {
        id: "chicken-ranch",
        nameAr: "تشكن رانش",
        nameEn: "Chicken Ranch",
        descriptionAr: "صوص رانش - جبنه موتزاريلا - دجاج رانش",
        descriptionEn: "Ranch sauce, mozzarella, ranch chicken",
        prices: { large: 165, xlarge: 215, family: 275 },
      },
      {
        id: "chicken-bbq",
        nameAr: "تشكن باربكيو",
        nameEn: "Chicken BBQ",
        descriptionAr: "صوص باربكيو - جبنه موتزاريلا - دجاج باربكيو - فلفل اخضر - بصل",
        descriptionEn: "BBQ sauce, mozzarella, BBQ chicken, green pepper, onion",
        prices: { large: 165, xlarge: 215, family: 275 },
      },
      {
        id: "crispy-chicken",
        nameAr: "كرسبي تشكن",
        nameEn: "Crispy Chicken",
        descriptionAr: "صوص رانش - جبنه موتزاريلا - كرسبي",
        descriptionEn: "Ranch sauce, mozzarella, crispy chicken",
        prices: { large: 170, xlarge: 220, family: 280 },
      },
      {
        id: "shawarma-chicken",
        nameAr: "شاورما فراخ",
        nameEn: "Chicken Shawarma",
        descriptionAr: "صوص رانش - جبنه موتزاريلا - شاورما فراخ",
        descriptionEn: "Ranch sauce, mozzarella, chicken shawarma",
        prices: { large: 170, xlarge: 220, family: 280 },
      },
      {
        id: "cordon-bleu",
        nameAr: "كوردن بلو",
        nameEn: "Cordon Bleu",
        descriptionAr: "صوص رانش - جبنه موتزاريلا - فراخ كرسبي - بيف بيكون - تركي مدخن",
        descriptionEn: "Ranch sauce, mozzarella, crispy chicken, beef bacon, smoked turkey",
        prices: { large: 170, xlarge: 220, family: 280 },
      },
      {
        id: "smoked-ranch",
        nameAr: "سموكد رانش",
        nameEn: "Smoked Ranch",
        descriptionAr: "صوص رانش - جبنه موتزاريلا - تركي مدخن - فراخ رانش",
        descriptionEn: "Ranch sauce, mozzarella, smoked turkey, ranch chicken",
        prices: { large: 170, xlarge: 220, family: 280 },
      },
      {
        id: "smoked-turkey",
        nameAr: "تركي مدخن",
        nameEn: "Smoked Turkey",
        descriptionAr: "صوص رانش - جبنه موتزاريلا - تركي مدخن",
        descriptionEn: "Ranch sauce, mozzarella, smoked turkey",
        prices: { large: 160, xlarge: 210, family: 260 },
      },
    ],
  },
  {
    id: "seafood",
    nameEn: "Sea Food",
    nameAr: "سي فود",
    icon: "sailing",
    items: [
      {
        id: "shrimp",
        nameAr: "جمبري",
        nameEn: "Shrimp",
        descriptionAr: "صوص رانش - جبنه موتزاريلا - جمبري - فلفل اخضر - فلفل الوان",
        descriptionEn: "Ranch sauce, mozzarella, shrimp, green pepper, bell peppers",
        prices: { large: 200, xlarge: 260, family: 310 },
      },
      {
        id: "shrimp-ranch",
        nameAr: "جمبري رانش",
        nameEn: "Shrimp Ranch",
        descriptionAr: "صوص رانش - جبنه موتزاريلا - جمبري - فلفل اخضر - فلفل الوان",
        descriptionEn: "Ranch sauce, mozzarella, shrimp, green pepper, bell peppers",
        prices: { large: 210, xlarge: 270, family: 320 },
      },
      {
        id: "seafood",
        nameAr: "سي فود",
        nameEn: "Sea Food",
        descriptionAr: "صوص رانش - جبنه موتزاريلا - جمبري - اصابع سوريمي - فلفل اخضر - فلفل الوان",
        descriptionEn: "Ranch sauce, mozzarella, shrimp, surimi sticks, green pepper, bell peppers",
        prices: { large: 215, xlarge: 275, family: 360 },
      },
      {
        id: "sea-ranch",
        nameAr: "سي رانش",
        nameEn: "Sea Ranch",
        descriptionAr: "صوص رانش - جبنه موتزاريلا - جمبري - اصابع سوريمي - فلفل اخضر - فلفل الوان",
        descriptionEn: "Ranch sauce, mozzarella, shrimp, surimi sticks, green pepper, bell peppers",
        prices: { large: 225, xlarge: 285, family: 370 },
      },
      {
        id: "tuna-ranch",
        nameAr: "تونه رانش",
        nameEn: "Tuna Ranch",
        descriptionAr: "صوص رانش - جبنه موتزاريلا - تونه - فلفل اخضر - بصل - زيتون",
        descriptionEn: "Ranch sauce, mozzarella, tuna, green pepper, onion, olives",
        prices: { large: 220, xlarge: 230, family: 310 },
      },
    ],
  },
  {
    id: "fourseason",
    nameEn: "Four Season",
    nameAr: "فور سيزون",
    icon: "grid_view",
    items: [
      {
        id: "four-season-meat",
        nameAr: "فور سيزون لحوم",
        nameEn: "Four Season Meat",
        descriptionAr: "بيبروني - دونر - بسطرمه - سجق",
        descriptionEn: "Pepperoni, doner, pastrami, sausage",
        prices: { family: 300 },
        isNew: true,
      },
      {
        id: "four-season-chicken",
        nameAr: "فور سيزون فراخ",
        nameEn: "Four Season Chicken",
        descriptionAr: "فراخ رانش - فراخ باربكيو - كرسبي - شاورما فراخ",
        descriptionEn: "Ranch chicken, BBQ chicken, crispy, chicken shawarma",
        prices: { family: 300 },
        isNew: true,
      },
      {
        id: "four-season-cheese",
        nameAr: "فور سيزون جبن",
        nameEn: "Four Season Cheese",
        descriptionAr: "مارجريتا - مشكل جبن - بلو تشيز - خضار",
        descriptionEn: "Margherita, mixed cheese, blue cheese, veggie",
        prices: { family: 300 },
        isNew: true,
      },
    ],
  },
  {
    id: "appetizers",
    nameEn: "Appetizers",
    nameAr: "مقبلات",
    icon: "fastfood",
    items: [
      {
        id: "v-cola",
        nameAr: "V-Cola",
        nameEn: "V-Cola",
        descriptionAr: "",
        descriptionEn: "Soft drink",
        prices: { large: 30 },
      },
      {
        id: "fries",
        nameAr: "بطاطس",
        nameEn: "Fries",
        descriptionAr: "",
        descriptionEn: "Crispy french fries",
        prices: { large: 40 },
      },
      {
        id: "sauce-cup",
        nameAr: "كب صوص",
        nameEn: "Sauce Cup",
        descriptionAr: "",
        descriptionEn: "Extra dipping sauce",
        prices: { large: 20 },
      },
      {
        id: "cheese-fries",
        nameAr: "تشيز فرايز",
        nameEn: "Cheese Fries",
        descriptionAr: "",
        descriptionEn: "Fries topped with melted cheese",
        prices: { large: 50 },
      },
      {
        id: "stuffed-crust",
        nameAr: "ستاند كراست",
        nameEn: "Stuffed Crust",
        descriptionAr: "إضافة حواف محشية جبنة",
        descriptionEn: "Add cheese-stuffed crust to any pizza",
        prices: { large: 50, xlarge: 55, family: 60 },
      },
    ],
  },
];
