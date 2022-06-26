import { useQuery } from "react-query";
import type { UseHighlightsType, UseProductType } from "./types";
import {
    getHighlights,
    getProducts,
} from './requests';

export const useHighlights = () => useQuery<UseHighlightsType, Error>('getHighlights', getHighlights);

export const useProducts = () => useQuery<UseProductType, Error>('getProducts', getProducts);