import { useHighlights, useProducts } from "../../api/products/hooks";
import { useCategories } from "../../api/categories/hooks"
import { useEffect, useState } from "react";
import type { UseProductType } from "../../api/products/types";
import { ProductType } from "./Home.types";

export const useHomeScreen = () => {
    
    const {data: highLightData, isLoading: isLoadingHighlights } = useHighlights();
    const {data: productData, isLoading: isLoadingProduct} = useProducts();
    const {data: categoriesData, isLoading: isLoadingCategories} = useCategories();

    const [fullProducts, setFullProducts] = useState<UseProductType | any>([{}]);
    const [products, setProducts] = useState<UseProductType | any>([{}]);
    const [productSearch, searchProduct] = useState<string>("");

    
    useEffect(()=> {
        setProducts(productData);
        setFullProducts(productData);
    },[productData])

    const onInputChange = (event: any) => {
        searchProduct(event.target.value)
    }


    const handleSearchPress = () => {
        let searchedResults: any = []
        if(productSearch !== ""){
            fullProducts?.filter((product : ProductType) => product.title.includes(productSearch)).map((filtered: ProductType) => {
                searchedResults.push(filtered)
            })
            if(searchedResults.length > 0) {
                setProducts(searchedResults);
            }else{
                setProducts([]);
            }
        }else{
            setProducts(fullProducts);

        }
    }


    const handleCategoryPress = (categoryName: string) => {
        let filteredResults: any = [];
        fullProducts?.filter((product : ProductType) => product.category.title === categoryName).map((filtered: ProductType) => {
            filteredResults.push(filtered)
        })
        if(filteredResults.length > 0) {
            setProducts(filteredResults);
        }else{
            setProducts([]);
        }

    }

    return {
        highLightData,
        isLoadingHighlights,
        products,
        isLoadingProduct,
        categoriesData,
        isLoadingCategories,
        handleCategoryPress,
        onInputChange,
        handleSearchPress,
        productSearch
    }
}