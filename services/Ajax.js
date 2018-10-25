const apiHost = 'https://bakesaleforgood.com';
export default {
  async fetchInitialDeals(){
    try {
      const response = await fetch(apiHost + '/api/deals');
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  
  },
  async fetchMerchantProfile(merchantId){
    try {
      const response = await fetch(apiHost + '/api/deals/' + merchantId);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  
  }

};