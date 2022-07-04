import { useQuery, useMutation } from "react-query";
import { setContact } from "./requests";

export const useSetContact = () => useMutation(setContact);
