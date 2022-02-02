chrome.storage.local.get(["normal"],function(result){
  if(!result.normal){
    var icons = document.head.querySelectorAll("link[rel*='icon']");
    for(var i = 0; i < icons.length; i++){
      icons[i].href = "https://techpro-services.github.io/Images/K12%20Enhancer.png";
    }
    window.addEventListener('hashchange', function() {
      var icons = document.head.querySelectorAll("link[rel*='icon']");
        for(var i = 0; i < icons.length; i++){
          icons[i].href = "https://techpro-services.github.io/Images/K12%20Enhancer.png";
        }
    }, false);
  }
})

var link = document.createElement('style');
link.setAttribute('type', 'text/css');
link.innerHTML = `
tbody, th, td, .d2l-page-header, .d2l-column-flip-side, tr{
  background-color: #00000000 !important;
}
body.nextgen .enrollment-data-table table.events-table>tbody>tr>td, body.nextgen .table thead tr th, body.nextgen .gh-datatable thead tr th, body.nextgen .enrollment-data-table table.table-striped>tbody>tr:nth-child(odd)>td, body.nextgen .enrollment-data-table table.table-striped>tbody>tr:nth-child(odd)>th, .table-striped>tbody>tr:nth-of-type(odd), body.nextgen .table.table-striped tr:nth-child(even)>td, body.nextgen .table.table-striped>tbody>tr:nth-child(even)>th, body.nextgen .gh-datatable.table-striped tr:nth-child(even)>td, body.nextgen .gh-datatable.table-striped>tbody>tr:nth-child(even)>th, #components, .btn, .input-group-addon{
  background-color: #00000000 !important;
}
/* Set General Background to dark grey */
html,body, d2l-navigation, .login-wrapper{
  color: white !important;
  background-color: #201f1f !important;
}

/* Set Widget text to white */
d2l-icon, .daylight-header, .daylight-section-title, .daylight-section-value, .daylight-small-section-value, .d2l-inline, .d2l-textblock, .d_tabs_link, .form-control-static, body.nextgen:not(.login-body) a.btn.sm.icon-only .icon, body.nextgen:not(.login-body) button.btn.sm.icon-only .icon, .input-group-addon{
  color: white !important;
}

.lc-course-progress-icon-container{
  text-shadow: 2px 2px 7px black;
}
.credit-photo{
  display: none !important;
}

/* Set Class Name to white */
.d2l-navigation-s-link, .d2l-focusable, .d2l-numericpager-pagecount, .d2l-link, #header-title-h2, .link-text{
  color: white !important;
}

/* Set tiles to grey */
.d2l-tile, .d2l-le-disc-post, .d2l-grid-row, .d2l-grid-header-cell, .d2l-inline~div div, .d2l-editable, #header-bar{
  background-color: #2d2c2c !important;
}

/* Eliminate white border */
.d2l-widget{
  border-bottom-color: black !important;
}

body.nextgen.login-body .content-panel{
  background-color: black !important;
  border-color: black;
}

#logo-container{
  visibility: hidden;
}

/* Eliminate white gradient HOMEPAGE */
.d2l-collapsepane-header, .d2l-collapsepane-content, d2l-dropdown-content>div, #side-nav, .d2l-datalist-item-content, #d2l-dropdown-wrapper{
  background: #484644 !important;
  border-color: #565a5c !important;
}
.d2l-datalist-item.vui-selected{
  background-color: grey;
}
.d2l-collapsepane-content>.d2l-datalist-container>.vui-list>.vui-active, .card-info{
  background-color: #565a5c !important;
}

/* Eliminate white gradient CONTENTPAGE */
.d2l-twopanelselector-side-sep, .d2l-user-profile-card{
  background: #201f1f !important;
}
.d2l-iterator-button{
  background: #484644 !important;
  border-color: #565a5c !important;
}
.d2l-panel{
  background: #484644 !important;
  border-color: #565a5c !important;
}
.d2l-inline>div>.d2l-textblock{
  color: white !important;
}
#d2l_1_232_975{
  background: #201f1f !important;
}
.vui-tabmenu-item-blue{
  background: white;
  border: none;
}
.d2l-fileinput{
  background: #2d2c2c !important;
  border-color: black !important;
}
.d2l-button, .d2l-label-text{
  background: #484644 !important;
  border-color: #565a5c !important;
  color: white !important;
}
#wallpaper{
  background-image: url("https://techpro-services.github.io/Images/green_background_blurred.jpg") !important;
  position: fixed !important;
}
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #fff0;
    transition: 0.2;
}
::-webkit-scrollbar-thumb {
    background: #25ff88;
    border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
    background: #00b050;
}
`
chrome.storage.local.get(['k12lightmode'],function(result){
  if(!result.k12lightmode){
    document.head.appendChild(link);
  }
})