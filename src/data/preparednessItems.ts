import type { PreparednessItem } from '../types/PreparednessItem'

export const initialPreparednessItems: PreparednessItem[] = [
  {
  id: 'drinking-water',
  name: 'Drinking water',
  category: 'Water',
  completed: false,
  description: 'Keep a supply of safe drinking water for emergencies.',
  recommendation: 'Amount will be calculated based on household size.',
  essential: true,
},
  {
    id: 'non-perishable-food',
    name: 'Non-perishable food',
    category: 'Food',
    completed: false,
  },
  {
    id: 'first-aid-kit',
    name: 'First aid kit',
    category: 'First Aid',
    completed: false,
  },
  {
    id: 'essential-medicines',
    name: 'Essential medicines',
    category: 'First Aid',
    completed: false,
  },
  {
    id: 'flashlight',
    name: 'Flashlight / torch',
    category: 'Lighting & Power',
    completed: false,
  },
  {
    id: 'spare-batteries',
    name: 'Spare batteries',
    category: 'Lighting & Power',
    completed: false,
  },
  {
    id: 'power-bank',
    name: 'Charged power bank',
    category: 'Lighting & Power',
    completed: false,
  },
  {
    id: 'hygiene-supplies',
    name: 'Essential hygiene supplies',
    category: 'Hygiene',
    completed: false,
  },
  {
    id: 'emergency-radio',
    name: 'Battery or emergency radio',
    category: 'Communication',
    completed: false,
  },
  {
    id: 'emergency-contacts',
    name: 'Emergency contact information',
    category: 'Communication',
    completed: false,
  },
  {
    id: 'important-documents',
    name: 'Copies of important documents',
    category: 'Documents',
    completed: false,
  },
  {
    id: 'emergency-cash',
    name: 'Emergency cash',
    category: 'Documents',
    completed: false,
  },
]