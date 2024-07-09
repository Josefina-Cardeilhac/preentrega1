class ProductManager {

    constructor() {
        this.products =[]
    }

    addProduct(title,description,price,img,code,stock){
        if (!title || !description || !price || !img || !code || !stock )
            {
                console.log("todos los campos son obligatorios")
                
            }
    }

}
