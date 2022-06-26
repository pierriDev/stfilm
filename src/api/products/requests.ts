import fetch, { combineRequestData } from '../fetch'

export const getHighlights = () => fetch('/products/highlights').then((result) => combineRequestData(result))


export const getProducts = () => fetch('/products').then((result) => combineRequestData(result))