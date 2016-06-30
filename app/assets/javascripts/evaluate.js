 //app/assets/javascripts/evaluate.js
//= require evaluate.js

$.support.cors = true;
var _eval;
//Click Event Listener
 $(document).on("click",".eval-click",function(){
 
  var tag = $(this).prop("tagName");
  var label;
  var category;
  if (tag == "BUTTON")
  {
  	label = $(this).text();
  	category = "button";
  	
  }
  else if (tag == "A") 
  {  
    label = $(this).text();
  	category = "link";
  	if (!label || !label.trim())
      {
         label = $(this).attr("href");
      }
  		
  }
  else if (tag == "INPUT")
  {
  	var input_type = $(this).attr('type');
  	if (input_type == "submit")
  		{
  		  label = $(this).attr("value");
  		  category= "Submit Button"; 
  		}
  }

  _eval.ie({category: category,  action_type: 'click', label: label});
  }); 


//Hover event Listener
var interval_id;
$(document).on("mouseenter",".eval-hover", function () {
 var label;
 var category;
 var tag = $(this).prop("tagName");
  if (tag == "BUTTON")
  {
  	label = $(this).text();
  	category = "button";
  }
  else if (tag == "A") 
  {  
    label = $(this).text();
  	category = "link";
  	if (!label || !label.trim())
      {
         label = $(this).attr("href");
      }	
  }
  else if (tag == "INPUT")
  {
  	var input_type = $(this).attr('type');
  	if (input_type == "submit")
  		{
  		  label = $(this).attr("value");
  		  category= "Submit Button"; 
  		}
  }

      //set mouse timer
      var t = 0;
       interval_id = setInterval(function () {
        t += 1000; 
        if (t == 5000){
          _eval.ie({category: category,  action_type: 'hovering', label: label});
          window.clearInterval(interval_id);
        }
      }, 1000);
    });

$(document).on("mouseleave", ".eval-hover", function() {
  window.clearInterval(interval_id);
});


$(function() {

  function evaluationTracking(parameters) {

    this.uuid = parameters.uuid;

    this.s = function s(parameters) {
      parameters.uuid = this.uuid;
      a("sessions", parameters);
      return 0;
    }

    this.ie = function ie(parameters) {
      parameters.uuid = this.uuid;
      parameters.page = page();
      a("events", parameters);
      return 0;
    };
  }

  var a = function(action, parameters) {
    $.ajax({
      data: parameters,
      dataType: "json",
      type: "POST",
      url: "http://192.168.112.129:3001/api/" + action
    });
    console.log(action)
    console.log(parameters)
  };

  var ap = function() {
      return e("application_name");
    },
    av = function() {
      return e("application_version");
    },
    bt = function () {
      return e("browser_type");
    },
    bv = function() {
      return e("browser_version");
    },
    pi = function() {
      return e("patient_id");
    },
    pt = function() {
      return e("patient_type");
    },
    s = function() {
      return window.screen.width + "x" + window.screen.height;
    },
    ts = function() {
      return e("timestamp");
    },
    u = function() {
      return e("uuid");
    },
    un = function() {
      return e("username");
    }

  function p() {
    return d("action_name");
  }

  function page(){
  	return window.location.pathname;
  }

  function e(attribute) {
    return document.getElementsByTagName('meta').item(property='sh-eval').getAttribute(attribute);
  }

  function d(attribute) {
    return document.getElementById(attribute).value;
  }

  function lt() {
    return (new Date().getTime()) - performance.timing.navigationStart;;
  }

  window.onbeforeunload = function() {
    _eval.ie({category: 'page',  action_type: 'close'});
  };

  _eval = new evaluationTracking({uuid: u()});  

//sending session info
  _eval.s(
    { application_name: ap(),
      application_version: av(),
      browser_type: bt(),
      browser_version: bv(),
      ehr_timestamp: ts(),
      monitor_dimensions: s(),
      patient_id: pi(),
      patient_type: pt(),
      username: un()
    });

//page load
  _eval.ie({category: 'page',  action_type: 'load', load_time: lt()});



});




