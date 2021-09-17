const sequelize = require('../conexion')

module.exports = class Products{
    constructor(product){
        this.product=product
    }
    async list (){
        let result =  await sequelize.query("SELECT * FROM products1");
        return result
    }

    async find(productId){
        let result = await sequelize.query("SELECT * FROM products1 WHERE id = "+ productId)
        return result;
    }
}