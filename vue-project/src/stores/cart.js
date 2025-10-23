import { reactive } from 'vue'

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  } catch (error) {
    console.error('Error loading cart from localStorage:', error)
    return []
  }
}

// Save cart to localStorage
const saveCartToStorage = (items) => {
  try {
    localStorage.setItem('cart', JSON.stringify(items))
  } catch (error) {
    console.error('Error saving cart to localStorage:', error)
  }
}

// Global cart state
const cartState = reactive({
  items: loadCartFromStorage(),
  isOpen: false
})

// Cart actions
export const cartStore = {
  // Add item to cart
  addItem(product, quantity = 1) {
    const existingItem = cartState.items.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cartState.items.push({
        id: product.id,
        title: product.title,
        price: product.price,
        price_with_discount: product.price_with_discount,
        images: product.images,
        quantity: quantity
      })
    }
    
    // Save to localStorage
    saveCartToStorage(cartState.items)
    
    // Show cart dropdown briefly
    this.openCart()
    setTimeout(() => {
      this.closeCart()
    }, 2000)
  },

  // Remove item from cart
  removeItem(productId) {
    const index = cartState.items.findIndex(item => item.id === productId)
    if (index > -1) {
      cartState.items.splice(index, 1)
      saveCartToStorage(cartState.items)
    }
  },

  // Update item quantity
  updateQuantity(productId, quantity) {
    const item = cartState.items.find(item => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId)
      } else {
        item.quantity = quantity
        saveCartToStorage(cartState.items)
      }
    }
  },

  // Clear cart
  clearCart() {
    cartState.items = []
    saveCartToStorage(cartState.items)
  },

  // Open cart dropdown
  openCart() {
    cartState.isOpen = true
  },

  // Close cart dropdown
  closeCart() {
    cartState.isOpen = false
  },

  // Toggle cart dropdown
  toggleCart() {
    cartState.isOpen = !cartState.isOpen
  },

  // Get total items count
  getTotalItems() {
    return cartState.items.reduce((total, item) => total + item.quantity, 0)
  },

  // Get total price
  getTotalPrice() {
    return cartState.items.reduce((total, item) => {
      return total + (item.price_with_discount * item.quantity)
    }, 0)
  },

  // Get cart state
  getState() {
    return cartState
  }
}

export default cartStore
