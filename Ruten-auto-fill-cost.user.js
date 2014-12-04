// ==UserScript==
// @name Ruten-auto-fill-cost
// @version 1.0
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
		document.getElementsByClassName("apply-pay-deliver-option")[0].innerHTML += "<lable><input type=\"button\" onclick=\"fillcost()\" value=\"自動填寫運費\"></input></lable>";	
    }, false) 
    b.textContent = function fillcost(){
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
    };
    document.body.appendChild(b);
})();