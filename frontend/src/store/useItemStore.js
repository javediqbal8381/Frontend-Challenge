import { create } from 'zustand';

const baseUrl = 'http://localhost:3000';

const useItemsStore = create((set) => ({
  items: [],
  fetchItems: async () => {
    const res = await fetch(`${baseUrl}/items`)
    const data = await res.json()
    set({ items: data })
  },
  addItem: async (newItem) => {
    const res = await fetch(`${baseUrl}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
    const created = await res.json()
    set((state) => ({ items: [...state.items, created] }))
  }
}))

export default useItemsStore
