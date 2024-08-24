import axios from "axios";
// import setIsLoading
export const getCoinPrices = (id,days,priceType) =>{
   const prices= axios
    .get( `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then ((response)=>    {
    console.log("Prices>>>>",response.data);
    return response.data[priceType];
    // setIsLoading(false);
    })
        .catch((error) => {
        console.log("ERROR>>>>>",error);
      
        }) ; 
        return prices;
};