"use strict";var KTGithub={init:function(){axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",function(){const t=document.getElementById("repo_register_form");var e=FormValidation.formValidation(t,{fields:{username:{validators:{notEmpty:{message:"Username is required"}}},purchase_code:{validators:{notEmpty:{message:"Purchase code is required"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}});const i=document.getElementById("repo_register_submit");i.addEventListener("click",(function(n){n.preventDefault(),e&&e.validate().then((function(e){if("Valid"===e){i.setAttribute("data-kt-indicator","on"),i.disabled=!0;const e=new FormData(t),n=Object.fromEntries(e.entries());axios.post(t.getAttribute("action"),n).then((function(e){if(200===e.status){var i=e.data.join(" ");Swal.fire({text:i,icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((e=>{t.reset()}))}})).catch((function(t){t.response&&Swal.fire({text:t.response.data,icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})})).finally((function(){i.removeAttribute("data-kt-indicator"),i.disabled=!1}))}}))}))}()}};KTUtil.onDOMContentLoaded((function(){KTGithub.init()}));