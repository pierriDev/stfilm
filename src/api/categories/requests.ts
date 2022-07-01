import fetch, { combineRequestData } from '../fetch'

export const getCategories = () => fetch('/categories').then((result) => combineRequestData(result))