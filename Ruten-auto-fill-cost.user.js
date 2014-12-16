// ==UserScript==
// @name Ruten-auto-fill-cost
// @version 1.2
// @author JasonPan
// @namespace https://github.com/jason8399
// @description Auto-fill-cost
// @include http://mybidu.ruten.com.tw/upload/step2_form.php*
// @match http://mybidu.ruten.com.tw/upload/step2_form.php*
// ==/UserScript==
(function () {
    var b = document.createElement("script");
    b.setAttribute("type", "text/javascript");
	window.addEventListener ("load", function() {
		document.getElementsByClassName("apply-pay-deliver-option")[0].innerHTML += "<lable><input type=\"button\" onclick=\"fillCost()\" value=\"自動填寫運費自付\"></input></lable><lable><input type=\"button\" onclick=\"fillCostFree()\" value=\"自動填寫免運費\"></input></lable>";	
    }, false) 
    b.textContent = function fillCost(){
    	var c = document.getElementById("g_ship_fee");
    	c.click();
    	var check_list = ["cb_pway_paylink","cb_pway_atm","cb_pway_ps","cb_dway_post","cb_dway_seven","cb_pway_cvs_cod","cb_pway_seven_cod","cb_pway_cod","cb_pway_f2f"];
		for(i = 0; i < check_list.length; i++){
			document.getElementById(check_list[i]).checked = true;
		}
		document.getElementById("ship_cost_post").value = 40;
		document.getElementById("ship_cost_seven").value = 60;
		document.getElementById("ship_cost_cvs_cod").value = 60;
		document.getElementById("ship_cost_seven_cod").value = 60;
		document.getElementById("ship_cost_cod").value = 90;
    } + function fillCostFree(){
	    c = document.getElementById("g_ship_free");
    	c.click();
		var flag = true;
		if (document.getElementsByName("g_direct_price")[0].value < 3000) {
			flag = false;
		};
		document.getElementById("cb_pway_pp_crd").checked = flag;
		var check_list = ["cb_pway_pp_crd_zero", "cb_pway_pp_crd_n3", "cb_pway_pp_crd_n6", "cb_pway_pp_crd_n12"];
		for(i = 0; i < check_list.length; i++){
			document.getElementById(check_list[i]).checked = flag;
		};
		var check_list = ["cb_pway_paylink","cb_pway_atm","cb_pway_ps","cb_dway_post","cb_dway_seven","cb_pway_cvs_cod","cb_pway_seven_cod","cb_pway_cod","cb_pway_f2f"];
		for(i = 0; i < check_list.length; i++){
			document.getElementById(check_list[i]).checked = true;
		}
	};
    document.body.appendChild(b);
})();