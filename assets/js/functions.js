
  $(document).ready(function(){
    $(".MblCategory").click(); 
  });


  $(".notification").click(function(){
  //$(".column-rs").hide();
      if ($('.column-rs').is(':hidden')) {
        $('.column-rs').show();
        $('.dltBtnStyle').show();
        $('.column-rs').css('z-index', 1);
    } else {
        $('.column-rs').hide();
        $('.dltBtnStyle').hide();
    }
  });


  $(".bi-arrow-left").click(function(){
  $(".column-rs").hide();
  $('.dltBtnStyle').hide();

});

 

$(".tableCircle").click(function(){
    var TableNumber = $(this).attr('value');
    tableModal.style.display = "none";
    $("#tNumber").text(TableNumber);
    tableSelected = true;
    document.getElementById("myModal8").style.display="none";
    $(".tableCircle").removeClass("active");
    $(this).addClass("active"); 
});
VideoPlayedOnce = false;
var cartBadge = document.getElementById("badgeId");
var MblCategoryValue = 1;
var itemCategorySelected ;
$(".MblCategory").click(function(){
     MblCategoryValue = $(this).attr('value');
    // alert(MblCategoryValue);
    TriggerChange();
});

var OpenShift = true;
var SplitOderCLicked = false;
var ItemSelectedToSend = false;
var cart = [];
var selected = [];
window.addEventListener('load', function()
{


  TriggerChange();
  document.getElementById('categoryList').addEventListener('change', function()

  {
    TriggerChange();
  });
  ItemSelectedToSend = false;
  var tableData = document.getElementById("TransactionTable");
  if (tableData.value == null)
  {
    // console.log("NO DATA");
    document.getElementById("NoDataToShow").style.display = 'block';
  }
  else
  {
    // console.log("YES DATA");
    document.getElementById("NoDataToShow").style.display = 'none';
  }
})

function TriggerChange()
{
  
  var tabCategory = document.getElementById('categoryList').value;
  itemCategorySelected = (screen.width <= 480) ? MblCategoryValue:tabCategory;
  //let voteable = (age < 18) ? "Too young":"Old enough";
 
  html = '';
  for (var i = 0; i < item.length; i++)
  {
    if (item[i].itemCategory === itemCategorySelected)
    {
      html += "<div style='max-width:150px'>";
      html += "<div style='z-index:0' class='card info-card revenue-card'>";
      html += "<div style='z-index:0' class='card-body' >";
      html += "<p class='top-right'><span>MYR </span>" + item[i].price + "</p>";
      html += "<img style='z-index:1;cursor:pointer' src='" + item[i].imgSource + "' class='ItemsDiv card-img-top' data-item-id='" + item[i].id + "' data-price='" + item[i].price + "' data-name='" + item[i].name + "'>";
      html += "<h5 class='img-title'>" + item[i].name + "</h5>";
      html += "</div>";
      html += "</div>";
      html += "</div>"
    }
  }
  document.getElementById("div1").innerHTML = html;
  var elements = document.getElementsByClassName("ItemsDiv");
  
  //var badgeValue = 0;
  //console.log(elements);
  var Item1Clicked = function(e)
  {
    if (OpenShift === true)
    {
      if (tableSelected === true)
      {
        //badgeValue++;
        
        ItemSelectedToSend = true;
        document.getElementById("NoDataToShow").style.display = 'none';
        document.getElementById("CalculationDIV").style.visibility = "visible";
        var itemID = this.getAttribute("data-item-id");
        cart.push(itemID);
        sumVal = 0.00;
        var disAmount = 0.00;
        for (var k = 0; k < cart.length; k++)
        {
          cartBadge.innerHTML=cart.length;
          // var CartID = (cart.at(selected[i]));
          var CartItems = item.find(item => item.id === cart[k]);
          //console.log(CartItems); 
          sumVal += parseFloat(CartItems.price);
          var gstperc = ((sumVal.toFixed(2) / 100) * 6);
          SelectedTablehtml = '';
          SelectedTablehtml += "<li class='list-group-item'>";
          SelectedTablehtml += "<div style='display: flex;justify-content: space-between;align-items: center;'>";
          SelectedTablehtml += " <input onclick='CheckBoxCliked(this)' data-array-index=" + (cart.length - 1) + " selected-item-price=" + CartItems.price + "  selected-item-id=" + CartItems.id + " class='SplitItemElementsDiv form-check-input me-1' type='checkbox' value='' aria-label='...'>";
          SelectedTablehtml += "<img class='SplitImageStyle' src=" + CartItems.imgSource + ">";
          SelectedTablehtml += " <p max-width='20px'>1</p>";
          SelectedTablehtml += "<p class='short-name'>" + CartItems.name + "</p>";
          if( screen.width <= 480 ){
        
           }
          else{
           SelectedTablehtml += "<p id='price1' class='price1Style'>" + CartItems.price + "</p>";
          }
          
          SelectedTablehtml += "<p>" + CartItems.price + "</p>";
          SelectedTablehtml += "</div>";
          SelectedTablehtml += "</li>";
        }
        document.getElementById("selectedTable").innerHTML += SelectedTablehtml;
        var table = document.getElementById("TransactionTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = CartItems.name;
        cell2.innerHTML = "1";
        cell3.innerHTML = CartItems.price;
        // for (var i = 1; i < table.rows.length; i++)
        // {
        //   sumVal = sumVal + parseFloat(table.rows[i].cells[2].innerHTML);
        // }
        document.getElementById("subtotalAmount").innerHTML = sumVal.toFixed(2);
        document.getElementById("gstAmount").innerHTML = gstperc.toFixed(2);
        document.getElementById("grandTotalAmount").innerHTML = (sumVal + gstperc + disAmount).toFixed(2);
      }
      else
      {
        //console.log("PLEASE MAKE IT false");
        window.alert("Please Select a Table and Click New Order");
        document.getElementById("myModal8").style.display="block";
        //location.reload();
      }
    }
    else
    {
      alert("Sorry! We are closed. Please open shift from the menu");
    }
  }
  for (var i = 0; i < elements.length; i++)
  {
    elements[i].addEventListener('click', Item1Clicked, false);
  }
}
tableSelected = false;
var tableHtml = '';
var tableNo = [

  {
    imgSource: "assets/img/Tables-01.png"
  },
  {
    imgSource: "assets/img/Tables-02.png"
  },
  {
    imgSource: "assets/img/Tables-03.png"
  },
  {
    imgSource: "assets/img/Tables-04.png"
  },
  {
    imgSource: "assets/img/Tables-05.png"
  },

]
for (var j = 0; j < tableNo.length; j++)
{
  // console.log(tableNo[j]);
  tableHtml += "<li class='nav-item'>";
  tableHtml += "<a class='.nav-link-table dropdown' href='index.html' data-bs-toggle='dropdown'>";
  tableHtml += "<img class='TabItem image-highlight' style='width: 50px;' src=" + tableNo[j].imgSource + ">";
  tableHtml += "</a>";
  tableHtml += "<ul class='dropdown-menu'>";
  tableHtml += "<li><span id='CreateTableClicked' style='cursor: pointer' class='CreateTableClass dropdown-item'>New Order</span></li>";
  tableHtml += "<li><a class='dropdown-item' href='#'>Merge Table</a></li>";
  tableHtml += "</ul>";
  tableHtml += "</li>";
}
document.getElementById("TableItem").innerHTML = tableHtml;
// end of table item
// Starting of food item
var html = '';
var item = [

  {
    id: "624e57127de89",
    name: "Mandy Chicken",
    price: "8.50",
    itemCategory: "1",
    imgSource: "assets/img/md1.png"
  },
  {
    id: "624e594d0d855",
    name: "Nasi Goreng Ayam",
    price: "7.00",
    itemCategory: "1",
    imgSource: "assets/img/md2.png"
  },
  {
    id: "624e5956905a5",
    name: "Salmon Fillet",
    price: "9.50",
    itemCategory: "1",
    imgSource: "assets/img/md3.png"
  },
  {
    id: "624e595e98e4e",
    name: "Mandy Lamb",
    price: "9.50",
    itemCategory: "1",
    imgSource: "assets/img/md4.png"
  },
  {
    id: "624e59666acb2",
    name: "Nasi Goreng Ayam Kunit",
    price: "6.00",
    itemCategory: "1",
    imgSource: "assets/img/md5.png"
  },


  {
    id: "624e59741fcf9",
    name: "Baked Beans",
    price: "4.00",
    itemCategory: "2",
    imgSource: "assets/img/sd1.png"
  },
  {
    id: "624e597df216e",
    name: "Baked Potato",
    price: "3.00",
    itemCategory: "2",
    imgSource: "assets/img/sd2.png"
  },
  {
    id: "624e598602db3",
    name: "Cauliflower Roast",
    price: "5.00",
    itemCategory: "2",
    imgSource: "assets/img/sd3.png"
  },
  {
    id: "624e598dea0a6",
    name: "Mixed Salad",
    price: "4.00",
    itemCategory: "2",
    imgSource: "assets/img/sd4.png"
  },
  {
    id: "624e59966e293",
    name: "Broccoli Mixed Veg",
    price: "6.00",
    itemCategory: "2",
    imgSource: "assets/img/sd5.png"
  },


  {
    id: "624e599ebb38e",
    name: "Coffee Regular",
    price: "5.00",
    itemCategory: "3",
    imgSource: "assets/img/hd1.png"
  },
  {
    id: "624e59a732f78",
    name: "Teh Tarik",
    price: "3.50",
    itemCategory: "3",
    imgSource: "assets/img/hd2.png"
  },
  {
    id: "624e59b236a4e",
    name: "Cappuccino",
    price: "6.00",
    itemCategory: "3",
    imgSource: "assets/img/hd3.png"
  },
  {
    id: "624e59bb1d97a",
    name: "Black Coffee",
    price: "5.00",
    itemCategory: "3",
    imgSource: "assets/img/hd4.png"
  },
  {
    id: "624e59c28e68f",
    name: "Black Tea",
    price: "4.00",
    itemCategory: "3",
    imgSource: "assets/img/hd5.png"
  },


  {
    id: "624e59cb1a002",
    name: "Pomegranate juice",
    price: "7.00",
    itemCategory: "4",
    imgSource: "assets/img/j1.png"
  },
  {
    id: "624e59d24b266",
    name: "Carrot juice",
    price: "6.00",
    itemCategory: "4",
    imgSource: "assets/img/j2.png"
  },
  {
    id: "624e59d9da853",
    name: "Orange juice",
    price: "6.00",
    itemCategory: "4",
    imgSource: "assets/img/j3.png"
  },
  {
    id: "624e59e14dc47",
    name: "Lemon juice",
    price: "5.00",
    itemCategory: "4",
    imgSource: "assets/img/j4.png"
  },
  {
    id: "624e59e8a77f3",
    name: "Watermelon juice",
    price: "5.00",
    itemCategory: "4",
    imgSource: "assets/img/j5.png"
  },


  {
    id: "624e59f0f00fe",
    name: "Falooda",
    price: "5.00",
    itemCategory: "5",
    imgSource: "assets/img/dsr1.png"
  },
  {
    id: "624e59f8308e5",
    name: "Pudding",
    price: "6.00",
    itemCategory: "5",
    imgSource: "assets/img/dsr2.png"
  },
  {
    id: "624e59ff1aefb",
    name: "Milk Pudding",
    price: "6.00",
    itemCategory: "5",
    imgSource: "assets/img/dsr3.png"
  },
  {
    id: "624e5a074d7d6",
    name: "Tiramisu",
    price: "6.50",
    itemCategory: "5",
    imgSource: "assets/img/dsr4.png"
  },
  {
    id: "624e5a0e7ac62",
    name: "Black Forest",
    price: "6.50",
    itemCategory: "5",
    imgSource: "assets/img/dsr5.png"
  },


]

function SaveButtonClicked()
{
  var disAmount = parseFloat(document.getElementById("discountInput").value);
  var SubTotal = parseFloat(document.getElementById("subtotalAmount").innerHTML);
  var gst = parseFloat(document.getElementById("gstAmount").innerHTML);
  var GrandTotalAfterDiscount = parseFloat(document.getElementById("grandTotalAmount").innerHTML);
  // console.log(typeof GrantTotalAfterDiscount);
  var totalDis = (SubTotal / 100) * disAmount;
  var NewGrandTotal = SubTotal + gst - totalDis;
  console.log(NewGrandTotal);
  document.getElementById("discountAmount").innerHTML = totalDis.toFixed(2);
  document.getElementById("grandTotalAmount").innerHTML = NewGrandTotal.toFixed(2);
  modal.style.display = "none";
}





var SplitTotal = 0.00;
var SplitGST = 0.00;
var SplitGrandTotal = 0.00;

function CheckBoxCliked(obj)
{
  //console.log(obj);
  //svar SelecteditemID = obj.itemname;
  selectedIndex = obj.getAttribute("data-array-index");
  var SplitItemPrice = obj.getAttribute("selected-item-price");
  if (obj.checked)
  {
    SplitTotal += parseFloat(SplitItemPrice);
    SplitGST += parseFloat(SplitItemPrice) / 100 * 6;
    SplitGrandTotal = SplitTotal + SplitGST;
    // console.log(SplitGST);
    document.getElementById("SplitsubtotalAmount").innerHTML = SplitTotal.toFixed(2);
    document.getElementById("SplitgstAmount").innerHTML = SplitGST.toFixed(2);
    document.getElementById("SplitgrandTotalAmount").innerHTML = SplitGrandTotal.toFixed(2);
    selected.push(parseInt(selectedIndex));
    console.log(selected);
    //alert("Checked");
  }
  else
  {
    SplitTotal -= parseFloat(SplitItemPrice);
    SplitGST -= parseFloat(SplitItemPrice) / 100 * 6;
    SplitGrandTotal = SplitTotal + SplitGST;
    document.getElementById("SplitsubtotalAmount").innerHTML = SplitTotal.toFixed(2);
    document.getElementById("SplitgstAmount").innerHTML = SplitGST.toFixed(2);
    document.getElementById("SplitgrandTotalAmount").innerHTML = SplitGrandTotal.toFixed(2);
    selected.splice(selected.findIndex(item => item === selectedIndex), 1)
    //alert("UNNNChecked");
    //console.log(selected);
  }
}      




var Tablelements = document.getElementsByClassName("CreateTableClass");
var TableClicked = function(e)
{
  tableSelected = true;
  document.getElementById("myModal8").style.display="none";
  console.log(tableSelected);
};
for (var i = 0; i < Tablelements.length; i++)
{
  Tablelements[i].addEventListener('click', TableClicked, false);
}






// var x = document.getElementById("closebtnVSBLTY");
// var y = document.getElementById("openbtnVSBLTY");

// function openNav()
// {
//   x.style.visibility = "visible";
//   y.style.visibility = "hidden";
//   document.getElementById("mySidebar").style.width = "0" ? '100%' : '80px';
//   document.getElementById("closebtn").style.visibility = "visible";
// }

// function closeNav()
// {
//   x.style.visibility = "hidden";
//   y.style.visibility = "visible";
//   document.getElementById("mySidebar").style.width = "80px";
//   document.getElementById("main").style.marginLeft = "0";
// }





document.getElementById("btnDeleteClicked").addEventListener("click", btnDeleteClicked);

function btnDeleteClicked()
{
  //console.log("askjdhk");
  // var rowCount = TransactionTable.rows.length;
  //       for (var i = rowCount - 1; i > 0; i--) {
  //           TransactionTable.deleteRow(i);
  //           //CalculationTable.deleteRow(1);
  //           // $("#CalculationTable").empty(); 
  //       }
// document.getElementById("selectedTable").innerHTML = '';
// console.log("CLICK");
  location.reload();
  
  //OpenShift = true;

}







function show()
{
  let x = document.getElementById('toggleImage')
  if (x.src.match('assets/img/dineIn.png'))
  {
    x.src = 'assets/img/takeAway.png';
  }
  else
  {
    x.src = 'assets/img/dineIn.png';
  }
}




 function OpenCloseShift()
{
  let x = document.getElementById('OpenCloseShiftID')
  console.log("CLICKED");
  let y = document.getElementById('sidebar')
  y.style.left = '-300px';
  if (x.textContent === 'Close Shift')
  {
    x.textContent = 'Open Shift';
    OpenShift = false;
    alert("The shift is now closed!");
    document.getElementById("categoryList").disabled = true;
  }
  else
  {
    x.textContent = 'Close Shift';
    OpenShift = true;
    // console.log(OpenShift);
    alert("The shift is now open!");
    document.getElementById("categoryList").disabled = false;
  }
}


// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnSplit = document.getElementById("btnSplitClicked");
var Paybtn = document.getElementById("payButtonClicked");
var TransactionPage = document.getElementById("TransactionClicked");
var recieptClicked = document.getElementById("reciept");
// When the user clicks on <span> (x), close the modal
recieptClicked.onclick = function()
{
  modal5.style.display = "block";
}
TransactionPage.onclick = function()
{
  let x = document.getElementById('sidebar')
  modal4.style.display = "block";
  x.style.left = '-300px';
}


function MenubtnClicked()
{
  //document.getElementById("sidebar").style.left = "0px";
  let x = document.getElementById('sidebar')
  if (x.style.left === '-300px')
  {
    x.style.left = '0px';
    console.log("clicked if");
  }
  else if (x.style.left === '0px')
  {
    x.style.left = '-300px';
  }
  else
  {
    x.style.left = '0px';
    console.log("clicked else");
  }
}
Paybtn.onclick = function()
{

  if (ItemSelectedToSend === false)
  {
    alert("Please select item first");
  }
  else{

  SplitOderCLicked = false;
  var splittedTotal = 0;
  var splittedGST = 0;
  var splittedGrandTotal = 0;
  var disc = document.getElementById("discountAmount").innerHTML;
  //console.log(disc);
  modal2.style.display = "block";
  for (var i = 0; i < cart.length; i++)
  {
    //console.log( cart[i]);
    var Cartitems = item.find(item => item.id === cart[i]);
    //console.log(Cartitems.name);
    var tableCartScreen = document.getElementById("TransactionTablePayScreen");
    var rowCartScreen = tableCartScreen.insertRow(1);
    var cellCart1 = rowCartScreen.insertCell(0);
    var cellCart2 = rowCartScreen.insertCell(1);
    var cellCart3 = rowCartScreen.insertCell(2);
    cellCart1.innerHTML = Cartitems.name;
    cellCart2.innerHTML = "1";
    cellCart3.innerHTML = Cartitems.price;
    splittedTotal += parseFloat(Cartitems.price);
    splittedGST += parseFloat(Cartitems.price) / 100 * 6;
    splittedGrandTotal = splittedTotal + splittedGST - disc;
    document.getElementById("subtotalAmountPayScreen").innerHTML = splittedTotal.toFixed(2);
    document.getElementById("gstAmountPayScreen").innerHTML = splittedGST.toFixed(2);
    document.getElementById("grandTotalAmountPayScreen").innerHTML = splittedGrandTotal.toFixed(2);
    var AmountTopay = document.getElementById("grandTotalAmountPayScreen").innerHTML;
    document.getElementById("TotalAmountToPay").innerHTML = AmountTopay;
    document.getElementById("CashInput").value = AmountTopay;
    var x = document.getElementById("TotalAmountToPay").innerHTML;
    document.getElementById("paidAmount").innerHTML = x;
    }
    // var CopyTotalCart = document.getElementById("subtotalAmount").innerHTML;
    // var CopyGstCart = document.getElementById("gstAmount").innerHTML;
    // var CopyGrandTotalCart = document.getElementById("grandTotalAmount").innerHTML;
    // document.getElementById("subtotalAmountPayScreen").innerHTML = CopyTotalCart; 
    // document.getElementById("gstAmountPayScreen").innerHTML = CopyGstCart;
    // document.getElementById("grandTotalAmountPayScreen").innerHTML = CopyGrandTotalCart;
    // var p2 = document.getElementById("CopyDiv2").innerHTML;
    // var p3 = document.getElementById("CopyDiv3").innerHTML;
    // var p4 = document.getElementById("CalculationDIV").innerHTML;
    var gTotal = document.getElementById("grandTotalAmount").innerHTML;
    // document.getElementById("PasteDiv1").innerHTML= p1;
    // document.getElementById("PasteDiv2").innerHTML= p2;
    // document.getElementById("PasteDiv3").innerHTML= p3;
    // document.getElementById("PasteCalculationDiv").innerHTML= p4;
    document.getElementById("CashInput").value = gTotal;
    document.getElementById("TotalAmountToPay").innerHTML = gTotal;
    }
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var closeIcon = document.getElementsByClassName("close2")[0];
var closeSplitWindow = document.getElementsByClassName("close3")[0];
var SplitPayScreenClicked = document.getElementsByClassName("SplitPayScreen")[0];
var CloseTransactionClicked = document.getElementsByClassName("CloseTransaction")[0];
var closeReceiptClicked = document.getElementsByClassName("closeReceipt")[0];
var closeKitchenMSGClicked = document.getElementsByClassName("closeKitchenMSG")[0];
var dltBtnIcons = document.getElementsByClassName("bi-trash")[0];

closeKitchenMSGClicked.onclick = function()
{
  modal6.style.display = "none";
}
closeReceiptClicked.onclick = function()
{
  modal5.style.display = "none";
}
// When the user clicks the button, open the modal 
btn.onclick = function()
{
  modal.style.display = "block";
}
btnSplit.onclick = function()
{
  if (cart.length == 0)
  {
    alert("Please select item first");
  }
  else
  {
    modal3.style.display = "block";
  }
}
// When the user clicks on <span> (x), close the modal
span.onclick = function()
{
  modal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
closeIcon.onclick = function()
{
  modal2.style.display = "none";
  SplitOderCLicked = false;
  $("#TransactionTablePayScreen td").remove();
}
SplitPayScreenClicked.onclick = function()
{
  if (selected.length == 0)
    {
      alert ("Please add item to split");
    }

  else 
    {
      dltBtnIcons.style.display="none"
      modal3.style.display = "none";
      modal2.style.display = "block";
      SplitOderCLicked = true;
      var splittedTotal = 0.00;
      var splittedGST = 0.00;
      var splittedGrandTotal = 0.00;
      for (var i = 0; i < selected.length; i++)
      {
        //var selectedData = cart.at(selected);
        var itemID = (cart.at(selected[i]));
        var items = item.find(item => item.id === itemID);
        //console.log(items.name);
        var tablePayScreen = document.getElementById("TransactionTablePayScreen");
        var rowPayScreen = tablePayScreen.insertRow(1);
        var cellPay1 = rowPayScreen.insertCell(0);
        var cellPay2 = rowPayScreen.insertCell(1);
        var cellPay3 = rowPayScreen.insertCell(2);
        cellPay1.innerHTML = items.name;
        cellPay2.innerHTML = "1";
        cellPay3.innerHTML = items.price;
        splittedTotal += parseFloat(items.price);
        splittedGST += parseFloat(items.price) / 100 * 6;
        splittedGrandTotal = splittedTotal + splittedGST;
        document.getElementById("subtotalAmountPayScreen").innerHTML = splittedTotal.toFixed(2);
        document.getElementById("gstAmountPayScreen").innerHTML = splittedGST.toFixed(2);
        document.getElementById("grandTotalAmountPayScreen").innerHTML = splittedGrandTotal.toFixed(2);
        var AmountTopay = document.getElementById("grandTotalAmountPayScreen").innerHTML;
        document.getElementById("TotalAmountToPay").innerHTML = AmountTopay;
        document.getElementById("CashInput").value = AmountTopay;
      }
    
    }
}
CloseTransactionClicked.onclick = function()
{
  modal4.style.display = "none";
}
closeSplitWindow.onclick = function()
{
  modal3.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
{
  if (event.target == modal)
  {
    modal.style.display = "none";
  }
}


function exactBtnClicked()
{
  modal2.style.display="none";
  playVid();
  document.getElementById("PayRightSidePanel1").style.visibility = "hidden";
  document.getElementById("PayRightSidePanel2").style.display = "block";
  var x = document.getElementById("TotalAmountToPay").innerHTML;
  document.getElementById("paidAmount").innerHTML = x;
}


function newOrderBtnClicked()
{
  VideoPlayedOnce = true;
  // if( screen.width <= 480 ){
  //   document.getElementById("price1").style.display= "none";
  //   //document.getElementById("Fprice").style.display= "none";
    
  // }
  selected.sort(function(a, b)
  {
    return b - a
  });
  if (SplitOderCLicked === true)
  {
    for (var i = 0; i < selected.length; i++)
    {
      cart.splice(selected[i], 1);
    }
    sumVal = 0.00;
    var disAmount = 0.00;
    $("#TransactionTable td").remove();
    selected.length = 0;
    //console.log(selected);
    SplitTotal = 0.00;
    SplitGST = 0.00;
    SplitGrandTotal = 0.00;
    splittedTotal = 0;
    splittedGST = 0;
    splittedGrandTotal = 0;
    //console.log(SplitGrandTotal);
    document.getElementById("SplitsubtotalAmount").innerHTML = SplitTotal.toFixed(2);
    document.getElementById("SplitgstAmount").innerHTML = SplitGST.toFixed(2);
    document.getElementById("SplitgrandTotalAmount").innerHTML = SplitGrandTotal.toFixed(2);
    document.getElementById("selectedTable").innerHTML = '';
    SelectedTablehtml2 = '';

    for (var b = 0; b < cart.length; b++)
    {
      cartBadge.innerHTML=cart.length;

      var Citems = item.find(item => item.id === cart[b]);
      //console.log(Citems.name);
      var table = document.getElementById("TransactionTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = Citems.name;
      cell2.innerHTML = "1";
      cell3.innerHTML = Citems.price;
      //console.log(Citems.name);
      SelectedTablehtml2 += "<li class='list-group-item'>";
      SelectedTablehtml2 += "<div style='display: flex;justify-content: space-between;align-items: center;'>";
      SelectedTablehtml2 += " <input onclick='CheckBoxCliked(this)' data-array-index=" + (cart.length - 1) + " selected-item-price=" + Citems.price + "  selected-item-id=" + Citems.id + " class='SplitItemElementsDiv form-check-input me-1' type='checkbox' value='' aria-label='...'>";
      SelectedTablehtml2 += "<img class='SplitImageStyle' src=" + Citems.imgSource + ">";
      SelectedTablehtml2 += " <p max-width='20px'>1</p>";
      SelectedTablehtml2 += "<p class='short-name'>" + Citems.name + "</p>";
      if( screen.width <= 480 ){

      }
      else{
        SelectedTablehtml2 += "<p id='Fprice'>" + Citems.price + "</p>";
      }
      SelectedTablehtml2 += "<p>" + Citems.price + "</p>";
      SelectedTablehtml2 += "</div>";
      SelectedTablehtml2 += "</li>";
      sumVal += parseFloat(Citems.price);
      var gstperc = ((sumVal.toFixed(2) / 100) * 6);
      document.getElementById("subtotalAmount").innerHTML = sumVal.toFixed(2);
      document.getElementById("gstAmount").innerHTML = gstperc.toFixed(2);
      document.getElementById("grandTotalAmount").innerHTML = (sumVal + gstperc + disAmount).toFixed(2);
      document.getElementById("PayRightSidePanel1").style.visibility = "visible";
      document.getElementById("PayRightSidePanel2").style.display = "none";
    }
    $("#TransactionTablePayScreen td").remove();
    document.getElementById("selectedTable").innerHTML += SelectedTablehtml2;
    modal2.style.display = "none";
    // console.log(cart.length);
    if (cart.length === 0)
    {
      location.reload();
      OpenShift = true;
    }
  }
  else
  {
    location.reload();
    OpenShift = true;
  }
}

  

  $(".nav a").on("click", function() {
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});

// const changeSelected = (e) =>
// {
//   const $select = document.querySelector('#categoryList');
//   $select.value = '3'
// };

function sendBtnClicked()
{
  if (ItemSelectedToSend === false)
  {
    alert("Please select item first");
  }
  else
  {
    modal6.style.display = "block";
    var tr = document.getElementById("TransactionTable");
    //var tranTR = document.getElementById("TransactionTableTR");
    for (i = 0; i < tr.rows.length; i++)
    {
      //tranTR.style.background="white";
      tr.rows[i].style.background = "#F2D857";
    }
  }
}


var vid = document.getElementById("myVideo");

function playVid()
{
  
  if (VideoPlayedOnce==false){
    modal7.style.display = "block";
    vid.play();
  }
  else {
    modal2.style.display="block";
  }

  
}


document.getElementById('myVideo').addEventListener('ended', myHandler, false);

function myHandler(e)
{
  //console.log("Video ended");
  
  modal7.style.display = "none";
  vid.pause();
  modal2.style.display="block";

}


// Get the tableModal
var tableModal = document.getElementById("mytableModal");

// Get the button that opens the tableModal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the tableModal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the tableModal 
TableIcon.onclick = function() {
  tableModal.style.display = "block";
  //console.log("OPEN");
}

// When the user clicks on <span> (x), close the tableModal
tableSpan.onclick = function() {
  tableModal.style.display = "none";
}

// When the user clicks anywhere outside of the tableModal, close it
window.onclick = function(event) {
  if (event.target == tableModal) {
    tableModal.style.display = "none";
  }
}

if( screen.width <= 480 ) {   

$(".CallRCT").click(function(){
  $('.receiptDetails').show();
});


//$(".bi").removeClass("bi-lightning-fill").addClass("bi-cart-fill");

$(".exactBtn").click(function(){
   $('.column-rs').hide();
});


$(".CloseTransactionRCT").click(function(){
   $('.receiptDetails').hide();
});

}

$(".customer").click(function(){
   $('.modalSelection').hide();
});

$(".retail").click(function(){
    tableSelected = true;
   $('.modalSelection').hide();
   $('.TableIcon').hide();
   $('.sidebartable').hide();
   if( screen.width > 480 ){
     $('.divFoodItem').css('margin-left', '30px');
   }
  
});
