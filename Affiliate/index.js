window.onsubmit(){
  addFriendAffiliateCount();
}
function addFriendAffiliateCount(){
  var url = new URL(document.URL);
  var search_params = url.searchParams;
  console.log(searchParams);
}
