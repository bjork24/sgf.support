import { writable, derived } from 'svelte/store'
import restaurantList from './data.yml'

export const activeFilters = writable([])

export const restaurants = derived(activeFilters, $activeFilters => {
  if ($activeFilters.length > 0) {
    let filteredRestaurants = restaurantList.filter(r => {
      let hasProperties = true
      $activeFilters.forEach(f => {
        if (!r[f]) hasProperties = false
      })
      return hasProperties
    })
    return Array.from(new Set(filteredRestaurants))
  } else {
    return restaurantList
  }
})
