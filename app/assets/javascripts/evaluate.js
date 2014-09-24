 //app/assets/javascripts/evaluate.js
//= require evaluate.js

$.support.cors = true;

/*
 $(document).on("click","button",function(){
  	alert("hello");
  });
**/
$(function ev(){
 $(document).on("click","button",function(){
  	alert("hello");
  	$.ajax({
      data: {category: 'button', action_type: 'click', label: 'mylabel', uuid: 'gqhjqjqjqk', page: 'myfirst'},
      dataType: "json",
      type: "POST",
      url: "http://192.168.112.129:3001/api/" + "events",
      error: function(xhr){alert("An error occured: " + xhr.status + " " + xhr.statusText);}
    });
  
    $("p").hide();
  });
});

var _eval;

$(function eval(){ 
$(document).on("click","a", function(e){
 var label = $(this).text();
 if (!label || !label.trim())
 {
    label = $(this).attr("href");
 }
 _eval.ie({category: 'link',  action_type: 'click', label: label});

  });
});

function eval_hover(){
var interval_id;
$(document).on("mouseenter","a", function () {

 var label = $(this).text();
      //set timer
      var t = 0;
       interval_id = setInterval(function () {
        t += 1000; 
        if (t == 5000){
          _eval.ie({category: 'link',  action_type: 'hovering', label: label});
          window.clearInterval(interval_id);
        }
      }, 1000);
    });

$(document).on("mouseleave", "a", function() {
  window.clearInterval(interval_id);
});
}

$(function() {

$(document).on("click","button", function(e){
 var label = $(this).text();
 _eval.ie({category: 'button', action_type: 'click', label: label});

  });
//need to implement in the case of input type image



  function evaluationTracking(parameters) {

    this.uuid = parameters.uuid;

    this.s = function s(parameters) {
      parameters.uuid = this.uuid;
      a("sessions", parameters);
      return 0;
    }

    this.ie = function ie(parameters) {
      parameters.uuid = this.uuid;
      parameters.page = p();
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
/**
  $(document).on('page:load', function() {
    _eval.ie({category: 'page',  action_type: 'load'});

  });
**/
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


 $(function ka(){alert("ooii");});


  function p() {
    return d("action_name");
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

  _eval.ie({category: 'page',  action_type: 'load', load_time: lt()});



});




