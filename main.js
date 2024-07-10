class ProductManager {
    static ultId = 0;
    
    constructor() {
        this.products =[]
    }

    addProduct(title,description,price,img,code,stock){
        if (!title || !description || !price || !img || !code || !stock ){
                console.log("todos los campos son obligatorios");
                return;
            }
            if (this.products.some(item=> item.code === code)) {
                console.log("El codigo debe ser unico");
                return;
            }
            const nuevoProducto = {
                id: ProductManager.ultId,
                title, 
                description,
                price,
                img,
                code,
                stock
            }

            this.products.push(nuevoProducto)
            getProducts(){
                return this.products
            }
    }

}
