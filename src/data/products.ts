import { Product } from '../types';

export const products: Product[] = [
  // Clothing
  {
    id: '1',
    name: 'Cotton Casual Dress',
    price: 1000,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Comfortable cotton dress perfect for everyday wear. Breathable fabric with a flattering fit.',
    stock: 15
  },
  {
    id: '2',
    name: 'Denim Jacket',
    price: 1000,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Classic denim jacket that pairs well with any outfit. Durable and stylish.',
    stock: 12
  },
  {
    id: '3',
    name: 'Floral Blouse',
    price: 1000,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautiful floral print blouse for a feminine touch to your wardrobe.',
    stock: 20
  },
  {
    id: '4',
    name: 'Casual T-Shirt',
    price: 1000,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Soft cotton t-shirt for everyday comfort and style.',
    stock: 25
  },
  {
    id: '5',
    name: 'Maxi Dress',
    price: 1000,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant maxi dress perfect for special occasions or casual outings.',
    stock: 10
  },
  {
    id: '6',
    name: 'Cardigan Sweater',
    price: 1000,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Cozy cardigan sweater for layering and warmth.',
    stock: 18
  },
  {
    id: '7',
    name: 'Summer Shorts',
    price: 1000,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Comfortable shorts perfect for hot summer days.',
    stock: 22
  },
  {
    id: '8',
    name: 'Office Blazer',
    price: 1000,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional blazer for office wear and formal occasions.',
    stock: 8
  },
  {
    id: '9',
    name: 'Casual Pants',
    price: 1000,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Versatile casual pants that go with everything.',
    stock: 16
  },
  {
    id: '10',
    name: 'Evening Gown',
    price: 1000,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant evening gown for special events and celebrations.',
    stock: 5
  },

  // Shoes
  {
    id: '11',
    name: 'Running Sneakers',
    price: 1500,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Comfortable running sneakers with excellent support and cushioning.',
    stock: 20
  },
  {
    id: '12',
    name: 'High Heels',
    price: 1500,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant high heels perfect for formal occasions and nights out.',
    stock: 12
  },
  {
    id: '13',
    name: 'Casual Flats',
    price: 1500,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Comfortable flat shoes for everyday wear and walking.',
    stock: 25
  },
  {
    id: '14',
    name: 'Ankle Boots',
    price: 1500,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stylish ankle boots that complement any outfit.',
    stock: 15
  },
  {
    id: '15',
    name: 'Sandals',
    price: 1500,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Comfortable sandals perfect for summer and casual wear.',
    stock: 18
  },
  {
    id: '16',
    name: 'Dress Shoes',
    price: 1500,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Formal dress shoes for professional and special occasions.',
    stock: 10
  },
  {
    id: '17',
    name: 'Canvas Shoes',
    price: 1500,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Casual canvas shoes for a relaxed, comfortable style.',
    stock: 22
  },
  {
    id: '18',
    name: 'Platform Shoes',
    price: 1500,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Trendy platform shoes for added height and style.',
    stock: 8
  },
  {
    id: '19',
    name: 'Loafers',
    price: 1500,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Classic loafers for a sophisticated, comfortable look.',
    stock: 14
  },
  {
    id: '20',
    name: 'Ballet Flats',
    price: 1500,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant ballet flats for comfort and style.',
    stock: 20
  },

  // Skincare
  {
    id: '21',
    name: 'Moisturizing Cream',
    price: 500,
    category: 'skincare',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Hydrating moisturizing cream for all skin types.',
    stock: 30
  },
  {
    id: '22',
    name: 'Face Cleanser',
    price: 500,
    category: 'skincare',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Gentle face cleanser that removes impurities without drying.',
    stock: 25
  },
  {
    id: '23',
    name: 'Sunscreen SPF 50',
    price: 500,
    category: 'skincare',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High protection sunscreen for daily use.',
    stock: 20
  },
  {
    id: '24',
    name: 'Anti-Aging Serum',
    price: 500,
    category: 'skincare',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Powerful anti-aging serum with natural ingredients.',
    stock: 15
  },
  {
    id: '25',
    name: 'Exfoliating Scrub',
    price: 500,
    category: 'skincare',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Gentle exfoliating scrub for smooth, radiant skin.',
    stock: 18
  },
  {
    id: '26',
    name: 'Eye Cream',
    price: 500,
    category: 'skincare',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Specialized eye cream for delicate under-eye area.',
    stock: 12
  },
  {
    id: '27',
    name: 'Toner',
    price: 500,
    category: 'skincare',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Balancing toner to prep skin for moisturizer.',
    stock: 22
  },
  {
    id: '28',
    name: 'Face Mask',
    price: 500,
    category: 'skincare',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Nourishing face mask for weekly skincare routine.',
    stock: 16
  },
  {
    id: '29',
    name: 'Lip Balm',
    price: 500,
    category: 'skincare',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Moisturizing lip balm with natural ingredients.',
    stock: 35
  },
  {
    id: '30',
    name: 'Night Cream',
    price: 500,
    category: 'skincare',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Rich night cream for overnight skin repair.',
    stock: 14
  },

  // Makeup
  {
    id: '31',
    name: 'Foundation',
    price: 400,
    category: 'makeup',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Full coverage foundation for a flawless complexion.',
    stock: 20
  },
  {
    id: '32',
    name: 'Lipstick',
    price: 400,
    category: 'makeup',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Long-lasting lipstick in beautiful shades.',
    stock: 30
  },
  {
    id: '33',
    name: 'Mascara',
    price: 400,
    category: 'makeup',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Volumizing mascara for dramatic lashes.',
    stock: 25
  },
  {
    id: '34',
    name: 'Eyeshadow Palette',
    price: 400,
    category: 'makeup',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Versatile eyeshadow palette with multiple shades.',
    stock: 15
  },
  {
    id: '35',
    name: 'Blush',
    price: 400,
    category: 'makeup',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Natural-looking blush for a healthy glow.',
    stock: 18
  },
  {
    id: '36',
    name: 'Concealer',
    price: 400,
    category: 'makeup',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High coverage concealer for blemishes and dark circles.',
    stock: 22
  },
  {
    id: '37',
    name: 'Eyeliner',
    price: 400,
    category: 'makeup',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Precise eyeliner for defined eyes.',
    stock: 28
  },
  {
    id: '38',
    name: 'Bronzer',
    price: 400,
    category: 'makeup',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Bronzer for a sun-kissed, sculpted look.',
    stock: 12
  },
  {
    id: '39',
    name: 'Highlighter',
    price: 400,
    category: 'makeup',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Luminous highlighter for a radiant glow.',
    stock: 16
  },
  {
    id: '40',
    name: 'Setting Spray',
    price: 400,
    category: 'makeup',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Setting spray to lock in your makeup all day.',
    stock: 20
  },

  // Accessories
  {
    id: '41',
    name: 'Statement Necklace',
    price: 250,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Bold statement necklace to elevate any outfit.',
    stock: 15
  },
  {
    id: '42',
    name: 'Leather Handbag',
    price: 250,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant leather handbag for everyday use.',
    stock: 12
  },
  {
    id: '43',
    name: 'Sunglasses',
    price: 250,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stylish sunglasses with UV protection.',
    stock: 20
  },
  {
    id: '44',
    name: 'Silk Scarf',
    price: 250,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Luxurious silk scarf in beautiful patterns.',
    stock: 18
  },
  {
    id: '45',
    name: 'Watch',
    price: 250,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Classic watch for timeless style.',
    stock: 10
  },
  {
    id: '46',
    name: 'Earrings',
    price: 250,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant earrings for any occasion.',
    stock: 25
  },
  {
    id: '47',
    name: 'Belt',
    price: 250,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Versatile belt to complete your look.',
    stock: 22
  },
  {
    id: '48',
    name: 'Hair Accessories',
    price: 250,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautiful hair accessories for styling.',
    stock: 30
  },
  {
    id: '49',
    name: 'Bracelet',
    price: 250,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Delicate bracelet for everyday wear.',
    stock: 28
  },
  {
    id: '50',
    name: 'Wallet',
    price: 250,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Compact wallet with multiple compartments.',
    stock: 16
  }
];