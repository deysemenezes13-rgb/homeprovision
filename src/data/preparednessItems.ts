
import type { PreparednessItem } from '../types/PreparednessItem'

export const initialPreparednessItems: PreparednessItem[] = [
  // WATER
  {
    id: 'drinking-water',
    name: 'Drinking water',
    category: 'Water',
    completed: false,
    description: 'Store safe drinking water for emergencies.',
    recommendation: 'Plan water supplies based on household size and duration.',
    essential: true,
  },
  {
    id: 'water-containers',
    name: 'Water storage containers',
    category: 'Water',
    completed: false,
    description: 'Use clean, food-safe containers for storing water.',
    essential: true,
  },
  {
    id: 'water-purification',
    name: 'Water purification supplies',
    category: 'Water',
    completed: false,
    description: 'A suitable filter or purification method if drinking water becomes unavailable.',
  },

  // FOOD
  {
    id: 'non-perishable-food',
    name: 'Non-perishable food',
    category: 'Food',
    completed: false,
    description: 'Keep shelf-stable foods that require little or no preparation.',
    essential: true,
  },
  {
    id: 'ready-to-eat-meals',
    name: 'Ready-to-eat meals',
    category: 'Food',
    completed: false,
    description: 'Meals that can be eaten without cooking or refrigeration.',
  },
  {
    id: 'manual-can-opener',
    name: 'Manual can opener',
    category: 'Food',
    completed: false,
    description: 'Useful for canned food when electricity is unavailable.',
    essential: true,
  },
  {
    id: 'special-diet-food',
    name: 'Special dietary supplies',
    category: 'Food',
    completed: false,
    description: 'Include supplies for allergies, dietary needs, babies or pets where applicable.',
  },

  // FIRST AID
  {
    id: 'first-aid-kit',
    name: 'First aid kit',
    category: 'First Aid & Medicines',
    completed: false,
    description: 'Keep basic supplies for treating minor injuries.',
    essential: true,
  },
  {
    id: 'essential-medicines',
    name: 'Essential medicines',
    category: 'First Aid & Medicines',
    completed: false,
    description: 'Maintain an appropriate supply of prescribed and necessary medicines.',
    recommendation: 'Follow medical and pharmacy guidance for storage and supply.',
    essential: true,
  },
  {
    id: 'prescription-information',
    name: 'Prescription information',
    category: 'First Aid & Medicines',
    completed: false,
    description: 'Keep an up-to-date list of medicines and important medical information.',
  },
  {
    id: 'medical-supplies',
    name: 'Personal medical supplies',
    category: 'First Aid & Medicines',
    completed: false,
    description: 'Include any medical devices or supplies your household depends on.',
  },

  // LIGHTING AND POWER
  {
    id: 'flashlight',
    name: 'Flashlight / torch',
    category: 'Lighting & Power',
    completed: false,
    description: 'Reliable portable lighting during power outages.',
    essential: true,
  },
  {
    id: 'spare-batteries',
    name: 'Spare batteries',
    category: 'Lighting & Power',
    completed: false,
    description: 'Keep batteries compatible with your emergency devices.',
    essential: true,
  },
  {
    id: 'power-bank',
    name: 'Charged power bank',
    category: 'Lighting & Power',
    completed: false,
    description: 'Backup power for mobile phones and small devices.',
    essential: true,
  },
  {
    id: 'charging-cables',
    name: 'Charging cables',
    category: 'Lighting & Power',
    completed: false,
    description: 'Keep compatible charging cables available.',
  },

  // COMMUNICATION
  {
    id: 'emergency-radio',
    name: 'Battery or emergency radio',
    category: 'Communication',
    completed: false,
    description: 'Receive information when internet or mobile networks are unavailable.',
    essential: true,
  },
  {
    id: 'emergency-contacts',
    name: 'Emergency contact information',
    category: 'Communication',
    completed: false,
    description: 'Keep important contact numbers available offline.',
    essential: true,
  },
  {
    id: 'household-communication-plan',
    name: 'Household communication plan',
    category: 'Communication',
    completed: false,
    description: 'Agree how household members will communicate if separated.',
  },

  // HYGIENE
  {
    id: 'hygiene-supplies',
    name: 'Essential hygiene supplies',
    category: 'Hygiene & Sanitation',
    completed: false,
    description: 'Soap, toothpaste, toothbrushes and personal hygiene products.',
    essential: true,
  },
  {
    id: 'toilet-paper',
    name: 'Toilet paper',
    category: 'Hygiene & Sanitation',
    completed: false,
    description: 'Maintain an emergency supply.',
  },
  {
    id: 'hand-sanitiser',
    name: 'Hand sanitiser',
    category: 'Hygiene & Sanitation',
    completed: false,
    description: 'Useful when handwashing facilities are limited.',
  },
  {
    id: 'waste-bags',
    name: 'Waste disposal bags',
    category: 'Hygiene & Sanitation',
    completed: false,
    description: 'Strong bags for waste collection and sanitation.',
  },

  // WARMTH AND CLOTHING
  {
    id: 'warm-blankets',
    name: 'Warm blankets',
    category: 'Warmth & Clothing',
    completed: false,
    description: 'Keep suitable blankets for cold conditions.',
    essential: true,
  },
  {
    id: 'warm-clothing',
    name: 'Warm clothing',
    category: 'Warmth & Clothing',
    completed: false,
    description: 'Extra layers, socks and weather-appropriate clothing.',
    essential: true,
  },
  {
    id: 'waterproof-clothing',
    name: 'Waterproof clothing',
    category: 'Warmth & Clothing',
    completed: false,
    description: 'Rain protection for evacuation or outdoor travel.',
  },

  // DOCUMENTS AND MONEY
  {
    id: 'important-documents',
    name: 'Copies of important documents',
    category: 'Documents & Money',
    completed: false,
    description: 'Keep protected copies of identification and essential records.',
    essential: true,
  },
  {
    id: 'emergency-cash',
    name: 'Emergency cash',
    category: 'Documents & Money',
    completed: false,
    description: 'Keep a reasonable amount of cash in small denominations.',
  },
  {
    id: 'insurance-information',
    name: 'Insurance information',
    category: 'Documents & Money',
    completed: false,
    description: 'Keep important policy details and contact information accessible.',
  },

  // EMERGENCY EQUIPMENT
  {
    id: 'fire-extinguisher',
    name: 'Suitable fire extinguisher',
    category: 'Emergency Equipment',
    completed: false,
    description: 'Maintain suitable fire safety equipment and know how to use it safely.',
  },
  {
    id: 'smoke-alarms',
    name: 'Working smoke alarms',
    category: 'Emergency Equipment',
    completed: false,
    description: 'Install, test and maintain smoke alarms.',
    essential: true,
  },
  {
    id: 'basic-tools',
    name: 'Basic emergency tools',
    category: 'Emergency Equipment',
    completed: false,
    description: 'Useful basic tools for minor emergency tasks.',
  },
  {
    id: 'emergency-whistle',
    name: 'Emergency whistle',
    category: 'Emergency Equipment',
    completed: false,
    description: 'A simple way to signal for assistance.',
  },

  // EVACUATION
  {
    id: 'emergency-bag',
    name: 'Emergency grab-and-go bag',
    category: 'Evacuation',
    completed: false,
    description: 'Prepare a portable bag with essential items for a rapid departure.',
    essential: true,
  },
  {
    id: 'evacuation-plan',
    name: 'Household evacuation plan',
    category: 'Evacuation',
    completed: false,
    description: 'Know evacuation routes and a safe meeting location.',
    essential: true,
  },
  {
    id: 'spare-keys',
    name: 'Accessible spare keys',
    category: 'Evacuation',
    completed: false,
    description: 'Keep necessary spare keys in a secure, accessible location.',
  },
  {
    id: 'emergency-footwear',
    name: 'Sturdy footwear',
    category: 'Evacuation',
    completed: false,
    description: 'Keep appropriate shoes available for an emergency evacuation.',
  },
]
