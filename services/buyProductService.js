const buyProductService = async (productId, userId) => {
  try{
    console.log(`Buying product with ID: ${productId}, for user ID: ${userId}`);
  }
  catch(error){
    console.error("Error in buyProductService:", error);
  }
}

module.exports = buyProductService;