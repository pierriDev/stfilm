import { useQuery } from "react-query";
import type { UseCategoryType } from "./types";

import {
    getCategories,
} from './requests';

export const useCategories = () => useQuery<UseCategoryType, Error>('getCategories', getCategories);