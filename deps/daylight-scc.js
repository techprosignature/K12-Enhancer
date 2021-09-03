var daylight_k12 = daylight_k12 || {'widgets': {}};

var dataLayer = dataLayer || []; //In case the dataLayer wasn't initialized yet since it?s coming from another widget.
dataLayer.push({'event' : 'View Class Connect'});
(function(ns) {
  //Get class connect container
  var ClassConnectContainer = document.getElementById('k12_classConnect');

if (!ns.k12Styles) {
    ns.k12Styles = function() {
        var css= ".daylight-left {     float: left !important; } .daylight-right {     float: right !important; } //.daylight-hidden { //    display: none !important; //} .daylight-cc-sessions .session.daylight-hidden { display: none; } .daylight-bold {     font-weight: bold !important; } .daylight-k12-loader {     background: none repeat scroll 0 0 white;     border-radius: 5px;     box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);     cursor: default;     display: none;     margin: 0 auto;     min-height: 20px;     min-width: 20px;     overflow: hidden;     padding: 10px;     position: absolute;     top: 0;     -webkit-user-select: none;     -moz-user-select: none;     -ms-user-select: none;     user-select: none;     z-index: 10; } .daylight-header {     background: transparent;     background-clip: padding-box;     border-radius: 4px 4px 0 0;     color: #55595C;     cursor: auto;     font-size: 0.8em !important;     font-weight: 700 !important;     line-height: 1.3em !important;     margin: 0 !important;     padding: 0px 0px;     position: relative; } #k12_classConnect > .daylight-header{ font-weight: bold !important; } .daylight-caret {     color: #aaa;     cursor: pointer;     font-size: 1.5em;     position: absolute;     right: 8px;     top: 4px; } .daylight-badge {     border: 2px solid #006fbf;     border-radius: 8px;     color: #006fbf;     font-weight: bold;     margin-right: 12px;     margin-top: -4px;     text-decoration: none;     padding: 2px 12px; } .daylight-preload-error {     display: none;     margin: 0;     padding: 0px 12px 0px 0px; } .daylight-error {     margin: 0;     padding: 12px 12px 6px 0px; } .daylight-widget-wrapper {     color: #6c7787 !important;     font-family: inherit; } .daylight-widget-wrapper a, .daylight-notes-link {     color: #006ebf !important;     font-family: inherit;     font-weight: 300;     /* min-height: 28px; */     text-decoration: underline;     } .daylight-widget-wrapper a:active {     border: none;     box-shadow: none;     outline: none !important; } .daylight-widget-wrapper a:focus {     border: none;     box-shadow: none;     /*outline: none !important;*/     text-decoration: none !important; } .daylight-widget-wrapper a:hover {     text-decoration: none; } .daylight-widget-wrapper ul {     list-style-type: none;     margin: 0;     padding: 0 0; } .daylight-widget-wrapper ul li {     padding: 0 0 8px 0px;     position: relative;     /* text-decoration: underline; */ } .daylight-widget-wrapper ul li a {     display: block;     /* font-size: 1.1em !important; */ } .daylight-button {     border: 1px solid #bdbdbd;     border-radius: 8px;     cursor: pointer;     display: inline-block;     font-size: 1em;     font-weight: bold;     line-height: 0.7em;     outline: none;     padding: 15px 30px 15px 30px !important;     text-align: center;     text-decoration: none;     transition: color 0.3s ease-out, border 0.3s ease-out;     vertical-align: middle;     white-space: nowrap; } .daylight-button.primary-button {     background-color: #006fbf;     color: #ffffff !important; } .daylight-button.primary-button:hover {     border: 1px solid #6c7787;     color: #c4cedb !important; } .daylight-button.secondary-button {     background-color: #ffffff;     color: #3a3f47 !important; } .daylight-button.secondary-button:hover {     border: 1px solid #6c7787;     color: #3069af !important; } .daylight-loading-container {     text-align: center;     margin: 0;     padding: 0;     vertical-align: middle;     width: 100%; } .daylight-loading-container:before {     content: '';     display: inline-block;     height: 100%;     vertical-align: middle; } .daylight-loading-container img {     margin: 0;     padding: 0;     vertical-align: middle; } /* Loading animation for ellipsis */ .daylight-pulsate {     border: none !important;     animation: pulsate 1s infinite alternate; } @keyframes pulsate {     from {         color: #006fbf;     }     to {         color: #fff;     } } /* Modal styles */ .daylight-modal-overlay {     background-color: rgba(255, 255, 255, 0.8) !important;     height: 100%;     left: 0;     position: fixed;     top: 0;     width: 100%;     z-index: 999; } .daylight-modal {     background-color: #fff;     border-radius: 8px;     -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);     -moz-box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);     box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);     margin: 2em auto 0 auto;     max-width: 600px;     width: 50%; } .daylight-modal .daylight-modal-header {     border-bottom: 1px solid #e5e5e5;     color: #000;     font-size: 1.3em !important;     font-weight: 600 !important;     line-height: 1.4 !important;     margin: 0 !important;     padding: 12px 20px;     position: relative; } .daylight-modal .daylight-modal-content {     padding: 10px 20px; } .daylight-modal .daylight-modal-footer {     border-top: 1px solid #e5e5e5;     padding: 10px 20px;     text-align: center; } /* owl-carousel styles */ .owl-carousel .owl-wrapper:after {     content: '.';     display: block;     clear: both;     visibility: hidden;     line-height: 0;     height: 0 } .owl-carousel {     display: none;     position: relative;     width: 100%;     -ms-touch-action: pan-y } .owl-carousel .owl-wrapper {     display: none;     position: relative;     -webkit-transform: translate3d(0, 0, 0) } .owl-carousel .owl-wrapper-outer { padding-top: 10px !important;     overflow: hidden;     position: relative;     width: 100% } .owl-carousel .owl-wrapper-outer.autoHeight {     -webkit-transition: height 500ms ease-in-out;     -moz-transition: height 500ms ease-in-out;     -ms-transition: height 500ms ease-in-out;     -o-transition: height 500ms ease-in-out;     transition: height 500ms ease-in-out } .owl-carousel .owl-item {     float: left } .owl-controls .owl-page, .owl-controls .owl-buttons div {     cursor: pointer } .owl-controls {     -webkit-user-select: none;     -khtml-user-select: none;     -moz-user-select: none;     -ms-user-select: none;     user-select: none;     -webkit-tap-highlight-color: rgba(0, 0, 0, 0) } .grabbing {     cursor: url(grabbing.png) 8 8, move } .owl-carousel .owl-wrapper, .owl-carousel .owl-item {     -webkit-backface-visibility: hidden;     -moz-backface-visibility: hidden;     -ms-backface-visibility: hidden;     -webkit-transform: translate3d(0, 0, 0);     -moz-transform: translate3d(0, 0, 0);     -ms-transform: translate3d(0, 0, 0) } /* carousel styles */ #classcontent_wrapper {     border-radius: 0 0 0px 0px !important;     box-sizing: border-box;     margin: 0 auto;     max-width: 1280px !important;     height: 250px !important;     overflow: hidden;     padding: 12px 40px;     font-weight: 700 !important; } #classcontent_wrapper * {     box-sizing: border-box;      } #classcontent_wrapper> .daylight-loading-container {     height: 188px; } #cc_wrapper { padding-bottom: 26px; } #classcontent_wrapper> .daylight-header {     background-color: transparent;     background-clip: padding-box;     border-radius: 4px 4px 0 0;     color: #ffffff !important;     cursor: auto;     font-size: 1.6em !important;     font-weight: 400 !important;     line-height: 1.3em !important;     margin: 0 !important;     padding: 0px 0px;     position: relative; } .owl-carousel.art-and-communications.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Arts_Communication_Banner.jpg); } .owl-carousel.art-and-communications.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Arts_Communication_Banner.jpg); } .owl-carousel.art-and-communications.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Arts_Communication_Banner.jpg); } .owl-carousel.art-and-communications.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Arts_Communication_Banner.jpg); } .owl-carousel.art.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Art_Banner.jpg); } .owl-carousel.art.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Art_Banner.jpg); } .owl-carousel.art.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Art_Banner.jpg); } .owl-carousel.art.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Art_Banner.jpg); } .owl-carousel.business-management-and-administration.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Business_Administration_Banner.jpg); } .owl-carousel.business-management-and-administration.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Business_Administration_Banner.jpg); } .owl-carousel.business-management-and-administration.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Business_Administration_Banner.jpg); } .owl-carousel.business-management-and-administration.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Business_Administration_Banner.jpg); } .owl-carousel.cte.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/CTE_Banner.jpg); } .owl-carousel.cte.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/CTE_Banner.jpg); } .owl-carousel.cte.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/CTE_Banner.jpg); } .owl-carousel.cte.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/CTE_Banner.jpg); } .owl-carousel.generic-other.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/LearningCoach_Banner.jpg); } .owl-carousel.generic-other.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/LearningCoach_Banner.jpg); } .owl-carousel.generic-other.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/LearningCoach_Banner.jpg); } .owl-carousel.generic-other.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/LearningCoach_Banner.jpg); } .owl-carousel.history.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/History_Banner.jpg); } .owl-carousel.history.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/History_Banner.jpg); } .owl-carousel.history.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/History_Banner.jpg); } .owl-carousel.history.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/History_Banner.jpg); } .owl-carousel.human-services.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Human_Services_Banner.jpg); } .owl-carousel.human-services.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Human_Services_Banner.jpg); } .owl-carousel.human-services.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Human_Services_Banner.jpg); } .owl-carousel.human-services.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Human_Services_Banner.jpg); } .owl-carousel.information-technology.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Information_Technology_Banner.jpg); } .owl-carousel.information-technology.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Information_Technology_Banner.jpg); } .owl-carousel.information-technology.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Information_Technology_Banner.jpg); } .owl-carousel.information-technology.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Information_Technology_Banner.jpg); } .owl-carousel.language-arts.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Language_Arts_Banner.jpg); } .owl-carousel.language-arts.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Language_Arts_Banner.jpg); } .owl-carousel.language-arts.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Language_Arts_Banner.jpg); } .owl-carousel.language-arts.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Language_Arts_Banner.jpg); } .owl-carousel.math.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Math_Banner.jpg); } .owl-carousel.math.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Math_Banner.jpg); } .owl-carousel.math.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Math_Banner.jpg); } .owl-carousel.math.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Math_Banner.jpg); } .owl-carousel.music.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Music_Banner.jpg); } .owl-carousel.music.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Music_Banner.jpg); } .owl-carousel.music.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Music_Banner.jpg); } .owl-carousel.music.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Music_Banner.jpg); } .owl-carousel.non-classroom-course.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Non_Classroom_Banner.jpg); } .owl-carousel.non-classroom-course.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Non_Classroom_Banner.jpg); } .owl-carousel.non-classroom-course.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Non_Classroom_Banner.jpg); } .owl-carousel.non-classroom-course.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Non_Classroom_Banner.jpg); } .owl-carousel.orientation.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Orientation_Banner.jpg); } .owl-carousel.orientation.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Orientation_Banner.jpg); } .owl-carousel.orientation.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Orientation_Banner.jpg); } .owl-carousel.orientation.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Orientation_Banner.jpg); } .owl-carousel.science.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Science_Banner.jpg); } .owl-carousel.science.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Science_Banner.jpg); } .owl-carousel.science.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Science_Banner.jpg); } .owl-carousel.science.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/Science_Banner.jpg); } .owl-carousel.world-languages.dev {     background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/World_Languages_Banner.jpg); } .owl-carousel.world-languages.qa {     background-image: url(https://test1-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/World_Languages_Banner.jpg); } .owl-carousel.world-languages.stage {     background-image: url(https://test6-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/World_Languages_Banner.jpg); } .owl-carousel.world-languages.prod {     background-image: url(https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_bgs/World_Languages_Banner.jpg); } .owl-carousel.art-and-communications {     background-color: #333333; } .owl-carousel.art {     background-color: #982640; } .owl-carousel.business-management-and-administration {     background-color: #638a0e; } .owl-carousel.cte {     background-color: #2362a1; } .owl-carousel.generic-other {     background-color: #006666; } .owl-carousel.history {     background-color: #006666; } .owl-carousel.human-services {     background-color: #960202; } .owl-carousel.information-technology {     background-color: #374278; } .owl-carousel.language-arts {     background-color: #833983; } .owl-carousel.math {     background-color: #2362a1; } .owl-carousel.music {     background-color: #c63d0f; } .owl-carousel.non-classroom-course {     background-color: #638a0e; } .owl-carousel.orientation {     background-color: #6b6b6b; } .owl-carousel.science {     background-color: #2e642c; } .owl-carousel.world-languages {     background-color: #374278; } .owl-wrapper-outer {     width: 1090px; } /* Change classcontent header font-size and color */ #k12_classContent > div {     font-size: 22px !important;     color: white !important;     padding-top: 26px !important; } .toc-block {     background: #ffffff;     /* background: #252525; */     border-radius: 10px !important;     color: #565a5c;         opacity: .6 !important;     margin: 10px;     min-height: 125px !important;         text-align: center; } .toc-block a {     color: #3069af;     display: inline-block;     font-size: 1em;     text-decoration: none; } .toc-block a .complete-badge {     background-color: #3d9a00;     border-radius: 50%;     color: #ffffff;     font-size: 1.5em !important;     height: 35px;     padding: 1px 0 0 2px !important;     position: absolute;     right: 0;     top: 0;     width: 35px;     z-index: 100 !important; } .toc-block a .image-block {     height: 60px !important;     width: 160px !important;     margin: 0px !important;     border-radius: 10px !important;     overflow: hidden; } .toc-block a .image-block.not-student {     height: 60px !important;     width: 160px !important;     /* margin: 0px !important; */     margin-top: 8px !important;     border-radius: 10px !important;     overflow: hidden; } .toc-block a .image-block img { margin-top: 4px; /* moves image down */     border: 0;     height: 100%;     width: 100%; } .toc-block a .text-block {     bottom: 24px !important;     font-weight: 700 !important;     color: #565a5c;     left: 10px;     position: absolute;     width: calc(100% - 20px); } .toc-block a .text-block.not-student {     bottom: 14px !important;     font-weight: 700 !important;     color: #565a5c;     left: 10px;     position: absolute;     width: calc(100% - 20px); } #statuscomplete { color: #3d9a00 !important; } .toc-block a .text-block .block-title {     height: 50px;     line-height: 42px;     /* padding: 10px 10px 0 10px; */     padding: 0 8px 0 8px !important; } .toc-block a .text-block .block-title p {     display: inline-block; !important;     color: #4e4e4e !important;     font-size: 16px !important;     vertical-align: middle !important;     line-height: normal;     height: unset !important;     /* Comes from multiplying font-size by line-height by number of lines plus a little something */     /* line-height: 1.3em; */     margin: 0px 0px 0px 0px !important;     overflow: hidden;      } .toc-block a .text-block .status {     border-top: 1px solid #e2e2e2;     color: #989898 !important;     font-size: 0.7em !important;     font-weight: bold;     /* height: 25px; */     height: 16px !important;     line-height: 0.4em !important;     padding: 13px 0 0 0 !important;     /* margin-top: 14px !important; */     margin-top: -8px !important;     text-align: center;     text-transform: uppercase; } .toc-block a .text-block .status.safari{     border-top: 1px solid #e2e2e2;     color: #989898 !important;     font-size: 0.7em !important;     font-weight: bold;     /* height: 25px; */     height: 16px !important;     line-height: 0.2em !important;     padding: 13px 0 0 0 !important;     /* margin-top: 14px !important; */     margin-top: -8px !important;     text-align: center;     text-transform: uppercase; } .toc-block a .text-block .status .progress-bar {     background-color: #cad1dd;     border-radius: 20px;     height: 10px;     margin: -3px auto !important;     overflow: hidden;     width: 90%; } .toc-block a .text-block .status .progress-bar div {     background: repeating-linear-gradient(45deg, #76bd22, #76bd22 10px, #8eca29 10px, #8eca29 20px);     height: 10px; } .toc-block a .card-overlay {     background-color: rgba(255, 255, 255, 0.9);     border-radius: 10px !important;     height: calc(100% - 20px);     left: 10px;     opacity: 0;     position: absolute;     top: 10px;     -webkit-transition: opacity 0.3s ease-out;     -moz-transition: opacity 0.3s ease-out;     -o-transition: opacity 0.3s ease-out;     transition: opacity 0.3s ease-out;     width: calc(100% - 20px); } .toc-block a .card-overlay .message {     color: #565a5c;     font-size: 22px !important;     opacity: 0;     position: relative;     text-align: center;     top: calc(50% - 40px);     -webkit-transition: opacity 0.3s 0.1s ease-out;     -moz-transition: opacity 0.3s 0.1s ease-out;     -o-transition: opacity 0.3s 0.1s ease-out;     transition: opacity 0.3s 0.1s ease-out; } .toc-block a .card-overlay .goto {     background-color: #0d9cd5;     border-radius: 8px;     color: #ffffff !important;     font-size: 16px !important;     font-weight: bold;     height: 40px !important;     line-height: 30px;     margin: 0 auto;     opacity: 0;     padding: 2px 25px 5px 18px !important;     position: relative;     text-align: center;     text-decoration: none !important;     text-transform: uppercase;     top: calc(50% - 32px);     /*Subtract half button height */     -webkit-transition: opacity 0.3s 0.2s ease-out;     -moz-transition: opacity 0.3s 0.2s ease-out;     -o-transition: opacity 0.3s 0.2s ease-out;     transition: opacity 0.3s 0.2s ease-out;     width: 145px !important; } .toc-block a .card-overlay .goto .icon {     color: #ffffff;     display: inline-block;     font-size: 1.4em;     line-height: 1.7em;     position: relative;     /* top: 1px; */     top: 2px;     vertical-align: middle;     width: 5px; } .toc-block a:hover {     text-decoration: none; } .toc-block a:hover .card-overlay {     opacity: 1.0; } .toc-block a:hover .card-overlay .goto {     opacity: 1.0; } .toc-block a:hover .card-overlay .message {     opacity: 1.0; } .owl-controls .owl-pagination {     text-align: center; } .owl-controls .owl-pagination .owl-page {     display: inline-block; } .owl-controls .owl-pagination .owl-page span {     background-color: #ffffff !important;     border-radius: 20px;     display: block;     height: 10px;     margin: 5px;     opacity: 0.25;     -webkit-transition: background-color 0.3s ease-out;     -moz-transition: background-color 0.3s ease-out;     -o-transition: background-color 0.3s ease-out;     transition: background-color 0.3s ease-out;     width: 10px; } .owl-controls .owl-pagination .owl-page:hover span {     background-color: #fff;     opacity: 1; } .owl-controls .owl-pagination .owl-page.active span {     background-color: #fff;     opacity: 1; } .owl-controls .owl-buttons div {     color: #ffffff;     display: inline-block;     font-size: 66px !important;     height: 60px;     line-height: 1.3em;     overflow: hidden;     position: absolute;     -webkit-transition: opacity 0.3s ease-out;     -moz-transition: opacity 0.3s ease-out;     -o-transition: opacity 0.3s ease-out;     transition: opacity 0.3s ease-out;     width: 50px;     zoom: 1; } .owl-controls .owl-buttons div:hover {     opacity: 1.0; } .owl-controls .owl-buttons .owl-prev {     top: 98px !important;     left: -6px !important; } .owl-prev.disabled { /* display: none !important; */ opacity: 0.5; pointer-events: none; } .owl-next.disabled { /* display: none !important; */ opacity: 0.5; pointer-events: none; } .owl-controls .owl-buttons .owl-next {     top: 98px !important;     right: 6px !important; } .daylight-notes-container {     color: #565a5c;     margin-top: -12px;     padding: 0 0 0 12px;     font-weight: 700; } .daylight-splitter {     font-weight: normal; } /* Class connect widget*/ .daylight-cc {     position: relative;     padding: 12px 12px 0 0;     min-width: 382px; } /* new daylight circle-plus icon for cc widget */ #cc-circle-plus {     /* background-image: url(https://cdevtc30-k12-widgets-svc.k12.com/k12-widgets-svc/resources/img/daylight_icons/plus-circle.png); */     display: inline-block;     margin: 0px 0 -6px 4px;     width: 24px;     height: 24px; } .circlebox { width: 20px; height: 20px; display: inline-block; line-height: 0; margin-left: 6px; } .cccircle { width: 100%; border-radius: 50%; text-align: center; font-size: 26px; padding: 50% 0; /* line-height: 0; */ /* position: static; */ background: #006ebf; color: white; font-family: Helvetica, Arial Black, sans; float: right; margin-top: 4px; } .cc-circle { position: relative;     bottom: -3px;     margin-left: 2px;     padding-top: 0px;     height: 20px;     width: 20px;     background-color: #006ebf;     border-radius: 50%;     display: inline-block; } .cc-plus {     font-size: 22px;     color: white;     position: absolute;     bottom: -3.9px;     left: 3.5px; } .cc-view-link { text-align: center; white-space: nowrap; } span#curvedarrow { float: right;     position: relative;     z-index: 22;     right: -22px;     top: 3px;     border-top: 12px solid transparent;     border-right: 12px solid #006ebf;     -webkit-transform: rotate(315deg);     -moz-transform: rotate(45deg);     -ms-transform: rotate(45deg);     -o-transform: rotate(45deg); } #curvedarrow:after {   content: '';   position: absolute;   border: 0 solid transparent;   border-top: 6px solid #006ebf;   border-radius: 20px 0 0 0;   top: -13px;   left: -7px;   width: 17px;   height: 7px;   -webkit-transform: rotate(45deg);   -moz-transform: rotate(45deg);   -ms-transform: rotate(45deg);   -o-transform: rotate(45deg); } span.cc-go-to-cc-icon { float: right; padding: 8px; margin-top: 4px; border-radius: 4px; border: 2px solid #006ebf; height: 18px; color: #006ebf; font-weight: bold; width: 18px; margin-right: 14px; } .cc-go-to-cc-icon:after { content: '';     display: block;     float: right;     position: relative;     width: 8px;     height: 8px;     top: -11px;     left: 15px;     border: 3px solid white;     background: white;     content: ''; } span.cc-live { /* border-radius: 6px;     border: 2.5px solid #e20000;     padding: 2px 6px 0px 2px;     color: #e20000;     font-weight: bold;     margin-left: 10px; */ } .cc-live img {     margin: 0px 2px -4px 4px; } .cc-session-row { margin: 10px !important; } .daylight-cc .cc-view-link {     text-align: right; } .daylight-cc .cc-view-link a {     cursor: pointer; } .daylight-cc .top-links { float: right; } .daylight-cc .top-links a { text-decoration: underline; font-weight: 300; } .daylight-cc .top-links a img { display: inline-block; margin: -4px 3px -4px 10px; } .daylight-cc .bottom-links {     padding: 0 12px; } .daylight-cc-sessions {     /* position: relative; */     margin-top: 28px; } /*.daylight-cc-sessions>.session:nth-child(odd){*/ /* background: #f9f9f9;*/ /*}*/ .daylight-cc-sessions.math>.session:nth-of-type(odd){ background: rgba(35, 98, 161, .2); } .daylight-cc-sessions.language-arts>.session:nth-of-type(odd){ background: rgba(131, 57, 131, .2); } .daylight-cc-sessions.science>.session:nth-of-type(odd){ background: rgba(46, 100, 44, .2); } .daylight-cc-sessions.art>.session:nth-of-type(odd){ background: rgba(152, 38, 64, .2); } .daylight-cc-sessions.business-management-and-administration>.session:nth-of-type(odd){ background: rgba(99, 138, 14, .2); } .daylight-cc-sessions.history>.session:nth-of-type(odd){ background: rgba(0, 102, 102, .2); } .daylight-cc-sessions.music>.session:nth-of-type(odd){ background: rgba(198, 61, 15, .2); } .daylight-cc-sessions.world-languages>.session:nth-of-type(odd){ background: rgba(55, 66, 120, .2); } .daylight-cc-sessions.information-technology>.session:nth-of-type(odd){ background: rgba(55, 66, 120, .2); } .daylight-cc-sessions.orientation>.session:nth-of-type(odd){ background: rgba(107, 107, 107, .2); } .daylight-cc-sessions.art-and-communications>.session:nth-of-type(odd){ background: rgba(51, 51, 51, .2); } .daylight-cc-sessions.cte>.session:nth-of-type(odd){ background: rgba(35, 98, 161, .2); } .daylight-cc-sessions.generic-other>.session:nth-of-type(odd){ background: rgba(0, 102, 102, .2); } .daylight-cc-sessions.human-services>.session:nth-of-type(odd){ background: rgba(150, 2, 2, .2); } .daylight-cc-sessions.non-classroom-course>.session:nth-of-type(odd){ background: rgba(99, 138, 14, .2); } .daylight-cc-sessions .title {     height: 35px;     white-space: nowrap;     overflow: hidden;     text-overflow: ellipsis;     padding: 0 47px 6px 12px;     display: inline;     text-decoration: underline !important; } .truncate { min-width: 0; flex: 1 !important;     overflow: hidden;     text-overflow: ellipsis; } .daylight-cc-sessions .time {     margin: 11px 2px 0 12px;     font-size: 96% !important;     right: 45px;     display: inline-block;  } .daylight-cc-sessions .info {     font-size: 1.4em;     display: inline-flex;     margin: 5px 8px 0px 2px;     top: -6px; } .daylight-cc-sessions .info-layer .time {     position: relative; } .daylight-cc-sessions .info .icon-info {     font-size: 1.5em; } .daylight-cc-sessions .info-layer {     position: relative; } .daylight-cc-sessions .hoverinfo {     background-color: #fff;     border-radius: 8px;     -webkit-box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.6);     -moz-box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.6);     box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.6);     margin: 0.5em 0 0 0;     display: none;     position: absolute;     right: -48px;     top: 0;     width: 315px;     z-index: 10; } .daylight-cc-sessions .hoverinfo.show-info-layer {     display: block; } .daylight-cc-sessions .hoverinfo .close-info-layer {     color: #b4b4b4;     cursor: pointer;     display: inline-block;     float: right;     height: 21px;     position: absolute;     right: 0px;     text-align: center;     top: 2px;     width: 21px;     z-index: 2; } .daylight-cc-sessions .hoverinfo .htitle {     background-color: #fff;     border-bottom: 1px solid #e5e5e5;     background-clip: padding-box;     border-radius: 4px 4px 0 0;     color: #000;     font-size: 1.3em !important;     font-weight: 600 !important;     line-height: 1.1 !important;     margin: 0 !important;     position: relative;     padding: 12px 15px; } .daylight-cc-sessions .session .hoverinfo .hbody {     line-height: 1.214em;     padding: 10px 13px 13px; } .daylight-cc-sessions .session .hbody a {     display: inline-block;     margin-top: 5px; } .daylight-cc-sessions .session .hbody .access-link-info:hover {     text-decoration: underline; } .daylight-cc-sessions .session {     display: flex;     padding: 4px 0;     position: relative; } div#sessions_completed { margin-top: -26px !important;     white-space: nowrap;     display: flex;     min-width: 148px; } .daylight-cc-sessions .later, .completed { margin: 4px 4px 4px 10px;     margin-bottom: 12px;     padding: 0 12px; } .daylight-cc-sessions .later { display: none !important; } .daylight-cc-sessions .message {     padding: 0px 12px;     /* display: none !important; */ } .daylight-cc .my-sessions {     cursor: pointer;     margin-right: 12px;     display: block;     text-overflow: ellipsis;     white-space: nowrap;     max-width: 25%; } .daylight-cc .my-sessions .session-list-change-name {     /* font-weight: 700; */     /* text-decoration: underline; */     color: #006ebf; } .cc-session-arrow { position: absolute;     margin-top: -2px;     font-size: 28px;         color: #AFB5BD; } .daylight-cc .my-session-students ul li {     padding: 12px 20px; } .daylight-cc .my-session-students ul li:hover {     background-color: #E1EBF5;         border: 1px solid #006FBF;; } .daylight-cc .my-session-students {     background: none repeat scroll 0 0 #fff;     border: 1px solid #AFB5BD;     border-radius: 6px;     box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.46);     display: none;     /* left: 12px; */     margin: 0px;     max-height: 215px;     overflow-y: auto;     position: absolute;     top: 2.2em;     left: 2em;     /* width: 235px; */     z-index: 2; } .daylight-cc .hiddencontent {     border: 0;     clip: rect(0 0 0 0);     height: 1px;     margin: -1px;     overflow: hidden;     padding: 0 12px;     position: absolute;     width: 1px; } .daylight-cc .my-sessions.my-session-focus {     /* background: #efefef; */ } .daylight-cc .my-sessions.my-session-focus .my-session-students {     display: block; } .daylight-cc .my-sessions:hover, .my-sessions:focus {     /* background: #efefef; */     border-radius: 2px; } .daylight-cc .my-sessions.cc-alert:hover {     color: #a94442; } .daylight-cc .cc-alert .my-session-students {     background: #f6ebeb;     padding: 14px 12px 13px;     width: 225px; } .daylight-cc .cc-alert .my-session-students ul, .daylight-cc .cc-alert .my-session-students li {     background: none;     border: none;     padding: 0; } .daylight-cc .cc-alert:hover .alert-icon {     display: inline-block; } .daylight-cc .my-sessions:hover .my-session-students.hide-sesion-list, .daylight-cc .my-sessions:hover .my-session-students.hide-sesion-list .my-session-students.hide-sesion-list {     display: none; } .daylight-cc .my-session-students li.error-message {     color: #a94442;     line-height: 1.214em; } .daylight-cc .my-sessions:hover .my-session-students {     display: block; } .daylight-cc-sessions .pop-up-layer {     padding: 0 10px 10px;     width: 330px;     position: absolute; } .daylight-cc-sessions .message-box-footer {     border-top: 1px solid #e2e2e2;     padding: 15px 0px 5px;     text-align: left;     width: 100%; } .daylight-cc-sessions .message-box-footer .retry-btn {     background: none repeat scroll 0 0 #006082;     border: medium none;     border-radius: 5px;     color: #fff;     cursor: pointer;     font-size: 1.000em;     height: 30px;     min-width: 60px; } .daylight-cc-sessions .message-box-footer .cancel-btn {     background: none repeat scroll 0 0 #fff;     border: 2px solid #ccc;     border-radius: 5px;     font-size: 1.000em;     height: 30px;     color: #00617f;     cursor: pointer; } .daylight-cc-sessions .k12-cc-recordings-list {     display: block;     overflow-y: auto;     max-height: 200px; } .daylight-cc-sessions.k12-cc-recordings-list li {     padding: 2px 0 5px; } /* Class progress widget */ #classprogress_wrapper * {     box-sizing: border-box; } #classprogress_wrapper {     overflow: auto;     padding-top: 15px; } #classprogress_wrapper p {     margin: 5px 0; } #classprogress_wrapper> div {     float: left; } #classprogress_wrapper> .daylight-loading-container {     height: 64px; } .my-teacher-section {     padding: 0 12px;     min-width: 30%;     width: 30%; } .my-grade-section {     border-left: 1px dotted #d3d9e3;     padding: 0 12px;     min-height: 65px;     min-width: 25%;     text-align: center;     width: 25%; } .my-progress-section {     border-left: 1px dotted #d3d9e3;     padding: 0 12px;     min-height: 65px;     min-width: 25%;     text-align: center;     width: 25%; } .my-progress-section a {     font-size: 1.1em; } p.section-title {     color: #6c7787;     font-size: 0.9em;     font-weight: normal; } p.section-value {     color: #565a5c;     font-size: 1.1em;     font-weight: normal; } .overdue-section {     border-left: 1px dotted #d3d9e3;     padding: 0 12px;     color: #cd2026 !important;     min-height: 65px;     min-width: 20%;     text-align: center;     width: 20%; } p.overdue-title {     color: #cd2026 !important;     font-size: 0.9em;     font-weight: normal; } a.overdue-value {     border: 2px solid #e81c24;     border-radius: 8px;     color: #e81c24 !important;     display: inline-block;     font-size: 1.1em;     margin: 0 !important;     padding: 2px 12px;     font-weight: bold;     text-decoration: none; } a.overdue-value:focus, a.overdue-value:active {     border: 2px solid #e81c24; } /* Reports summary widget */ #reportsummary_wrapper * {     box-sizing: border-box; } #reportsummary_wrapper {     overflow: auto;     padding-top: 15px; } #reportsummary_wrapper> div {     float: left; } #reportsummary_wrapper> .daylight-loading-container {     height: 142px; } .class-grade-section {     min-width: 70%;     padding: 0 7px;     text-align: center;     width: 70%; } .class-grade-section .chart {     display: inline-block;     vertical-align: bottom;     width: 100%; } .class-grade-section .chart .range {     display: inline-block;     height: 80px;     max-height: 80px;     min-width: 20%;     padding: 0 0.5em;     width: 20%; } .class-grade-section .chart .bar-value {     color: #565a5c;     font-size: 1.2em;     font-weight: bold;     line-height: 0.9em;     margin: 0.4em 0; } .class-grade-section .chart .bar {     border-radius: 4px; } .class-grade-section .chart .bar.low {     background-color: #ee4046; } .class-grade-section .chart .bar.medium {     background-color: #ffba59; } .class-grade-section .chart .bar.high {     background-color: #69be27; } .class-grade-section .chart .bar-range {     color: #565a5c;     font-size: 0.7em;     line-height: 0.9em;     margin: 0.8em 0; } .overdue-assignments-section {     border-left: 1px dotted #d3d9e3;     padding: 0 7px;     min-width: 30%;     text-align: center;     width: 30%; } .overdue-assignments-section .assignments-value {     color: #cd2026 !important;     font-size: 2em;     font-weight: bold;     margin: 0.5em 0 0.3em 0; } .overdue-assignments-section .section-footer {     color: #6c7787;     font-size: 1.1em;     font-weight: 300;     margin-top: 0;     text-transform: uppercase; } .widget_arrow_down { background-image: url(https://s.brightspace.com/lib/ilp/d2l/img/0/sprites/D2L.LP.Main.018146DBA2CCE7B7AD06AA64E846FA9D.png);     background-position: 0 -1158px;     background-repeat: no-repeat;     width: 16px;     height: 16px;     display: inline-block;     margin: 8px 3px 3px 16px;  } .widget_arrow_right { background-image: url(https://s.brightspace.com/lib/ilp/d2l/img/0/sprites/D2L.LP.Main.018146DBA2CCE7B7AD06AA64E846FA9D.png);     background-position: 0 -1078px;     background-repeat: no-repeat;     width: 16px;     height: 16px;     display: inline-block;     margin: 8px 3px 3px 16px;  } /* Class progress widget */ #daylight-classprogress_wrapper * {     box-sizing: border-box; } #daylight-classprogress_wrapper {     overflow: auto;     padding-bottom: 12px;     /*padding-bottom: 32px;*/     /* min-height: 146px; */ } #daylight-classprogress_wrapper p {     margin: 5px 0; } #daylight-classprogress_wrapper> div {     float: left; } #daylight-classprogress_wrapper> .ng-loading-container {     height: 64px; } .daylight-my-grade-section {     padding: 0 12px;     min-width: 25%;     text-align: center;     width: 25%;     padding-bottom: 1px; } .daylight-my-progress-section {     /* border-left: 2px dotted #d3d9e3; */     padding: 0 12px;     min-width: 25%;     text-align: center;     width: 25%; } .daylight-my-progress-section:before { border-left: 3px dotted #9aa9bf; /*height: 48%;*/ height: 60%; content: ''; position: absolute; /*top: 8px;*/ margin-left: -13%; } .daylight-my-progress-section a {     font-size: 1em; } .daylight-overdue-section {     /* border-left: 2px dotted #d3d9e3; */     /* padding: 0 12px; */     min-width: 20%;     text-align: center;     width: 20%; } .daylight-overdue-section:before { border-left: 3px dotted #9aa9bf;     /*height: 48%;*/     height: 60%;     content: '';     position: absolute;     /*top: 8px;*/     margin-left: -10%; } .daylight-my-teacher-section { /* border-left: 2px dotted #d3d9e3; */     /*padding: 0 12px;*/     min-width: 30%;     text-align: center;     width: 30%; } .daylight-my-teacher-section:before { border-left: 3px dotted #9aa9bf;     /*height: 48%;*/     height: 60%;     content: '';     position: absolute;     /*top: 8px;*/     margin-left: -15%; } .daylight-my-teacher-section .daylight-section-value { font-size: 1.2em !important; } p.daylight-section-title {     color: #6c7787;     font-size: 1em;     font-weight: bold;     padding-bottom: 2px; } p.daylight-section-title a { text-decoration: underline !important; } p.daylight-section-value {     color: #565a5c;     font-size: 2.0em;     font-weight: normal;     display: inline; } p.daylight-small-section-value {     color: #565a5c;     font-size: 1.0em;     font-weight: normal;     display: inline;     vertical-align: top; } p.daylight-contact-teacher { font-size: 0.8em; }  p.spacer-height { height: 10px; } p.spacer-height a { text-decoration: underline !important; } #quicklinks_wrapper { margin-top: 10px !important; } /* late-starting students widget styles */ #k12-late-starting-students .daylight-header {     display: inline-block;     padding: 0 0 8px 0; } #k12-lss-info-button {     display: inline;     position: relative;     font-size: 22px; } .close-lss-info-layer:focus {     box-shadow: 0 0px 3px 1px #006FBF;     border: 1px solid #fff5ed; } #k12-lss-info-button:focus {     border: #007db5 1px solid; } .k12-lss-grace-period-increment-down-button:focus{     box-shadow: 0 0px 3px 1px #006FBF;     border: 1px solid #fff5ed; } .k12-lss-grace-period-increment-up-button:focus{     box-shadow: 0 0px 3px 1px #006FBF;     border: 1px solid #fff5ed; } .k12-lss-save-button:focus {     box-shadow: 0 0px 3px 1px #006FBF;     border: 1px solid #fff5ed; } .k12-lss-cancel-button:focus {     box-shadow: 0 0px 3px 1px #006FBF;     border: 1px solid #fff5ed; } #k12-lss-auto-adjust-on:focus {     box-shadow: 0 0px 3px 1px #006FBF;     border: 1px solid #fff5ed; } #k12-lss-auto-adjust-off:focus {     box-shadow: 0 0px 3px 1px #006FBF;     border: 1px solid #fff5ed; } #k12-lss-edit-div {     display: inline; } #k12-lss-edit-icon {     display: inline;     position: relative;     font-size: 20px;     top: 10px; } #k12-lss-edit-text {     font-size: 18px;     position: relative;     text-decoration: underline; } .modal-window {     display:none;     position: fixed;     background-color: rgba(200, 200, 200, 0.75);     top: 0;     right: 0;     bottom: 0;     left: 0;     z-index: 999;     opacity: 1; } .modal-window:target {     opacity: 1; } .modal-window>div {     width: 400px;     position: relative;     margin: 10% auto;     padding: 2rem;     background: #fff;     color: #444; } .modal-window header {     font-weight: bold; } .k12-lss-modal-window {     display: none;     position: fixed;     background-color: rgba(200, 200, 200, 0.75);     top: 0;     right: 0;     bottom: 0;     left: 0;     z-index: 999;     opacity: 1; } .k12-lss-modal-window > div {     width: 460px;     position: relative;     margin: 10% auto;     background: #fff;     color: #444; } .k12-lss-inner-modal-div {     background: #fff;     border-radius: 8px;     box-shadow: 0 2px 4px 0;     border: solid 1px #BDBDBD; } .k12-lss-modal-header {     display: inline-block;     padding: 18px 12px 12px;     font-weight: 700;     font-size: 17px;     font-family: Lato, serif;     color: #55595C; } .k12.lss-modal-header h2 {     display: inline; } .k12.lss-modal-header span {     display: inline; } hr.k12-lss-modal-divider {     border-top: 1px solid #D3D9E3;     margin: 0; } .k12-lss-modal-info-settings-block {     margin: 12px 12px;     font-family: Lato;     font-size: 16px; } .k12-lss-widget-info-line {     padding: 0 0 8px 0; } .k12-lss-modal-info-settings-block > input {     -ms-transform: scale(1.5); /* IE 9 */     -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */     transform: scale(1.5); } .k12-lss-modal-auto-adjust, .k12-lss-modal-grace-period-text {     font-weight: bold;     margin-bottom: 4px; } .close-lss-info-layer {     color: #000;     line-height: 50px;     /*font-size: 80%;*/     position: absolute;     right: 0;     text-align: center;     top: 2px;     width: 42px;     cursor: pointer;     text-decoration: none;     font-size: 16px; } .modal-close:hover {     color: #000; } .k12-lss-modal-info-blurb {     font-family: lato;     font-size: 16px;     line-height: 18px;     font-weight: 400; } .modal-window h1 {     font-size: 150%;     margin: 0 0 15px; } .k12-lss-button-container {     text-align: center; } .k12-lss-grace-period-incrementation-div {     display: inline-block;     border-radius: 8px;     cursor: pointer; } .k12-lss-grace-period-incrementation-div input {     height: 40px;     width: 40px;     display: inline-block;     border: solid 1px #BDBDBD; } .k12-lss-grace-period-increment-down-button {     width: 40px;     height: 40px;     border-top-left-radius: 8px;     border-bottom-left-radius: 8px;     display:inline-block;     float:left;     text-align: center;     line-height: 30px;     font-size: 55px;     color: #006FBF;     background-color: #fafbff;     border: solid 1px #e7eaf0; } .k12-lss-grace-period-increment-down-button::selection {     background: none; } .k12-lss-grace-period-increment-up-button {     width: 40px;     height: 40px;     border-top-right-radius: 8px;     border-bottom-right-radius: 8px;     display:inline-block;     float:right;     text-align: center;     padding: 4px;     font-size: 30px;     color: #006FBF;     background-color: #fafbff;     border: solid 1px #e7eaf0; } .k12-lss-grace-period-incrementation-div > input::-webkit-outer-spin-button, .k12-lss-grace-period-incrementation-div > input::-webkit-inner-spin-button {     -webkit-appearance: none;     margin: 0; } .k12-lss-grace-period-incrementation-div > input[type=number] {     -moz-appearance: textfield; } .k12-lss-grace-period-incrementation-div > input {     text-align: center;     font-family: Lato;     font-size: 16px; } input#k12-lss-grace-period-input-field:invalid {     border: red 2px solid; } input#k12-lss-grace-period-input-field:valid {     border: solid 1px #BDBDBD; } #k12-lss-auto-adjust-on {     margin-right: 6px; } #k12-lss-auto-adjust-off {     margin-left: 24px;     margin-right: 6px; } .k12-lss-save-button {     width: 106px;     height: 40px;     border-radius: 5px;     box-shadow: none;     margin: 19px 10px;     border: 1px solid #005694;     background-color: #006FC0;     color: #FFFFFF;     cursor: pointer;     font-size: 15px;     font-weight: 700; } .k12-lss-save-button.disabled {     opacity: 0.4;     pointer-events: none;     cursor: default; } .k12-lss-cancel-button {     width: 106px;     height: 40px;     border-radius: 5px;     box-shadow: none;     margin: 19px 10px;     border: 1px solid #CDD5DD;     background-color: #F9FBFF;     color: #494C4E;     cursor: pointer;     font-size: 15px;     font-weight: 700; } .k12-lss-modal-inactive-state {     opacity: 0.4;     pointer-events: none;     cursor: default; } .disable-text-select {     user-select: none; /* supported by Chrome and Opera */     -webkit-user-select: none; /* Safari */     -khtml-user-select: none; /* Konqueror HTML */     -moz-user-select: none; /* Firefox */     -ms-user-select: none; /* Internet Explorer/Edge */ } @media only screen and (max-width: 600px) {     .k12-lss-modal-window > div {         width: 370px;     } } .toc-block a:focus {     text-decoration: none; } .toc-block a:focus .card-overlay {     opacity: 1.0; } .toc-block a:focus .card-overlay .goto {     opacity: 1.0; } .toc-block a:focus .card-overlay .message {      opacity: 1.0; } ";
        var font = "@charset 'UTF-8'; @font-face {font-family: 'ng-icons'; src:url('https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/fonts/ng-icons.eot'); src:url('https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/fonts/ng-icons.eot?#iefix') format('embedded-opentype'), url('https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/fonts/ng-icons.woff') format('woff'), url('https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/fonts/ng-icons.ttf') format('truetype'), url('https://k12-widgets-svc.k12.com/k12-widgets-svc/resources/fonts/ng-icons.svg#ng-icons') format('svg'); font-weight: normal; font-style: normal;  }  [data-icon]:before {   font-family: 'ng-icons' !important;   content: attr(data-icon);   font-style: normal !important;   font-weight: normal !important;   font-variant: normal !important;   text-transform: none !important;   speak: none;   line-height: 1;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }  [class^='icon-']:before, [class*=' icon-']:before {   font-family: 'ng-icons' !important;   font-style: normal !important;   font-weight: normal !important;   font-variant: normal !important;   text-transform: none !important;   speak: none;   line-height: 1;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }  .icon-news:before {   content: '\\61'; } .icon-arrow-down:before {   content: '\\62'; } .icon-k12:before {   content: '\\63'; } .icon-arrow-left:before {   content: '\\65'; } .icon-link:before {   content: '\\66'; } .icon-next-two-days:before {   content: '\\67'; } .icon-arrow-right:before {   content: '\\68'; } .icon-arrow-up:before {   content: '\\69'; } .icon-overdue:before {   content: '\\6a'; } .icon-popup:before {   content: '\\6b'; } .icon-bullet:before {   content: '\\6c'; } .icon-camera:before {   content: '\\6d'; } .icon-schedule:before {   content: '\\6e'; } .icon-check:before {   content: '\\70'; } .icon-classes:before {   content: '\\72'; } .icon-compose:before {   content: '\\73'; } .icon-dotted-vr:before {   content: '\\74'; } .icon-half:before {   content: '\\75'; } .icon-logout:before {   content: '\\6f'; } .icon-fueled:before {   content: '\\77'; } .icon-timer:before {   content: '\\78'; } .icon-mail:before {   content: '\\64'; } .icon-bell:before {   content: '\\79'; } .icon-dropbox:before {   content: '\\7a'; } .icon-discussions:before {   content: '\\41'; } .icon-gear:before {   content: '\\42'; } .icon-chat:before {   content: '\\44'; } .icon-close:before {   content: '\\45'; } .icon-play:before {   content: '\\46'; } .icon-check2:before {   content: '\\47'; } .icon-home:before {   content: '\\76'; } .icon-controls:before {   content: '\\43'; } .icon-more:before {   content: '\\48'; } .icon-dragger:before {   content: '\\49'; } .icon-bookmark:before {   content: '\\4a'; } .icon-dropdown:before {   content: '\\4b'; } .icon-print:before {   content: '\\4c'; } .icon-schedule2:before {   content: '\\4d'; } .icon-syllabus:before {   content: '\\4e'; } .icon-search:before {   content: '\\4f'; } .icon-plus:before {content: '\\50'; } .icon-edit:before {content: '\\71'; } .icon-today:before {content: '\\51'; } .icon-info:before {content: '\\52'; }";

        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = font + css;
        } else {
            style.appendChild(document.createTextNode(font + css));
        }
        head.appendChild(style);
    }
    ns.k12Styles();
}

if(!ns.widgetsBaseURL) {
    ns.widgetsBaseURL = "https://k12-widgets-svc.k12.com/k12-widgets-svc";
}
if(!ns.checkArray) {
    ns.checkArray = (function () {
          if (Array.isArray) {
              return Array.isArray;
          }
          var objectToStringFn = Object.prototype.toString,
              arrayToStringResult = objectToStringFn.call([]);

          return function (subject) {
              return objectToStringFn.call(subject) === arrayToStringResult;
          };
    }());
}

var popUpPosition = function(parent, child) {
    var parent = $(parent);
    var child = $(child);
    child.removeAttr('style');
    var childTop = child.css('top');
    var scrollTopWindow = $(window).scrollTop();
    if(scrollTopWindow > 0) {
        childTop = parseInt(childTop) + scrollTopWindow;
    }
    child.css({
        'left': (parseInt(parent.outerWidth())/2 - parseInt(child.outerWidth())/2) ,
        'top': childTop
    });
};

if (!ns.handlingErrors) {
    ns.handlingErrors = function(container)
    {
        var containerLocation = document.getElementById(container);
        if (containerLocation)
        containerLocation.innerHTML = '<span>Sorry, this feature is not available for you</span>';
    }
}

if (!ns.ajaxRequest) {
    /**
    * url - link to the call,
    * callback - callback function
    * error callback function if exists it calls it if not the error handler will do the job by default
    * container - widget container ID for handling errors
    **/
    ns.ajaxRequest = function(url, callback, errorCallback, container, authToken) {
        var oReq;
        if (window.XMLHttpRequest)
            oReq = new XMLHttpRequest();
        else if (window.XDomainRequest)
           oReq = new XDomainRequest();

        if (oReq) {
            oReq.onload = function() {
                if(typeof callback == 'function')
                {
                    callback(this.status, this.responseText)
                }
            }
            oReq.open("get", url, true);
            oReq.onerror = function() {
                if(typeof errorCallback == 'function')
                {
                    errorCallback();
                    return;
                }
                ns.handlingErrors(container);
            }
            oReq.withCredentials = true;
            if(authToken) {
            	oReq.setRequestHeader('authToken', authToken);
            }
            oReq.send();
        }
    }
}

if(!ns.RefreshPfKeyCode) {
    ns.RefreshPfKeyCode = function() {
        if(ns.widgetsBaseURL) {
            var url = ns.widgetsBaseURL + '/keep-alive';
            var refreshPfKeyCodeError = function() {
                setTimeout(ns.RefreshPfKeyCode, 30000);
            };
            var refreshPfKeyCodeCallback = function(status, response) {
                if(status == 200) {
                    setTimeout(ns.RefreshPfKeyCode, 7200000);
                } else {
                    refreshPfKeyCodeError();
                }
            };
            ns.ajaxRequest(url, refreshPfKeyCodeCallback, refreshPfKeyCodeError, '');
        }
    };
    ns.RefreshPfKeyCode();
}

var _hasClass = function(el, className) {
    if(!className) return false;
    if(el.classList){
        return el.classList.contains(className);
    } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
};

var _addClass = function(el, className) {
    if(!className) return;
    if(el.classList){
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};

var _removeClass = function(el, className) {
    if(!className) return;
    if(el.classList){
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

var extendDefaults = function(source, properties) {
    var property;
    for (property in properties) {
        if (properties.hasOwnProperty(property)) {
            source[property] = properties[property];
        }
    }
    return source;
}

var slideDown = function(elem) {
    elem.style.maxHeight = '2000px';
    elem.style.opacity   = '1';
};

var template = function (str, data){
    for(var placeholder in data){
        str = str.replace(new RegExp('{' + placeholder + '}','g'), data[placeholder]);
    }
    str = str.replace(new RegExp('<li><a href= \'\'[^>]*>[^<\s]+</a></li>','g'), '');
    return str;
};

/**
  * Modal dialogs utils
  */

if (!ns.createModal) {
    ns.createModal = function (options) {
        var modalString =
            '<div id="' + options.modalId + '" class="daylight-modal-overlay" tabindex="1">' +
                '<div class="daylight-modal">' +
                    '<h4 class="daylight-modal-header">' + options.modalTitle + '<span class="icon icon-close daylight-caret daylight-modal-close" title="Close modal" aria-label="Close modal"></span></h4>' +
                    '<div class="daylight-modal-content">' + options.modalContent + '</div>' +
                    ((options.modalFooter) ? '<div class="daylight-modal-footer">' + options.modalFooter + '</div>' : '') +
                '</div>' +
            '</div>';

        ns.poll(
            function() {
                return (window.jQuery) ? true : false;
            },
            function() {
                $('#' + options.modalParentId).append(modalString);
                $('.daylight-modal-close').click(function(e) {
                    e.stopPropagation();
                    ns.destroyModal(options.modalId);
                });
                $('#' + options.modalId).click(function(e) {
                    e.stopPropagation();
                    if (e.target.id === options.modalId) {
                        ns.destroyModal(options.modalId);
                    }
                });
            },
            function() {
                // TODO handle poll timeout
            }
        );
    }
}

if (!ns.destroyModal) {
    ns.destroyModal = function (modalId) {
        $('#' + modalId).remove();
    };
}

/**
  * Polling utils
  */

if (!ns.poll) {
    ns.poll = function (fn, success, error, timeout, interval) {
        var endTime = Number(new Date()) + (timeout || 60000);
        interval = interval || 500;

        (function p() {
            if(fn()) { // If the condition is met, we're done!
                success();
            }
            else if (Number(new Date()) < endTime) { // If the condition isn't met but the timeout hasn't elapsed, go again
                setTimeout(p, interval);
            }
            else { // Didn't match and too much time, reject!
                error();
                //error(new Error('Timed out for ' + fn + ': ' + arguments));
            }
        })();
    }
}

/**
* Show message in targetElementId
*/

if (!ns.showMessage) {
    ns.showMessage = function(targetElementId, message) {
        var defaultMessage = 'Sorry, there was an error loading data. Please try again.',
          msg = message ? message : defaultMessage,
          $msgElement = $('<div class="class-content-timeout-message daylight-error"><div><span>' + msg + '</span></div></div>'),
        $target = $('#' + targetElementId);
        if ($target.length !== 0) {
          $target.empty().append($msgElement);
        }
    }
}

/**
* call ns.showMessage() after timeout if spinner still visible
*/

if (!ns.cleanupSpinnerIfUnresponsive) {

  ns.cleanupSpinnerIfUnresponsive = function(targetElementId, time, message) {

    setTimeout(function() {
      if ($('#' + targetElementId + ' .daylight-loading-container').length !== 0) {
        ns.showMessage(targetElementId, message);
      }
    }, time);
  }

}

/**
  * Cookie utils
  */

function getCookie(cname) {
    var name = cname + "=";
    var array = document.cookie.split(';');
    var c;
    for(var i = 0; i < array.length; i++) {
        c = array[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
};

function setCookie(cname, cvalue, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires="+ date.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
};

/**
  * Expand/Collapse widget functionality (TO BE DISABLED FOR DAYLIGHT)
  */

var _widgetStates = {
    expanded: 'expanded',
    collapsed: 'collapsed'
};

if (!ns.checkWidgetState) {
    ns.checkWidgetState = function(widget) {
        var widgetState = getCookie(widget) || _widgetStates.expanded;
        if (widgetState != _widgetStates.expanded) {
            _addClass(document.getElementById(widget), 'daylight-hidden');
            _addClass(document.getElementById(widget + '-collapse'), 'daylight-hidden');
            _removeClass(document.getElementById(widget + '-expand'), 'daylight-hidden');
            setCookie(widget, 'collapsed', 365);
        }
    };
}

if (!ns.expandCollapseWidget) {
    ns.expandCollapseWidget = function(widget) {
        var widgetState = getCookie(widget) || _widgetStates.expanded;
        if (widgetState == _widgetStates.expanded) {
            _addClass(document.getElementById(widget), 'daylight-hidden');
            _addClass(document.getElementById(widget + '-collapse'), 'daylight-hidden');
            _removeClass(document.getElementById(widget + '-expand'), 'daylight-hidden');
            setCookie(widget, 'collapsed', 365);
        } else {
            _removeClass(document.getElementById(widget), 'daylight-hidden');
            _removeClass(document.getElementById(widget + '-collapse'), 'daylight-hidden');
            _addClass(document.getElementById(widget + '-expand'), 'daylight-hidden');
            setCookie(widget, 'expanded', 365);
        }
    };
}

  var links_cc = {
    // links
    ViewAllSessions : 'https://security-gateway.k12.com/security-gateway/urltranslate?urlID=6&GUID=6810b94a-ef0b-4995-baf9-e6810ef627d8&destination=classconnect',
    CreateSession : 'https://security-gateway.k12.com/security-gateway/urltranslate?urlID=14&GUID=feb06ab3-8520-46f7-b814-70a2a64559a5&destination=createSession',

    targetWidget : "Today's Class Connect Sessions",
    targetWrapper : 'cc_wrapper'
  }

  var classConnectAccess = 'true';
  var ccSessions = [],
  viewAll = false,
  pfKeyCode = "P90929C9M98989E97-N9F9W-893-U91-L-E9C9I9H9C9F9M9F9L-U9J-G9L-9---3-4-M9B929I9I9".toString(),
  infoLayerVisible = false,
  following = [],
  oldSessions = [],
  activeSessionNow = [], //see what session is active now
  passed = 0,
  startingLater = 0,
  studentsObject = [];

  ns.toggleViewAll = function() {
    viewAll = !viewAll;
    	$('#k12CCViewAll').html((!viewAll) ? 'Show All Sessions (' + ccSessions.length + ')' : 'Show Current Sessions');
    $('#sessions_completed, #starting_later').css('visibility', (viewAll) ? 'hidden' : 'visible');
    var elements = $('.session', '#cc_sessions');
     elements.each(function(index){
     		if((viewAll || (index >= passed && index < (passed+4)))){
                $(this).slideDown(500, function() {
                	$(this).css('display', 'flex');
                });
            }else{
                //$(this).hide();
                $(this).slideUp(500, function() {
                	$(this).hide();
                });                
            }
    });
  }
  
    function getInitialCourseDiscipline(courseName) {
    	disciplineClass = "";
    	if(courseName.includes("MTH" || "Math")) { 
    		disciplineClass = 'math' ;
    	} else if(courseName.includes("ENG" || "LangArts" || "LanguageArts")) {
    		disciplineClass = 'language-arts'; 
    	} else if(courseName.includes("SCI" || "Science")) {
    		disciplineClass = 'science';
    	} else if(courseName.includes("ART" || "Art")) {
    		disciplineClass = 'art';
    	} else if(courseName.includes("BUS" || "BusComm")) {
    		disciplineClass = 'business-management-and-administration';
    	} else if(courseName.includes("HST" || "History" || "Humanities")) {
    		disciplineClass = 'history';
    	} else if(courseName.includes("MUS" || "Music")) {
    		disciplineClass = 'music';
    	} else if(courseName.includes("WLG" || "Spanish")) {
    		disciplineClass = 'world-languages';
    	} else if(courseName.includes("TCH" || "Computer")) {
    		disciplineClass = 'information-technology';
    	} else disciplineClass = 'orientation';
    	return disciplineClass;
    }

function updateSessionList(sessions) {
  passed = 0;
  startingLater = 0;
  following = [];
  oldSessions = [];
  activeSessionNow = [];
  if (sessions && sessions.length>0) {
      var now = new Date();
      now = now.getTime();
      for (var i=0; i < sessions.length; i++) {
          occurrence = sessions[i];
          if (occurrence.endDate.time < now) {
              passed++;
              oldSessions.push(occurrence);
          } else {
             activeSessionNow.push( (now>= occurrence.startDate.time && now < occurrence.endDate.time) ? 'selected' : 'none ');
             following.push(occurrence);
          }
      }
  }
}
updateSessionList(ccSessions);

function processCCSessions(sessions, studentId) {
    if(typeof studentId == undefined)
    {
        studentId = null;
    }
    var ccSessionsElement = document.getElementById("cc_sessions");
    
    var finalHTML = '';
    if(sessions.error)
    {
            ccSessionsElement.innerHTML = "<div class='message'><span class='icon icon-overdue'></span> Sorry, there was a problem getting your sessions for today. We\'ll try again in a few minutes.</div>";

    }else if (sessions && sessions.length>0) {
        var occurrence,pastSessions;

        if (passed>0) {
            finalHTML+= "<div class='completed' id='sessions_completed'>"+passed+" session"+ (passed>1 ? "s" : "") + " ended</div>";

            for( var j = 0; j < oldSessions.length; j++)
             {
               pastSessions = oldSessions[j];
               finalHTML+=  "<div class='session daylight-hidden'>"+
                    "<p class='cc-session-row truncate'><a class='title'  id='old_parent_link_"+ j + "' title='Select to open "+pastSessions.title+"' aria-label='Select to open "+pastSessions.title+"' href='javascript:void(0)' onClick='daylight_k12.widgets.openSession("+pastSessions.sessionId+", "+pastSessions.occurrenceId+", "+studentId+", \""+pfKeyCode+"\",  \"old_parent_link_" + j +"\")'>"+(pastSessions.participantOptional == false ? 'REQUIRED: ' : 'OPTIONAL: ')+pastSessions.title+"</a>"+                   	
                    	
                    "</span></p>"+
                    "<span class='time'>"+   (pastSessions.startDate.completeFormattedDate).replace(/^0+/, '')+" - "+(pastSessions.endDate.completeFormattedDate).replace(/^0+/, '')+
                    	"<div class='info-layer'>"+
                    		"<div class='hoverinfo' id='old_info_layer_"+j+"'>" +
                    			"<div class='htitle'>"+pastSessions.title+" <a class='close-info-layer' title='Select to close ' aria-label='Select to close ' href='javascript:void(0)'  onclick='$(\"#old_info_layer_"+j+"\").hide(); $(\"#old_info_"+j+"\").focus();'>x</a></div>"+
                    			"<div class='hbody'><div class='daylight-bold'>"+ (pastSessions.startDate.completeFormattedDate).replace(/^0+/, '')+" - "+(pastSessions.endDate.completeFormattedDate).replace(/^0+/, '')+"</div>"+
                    			"<div>Teacher: "+pastSessions.teacherModerator+"</div>" +
                  				
                  				"<a title='Select to open Access Session' aria-label='Select to open Access Session' href='javascript:void(0)'  onClick='daylight_k12.widgets.openSession("+pastSessions.sessionId+", "+pastSessions.occurrenceId+", "+studentId+", \""+pfKeyCode+"\",  \"old_parent_link_" + j +"\");$(\"#old_info_layer_"+j+"\").hide();$(\"#old_info_"+j+"\").focus();'>Access Session</a></div>"+                  				
               				"</div>"+
               		  "</div></span>"+
               		  "<a class='info' title='Select to open ' aria-label='Select to open ' href='javascript:void(0)' id='old_info_"+j+"' onClick='daylight_k12.widgets.showInfoLayer(\"old_info_"+j+"\", \"old_info_layer_"+j+"\", \"old_info_layer_bottom_"+j+"\")'><span class='icon icon-info' title='Show info' aria-label='show info'></span></a>"+               	
               	"</div>";

             }
         }
       if(following.length > 0)
       {
            for (i=0; i<following.length; i++) {
                occurrence = following[i];
                finalHTML+=
                    "<div class='"+(i>3 ? "daylight-hidden" : "")+" session"+((activeSessionNow[i] == "selected") ? " selected" : "")+"'>"+
                         "<p class='cc-session-row truncate'><a class='title'  id='parent_link_"+ i + "' title='Select to open "+occurrence.title+"' aria-label='Select to open "+occurrence.title+"' href='javascript:void(0)' onClick='daylight_k12.widgets.openSession( "+occurrence.sessionId+", "+occurrence.occurrenceId+", "+studentId+", \""+pfKeyCode+"\", \"parent_link_" + i +"\")'>"+(occurrence.participantOptional == false ? 'REQUIRED: ' : 'OPTIONAL: ')+occurrence.title+"</a>"+                        	
                         "</span></p>"+
                         "<span class='time'>"+ (occurrence.startDate.completeFormattedDate).replace(/^0+/, '')+" - "+(occurrence.endDate.completeFormattedDate).replace(/^0+/, '')+
                         "<span class='cc-live'" + ((activeSessionNow[i] == "selected") ? "" : "style='display:none;'") + ">" +
                         	"<img src='" + ns.widgetsBaseURL + "/resources/img/daylight_icons/live-icon-redux.svg'>" + 
                         "</span>"+
                         	"<div class='info-layer'>"+
                         		"<div class='hoverinfo' id='info_layer_"+i+"'>"+
                                 "<div class='htitle'>"+occurrence.title+" <a class='close-info-layer' title='Select to close ' aria-label='Select to close ' href='javascript:void(0)' onclick='$(\"#info_layer_"+i+"\").hide();$(\"#info_"+i+"\").focus();'><span class='icon icon-close daylight-caret' title='Close modal' aria-label='Close modal'></span></a></div>"+
                                 "<div class='hbody'><div class='daylight-bold'>"+ (occurrence.startDate.completeFormattedDate).replace(/^0+/, '')+" - "+(occurrence.endDate.completeFormattedDate).replace(/^0+/, '')+"</div>"+
                                 "<div>Teacher: "+occurrence.teacherModerator+"</div>" +
                                 "<a title='Select to open Access Session' aria-label='Select to open Access Session' href='javascript:void(0)' onClick='daylight_k12.widgets.openSession( "+occurrence.sessionId+", "+occurrence.occurrenceId+", "+studentId+", \""+pfKeyCode+"\", \"parent_link_" + i +"\");$(\"#info_layer_"+i+"\").hide();$(\"#info_"+i+"\").focus();'>Access Session</a></div>"+
                                 "<span id='info_layer_bottom_"+i+"' tabindex='0'></span>"+
                                 "</div>"+                                 
                             	"</div></span>"+
                        "<a class='info' title='Select to open ' aria-label='Select to open ' href='javascript:void(0)' id='info_"+i+"' onclick='daylight_k12.widgets.showInfoLayer(\"info_"+i+"\", \"info_layer_"+i+"\", \"info_layer_bottom_"+i+"\")' role='button'><span class='icon icon-info' title='Show info' aria-label='show info'></span></a>"+
                    "</div>";

            }

        }
        if(following.length > 4)
        {
            startingLater = following.length - 4;
            finalHTML+= "<div id='starting_later' class='later'>"+startingLater+" Starting Later</div>";
        }
        else if(passed > 0 && following.length == 0)
        {
            finalHTML+= "<div class='message'>No more sessions for today</div>";
        }
//        finalHTML += "<div id='k12_loader' class='daylight-k12-loader' tabindex='0'><img src='https://k12functest.brightspace.com/d2l/img/lp/mobile/loading.gif' /></div>";

        ccSessionsElement.innerHTML = finalHTML;
    }
     else {		
        ccSessionsElement.innerHTML = "<div class='message'>There are no sessions planned for today</div>" ;        
    }

  }


    // View all Sessions
    // Create New Session

    
    var headerString = "<h2 class='daylight-header'>{targetWidget}" +	
"</h2>"

;
    var templateString = template(
    		// Widget header
	        headerString +
	        // Widget container
	        "<div id='{targetWrapper}' class='daylight-widget-wrapper'>" +
	        	"<div class='daylight-cc'>" +
	        		"<span class='top-links'><a href= '{ViewAllSessions}' title='Select to open Go to Class Connect' aria-label='Select to open Go to Class Connect' target='_blank'>Go to Class Connect"+
	        			"<img src='" + ns.widgetsBaseURL + "/resources/img/daylight_icons/open-new-window.svg'></a>" + 
	        		"</span>"+

	                "<div id='cc_sessions' class='daylight-cc-sessions'></div>" +	                
	            "</div>" +
	        "<div class='cc-view-link'>" +
	        	(((ccSessions.length - passed)>4 || passed > 0) ? "<a  title='Select to open View All' aria-label='Select to open View All' id='k12CCViewAll' onclick='daylight_k12.widgets.toggleViewAll()'>Show All Sessions (" + ccSessions.length + ")</a>" : "") +
            "</div>" +
	    "</div>", links_cc);



    setTimeout(function(){
        if(classConnectAccess == 'false')
        {
            ClassConnectContainer.innerHTML = template('<span style="color: #353535; padding: 0 10px; ">Sorry, this feature is not available for you</span>');
        }
        else
        {
          ClassConnectContainer.innerHTML = templateString;          
          processCCSessions(ccSessions, null);          
          $('#cc_sessions').addClass(getInitialCourseDiscipline(window.k12_orgunitname));
        }
        ns.checkWidgetState(links_cc.targetWrapper);
          slideDown(ClassConnectContainer);
          setTimeout(function() {
            ClassConnectContainer.parentElement.style.overflow = 'visible';
          }, 1000);

    }, 500);

if (!ns.openSession) {
    var callInProgress = false;
    ns.openSession = function(sessionId, sessionOccurrenceId, studentId, keyCode, currentElement) {
        var params = { baseUrl:ns.widgetsBaseURL, keyCode : keyCode, sessionId : sessionId, sessionOccurrenceId :  sessionOccurrenceId, studentId : studentId},
        urlSessions = ns.widgetsBaseURL + '/class-connect/sessions/' + sessionId + '/occurrences/' + sessionOccurrenceId + '/url';
        if(currentElement) {
            params.currentElement = currentElement;
        }
        if($("cc-session-modal").length) {
            ns.destroyModal("cc-session-modal");
        }
        if(studentId != null) {
          urlSessions = ns.widgetsBaseURL + '/class-connect/sessions/' + sessionId + '/occurrences/' + sessionOccurrenceId + '/url?userId='+ studentId;
        }
        loader = $('#k12_loader');
        bigParent = $('.d2l-home');
        popUpPosition(bigParent, loader);
        if(callInProgress) { return; }
        callInProgress = true;
        loader.show();
        loader.focus();
        var timeNow = new Date().getTime();
        ns.ajaxRequest(urlSessions, callbackSession,errorCallSession, 'k12_classConnect');
        function errorCallSession() {
            loader.hide();
            var data = {
                showRetry: true,
                ccSessionValidationMsg: 'There was an error getting your session'
             }
             openSessionCallback(data, params);
        }

        function callbackSession(status, responseText) {
            var error = false;
            try {
                var data = responseText ? JSON.parse(responseText) : JSON.parse(this.response);
            } catch (err) {
                error = true;
            }
            if(!error) {
                loader.hide();
                openSessionCallback(data, params);
            }
        }
    }

    function openSessionCallback(data, params) {
        callInProgress=false;
        var modalIcon = "<span class='icon icon-flag'></span> ";
        if(data.validSession == false || data.showRetry == true) {
            data.sessionName = data.sessionName || 'Class Connect Session';
            var modalOptions = ns.processSessionModal({
                type:'alert',
                alertMsg:data.ccSessionValidationMsg,
                retryBtn : data.showRetry,
                params:params
            });
            modalOptions.modalTitle = (data.sessionName != null || data.sessionName != '') ? modalIcon + data.sessionName : modalIcon + 'Class Connect Session';
            ns.createModal(modalOptions);
            return;
        } else if(data.validSession == true && data.launchRecordingsCount > 0) {
            var modalOptions = ns.processSessionModal({
                type:'recordings',
                recordingsCount: data.launchRecordingsCount,
                recordings: data.sessionRecordingList,
                params:params
            });
            modalOptions.modalTitle = modalIcon + data.sessionName;
            ns.createModal(modalOptions);
            return;
        } else if (data.validSession == true && data.ccSessionURL != null) {
            if(navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                var modalOptions = ns.processSessionModal({
                    type:'safari',
                    ccSessionUrl: data.ccSessionURL,
                    params: params
                });
                modalOptions.modalTitle = modalIcon + 'Session link';
                ns.createModal(modalOptions);
                return;
            }
            window.open(data.ccSessionURL, '_blank');
            return;
        }
    }
}

if(!ns.processSessions) {
    ns.processSessions = function() {
        viewAll = true;
        ns.toggleViewAll();
        updateSessionList(ccSessions);
        processCCSessions(ccSessions, null);
        var sessionListBtn = $('#my_sessions_students_list');
        sessionListBtn.attr('aria-label', 'Displaying my own sessions');
        $('#my_session_list').addClass('hide-sesion-list');
        $('#session_list_change_name').html('<span class="hiddencontent">Displaying </span> My Sessions <span aria-hidden="true"><span class="icon icon-arrow-down cc-session-arrow"></span></span>');
        $('#my_sessions_list_to_change').hide();
        $('#my_session_list').removeClass('hide-sesion-list');
        sessionListBtn.focus();
        sessionListBtn.removeClass('my-session-focus');

    }
}

if(!ns.trackStudentClick) {
	ns.trackStudentClick = function(recordingUrl, trackingUrl, keycode) {
		window.open(recordingUrl, '_blank'); 
		
		if (trackingUrl != null && trackingUrl != undefined && trackingUrl != "") {
			
			var serviceUrl = ns.widgetsBaseURL + trackingUrl + '&keyCode=' + keycode;
			$.ajax(serviceUrl, {
                type: 'POST'
            })
		}
	}
}

if(!ns.processSessionModal) {
    ns.processSessionModal = function(options) {
        /*function popUpTabOrdering(e) {
            "use strict";
            e = e || event;
            var activeElement, close_button = document.getElementById('pop_up_close_layer');
            if (e.keyCode == 9) {
                activeElement = document.activeElement;
                if(activeElement.hasAttribute('id') && activeElement.id.indexOf('msg_pop_up_bottom') > -1){
                    e.preventDefault();
                    close_button.focus();
                }
            }
            if(e.shiftKey && e.keyCode == 9) {
                activeElement = document.activeElement;
                if(activeElement.hasAttribute('id') && activeElement.id.indexOf('pop_up_close_layer') > -1){
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
            if(e.keyCode == 27) {
                e.preventDefault();
                onCloseActions();
            }
        }*/

        this.timeConverter = function(UNIX_timestamp) {
            var a = new Date(UNIX_timestamp);
            var monthsFull = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            var weekday=["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var year = a.getFullYear();
            var monthF = monthsFull[a.getMonth()];
            var getWeekDay = weekday[a.getDay()];
            var getTime = a.toLocaleTimeString();
            var date = a.getDate();
            var hour = a.getHours() % 12 || 12;
            var time = date + ' ' + monthF + ', ' + year +', [' + getWeekDay + '] ';
            return time;
        }

        this.timeConverterDiff = function(endTime, startTime) {
            var delta = Math.abs(endTime - startTime) / 1000;
            var hours = Math.floor(delta / 3600) % 24;
            hours = (hours< 10) ? '0'+hours : hours;
            delta -= hours * 3600;
            var minutes = Math.floor(delta / 60) % 60;
            minutes = (minutes<10) ? '0'+minutes : minutes;
            delta -= minutes * 60;
            var seconds = Math.floor(delta % 60);  // in theory the modulus is not required
            return hours + ':' + minutes + ':' + seconds
        }

        var _self = this;
        var content = '';
        var footer = '';
        
        
        if (options.type == 'recordings' && options.recordingsCount > 0) {
            content = ' <ul> ';
            for( var i =0; i< options.recordings.length ; i++ ) {
                    content += '<li><a href="javascript:void(0)" onclick="daylight_k12.widgets.trackStudentClick(\'' + options.recordings[i].url + '\',\'' + options.recordings[i].trackingUrl + '\', \'' + options.params.keyCode + '\')" class="class-connect-link" title="Select to open " aria-label="Select to open " target="_blank"> ' +
                    _self.timeConverter(options.recordings[i].createdDate) + ' ' + options.recordings[i].createdDateHourFormatted+ ' (' +
                    _self.timeConverterDiff(options.recordings[i].roomEndedTime, options.recordings[i].roomStartedTime) + ') ' +
                    '['+(options.recordings[i].size / 1000) + '] kb' +

                    '</a></li>';
            }
            
            content += '</ul>';
            footer += '<button class="daylight-button secondary-button daylight-modal-close">OK</button>';
        }
        else if(options.type === 'alert') {
            content += '<p>' + options.alertMsg + '</p>';
            footer += ((options.retryBtn) ? '<button class="daylight-button primary-button" onClick="daylight_k12.widgets.openSession('+options.params.sessionId+', '+options.params.sessionOccurrenceId+', '+options.params.studentId+', \''+options.params.keyCode+'\', \'' + options.params.currentElement +'\');">Retry</button>&nbsp;<button class="daylight-button secondary-button daylight-modal-close">Cancel</button>' : '<button class="daylight-button secondary-button daylight-modal-close">OK</button>');
        }
        else if(options.type == 'safari') {
            content += '<a href="'+ options.ccSessionUrl + '" target="_blank">Please click this link to open your Class Connect session.</a>';
            footer += '<button class="daylight-button secondary-button daylight-modal-close">OK</button>';
        }

        return {modalParentId: links_cc.targetWrapper, modalId: 'cc-session-modal', modalContent: content, modalFooter: footer};
    }
}

if (!ns.showSessionModal) {
    ns.showSessionModal = function() {
        var modalOptions = {
            modalParentId: 'cc_wrapper',
            modalId: 'cc-modal',
            modalTitle: '<span class="icon icon-flag"></span> ' + 'Class Connect',
            modalContent: '',
            modalFooter: ''
        };

        ns.createModal(modalOptions);
    }
}

if (!ns.changeSession) {
    ns.changeSession = function( customOptions ) {
        var defaultOptions = {
            nameDisplay : '#session_list_change_name',
            bigParent: '.d2l-home',
            mySession: '#my_sessions_list_to_change',
            loader : '#k12_loader',
            baseUrl : 'https://k12-widgets-svc.k12.com/k12-widgets-svc',
            sessionList : '#my_session_list',
            sessionListBtn : '#my_sessions_students_list'
        };
        var _self = this;
        var options = $.extend({}, defaultOptions, customOptions);
        function init()
        {
            viewAll = true;
            ns.toggleViewAll();
            _self.addStudentsToList();
        }

        this.changeStudentName = function()
        {
            var sessionListBtn = $('#my_sessions_students_list');
            sessionListBtn.attr('aria-label', 'Displaying sessions for '+ options.studentName);
            $(options.nameDisplay).html('<span class="hiddencontent">Displaying sessions for </span> ' + options.studentName + ' <span aria-hidden="true"><span class="icon icon-arrow-down cc-session-arrow"></span></span>');
            $(options.mySession).show();
        }

        this.addStudentsToList = function()
        {
            var timeNow = new Date().getTime();
            var url = ns.widgetsBaseURL+'/students/'+options.studentId+'/key-code';
            if(studentsObject.hasOwnProperty(options.studentId) && (timeNow - studentsObject[options.studentId].timestamp) < 7200000)
            {
                options.keyCode = studentsObject[options.studentId].pfKeyCode;
                _self.retrieveSessions();
                return;
            }
            ns.ajaxRequest(url, addStudentsCallback, addStudentsError, '');
            function addStudentsCallback(status, response){
                if(status == 200)
                {
                    data = JSON.parse(response);
                    options.keyCode = data.keyCode;
                    studentsObject[options.studentId] = { 'timestamp': timeNow, 'pfKeyCode': data.keyCode};
                    _self.retrieveSessions();
                }
                else
                {
                    addStudentsError();
                }
            }
            function addStudentsError(error){
                _self.addStudentsToList();
            };

        }

        this.retrieveSessions = function() {
            if(callInProgress) { return; }
            callInProgress = true;
            var timeNow = new Date();
            var urlSessions = options.baseUrl + '/providers/classConnect/sessionDetails/' + options.studentId + '/' + timeNow.getTime();
            var sessionListBtn = $(options.sessionListBtn);
            popUpPosition('body', options.loader);
            $(options.loader).show();
            $(options.loader).focus();
            $(options.sessionList).addClass('hide-sesion-list');
            ns.ajaxRequest(urlSessions+'?keyCode='+options.keyCode, retrieveSessionCallback, retrieveSessionError, '');
            function retrieveSessionCallback(status, data) {
                if(status == 200) {
                    $(options.loader).hide();
                    updateSessionList(JSON.parse(data));
                    processCCSessions(JSON.parse(data), options.studentId);
                    _self.changeStudentName();
                    callInProgress = false;
                    $(options.sessionList).removeClass('hide-sesion-list');
                    setTimeout(function(){
                            sessionListBtn.removeClass('my-session-focus');
                            sessionListBtn.focus();

                    }, 500);
                } else {
                    retrieveSessionError();
                }
            }
            function retrieveSessionError() {
                processCCSessions({"error":"true"});
                $(options.loader).hide();
                callInProgress = false;
                $(options.sessionList).removeClass('hide-sesion-list');
                setTimeout(function(){
                    sessionListBtn.removeClass('my-session-focus');
                    sessionListBtn.focus();
                }, 500);
            }
        }

        init();
    }
}

if(!ns.showInfoLayer) {
    ns.showInfoLayer = function(target_id, layer_id, bottom_limit) {
        var layerInfo = document.getElementById(layer_id);
        var targetInfo = document.getElementById(target_id);
        layerInfo.style.display = 'block';
        document.body.addEventListener('click', check, false);
        document.body.addEventListener('keyup', checkTabPressInfoLayer, true);

        function check(e) {
            var target = (e && e.target) || (event && event.srcElement);
            var obj = document.getElementById(layer_id);
            (checkParent(target))?obj.style.display='none':'block';
        }

        function checkParent(t) {
            while(t.parentNode) {
                if(t == document.getElementById(layer_id) || t == document.getElementById(target_id)) {
                    return false;
                }
                t = t.parentNode;
            }
            document.body.removeEventListener('click', check, false);
            document.removeEventListener('keyup', checkTabPressInfoLayer, true);
            return true
        }

        function checkTabPressInfoLayer(e) {
            "use strict";
            e = e || event;
            var activeElement, close_button = layerInfo.querySelector('a.close-info-layer');
            if (e.keyCode == 9) {
                activeElement = document.activeElement;
                if(activeElement.hasAttribute('id') && activeElement.id.indexOf(bottom_limit) > -1) {
                    e.preventDefault();
                    close_button.focus();
                }
            }
            if(e.keyCode == 27) {
                e.preventDefault();
                layerInfo.style.display = 'none';
                targetInfo.focus();
                document.body.removeEventListener('click', check, false);
                document.removeEventListener('keyup', checkTabPressInfoLayer, true);
            }
        }
    }
}



})(daylight_k12.widgets)
