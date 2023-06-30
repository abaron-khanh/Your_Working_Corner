export interface Category {
    id: number;
    category: string;
    subcategory: string;
}

export interface SuggestedProduct {
    banerImage: string;
    category: Category;
}