import { ProductsState } from "./productsState";

interface FavoriteState {
    favorites: ProductsState[];
    pending: boolean;
    error: any
}

export type { FavoriteState }