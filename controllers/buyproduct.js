const buyservice = require('../services/buyProductService.js');

const buyproduct = async(req , res) => {
    try{
        const productId = req.params.id;
        buyservice(productId);
    }

    catch(error){
        console.error("error in buyproduct:" ,  error);
        res.status(500).json({message: "internal server error"});
    }
}

module.exports = buyproduct;