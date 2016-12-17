// ==UserScript==
// @name Ruten-auto-fill-cost
// @version 2.1
// @author JasonPan
// @namespace https://github.com/jason8399
// @description Auto-fill-cost
// @include https://mybidu.ruten.com.tw/upload/item_start.php*
// @match https://mybidu.ruten.com.tw/upload/item_start.php*
// @downloadURL https://github.com/jason8399/Ruten-auto-fill-cost/raw/master/Ruten-auto-fill-cost.user.js
// ==/UserScript==
(function () {
  var b = document.createElement("script");
  b.setAttribute("type", "text/javascript");
  document.querySelector(".area-pdway .title").innerHTML += "<lable><input id='fillCost' type='button' value='自動填寫運費自付'></input></lable><lable><input id='fillCostFree' type='button' value='自動填寫免運費'></input></lable>";
  document.body.appendChild(b);

  var pway_check_list = ["cb_pway_paylink",
                    "cb_pway_pp_crd",
                    "cb_pway_atm",
                    "cb_pway_ps",
                    "cb_dway_post",
                    "cb_dway_seven",
                    "cb_pway_cvs_cod",
                    "cb_pway_seven_cod",
                    "cb_dway_island",
                    "cb_pway_cod",
                    "cb_pway_f2f"];

  var shipment_list = [{
    "ship_method": "#ship_cost_post",
    "shipment": 70,
  },{
    "ship_method": "#ship_cost_cvs_cod",
    "shipment": 60,
  }, {
    "ship_method": "#ship_cost_seven_cod",
    "shipment": 60,
  }, {
    "ship_method": "#ship_cost_seven",
    "shipment": 60,
  }, {
    "ship_method": "#ship_cost_cod",
    "shipment": 150,
  }, {
    "ship_method": "#ship_cost_island",
    "shipment": 100,
  }];

  var pp_check_list = ["cb_pway_pp_crd_zero", "cb_pway_pp_crd_n3", "cb_pway_pp_crd_n6"];

  fillCost.onclick = function(){
    var c = document.querySelector("#g_ship_fee");
    c.click();

    pp_crd();

    pway_check_list.forEach(function(check){
      document.querySelector("#" + check).checked = true;
    });

    shipment_list.forEach(function(object){
      document.querySelector(object.ship_method).value = object.shipment;
    });
  };

  fillCostFree.onclick = function(){
    c = document.querySelector("#g_ship_free");
    c.click();

    pp_crd();

    pway_check_list.forEach(function(check){
      document.querySelector("#" + check).checked = true;
    });
  };

  function pp_crd(){
    var flag = true;
    if (document.querySelector("input[name=g_direct_price]").value < 3000)
      flag = false;
    pp_check_list.forEach(function(check){
      document.querySelector("#" + check).checked = flag;
    });
  }
})();
