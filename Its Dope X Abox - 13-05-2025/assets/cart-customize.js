const handlePriceSammaryOpen = ()=>{
   // event.target.classList.toggle("open")
   document.querySelector(".price-summary-wrapper").classList.toggle("open");
   document.querySelector(".calculation-of-saving").classList.toggle("open");
}

const handleInputChange = (e)=> {
  const aplBtn =document.getElementById("apply_with_btn")
  aplBtn.disabled = e.target.value.trim() === "";
}

const discountModalopen = async ()=>{
   document.querySelector(".discount-modal").classList.add("open-offer");
   
       
             
}
const discountModalclose = ()=>{
   document.querySelector(".discount-modal").classList.remove("open-offer");
}

const applyDiscount = (code)=>{
   $.ajax({
      url:`https://www.itsdope.shop/discount/${code}`,
      success: function(data) {
        console.log(data)
        alert("Your discount has been applied!");
      }
    }); 
     // $('#MinimogCartDrawer').load('#MinimogCartDrawer');
}