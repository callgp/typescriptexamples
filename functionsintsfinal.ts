function calculate_discount(price:number, discount:number=0.5){
      var discount=price*discount;
      console.log('act price ',price);
      console.log('discount price ',price-discount);


}

calculate_discount(1000);
calculate_discount(2000,0.4);