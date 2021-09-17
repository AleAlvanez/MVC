const productModel = require('../model/modelProduct')

module.exports.listProducts = async () =>{
    let response = new productModel();
    let result = await response.list()
    return result;
}

module.exports.findProduct = async (productId) =>{
    let response= new productModel()
    let result = await response.find(productId)
    return result;
}
