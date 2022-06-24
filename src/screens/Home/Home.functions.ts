import { useHighlights, useProducts } from "../../api/products/hooks";

export const useHomeScreen = () => {
    
    const {data: highLightData, isLoading: isLoadingHighlights } = useHighlights();
    const {data: productData, isLoading: isLoadingProduct} = useProducts();

    console.log(productData)
    
    return {
        highLightData,
        isLoadingHighlights,
        productData,
        isLoadingProduct,
    }
}