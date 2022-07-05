import fetch, { combineRequestData } from '../fetch'
import { ContactType } from './types';


export const setContact = (data: ContactType) => fetch('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
}).then((result) => combineRequestData(result));