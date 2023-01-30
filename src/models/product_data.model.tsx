
export interface product_data {

    id: number;
    attributes: {
        title: string;
        availability: string;
        price: number;
        brand: string;
        model: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        subcategory: string;
        images: {
            id: number;
            attributes: {
                name: string;
                alternativeText: string | null;
                caption: string | null;
                width: number;
                height: number;
                formats: {
                    thumbnail: formats | undefined;
                    small: formats | undefined;
                    medium: formats | undefined;
                    large: formats | undefined;
                }
                hash: string;
                ext: string;
                mime: string;
                size: number;
                url: string;
                previewUrl: string | null;
                provider: string;
                provider_metadata: string | null;
                createdAt: string;
                updatedAt: string;
            }
        }[]
    }
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        }
    }


}

type formats = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
}