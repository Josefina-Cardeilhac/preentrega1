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
                id: ++ProductManager.ultId,
                title, 
                description,
                price,
                img,
                code,
                stock
            }

            this.products.push(nuevoProducto);
           
    }
    getProducts(){
        return this.products
    }

    getProductsById(id){
        const producto = this.products.find(item => item.id === id);
        if (!producto) {
            console.error("not found");
        }
        else {
            console.log(producto);
        }
    }
}

const manager = new ProductManager();

console.log(manager.getProducts())

manager.addProduct("Producto1", "producto prueba", 200, "sin img", "code123", 25);
manager.addProduct("Producto2", "producto prueba2", 202, "sin img", "code122", 28);

console.log(manager.getProducts());