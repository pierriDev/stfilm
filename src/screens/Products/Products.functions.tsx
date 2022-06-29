import { useProducts } from "../../api/products/hooks";
export const useProductsScreen = () => {
    const {data: productData, isLoading: isLoadingProduct} = useProducts();

    return {
        productData,
        isLoadingProduct,
    }
}