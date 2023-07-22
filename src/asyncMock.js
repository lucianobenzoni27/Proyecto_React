const products = [
    {
        id: "1",
        name: "Collar medallon acrilico",
        price: 1000,
        img: "https://ar.isadoraonline.com/media/catalog/product/4/9/49375203_1_1_20220225120047.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=608&width=475&canvas=475:608",
        stock: 5,
        category: "collares",
        description: "Collar medallon acrilico"

    },
    {
        id: "2",
        name: "Collar layer",
        price: 1000,
        img: "https://ar.isadoraonline.com/media/catalog/product/4/8/48044401_1_1_20220908181514.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=608&width=475&canvas=475:608",
        stock: 5,
        category: "collares",
        description: "Collar layer"
    },
    {
        id: "3",
        name: "Collar heart",
        price: 1000,
        img: "https://ar.isadoraonline.com/media/catalog/product/4/1/41144703_1_1_20220128121317.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=608&width=475&canvas=475:608",
        stock: 5,
        category: "collares",
        description: "Collar heart"
    },
    {
        id: "4",
        name: "Argollas grandes",
        price: 1000,
        img: "https://ar.isadoraonline.com/media/catalog/product/4/8/48013501_0_1_20220912180637.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=608&width=475&canvas=475:608",
        stock: 5,
        category: "aros",
        description: "Argollas grandes"
    },
    {
        id: "5",
        name: "Aros cubic",
        price: 1000,
        img: "https://ar.isadoraonline.com/media/catalog/product/4/1/41031801_1_1_20210728183721.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=608&width=475&canvas=475:608",
        stock: 5,
        category: "aros",
        description: "Aros cubic"
    },
    {
        id: "6",
        name: "Aros pearl",
        price: 1000,
        img: "https://ar.isadoraonline.com/media/catalog/product/4/1/41203501_1_1_20210727182327.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=608&width=475&canvas=475:608",
        stock: 5,
        category: "aros",
        description: "Aros pearl"
    },
    {
        id: "7",
        name: "Anillo strass",
        price: 1000,
        img: "https://ar.isadoraonline.com/media/catalog/product/4/9/49721602C_1_1_20210906180851.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=608&width=475&canvas=475:608",
        stock: 5,
        category: "anillos",
        description: "Anillo strass"
    },
    {
        id: "8",
        name: "Anillo ojitos",
        price: 1000,
        img: "https://ar.isadoraonline.com/media/catalog/product/4/9/49845901C_1_1_20220321180649.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=608&width=475&canvas=475:608",
        stock: 5,
        category: "anillos",
        description: "Anillo ojitos"
    },
    {
        id: "9",
        name: "Anillo serpiente",
        price: 1000,
        img: "https://ar.isadoraonline.com/media/catalog/product/4/8/48131002C_1_1_20230120183033.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=608&width=475&canvas=475:608",
        stock: 5,
        category: "anillos",
        description: "Anillo serpiente"
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productsCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productsCategory))
        }, 500)
    })
}



