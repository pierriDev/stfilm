import fetch, { combineRequestData } from '../fetch'

export const getExample = () => fetch('/url/').then( (result) => combineRequestData(result))

export const setExample = (data: any) => fetch('/url/', {
    method: 'POST',
    body: JSON.stringify(data),
});
