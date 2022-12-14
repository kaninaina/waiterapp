
let food=[
    {timing:"lunch",id:1,foodName:"Veg Soup",category:"soup",price:"90",type:"soup",subCategory:"veg",image:"images/food/vegsoup.jpg"},
    {timing:"lunch",id:2,foodName:"Veg Sweet Corn",category:"soup",price:"90",type:"soup",subCategory:"veg",image:"images/food/vegsweetcorn.jpg"},
    {timing:"lunch",id:3,foodName:"Plain Sweet Corn",category:"soup",price:"100",type:"soup",subCategory:"veg",image:"images/food/sweetcornsoup.jpg"},
    {timing:"lunch",id:4,foodName:"Veg Hot & Spicy",category:"soup",price:"90",type:"soup",subCategory:"veg",image:"images/food/vegspicysoup.jpg"},
    {timing:"lunch",id:5,foodName:"Veg Manchaw",category:"soup",price:"100",type:"soup",subCategory:"veg",image:"images/food/vegmachawsoup.jpg"},
    {timing:"lunch",id:6,foodName:"Veg talumein",category:"soup",price:"100",type:"soup",subCategory:"veg",image:"images/food/vegtaluminsoup.jpg"},
    {timing:"lunch",id:7,foodName:"Veg Noodles Soup",category:"soup",price:"100",type:"soup",subCategory:"veg",image:"images/food/noodlessoup.jpg"},
    {timing:"lunch",id:8,foodName:"Veg Clear",category:"soup",price:"100",type:"soup",subCategory:"veg",image:"images/food/vegclearsoup.jpg"},
    {timing:"lunch",id:9,foodName:"Tomato Soup",category:"soup",price:"110",type:"soup",subCategory:"veg",image:"images/food/tomatosoup.jpg"},
    {timing:"lunch",id:10,foodName:"Veg Chilly",category:"gravy",price:"190",type:"soup",subCategory:"veg"},
    {timing:"lunch",id:11,foodName:"Veg Manchurian",category:"gravy",price:"190",type:"soup",subCategory:"veg"},
    {timing:"lunch",id:12,foodName:"Veg Sweat Garlic Sauce",category:"gravy",price:"190",type:"soup",subCategory:"veg"},
    {timing:"lunch",id:13,foodName:"Veg Chaw Chaw",category:"gravy",price:"210",type:"soup",subCategory:"veg"},
    {timing:"lunch",id:14,foodName:"Veg Sweat & Sour",category:"gravy",price:"190",type:"soup",subCategory:"veg"},
    {timing:"lunch",id:15,foodName:"Veg Hong Kong",category:"gravy",price:"190",type:"soup",subCategory:"veg"},
    {timing:"lunch",id:16,foodName:"Veg Ginger",category:"gravy",price:"190",type:"soup",subCategory:"veg"},
    {timing:"lunch",id:17,foodName:"Veg Hot Garlic Sauce",category:"gravy",price:"190",type:"soup",subCategory:"veg"},
    {timing:"lunch",id:18,foodName:"Veg Crispy Sauce",category:"gravy",price:"210",type:"soup",subCategory:"veg"},
    {timing:"lunch",id:19,foodName:"Veg Sezwan sauce",category:"gravy",price:"210",type:"soup",subCategory:"veg"},
]

let navList=document.querySelector(".navigation");

navList.addEventListener("click",(e)=>{
    let parent=[...e.target.parentElement.parentElement.children];
let child=parent.map((el)=>{
    return el.children[0]
});
child.forEach((e)=>{
    e.classList.remove("list-active");
});
    e.target.classList.add("list-active");
    page(e);
});

function page(e){
let listName=e.target.innerHTML;

let pageParent=document.querySelector(".sec-left-con");
let pageChildren=[...pageParent.children];
pageChildren.forEach((element)=>{
    element.style.display="none"
});
let active=pageChildren.find((el)=>{
    let name=el.getAttribute("name");
    return name==listName;
});
active.style.display="block";
if(listName=="LUNCH"){
    lunch("lunch");
}
if(listName=="DINNER"){
    dinner("dinner");
}
// if(listName=="SUMMARY"){
//     summar()
// }
};
function summar(){
  let leftParent=document.querySelector(".sec-left-con");
  let leftChildren=[...leftParent.children];
  leftChildren.forEach((el)=>{
    el.style.display="none"
  });
let dinnerSec=document.querySelector(".dinner-sec");
dinnerSec.style.display="block";
}
function lunch(foodType){
    let lunchParent=document.querySelector(".lunch-flexbox");
    let children=[...lunchParent.children];
    children.forEach((child)=>{
        child.remove();
    });
    let foodTypeList=document.querySelector(".lunch-food-list >ul");
    let foodTypeChildren=[...foodTypeList.children];
    let activeFoodType=foodTypeChildren.find((el)=>{
        let a=el.classList.contains("active");
        return a;
    });
    let activeFood=activeFoodType.innerHTML.toLowerCase();
    console.log(activeFood);
    let shortList;
if(foodType=="lunch" || foodType=="dinner"){
    let shortLis=food.filter((el)=>{return el.timing==foodType});
    shortList=shortLis;
}
else{
    let shortLis=food.filter((el)=>{return el.category==foodType});
    shortList=shortLis;
}

shortList.forEach((element)=>{
    let lunchCard1=document.createElement("div");
    lunchCard1.className="lunch-card-1";
    lunchCard1.setAttribute("foodId",element.id);
    lunchCard1.addEventListener("dblclick",addToSummary);
    let lunchCardImage=document.createElement("div");
    lunchCardImage.className="lunch-card-img";
    let lunchCardImg=document.createElement("img");
    lunchCardImg.src=element.image;
    lunchCardImage.append(lunchCardImg);
    lunchCard1.append(lunchCardImage);
    let lunchCardCon=document.createElement("div");
    lunchCardCon.className="lunch-card-con";
    let foodName=document.createElement("h3");
    foodName.innerHTML=element.foodName;
    lunchCardCon.append(foodName);
    let foodRate=document.createElement("div");
    foodRate.className="lunch-card-rate";
let price=document.createElement("p");
price.innerHTML=element.price;
foodRate.append(price);
lunchCardCon.append(foodRate);
lunchCard1.append(lunchCardCon);
lunchParent.append(lunchCard1)

})


}
function dinner(){

}
function addToSummary(e){
    let element=e.target.closest(".lunch-card-1");
    let summaryParent=document.querySelector(".summary-list-update-parent");
    let children=[...summaryParent.children];
    let length=children.length;
    console.log(children);
    if(length==0){
        newSummaryUbdate(length,element);
        return "";
    }
let find=children.findIndex((list)=>{
    let attribute=list.getAttribute("foodId");
    let ssttribute=element.getAttribute("foodId");
    return attribute==ssttribute;
});
console.log(find);
if(find==-1){
    newSummaryUbdate(length,element);
}
if(find!=-1){
   alert("this food already in your cart")
}


}
function newSummaryUbdate(length,element){

    let attribute=element.getAttribute("foodId")
    let cardFoodName=element.querySelector(".lunch-card-con h3").innerHTML;
    let cardFoodPrice=element.querySelector(".lunch-card-rate p:nth-child(1)").innerHTML;
    let summaryParent=document.querySelector(".summary-list-update-parent");
    let list=document.createElement("li");
    list.setAttribute("foodId",attribute);
    let sNo=document.createElement("p");
    sNo.innerHTML=length+1;
    list.append(sNo);
    let foodName=document.createElement("P");
    foodName.innerHTML=cardFoodName;
    list.append(foodName);
    let quantity=document.createElement("div");
    let quantityFp=document.createElement("p");
    quantityFp.innerHTML="-";
    quantityFp.addEventListener("click",minusCount)
    quantity.append(quantityFp);
    let quantitySp=document.createElement("p");
    quantitySp.innerHTML="1";
    quantity.append(quantitySp);
    let quantityTp=document.createElement("p");
    quantityTp.innerHTML="+";
    quantityTp.addEventListener("click",plusCount)
    quantity.append(quantityTp);
    list.append(quantity);
    let pricePara=document.createElement("p");
    pricePara.innerHTML=cardFoodPrice;
    list.append(pricePara);
    let totalPrice=document.createElement("P");
    let fr=Number(quantitySp.innerHTML);
    let sp=Number(pricePara.innerHTML);
    let result=fr*sp;
    totalPrice.innerHTML=result;
    list.append(totalPrice);
    summaryParent.append(list);
    totalBill()
}
function minusCount(e){
    let element=e.target.nextSibling;
let count=Number(element.innerHTML);
count--;
if(count<0){
    count=0;
}
element.innerHTML=count;
updatePrice(e);
}
function plusCount(e){
    let element=e.target.previousSibling;
    let count=Number(element.innerHTML);
count++;
element.innerHTML=count;
updatePrice(e)
}
function updatePrice(e){
    let list=e.target.closest("li");
    let div=e.target.closest("div");
    let c=div.querySelector("p:nth-child(2)").innerHTML;
    let count=Number(c);
    console.log(count);
    let p=list.querySelector("p:nth-child(4)").innerHTML;
    let total=list.querySelector("p:nth-child(5)");
    let price=Number(p);
    console.log(price);
    total.innerHTML=count*price;
    totalBill();
}
function totalBill(){
    let list=document.querySelector(".summary-list-update-parent");
    let children=[...list.children];
    let price=children.map((el)=>{
        let p=el.querySelector("p:nth-child(5)").innerHTML;
        let price=Number(p);
        return price
    }).reduce((a,b)=>{
        return a+b
    });
    let price1=document.querySelector("#price");
    price1.innerHTML=" "+price;
    let price2=document.querySelector("#taxPrice");
    let taxPrice=Math.floor(price*0.12);
    price2.innerHTML=" "+taxPrice;
    let price3=document.querySelector("#totalPrice");
    price4=price+taxPrice;
    price3.innerHTML=" "+price4
}
let foodTypeNav=document.querySelector(".lunch-food-list ul");
foodTypeNav.addEventListener("click",foodNav);
function foodNav(e){
    let parent=e.target.parentElement;
    let children=[...parent.children];
    children.forEach((el)=>{
        el.classList.remove("active");
    });
    e.target.classList.add("active");
    foodAccelerate(e);
}
function foodAccelerate(e){
    let 
}
let takeBill=document.querySelector(".take-bill");
takeBill.addEventListener("click",billFinall);
let cancelBill=document.querySelector(".bill-div-close");
cancelBill.addEventListener("click",billClose);
function billClose(){
    let block=document.querySelector(".bill-div");
block.style.display="none";
let paymentType=document.querySelectorAll(".payment-card1");
paymentType.forEach((ele)=>{
    ele.classList.remove("active")
})

}

function billFinall(){
    let block=document.querySelector(".bill-div");
block.style.display="block";
let summary=document.querySelector(".summary-list-update-parent");
let summaryChildren=[...summary.children];

let billCount=document.querySelector(".bill-counts");
let child=[...billCount.children];
child.forEach((e)=>{
    e.remove();
})
summaryChildren.forEach((el)=>{
let tableRow=document.createElement("tr");
let tableData1=document.createElement("td");
tableData1.innerHTML=el.children[0].innerHTML;
tableRow.append(tableData1);
let tableData2=document.createElement("td");
tableData2.innerHTML=el.children[1].innerHTML;
tableRow.append(tableData2);
let tableData3=document.createElement("td");
tableData3.innerHTML=el.children[2].children[1].innerHTML;
tableRow.append(tableData3);
let tableData4=document.createElement("td");
tableData4.innerHTML=el.children[3].innerHTML;
tableRow.append(tableData4);
let tableData5=document.createElement("td");
tableData5.innerHTML=el.children[4].innerHTML;
tableRow.append(tableData5);
billCount.append(tableRow);

ubdateBillPrice();
});
}

function ubdateBillPrice(){
    let parent=document.querySelector(".bill-counts");
    let children=[...parent.children];
    let childrenPrice=children.map((el)=>{
        let a=el.querySelector("td:nth-child(5)");
        let b=Number(a.innerHTML);
        return b;
    });
    let price=childrenPrice.reduce((a,b)=>{
        return a+b
    })
    let grandparent=document.querySelector(".billtable");
    let subTotal=grandparent.querySelector("tfoot tr:nth-child(1) td:nth-child(2)");
    subTotal.innerHTML=price;
    let totalPrice=(price*0.02)+26+50+price;
    let Total=grandparent.querySelector("tfoot tr:nth-child(5) td:nth-child(2)");
    Total.innerHTML=totalPrice;
}

let paymentType=document.querySelectorAll(".payment-card1");
paymentType.forEach((el)=>{
    el.addEventListener("click",paymentMethod);
})

function paymentMethod(e){
    let paymentError=document.querySelector(".payment-method-error");
    let parent =e.target.parentElement;
    let check=parent.classList.contains("active");
   let grandParent=parent.parentElement;
   let children=[...grandParent.children];
   let checkError=children.find((el)=>{
    let a=el.classList.contains("active");
    return a
   });
   if(checkError!=undefined){
paymentError.classList.remove("active")
   }
   children.forEach((el)=>{
    el.classList.remove("active");
   });
  parent.classList.add("active");

  if(check){
    parent.classList.remove("active");
  }
}

let makePayment=document.querySelector(".make-payment");
makePayment.addEventListener("click",payNow);
function payNow(e){
    let customerName=document.getElementById("customerName");
    let paymentContainer=document.querySelector(".payment-container");
    let paymentChildren=[...paymentContainer.children];
    let paymentError=document.querySelector(".payment-method-error");
    let active=paymentChildren.find((el)=>{
        let a=el.classList.contains("active");
       return a
       //above return option return element defauldly for examble if i instead of return a; i type if(a==true){return el} - this also work incase i write like this if(a==true){return "kani"}-this type return ele not kani bu default this method return element
    });
    if(customerName.value==""){
        e.target.classList.add("shake");
        setTimeout(remove,500);
        customerName.style.borderColor="red";
        customerName.classList.add("error");
        return ""
    }
    else{
        customerName.style.borderColor="black";
        customerName.classList.remove("error");
    }
    if(active==undefined){
     paymentError.classList.add("active");
     return ""
    }
else {
    paymentError.classList.remove("active");
    let paymentActive=active.getAttribute("type");
    let confirmation=confirm("make Sure take payment");
    if(confirmation){
        let div=e.target.closest(".bill-div");
        div.style.display="none";
        paymentOption(paymentActive);
    }
    else{
        return ""
    }
}
}
function remove(){
    let makePayment=document.querySelector(".make-payment");
    makePayment.classList.remove("shake")
}

function paymentOption(type){
    console.log(type);
    switch(type){
case "cash":
    alert("SuccessFuly Bill taken");
    break;
case "upi":
    getpayment();
    break;
    }
}
let paymentMethodParent=document.querySelector(".payment-method-selectio-sec-1 > ul");
let paymentMethodChildren=[...paymentMethodParent.children];
paymentMethodChildren.forEach((el)=>{
    el.addEventListener("click",paymentList);
});
function paymentList(e){
    paymentMethodChildren.forEach((el)=>{
        el.classList.remove("active");
    });
    e.target.classList.add("active");
    let attribute=e.target.getAttribute("name");
    paymentCard(attribute);
}
function paymentCard(attribute){
let cardPayment=document.querySelector(".payment-method-selectio-sec-2-margin");
let cardPaymentChildren=[...cardPayment.children];
cardPaymentChildren.forEach((el)=>{
    el.style.display="none";
});
let activeElement=cardPaymentChildren.find((e)=>{
    let a=e.getAttribute("name");
    return a==attribute;
});
console.log(activeElement);
activeElement.style.display="block"
}
let upiFlex=document.querySelector(".upi-flex");
let upiFlexChildren=[...upiFlex.children];
upiFlexChildren.forEach((el)=>{
    el.addEventListener("click",upiType);
})
function upiType(e){
    upiFlexChildren.forEach((el)=>{
        el.classList.remove("active");
    })
    e.target.parentElement.classList.add("active");
    Select(e);
}
function Select(e){
    upiFlex.style.display="none";
    let upiPayment=document.querySelector(".upi-payment");
    upiPayment.style.display="block"
}
let upiPayNow=document.querySelector("#upipayNow");
let makeVerify=document.querySelector("#makeVerify");
let mobileNumber=document.querySelector("#makeVerify");
makeVerify.addEventListener("click",()=>{
let num=mobileNumber.value;
if(num==""){
    makeVerify.innerHTML="Enter mobile Number"
}
else {
    makeVerify.innerHTML="Mobile Number Verified"
}
})
upiPayNow.addEventListener("click",upiFinish);
function upiFinish(e){
if(makeVerify.innerHTML!="Mobile Number Verified"){
    alert("verify Your Mobile Number");
    return ""
}
else{
    alert("Payment Success");
    let div=e.target.closest(".payment-page");
div.style.display="none";
}

}
function getpayment(){
    let paymentPage=document.querySelector(".payment-page");
    paymentPage.style.display="block";
}