(self.webpackChunk = self.webpackChunk || []).push([[124], {
    T18L: t=>{
        t.exports = [[t.id, ".settings-list-item{padding:3px 0}.settings-list-item:focus{outline:Highlight solid 2px}.settings-list-item::-moz-focus-inner{border:0}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/components/checkbox-permissions-list.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/mixins.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/variables.scss"],
            names: [],
            mappings: "AAEA,oBAEE,aAAA,CCDA,0BACE,2BC2BY,CDzBd,sCACE,QAAA",
            sourcesContent: ["@import '../styles/css/shared/mixins';\n\n.settings-list-item {\n  @include focusFix;\n  padding: 3px 0;\n}\n", "@import './variables';\n\n@mixin focusFix {\n  &:focus {\n    outline: $newrowOutline;\n  }\n  &::-moz-focus-inner {\n    border: 0;\n  }\n}\n", "$newrowColor: #158079;\n$newrowDarker: #158079;\n$newrowDark: #0d817a;\n$newrowColorDarker: #3ea58c;\n$newrowGray: #a7a7a7;\n$newrowDarkBlue: #101b21;\n$newrowBlack: #434343;\n$media-player-green: #68a992;\n$nr-seagreen: #79c5a7;\n$bar-height: 5px;\n$notification-success-color: #00a489;\n$notification-dark-color: #434343;\n$notification-info-color: #ffae42;\n$notification-error-color: red;\n$notification-message-color: #80d3ff;\n$notification-light-color: #fae887;\n$notification-light-green-color: #80DD79;\n$notification-height: 50px;\n$notification-margin-bottom: 2px;\n$top-bar-background: #111b23;\n$top-bar-height: 54px;\n$top-bar-border: 1px solid #434343;\n$top-bar-item-hover-background: rgba(255, 255, 255, 0.14);\n$newrowRed: #df2021;\n$newrowLightRed: #e42525;\n$newrowGrayBG: #f3f3f3;\n$newrowLightGreen: #399691;\n$newrowPopupMask: rgba(0, 0, 0, 0.67);\n$newrowBorderLight: #a7a7a7;\n$newrowLightAccessibleWhite: #757575;\n$newrowSearchInput: #434343;\n$newrowOutline: Highlight solid 2px;\n$newrowPopupDarkBg: #161616;\n$newrowCyanGreen: #148079;\n$simpleBlackColor: #000000;\n$newrowLightGray: #f2f2f2;\n$newrowGreyDisabledText: #727272;\n$indication: #25D625;\n"],
            sourceRoot: ""
        }]]
    }
    ,
    a1WG: t=>{
        t.exports = [[t.id, ".hand-raise{cursor:pointer;background-color:transparent;border-color:transparent;outline-offset:-3px;position:relative}.hand-raise:focus{outline:Highlight solid 2px}.hand-raise::-moz-focus-inner{border:0}.hand-raise-icon{width:16px;height:16px}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/components/raise-hand.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/mixins.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/variables.scss"],
            names: [],
            mappings: "AAEA,YAEI,cAAA,CACA,4BAAA,CACA,wBAAA,CACA,mBAAA,CACA,iBAAA,CCLF,kBACE,2BC2BY,CDzBd,8BACE,QAAA,CDGA,iBACI,UAAA,CACA,WAAA",
            sourcesContent: ["@import '../styles/css/shared/mixins';\n\n.hand-raise {\n    @include focusFix;\n    cursor: pointer;\n    background-color: transparent;\n    border-color: transparent;\n    outline-offset: -3px;\n    position: relative;\n\n    &-icon {\n        width: 16px;\n        height: 16px;\n    }\n}\n", "@import './variables';\n\n@mixin focusFix {\n  &:focus {\n    outline: $newrowOutline;\n  }\n  &::-moz-focus-inner {\n    border: 0;\n  }\n}\n", "$newrowColor: #158079;\n$newrowDarker: #158079;\n$newrowDark: #0d817a;\n$newrowColorDarker: #3ea58c;\n$newrowGray: #a7a7a7;\n$newrowDarkBlue: #101b21;\n$newrowBlack: #434343;\n$media-player-green: #68a992;\n$nr-seagreen: #79c5a7;\n$bar-height: 5px;\n$notification-success-color: #00a489;\n$notification-dark-color: #434343;\n$notification-info-color: #ffae42;\n$notification-error-color: red;\n$notification-message-color: #80d3ff;\n$notification-light-color: #fae887;\n$notification-light-green-color: #80DD79;\n$notification-height: 50px;\n$notification-margin-bottom: 2px;\n$top-bar-background: #111b23;\n$top-bar-height: 54px;\n$top-bar-border: 1px solid #434343;\n$top-bar-item-hover-background: rgba(255, 255, 255, 0.14);\n$newrowRed: #df2021;\n$newrowLightRed: #e42525;\n$newrowGrayBG: #f3f3f3;\n$newrowLightGreen: #399691;\n$newrowPopupMask: rgba(0, 0, 0, 0.67);\n$newrowBorderLight: #a7a7a7;\n$newrowLightAccessibleWhite: #757575;\n$newrowSearchInput: #434343;\n$newrowOutline: Highlight solid 2px;\n$newrowPopupDarkBg: #161616;\n$newrowCyanGreen: #148079;\n$simpleBlackColor: #000000;\n$newrowLightGray: #f2f2f2;\n$newrowGreyDisabledText: #727272;\n$indication: #25D625;\n"],
            sourceRoot: ""
        }]]
    }
    ,
    "O+rK": t=>{
        t.exports = [[t.id, ".participant-not-present-wrapper{display:flex;justify-content:center;align-items:center;margin-right:10px;flex:0 0 auto}.participant-not-present-icon{width:14px;fill:#111b23}.participant-focused-tooltip{display:flex;justify-content:center;width:217px;height:73px;border:1px solid #a7a7a7;box-sizing:border-box;padding:14px 15px;line-height:1.3;font-size:14px;border-radius:3px;margin-top:45px !important;margin-left:40px !important}.participant-focused-tooltip::before,.participant-focused-tooltip::after{display:none}.participant-focused-tooltip.show{opacity:1}.participant-not-present-wrapper+.browser-focus-tip.browser-focus-tip{-webkit-transform:translateX(-100%);transform:translateX(-100%);background-color:#fff;color:#757575;line-height:initial;width:182px;padding:15px;border:1px solid #a7a7a7;font-size:14px;opacity:1;box-shadow:0 0 3px 0 rgba(0,0,0,.5)}.participant-not-present-wrapper+.browser-focus-tip.browser-focus-tip::before{top:0;-webkit-transform:translateY(-100%);transform:translateY(-100%);margin:0;right:14px;border-top:none;border-bottom:8px solid #a7a7a7;border-left:11px solid transparent;border-right:0}.participant-not-present-wrapper+.browser-focus-tip.browser-focus-tip::after{top:0;-webkit-transform:translateY(-100%);transform:translateY(-100%);margin:0;right:15px;border-top:none;border-bottom:6px solid #fff;border-left:8px solid transparent;border-right:0}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/brower-focus/styles/browser-focus-styles.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/variables.scss"],
            names: [],
            mappings: "AAEA,iCACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,aAAA,CAEF,8BACE,UAAA,CACA,YAAA,CAGF,6BACE,YAAA,CACA,sBAAA,CACA,WAAA,CACA,WAAA,CACA,wBAAA,CACA,qBAAA,CACA,iBAAA,CACA,eAAA,CACA,cAAA,CACA,iBAAA,CACA,0BAAA,CACA,2BAAA,CAEA,yEAEE,YAAA,CAIJ,kCACE,SAAA,CAIF,sEACE,mCAAA,CAAA,2BAAA,CACA,qBAAA,CACA,aCb2B,CDc3B,mBAAA,CACA,WAAA,CACA,YAAA,CACA,wBAAA,CACA,cAAA,CACA,SAAA,CACA,mCAAA,CAEA,8EACE,KAAA,CACA,mCAAA,CAAA,2BAAA,CACA,QAAA,CACA,UAAA,CACA,eAAA,CACA,+BAAA,CACA,kCAAA,CACA,cAAA,CAGF,6EACE,KAAA,CACA,mCAAA,CAAA,2BAAA,CACA,QAAA,CACA,UAAA,CACA,eAAA,CACA,4BAAA,CACA,iCAAA,CACA,cAAA",
            sourcesContent: ["@import '../../../styles/css/shared/variables';\n\n.participant-not-present-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n  flex: 0 0 auto;\n}\n.participant-not-present-icon {\n  width: 14px;\n  fill: #111b23;\n}\n\n.participant-focused-tooltip {\n  display: flex;\n  justify-content: center;\n  width: 217px;\n  height: 73px;\n  border: 1px solid #A7A7A7;\n  box-sizing: border-box;\n  padding: 14px 15px;\n  line-height: 1.3;\n  font-size: 14px;\n  border-radius: 3px;\n  margin-top: 45px !important;\n  margin-left: 40px !important;\n\n  &::before,\n  &::after {\n    display: none;\n  }\n}\n\n.participant-focused-tooltip.show {\n  opacity: 1;\n}\n\n\n.participant-not-present-wrapper + .browser-focus-tip.browser-focus-tip {\n  transform: translateX(-100%);\n  background-color: #fff;\n  color: $newrowLightAccessibleWhite;\n  line-height: initial;\n  width: 182px;\n  padding: 15px;\n  border: 1px solid #a7a7a7;\n  font-size: 14px;\n  opacity: 1;\n  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);\n\n  &::before {\n    top: 0;\n    transform: translateY(-100%);\n    margin: 0;\n    right: 14px;\n    border-top: none;\n    border-bottom: 8px solid #a7a7a7;\n    border-left: 11px solid transparent;\n    border-right: 0;\n  }\n\n  &::after{\n    top: 0;\n    transform: translateY(-100%);\n    margin: 0;\n    right: 15px;\n    border-top: none;\n    border-bottom: 6px solid #fff;\n    border-left: 8px solid transparent;\n    border-right: 0;\n  }\n}\n", "$newrowColor: #158079;\n$newrowDarker: #158079;\n$newrowDark: #0d817a;\n$newrowColorDarker: #3ea58c;\n$newrowGray: #a7a7a7;\n$newrowDarkBlue: #101b21;\n$newrowBlack: #434343;\n$media-player-green: #68a992;\n$nr-seagreen: #79c5a7;\n$bar-height: 5px;\n$notification-success-color: #00a489;\n$notification-dark-color: #434343;\n$notification-info-color: #ffae42;\n$notification-error-color: red;\n$notification-message-color: #80d3ff;\n$notification-light-color: #fae887;\n$notification-light-green-color: #80DD79;\n$notification-height: 50px;\n$notification-margin-bottom: 2px;\n$top-bar-background: #111b23;\n$top-bar-height: 54px;\n$top-bar-border: 1px solid #434343;\n$top-bar-item-hover-background: rgba(255, 255, 255, 0.14);\n$newrowRed: #df2021;\n$newrowLightRed: #e42525;\n$newrowGrayBG: #f3f3f3;\n$newrowLightGreen: #399691;\n$newrowPopupMask: rgba(0, 0, 0, 0.67);\n$newrowBorderLight: #a7a7a7;\n$newrowLightAccessibleWhite: #757575;\n$newrowSearchInput: #434343;\n$newrowOutline: Highlight solid 2px;\n$newrowPopupDarkBg: #161616;\n$newrowCyanGreen: #148079;\n$simpleBlackColor: #000000;\n$newrowLightGray: #f2f2f2;\n$newrowGreyDisabledText: #727272;\n$indication: #25D625;\n"],
            sourceRoot: ""
        }]]
    }
    ,
    "wnV+": t=>{
        t.exports = [[t.id, ".aws-agreement-popup-container{display:flex;flex-direction:column;width:700px;height:500px;background:#161616;color:#fff;position:relative;box-sizing:border-box;border:solid 1px #434343}.aws-agreement-popup-container .aws-agreement-error{margin-left:15px}.aws-agreement-popup-container .aws-agreement-popup-content-container{display:flex;flex-direction:column;box-sizing:border-box;padding:44px 44px 0;height:350px;max-height:360px}.aws-agreement-popup-container .aws-agreement-popup-content-container .aws-agreement-popup-content-container-heading{font-size:24px;font-weight:300;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#fff;margin-bottom:24px}.aws-agreement-popup-container .aws-agreement-popup-content-container .aws-agreement-content-container .ps__rail-y,.aws-agreement-popup-container .aws-agreement-popup-content-container .aws-agreement-content-container .ps__rail-y.ps--clicking{background:#161616 !important}.aws-agreement-popup-container .aws-agreement-popup-content-container .aws-agreement-content-container .ps__rail-y .ps__thumb-y,.aws-agreement-popup-container .aws-agreement-popup-content-container .aws-agreement-content-container .ps__rail-y.ps--clicking .ps__thumb-y{max-width:7px !important}.aws-agreement-popup-container .aws-agreement-popup-content-container .aws-agreement-content-container .perfect-scrollbar-content-wrapper{max-width:568px}.aws-agreement-popup-container .aws-agreement-popup-content-container .aws-agreement-content-container .perfect-scrollbar-content-wrapper .aws-agreement-content{margin-bottom:16px;font-size:14px;font-weight:normal;line-height:1.29;letter-spacing:normal}.aws-agreement-popup-container .aws-agreement-popup-content-container .aws-agreement-content-container .perfect-scrollbar-content-wrapper .aws-agreement-content-greyed{color:#b2b2b2}.aws-agreement-popup-container .aws-agreement-popup-btn-container{height:140px;width:100%;display:flex;justify-content:flex-start;align-items:center;padding:0 44px;position:absolute;bottom:0;box-sizing:border-box}.aws-agreement-popup-container .aws-agreement-popup-btn-container .aws-agreement-popup-btn{width:124px;height:54px;box-sizing:border-box;border-radius:30px;font-size:18px;font-weight:900;font-style:normal;text-align:center;color:#fff}.aws-agreement-popup-container .aws-agreement-popup-close-btn{width:30px;height:30px;display:flex;justify-content:center;align-items:center;position:absolute;top:10px;right:10px;cursor:pointer}.aws-agreement-popup-container .aws-agreement-popup-close-btn:focus{outline:Highlight solid 2px}.aws-agreement-popup-container .aws-agreement-popup-close-btn::-moz-focus-inner{border:0}.aws-agreement-popup-container .aws-agreement-popup-close-btn svg,.aws-agreement-popup-container .aws-agreement-popup-close-btn .aws-agreement-popup-close-icon{width:12px;height:12px}.aws-agreement-popup-container .aws-agreement-popup-btn-active{background-image:linear-gradient(to right, #e553ec, #f06a28 106%);cursor:pointer}.aws-agreement-popup-container .aws-agreement-popup-btn-disabled{border:2px solid #5a5a5a;background-color:rgba(0,0,0,.3);cursor:default}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/chat/common-terms-agreement-aws/aws-agreement.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/variables.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/mixins.scss"],
            names: [],
            mappings: "AAGA,+BACC,YAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CACA,kBCwBmB,CDvBnB,UAAA,CACA,iBAAA,CACA,qBAAA,CACA,wBAAA,CAEA,oDACC,gBAAA,CAGD,sEACC,YAAA,CACA,qBAAA,CACA,qBAAA,CACA,mBAAA,CAEA,YAAA,CACA,gBAAA,CAEA,qHACC,cAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,kBAAA,CACA,qBAAA,CACA,UAAA,CAEA,kBAAA,CAKA,mPAEC,6BAAA,CAEA,6QACC,wBAAA,CAKF,0IAEC,eAAA,CAEA,iKACC,kBAAA,CACA,cAAA,CACA,kBAAA,CACA,gBAAA,CACA,qBAAA,CAGD,wKACC,aAAA,CAMJ,kEACC,YAAA,CACA,UAAA,CAEA,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,cAAA,CAEA,iBAAA,CACA,QAAA,CACA,qBAAA,CAEA,2FACC,WAAA,CACA,WAAA,CACA,qBAAA,CACA,kBAAA,CAGA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,iBAAA,CACA,UAAA,CAIF,8DAEC,UAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,cAAA,CEzGA,oEACE,2BD2BY,CCzBd,gFACE,QAAA,CFuGF,gKAEC,UAAA,CACA,WAAA,CAIF,+DACC,iEAAA,CACA,cAAA,CAGD,iEACC,wBAAA,CACA,+BAAA,CACA,cAAA",
            sourcesContent: ["@import \"../../../styles/css/shared/variables\";\n@import '../../../styles/css/shared/mixins';\n\n.aws-agreement-popup-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 700px;\n\theight: 500px;\n\tbackground: $newrowPopupDarkBg;\n\tcolor: #fff;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tborder: solid 1px #434343;\n\n\t.aws-agreement-error{\n\t\tmargin-left: 15px;\n\t}\n\n\t.aws-agreement-popup-content-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tbox-sizing: border-box;\n\t\tpadding: 44px 44px 0;\n\n\t\theight: 350px;\n\t\tmax-height: 360px;\n\n\t\t.aws-agreement-popup-content-container-heading {\n\t\t\tfont-size: 24px;\n\t\t\tfont-weight: 300;\n\t\t\tfont-stretch: normal;\n\t\t\tfont-style: normal;\n\t\t\tline-height: normal;\n\t\t\tletter-spacing: normal;\n\t\t\tcolor: #ffffff;\n\n\t\t\tmargin-bottom: 24px;\n\t\t}\n\n\t\t.aws-agreement-content-container {\n\n\t\t\t.ps__rail-y,\n\t\t\t.ps__rail-y.ps--clicking {\n\t\t\t\tbackground: $newrowPopupDarkBg !important;\n\n\t\t\t\t.ps__thumb-y{\n\t\t\t\t\tmax-width: 7px !important;\n\t\t\t\t}\n\t\t\t}\n\n\n\t\t\t.perfect-scrollbar-content-wrapper {\n\n\t\t\t\tmax-width: 568px;\n\n\t\t\t\t.aws-agreement-content {\n\t\t\t\t\tmargin-bottom: 16px;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\tline-height: 1.29;\n\t\t\t\t\tletter-spacing: normal;\n\t\t\t\t}\n\n\t\t\t\t.aws-agreement-content-greyed {\n\t\t\t\t\tcolor: #b2b2b2;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.aws-agreement-popup-btn-container {\n\t\theight: 140px;\n\t\twidth: 100%;\n\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t\talign-items: center;\n\t\tpadding: 0 44px;\n\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tbox-sizing: border-box;\n\n\t\t.aws-agreement-popup-btn {\n\t\t\twidth: 124px;\n\t\t\theight: 54px;\n\t\t\tbox-sizing: border-box;\n\t\t\tborder-radius: 30px;\n\n\n\t\t\tfont-size: 18px;\n\t\t\tfont-weight: 900;\n\t\t\tfont-style: normal;\n\t\t\ttext-align: center;\n\t\t\tcolor: #ffffff;\n\t\t}\n\t}\n\n\t.aws-agreement-popup-close-btn {\n\t\t@include focusFix;\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\tright: 10px;\n\t\tcursor: pointer;\n\n\t\tsvg,\n\t\t.aws-agreement-popup-close-icon {\n\t\t\twidth: 12px;\n\t\t\theight: 12px;\n\t\t}\n\t}\n\n\t.aws-agreement-popup-btn-active {\n\t\tbackground-image: linear-gradient(to right, #e553ec, #f06a28 106%);\n\t\tcursor: pointer;\n\t}\n\n\t.aws-agreement-popup-btn-disabled {\n\t\tborder: 2px solid #5a5a5a;\n\t\tbackground-color: rgba(0, 0, 0, 0.3);\n\t\tcursor: default;\n\t}\n\n\n}", "$newrowColor: #158079;\n$newrowDarker: #158079;\n$newrowDark: #0d817a;\n$newrowColorDarker: #3ea58c;\n$newrowGray: #a7a7a7;\n$newrowDarkBlue: #101b21;\n$newrowBlack: #434343;\n$media-player-green: #68a992;\n$nr-seagreen: #79c5a7;\n$bar-height: 5px;\n$notification-success-color: #00a489;\n$notification-dark-color: #434343;\n$notification-info-color: #ffae42;\n$notification-error-color: red;\n$notification-message-color: #80d3ff;\n$notification-light-color: #fae887;\n$notification-light-green-color: #80DD79;\n$notification-height: 50px;\n$notification-margin-bottom: 2px;\n$top-bar-background: #111b23;\n$top-bar-height: 54px;\n$top-bar-border: 1px solid #434343;\n$top-bar-item-hover-background: rgba(255, 255, 255, 0.14);\n$newrowRed: #df2021;\n$newrowLightRed: #e42525;\n$newrowGrayBG: #f3f3f3;\n$newrowLightGreen: #399691;\n$newrowPopupMask: rgba(0, 0, 0, 0.67);\n$newrowBorderLight: #a7a7a7;\n$newrowLightAccessibleWhite: #757575;\n$newrowSearchInput: #434343;\n$newrowOutline: Highlight solid 2px;\n$newrowPopupDarkBg: #161616;\n$newrowCyanGreen: #148079;\n$simpleBlackColor: #000000;\n$newrowLightGray: #f2f2f2;\n$newrowGreyDisabledText: #727272;\n$indication: #25D625;\n", "@import './variables';\n\n@mixin focusFix {\n  &:focus {\n    outline: $newrowOutline;\n  }\n  &::-moz-focus-inner {\n    border: 0;\n  }\n}\n"],
            sourceRoot: ""
        }]]
    }
    ,
    lcfy: t=>{
        t.exports = [[t.id, ".chat-filter-bar-container{display:flex;flex-direction:column;position:relative}.chat-filter-bar-container .filter-bar-holder{z-index:11}.chat-filter-bar-container .background{width:100%;height:100%;position:absolute;background-color:rgba(0,0,0,.42);z-index:10}.chat-filter-bar-dropdown{background-color:#fff;display:flex;flex-direction:column;overflow:hidden;width:210px;position:absolute;z-index:1000;top:37px;right:6px;overflow-y:auto;box-shadow:0 0 5px 2px rgba(0,0,0,.3)}.chat-filter-bar-dropdown .filter-dropdown-item{padding:0 16px;cursor:pointer;color:#434343;white-space:nowrap;line-height:50px;font-size:17px;font-weight:lighter;-webkit-user-select:none;user-select:none}.chat-filter-bar-dropdown .filter-dropdown-item:hover{background-color:#f2f2f2;font-weight:bold}.chat-filter-bar{display:flex;width:100%;height:30px;justify-content:space-between;box-sizing:border-box;padding:0 11px 0 10px;align-items:center;background:#fff;cursor:pointer}.chat-filter-bar .title{font-weight:bold;font-size:14px;pointer-events:none}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/chat/components/conversation/presentional/components/filter-bar/filter-bar.scss"],
            names: [],
            mappings: "AAAA,2BACE,YAAA,CACA,qBAAA,CACA,iBAAA,CAEA,8CAEE,UAAA,CAGF,uCACE,UAAA,CACA,WAAA,CACA,iBAAA,CACA,gCAAA,CACA,UAAA,CAIJ,0BACE,qBAAA,CACA,YAAA,CACA,qBAAA,CACA,eAAA,CAEA,WAAA,CAEA,iBAAA,CACA,YAAA,CACA,QAAA,CACA,SAAA,CACA,eAAA,CACA,qCAAA,CAEA,gDACE,cAAA,CACA,cAAA,CACA,aAAA,CACA,kBAAA,CACA,gBAAA,CACA,cAAA,CACA,mBAAA,CACA,wBAAA,CAGA,gBAAA,CAEA,sDACE,wBAAA,CACA,gBAAA,CAKN,iBACE,YAAA,CACA,UAAA,CACA,WAAA,CAEA,6BAAA,CAGA,qBAAA,CAEA,qBAAA,CACA,kBAAA,CACA,eAAA,CACA,cAAA,CAEA,wBACE,gBAAA,CACA,cAAA,CACA,mBAAA",
            sourcesContent: [".chat-filter-bar-container{\n  display: flex;\n  flex-direction: column;\n  position: relative;\n\n  .filter-bar-holder{\n    //padding: 12px;\n    z-index: 11;\n  }\n\n  .background{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.42);\n    z-index: 10;\n  }\n}\n\n.chat-filter-bar-dropdown{\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  // max-width: 215px;\n  width: 210px;\n\n  position: absolute;\n  z-index: 1000;\n  top: 37px;\n  right: 6px;\n  overflow-y: auto;\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);\n\n  .filter-dropdown-item{\n    padding: 0 16px;\n    cursor: pointer;\n    color: #434343;\n    white-space: nowrap;\n    line-height: 50px;\n    font-size: 17px;\n    font-weight: lighter;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    &:hover {\n      background-color: #f2f2f2;\n      font-weight: bold;\n    }\n  }\n}\n\n.chat-filter-bar {\n  display: flex;\n  width: 100%;\n  height: 30px;\n\n  justify-content: space-between;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  padding: 0 11px 0 10px;\n  align-items: center;\n  background: #fff;\n  cursor: pointer;\n\n  .title {\n    font-weight: bold;\n    font-size: 14px;\n    pointer-events: none;\n  }\n}\n"],
            sourceRoot: ""
        }]]
    }
    ,
    gRiU: t=>{
        t.exports = [[t.id, ".message-list-dropdown{font-size:17px;text-transform:none}.message-list-dropdown .font-increase-container{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;cursor:default}.message-list-dropdown .font-increase-container .font-size-title{margin-right:15px}.message-list-dropdown .font-increase-container .increase-btn{display:flex;justify-content:center;align-items:center;color:#fff;background-color:#a7a7a7;width:20px;height:20px;cursor:pointer}.message-list-dropdown .font-increase-container .current-font-size{display:flex;justify-content:center;align-items:center;width:60px;height:20px;font-size:14px;margin-right:2px;margin-left:2px;border:solid 1px #a7a7a7;text-align:center}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/chat/components/messages-list/presentational/components/message-list-dropdown.scss"],
            names: [],
            mappings: "AAAA,uBACE,cAAA,CACA,mBAAA,CAEA,gDACE,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,qBAAA,CACA,cAAA,CAEA,iEACE,iBAAA,CAGF,8DACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,wBAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CAGF,mEACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,wBAAA,CACA,iBAAA",
            sourcesContent: [".message-list-dropdown{\n  font-size: 17px;\n  text-transform: none;\n\n  .font-increase-container{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    box-sizing: border-box;\n    cursor: default;\n\n    .font-size-title{\n      margin-right: 15px;\n    }\n\n    .increase-btn{\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: white;\n      background-color: #A7A7A7;\n      width: 20px;\n      height: 20px;\n      cursor: pointer;\n    }\n\n    .current-font-size{\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 60px;\n      height: 20px;\n      font-size: 14px;\n      margin-right: 2px;\n      margin-left: 2px;\n      border: solid 1px #A7A7A7;\n      text-align: center;\n    }\n  }\n}\n\n"],
            sourceRoot: ""
        }]]
    }
    ,
    HiER: t=>{
        t.exports = [[t.id, ".reply-message-btn{display:flex;justify-content:center;align-items:center;line-height:24px;border-radius:0px;padding:0 15px;color:#fff;font-size:12px;font-weight:bold;margin-right:5px;margin-top:5px;background-color:#0d817a;cursor:pointer}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/chat/components/messages-list/presentational/components/message/message-reply-btn.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/variables.scss"],
            names: [],
            mappings: "AAEA,mBACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA,CACA,iBAAA,CACA,cAAA,CACA,UAAA,CACA,cAAA,CACA,gBAAA,CACA,gBAAA,CACA,cAAA,CACA,wBCZW,CDaX,cAAA",
            sourcesContent: ['@import "~styles/css/shared/variables.scss";\n\n.reply-message-btn{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 24px;\n  border-radius: 0px;\n  padding: 0 15px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  margin-right: 5px;\n  margin-top: 5px;\n  background-color: $newrowDark;\n  cursor: pointer;\n}\n', "$newrowColor: #158079;\n$newrowDarker: #158079;\n$newrowDark: #0d817a;\n$newrowColorDarker: #3ea58c;\n$newrowGray: #a7a7a7;\n$newrowDarkBlue: #101b21;\n$newrowBlack: #434343;\n$media-player-green: #68a992;\n$nr-seagreen: #79c5a7;\n$bar-height: 5px;\n$notification-success-color: #00a489;\n$notification-dark-color: #434343;\n$notification-info-color: #ffae42;\n$notification-error-color: red;\n$notification-message-color: #80d3ff;\n$notification-light-color: #fae887;\n$notification-light-green-color: #80DD79;\n$notification-height: 50px;\n$notification-margin-bottom: 2px;\n$top-bar-background: #111b23;\n$top-bar-height: 54px;\n$top-bar-border: 1px solid #434343;\n$top-bar-item-hover-background: rgba(255, 255, 255, 0.14);\n$newrowRed: #df2021;\n$newrowLightRed: #e42525;\n$newrowGrayBG: #f3f3f3;\n$newrowLightGreen: #399691;\n$newrowPopupMask: rgba(0, 0, 0, 0.67);\n$newrowBorderLight: #a7a7a7;\n$newrowLightAccessibleWhite: #757575;\n$newrowSearchInput: #434343;\n$newrowOutline: Highlight solid 2px;\n$newrowPopupDarkBg: #161616;\n$newrowCyanGreen: #148079;\n$simpleBlackColor: #000000;\n$newrowLightGray: #f2f2f2;\n$newrowGreyDisabledText: #727272;\n$indication: #25D625;\n"],
            sourceRoot: ""
        }]]
    }
    ,
    R5rV: t=>{
        t.exports = [[t.id, "#notesContainer{height:100%;position:relative}#notes-module-container .menu-module-title{display:none}#notes-module-container .menu-module-title span{font-size:14px;text-transform:uppercase}#notes-module-container .menu-module-content{max-height:100%;position:relative;z-index:90;border-top:1px solid #434343}#notes-module-container .sideContainerTitle{height:55px}.allNotes{height:100%;display:flex;flex-direction:column}.allNotes .sideContainerTitle{background:#101b21;height:54px;z-index:60;position:absolute;top:0;width:100%}.allNotes .sideContainerTitle .notesHead{display:flex;flex-direction:row;align-items:center;justify-content:space-between;color:#fff;height:100%}.allNotes .sideContainerTitle .notesHead .notesHeadText{display:flex;align-items:center;flex-grow:1}.allNotes .sideContainerTitle .notesHead .notesHeadText .notesBackArrowIcon{background:url('backArrowLegacy.e97480db3e51aac22ad4.png') no-repeat center;height:18px;width:18px;margin-left:10px;margin-right:5px;background-size:18px 18px;cursor:pointer}.allNotes .sideContainerTitle .notesHead .notesHeadText .notesDisplayName{left:0;text-transform:uppercase;font-size:14px}.allNotes .sideContainerTitle .notesHead .threeDotContainer .notesOptionsMenuContainer{color:#000}.allNotes .sideContainerTitle .notesHead .threeDotContainer .notesOptionsMenuContainer .notesOptionsMenuItem{cursor:pointer}.allNotes .notesContentContainer{width:100%;height:calc(100% - 54px);background-color:#ecf0ef}.allNotes .notesContentContainer #notesRoomContainer{height:100%}.allNotes .notesContentContainer #notesRoomContainer #notesList{height:100%}.allNotes .notesContentContainer #notesRoomContainer .roomNotesEditor{display:flex;flex-direction:column}.allNotes .notesContentContainer #notesRoomContainer .userView .textEditorContainer{top:0;background-color:#fff}.allNotes .notesContentContainer #notesRoomContainer .userView .textEditorContainer .nano-content{padding-top:5px;padding-left:5px;font-size:14px;margin-bottom:20px}.allNotes .notesContentContainer #notesRoomContainer .userView .textEditorContainer .nano-content .DraftEditor-root{height:100%}.allNotes .notesContentContainer #notesRoomContainer .moderatorView .notesControlBar{display:flex;align-items:center}.allNotes .notesContentContainer #notesRoomContainer .moderatorView .notesControlBar #broadcastNoteBtn{margin-top:0}.allNotes .notesContentContainer #notesRoomContainer .moderatorView .textEditorContainer{width:100%;height:100%;background-color:#fff}.allNotes .notesContentContainer #notesRoomContainer .moderatorView .textEditorContainer .nano-content{padding-top:5px;padding-left:5px;font-size:14px}.notesCurrentlyTypingContainer{position:absolute;bottom:0}.closeNote{-webkit-mask-image:url('close-black.11454284e1a01e44faf5.svg');mask-image:url('close-black.11454284e1a01e44faf5.svg');cursor:pointer;display:inline-block;background-color:#fff;height:10px;width:46px;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;margin-bottom:2px}#mobile-layout #notesContainer{min-height:150px}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/notes/styles/notes.scss"],
            names: [],
            mappings: "AAAA,gBACE,WAAA,CACA,iBAAA,CAIA,2CACE,YAAA,CAEA,gDACE,cAAA,CACA,wBAAA,CAIJ,6CACE,eAAA,CACA,iBAAA,CACA,UAAA,CACA,4BAAA,CAGF,4CACE,WAAA,CAIJ,UACE,WAAA,CACA,YAAA,CACA,qBAAA,CAEA,8BACE,kBAAA,CACA,WAAA,CACA,UAAA,CAEA,iBAAA,CACA,KAAA,CACA,UAAA,CAEA,yCACE,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,6BAAA,CACA,UAAA,CACA,WAAA,CAEA,wDACE,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,4EACE,2EAAA,CACA,WAAA,CACA,UAAA,CACA,gBAAA,CACA,gBAAA,CACA,yBAAA,CACA,cAAA,CAGF,0EACE,MAAA,CACA,wBAAA,CACA,cAAA,CAMF,uFACE,UAAA,CAEA,6GACE,cAAA,CAOV,iCACE,UAAA,CACA,wBAAA,CACA,wBAAA,CAGA,qDACE,WAAA,CAEA,gEACE,WAAA,CAEF,sEACE,YAAA,CACA,qBAAA,CAMA,oFACE,KAAA,CACA,qBAAA,CAEA,kGAEE,eAAA,CACA,gBAAA,CAEA,cAAA,CACA,kBAAA,CAEA,oHACE,WAAA,CAQN,qFACE,YAAA,CACA,kBAAA,CAEA,uGACE,YAAA,CAIJ,yFACE,UAAA,CAEA,WAAA,CACA,qBAAA,CAEA,uGACE,eAAA,CACA,gBAAA,CAEA,cAAA,CAQZ,+BACE,iBAAA,CACA,QAAA,CAEF,WACE,8DAAA,CAAA,sDAAA,CACA,cAAA,CACA,oBAAA,CACA,qBAAA,CACA,WAAA,CACA,UAAA,CACA,6BAAA,CACA,4BAAA,CACA,iBAAA,CAIA,+BACE,gBAAA",
            sourcesContent: ["#notesContainer {\n  height: 100%;\n  position: relative;\n}\n\n#notes-module-container {\n  .menu-module-title {\n    display: none;\n\n    span {\n      font-size: 14px;\n      text-transform: uppercase;\n    }\n  }\n\n  .menu-module-content {\n    max-height: 100%;\n    position: relative;\n    z-index: 90;\n    border-top: 1px solid #434343;\n  }\n\n  .sideContainerTitle{\n    height: 55px;\n  }\n}\n\n.allNotes {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  .sideContainerTitle {\n    background: #101B21;\n    height: 54px;\n    z-index: 60;\n\n    position: absolute;\n    top: 0;\n    width: 100%;\n\n    .notesHead {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n      color: #fff;\n      height: 100%;\n\n      .notesHeadText {\n        display: flex;\n        align-items: center;\n        flex-grow: 1;\n\n        .notesBackArrowIcon {\n          background: url(../../../styles/images/shared/backArrowLegacy.png) no-repeat center;\n          height: 18px;\n          width: 18px;\n          margin-left: 10px;\n          margin-right: 5px;\n          background-size: 18px 18px;\n          cursor: pointer;\n        }\n\n        .notesDisplayName {\n          left: 0;\n          text-transform: uppercase;\n          font-size: 14px;\n        }\n      }\n\n\n      .threeDotContainer {\n        .notesOptionsMenuContainer {\n          color: #000;\n\n          .notesOptionsMenuItem {\n            cursor: pointer;\n          }\n        }\n      }\n    }\n  }\n\n  .notesContentContainer {\n    width: 100%;\n    height: calc(100% - 54px);\n    background-color: #ecf0ef;\n\n\n    #notesRoomContainer {\n      height: 100%;\n\n      #notesList {\n        height: 100%;\n      }\n      .roomNotesEditor {\n        display: flex;\n        flex-direction: column;\n      }\n    }\n\n    #notesRoomContainer {\n      .userView {\n        .textEditorContainer {\n          top: 0;\n          background-color: #fff;\n\n          .nano-content {\n\n            padding-top: 5px;\n            padding-left: 5px;\n\n            font-size: 14px;\n            margin-bottom: 20px;\n\n            .DraftEditor-root {\n              height: 100%;\n            }\n          }\n        }\n      }\n\n      .moderatorView {\n\n        .notesControlBar {\n          display: flex;\n          align-items: center;\n\n          #broadcastNoteBtn {\n            margin-top: 0;\n          }\n        }\n\n        .textEditorContainer {\n          width: 100%;\n          //height: calc(100% - 42px);\n          height: 100%;\n          background-color: #fff;\n\n          .nano-content {\n            padding-top: 5px;\n            padding-left: 5px;\n\n            font-size: 14px;\n          }\n        }\n      }\n    }\n  }\n}\n\n.notesCurrentlyTypingContainer {\n  position: absolute;\n  bottom: 0;\n}\n.closeNote {\n  mask-image: url(../../../styles/images/shared/close-black.svg);\n  cursor: pointer;\n  display: inline-block;\n  background-color: #fff;\n  height: 10px;\n  width: 46px;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  margin-bottom: 2px;\n}\n\n#mobile-layout {\n  #notesContainer {\n    min-height: 150px;\n  }\n}\n"],
            sourceRoot: ""
        }]]
    }
    ,
    mLw6: t=>{
        t.exports = [[t.id, ".device-notification-support-link{margin-left:5px;color:#fff}.notifications-container .notification .notification-actions .btn-clear,.btn-clear{margin:unset;padding:unset;margin-left:3px;margin-right:3px;color:#fff;text-decoration:underline}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/notifications/styles/stage-notification-container.scss"],
            names: [],
            mappings: "AAAA,kCACC,eAAA,CACE,UAAA,CAGH,mFAEE,YAAA,CACA,aAAA,CACA,eAAA,CACA,gBAAA,CACA,UAAA,CACA,yBAAA",
            sourcesContent: [".device-notification-support-link {\n\tmargin-left: 5px;\n  \tcolor: white;\n}\n\n.notifications-container .notification .notification-actions .btn-clear,\n.btn-clear{\n  margin: unset;\n  padding: unset;\n  margin-left: 3px;\n  margin-right: 3px;\n  color: white;\n  text-decoration: underline;\n}\n"],
            sourceRoot: ""
        }]]
    }
    ,
    UY6L: t=>{
        t.exports = [[t.id, ".participant-permissions-popup-container{display:flex;flex-direction:column;width:100%;box-sizing:border-box}.participant-permissions-popup-container .participant-permissions-popup-header{display:flex;flex:1;justify-content:space-between;border-bottom:1px solid #cfcfcf}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container{display:flex;flex:1;flex-direction:column;position:relative;z-index:1}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participants-list-collapse{position:absolute;background:#fff;width:100%;top:52px;z-index:1;max-height:300px}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participants-list-collapse .ReactCollapse--content{z-index:10;box-sizing:border-box;padding:11px 0}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participants-list-collapse .users-wrapper{width:100%;display:flex;flex-direction:column;margin-top:5px}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participants-list-collapse .users-wrapper .user-wrapper{display:flex;padding:7px 12px;color:#3d4049;display:flex;align-items:center}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participants-list-collapse .users-wrapper .user-wrapper .user-avatar{width:25px;height:25px;display:inline-block;background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:50%;margin-right:16px}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participants-list-collapse .users-wrapper .user-wrapper .user-full-name{font-size:16px}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participants-list-collapse .users-wrapper .user-wrapper:hover{background:#0d817a;cursor:pointer;color:#fff}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participant-avatar-name-wrapper{display:flex;align-items:center;justify-content:flex-start;text-transform:capitalize;text-transform:capitalize;border-top-left-radius:5px;padding:11px 12px;background:#fff;box-sizing:border-box}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participant-avatar-name-wrapper .user-wrapper{display:flex;flex:1}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participant-avatar-name-wrapper .user-wrapper .user-avatar{width:30px;height:30px;display:inline-block;background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:50%;margin-right:9px}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participant-avatar-name-wrapper .user-wrapper .user-full-name{color:#3d4049;font-size:21px}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-left-container .participant-avatar-name-wrapper .permissions-view-toggle-btn{display:none}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-right-container{display:flex;flex:1;align-items:center;justify-content:flex-end;margin-right:20px}.participant-permissions-popup-container .participant-permissions-popup-header .participant-header-right-container .participant-permissions-close-btn{height:14px;width:14px;cursor:pointer}.participant-permissions-popup-container .participant-permissions-popup-content{display:flex;flex-direction:column;width:100%;flex:1;box-sizing:border-box;padding-left:35px;padding-right:57px}.participant-permissions-popup-container .participant-permissions-popup-content .participant-permissions-part-wrapper{display:flex;width:100%}.participant-permissions-popup-container .participant-permissions-popup-content .participant-permissions-part-wrapper .checkbox-list-container .checkbox-list-container{font-size:14px;color:#434343}.participant-permissions-popup-container .participant-permissions-popup-content .participant-permissions-part-wrapper .checkbox-list-container .checkbox-list-container .checkbox-list-item{padding:8.5px 0;font-size:14px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;cursor:pointer}.participant-permissions-popup-container .participant-permissions-popup-content .participant-permissions-part-wrapper .checkbox-list-container .checkbox-list-container .checkbox-list-item .permission-description{margin-right:3px}.participant-permissions-popup-container .participant-permissions-popup-content .participant-permissions-part-wrapper .checkbox-list-container .checkbox-list-container .checkbox-list-item .permission-secondary-description{color:#757575}.participant-permissions-popup-container .participant-permissions-popup-content .participant-permissions-part-wrapper .checkbox-list-container .checkbox-list-container .checkbox-list-item .chat-throttling-interval-wrapper{height:100%}.participant-permissions-popup-container .participant-permissions-popup-content .participant-permissions-part-wrapper .checkbox-list-container .checkbox-list-container .checkbox-list-item .chat-throttling-interval-wrapper .chat-throttling-interval-input{width:27px;height:27px;text-align:center;color:#3d4049;margin:5px}.participant-permissions-popup-container .participant-permissions-popup-content .participant-permissions-part-wrapper .checkbox-list-container .checkbox-list-container .checkbox-list-item .chat-throttling-interval-wrapper .chat-throttling-interval-input::-webkit-inner-spin-button,.participant-permissions-popup-container .participant-permissions-popup-content .participant-permissions-part-wrapper .checkbox-list-container .checkbox-list-container .checkbox-list-item .chat-throttling-interval-wrapper .chat-throttling-interval-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.participant-permissions-popup-container .participant-permissions-popup-content .participant-set-moderator-wrapper,.participant-permissions-popup-container .participant-permissions-popup-content .participant-chat-permissions-wrapper{border-bottom:1px solid #cfcfcf}.participant-permissions-popup-container .participant-permissions-popup-content .participant-chat-permissions-wrapper{display:flex;flex-direction:column}.participant-permissions-popup-container .participant-permissions-popup-content .participant-chat-permissions-wrapper .chat-permissions-heading{font-style:italic;font-size:12px;color:#434343;margin:5px 0}.participant-permissions-popup-container .participant-permissions-popup-content .participant-chat-permissions-wrapper .participant-settings-container .participant-permissions-list-container{margin-bottom:5px}.participant-permissions-popup-container .participant-permissions-popup-content .participant-set-moderator-wrapper,.participant-permissions-popup-container .participant-permissions-popup-content .participant-view-only-wrapper{padding:10px 0 5px 0}.participant-permissions-popup-container .participant-permissions-popup-footer{display:flex;justify-content:space-between;align-items:center;flex:1;padding:15px 35px 30px 35px}.participant-permissions-popup-container .participant-permissions-popup-footer .footer-eject-participant-button{box-sizing:border-box;display:flex;justify-content:center;align-items:center;padding:8px 13px 8px 9px;background-color:#e42525;font-size:14px;cursor:pointer}.participant-permissions-popup-container .participant-permissions-popup-footer .footer-eject-participant-button .participant-icon-remove-from-room{width:14px;height:14px;padding-right:9px}.participant-permissions-popup-container .participant-permissions-popup-footer .footer-close-button{color:#757575;cursor:pointer}.popup-content-blur{position:relative}.popup-content-blur .participant-avatar-name-wrapper{justify-content:space-between}.popup-content-blur .overlay-layer{position:absolute;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,.67);z-index:1}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/participants/components/popups/participant-permissions-popup.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/variables.scss"],
            names: [],
            mappings: "AAEA,yCAEE,YAAA,CACA,qBAAA,CACA,UAAA,CAIA,qBAAA,CAIA,+EACE,YAAA,CACA,MAAA,CACA,6BAAA,CAEA,+BAAA,CAEA,kHACE,YAAA,CACA,MAAA,CACA,qBAAA,CACA,iBAAA,CACA,SAAA,CAIA,8IACE,iBAAA,CACA,eAAA,CACA,UAAA,CACA,QAAA,CACA,SAAA,CACA,gBAAA,CAGA,sKACE,UAAA,CAIA,qBAAA,CACA,cAAA,CAGF,6JACE,UAAA,CACA,YAAA,CACA,qBAAA,CACA,cAAA,CAEA,2KACE,YAAA,CACA,gBAAA,CACA,aAAA,CAEA,YAAA,CACA,kBAAA,CAEA,wLACE,UAAA,CACA,WAAA,CACA,oBAAA,CACA,qBAAA,CACA,0BAAA,CACA,2BAAA,CACA,iBAAA,CACA,iBAAA,CAGF,2LAEE,cAAA,CAGF,iLACE,kBAAA,CACA,cAAA,CACA,UAAA,CAMR,mJACE,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,yBAAA,CACA,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,qBAAA,CAEA,iKACE,YAAA,CAEA,MAAA,CAEA,8KACE,UAAA,CACA,WAAA,CACA,oBAAA,CACA,qBAAA,CACA,0BAAA,CACA,2BAAA,CACA,iBAAA,CACA,gBAAA,CAGF,iLACE,aAAA,CACA,cAAA,CAIJ,gLACE,YAAA,CAKN,mHACE,YAAA,CACA,MAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAEA,sJACE,WAAA,CACA,UAAA,CACA,cAAA,CAKN,gFACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,MAAA,CAIA,qBAAA,CACA,iBAAA,CACA,kBAAA,CAEA,sHACE,YAAA,CACA,UAAA,CAGE,wKACE,cAAA,CACA,aAAA,CAEA,4LACE,eAAA,CACA,cAAA,CAEA,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,kBAAA,CACA,cAAA,CAEA,oNACE,gBAAA,CAGF,8NACE,aCpJe,CDuJjB,8NACE,WAAA,CAEA,8PACE,UAAA,CACA,WAAA,CACA,iBAAA,CACA,aAAA,CACA,UAAA,CAEA,kjBAEE,uBAAA,CACA,QAAA,CASd,yOAEE,+BAAA,CAGF,sHACE,YAAA,CACA,qBAAA,CAEA,gJACE,iBAAA,CACA,cAAA,CACA,aAAA,CACA,YAAA,CAIA,8LACE,iBAAA,CAKN,kOAEE,oBAAA,CAIJ,+EACE,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,MAAA,CAEA,2BAAA,CAEA,gHAGE,qBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,wBAAA,CACA,wBChOW,CDiOX,cAAA,CACA,cAAA,CAGA,mJACE,UAAA,CACA,WAAA,CACA,iBAAA,CAKJ,oGACE,aCzOuB,CD0OvB,cAAA,CAKN,oBACE,iBAAA,CAEA,qDACE,6BAAA,CAGF,mCACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,KAAA,CACA,MAAA,CACA,gCAAA,CACA,SAAA",
            sourcesContent: ['@import "~styles/css/shared/variables.scss";\n\n.participant-permissions-popup-container {\n\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  //padding: 12px;\n\n\n  .participant-permissions-popup-header {\n    display: flex;\n    flex: 1;\n    justify-content: space-between;\n\n    border-bottom: 1px solid #CFCFCF;\n\n    .participant-header-left-container {\n      display: flex;\n      flex: 1;\n      flex-direction: column;\n      position: relative;\n      z-index: 1;\n\n      //margin: 11px 12px;\n\n      .participants-list-collapse {\n        position: absolute;\n        background: #fff;\n        width: 100%;\n        top: 52px;\n        z-index: 1;\n        max-height: 300px;\n\n\n        .ReactCollapse--content {\n          z-index: 10;\n\n          -webkit-box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          box-sizing: border-box;\n          padding: 11px 0;\n        }\n\n        .users-wrapper {\n          width: 100%;\n          display: flex;\n          flex-direction: column;\n          margin-top: 5px;\n\n          .user-wrapper {\n            display: flex;\n            padding: 7px 12px;\n            color: #3D4049;\n\n            display: flex;\n            align-items: center;\n\n            .user-avatar {\n              width: 25px;\n              height: 25px;\n              display: inline-block;\n              background-size: cover;\n              background-position: center;\n              background-repeat: no-repeat;\n              border-radius: 50%;\n              margin-right: 16px;\n            }\n\n            .user-full-name {\n\n              font-size: 16px;\n            }\n\n            &:hover {\n              background: #0d817a;\n              cursor: pointer;\n              color: #fff;\n            }\n          }\n        }\n      }\n\n      .participant-avatar-name-wrapper {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        text-transform: capitalize;\n        text-transform: capitalize;\n        border-top-left-radius: 5px;\n        padding: 11px 12px;\n        background: #fff;\n        box-sizing: border-box;\n\n        .user-wrapper {\n          display: flex;\n          //cursor: pointer;\n          flex: 1;\n\n          .user-avatar {\n            width: 30px;\n            height: 30px;\n            display: inline-block;\n            background-size: cover;\n            background-position: center;\n            background-repeat: no-repeat;\n            border-radius: 50%;\n            margin-right: 9px;\n          }\n\n          .user-full-name {\n            color: #3D4049;\n            font-size: 21px;\n          }\n        }\n\n        .permissions-view-toggle-btn {\n          display: none;\n        }\n      }\n    }\n\n    .participant-header-right-container {\n      display: flex;\n      flex: 1;\n      align-items: center;\n      justify-content: flex-end;\n      margin-right: 20px;\n\n      .participant-permissions-close-btn {\n        height: 14px;\n        width: 14px;\n        cursor: pointer;\n      }\n    }\n  }\n\n  .participant-permissions-popup-content {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    flex: 1;\n\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding-left: 35px;\n    padding-right: 57px;\n\n    .participant-permissions-part-wrapper {\n      display: flex;\n      width: 100%;\n\n      .checkbox-list-container {\n        .checkbox-list-container {\n          font-size: 14px;\n          color: #434343;\n\n          .checkbox-list-item {\n            padding: 8.5px 0;\n            font-size: 14px;\n\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: center;\n            cursor: pointer;\n\n            .permission-description {\n              margin-right: 3px;\n            }\n\n            .permission-secondary-description {\n              color: $newrowLightAccessibleWhite;\n            }\n\n            .chat-throttling-interval-wrapper {\n              height: 100%;\n\n              .chat-throttling-interval-input {\n                width: 27px;\n                height: 27px;\n                text-align: center;\n                color: #3D4049;\n                margin: 5px;\n\n                &::-webkit-inner-spin-button,\n                &::-webkit-outer-spin-button {\n                  -webkit-appearance: none;\n                  margin: 0;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n\n    .participant-set-moderator-wrapper,\n    .participant-chat-permissions-wrapper {\n      border-bottom: 1px solid #CFCFCF;\n    }\n\n    .participant-chat-permissions-wrapper {\n      display: flex;\n      flex-direction: column;\n\n      .chat-permissions-heading {\n        font-style: italic;\n        font-size: 12px;\n        color: #434343;\n        margin: 5px 0;\n      }\n\n      .participant-settings-container {\n        .participant-permissions-list-container {\n          margin-bottom: 5px;\n        }\n      }\n    }\n\n    .participant-set-moderator-wrapper,\n    .participant-view-only-wrapper {\n      padding: 10px 0 5px 0;\n    }\n  }\n\n  .participant-permissions-popup-footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex: 1;\n\n    padding: 15px 35px 30px 35px;\n\n    .footer-eject-participant-button {\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      padding: 8px 13px 8px 9px;\n      background-color: $newrowLightRed;\n      font-size: 14px;\n      cursor: pointer;\n\n\n      .participant-icon-remove-from-room {\n        width: 14px;\n        height: 14px;\n        padding-right: 9px;\n\n      }\n    }\n\n    .footer-close-button {\n      color: $newrowLightAccessibleWhite;\n      cursor: pointer;\n    }\n  }\n}\n\n.popup-content-blur {\n  position: relative;\n\n  .participant-avatar-name-wrapper {\n    justify-content: space-between;\n  }\n\n  .overlay-layer {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.67);\n    z-index: 1;\n  }\n\n}\n\n\n\n\n\n\n\n', "$newrowColor: #158079;\n$newrowDarker: #158079;\n$newrowDark: #0d817a;\n$newrowColorDarker: #3ea58c;\n$newrowGray: #a7a7a7;\n$newrowDarkBlue: #101b21;\n$newrowBlack: #434343;\n$media-player-green: #68a992;\n$nr-seagreen: #79c5a7;\n$bar-height: 5px;\n$notification-success-color: #00a489;\n$notification-dark-color: #434343;\n$notification-info-color: #ffae42;\n$notification-error-color: red;\n$notification-message-color: #80d3ff;\n$notification-light-color: #fae887;\n$notification-light-green-color: #80DD79;\n$notification-height: 50px;\n$notification-margin-bottom: 2px;\n$top-bar-background: #111b23;\n$top-bar-height: 54px;\n$top-bar-border: 1px solid #434343;\n$top-bar-item-hover-background: rgba(255, 255, 255, 0.14);\n$newrowRed: #df2021;\n$newrowLightRed: #e42525;\n$newrowGrayBG: #f3f3f3;\n$newrowLightGreen: #399691;\n$newrowPopupMask: rgba(0, 0, 0, 0.67);\n$newrowBorderLight: #a7a7a7;\n$newrowLightAccessibleWhite: #757575;\n$newrowSearchInput: #434343;\n$newrowOutline: Highlight solid 2px;\n$newrowPopupDarkBg: #161616;\n$newrowCyanGreen: #148079;\n$simpleBlackColor: #000000;\n$newrowLightGray: #f2f2f2;\n$newrowGreyDisabledText: #727272;\n$indication: #25D625;\n"],
            sourceRoot: ""
        }]]
    }
    ,
    nC8l: t=>{
        t.exports = [[t.id, ".remove-participant-container{display:flex;justify-content:center;align-items:center;flex-direction:column;box-sizing:border-box;width:542px}.remove-participant-container .remove-participant-container-header{width:100%;height:50px;border-bottom:1px solid #d6d6d6;box-sizing:border-box;padding:15px 14px;display:flex;align-items:center}.remove-participant-container .remove-participant-container-header .eject-participant-icon{width:20px;height:20px}.remove-participant-container .remove-participant-container-header .close-icon{width:14px;height:14px;display:flex;align-self:flex-end}.remove-participant-container .remove-participant-container-header .remove-participant-heading-text{color:#3d4049;font-size:21px;flex:1;margin-left:11px}.remove-participant-container .remove-participant-container-content{box-sizing:border-box;width:100%;display:flex}.remove-participant-container .remove-participant-container-content .remove-participant-content-text{font-size:17px;color:#434343;padding-top:30px;padding-left:30px;padding-bottom:67px}.remove-participant-container .remove-participant-container-content .remove-participant-content-text .remove-participant-text-red{color:#e42525;font-weight:bold}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/participants/components/popups/remove-participant.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/variables.scss"],
            names: [],
            mappings: "AAEA,8BACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,qBAAA,CAEA,qBAAA,CAEA,WAAA,CAEA,mEACE,UAAA,CACA,WAAA,CACA,+BAAA,CACA,qBAAA,CACA,iBAAA,CAEA,YAAA,CACA,kBAAA,CAEA,2FACE,UAAA,CACA,WAAA,CAGF,+EACE,UAAA,CACA,WAAA,CAEA,YAAA,CACA,mBAAA,CAGF,oGACE,aAAA,CACA,cAAA,CACA,MAAA,CACA,gBAAA,CAIJ,oEACE,qBAAA,CACA,UAAA,CACA,YAAA,CAEA,qGACE,cAAA,CACA,aAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CAEA,kIACE,aChCS,CDiCT,gBAAA",
            sourcesContent: ['@import "~styles/css/shared/variables.scss";\n\n.remove-participant-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  box-sizing: border-box;\n\n  width: 542px;\n\n  .remove-participant-container-header {\n    width: 100%;\n    height: 50px;\n    border-bottom: 1px solid #d6d6d6;\n    box-sizing: border-box;\n    padding: 15px 14px;\n\n    display: flex;\n    align-items: center;\n\n    .eject-participant-icon {\n      width: 20px;\n      height: 20px;\n    }\n\n    .close-icon {\n      width: 14px;\n      height: 14px;\n\n      display: flex;\n      align-self: flex-end;\n    }\n\n    .remove-participant-heading-text {\n      color: #3D4049;\n      font-size: 21px;\n      flex: 1;\n      margin-left: 11px;\n    }\n  }\n\n  .remove-participant-container-content {\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n\n    .remove-participant-content-text {\n      font-size: 17px;\n      color: #434343;\n      padding-top: 30px;\n      padding-left:  30px;\n      padding-bottom: 67px;\n\n      .remove-participant-text-red {\n        color: $newrowLightRed;\n        font-weight: bold;\n      }\n    }\n  }\n}', "$newrowColor: #158079;\n$newrowDarker: #158079;\n$newrowDark: #0d817a;\n$newrowColorDarker: #3ea58c;\n$newrowGray: #a7a7a7;\n$newrowDarkBlue: #101b21;\n$newrowBlack: #434343;\n$media-player-green: #68a992;\n$nr-seagreen: #79c5a7;\n$bar-height: 5px;\n$notification-success-color: #00a489;\n$notification-dark-color: #434343;\n$notification-info-color: #ffae42;\n$notification-error-color: red;\n$notification-message-color: #80d3ff;\n$notification-light-color: #fae887;\n$notification-light-green-color: #80DD79;\n$notification-height: 50px;\n$notification-margin-bottom: 2px;\n$top-bar-background: #111b23;\n$top-bar-height: 54px;\n$top-bar-border: 1px solid #434343;\n$top-bar-item-hover-background: rgba(255, 255, 255, 0.14);\n$newrowRed: #df2021;\n$newrowLightRed: #e42525;\n$newrowGrayBG: #f3f3f3;\n$newrowLightGreen: #399691;\n$newrowPopupMask: rgba(0, 0, 0, 0.67);\n$newrowBorderLight: #a7a7a7;\n$newrowLightAccessibleWhite: #757575;\n$newrowSearchInput: #434343;\n$newrowOutline: Highlight solid 2px;\n$newrowPopupDarkBg: #161616;\n$newrowCyanGreen: #148079;\n$simpleBlackColor: #000000;\n$newrowLightGray: #f2f2f2;\n$newrowGreyDisabledText: #727272;\n$indication: #25D625;\n"],
            sourceRoot: ""
        }]]
    }
    ,
    pgGo: t=>{
        t.exports = [[t.id, ".participant-settings .participant-top-line{display:flex;align-items:center;height:100%}.participant-settings .participant-top-line .participant-breakout-info{margin-left:10px;margin-right:8px;white-space:nowrap;font-style:italic;font-size:11px;color:#484747}.participant-settings .participant-hand-raise{display:flex;justify-content:center;align-items:center;margin:0 10px 0 18px;outline-offset:0;flex:0 0 auto}.participant-settings .participant-hand-raise .participant-hand-raise-icon{margin-right:0}.participant-settings .participant-hand-raise-icon{width:13px;height:13px;fill:#111b23;margin-right:9px;flex:0 0 auto}.participant-settings .participant-poll-answer{height:21px;width:21px;margin-right:9px;flex:0 0 auto}#overlay_cam_icon{fill:#fff}#overlay_cam_disabled_icon{fill:#fff}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/participants/styles/participant.scss"],
            names: [],
            mappings: "AACI,4CACI,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,uEACI,gBAAA,CACA,gBAAA,CACA,kBAAA,CACA,iBAAA,CACA,cAAA,CACA,aAAA,CAKR,8CACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,oBAAA,CACA,gBAAA,CACA,aAAA,CASA,2EACI,cAAA,CAIR,mDACI,UAAA,CACA,WAAA,CACA,YAAA,CACA,gBAAA,CACA,aAAA,CAGJ,+CACI,WAAA,CACA,UAAA,CACA,gBAAA,CACA,aAAA,CAIR,kBACI,SAAA,CAGJ,2BACI,SAAA",
            sourcesContent: [".participant-settings {\n    .participant-top-line {\n        display: flex;\n        align-items: center;\n        height: 100%;\n\n        .participant-breakout-info {\n            margin-left: 10px;\n            margin-right: 8px;\n            white-space: nowrap;\n            font-style: italic;\n            font-size: 11px;\n            color: #484747;\n        }\n\n    }\n\n    .participant-hand-raise {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0 10px 0 18px;\n        outline-offset: 0;\n        flex: 0 0 auto;\n        //padding: 6px;\n        //border-radius: 3px;\n        //transition: background-color 100ms ease-in;\n\n        &:hover {\n            //background-color: rgba(79, 133, 162, 0.21);\n        }\n\n        .participant-hand-raise-icon {\n            margin-right: 0;\n        }\n    }\n\n    .participant-hand-raise-icon {\n        width: 13px;\n        height: 13px;\n        fill: #111b23;\n        margin-right: 9px;\n        flex: 0 0 auto;\n    }\n\n    .participant-poll-answer {\n        height: 21px;\n        width: 21px;\n        margin-right: 9px;\n        flex: 0 0 auto;\n    }\n}\n\n#overlay_cam_icon{\n    fill: white;\n}\n\n#overlay_cam_disabled_icon{\n    fill: white;\n}\n\n//#overlay_mic_disabled_icon{\n//    fill: white;\n//}\n\n"],
            sourceRoot: ""
        }]]
    }
    ,
    "7B0B": t=>{
        t.exports = [[t.id, "#participants-module-container .side-menu-dropdown-content-custom{top:60px;right:-26px}#participants-module-container .menu-module-title{text-transform:unset;position:relative}#participants-module-container .menu-module-title .dropdown-wrapper{height:100%}#participants-module-container .menu-module-title .dropdown-wrapper .side-menu-dropdown{height:100%;width:30px;box-sizing:border-box;display:flex;justify-content:center;align-items:center}#participants-module-container .menu-module-title .dropdown-wrapper .toggled{border-bottom:1px solid #fff}#participants-module-container .participants-dropdown-list{width:auto;display:flex;flex-direction:column}#participants-module-container .participants-dropdown-list .participants-dropdown-list-item{font-size:17px;color:#000;cursor:pointer;line-height:50px}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/participants/styles/participants-dropdown.scss"],
            names: [],
            mappings: "AACC,kEACC,QAAA,CACA,WAAA,CAGD,kDACC,oBAAA,CACA,iBAAA,CAEA,oEACC,WAAA,CAEA,wFACC,WAAA,CACA,UAAA,CACA,qBAAA,CAEA,YAAA,CACA,sBAAA,CACA,kBAAA,CAED,6EACC,4BAAA,CAKH,2DACC,UAAA,CACA,YAAA,CACA,qBAAA,CAEA,4FACC,cAAA,CACA,UAAA,CACA,cAAA,CACA,gBAAA",
            sourcesContent: ["#participants-module-container {\n\t.side-menu-dropdown-content-custom {\n\t\ttop: 60px;\n\t\tright: -26px;\n\t}\n\n\t.menu-module-title {\n\t\ttext-transform: unset;\n\t\tposition: relative;\n\n\t\t.dropdown-wrapper {\n\t\t\theight: 100%;\n\n\t\t\t.side-menu-dropdown {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 30px;\n\t\t\t\tbox-sizing: border-box;\n\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.toggled {\n\t\t\t\tborder-bottom: 1px solid #fff;\n\t\t\t}\n\t\t}\n\t}\n\n\t.participants-dropdown-list {\n\t\twidth: auto;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\t.participants-dropdown-list-item {\n\t\t\tfont-size: 17px;\n\t\t\tcolor: #000;\n\t\t\tcursor: pointer;\n\t\t\tline-height: 50px;\n\t\t}\n\t}\n}\n"],
            sourceRoot: ""
        }]]
    }
    ,
    i9Wr: t=>{
        t.exports = [[t.id, "#participantsList{width:100%;display:inline-block;height:100%}#participantsList .participants-title{text-align:left;padding:0px 15px;font-size:14px;border-bottom:1px solid rgba(0,0,0,.2);line-height:53px;background:#101b21;color:#fff;text-transform:uppercase}#participantsList .participants-title .participants-count{margin-left:10px;color:#158079;font-weight:600}#participantsList #participant-active-btn-toggle-cam .participant-media-disabled-by-moderator,#participantsList #participant-active-btn-toggle-mic .participant-media-disabled-by-moderator{border:1px solid red !important}#participantsList .participants-content{padding:unset;margin:unset;margin-bottom:10px;height:100%;max-height:calc(100% - 49px);overflow:auto}#participantsList .participants-content .no-participants{height:100%;display:flex;align-items:center;justify-content:center;text-transform:capitalize;font-size:14px;color:#727272;text-align:center}#participantsList .participants-content .participant{list-style-type:none;text-align:left;box-sizing:border-box;outline-offset:-2px;padding:9px}#participantsList .participants-content .participant:focus{outline:Highlight solid 2px}#participantsList .participants-content .participant::-moz-focus-inner{border:0}#participantsList .participants-content .participant .participant-quick-settings-container{overflow:hidden}#participantsList .participants-content .participant .participant-quick-settings-container .participant-quick-settings-wrapper{margin-top:-100%;transition:all .35s}#participantsList .participants-content .participant .participant-quick-settings-container .quick-settings-expanded{margin-top:0;transition:all .35s}#participantsList .participants-content .participant .user-avatar{width:45px;height:45px;display:inline-block;background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:50%;margin-right:10px;margin-bottom:1px;vertical-align:bottom;box-sizing:border-box;align-self:flex-end}#participantsList .participants-content .participant svg.user-avatar{fill:#111b23;opacity:.42}#participantsList .participants-content .participant .is-dominant{border:1px solid #000;box-shadow:0 0 0 2px #00ca00;box-sizing:border-box;position:relative}#participantsList .participants-content .participant .is-dominant .dominant-dot{width:9px;height:9px;background:#00ca00;border-radius:50px;position:absolute;top:30px;left:27px;display:none;border:3px solid #fff}#participantsList .participants-content .participant .is-dominant .dominant-dot::before{content:\"\";width:5px;height:5px;background:#101b21;z-index:999;position:absolute;margin-top:2.1px;margin-left:2.1px;border-radius:50%}#participantsList .participants-content .participant .participant-top-line{position:relative;line-height:25px}#participantsList .participants-content .participant .participant-top-line .participant-no-present-wrapper{margin-right:20px}#participantsList .participants-content .participant .participant-top-line .participant-no-present-wrapper .participant-no-present-icon{width:16px;height:16px;flex:0 0 auto;background-image:url('notPresent.d5b125e61b4a7fc7960a.svg')}#participantsList .participants-content .participant .participant-moderation-mark{width:15px;height:15px;margin-right:5px;flex:0 0 auto}#participantsList .participants-content .participant .participant-moderator-mark{fill:#111b23;flex:0 0 auto}#participantsList .participants-content .participant .participant-partial-moderator-mark{fill:#a7a7a7;flex:0 0 auto}#participantsList .participants-content .participant .participant-captioner-mark{width:19px;height:13px;margin-right:7px;margin-left:1px;flex:0 0 auto}#participantsList .participants-content .participant .participant-user-name{display:inline-block;width:100%;flex:1 1 auto;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-weight:600;color:#111b23}#participantsList .participants-content .participant.permissions-expanded{background-color:#fff}#participantsList .participants-content .participant.permissions-expanded .participant-stream-actions .permissions-toggle-container .permissions-view-toggle-btn{display:block;-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}#participantsList .participants-content .participant .ReactCollapse--collapse{margin-top:-8px}#participantsList .participants-content .participant-info-wrapper{display:flex;align-items:center}#participantsList .participants-content .participant:focus,#participantsList .participants-content .participant:hover{background:#fff}#participantsList .participants-content .participant:focus .participant-stream-actions .permissions-toggle-container .permissions-view-toggle-btn,#participantsList .participants-content .participant:hover .participant-stream-actions .permissions-toggle-container .permissions-view-toggle-btn{display:block}#participantsList .participants-video-on{-webkit-mask-image:url('video-camera.61c4cf97ac67f6f685c5.svg');mask-image:url('video-camera.61c4cf97ac67f6f685c5.svg')}#participantsList .participants-video-off{-webkit-mask-image:url('turn-video-off-button.77c350b8f4c6487b38dc.svg');mask-image:url('turn-video-off-button.77c350b8f4c6487b38dc.svg')}#participantsList .participants-video-off-animation{-webkit-animation:changeColorVideo .1s;animation:changeColorVideo .1s}#participantsList .participants-audio-on{-webkit-mask-image:url('microphone-black-shape.5c75cac1919b3b9287e8.svg');mask-image:url('microphone-black-shape.5c75cac1919b3b9287e8.svg')}#participantsList .participants-audio-off{-webkit-mask-image:url('microphone-off.b0b7d55917bcab642a09.svg');mask-image:url('microphone-off.b0b7d55917bcab642a09.svg');-webkit-transform:scaleX(-1);transform:scaleX(-1)}#participantsList .participants-audio-off-animation{-webkit-animation:changeColor .1s;animation:changeColor .1s}#participantsList .participants-hand-raise,#participantsList .participants-hand-set{-webkit-mask-image:url('raiseHand.c1c424793dcfa50e1797.svg');mask-image:url('raiseHand.c1c424793dcfa50e1797.svg')}#participantsList .participants-hand-set{opacity:.5}@-webkit-keyframes changeColor{from{background-color:#e32726}to{background-color:#000}}@keyframes changeColor{from{background-color:#e32726}to{background-color:#000}}@-webkit-keyframes changeColorVideo{from{background-color:#e32726}to{background-color:#000}}@keyframes changeColorVideo{from{background-color:#e32726}to{background-color:#000}}#participantsList .participant-control-btn-highlighted:not(.disabled):not(.participant-media-control-disabled){outline:Highlight solid 2px}#participantsList .participant-media-control-container{padding:3px 4px;border:1px solid #d9d8d9;background-color:#fff;border-radius:unset}#participantsList .participant-media-control-disabled{pointer-events:none;opacity:.35}#participantsList .participant-media-control{width:12px;height:14px;background-color:#111b23;-webkit-mask-size:contain;-webkit-mask-position:center;-webkit-mask-repeat:no-repeat}#participantsList .participant-media-control.participants-video-off,#participantsList .participant-media-control.participants-audio-off{background-color:#757575}#participantsList .participants-tool-status{background:transparent}#participantsList .participants-tool-status .participants-whiteboard-on,#participantsList .participants-tool-status .participants-whiteboard-off{width:15px}#participantsList .participants-tool-status .participants-chat-off,#participantsList .participants-tool-status .participants-chat-on{width:15px}#participantsList .participants-tool-status .participants-whiteboard-off{fill:#757575}#participantsList .participants-content .participant-settings{display:inline-block;width:calc(100% - 60px);margin-left:5px}#participantsList .participants-content .participant-settings .btn{margin-right:4px}#participantsList .participants-content .participant-view .participant-settings{margin-bottom:10px}#participantsList .participants-content .participant-permissions-container{font-size:13px;line-height:17px;margin-top:15px;padding-left:55px;-webkit-user-select:none;user-select:none}#participantsList .participants-content .participant-permissions-container .participant-permissions-wrapper{outline:none;width:82%;font-size:14px;font-weight:bold;color:#434343;margin:19px 0}#participantsList .participants-content .participant-permissions-container .participant-permissions-wrapper .participant-permissions-divisor{margin:15px 0;height:1px;width:100%;background-color:#e3e3e3}#participantsList .participants-content .participant-permissions-container .participant-permissions-partial-moderation-container{border-bottom:1px solid #ddd;display:inline-block;padding:7px 0}#participantsList .participants-content .participant-permissions-container .participant-permissions-partial-moderation-container.disabled{opacity:.3;cursor:not-allowed}#participantsList .participants-content .participant-permissions-container .participant-permissions-partial-moderation-item{margin-bottom:3px}#participantsList .participants-content .participant-permissions-container .participant-permissions-partial-moderation-item.highlighted{outline:Highlight solid 2px}#participantsList .participants-content .participant-permissions-container .participant-permissions-partial-moderation-item.disabled{cursor:not-allowed}#participantsList .participants-content .participant-permissions-container .participant-permissions-partial-moderation-item:last-child{margin-bottom:0px}#participantsList .participants-content .participant-permissions-container .moderation-item{line-height:22px;cursor:pointer}#participantsList .participants-content .participant-permissions-container .moderation-item .permission-description{float:left}#participantsList .participants-content .participant-permissions-container .participant-permissions-full-moderation{padding-top:10px}#participantsList .participants-content .participant-permissions-container .full-moderation-container,#participantsList .participants-content .participant-permissions-container .view-only-container{margin:11px 0 !important}#participantsList .participants-content .participant-permissions-container .full-moderation-container .checked-checkbox-icon,#participantsList .participants-content .participant-permissions-container .view-only-container .checked-checkbox-icon{background:url('checkBox.94b96d6171030ba60a8a.svg') no-repeat 0 0}#participantsList .participants-content .participant-permissions-container .full-moderation-container .custom-checked-checkbox-icon,#participantsList .participants-content .participant-permissions-container .view-only-container .custom-checked-checkbox-icon{background:url('checkBoxAWS.98817d7d81874a2a7e99.svg') no-repeat 0 0}#participantsList .participants-content .participant-permissions-container .disabled-permission{opacity:.42}#participantsList .participants-content .participant-permissions-container .empty-checkbox-icon,#participantsList .participants-content .participant-permissions-container .checked-checkbox-icon{width:16px;height:16px;box-sizing:border-box;background-size:contain}#participantsList .participants-content .participant-permissions-container .empty-checkbox-icon{border:1px solid #757575;background:#fbfbfb}#participantsList .participants-content .participant-permissions-container .checked-checkbox-icon{border:none}#participantsList .participants-content .participant-permissions-container .moderation-item{display:flex;align-items:center;margin-bottom:4px}#participantsList .participants-content .participant-permissions-container .settings-list-item .participant-settings-box-item{width:15px;height:15px;margin-right:10px}#participantsList .participants-content .participant-permissions-container .settings-list-item .participant-settings-box-item .participant-icon-more-settings{fill:#434343}#participantsList .participants-content .participant-permissions-container .settings-list-item .participant-settings-box-item .participant-icon-remove-from-room{fill:#434343}#participantsList .participants-content .participant-permissions-container .settings-list-item .settings-list-permission-description-wrapper{display:flex;flex-direction:column;font-weight:bold;font-size:14px}#participantsList .participants-content .participant-permissions-container .settings-list-item .settings-list-permission-description-wrapper .participant-settings-box-item-underline{width:100%;height:1px;display:block}#participantsList .participants-content .participant-permissions-container .settings-list-item .settings-list-permission-description-wrapper .permission-description{line-height:14px}#participantsList .participants-content .participant-permissions-container .remove-from-room-container{color:#434343}#participantsList .participants-content .participant-permissions-container .remove-from-room-container .participant-settings-box-item-underline{background:#434343}#participantsList .participants-content .participant-permissions-container .remove-from-room-container .participant-settings-box-item-underline:hover{background:#e42525}#participantsList .participants-content .participant-permissions-container .remove-from-room-container:hover{color:#e42525}#participantsList .participants-content .participant-permissions-container .more-permissions-container .participant-settings-box-item-underline{background:#000}#participantsList .participants-content .participant-stream-actions{display:flex;line-height:14px;width:100%}#participantsList .participants-content .participant-stream-actions .participant-stream-actions-wrapper{display:flex}#participantsList .participants-content .participant-stream-actions .participant-stream-actions-buttons-disabled{cursor:default;pointer-events:none}#participantsList .participants-content .participant-stream-actions .btn-list-item{display:flex}#participantsList .participants-content .participant-stream-actions .btn-list-item .ring-loader-container{padding:0;background:#fff}#participantsList .participants-content .participant-stream-actions .btn-list-item .ring-loader-container img{max-width:100%;max-height:100%}#participantsList .participants-content .participant-stream-actions .btn-list-item.permissions-toggle-container{line-height:23px;margin-left:auto;margin-right:4px;display:flex;justify-content:center;align-items:center}#participantsList .participants-content .participant-stream-actions .btn-list-item.permissions-toggle-container .permissions-view-toggle-btn{display:none;padding:0;margin:0;-webkit-transform:rotateZ(0);transform:rotateZ(0);transition:-webkit-transform 100ms linear;transition:transform 100ms linear;transition:transform 100ms linear, -webkit-transform 100ms linear}#participantsList #participants-control-bar{padding:9px;border-bottom:1px solid #ddd;display:flex;align-items:center;justify-content:space-between}#participantsList #participants-control-bar .participant-media-control{display:inline-block;margin-right:5px;position:relative;top:2px}#participantsList #participants-control-bar .btn{padding:8px;border-radius:unset}#participantsList #participants-control-bar .btn-red .participants-audio-off{background-color:#fff}#participantsList #participants-control-bar .search-bar{display:flex;flex-direction:row-reverse;align-items:center;flex:1 1 auto;border:1px solid #cfcfcf;background-color:#fff;width:62px}#participantsList #participants-control-bar .search-bar .search-bar-text{width:100%;height:30px;box-sizing:border-box;padding:6px 10px;flex:1;font-size:14px;color:#434343}#participantsList #participants-control-bar .search-bar .search-bar-text:focus{outline:Highlight solid 2px}#participantsList #participants-control-bar .search-bar .search-bar-text::-moz-focus-inner{border:0}#participantsList #participants-control-bar .search-bar .search-bar-icon{width:12px;height:12px;fill:#111b23;margin-left:10px}#participantsList #participants-control-bar .mute-controls{display:flex;align-items:center;margin:0 9px 0 0}#participantsList #participants-control-bar .mute-controls .mute-all-control-container{font-size:12px;line-height:14px;margin-left:8px;white-space:pre-wrap;word-break:break-word;max-width:80px;flex:0 0 auto;pointer-events:none}#participantsList #participants-control-bar .mute-controls .mute-controls-title{font-size:12px;font-weight:bold;white-space:nowrap}#participantsList #participants-control-bar .mute-controls .participant-media-control-wrapper{width:30px;height:30px;background-color:#fff;border:1px solid #cfcfcf;box-sizing:border-box;display:flex;justify-content:center;align-items:center;cursor:pointer;margin-left:8px}#participantsList #participants-control-bar .mute-controls .participant-media-control-wrapper.active{border:1px solid red}#participantsList #participants-control-bar .mute-controls .participant-media-control{margin:0;top:0;height:16px;width:16px}#participantsList #participants-control-bar .mute-controls .participant-media-control-tooltip{padding:8px 12px}#participantsList #participants-control-bar .animated{float:right}#participantsList #participants-control-bar .magnifing-glass-icon{position:absolute;margin:0;top:50%;left:10px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background-color:#757575;width:10px;height:10px;z-index:10}#participantsList #participants-control-bar .clear-search-bar{background-color:#757575;width:8px;height:8px}.btn.live-buttons{border:1px solid #cfcfcf;display:inline-block;padding:5px 6px;font-size:10px;font-weight:800;border-radius:0px;letter-spacing:1px;line-height:10px;width:38px;height:22px;box-sizing:border-box}.btn.live-buttons.btn-trans{background:#fff;font-weight:400;color:#111b23}.btn.live-buttons.btn-red{background:#e42525;color:#fff;border-color:transparent;display:flex;align-items:center}.btn-red{background:#e42525;color:#fff}.btn-gray{background:#ddd;color:#434343}.browser-type-icon{width:20px;height:15px;flex:0 0 auto}.temporarily-disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.temporarily-disabled:hover,.temporarily-disabled:active{pointer-events:none}@-webkit-keyframes invertAnimation{0%,100%{-webkit-filter:invert(0)}30%{-webkit-filter:invert(0.3)}70%{-webkit-filter:invert(0.7)}50%{-webkit-filter:invert(0.7)}}.remove-reply-icon{-webkit-mask-image:url('close-black.11454284e1a01e44faf5.svg');mask-image:url('close-black.11454284e1a01e44faf5.svg');width:10px;height:10px;background-color:#000;cursor:pointer;display:inline-block;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;right:0;left:auto;align-self:center}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/participants/styles/participants.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/variables.scss", "/home/runner/work/kme-web/kme-web/apps/nr2/src/app/styles/css/shared/mixins.scss"],
            names: [],
            mappings: "AASA,kBACC,UAAA,CACA,oBAAA,CACA,WAAA,CAEA,sCACC,eAAA,CACA,gBAAA,CACA,cAAA,CACA,sCAAA,CACA,gBAAA,CACA,kBAAA,CACA,UAAA,CACA,wBAAA,CAEA,0DACC,gBAAA,CACA,aC1BW,CD2BX,eAAA,CAMD,4LACC,+BAAA,CAKF,wCACC,aAAA,CACA,YAAA,CACA,kBAAA,CACA,WAAA,CACA,4BAAA,CACA,aAAA,CAEA,yDACC,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,yBAAA,CACA,cAAA,CACA,aAAA,CACA,iBAAA,CAGD,qDAEC,oBAAA,CACA,eAAA,CAGA,qBAAA,CACA,mBAAA,CAgBA,WAAA,CE9ED,2DACE,2BD2BY,CCzBd,uEACE,QAAA,CF4DD,2FACC,eAAA,CAEA,+HACC,gBAAA,CACA,mBAAA,CAGD,oHACC,YAAA,CACA,mBAAA,CAMF,kEACC,UAAA,CACA,WAAA,CACA,oBAAA,CACA,qBAAA,CACA,0BAAA,CACA,2BAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,qBAAA,CAIA,qBAAA,CAEA,mBAAA,CAGD,qEACC,YAAA,CACA,WAAA,CAGD,kEACC,qBAAA,CACA,4BAAA,CACA,qBAAA,CACA,iBAAA,CAEA,gFACC,SAAA,CACA,UAAA,CACA,kBAAA,CAGA,kBAAA,CAEA,iBAAA,CACA,QAAA,CACA,SAAA,CACA,YAAA,CAEA,qBAAA,CAEA,wFACC,UAAA,CACA,SAAA,CACA,UAAA,CACA,kBAAA,CACA,WAAA,CACA,iBAAA,CACA,gBAAA,CACA,iBAAA,CAIA,iBAAA,CAOH,2EACC,iBAAA,CACA,gBAAA,CAEA,2GACC,iBAAA,CAEA,wIACC,UAAA,CACA,WAAA,CACM,aAAA,CACN,2DAAA,CAKH,kFACC,UAAA,CACA,WAAA,CACA,gBAAA,CACI,aAAA,CAGL,iFACC,YAAA,CACI,aAAA,CAGL,yFACC,YC5KS,CD6KL,aAAA,CAGL,iFACC,UAAA,CACA,WAAA,CACA,gBAAA,CACA,eAAA,CACI,aAAA,CAGL,4EACC,oBAAA,CACI,UAAA,CACA,aAAA,CACJ,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,eAAA,CACA,aAAA,CAGD,0EACC,qBAAA,CAIE,iKACC,aAAA,CACA,iCAAA,CAAA,yBAAA,CAMJ,8EACC,eAAA,CAIF,kEACC,YAAA,CACA,kBAAA,CAGD,sHAEC,eAAA,CAIE,oSACC,aAAA,CAQL,yCACG,+DAAA,CAAA,uDAAA,CAGH,0CACC,wEAAA,CAAA,gEAAA,CAGD,oDACC,sCAAA,CAAA,8BAAA,CAGD,yCACG,yEAAA,CAAA,iEAAA,CAGH,0CACC,iEAAA,CAAA,yDAAA,CACA,4BAAA,CAAA,oBAAA,CAGD,oDACC,iCAAA,CAAA,yBAAA,CAGD,oFAEC,4DAAA,CAAA,oDAAA,CAGD,yCACC,UAAA,CAID,+BACC,KACC,wBAAA,CAED,GACC,qBAAA,CAAA,CALF,uBACC,KACC,wBAAA,CAED,GACC,qBAAA,CAAA,CAIF,oCACC,KACC,wBAAA,CAED,GACC,qBAAA,CAAA,CALF,4BACC,KACC,wBAAA,CAED,GACC,qBAAA,CAAA,CAIF,+GACC,2BCpQc,CDuQf,uDACC,eAAA,CACA,wBAAA,CACA,qBAAA,CACA,mBAAA,CAGD,sDACC,mBAAA,CACA,WAAA,CAGD,6CACC,UAAA,CACA,WAAA,CACA,wBAAA,CACA,yBAAA,CACA,4BAAA,CACA,6BAAA,CAEE,wIAEE,wBC/RuB,CDmS5B,4CACC,sBAAA,CAEA,iJAEC,UAAA,CAGD,qIAEC,UAAA,CAGD,yEACC,YCjT0B,CDwT3B,8DACC,oBAAA,CACA,uBAAA,CACA,eAAA,CAEA,mEACC,gBAAA,CAKD,gFACC,kBAAA,CAIF,2EACC,cAAA,CACA,gBAAA,CACA,eAAA,CACA,iBAAA,CACA,wBAAA,CAAA,gBAAA,CAEA,4GACC,YAAA,CAEA,SAAA,CACA,cAAA,CACA,gBAAA,CACA,aC5WU,CD6WV,aAAA,CAEA,6IACC,aAAA,CACA,UAAA,CACA,UAAA,CACA,wBAAA,CAIF,iIACC,4BAAA,CACA,oBAAA,CACA,aAAA,CAGD,0IACC,UAAA,CACA,kBAAA,CAGD,4HACC,iBAAA,CAEA,wIACC,2BC7WW,CDiXb,qIACC,kBAAA,CAGD,uIACC,iBAAA,CAGD,4FACC,gBAAA,CACA,cAAA,CAEA,oHACC,UAAA,CAIF,oHACC,gBAAA,CAGD,sMAEC,wBAAA,CAEA,oPACC,iEAAA,CAED,kQACC,oEAAA,CAIF,gGACC,WAAA,CAGD,kMAEC,UAAA,CACA,WAAA,CACA,qBAAA,CACA,uBAAA,CAGD,gGACC,wBAAA,CACA,kBAAA,CAGD,kGACC,WAAA,CAGD,4FACC,YAAA,CACA,kBAAA,CACA,iBAAA,CAIA,8HACC,UAAA,CACA,WAAA,CACA,iBAAA,CAEA,8JACC,YC7cQ,CDgdT,iKACC,YCjdQ,CDqdV,6IACC,YAAA,CACA,qBAAA,CACA,gBAAA,CACA,cAAA,CAEA,sLACC,UAAA,CACA,UAAA,CACA,aAAA,CAGD,qKACC,gBAAA,CAKH,uGACC,aAAA,CAEA,gJACC,kBAAA,CAEA,sJACC,kBC5dW,CDgeb,6GACC,aCjeY,CDseb,gJACC,eAAA,CAKH,oEACC,YAAA,CACA,gBAAA,CACA,UAAA,CAEA,wGACC,YAAA,CAID,iHACC,cAAA,CACA,mBAAA,CAGD,mFACC,YAAA,CAEA,0GACC,SAAA,CACA,eAAA,CAEA,8GACC,cAAA,CACA,eAAA,CAIF,gHACC,gBAAA,CACA,gBAAA,CACA,gBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,6IACC,YAAA,CACA,SAAA,CACA,QAAA,CACA,4BAAA,CAAA,oBAAA,CACA,yCAAA,CAAA,iCAAA,CAAA,iEAAA,CAOL,4CACC,WAAA,CACA,4BAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CAEA,uEACC,oBAAA,CACA,gBAAA,CACA,iBAAA,CACA,OAAA,CAGD,iDACC,WAAA,CACA,mBAAA,CAIA,6EACC,qBAAA,CAIF,wDACC,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,aAAA,CACA,wBAAA,CACA,qBAAA,CAEA,UAAA,CAEA,yEAEC,UAAA,CACA,WAAA,CACA,qBAAA,CACA,gBAAA,CACA,MAAA,CACA,cAAA,CACA,aAAA,CE5lBF,+EACE,2BD2BY,CCzBd,2FACE,QAAA,CF4lBD,yEACC,UAAA,CACA,WAAA,CACA,YAAA,CACA,gBAAA,CAIF,2DACC,YAAA,CACA,kBAAA,CACA,gBAAA,CAGA,uFACC,cAAA,CACA,gBAAA,CACA,eAAA,CACA,oBAAA,CACI,qBAAA,CACA,cAAA,CACA,aAAA,CACJ,mBAAA,CAGD,gFACC,cAAA,CACA,gBAAA,CACA,kBAAA,CAGD,8FACC,UAAA,CACA,WAAA,CACA,qBAAA,CACA,wBAAA,CACA,qBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,eAAA,CAEA,qGACC,oBAAA,CAIF,sFACC,QAAA,CACA,KAAA,CACA,WAAA,CACA,UAAA,CAGD,8FACC,gBAAA,CAIF,sDACC,WAAA,CAGD,kEACC,iBAAA,CACA,QAAA,CACA,OAAA,CACA,SAAA,CACA,kCAAA,CAAA,0BAAA,CACA,wBC5oB0B,CD6oB1B,UAAA,CACA,WAAA,CACA,UAAA,CAGD,8DACC,wBCnpB0B,CDopB1B,SAAA,CACA,UAAA,CAOH,kBACC,wBAAA,CACA,oBAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,kBAAA,CACA,gBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CAEA,4BACC,eAAA,CACA,eAAA,CACA,aAAA,CAGD,0BACC,kBAAA,CACA,UAAA,CACA,wBAAA,CACA,YAAA,CACA,kBAAA,CAQF,SACC,kBAAA,CACA,UAAA,CAGD,UACC,eAAA,CACA,aAAA,CAGD,mBACC,UAAA,CACA,WAAA,CACC,aAAA,CAIF,sBACC,UAAA,CACA,kBAAA,CACA,mBAAA,CAEA,yDAEC,mBAAA,CAKF,mCACC,QACC,wBAAA,CAED,IACC,0BAAA,CAED,IACC,0BAAA,CAED,IACC,0BAAA,CAAA,CAQF,mBACE,8DAAA,CAAA,sDAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,cAAA,CACA,oBAAA,CACA,6BAAA,CAAA,qBAAA,CACA,OAAA,CACA,SAAA,CACA,iBAAA",
            sourcesContent: ["@import \"~styles/css/shared/variables.scss\";\n@import \"../../../styles/css/shared/mixins\";\n\n#participants-module-container {\n\t.menu-module-content {\n\t\t//padding: 5px;\n\t}\n}\n\n#participantsList {\n\twidth: 100%;\n\tdisplay: inline-block;\n\theight: 100%;\n\n\t.participants-title {\n\t\ttext-align: left;\n\t\tpadding: 0px 15px;\n\t\tfont-size: 14px;\n\t\tborder-bottom: 1px solid rgba(0, 0, 0, 0.2);\n\t\tline-height: 53px;\n\t\tbackground: #101B21;\n\t\tcolor: #fff;\n\t\ttext-transform: uppercase;\n\n\t\t.participants-count {\n\t\t\tmargin-left: 10px;\n\t\t\tcolor: $newrowColor;\n\t\t\tfont-weight: 600;\n\t\t}\n\t}\n\n\n\t#participant-active-btn-toggle-cam, #participant-active-btn-toggle-mic{\n\t\t.participant-media-disabled-by-moderator{\n\t\t\tborder: 1px solid red !important;\n\t\t}\n\t}\n\n\n\t.participants-content {\n\t\tpadding: unset;\n\t\tmargin: unset;\n\t\tmargin-bottom: 10px;\n\t\theight: 100%;\n\t\tmax-height: calc(100% - 49px);\n\t\toverflow: auto;\n\n\t\t.no-participants {\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\ttext-transform: capitalize;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #727272;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t.participant {\n\t\t\t@include focusFix;\n\t\t\tlist-style-type: none;\n\t\t\ttext-align: left;\n\t\t\t-webkit-box-sizing: border-box;\n\t\t\t-moz-box-sizing: border-box;\n\t\t\tbox-sizing: border-box;\n\t\t\toutline-offset: -2px;\n\n\t\t\t.participant-quick-settings-container {\n\t\t\t\toverflow: hidden;\n\n\t\t\t\t.participant-quick-settings-wrapper {\n\t\t\t\t\tmargin-top: -100%;\n\t\t\t\t\ttransition: all 0.35s;\n\t\t\t\t}\n\n\t\t\t\t.quick-settings-expanded {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t\ttransition: all 0.35s;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tpadding: 9px;\n\n\t\t\t.user-avatar {\n\t\t\t\twidth: 45px;\n\t\t\t\theight: 45px;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tbackground-size: cover;\n\t\t\t\tbackground-position: center;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tmargin-right: 10px;\n\t\t\t\tmargin-bottom: 1px;\n\t\t\t\tvertical-align: bottom;\n\n\t\t\t\t-webkit-box-sizing: border-box;\n\t\t\t\t-moz-box-sizing: border-box;\n\t\t\t\tbox-sizing: border-box;\n\n\t\t\t\talign-self: flex-end;\n\t\t\t}\n\n\t\t\tsvg.user-avatar {\n\t\t\t\tfill: #111b23;\n\t\t\t\topacity: 0.42;\n\t\t\t}\n\n\t\t\t.is-dominant {\n\t\t\t\tborder: 1px solid #000;\n\t\t\t\tbox-shadow: 0 0 0 2px #00ca00;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tposition: relative;\n\n\t\t\t\t.dominant-dot {\n\t\t\t\t\twidth: 9px;\n\t\t\t\t\theight: 9px;\n\t\t\t\t\tbackground: #00CA00;\n\t\t\t\t\t-webkit-border-radius: 50px;\n\t\t\t\t\t-moz-border-radius: 50px;\n\t\t\t\t\tborder-radius: 50px;\n\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 30px;\n\t\t\t\t\tleft: 27px;\n\t\t\t\t\tdisplay: none;\n\n\t\t\t\t\tborder: 3px solid #fff;\n\n\t\t\t\t\t&::before {\n\t\t\t\t\t\tcontent: '';\n\t\t\t\t\t\twidth: 5px;\n\t\t\t\t\t\theight: 5px;\n\t\t\t\t\t\tbackground: #101B21;\n\t\t\t\t\t\tz-index: 999;\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tmargin-top: 2.1px;\n\t\t\t\t\t\tmargin-left: 2.1px;\n\n\t\t\t\t\t\t-webkit-border-radius: 50%;\n\t\t\t\t\t\t-moz-border-radius: 50%;\n\t\t\t\t\t\tborder-radius: 50%;\n\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\n\t\t\t.participant-top-line {\n\t\t\t\tposition: relative;\n\t\t\t\tline-height: 25px;\n\n\t\t\t\t.participant-no-present-wrapper {\n\t\t\t\t\tmargin-right: 20px;\n\n\t\t\t\t\t.participant-no-present-icon {\n\t\t\t\t\t\twidth: 16px;\n\t\t\t\t\t\theight: 16px;\n            flex: 0 0 auto;\n\t\t\t\t\t\tbackground-image: url('../../../styles/images/shared/notPresent.svg');\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.participant-moderation-mark {\n\t\t\t\twidth: 15px;\n\t\t\t\theight: 15px;\n\t\t\t\tmargin-right: 5px;\n        flex: 0 0 auto;\n\t\t\t}\n\n\t\t\t.participant-moderator-mark {\n\t\t\t\tfill: #111b23;\n        flex: 0 0 auto;\n\t\t\t}\n\n\t\t\t.participant-partial-moderator-mark {\n\t\t\t\tfill: $newrowGray;\n        flex: 0 0 auto;\n\t\t\t}\n\n\t\t\t.participant-captioner-mark {\n\t\t\t\twidth: 19px;\n\t\t\t\theight: 13px;\n\t\t\t\tmargin-right: 7px;\n\t\t\t\tmargin-left: 1px;\n        flex: 0 0 auto;\n\t\t\t}\n\n\t\t\t.participant-user-name {\n\t\t\t\tdisplay: inline-block;\n        width: 100%;\n        flex: 1 1 auto;\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\toverflow: hidden;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tcolor: #111b23;\n\t\t\t}\n\n\t\t\t&.permissions-expanded {\n\t\t\t\tbackground-color: #fff;\n\n\t\t\t\t.participant-stream-actions {\n\t\t\t\t\t.permissions-toggle-container {\n\t\t\t\t\t\t.permissions-view-toggle-btn {\n\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\ttransform: rotateZ(180deg);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.ReactCollapse--collapse {\n\t\t\t\tmargin-top: -8px;\n\t\t\t}\n\t\t}\n\n\t\t.participant-info-wrapper {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t}\n\n\t\t.participant:focus,\n\t\t.participant:hover {\n\t\t\tbackground: #fff;\n\n\t\t\t.participant-stream-actions {\n\t\t\t\t.permissions-toggle-container {\n\t\t\t\t\t.permissions-view-toggle-btn {\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t}\n\t\t}\n\t}\n\n\t.participants-video-on {\n    mask-image: url('../../../styles/images/shared/video-camera.svg');\n\t}\n\n\t.participants-video-off {\n\t\tmask-image: url('../../../styles/images/shared/turn-video-off-button.svg');\n\t}\n\n\t.participants-video-off-animation {\n\t\tanimation: changeColorVideo 0.1s;\n\t}\n\n\t.participants-audio-on {\n    mask-image: url('../../../styles/images/shared/microphone-black-shape.svg');\n\t}\n\n\t.participants-audio-off {\n\t\tmask-image: url('../../../styles/images/shared/microphone-off.svg');\n\t\ttransform: scaleX(-1);\n\t}\n\n\t.participants-audio-off-animation {\n\t\tanimation: changeColor 0.1s;\n\t}\n\n\t.participants-hand-raise,\n\t.participants-hand-set {\n\t\tmask-image: url('../../../styles/images/shared/raiseHand.svg');\n\t}\n\n\t.participants-hand-set {\n\t\topacity: .5;\n\t}\n\n\n\t@keyframes changeColor {\n\t\tfrom {\n\t\t\tbackground-color: #e32726;\n\t\t}\n\t\tto {\n\t\t\tbackground-color: black;\n\t\t}\n\t}\n\n\t@keyframes changeColorVideo {\n\t\tfrom {\n\t\t\tbackground-color: #e32726;\n\t\t}\n\t\tto {\n\t\t\tbackground-color: black;\n\t\t}\n\t}\n\n\t.participant-control-btn-highlighted:not(.disabled):not(.participant-media-control-disabled) {\n\t\toutline: $newrowOutline;\n\t}\n\n\t.participant-media-control-container {\n\t\tpadding: 3px 4px;\n\t\tborder: 1px solid #d9d8d9;\n\t\tbackground-color: white;\n\t\tborder-radius: unset;\n\t}\n\n\t.participant-media-control-disabled {\n\t\tpointer-events: none;\n\t\topacity: 0.35;\n\t}\n\n\t.participant-media-control {\n\t\twidth: 12px;\n\t\theight: 14px;\n\t\tbackground-color: #111b23;\n\t\t-webkit-mask-size: contain;\n\t\t-webkit-mask-position: center;\n\t\t-webkit-mask-repeat: no-repeat;\n\n    &.participants-video-off,\n    &.participants-audio-off {\n      background-color: $newrowLightAccessibleWhite;\n\t\t}\n\t}\n\n\t.participants-tool-status {\n\t\tbackground: transparent;\n\n\t\t.participants-whiteboard-on,\n\t\t.participants-whiteboard-off {\n\t\t\twidth: 15px;\n\t\t}\n\n\t\t.participants-chat-off,\n\t\t.participants-chat-on {\n\t\t\twidth: 15px;\n\t\t}\n\n\t\t.participants-whiteboard-off {\n\t\t\tfill: $newrowLightAccessibleWhite;\n\t\t}\n\t}\n\n\n\t.participants-content {\n\n\t\t.participant-settings {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: calc(100% - 60px);\n\t\t\tmargin-left: 5px;\n\n\t\t\t.btn {\n\t\t\t\tmargin-right: 4px;\n\t\t\t}\n\t\t}\n\n\t\t.participant-view {\n\t\t\t.participant-settings {\n\t\t\t\tmargin-bottom: 10px;\n\t\t\t}\n\t\t}\n\n\t\t.participant-permissions-container {\n\t\t\tfont-size: 13px;\n\t\t\tline-height: 17px;\n\t\t\tmargin-top: 15px;\n\t\t\tpadding-left: 55px;\n\t\t\tuser-select: none;\n\n\t\t\t.participant-permissions-wrapper {\n\t\t\t\toutline: none;\n\n\t\t\t\twidth: 82%;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tcolor: $newrowBlack;\n\t\t\t\tmargin: 19px 0;\n\n\t\t\t\t.participant-permissions-divisor {\n\t\t\t\t\tmargin: 15px 0;\n\t\t\t\t\theight: 1px;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tbackground-color: #E3E3E3;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.participant-permissions-partial-moderation-container {\n\t\t\t\tborder-bottom: 1px solid #ddd;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tpadding: 7px 0;\n\t\t\t}\n\n\t\t\t.participant-permissions-partial-moderation-container.disabled {\n\t\t\t\topacity: 0.3;\n\t\t\t\tcursor: not-allowed;\n\t\t\t}\n\n\t\t\t.participant-permissions-partial-moderation-item {\n\t\t\t\tmargin-bottom: 3px;\n\n\t\t\t\t&.highlighted {\n\t\t\t\t\toutline: $newrowOutline;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.participant-permissions-partial-moderation-item.disabled {\n\t\t\t\tcursor: not-allowed;\n\t\t\t}\n\n\t\t\t.participant-permissions-partial-moderation-item:last-child {\n\t\t\t\tmargin-bottom: 0px;\n\t\t\t}\n\n\t\t\t.moderation-item {\n\t\t\t\tline-height: 22px;\n\t\t\t\tcursor: pointer;\n\n\t\t\t\t.permission-description {\n\t\t\t\t\tfloat: left;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.participant-permissions-full-moderation {\n\t\t\t\tpadding-top: 10px;\n\t\t\t}\n\n\t\t\t.full-moderation-container,\n\t\t\t.view-only-container {\n\t\t\t\tmargin: 11px 0 !important;\n\n\t\t\t\t.checked-checkbox-icon {\n\t\t\t\t\tbackground: url('../../../styles/images/shared/checkBox.svg') no-repeat 0 0;\n\t\t\t\t}\n\t\t\t\t.custom-checked-checkbox-icon {\n\t\t\t\t\tbackground: url('../../../styles/images/shared/checkBoxAWS.svg') no-repeat 0 0;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.disabled-permission {\n\t\t\t\topacity: 0.42;\n\t\t\t}\n\n\t\t\t.empty-checkbox-icon,\n\t\t\t.checked-checkbox-icon {\n\t\t\t\twidth: 16px;\n\t\t\t\theight: 16px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tbackground-size: contain;\n\t\t\t}\n\n\t\t\t.empty-checkbox-icon {\n\t\t\t\tborder: 1px solid $newrowLightAccessibleWhite;\n\t\t\t\tbackground: #fbfbfb;\n\t\t\t}\n\n\t\t\t.checked-checkbox-icon {\n\t\t\t\tborder: none;\n\t\t\t}\n\n\t\t\t.moderation-item {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmargin-bottom: 4px;\n\t\t\t}\n\n\t\t\t.settings-list-item {\n\t\t\t\t.participant-settings-box-item {\n\t\t\t\t\twidth: 15px;\n\t\t\t\t\theight: 15px;\n\t\t\t\t\tmargin-right: 10px;\n\n\t\t\t\t\t.participant-icon-more-settings {\n\t\t\t\t\t\tfill: $newrowBlack;\n\t\t\t\t\t}\n\n\t\t\t\t\t.participant-icon-remove-from-room {\n\t\t\t\t\t\tfill: $newrowBlack;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.settings-list-permission-description-wrapper {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tfont-size: 14px;\n\n\t\t\t\t\t.participant-settings-box-item-underline {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 1px;\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t}\n\n\t\t\t\t\t.permission-description {\n\t\t\t\t\t\tline-height: 14px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.remove-from-room-container {\n\t\t\t\tcolor: #434343;\n\n\t\t\t\t.participant-settings-box-item-underline {\n\t\t\t\t\tbackground: #434343;\n\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground: $newrowLightRed;;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t&:hover {\n\t\t\t\t\tcolor: $newrowLightRed;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.more-permissions-container {\n\t\t\t\t.participant-settings-box-item-underline {\n\t\t\t\t\tbackground: black;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.participant-stream-actions {\n\t\t\tdisplay: flex;\n\t\t\tline-height: 14px;\n\t\t\twidth: 100%;\n\n\t\t\t.participant-stream-actions-wrapper {\n\t\t\t\tdisplay: flex;\n\t\t\t\t//flex: 1;\n\t\t\t}\n\n\t\t\t.participant-stream-actions-buttons-disabled {\n\t\t\t\tcursor: default;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\n\t\t\t.btn-list-item {\n\t\t\t\tdisplay: flex;\n\n\t\t\t\t.ring-loader-container {\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tbackground: #fff;\n\n\t\t\t\t\timg {\n\t\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\t\tmax-height: 100%;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t&.permissions-toggle-container {\n\t\t\t\t\tline-height: 23px;\n\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\tmargin-right: 4px;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\talign-items: center;\n\n\t\t\t\t\t.permissions-view-toggle-btn {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\ttransform: rotateZ(0);\n\t\t\t\t\t\ttransition: transform 100ms linear;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t#participants-control-bar {\n\t\tpadding: 9px;\n\t\tborder-bottom: 1px solid #dddddd;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\n\t\t.participant-media-control {\n\t\t\tdisplay: inline-block;\n\t\t\tmargin-right: 5px;\n\t\t\tposition: relative;\n\t\t\ttop: 2px;\n\t\t}\n\n\t\t.btn {\n\t\t\tpadding: 8px;\n\t\t\tborder-radius: unset;\n\t\t}\n\n\t\t.btn-red {\n\t\t\t.participants-audio-off {\n\t\t\t\tbackground-color: #fff;\n\t\t\t}\n\t\t}\n\n\t\t.search-bar {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row-reverse;\n\t\t\talign-items: center;\n\t\t\tflex: 1 1 auto;\n\t\t\tborder: 1px solid #cfcfcf;\n\t\t\tbackground-color: #fff;\n\n\t\t\twidth: 62px;\n\n\t\t\t.search-bar-text {\n\t\t\t\t@include focusFix;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 30px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tpadding: 6px 10px;\n\t\t\t\tflex: 1;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tcolor: #434343;\n\t\t\t\t//min-width: 55px;\n\t\t\t}\n\n\t\t\t.search-bar-icon {\n\t\t\t\twidth: 12px;\n\t\t\t\theight: 12px;\n\t\t\t\tfill: #111b23;\n\t\t\t\tmargin-left: 10px;\n\t\t\t}\n\t\t}\n\n\t\t.mute-controls {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tmargin: 0 9px 0 0;\n\n\n\t\t\t.mute-all-control-container {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 14px;\n\t\t\t\tmargin-left: 8px;\n\t\t\t\twhite-space: pre-wrap;\n        word-break: break-word;\n        max-width: 80px;\n        flex: 0 0 auto;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\n\t\t\t.mute-controls-title {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\n\t\t\t.participant-media-control-wrapper {\n\t\t\t\twidth: 30px;\n\t\t\t\theight: 30px;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\tborder: 1px solid #cfcfcf;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tcursor: pointer;\n\t\t\t\tmargin-left: 8px;\n\n\t\t\t\t&.active{\n\t\t\t\t\tborder: 1px solid red ;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.participant-media-control {\n\t\t\t\tmargin: 0;\n\t\t\t\ttop: 0;\n\t\t\t\theight: 16px;\n\t\t\t\twidth: 16px;\n\t\t\t}\n\n\t\t\t.participant-media-control-tooltip {\n\t\t\t\tpadding: 8px 12px;\n\t\t\t}\n\t\t}\n\n\t\t.animated {\n\t\t\tfloat: right;\n\t\t}\n\n\t\t.magnifing-glass-icon {\n\t\t\tposition: absolute;\n\t\t\tmargin: 0;\n\t\t\ttop: 50%;\n\t\t\tleft: 10px;\n\t\t\ttransform: translateY(-50%);\n\t\t\tbackground-color: $newrowLightAccessibleWhite;\n\t\t\twidth: 10px;\n\t\t\theight: 10px;\n\t\t\tz-index: 10;\n\t\t}\n\n\t\t.clear-search-bar {\n\t\t\tbackground-color: $newrowLightAccessibleWhite;\n\t\t\twidth: 8px;\n\t\t\theight: 8px;\n\t\t}\n\n\t}\n}\n\n\n.btn.live-buttons {\n\tborder: 1px solid #cfcfcf;\n\tdisplay: inline-block;\n\tpadding: 5px 6px;\n\tfont-size: 10px;\n\tfont-weight: 800;\n\tborder-radius: 0px;\n\tletter-spacing: 1px;\n\tline-height: 10px;\n\twidth: 38px;\n\theight: 22px;\n\tbox-sizing: border-box;\n\n\t&.btn-trans {\n\t\tbackground: #fff;\n\t\tfont-weight: 400;\n\t\tcolor: #111b23;\n\t}\n\n\t&.btn-red {\n\t\tbackground: #e42525;\n\t\tcolor: #fff;\n\t\tborder-color: transparent;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t&.btn-disabled {\n\n\t}\n}\n\n.btn-red {\n\tbackground: #e42525;\n\tcolor: #fff;\n}\n\n.btn-gray {\n\tbackground: #DDDDDD;\n\tcolor: #434343;\n}\n\n.browser-type-icon {\n\twidth: 20px;\n\theight: 15px;\n  flex: 0 0 auto;\n}\n\n// TODO these styles should be removed, when all the functionaliy works.\n.temporarily-disabled {\n\topacity: 0.5;\n\tcursor: not-allowed;\n\tpointer-events: none;\n\n\t&:hover,\n\t&:active {\n\t\tpointer-events: none;\n\t}\n}\n\n\n@-webkit-keyframes invertAnimation {\n\t0%, 100% {\n\t\t-webkit-filter: invert(0);\n\t}\n\t30% {\n\t\t-webkit-filter: invert(0.3);\n\t}\n\t70% {\n\t\t-webkit-filter: invert(0.7);\n\t}\n\t50% {\n\t\t-webkit-filter: invert(0.7);\n\t}\n}\n\n/*\nThis is an ugly bypass to a problem with NRWL + postcss + modules.css not injecting auto-prefix correctly\nBecause this is the only relevant place I moved this class name to a random place that works for sure.\n*/\n.remove-reply-icon{\n  mask-image: url('../../../styles/images/shared/close-black.svg');\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  cursor: pointer;\n  display: inline-block;\n  mask-repeat: no-repeat;\n  right: 0;\n  left: auto;\n  align-self: center;\n}\n", "$newrowColor: #158079;\n$newrowDarker: #158079;\n$newrowDark: #0d817a;\n$newrowColorDarker: #3ea58c;\n$newrowGray: #a7a7a7;\n$newrowDarkBlue: #101b21;\n$newrowBlack: #434343;\n$media-player-green: #68a992;\n$nr-seagreen: #79c5a7;\n$bar-height: 5px;\n$notification-success-color: #00a489;\n$notification-dark-color: #434343;\n$notification-info-color: #ffae42;\n$notification-error-color: red;\n$notification-message-color: #80d3ff;\n$notification-light-color: #fae887;\n$notification-light-green-color: #80DD79;\n$notification-height: 50px;\n$notification-margin-bottom: 2px;\n$top-bar-background: #111b23;\n$top-bar-height: 54px;\n$top-bar-border: 1px solid #434343;\n$top-bar-item-hover-background: rgba(255, 255, 255, 0.14);\n$newrowRed: #df2021;\n$newrowLightRed: #e42525;\n$newrowGrayBG: #f3f3f3;\n$newrowLightGreen: #399691;\n$newrowPopupMask: rgba(0, 0, 0, 0.67);\n$newrowBorderLight: #a7a7a7;\n$newrowLightAccessibleWhite: #757575;\n$newrowSearchInput: #434343;\n$newrowOutline: Highlight solid 2px;\n$newrowPopupDarkBg: #161616;\n$newrowCyanGreen: #148079;\n$simpleBlackColor: #000000;\n$newrowLightGray: #f2f2f2;\n$newrowGreyDisabledText: #727272;\n$indication: #25D625;\n", "@import './variables';\n\n@mixin focusFix {\n  &:focus {\n    outline: $newrowOutline;\n  }\n  &::-moz-focus-inner {\n    border: 0;\n  }\n}\n"],
            sourceRoot: ""
        }]]
    }
    ,
    "HaE/": t=>{
        t.exports = [[t.id, ".session-end-popup-container{justify-content:center;align-items:center;padding:20px 21px 50px;color:#434343}.session-end-popup-container.mobile{width:100%;text-align:center}.session-end-instructor{padding-bottom:60px}.session-end-student{padding-left:20px;padding-bottom:40px}.end-session-cancel{margin-top:0;width:48px;margin-left:2px !important}.hidden-end-session-button{display:none;visibility:hidden}.end-session-popup-wrapper{width:440px}.end-session-popup-wrapper.mobile{flex-direction:column}.end-session-popup-wrapper.mobile .popup-footer-container{flex-direction:column}.end-session-popup-wrapper.mobile .popup-footer-container .popup-right-buttons-holder{flex-direction:column}.end-session-popup-wrapper.mobile .popup-footer-container .popup-right-buttons-holder .end-session-btn-everyone,.end-session-popup-wrapper.mobile .popup-footer-container .popup-right-buttons-holder .btn-green,.end-session-popup-wrapper.mobile .popup-footer-container .popup-right-buttons-holder .end-session-cancel,.end-session-popup-wrapper.mobile .popup-footer-container .popup-right-buttons-holder .end-session-btn-me{width:80%;margin-bottom:20px}.end-session-popup-wrapper .popup-footer-container{padding:0 25px 20px 15px}.end-session-popup-wrapper .popup-footer-container .end-session-btn-everyone{width:120px}.end-session-popup-wrapper .popup-footer-container .end-session-btn-me{width:120px}", "", {
            version: 3,
            sources: ["/home/runner/work/kme-web/kme-web/apps/nr2/src/app/modules/session-end/session-end-popup.scss"],
            names: [],
            mappings: "AAAA,6BACC,sBAAA,CACA,kBAAA,CACA,sBAAA,CACA,aAAA,CAEA,oCACC,UAAA,CACA,iBAAA,CAIF,wBACC,mBAAA,CAGD,qBACC,iBAAA,CACA,mBAAA,CAGD,oBACC,YAAA,CACC,UAAA,CACA,0BAAA,CAIF,2BACC,YAAA,CACA,iBAAA,CAGD,2BACC,WAAA,CAEA,kCACC,qBAAA,CAEA,0DACC,qBAAA,CAEA,sFACC,qBAAA,CAEA,qaAIC,SAAA,CACA,kBAAA,CAMJ,mDACC,wBAAA,CAEA,6EACC,WAAA,CAGD,uEACC,WAAA",
            sourcesContent: [".session-end-popup-container {\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 20px 21px 50px;\n\tcolor: #434343;\n\n\t&.mobile {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n\n.session-end-instructor {\n\tpadding-bottom: 60px;\n}\n\n.session-end-student {\n\tpadding-left: 20px;\n\tpadding-bottom: 40px;\n}\n\n.end-session-cancel {\n\tmargin-top: 0;\n  width: 48px;\n  margin-left: 2px !important;\n}\n\n\n.hidden-end-session-button {\n\tdisplay: none;\n\tvisibility: hidden;\n}\n\n.end-session-popup-wrapper {\n\twidth: 440px;\n\n\t&.mobile {\n\t\tflex-direction: column;\n\n\t\t.popup-footer-container {\n\t\t\tflex-direction: column;\n\n\t\t\t.popup-right-buttons-holder {\n\t\t\t\tflex-direction: column;\n\n\t\t\t\t.end-session-btn-everyone,\n\t\t\t\t.btn-green,\n\t\t\t\t.end-session-cancel,\n\t\t\t\t.end-session-btn-me {\n\t\t\t\t\twidth: 80%;\n\t\t\t\t\tmargin-bottom: 20px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.popup-footer-container {\n\t\tpadding: 0 25px 20px 15px;\n\n\t\t.end-session-btn-everyone {\n\t\t\twidth: 120px;\n\t\t}\n\n\t\t.end-session-btn-me {\n\t\t\twidth: 120px;\n\t\t}\n\t}\n}\n"],
            sourceRoot: ""
        }]]
    }
    ,
    Fna7: (t,e,n)=>{
        "use strict";
        n.d(e, {
            Z: ()=>C
        });
        var i = n("r0ML")
          , s = n("v2iy")
          , o = n("Vptf")
          , r = n("U9yb")
          , a = (n("YvY4"),
        n("pLtp"))
          , p = n("S1x0")
          , c = n("Pc05")
          , l = n.n(c)
          , d = n("fIjO")
          , h = n("MI44")
          , A = n("ziYR")
          , u = n("Abao")
          , m = n("BqyK");
        const g = {
            userRaiseHand: (t,e)=>(0,
            r.zC)(t, e),
            userPutDownHand: (t,e)=>(0,
            r.N1)(t, e),
            showMicMuteBanner: ()=>(0,
            h.wN)(A.Z.notification.container.STAGE, {
                id: "mic_state-you_are_muted_raise_hand",
                title: u.Z.t("clickToUnmuteHandRaise"),
                type: "dark",
                actionButtons: [],
                timeout: 4
            }, !1)
        }
          , C = (0,
        s.compose)((0,
        d.Z)(), (0,
        o.$j)(null, g))(class extends i.Component {
            constructor(t) {
                super(t),
                this.toggleHandRaise = this.toggleHandRaise.bind(this)
            }
            componentDidMount() {
                "function" == typeof this.props.onRef && this.props.onRef(this)
            }
            componentDidUpdate() {
                this.props.showMuteTooltip && 0 === this.props.handRaiseTime && this.props.showMicMuteBanner()
            }
            componentWillUnmount() {
                "function" == typeof this.props.onRef && this.props.onRef(null)
            }
            toggleHandRaise() {
                this.props.handRaiseTime > 0 ? this.props.userPutDownHand(this.props.actionPerformerId, this.props.targetUserId) : this.props.actionPerformerId === this.props.targetUserId && this.props.userRaiseHand(this.props.actionPerformerId, this.props.targetUserId)
            }
            render() {
                const t = this.props.handRaiseTime > 0
                  , e = t ? this.props.toggledClassName : ""
                  , n = this.props.t(t ? "putDown" : "raiseHand");
                return (0,
                m.jsxs)(i.Fragment, {
                    children: [(0,
                    m.jsx)("button", Object.assign({}, this.props.showTooltip ? {
                        "data-tip": n,
                        "data-for": this.props.tooltipSettings.id
                    } : {}, {
                        "aria-label": "Lower Raised Hand",
                        tabIndex: this.props.tabIndex || 0,
                        className: l()("hand-raise", this.props.className, e),
                        onClick: this.toggleHandRaise,
                        children: (0,
                        m.jsx)(a.r, {
                            className: (this.props.iconClassName || "") + " hand-raise-icon"
                        })
                    })), this.props.showTooltip ? (0,
                    m.jsx)(p.Z, {
                        id: this.props.tooltipSettings.id,
                        type: this.props.tooltipSettings.type || "dark",
                        place: this.props.tooltipSettings.place || "top",
                        effect: this.props.tooltipSettings.effect || "solid",
                        children: n
                    }) : null]
                })
            }
        }
        )
    }
    ,
    k6h8: (t,e,n)=>{
        "use strict";
        n.d(e, {
            Z: ()=>a
        });
        var i = n("r0ML")
          , s = n("pbLZ")
          , o = n("oIiO")
          , r = n("BqyK");
        const a = class extends i.Component {
            constructor(t) {
                super(t),
                this.onChange = this.onChange.bind(this),
                this.onKeyUp = this.onKeyUp.bind(this),
                this.onClear = this.onClear.bind(this),
                this.onFocus = this.onFocus.bind(this),
                this.onBlur = this.onBlur.bind(this),
                this.searchRef = (0,
                i.createRef)(),
                this.state = {
                    focused: !1,
                    empty: !0
                }
            }
            componentDidMount() {
                this.props.autoFocus && this.searchRef.current && this.searchRef.current.focus()
            }
            onChange(t) {
                this.props.onChange && this.props.onChange(t.target.value),
                t.target.value && this.state.empty ? this.setState({
                    empty: !1
                }) : t.target.value || this.state.empty || this.setState({
                    empty: !0
                })
            }
            onKeyUp(t) {
                37 !== t.keyCode && 39 !== t.keyCode || (t.preventDefault(),
                t.stopPropagation(),
                t.nativeEvent.stopImmediatePropagation())
            }
            onClear() {
                this.onChange({
                    target: {
                        value: ""
                    }
                })
            }
            onFocus() {
                this.setState({
                    focused: !0
                })
            }
            onBlur() {
                this.setState({
                    focused: !1
                })
            }
            render() {
                return (0,
                r.jsxs)("div", {
                    role: "search",
                    className: "search-bar " + (this.props.classes ? this.props.classes : ""),
                    id: "" + (this.props.id ? this.props.id : ""),
                    children: [(0,
                    r.jsx)("input", {
                        className: "search-bar-text",
                        ref: this.searchRef,
                        "aria-label": "Search field",
                        title: this.props.placeholder,
                        placeholder: "" + (this.props.placeholder ? this.props.placeholder : ""),
                        tabIndex: 0,
                        onChange: this.onChange,
                        onKeyUp: this.onKeyUp,
                        value: "" + (this.props.value ? this.props.value : ""),
                        onFocus: this.onFocus,
                        onBlur: this.onBlur
                    }), !this.state.empty && this.props.clearIcon ? (0,
                    r.jsx)("div", {
                        className: "clear-search-bar close-icon-dark",
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "Clear Search",
                        onKeyDown: t=>o.Z.emulateButtonKeydown(t, this.onClear),
                        onClick: this.onClear
                    }) : null, this.state.empty && !this.state.focused && this.props.icon ? this.props.icon : null, !this.state.empty && this.props.icon && this.props.showIconOnSearch ? this.props.icon : null, !this.props.clearIcon && (0,
                    r.jsx)(s.r, {
                        tabIndex: 0,
                        role: "button",
                        className: "search-close-icon-dark " + (this.state.empty ? "search-close-icon-dark-disabled" : ""),
                        onClick: this.onClear,
                        onKeyDown: t=>o.Z.emulateButtonKeydown(t, this.onClear),
                        "aria-label": "Clear Search"
                    })]
                })
            }
        }
    }
    ,
    Xfyp: (t,e,n)=>{
        "use strict";
        n.d(e, {
            Z: ()=>o
        });
        var i = n("L6BW")
          , s = n("ziYR");
        const o = {
            dominantSpeakerChanged: function(t, e) {
                i.F.actionReceived(s.Z.modules.dominantSpeaker, s.Z.sdkOutboundEvents.dominantSpeakerChanged, e)
            }
        }
    }
    ,
    k2XB: (t,e,n)=>{
        "use strict";
        n.d(e, {
            Z: ()=>In
        });
        var i = n("r0ML")
          , s = n("Vptf")
          , o = n("Pc05")
          , r = n.n(o);
        const a = {
            "chat-conversation-item": "conversation-item_chat-conversation-item__3c0j8",
            "conversation-item": "conversation-item_conversation-item__3b5q-",
            "conversation-details-wrapper": "conversation-item_conversation-details-wrapper__3O0A1",
            "conversation-details": "conversation-item_conversation-details__35TFu",
            "last-message": "conversation-item_last-message__3kiJ1",
            time: "conversation-item_time__2sBxn",
            avatar: "conversation-item_avatar__5Erw3",
            flexEnd: "conversation-item_flexEnd__vvy2N",
            name: "conversation-item_name__1XDm9",
            "conversation-item-selected": "conversation-item_conversation-item-selected__JY1PE"
        };
        var p = n("TDzD")
          , c = n("BqyK");
        const l = i.memo((({conversationType: t, avatar: e, size: n="46"})=>(0,
        c.jsx)("div", {
            className: r()("avatar_avatar__3VvWo"),
            style: {
                height: n + "px",
                width: n + "px"
            },
            children: (0,
            c.jsx)("img", {
                src: e,
                alt: t ? "" + (0,
                p.jW)(t) : "chat"
            })
        })))
          , d = ({count: t})=>t > 0 ? (0,
        c.jsx)("span", {
            className: r()("badge_badge__1Nktl"),
            children: t
        }) : null;
        var h = n("RBRZ")
          , A = n.n(h)
          , u = n("Yd/J")
          , m = n("oIiO");
        const g = i.memo((({conversation: t, handleOnClick: e, AvatarIcon: n, customClassName: i})=>{
            const {t: s, i18n: o} = (0,
            u.$)();
            return (0,
            c.jsxs)("div", {
                tabIndex: 0,
                role: "button",
                className: "custom-conversation-item " + r()(a["conversation-item"]),
                onKeyDown: n=>m.Z.emulateButtonKeydown(n, e.bind(null, t)),
                onClick: e.bind(null, t),
                "aria-label": o.exists(t.conversation_type) ? s(t.conversation_type) : t.name || "Unknown Conversation",
                children: [(0,
                c.jsx)("div", {
                    className: `${r()(a["chat-conversation-item"])} ${i} ${r()(a.avatar)}`,
                    children: n && "object" == typeof n ? n : (0,
                    c.jsx)(l, {
                        conversationType: t.name,
                        avatar: n
                    })
                }), (0,
                c.jsxs)("div", {
                    className: r()(a["conversation-details-wrapper"]),
                    children: [(0,
                    c.jsxs)("div", {
                        className: r()(a["conversation-details"]),
                        children: [(0,
                        c.jsx)("div", {
                            className: r()(a.name),
                            children: o.exists(t.conversation_type) ? s(t.conversation_type) : t.name || "Unknown Conversation"
                        }), (0,
                        c.jsx)("div", {
                            className: `${r()(a.time)} chat-time ${r()(a["chat-time"])}`,
                            children: t.time ? "" + A()(t.time).format("hh:mm A") : ""
                        })]
                    }), (0,
                    c.jsxs)("div", {
                        className: r()(a["conversation-details"], a["flex-end"]),
                        children: [(0,
                        c.jsx)("div", {
                            className: "custom-last-message " + r()(a["last-message"]),
                            children: t.lastMessage || ""
                        }), (0,
                        c.jsx)(d, {
                            count: t.lastMessage && t.unreadMessages
                        })]
                    })]
                })]
            })
        }
        ));
        n("2vZU");
        var C = n("k6h8");
        const f = {
            "participant-container": "participant-item_participant-container__OPbK-",
            avatar: "participant-item_avatar__26a8G"
        };
        var b = n("t1lN");
        function v(t) {
            const e = t.participant && t.participant.full_name && t.participant.full_name.split(" ");
            let n = "";
            e && e.length > 0 && (n = `${e[0].charAt(0)}${e[e.length - 1].charAt(0)}`);
            const i = {
                backgroundColor: t.participant && t.participant.uniqueColor ? t.participant.uniqueColor : "#B2B2B2"
            }
              , s = t.className ? t.className : "";
            return (0,
            c.jsx)("div", {
                className: r()("avatar-initials_user-initials-wrapper__2fbY3", s),
                style: i,
                children: (0,
                c.jsx)("span", {
                    children: n.toUpperCase()
                })
            })
        }
        v.defaultProps = {
            fullName: ""
        };
        const w = (0,
        s.$j)((()=>{
            const t = (0,
            b.P1)(((t,e)=>t[e]), (t=>t));
            return (e,n)=>{
                const {participants: i} = e;
                return {
                    participant: t(i.list, n.userId)
                }
            }
        }
        ))(v)
          , y = i.memo((({participant: t, handleParticipantClick: e, cdn: n})=>{
            const i = (0,
            p.bN)(n, t.avatar);
            return (0,
            c.jsxs)("li", {
                className: r()(f["participant-container"]),
                onClick: e.bind(null, t),
                children: [(0,
                c.jsx)("div", {
                    className: r()(f.avatar),
                    children: i ? (0,
                    c.jsx)(l, {
                        avatar: i,
                        size: 20
                    }) : (0,
                    c.jsx)(w, {
                        userId: t.user_id
                    })
                }), (0,
                c.jsx)("span", {
                    className: r()(f.name),
                    children: t.full_name
                })]
            })
        }
        ))
          , x = i.memo((({participants: t, handleParticipantClick: e, cdn: n})=>(0,
        c.jsx)("ul", {
            className: r()("participants-list_list__LE9UO"),
            children: t.map((t=>(0,
            c.jsx)(y, {
                participant: t,
                handleParticipantClick: e,
                cdn: n
            }, t.user_id)))
        })));
        var _ = n("+5C1");
        const k = i.memo((({onSearchChange: t, searchTerm: e, searchParticipants: n, handleParticipantClick: i, cdn: s})=>{
            const {t: o} = (0,
            u.$)();
            return (0,
            c.jsxs)("div", {
                className: r()("search-bar_search-container__vQuAf"),
                children: [(0,
                c.jsx)(C.Z, {
                    placeholder: o("searchChats") + "...",
                    onChange: t,
                    scope: "chat",
                    clearIcon: !1,
                    value: e,
                    classes: r()("search-bar_search-bar__2hY0T", {
                        "search-bar_list-display__3A2Ap": 0 !== n.length
                    }),
                    icon: (0,
                    c.jsx)(_.r, {
                        className: r()("search-bar_search-icon__3_zL5")
                    }),
                    showIconOnSearch: !0
                }), (0,
                c.jsx)("div", {
                    className: r()("search-bar_list-container__3cpGT", {
                        "search-bar_list-no-display__3HGjd": 0 === n.length
                    }),
                    children: (0,
                    c.jsx)(x, {
                        participants: n,
                        handleParticipantClick: i,
                        cdn: s
                    })
                })]
            })
        }
        ));
        var S = n("o4/b")
          , E = n("ziYR");
        const B = new (n("4AhL").u)({
            module: "chat"
        })
          , I = t=>{
            S.B.emit(E.Z.internalEvents.outgoingEvent, {
                module: "Chat",
                type: E.Z.outboundEvents.types.callback,
                name: E.Z.outboundEvents.eventNames.loadMessages,
                payload: t
            })
        }
          , O = t=>{
            B.log("Creating DM conversation - ", {
                payload: t
            }),
            S.B.emit(E.Z.internalEvents.outgoingEvent, {
                module: "Chat",
                type: E.Z.outboundEvents.types.callback,
                name: E.Z.outboundEvents.eventNames.createDMConversation,
                payload: t
            })
        }
          , N = (t,e)=>({
            type: "HAS_CHAT_TERMS_PERMISSION",
            payload: {
                chatType: t,
                chatPermission: e
            }
        })
          , D = t=>({
            type: "SET_CHAT_ACTIVE",
            payload: {
                isActive: t
            }
        })
          , M = (t,e)=>({
            type: "SET_UNREAD_MESSAGES_COUNT",
            payload: {
                conversation_id: t,
                count: e
            }
        })
          , P = t=>({
            type: "CLEAR_CONVERSATION",
            payload: {
                conversationId: t
            }
        })
          , j = t=>({
            type: "DELETE_MESSAGE_ACK",
            payload: t
        })
          , R = t=>(I({
            conversation_id: t.id
        }),
        {
            type: "SET_CURRENT_CONVERSATION",
            payload: t
        })
          , T = t=>({
            type: "CREAT_DM_CONVERSATION",
            payload: t
        });
        function L(t) {
            return {
                type: "SEARCH_CONVERSATIONS",
                payload: {
                    newTerm: t
                }
            }
        }
        const Z = [{
            id: "e75d82f8-f716-4fdc-bb44-e97969918c74",
            name: "Classroom Chat",
            conversation_type: "public",
            system: !0,
            avatar: "../../../styles/images/shared/groupChat.svg",
            lastMessage: {},
            unreadMessages: 0
        }, {
            id: 2,
            name: "Questions",
            conversation_type: "qna",
            system: !0,
            lastMessage: {},
            unreadMessages: 0
        }, {
            id: "b5e40b39-b4e0-4048-98c7-38e76cc0e8aa",
            conversation_type: "moderators",
            isModeratorOnly: !0,
            name: "Moderator Chat",
            system: !0,
            lastMessage: {},
            unreadMessages: 0
        }]
          , $ = [];
        var U = n("9Nti");
        const V = (0,
        b.P1)([t=>t.user_id], (t=>t))
          , F = (0,
        b.P1)([t=>t], (t=>t && t.substring(0, t.length - 1)))
          , z = (0,
        s.$j)((function(t) {
            const {chat: e, settings: n} = t
              , {participants: i} = t
              , s = (0,
            U.Hw)(i.list ? i.list : {}, n.generalSettings, n.roomData, V(n.ownData), e.search.term);
            return {
                searchTerm: (0,
                U.aX)(t),
                participants: s,
                cdn: F(n.roomMetadata.files_url)
            }
        }
        ), (t=>({
            onSearchChange: e=>t(L(e)),
            changeCurrConversation: e=>{
                t({
                    type: "START_LOADING_MESSAGES",
                    payload: {}
                }),
                t({
                    type: "CLEAR_CURRENT_CONVERSATION",
                    payload: {}
                }),
                t(R(e))
            }
        })))(class extends i.Component {
            constructor(t) {
                super(t),
                this.state = {},
                this.createNewDMConversation = this.createNewDMConversation.bind(this)
            }
            createNewDMConversation(t) {
                const e = {
                    id: t.user_id,
                    name: t.full_name,
                    avatar: "",
                    unreadMessages: 0,
                    lastMessage: {}
                };
                O(e),
                this.props.changeCurrConversation && this.props.changeCurrConversation(e)
            }
            render() {
                return (0,
                c.jsx)(k, {
                    onSearchChange: this.props.onSearchChange,
                    searchTerm: this.props.searchTerm,
                    searchParticipants: this.props.participants,
                    handleParticipantClick: this.props.handleSearchItemClicked,
                    cdn: this.props.cdn
                })
            }
        }
        );
        n("52V7");
        var H, G, W = n("tqtE"), Y = n.n(W);
        function q() {
            return (q = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var K, Q, J = i.forwardRef((function(t, e) {
            var n = t.title
              , s = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return i.createElement("svg", q({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 68.7 68.7",
                style: {
                    enableBackground: "new 0 0 68.7 68.7"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": s
            }, o), n ? i.createElement("title", {
                id: s
            }, n) : null, H || (H = i.createElement("g", {
                id: "_x33_r6LBk.tif"
            })), G || (G = i.createElement("g", {
                id: "_x33_r6LBk.tif_1_"
            })), i.createElement("path", {
                id: "moderator.png",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                },
                d: "M34.5,0.8C15.9,0.8,0.9,15.9,0.9,34.4 C0.9,53,16,68,34.5,68s33.6-15.1,33.6-33.6C68.1,15.9,53.1,0.8,34.5,0.8L34.5,0.8z"
            }), i.createElement("path", {
                id: "moderator.png_1_",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#FFFFFF"
                },
                d: "M44,48.8l-9.5-5.7L25,48.8l2.5-10.6 L19.1,31l11-1l4.4-10.1L38.9,30l11,1l-8.4,7.2L44,48.8z"
            }))
        }
        ));
        function X() {
            return (X = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var tt, et, nt = i.forwardRef((function(t, e) {
            var n = t.title
              , s = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return i.createElement("svg", X({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 68.7 68.7",
                style: {
                    enableBackground: "new 0 0 68.7 68.7"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": s
            }, o), n ? i.createElement("title", {
                id: s
            }, n) : null, K || (K = i.createElement("g", {
                id: "_x33_r6LBk.tif"
            })), Q || (Q = i.createElement("g", {
                id: "_x33_r6LBk.tif_1_"
            })), i.createElement("path", {
                id: "Rectangle_1_copy_8",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                },
                d: "M34.3,0.7c18.6,0,33.6,15,33.6,33.6 s-15,33.6-33.6,33.6S0.7,52.9,0.7,34.3S15.8,0.7,34.3,0.7L34.3,0.7z"
            }), i.createElement("path", {
                id: "Rectangle_1_copy_8_1_",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#FFFFFF"
                },
                d: "M40.9,23.9H26.3 c-1.7,0-3.6,1.3-3.6,2.9v14.6c0,1.5,2,2.9,3.6,2.9h14.6c1.6,0,2.9-1.2,3-2.8v-2.8c0-1.3,6-4.6,6-4.6c0,0.2-6-3.9-6-5.5v-1.8 C43.8,25.1,42.5,23.9,40.9,23.9z"
            }), i.createElement("path", {
                id: "Rectangle_1_copy_8_2_",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                },
                d: "M26,26.7h14.6v2.9H26V26.7z  M26,32.6h14.6v2.9H26V32.6z M26,38.4h7.3v2.9H26V38.4z"
            }))
        }
        ));
        function it() {
            return (it = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var st = i.forwardRef((function(t, e) {
            var n = t.title
              , s = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return i.createElement("svg", it({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 68.7 68.7",
                style: {
                    enableBackground: "new 0 0 68.7 68.7"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": s
            }, o), n ? i.createElement("title", {
                id: s
            }, n) : null, tt || (tt = i.createElement("g", {
                id: "_x33_r6LBk.tif"
            })), et || (et = i.createElement("g", {
                id: "_x33_r6LBk.tif_1_"
            })), i.createElement("path", {
                id: "Shape_3781_copy_2",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                },
                d: "M34.5,0.8c18.6,0,33.6,15,33.6,33.6 S53.1,68,34.5,68S1,53,1,34.4S16.1,0.8,34.5,0.8L34.5,0.8z"
            }), i.createElement("path", {
                id: "Shape_3781_copy_2_1_",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#FFFFFF"
                },
                d: "M36.8,48.7c-0.8,0.7-1.8,1-2.8,1l0,0 c-1,0-2-0.3-2.7-1s-1.1-1.6-1.1-2.6s0.4-1.9,1.1-2.6c0.8-0.7,1.7-1,2.7-0.9c1-0.1,2,0.3,2.8,0.9c0.7,0.7,1.1,1.6,1.1,2.6 C37.9,47.1,37.5,48.1,36.8,48.7z M43.3,30.9c-0.3,0.9-0.8,1.6-1.4,2.4c-0.6,0.6-1.2,1.2-1.8,1.7c-0.6,0.4-1.1,0.9-1.7,1.4 c-0.5,0.5-0.9,1-1.2,1.7s-0.5,1.5-0.5,2.3V41H31l-0.1-0.6c0-0.5-0.1-0.9-0.1-1.3c0-0.8,0.1-1.5,0.3-2.3c0.2-0.9,0.6-1.8,1.2-2.6 c0.5-0.7,1-1.3,1.7-1.9c0.6-0.5,1.1-1,1.6-1.4s0.8-0.8,1.2-1.3c0.3-0.4,0.4-0.9,0.4-1.4c0-0.6-0.2-1.2-0.6-1.7 c-0.6-0.5-1.5-0.7-2.3-0.6c-0.4,0-0.8,0-1.2,0.1s-0.9,0.2-1.3,0.4c-0.4,0.2-0.9,0.3-1.3,0.5s-0.7,0.4-1.1,0.6l-0.6,0.4l-2.6-4.8 l0.5-0.3c1.1-0.7,2.3-1.3,3.6-1.7c1.6-0.5,3.3-0.7,4.9-0.7c2.2-0.1,4.4,0.5,6.2,1.9c1.5,1.3,2.4,3.2,2.3,5.1 C43.9,28.6,43.7,29.8,43.3,30.9L43.3,30.9z"
            }))
        }
        ));
        const ot = {
            [E.Z.conversationTypes.moderators]: (0,
            c.jsx)(J, {}),
            [E.Z.conversationTypes.public]: (0,
            c.jsx)(nt, {}),
            [E.Z.conversationTypes.qna]: (0,
            c.jsx)(st, {})
        };
        class rt extends i.Component {
            constructor(t) {
                super(t),
                this.conversations = i.createRef()
            }
            render() {
                return (0,
                c.jsxs)("div", {
                    className: r()("conversation-list_conversation-list-container__39Z2U"),
                    role: this.props.showAWSAgreementPopup ? "button" : "",
                    onClick: this.props.shouldShowChatTermsPopup ? this.props.showAWSAgreementPopup : null,
                    onKeyDown: this.props.shouldShowChatTermsPopup ? t=>m.Z.emulateButtonKeydown(t, this.props.showAWSAgreementPopup) : null,
                    children: [(0,
                    c.jsx)("div", {
                        className: r()({
                            "conversation-list_search-mode__3LA0S": this.props.isSearchMode
                        }),
                        onClick: this.props.clearSearch
                    }), this.props.displaySearch ? (0,
                    c.jsx)("div", {
                        children: (0,
                        c.jsx)(z, {
                            handleSearchItemClicked: this.props.handleSearchItemClicked
                        })
                    }) : null, (0,
                    c.jsx)("div", {
                        className: r()("conversation-list_conversation-list-wrapper__RcEza"),
                        children: (0,
                        c.jsx)(Y(), {
                            ref: this.conversations,
                            children: (0,
                            c.jsx)("div", {
                                className: r()("conversation-list_conversation-list__VWstP"),
                                children: this.props.conversations && this.props.conversations.map((t=>{
                                    const e = t.users && Object.keys(t.users).filter((t=>"" + t != "" + this.props.ownId))[0]
                                      , n = (0,
                                    p.bN)(this.props.cdn, t.avatar);
                                    return (0,
                                    c.jsx)(g, {
                                        AvatarIcon: t.conversation_type && t.conversation_type === E.Z.conversationTypes.private ? n || (0,
                                        c.jsx)(w, {
                                            userId: e,
                                            className: "conversation-list_conversation-list-user-avatar__MAP1U"
                                        }) : ot[t.conversation_type] || null,
                                        customClassName: this.props.isRoomThemeConf ? "custom-chat-conversation-item" : "",
                                        conversation: t,
                                        handleOnClick: this.props.handleConvSelect
                                    }, t.id)
                                }
                                ))
                            })
                        })
                    })]
                })
            }
        }
        const at = i.memo(rt);
        var pt = n("l8v/")
          , ct = n("UmR+");
        const lt = (0,
        b.P1)([t=>t], (t=>t && t.substring(0, t.length - 1)))
          , dt = (0,
        b.P1)([t=>t.user_id], (t=>t))
          , ht = (0,
        b.P1)([t=>t], (t=>t && t.general && t.general.theme === E.Z.roomTheme.CONF))
          , At = (0,
        s.$j)((function(t) {
            const {settings: e, participants: n} = t
              , i = n.list ? n.list : {}
              , s = dt(e.ownData)
              , o = (0,
            ct.S_)(i, s)
              , r = (0,
            U.yZ)(e.generalSettings, o, i[s])
              , a = ht(t.settings.generalSettings);
            return {
                conversations: (0,
                U.yg)(t),
                isLoading: (0,
                U.Lo)(t),
                displaySearch: r,
                isSearchMode: (0,
                U.hm)(t),
                cdn: lt(e.roomMetadata.files_url),
                ownId: (0,
                U.I5)(t),
                isRoomThemeConf: a
            }
        }
        ), (t=>({
            clearSearchTerm: ()=>t(L(""))
        })))(class extends i.Component {
            constructor(t) {
                super(t),
                this.state = {},
                this.clearSearch = this.clearSearch.bind(this)
            }
            clearSearch() {
                this.props.isSearchMode && this.props.clearSearchTerm()
            }
            render() {
                const {isLoading: t} = this.props;
                return t ? (0,
                c.jsx)(pt.Z, {}) : (0,
                c.jsx)(at, {
                    showAWSAgreementPopup: this.props.showAWSAgreementPopup,
                    shouldShowChatTermsPopup: this.props.shouldShowChatTermsPopup,
                    conversations: this.props.conversations,
                    handleSearchItemClicked: this.props.handleSearchItemClicked,
                    handleConvSelect: this.props.handleConvSelect,
                    displaySearch: this.props.displaySearch,
                    isSearchMode: this.props.isSearchMode,
                    clearSearch: this.clearSearch,
                    cdn: this.props.cdn,
                    isRoomThemeConf: this.props.isRoomThemeConf,
                    ownId: this.props.ownId
                })
            }
        }
        );
        var ut = n("cNRa")
          , mt = n.n(ut)
          , gt = n("PhMP")
          , Ct = n.n(gt);
        function ft(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                n[i - 1] = arguments[i];
            return "function" == typeof t && t.apply(void 0, n)
        }
        function bt(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        var vt = {}
          , wt = Boolean("undefined" != typeof window && window.document && window.document.createElement)
          , yt = "REACT_CONTEXTMENU_SHOW"
          , xt = "REACT_CONTEXTMENU_HIDE";
        function _t(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window
              , i = void 0;
            "function" == typeof window.CustomEvent ? i = new window.CustomEvent(t,{
                detail: e
            }) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, !1, !0, e),
            n && (n.dispatchEvent(i),
            Ct()(vt, e))
        }
        function kt() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = arguments[1];
            _t(yt, Ct()({}, t, {
                type: yt
            }), e)
        }
        function St() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = arguments[1];
            _t(xt, Ct()({}, t, {
                type: xt
            }), e)
        }
        const Et = new function t() {
            var e = this;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.handleShowEvent = function(t) {
                for (var n in e.callbacks)
                    bt(e.callbacks, n) && e.callbacks[n].show(t)
            }
            ,
            this.handleHideEvent = function(t) {
                for (var n in e.callbacks)
                    bt(e.callbacks, n) && e.callbacks[n].hide(t)
            }
            ,
            this.register = function(t, n) {
                var i = Math.random().toString(36).substring(7);
                return e.callbacks[i] = {
                    show: t,
                    hide: n
                },
                i
            }
            ,
            this.unregister = function(t) {
                t && e.callbacks[t] && delete e.callbacks[t]
            }
            ,
            this.callbacks = {},
            wt && (window.addEventListener(yt, this.handleShowEvent),
            window.addEventListener(xt, this.handleHideEvent))
        }
        ;
        var Bt = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
          , It = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        }();
        function Ot(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function Nt(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function Dt(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        var Mt = function(t) {
            function e() {
                var t, n, i;
                Nt(this, e);
                for (var s = arguments.length, o = Array(s), r = 0; r < s; r++)
                    o[r] = arguments[r];
                return n = i = Dt(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(o))),
                i.handleClick = function(t) {
                    0 !== t.button && 1 !== t.button && t.preventDefault(),
                    i.props.disabled || i.props.divider || (ft(i.props.onClick, t, Ct()({}, i.props.data, vt.data), vt.target),
                    i.props.preventClose || St())
                }
                ,
                Dt(i, n)
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t),
            It(e, [{
                key: "render",
                value: function() {
                    var t, e = this, n = this.props, s = n.attributes, o = n.children, a = n.className, p = n.disabled, c = n.divider, l = n.selected, d = r()(a, "react-contextmenu-item", s.className, (Ot(t = {}, r()("react-contextmenu-item--disabled", s.disabledClassName), p),
                    Ot(t, r()("react-contextmenu-item--divider", s.dividerClassName), c),
                    Ot(t, r()("react-contextmenu-item--selected", s.selectedClassName), l),
                    t));
                    return i.createElement("div", Bt({}, s, {
                        className: d,
                        role: "menuitem",
                        tabIndex: "-1",
                        "aria-disabled": p ? "true" : "false",
                        "aria-orientation": c ? "horizontal" : null,
                        ref: function(t) {
                            e.ref = t
                        },
                        onMouseMove: this.props.onMouseMove,
                        onMouseLeave: this.props.onMouseLeave,
                        onTouchEnd: this.handleClick,
                        onClick: this.handleClick
                    }), c ? null : o)
                }
            }]),
            e
        }(i.Component);
        Mt.propTypes = {
            attributes: mt().object,
            children: mt().node,
            className: mt().string,
            data: mt().object,
            disabled: mt().bool,
            divider: mt().bool,
            onClick: mt().func,
            onMouseLeave: mt().func,
            onMouseMove: mt().func,
            preventClose: mt().bool,
            selected: mt().bool
        },
        Mt.defaultProps = {
            attributes: {},
            children: null,
            className: "",
            data: {},
            disabled: !1,
            divider: !1,
            onClick: function() {
                return null
            },
            onMouseMove: function() {
                return null
            },
            onMouseLeave: function() {
                return null
            },
            preventClose: !1,
            selected: !1
        };
        const Pt = Mt;
        var jt = function(t) {
            function e(t) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var n = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return Rt.call(n),
                n.seletedItemRef = null,
                n.state = {
                    selectedItem: null,
                    forceSubMenuOpen: !1
                },
                n
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t),
            e
        }(i.Component);
        jt.propTypes = {
            children: mt().node.isRequired
        };
        var Rt = function() {
            var t = this;
            this.handleKeyNavigation = function(e) {
                if (!1 !== t.state.isVisible)
                    switch (e.keyCode) {
                    case 37:
                    case 27:
                        e.preventDefault(),
                        t.hideMenu(e);
                        break;
                    case 38:
                        e.preventDefault(),
                        t.selectChildren(!0);
                        break;
                    case 40:
                        e.preventDefault(),
                        t.selectChildren(!1);
                        break;
                    case 39:
                        t.tryToOpenSubMenu(e);
                        break;
                    case 13:
                        e.preventDefault(),
                        t.tryToOpenSubMenu(e),
                        t.seletedItemRef && t.seletedItemRef.ref instanceof HTMLElement && !(t.seletedItemRef && t.seletedItemRef.props && t.seletedItemRef.props.disabled) ? t.seletedItemRef.ref.click() : t.hideMenu(e)
                    }
            }
            ,
            this.handleForceClose = function() {
                t.setState({
                    forceSubMenuOpen: !1
                })
            }
            ,
            this.tryToOpenSubMenu = function(e) {
                t.state.selectedItem && t.state.selectedItem.type === t.getSubMenuType() && (e.preventDefault(),
                t.setState({
                    forceSubMenuOpen: !0
                }))
            }
            ,
            this.selectChildren = function(e) {
                var n = t.state.selectedItem
                  , s = []
                  , o = 0
                  , r = {};
                if (i.Children.forEach(t.props.children, (function e(n, a) {
                    n && ([Pt, t.getSubMenuType()].indexOf(n.type) < 0 ? i.Children.forEach(n.props.children, e) : n.props.divider || (n.props.disabled && (++o,
                    r[a] = !0),
                    s.push(n)))
                }
                )),
                o !== s.length) {
                    var a = function(t) {
                        var n = t;
                        do {
                            e ? --n : ++n,
                            n < 0 ? n = s.length - 1 : n >= s.length && (n = 0)
                        } while (n !== t && r[n]);
                        return n === t ? null : n
                    }(s.indexOf(n));
                    null !== a && t.setState({
                        selectedItem: s[a],
                        forceSubMenuOpen: !1
                    })
                }
            }
            ,
            this.onChildMouseMove = function(e) {
                t.state.selectedItem !== e && t.setState({
                    selectedItem: e,
                    forceSubMenuOpen: !1
                })
            }
            ,
            this.onChildMouseLeave = function() {
                t.setState({
                    selectedItem: null,
                    forceSubMenuOpen: !1
                })
            }
            ,
            this.renderChildren = function(e) {
                return i.Children.map(e, (function(e) {
                    var n = {};
                    return i.isValidElement(e) ? [Pt, t.getSubMenuType()].indexOf(e.type) < 0 ? (n.children = t.renderChildren(e.props.children),
                    i.cloneElement(e, n)) : (n.onMouseLeave = t.onChildMouseLeave.bind(t),
                    e.type === t.getSubMenuType() && (n.forceOpen = t.state.forceSubMenuOpen && t.state.selectedItem === e,
                    n.forceClose = t.handleForceClose,
                    n.parentKeyNavigationHandler = t.handleKeyNavigation),
                    e.props.divider || t.state.selectedItem !== e ? (n.onMouseMove = function() {
                        return t.onChildMouseMove(e)
                    }
                    ,
                    i.cloneElement(e, n)) : (n.selected = !0,
                    n.ref = function(e) {
                        t.seletedItemRef = e
                    }
                    ,
                    i.cloneElement(e, n))) : e
                }
                ))
            }
        };
        const Tt = jt;
        var Lt = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
          , Zt = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        }();
        function $t(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        var Ut = function(t) {
            function e(t) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var n = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.getMenuPosition = function() {
                    var t = window
                      , e = t.innerWidth
                      , i = t.innerHeight
                      , s = n.subMenu.getBoundingClientRect()
                      , o = {};
                    return s.bottom > i ? o.bottom = 0 : o.top = 0,
                    s.right < e ? o.left = "100%" : o.right = "100%",
                    o
                }
                ,
                n.getRTLMenuPosition = function() {
                    var t = window.innerHeight
                      , e = n.subMenu.getBoundingClientRect()
                      , i = {};
                    return e.bottom > t ? i.bottom = 0 : i.top = 0,
                    e.left < 0 ? i.left = "100%" : i.right = "100%",
                    i
                }
                ,
                n.hideSubMenu = function(t) {
                    t.detail && t.detail.id && n.menu && t.detail.id !== n.menu.id || (n.props.forceOpen && n.props.forceClose(),
                    n.setState({
                        visible: !1,
                        selectedItem: null
                    }),
                    n.unregisterHandlers())
                }
                ,
                n.handleClick = function(t) {
                    t.preventDefault(),
                    n.props.disabled || (ft(n.props.onClick, t, Ct()({}, n.props.data, vt.data), vt.target),
                    n.props.onClick && !n.props.preventCloseOnClick && St())
                }
                ,
                n.handleMouseEnter = function() {
                    n.closetimer && clearTimeout(n.closetimer),
                    n.props.disabled || n.state.visible || (n.opentimer = setTimeout((function() {
                        return n.setState({
                            visible: !0,
                            selectedItem: null
                        })
                    }
                    ), n.props.hoverDelay))
                }
                ,
                n.handleMouseLeave = function() {
                    n.opentimer && clearTimeout(n.opentimer),
                    n.state.visible && (n.closetimer = setTimeout((function() {
                        return n.setState({
                            visible: !1,
                            selectedItem: null
                        })
                    }
                    ), n.props.hoverDelay))
                }
                ,
                n.menuRef = function(t) {
                    n.menu = t
                }
                ,
                n.subMenuRef = function(t) {
                    n.subMenu = t
                }
                ,
                n.registerHandlers = function() {
                    document.removeEventListener("keydown", n.props.parentKeyNavigationHandler),
                    document.addEventListener("keydown", n.handleKeyNavigation)
                }
                ,
                n.unregisterHandlers = function(t) {
                    document.removeEventListener("keydown", n.handleKeyNavigation),
                    t || document.addEventListener("keydown", n.props.parentKeyNavigationHandler)
                }
                ,
                n.state = Ct()({}, n.state, {
                    visible: !1
                }),
                n
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t),
            Zt(e, [{
                key: "componentDidMount",
                value: function() {
                    this.listenId = Et.register((function() {}
                    ), this.hideSubMenu)
                }
            }, {
                key: "getSubMenuType",
                value: function() {
                    return e
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(t, e) {
                    return this.isVisibilityChange = !(this.state.visible === e.visible && this.props.forceOpen === t.forceOpen || this.state.visible && t.forceOpen || this.props.forceOpen && e.visible),
                    !0
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var t = this;
                    this.isVisibilityChange && (this.props.forceOpen || this.state.visible ? (window.requestAnimationFrame || setTimeout)((function() {
                        var e = t.props.rtl ? t.getRTLMenuPosition() : t.getMenuPosition();
                        t.subMenu.style.removeProperty("top"),
                        t.subMenu.style.removeProperty("bottom"),
                        t.subMenu.style.removeProperty("left"),
                        t.subMenu.style.removeProperty("right"),
                        bt(e, "top") && (t.subMenu.style.top = e.top),
                        bt(e, "left") && (t.subMenu.style.left = e.left),
                        bt(e, "bottom") && (t.subMenu.style.bottom = e.bottom),
                        bt(e, "right") && (t.subMenu.style.right = e.right),
                        t.subMenu.classList.add("react-contextmenu--visible"),
                        t.registerHandlers(),
                        t.setState({
                            selectedItem: null
                        })
                    }
                    )) : (this.subMenu.addEventListener("transitionend", (function e() {
                        t.subMenu.removeEventListener("transitionend", e),
                        t.subMenu.style.removeProperty("bottom"),
                        t.subMenu.style.removeProperty("right"),
                        t.subMenu.style.top = 0,
                        t.subMenu.style.left = "100%",
                        t.unregisterHandlers()
                    }
                    )),
                    this.subMenu.classList.remove("react-contextmenu--visible")))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.listenId && Et.unregister(this.listenId),
                    this.opentimer && clearTimeout(this.opentimer),
                    this.closetimer && clearTimeout(this.closetimer),
                    this.unregisterHandlers(!0)
                }
            }, {
                key: "render",
                value: function() {
                    var t, e = this.props, n = e.children, s = e.attributes, o = e.disabled, a = e.title, p = e.selected, c = this.state.visible, l = {
                        ref: this.menuRef,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        className: r()("react-contextmenu-item", "react-contextmenu-submenu", s.listClassName),
                        style: {
                            position: "relative"
                        }
                    }, d = {
                        className: r()("react-contextmenu-item", s.className, (t = {},
                        $t(t, r()("react-contextmenu-item--disabled", s.disabledClassName), o),
                        $t(t, r()("react-contextmenu-item--active", s.visibleClassName), c),
                        $t(t, r()("react-contextmenu-item--selected", s.selectedClassName), p),
                        t)),
                        onMouseMove: this.props.onMouseMove,
                        onMouseOut: this.props.onMouseOut,
                        onClick: this.handleClick
                    }, h = {
                        ref: this.subMenuRef,
                        style: {
                            position: "absolute",
                            transition: "opacity 1ms",
                            top: 0,
                            left: "100%"
                        },
                        className: r()("react-contextmenu", this.props.className)
                    };
                    return i.createElement("nav", Lt({}, l, {
                        role: "menuitem",
                        tabIndex: "-1",
                        "aria-haspopup": "true"
                    }), i.createElement("div", Lt({}, s, d), a), i.createElement("nav", Lt({}, h, {
                        role: "menu",
                        tabIndex: "-1"
                    }), this.renderChildren(n)))
                }
            }]),
            e
        }(Tt);
        Ut.propTypes = {
            children: mt().node.isRequired,
            attributes: mt().object,
            title: mt().node.isRequired,
            className: mt().string,
            disabled: mt().bool,
            hoverDelay: mt().number,
            rtl: mt().bool,
            selected: mt().bool,
            onMouseMove: mt().func,
            onMouseOut: mt().func,
            forceOpen: mt().bool,
            forceClose: mt().func,
            parentKeyNavigationHandler: mt().func
        },
        Ut.defaultProps = {
            disabled: !1,
            hoverDelay: 500,
            attributes: {},
            className: "",
            rtl: !1,
            selected: !1,
            onMouseMove: function() {
                return null
            },
            onMouseOut: function() {
                return null
            },
            forceOpen: !1,
            forceClose: function() {
                return null
            },
            parentKeyNavigationHandler: function() {
                return null
            }
        };
        const Vt = Ut;
        var Ft = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        }()
          , zt = function(t) {
            function e(t) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var n = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.registerHandlers = function() {
                    document.addEventListener("mousedown", n.handleOutsideClick),
                    document.addEventListener("touchstart", n.handleOutsideClick),
                    n.props.preventHideOnScroll || document.addEventListener("scroll", n.handleHide),
                    n.props.preventHideOnContextMenu || document.addEventListener("contextmenu", n.handleHide),
                    document.addEventListener("keydown", n.handleKeyNavigation),
                    n.props.preventHideOnResize || window.addEventListener("resize", n.handleHide)
                }
                ,
                n.unregisterHandlers = function() {
                    document.removeEventListener("mousedown", n.handleOutsideClick),
                    document.removeEventListener("touchstart", n.handleOutsideClick),
                    document.removeEventListener("scroll", n.handleHide),
                    document.removeEventListener("contextmenu", n.handleHide),
                    document.removeEventListener("keydown", n.handleKeyNavigation),
                    window.removeEventListener("resize", n.handleHide)
                }
                ,
                n.handleShow = function(t) {
                    if (t.detail.id === n.props.id && !n.state.isVisible) {
                        var e = t.detail.position;
                        n.setState({
                            isVisible: !0,
                            x: e.x,
                            y: e.y
                        }),
                        n.registerHandlers(),
                        ft(n.props.onShow, t)
                    }
                }
                ,
                n.handleHide = function(t) {
                    !n.state.isVisible || t.detail && t.detail.id && t.detail.id !== n.props.id || (n.unregisterHandlers(),
                    n.setState({
                        isVisible: !1,
                        selectedItem: null,
                        forceSubMenuOpen: !1
                    }),
                    ft(n.props.onHide, t))
                }
                ,
                n.handleOutsideClick = function(t) {
                    n.menu.contains(t.target) || St()
                }
                ,
                n.handleMouseLeave = function(t) {
                    t.preventDefault(),
                    ft(n.props.onMouseLeave, t, Ct()({}, n.props.data, vt.data), vt.target),
                    n.props.hideOnLeave && St()
                }
                ,
                n.handleContextMenu = function(t) {
                    t.preventDefault(),
                    n.handleHide(t)
                }
                ,
                n.hideMenu = function(t) {
                    27 !== t.keyCode && 13 !== t.keyCode || St()
                }
                ,
                n.getMenuPosition = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = {
                        top: e,
                        left: t
                    };
                    if (!n.menu)
                        return i;
                    var s = window
                      , o = s.innerWidth
                      , r = s.innerHeight
                      , a = n.menu.getBoundingClientRect();
                    return e + a.height > r && (i.top -= a.height),
                    t + a.width > o && (i.left -= a.width),
                    i.top < 0 && (i.top = a.height < r ? (r - a.height) / 2 : 0),
                    i.left < 0 && (i.left = a.width < o ? (o - a.width) / 2 : 0),
                    i
                }
                ,
                n.getRTLMenuPosition = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = {
                        top: e,
                        left: t
                    };
                    if (!n.menu)
                        return i;
                    var s = window
                      , o = s.innerWidth
                      , r = s.innerHeight
                      , a = n.menu.getBoundingClientRect();
                    return i.left = t - a.width,
                    e + a.height > r && (i.top -= a.height),
                    i.left < 0 && (i.left += a.width),
                    i.top < 0 && (i.top = a.height < r ? (r - a.height) / 2 : 0),
                    i.left + a.width > o && (i.left = a.width < o ? (o - a.width) / 2 : 0),
                    i
                }
                ,
                n.menuRef = function(t) {
                    n.menu = t
                }
                ,
                n.state = Ct()({}, n.state, {
                    x: 0,
                    y: 0,
                    isVisible: !1
                }),
                n
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t),
            Ft(e, [{
                key: "getSubMenuType",
                value: function() {
                    return Vt
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.listenId = Et.register(this.handleShow, this.handleHide)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var t = this
                      , e = window.requestAnimationFrame || setTimeout;
                    e(this.state.isVisible ? function() {
                        var n = t.state
                          , i = n.x
                          , s = n.y
                          , o = t.props.rtl ? t.getRTLMenuPosition(i, s) : t.getMenuPosition(i, s)
                          , r = o.top
                          , a = o.left;
                        e((function() {
                            t.menu && (t.menu.style.top = r + "px",
                            t.menu.style.left = a + "px",
                            t.menu.style.opacity = 1,
                            t.menu.style.pointerEvents = "auto")
                        }
                        ))
                    }
                    : function() {
                        t.menu && (t.menu.style.opacity = 0,
                        t.menu.style.pointerEvents = "none")
                    }
                    )
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.listenId && Et.unregister(this.listenId),
                    this.unregisterHandlers()
                }
            }, {
                key: "render",
                value: function() {
                    var t, e, n, s = this.props, o = s.children, a = s.className, p = s.style, c = this.state.isVisible, l = Ct()({}, p, {
                        position: "fixed",
                        opacity: 0,
                        pointerEvents: "none"
                    }), d = r()("react-contextmenu", a, (n = c,
                    (e = "react-contextmenu--visible")in (t = {}) ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n,
                    t));
                    return i.createElement("nav", {
                        role: "menu",
                        tabIndex: "-1",
                        ref: this.menuRef,
                        style: l,
                        className: d,
                        onContextMenu: this.handleContextMenu,
                        onMouseLeave: this.handleMouseLeave
                    }, this.renderChildren(o))
                }
            }]),
            e
        }(Tt);
        zt.propTypes = {
            id: mt().string.isRequired,
            children: mt().node.isRequired,
            data: mt().object,
            className: mt().string,
            hideOnLeave: mt().bool,
            rtl: mt().bool,
            onHide: mt().func,
            onMouseLeave: mt().func,
            onShow: mt().func,
            preventHideOnContextMenu: mt().bool,
            preventHideOnResize: mt().bool,
            preventHideOnScroll: mt().bool,
            style: mt().object
        },
        zt.defaultProps = {
            className: "",
            data: {},
            hideOnLeave: !1,
            rtl: !1,
            onHide: function() {
                return null
            },
            onMouseLeave: function() {
                return null
            },
            onShow: function() {
                return null
            },
            preventHideOnContextMenu: !1,
            preventHideOnResize: !1,
            preventHideOnScroll: !1,
            style: {}
        };
        const Ht = zt;
        var Gt = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        }();
        function Wt(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function Yt(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        var qt = function(t) {
            function e() {
                var t, n, i;
                Wt(this, e);
                for (var s = arguments.length, o = Array(s), r = 0; r < s; r++)
                    o[r] = arguments[r];
                return n = i = Yt(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(o))),
                i.touchHandled = !1,
                i.handleMouseDown = function(t) {
                    i.props.holdToDisplay >= 0 && 0 === t.button && (t.persist(),
                    t.stopPropagation(),
                    i.mouseDownTimeoutId = setTimeout((function() {
                        return i.handleContextClick(t)
                    }
                    ), i.props.holdToDisplay)),
                    ft(i.props.attributes.onMouseDown, t)
                }
                ,
                i.handleMouseUp = function(t) {
                    0 === t.button && clearTimeout(i.mouseDownTimeoutId),
                    ft(i.props.attributes.onMouseUp, t)
                }
                ,
                i.handleMouseOut = function(t) {
                    0 === t.button && clearTimeout(i.mouseDownTimeoutId),
                    ft(i.props.attributes.onMouseOut, t)
                }
                ,
                i.handleTouchstart = function(t) {
                    i.touchHandled = !1,
                    i.props.holdToDisplay >= 0 && (t.persist(),
                    t.stopPropagation(),
                    i.touchstartTimeoutId = setTimeout((function() {
                        i.handleContextClick(t),
                        i.touchHandled = !0
                    }
                    ), i.props.holdToDisplay)),
                    ft(i.props.attributes.onTouchStart, t)
                }
                ,
                i.handleTouchEnd = function(t) {
                    i.touchHandled && t.preventDefault(),
                    clearTimeout(i.touchstartTimeoutId),
                    ft(i.props.attributes.onTouchEnd, t)
                }
                ,
                i.handleContextMenu = function(t) {
                    t.button === i.props.mouseButton && i.handleContextClick(t),
                    ft(i.props.attributes.onContextMenu, t)
                }
                ,
                i.handleMouseClick = function(t) {
                    t.button === i.props.mouseButton && i.handleContextClick(t),
                    ft(i.props.attributes.onClick, t)
                }
                ,
                i.handleContextClick = function(t) {
                    if (!(i.props.disable || i.props.disableIfShiftIsPressed && t.shiftKey)) {
                        t.preventDefault(),
                        t.stopPropagation();
                        var e = t.clientX || t.touches && t.touches[0].pageX
                          , n = t.clientY || t.touches && t.touches[0].pageY;
                        i.props.posX && (e -= i.props.posX),
                        i.props.posY && (n -= i.props.posY),
                        St();
                        var s = ft(i.props.collect, i.props)
                          , o = {
                            position: {
                                x: e,
                                y: n
                            },
                            target: i.elem,
                            id: i.props.id
                        };
                        s && "function" == typeof s.then ? s.then((function(e) {
                            o.data = Ct()({}, e, {
                                target: t.target
                            }),
                            kt(o)
                        }
                        )) : (o.data = Ct()({}, s, {
                            target: t.target
                        }),
                        kt(o))
                    }
                }
                ,
                i.elemRef = function(t) {
                    i.elem = t
                }
                ,
                Yt(i, n)
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t),
            Gt(e, [{
                key: "render",
                value: function() {
                    var t = this.props
                      , e = t.renderTag
                      , n = t.attributes
                      , s = t.children
                      , o = Ct()({}, n, {
                        className: r()("react-contextmenu-wrapper", n.className),
                        onContextMenu: this.handleContextMenu,
                        onClick: this.handleMouseClick,
                        onMouseDown: this.handleMouseDown,
                        onMouseUp: this.handleMouseUp,
                        onTouchStart: this.handleTouchstart,
                        onTouchEnd: this.handleTouchEnd,
                        onMouseOut: this.handleMouseOut,
                        ref: this.elemRef
                    });
                    return i.createElement(e, o, s)
                }
            }]),
            e
        }(i.Component);
        qt.propTypes = {
            id: mt().string.isRequired,
            children: mt().node.isRequired,
            attributes: mt().object,
            collect: mt().func,
            disable: mt().bool,
            holdToDisplay: mt().number,
            posX: mt().number,
            posY: mt().number,
            renderTag: mt().elementType,
            mouseButton: mt().number,
            disableIfShiftIsPressed: mt().bool
        },
        qt.defaultProps = {
            attributes: {},
            collect: function() {
                return null
            },
            disable: !1,
            holdToDisplay: 1e3,
            renderTag: "div",
            posX: 0,
            posY: 0,
            mouseButton: 2,
            disableIfShiftIsPressed: !1
        };
        const Kt = qt;
        [].concat(function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n
            }
            return Array.from(t)
        }(Object.keys(Kt.propTypes)), ["children"]);
        var Qt = n("LgT2");
        n("L19K");
        const Jt = i.memo((({text: t, onClick: e})=>(0,
        c.jsx)(Qt.z, {
            tabIndex: -1,
            classes: "reply-message-btn",
            onClick: e,
            children: (0,
            c.jsx)("p", {
                children: t
            })
        })));
        n("ID3L");
        var Xt = n("sATW")
          , te = n("fIjO");
        const ee = i.memo((({t, isRecived: e=!1, message: n, continuedMessage: s=!1, noStyle: o=!1, disableMenu: a=!1, className: l, reply: d=!1, isInInput: h=!1, onRemoveReplyClicked: A, fontScale: u=100, showQnAReplyButtons: m, shouldStretch: g, onReplyClicked: C, wasAnswered: f})=>{
            const b = i.createRef();
            return (0,
            c.jsxs)(Kt, {
                id: "message-menu",
                collect: ()=>({
                    message: n,
                    showReplyInContext: m && f
                }),
                disable: a,
                ref: b,
                attributes: {
                    className: r()("message_message__39brm", o ? {} : {
                        "message_recive-message__1IFXz": e,
                        "custom-sent-message message_sent-message__jzaV1": !e,
                        "message_continued-message__3vubD": s,
                        "message_stretched-message__2-Wmd": g
                    }, l || "")
                },
                children: [s ? null : (0,
                c.jsxs)("div", {
                    className: r()("message_title__xzKIM"),
                    children: [d || e ? (0,
                    c.jsx)("span", {
                        className: "custom-user-name " + r()("message_user-name__1PYU0", d ? "message_reply-message-user-name__8ILNF" : ""),
                        children: n.user.name
                    }) : null, (0,
                    c.jsxs)("div", {
                        className: r()("message_right-message-container__3t0cV"),
                        children: [(0,
                        c.jsx)("p", {
                            className: "custom-message-time " + r()("message_time__1vJOg", d ? "custom-message-time message_reply-message-time__31EyK" : ""),
                            children: n.time.format("hh:mmA")
                        }), h && (0,
                        c.jsx)("div", {
                            className: r()("message_remove-reply-icon-container__3Fi-7"),
                            children: (0,
                            c.jsx)("span", {
                                className: "remove-reply-icon",
                                onClick: A
                            })
                        })]
                    })]
                }), !a && !d && (0,
                c.jsx)("div", {
                    className: "custom-message-dropdown-expansion-arrow-container " + r()("message_message-dropdown-expansion-arrow-container__1GF40"),
                    children: (0,
                    c.jsx)(Xt.r, {
                        onClick: t=>b.current.handleContextClick(t),
                        className: "custom-message-dropdown-expansion-arrow " + r()("message_message-dropdown-expansion-arrow__zJD_U"),
                        width: 10,
                        height: 10
                    })
                }), !d && n.message_metadata ? (0,
                c.jsx)("div", {
                    className: "custom-reply-message-container " + r()("message_reply-message-container__2ghp7"),
                    children: (0,
                    c.jsx)(ee, {
                        fontScale: u,
                        message: n.message_metadata,
                        noStyle: !0,
                        isRecived: !0,
                        disableMenu: !0,
                        className: "custom-reply-message " + r()("message_reply-message__38zR8"),
                        reply: !0
                    }, n.message_metadata.id)
                }) : null, (0,
                c.jsxs)("p", {
                    className: r()("message_message-content__2_M8t"),
                    style: {
                        fontSize: d ? 14 * Number(u / 100) : 17 * Number(u / 100)
                    },
                    children: (0,
                    p.N1)(n.message, r()("message_message-content-link__B3cod"), !0)
                }), m && !f && (0,
                c.jsxs)("div", {
                    className: r()("message_reply-btns-container__3JoLB"),
                    children: [(0,
                    c.jsx)(Jt, {
                        text: t("reply"),
                        onClick: ()=>{
                            C && C(n)
                        }
                    }), (0,
                    c.jsx)(Jt, {
                        text: t("replyAll"),
                        onClick: ()=>{
                            C && C(Object.assign({}, n, {
                                reply_all: !0
                            }))
                        }
                    })]
                })]
            })
        }
        ), ((t,e)=>t.message.id === e.message.id && t.fontScale === e.fontScale && t.showQnAReplyButtons === e.showQnAReplyButtons && t.wasAnswered === e.wasAnswered && t.disableMenu === e.disableMenu))
          , ne = i.memo((({date: t})=>(0,
        c.jsx)("div", {
            className: r()("message_message__39brm", "message_date__1-1wN"),
            children: t
        })))
          , ie = (0,
        te.Z)()(ee);
        var se = n("wIc/");
        const oe = (0,
        te.Z)()(class extends i.Component {
            constructor(t) {
                super(t),
                this.state = {
                    value: "",
                    rows: 1,
                    minRows: 1,
                    maxRows: 4,
                    textHeight: null
                },
                this.handleChange = this.handleChange.bind(this),
                this.setInputRows = this.setInputRows.bind(this),
                this.handleOnChange = this.handleOnChange.bind(this),
                this.setConvDraftValue = this.setConvDraftValue.bind(this),
                this.onRemoveReplyClicked = this.onRemoveReplyClicked.bind(this),
                this.handleKeyUp = this.handleKeyUp.bind(this),
                this.handleMessage = this.handleMessage.bind(this), this.new_input;
            }
            componentDidMount() {
                if (this.props.conversation) {
                    const t = this.retriveConvDraft(this.props.conversation.id);
                    this.setState({
                        value: t ? t.value : ""
                    }, (()=>this.setInputRows(this.state.value.length)))
                }
            }
            componentWillReceiveProps(t) {
                const e = this.retriveConvDraft(t.conversation.id);
                this.setState({
                    value: e ? e.value : ""
                })
            }
            setInputRows(t) {
                const {maxRows: e} = this.state;
                let n = this.state.rows;
                return t <= 40 ? (n = 1,
                n) : t > 40 && t <= 85 ? (n = 2,
                n) : t > 85 && t <= 130 ? (n = 3,
                n) : t > 130 ? (n = 4,
                n) : (n < this.state.minRows && (n = this.state.minRows),
                n < e ? n : e)
            }
            handleInputFilterValue(t) {
                const {value: e} = t.target;
                "Enter" === t.key && !t.shiftKey && e.trimRight("\n").trimRight(" ").length > 0 ? (t.preventDefault(),
                this.handleMessage()) : 0 === e.length && 32 === t.charCode ? t.preventDefault() : this.handleOnChange(t)
            }
            handleOnChange(t) {
                const {value: e} = t.target;
                if (!this.props.disabled) {
                    this.setState({
                        value: e
                    });
                    const t = this.setConvDraftValue(e);
                    try {
                        localStorage.setItem("chatDrafts", JSON.stringify(t))
                    } catch (n) {
                        console.log("Had an error saving chat draft in local storage. Error - " + n.message)
                    }
                }
            }
            retriveConvDraft(t) {
                const e = this.retrievedDrafts();
                return e && e[t] && e[t][this.props.ownUserId] && e[t][this.props.ownUserId].value ? e[t][this.props.ownUserId] : null
            }
            setConvDraftValue(t) {
                let e = this.retrievedDrafts();
                if (!t && e && this.props.conversation)
                    return Reflect.deleteProperty(e, this.props.conversation.id),
                    e;
                const n = {
                    value: t
                };
                return this.props.conversation && e[this.props.conversation.id] ? e[this.props.conversation.id][this.props.ownUserId] = n : this.props.conversation && (e[this.props.conversation.id] = {
                    [this.props.ownUserId]: n
                }),
                e
            }
            retrievedDrafts() {
                let t = "{}";
                try {
                    const e = localStorage.getItem("chatDrafts");
                    "string" == typeof e && (t = e)
                } catch (e) {
                    console.log("Had an error getting chat draft in local storage. Error - " + e.message)
                }
                return JSON.parse(t)
            }
            handleKeyUp(t) {
                37 !== t.keyCode && 39 !== t.keyCode || (t.preventDefault(),
                t.stopPropagation(),
                t.nativeEvent.stopImmediatePropagation())
            }
            handleChange(t) {
                this.handleInputFilterValue(t),
                this.setState({
                    rows: this.setInputRows(t.target.textLength)
                })
            }
            onRemoveReplyClicked() {
                this.props.handleReply && this.props.handleReply(null)
            }
            handleMessage() {
                // const t = this.state.value;
                const t = this.new_input.innerHTML;
                console.log(t);
                if (t && t.trimEnd("\n").trimEnd(" ").trimEnd("&nbsp;").length > 0) {
                    const i = {
                        message: this.new_input.innerHTML.replaceAll("\n","<br>")
                                                        .replaceAll("<i>","_")
                                                        .replaceAll("</i>","_")
                                                        .replaceAll("<u>","__")
                                                        .replaceAll("</u>","__")
                                                        .replaceAll("<b>","**")
                                                        .replaceAll("</b>","**")
                                                        .replaceAll("&nbsp;"," ")
                                                        .replaceAll("&gt;",">")
                                                        .replaceAll("&lt;","<")
                                                        .trimLeft(" ")
                                                        .trimRight(" "),
                        user: {
                            id: this.props.ownUserId,
                            name: this.props.ownUser.full_name
                        },
                        conversation_id: this.props.conversation.id
                    };
                    this.props.replyMessage && (i.message_metadata = this.props.replyMessage),
                    B.log({
                        payload: e = i
                    }),
                    S.B.emit(E.Z.internalEvents.outgoingEvent, {
                        module: "Chat",
                        type: E.Z.outboundEvents.types.void,
                        name: E.Z.outboundEvents.eventNames.sendMessage,
                        constraint: E.Z.outboundEvents.constraints.includeSelf,
                        payload: e
                    }),
                    this.props.replyMessage && this.props.handleReply(null);
                    const s = this.setConvDraftValue();
                    try {
                        localStorage.setItem("chatDrafts", JSON.stringify(s))
                    } catch (n) {
                        console.log("Had an error saving chat draft in local storage. Error - " + n.message)
                    }
                    this.setState({
                        value: "",
                        rows: 1
                    })
                }
                var e
            }
            render() {
                const {replyMessage: t, disabled: e, autoFocus: n} = this.props;
                try{
                    let old_input = document.querySelector("textarea[class*=input_input]");
                    if(document.querySelectorAll("div[class*=input_input__]").length == 0){
                        console.log(old_input);
                        let new_input = document.createElement("div");
                        this.new_input = new_input;
                        new_input.setAttribute("rows","1")
                        new_input.setAttribute("contenteditable","true");
                        new_input.setAttribute("data-placeholder","Type your message...");
                        new_input.classList = old_input.classList;
                        new_input.style.width = "calc(100% - 35px)";
                        old_input.insertAdjacentElement("afterEnd",new_input);
                        old_input.style.display = "none";
                        new_input.addEventListener('keypress',(e) => {
                            if("Enter" === e.key && !e.shiftKey && new_input.innerHTML.trimRight("\n").trimRight(" ").length > 0){
                                e.preventDefault();
                                console.log(e);
                                old_input.value = new_input.innerHTML;
                                this.handleMessage();
                                new_input.innerHTML = "";
                            }
                        });

                        let emoji_list = ["🙂","😢","😉","😂","✨","❤️","👍","👏","🧐","😮","🎉","😊","🥂"];
                        let emoji_button_list = "";
                        for(let i = 0; i < emoji_list.length; i++){
                            emoji_button_list += `<button>${emoji_list[i]}</button>`;
                        }
                        let emoji_button = document.createElement("button");
                        emoji_button.id = "emoji_button";
                        emoji_button.innerHTML = `<span id="emoji_emoji">🙂</span><span id="popup">${emoji_button_list}</span>`;
                        new_input.insertAdjacentElement("afterend",emoji_button);
                        document.querySelector("#emoji_emoji").addEventListener('click',function(){
                            let popup = document.getElementById("popup");
                            popup.classList.toggle("show");
                        });
                        
                        let emojis = document.querySelectorAll("#popup button");
                        for(let i = 0; i < emojis.length; i++){
                            emojis[i].addEventListener("click",function(){
                                new_input.insertAdjacentText("beforeEnd",emojis[i].innerText);
                            })
                        }
                    }
                }
                catch(e){
                    console.error("ERROR ",e);
                }
                return (0,
                c.jsxs)("div", {
                    className: r()("input_chat-action-components__1pwBY"),
                    children: [(0,
                    c.jsxs)("div", {
                        className: r()("input_input-container__wRzbt"),
                        children: [t ? (0,
                        c.jsx)("div", {
                            className: "custom-reply-message-container " + r()("input_reply-message-container__2JECY"),
                            children: (0,
                            c.jsx)(ie, {
                                message: t,
                                reply: !0,
                                isInInput: !0,
                                onRemoveReplyClicked: this.onRemoveReplyClicked,
                                noStyle: !0,
                                isRecived: !0,
                                disableMenu: !0,
                                className: "custom-reply-message " + r()("input_reply-message__3atNe")
                            }, t.id)
                        }) : null, (0,
                        c.jsx)("textarea", {
                            ref: this.props.textareaRef,
                            rows: this.setInputRows(this.state.value.length),
                            value: this.state.value,
                            placeholder: this.props.t("typeYourMessage"),
                            "aria-label": "Send message field",
                            className: r()("input_input__-YZa3"),
                            style: {
                                height: this.state.textHeight
                            },
                            maxLength: 500,
                            disabled: e,
                            autoFocus: n,
                            onKeyPress: this.handleChange,
                            onKeyUp: this.handleKeyUp,
                            onChange: this.handleChange
                        })]
                    }), this.props.platformType === E.Z.platformTypes.MOBILE || this.props.platformType === E.Z.platformTypes.TABLET ? (0,
                    c.jsx)(se.Z, {
                        onClick: this.handleMessage
                    }) : null]
                })
            }
        }
        )
          , re = {
            ALL: "All",
            UNANSWERED: "Unanswered",
            ANSWERED: "Answered"
        };
        var ae = n("svWY");
        const pe = class extends i.Component {
            constructor(t) {
                super(t),
                this.state = {
                    currMessages: [],
                    scrollDown: !0,
                    isBottom: !0,
                    isTop: !0,
                    currentScrollHeight: 0
                },
                this.messages = i.createRef(),
                this.getMessages = this.getMessages.bind(this),
                this.shouldDisplayQnAReplyButtons = this.shouldDisplayQnAReplyButtons.bind(this),
                this.createMessagesDom = this.createMessagesDom.bind(this),
                this.handleReachBottom = this.handleReachBottom.bind(this),
                this.handleScrollUp = this.handleScrollUp.bind(this),
                this.handleScrollDown = this.handleScrollDown.bind(this),
                this.scrollToBottom = this.scrollToBottom.bind(this),
                this.handleReachTop = this.handleReachTop.bind(this),
                this.convertMarkup = this.convertMarkup.bind(this);
            }
            convertMarkup(string){
                console.log(string);
                let urlFix = "";
                if(string.search("http") != -1){
                    let split = string.split(" ")
                    for(let i = 0; i < split.length; i++){
                        if(split[i].search("http") != -1){
                            urlFix += " " + split[i].replaceAll("_","_||")
                                                    .replaceAll("*","*||");
                        }
                        else{
                            urlFix += " " + split[i];
                        }
                    }
                    string = urlFix;
                }
                string = string.replaceAll("message_message-content-link__","message_||message-content-link_||_||");
                let temp = 0;
                temp = string.match(/\*\*\*/g) || [];
                for(let i = 0; i < Math.floor(temp.length / 2); i++){
                    string = string.replace("***","<i><b>").replace("***","</b></i>");
                }
                string = string.replaceAll("***","*||*||*||");
                temp = string.match(/\*\*(?!\|\|)/g) || [];
                for(let i = 0; i < Math.floor(temp.length / 2); i++){
                    string = string.replace(/\*\*(?!\|\|)/,"<b>").replace(/\*\*(?!\|\|)/,"</b>");
                }
                string = string.replaceAll("**","*||*||");
                temp = string.match(/\*(?!\|\|)/g) || [];
                for(let i = 0; i < Math.floor(temp.length / 2); i++){
                    string = string.replace("*","<i>").replace("*","</i>");
                }
                temp = string.match(/___/g) || [];
                for(let i = 0; i < Math.floor(temp.length / 2); i++){
                    string = string.replace("___","<i><u>").replace("___","</u></i>");
                }
                string = string.replaceAll("___","_||_||_||");
                temp = string.match(/__(?!\|\|)/g) || [];
                for(let i = 0; i < Math.floor(temp.length / 2); i++){
                    string = string.replace(/__(?!\|\|)/,"<u>").replace(/__(?!\|\|)/,"</u>");
                }
                string = string.replaceAll("__","_||_||")
                temp = string.match(/_(?!\|\|)/g) || [];
                for(let i = 0; i < Math.floor(temp.length / 2); i++){
                    string = string.replace(/_(?!\|\|)/,"<i>").replace(/_(?!\|\|)/,"</i>");
                }
                temp = string.match(/~~/g) || [];
                for(let i = 0; i < Math.floor(temp.length / 2); i++){
                    string = string.replace("~~","<s>").replace("~~","</s>");
                }
                string = string.replaceAll("&lt;br&gt;","<br>")
                        .replaceAll("&lt;i&gt;","<i>")
                        .replaceAll("&lt;/i&gt;","</i>")
                        .replaceAll("&lt;b&gt;","<b>")
                        .replaceAll("&lt;/b&gt;","</b>")
                        .replaceAll("&lt;u&gt;","<u>")
                        .replaceAll("&lt;/u&gt;","</u>")
                        .replaceAll("&lt;s&gt;","<s>")
                        .replaceAll("&lt;/s&gt;","</s>")
                        .replaceAll("_||","_")
                        .replaceAll("*||","*")
                return string;
            }
            componentDidMount() {
                0 !== this.props.messages.length && this.scrollToBottom()
            }
            componentDidUpdate(t) {
                this.props.isNewMessage && this.props.messages.length > 0 && this.props.messages[this.props.messages.length - 1].user.id === this.props.ownUserId || this.state.scrollDown || t.conversationID !== this.props.conversationID ? this.scrollToBottom() : this.messages.current && this.messages.current._container && this.state.isTop && t.messages.length < this.props.messages.length && (this.messages.current._container.scrollTop = this.messages.current._container.scrollHeight - this.state.currentScrollHeight)
            }
            componentWillUpdate(t) {
                (t.isNewMessage && this.state.isBottom || 0 === this.props.messages.length && 0 !== t.messages.length) && this.setState({
                    scrollDown: !0
                }),
                t.messages.length > this.props.messages.length && !t.isNewMessage && t.conversationID === this.props.conversationID && this.setState({
                    currentScrollHeight: this.messages.current._container.scrollHeight
                }, (()=>{
                    this.messages.current && this.messages.current._container && (this.messages.current._container.scrollTop = this.messages.current._container.scrollHeight - this.state.currentScrollHeight)
                }
                ))
            }
            handleReachBottom() {
                this.state.isBottom || this.setState({
                    isBottom: !0
                })
            }
            handleReachTop() {
                0 === this.props.messages.length || this.state.isBottom || this.state.isTop || this.getMessages(),
                this.state.isTop || this.setState({
                    isTop: !0
                })
            }
            handleScrollUp(t) {
                this.state.isBottom && this.setState({
                    isBottom: !1
                }),
                this.state.isTop && t > 0 && this.setState({
                    isTop: !1
                })
            }
            handleScrollDown() {
                this.state.isTop && this.setState({
                    isTop: !1
                })
            }
            scrollToBottom() {
                this.messages.current && this.messages.current._container && (this.messages.current._container.scrollTop = this.messages.current._container.scrollHeight),
                this.props.resetIsNewMessage && this.props.resetIsNewMessage(),
                this.setState({
                    scrollDown: !1,
                    isBottom: !0
                })
            }
            timeDifferenceByDays(t, e) {
                return t.diff(e, "days")
            }
            timeDifferenceByMinutes(t, e) {
                return t.diff(e, "minutes")
            }
            getMessages() {
                this.props.loadMoreMessages && this.props.loadMoreMessages(this.props.messages.length > 0 ? this.props.messages[0].id : null)
            }
            shouldDisplayQnAReplyButtons(t) {
                return this.props.conversationType === E.Z.conversationTypes.qna && this.props.isModerator && !t.message_metadata
            }
            createMessagesDom() {
                let t = this.props.messages || [];
                const e = t.filter((t=>t.message_metadata)).map((t=>t.message_metadata.id));
                let changedMessages = document.querySelectorAll("div[class*=message_message]:last-child [class*=message_message-content]");
                for(let i  = 0; i < changedMessages.length; i++){
                    try{
                        let changedMessage = changedMessages[i];
                        changedMessage.innerHTML = this.convertMarkup(changedMessage.innerHTML);
                    }
                    catch(e){
                        console.log("Error ",e);
                    }
                }
                return this.props.filterType === re.UNANSWERED ? t = t.filter((t=>!t.message_metadata && !e.includes(t.id))) : this.props.filterType === re.ANSWERED && (t = t.filter((t=>null !== t.message_metadata))),
                t.reduce(((t,n,i,s)=>{
                    const o = i > 0 && s[i - 1].user.id === n.user.id && this.timeDifferenceByMinutes(n.time, s[i - 1].time) < 1
                      , r = i > 0 && s[i - 1];
                    return r && n.time && !n.time.isSame(r.time, "day") && t.push((0,
                    c.jsx)(ne, {
                        date: n.time.format("DD MMM YYYY")
                    }, n.timestamp)),
                    t.push((0,
                    c.jsx)(ie, {
                        message: n,
                        disableMenu: this.props.disableMessageDropdown,
                        isRecived: this.props.ownUserId !== n.user.id || this.props.conversationType === E.Z.conversationTypes.qna,
                        showQnAReplyButtons: this.shouldDisplayQnAReplyButtons(n),
                        continuedMessage: o,
                        onReplyClicked: this.props.handleReply,
                        shouldStretch: this.props.conversationType === E.Z.conversationTypes.qna,
                        fontScale: this.props.fontSize,
                        wasAnswered: e.includes(n.id)
                    }, n.id)),
                    t
                }
                ), [])
            }
            render() {
                const t = this.props.messages || []
                  , e = this.createMessagesDom()
                  , {isLoading: n} = this.props;
                return (0,
                c.jsxs)("div", {
                    className: "messages-list_messages-container__JGvIR",
                    children: [(0,
                    c.jsxs)(Y(), {
                        id: "messages-perfect-scrollbar",
                        className: r()("messages-list_messages-container__JGvIR", {
                            "messages-list_scrollable__vNOr1": !0
                        }, "scrollbar-container"),
                        ref: this.messages,
                        onYReachStart: (0,
                        ae.debounce)(this.handleReachTop, 250),
                        onYReachEnd: this.handleReachBottom,
                        onScrollUp: t=>this.handleScrollUp(t.scrollTop),
                        onScrollDown: this.handleScrollDown,
                        children: [n && 0 === t.length && (0,
                        c.jsx)("div", {
                            className: "messages-list_company-loader-container__3ZZWY",
                            children: (0,
                            c.jsx)("img", {
                                className: "messages-list_company-loader__6XvwX",
                                src: "data:image/gif;base64,R0lGODlh/AD8AJECAP///wCih////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYjkyMTgxOS1lNDExLTQ5NWYtYTcwMi05NWUzNTM4ZmVhYzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzA5QkE2Qzc0NTYwMTFFOEE4OTZCQzIwQUI4QTYxQUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzA5QkE2QzY0NTYwMTFFOEE4OTZCQzIwQUI4QTYxQUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2Q2MDAzNzUtMGQxZi00YzBjLWFhYWQtMDI2YThjNTkwOWJjIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmZiOTIxODE5LWU0MTEtNDk1Zi1hNzAyLTk1ZTM1MzhmZWFjMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUAAAIALAAAAAD8APwAAAL/jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNoBw7evwIMqTIkSRLmjy5CYDKlSxbugSg7qXMlzFn2lRZ8+bMnDpppuu58ydQn+iGEj1n1CXPpDCFMsXp9OnSpFONVh16FWjWnlt1dr351WbYoEWfQi1rdqxMtUfNmT2L9C1bpVGZzm15l2XelXvhupWLMrDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NpAAAIfkEBQAAAgAsRwCpABYAIgAAAhqEj6nL7Q+jnLTai7PevPsPhuJIluaJpupSAAAh+QQFAAACACxdAKkAFgAiAAACGoSPqcvtD6OctNqLs968+w+G4kiW5omm6lIAACH5BAUAAAIALHMAqQAWACIAAAIahI+py+0Po5y02ouz3rz7D4biSJbmiabqUgAAIfkEBQAAAgAsiQCpABYAIgAAAhqEj6nL7Q+jnLTai7PevPsPhuJIluaJpupSAAAh+QQFAAACACyfAKkAFgAiAAACGoSPqcvtD6OctNqLs968+w+G4kiW5omm6lIAACH5BAUAAAIALLUAqQAWACIAAAIahI+py+0Po5y02ouz3rz7D4biSJbmiabqUgAAIfkEBQAAAgAsMQCpABYAIgAAAhqMj6nL7Q+jnLTai7PevPsPhuJIluaJpupSAAAh+QQFAAACACxHAKkAFgAiAAACGoyPqcvtD6OctNqLs968+w+G4kiW5omm6lIAACH5BAUAAAIALF0AqQAWACIAAAIajI+py+0Po5y02ouz3rz7D4biSJbmiabqUgAAIfkEBQAAAgAscwCpABYAIgAAAhqMj6nL7Q+jnLTai7PevPsPhuJIluaJpupSAAAh+QQFAAACACyJAKkAFgAiAAACGoyPqcvtD6OctNqLs968+w+G4kiW5omm6lIAACH5BAUAAAIALJ8AqQAWACIAAAIajI+py+0Po5y02ouz3rz7D4biSJbmiabqUgAAIfkEBQAAAgAsnwCpABYAIgAAAhqEj6nL7Q+jnLTai7PevPsPhuJIluaJpupSAAAh+QQFAAACACyJAKkAFgAiAAACGoSPqcvtD6OctNqLs968+w+G4kiW5omm6lIAACH5BAUAAAIALHMAqQAWACIAAAIahI+py+0Po5y02ouz3rz7D4biSJbmiabqUgAAIfkEBQAAAgAsXQCpABYAIgAAAhqEj6nL7Q+jnLTai7PevPsPhuJIluaJpupSAAAh+QQFAAACACxHAKkAFgAiAAACGoSPqcvtD6OctNqLs968+w+G4kiW5omm6lIAACH5BAUAAAIALDEAqQAWACIAAAIahI+py+0Po5y02ouz3rz7D4biSJbmiabqUgAAIfkEBQAAAgAstQCpABYAIgAAAhqMj6nL7Q+jnLTai7PevPsPhuJIluaJpupSAAAh+QQFAAACACyfAKkAFgAiAAACGoyPqcvtD6OctNqLs968+w+G4kiW5omm6lIAACH5BAUAAAIALIkAqQAWACIAAAIajI+py+0Po5y02ouz3rz7D4biSJbmiabqUgAAIfkEBQAAAgAscwCpABYAIgAAAhqMj6nL7Q+jnLTai7PevPsPhuJIluaJpupSAAAh+QQFAAACACxdAKkAFgAiAAACGoyPqcvtD6OctNqLs968+w+G4kiW5omm6lIAADs=",
                                alt: "Loader"
                            })
                        }), e && (0,
                        c.jsx)("div", {
                            className: r()("messages-list_messages__1eS79"),
                            tabIndex: 0,
                            children: e.map((t=>t))
                        })]
                    }), this.props.isNewMessage && !this.state.isBottom ? (0,
                    c.jsx)("div", {
                        className: r()("messages-list_scroll-down-container__3s61a"),
                        children: (0,
                        c.jsx)("button", {
                            onClick: this.scrollToBottom,
                            className: r()("messages-list_scroll-down__3zNUV")
                        })
                    }) : null]
                })
            }
        }
        ;
        var ce = n("L6BW");
        const le = (0,
        b.P1)([t=>t.user_id], (t=>t))
          , de = (0,
        s.$j)((function(t) {
            const {participants: e, settings: n} = t
              , i = e.list ? e.list : {}
              , s = le(n.ownData);
            return {
                isModerator: (0,
                ct.S_)(i, s),
                currConv: (0,
                U.mA)(t.chat.conversations),
                fontSize: (0,
                U.tb)(t),
                messages: (0,
                U.QH)(t),
                isLoading: (0,
                U.L4)(t),
                isNewMessage: (0,
                U.sH)(t)
            }
        }
        ), (t=>({
            startLoadingMessages: ()=>t({
                type: "START_LOADING_MESSAGES",
                payload: {}
            }),
            resetIsNewMessage: ()=>t({
                type: "RESET_NEW_MESSAGE",
                payload: {}
            }),
            finishLoadingMessages: ()=>t({
                type: "FINISH_LOADING_MESSAGES",
                payload: {}
            })
        })))(class extends i.Component {
            constructor(t) {
                super(t),
                this.state = {},
                this.loadMessages = this.loadMessages.bind(this)
            }
            loadMessages(t=new Date) {
                this.props.isLoading || (this.props.startLoadingMessages(),
                I({
                    from_date: t,
                    load_type: 0 === this.props.messages.length ? "INITIAL_LOAD" : "PARTIAL_LOAD",
                    conversation_id: this.props.currConv.id
                }))
            }
            render() {
                const {isLoading: t, isNewMessage: e} = this.props;
                return (0,
                c.jsx)(pe, {
                    disableMessageDropdown: this.props.disableMessageDropdown,
                    conversationType: this.props.currConv ? this.props.currConv.conversation_type : E.Z.conversationTypes.private,
                    isModerator: this.props.isModerator,
                    handleReply: this.props.handleReply,
                    filterType: this.props.filterType,
                    fontSize: this.props.fontSize,
                    messages: this.props.messages,
                    ownUserId: this.props.ownUserId,
                    loadMoreMessages: this.loadMessages,
                    isLoading: t,
                    isNewMessage: e,
                    conversationID: this.props.currConv.id,
                    resetIsNewMessage: this.props.resetIsNewMessage
                })
            }
        }
        );
        var he = n("S1x0");
        const Ae = (0,
        te.Z)()((({chat: t, handleOnClick: e, avatar: n, customClassName: i, isUserAvatar: s, t: o, i18n: a})=>{
            const p = {
                "data-tip": t.name,
                "data-for": "chat-notification-item-tooltip-" + t.id
            }
              , h = n
              , A = (0,
            c.jsx)(l, {
                avatar: n,
                size: 23,
                conversationType: t.name
            })
              , u = "object" == typeof n ? n : A
              , g = "string" != typeof n ? (0,
            c.jsx)(h, {
                className: i
            }) : A;
            return (0,
            c.jsxs)("div", Object.assign({}, p, {
                tabIndex: 0,
                role: "button",
                className: r()("notifications-bar-item_notifications-bar-item__lmYv5"),
                onClick: ()=>e(t),
                onKeyDown: n=>m.Z.emulateButtonKeydown(n, e.bind(null, t)),
                "aria-label": a.exists(t.conversation_type) ? o(t.conversation_type) : t.name,
                children: [(0,
                c.jsxs)("div", {
                    className: r()("notifications-bar-item_avatar-wrapper__b2mxB"),
                    children: [s ? u : g, (0,
                    c.jsx)("div", {
                        className: r()("notifications-bar-item_badge__T53Hu"),
                        children: (0,
                        c.jsx)(d, {
                            count: t.unreadMessages
                        })
                    })]
                }), (0,
                c.jsx)(he.Z, {
                    id: "chat-notification-item-tooltip-" + t.id,
                    type: "dark",
                    place: "bottom",
                    effect: "solid",
                    children: a.exists(t.conversation_type) ? o(t.conversation_type) : t.name
                })]
            }))
        }
        ));
        var ue, me;
        function ge() {
            return (ge = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var Ce, fe, be = i.forwardRef((function(t, e) {
            var n = t.title
              , s = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return i.createElement("svg", ge({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 68.7 68.7",
                style: {
                    enableBackground: "new 0 0 68.7 68.7"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": s
            }, o), n ? i.createElement("title", {
                id: s
            }, n) : null, ue || (ue = i.createElement("g", {
                id: "_x33_r6LBk.tif"
            })), me || (me = i.createElement("g", {
                id: "_x33_r6LBk.tif_1_"
            })), i.createElement("path", {
                id: "moderator.png",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#158079"
                },
                d: "M34.5,0.8C15.9,0.8,0.9,15.9,0.9,34.4 C0.9,53,16,68,34.5,68s33.6-15.1,33.6-33.6C68.1,15.9,53.1,0.8,34.5,0.8L34.5,0.8z"
            }), i.createElement("path", {
                id: "moderator.png_1_",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#FFFFFF"
                },
                d: "M44,48.8l-9.5-5.7L25,48.8l2.5-10.6 L19.1,31l11-1l4.4-10.1L38.9,30l11,1l-8.4,7.2L44,48.8z"
            }))
        }
        ));
        function ve() {
            return (ve = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var we, ye, xe = i.forwardRef((function(t, e) {
            var n = t.title
              , s = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return i.createElement("svg", ve({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 68.7 68.7",
                style: {
                    enableBackground: "new 0 0 68.7 68.7"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": s
            }, o), n ? i.createElement("title", {
                id: s
            }, n) : null, Ce || (Ce = i.createElement("g", {
                id: "_x33_r6LBk.tif"
            })), fe || (fe = i.createElement("g", {
                id: "_x33_r6LBk.tif_1_"
            })), i.createElement("path", {
                id: "Shape_3781_copy_2",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#158079"
                },
                d: "M34.5,0.8c18.6,0,33.6,15,33.6,33.6 S53.1,68,34.5,68S1,53,1,34.4S16.1,0.8,34.5,0.8L34.5,0.8z"
            }), i.createElement("path", {
                id: "Shape_3781_copy_2_1_",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#FFFFFF"
                },
                d: "M36.8,48.7c-0.8,0.7-1.8,1-2.8,1l0,0 c-1,0-2-0.3-2.7-1s-1.1-1.6-1.1-2.6s0.4-1.9,1.1-2.6c0.8-0.7,1.7-1,2.7-0.9c1-0.1,2,0.3,2.8,0.9c0.7,0.7,1.1,1.6,1.1,2.6 C37.9,47.1,37.5,48.1,36.8,48.7z M43.3,30.9c-0.3,0.9-0.8,1.6-1.4,2.4c-0.6,0.6-1.2,1.2-1.8,1.7c-0.6,0.4-1.1,0.9-1.7,1.4 c-0.5,0.5-0.9,1-1.2,1.7s-0.5,1.5-0.5,2.3V41H31l-0.1-0.6c0-0.5-0.1-0.9-0.1-1.3c0-0.8,0.1-1.5,0.3-2.3c0.2-0.9,0.6-1.8,1.2-2.6 c0.5-0.7,1-1.3,1.7-1.9c0.6-0.5,1.1-1,1.6-1.4s0.8-0.8,1.2-1.3c0.3-0.4,0.4-0.9,0.4-1.4c0-0.6-0.2-1.2-0.6-1.7 c-0.6-0.5-1.5-0.7-2.3-0.6c-0.4,0-0.8,0-1.2,0.1s-0.9,0.2-1.3,0.4c-0.4,0.2-0.9,0.3-1.3,0.5s-0.7,0.4-1.1,0.6l-0.6,0.4l-2.6-4.8 l0.5-0.3c1.1-0.7,2.3-1.3,3.6-1.7c1.6-0.5,3.3-0.7,4.9-0.7c2.2-0.1,4.4,0.5,6.2,1.9c1.5,1.3,2.4,3.2,2.3,5.1 C43.9,28.6,43.7,29.8,43.3,30.9L43.3,30.9z"
            }))
        }
        ));
        function _e() {
            return (_e = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var ke, Se, Ee, Be, Ie, Oe, Ne = i.forwardRef((function(t, e) {
            var n = t.title
              , s = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return i.createElement("svg", _e({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 68.7 68.7",
                style: {
                    enableBackground: "new 0 0 68.7 68.7"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": s
            }, o), n ? i.createElement("title", {
                id: s
            }, n) : null, we || (we = i.createElement("g", {
                id: "_x33_r6LBk.tif"
            })), ye || (ye = i.createElement("g", {
                id: "_x33_r6LBk.tif_1_"
            })), i.createElement("path", {
                id: "Rectangle_1_copy_8",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#158079"
                },
                d: "M34.3,0.7c18.6,0,33.6,15,33.6,33.6 s-15,33.6-33.6,33.6S0.7,52.9,0.7,34.3S15.8,0.7,34.3,0.7L34.3,0.7z"
            }), i.createElement("path", {
                id: "Rectangle_1_copy_8_1_",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#FFFFFF"
                },
                d: "M40.9,23.9H26.3 c-1.7,0-3.6,1.3-3.6,2.9v14.6c0,1.5,2,2.9,3.6,2.9h14.6c1.6,0,2.9-1.2,3-2.8v-2.8c0-1.3,6-4.6,6-4.6c0,0.2-6-3.9-6-5.5v-1.8 C43.8,25.1,42.5,23.9,40.9,23.9z"
            }), i.createElement("path", {
                id: "Rectangle_1_copy_8_2_",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#288079"
                },
                d: "M26,26.7h14.6v2.9H26V26.7z  M26,32.6h14.6v2.9H26V32.6z M26,38.4h7.3v2.9H26V38.4z"
            }))
        }
        ));
        function De() {
            return (De = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function Me() {
            return (Me = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function Pe() {
            return (Pe = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        const je = {
            [E.Z.conversationTypes.moderators]: {
                fill: i.forwardRef((function(t, e) {
                    var n = t.title
                      , s = t.titleId
                      , o = function(t, e) {
                        if (null == t)
                            return {};
                        var n, i, s = function(t, e) {
                            if (null == t)
                                return {};
                            var n, i, s = {}, o = Object.keys(t);
                            for (i = 0; i < o.length; i++)
                                e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                            return s
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(t);
                            for (i = 0; i < o.length; i++)
                                e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                        }
                        return s
                    }(t, ["title", "titleId"]);
                    return i.createElement("svg", De({
                        id: "Layer_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 68.7 68.7",
                        style: {
                            enableBackground: "new 0 0 68.7 68.7"
                        },
                        xmlSpace: "preserve",
                        ref: e,
                        "aria-labelledby": s
                    }, o), n ? i.createElement("title", {
                        id: s
                    }, n) : null, ke || (ke = i.createElement("g", {
                        id: "_x33_r6LBk.tif"
                    })), Se || (Se = i.createElement("g", {
                        id: "_x33_r6LBk.tif_1_"
                    })), i.createElement("path", {
                        id: "moderator.png",
                        style: {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#1B2F39"
                        },
                        d: "M34.5,0.8C15.9,0.8,0.9,15.9,0.9,34.4 C0.9,53,16,68,34.5,68s33.6-15.1,33.6-33.6C68.1,15.9,53.1,0.8,34.5,0.8L34.5,0.8z"
                    }), i.createElement("path", {
                        id: "moderator.png_1_",
                        style: {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#FFFFFF"
                        },
                        d: "M44,48.8l-9.5-5.7L25,48.8l2.5-10.6 L19.1,31l11-1l4.4-10.1L38.9,30l11,1l-8.4,7.2L44,48.8z"
                    }))
                }
                )),
                noFill: be,
                custom: J
            },
            [E.Z.conversationTypes.public]: {
                fill: i.forwardRef((function(t, e) {
                    var n = t.title
                      , s = t.titleId
                      , o = function(t, e) {
                        if (null == t)
                            return {};
                        var n, i, s = function(t, e) {
                            if (null == t)
                                return {};
                            var n, i, s = {}, o = Object.keys(t);
                            for (i = 0; i < o.length; i++)
                                e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                            return s
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(t);
                            for (i = 0; i < o.length; i++)
                                e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                        }
                        return s
                    }(t, ["title", "titleId"]);
                    return i.createElement("svg", Me({
                        id: "Layer_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 68.7 68.7",
                        style: {
                            enableBackground: "new 0 0 68.7 68.7"
                        },
                        xmlSpace: "preserve",
                        ref: e,
                        "aria-labelledby": s
                    }, o), n ? i.createElement("title", {
                        id: s
                    }, n) : null, Ee || (Ee = i.createElement("g", {
                        id: "_x33_r6LBk.tif"
                    })), Be || (Be = i.createElement("g", {
                        id: "_x33_r6LBk.tif_1_"
                    })), i.createElement("path", {
                        id: "Rectangle_1_copy_8",
                        style: {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#1B2F39"
                        },
                        d: "M34.3,0.7c18.6,0,33.6,15,33.6,33.6 s-15,33.6-33.6,33.6S0.7,52.9,0.7,34.3S15.8,0.7,34.3,0.7L34.3,0.7z"
                    }), i.createElement("path", {
                        id: "Rectangle_1_copy_8_1_",
                        style: {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#FFFFFF"
                        },
                        d: "M40.9,23.9H26.3 c-1.7,0-3.6,1.3-3.6,2.9v14.6c0,1.5,2,2.9,3.6,2.9h14.6c1.6,0,2.9-1.2,3-2.8v-2.8c0-1.3,6-4.6,6-4.6c0,0.2-6-3.9-6-5.5v-1.8 C43.8,25.1,42.5,23.9,40.9,23.9z"
                    }), i.createElement("path", {
                        id: "Rectangle_1_copy_8_2_",
                        style: {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#1B2F39"
                        },
                        d: "M26,26.7h14.6v2.9H26V26.7z  M26,32.6h14.6v2.9H26V32.6z M26,38.4h7.3v2.9H26V38.4z"
                    }))
                }
                )),
                noFill: Ne,
                custom: nt
            },
            [E.Z.conversationTypes.qna]: {
                fill: i.forwardRef((function(t, e) {
                    var n = t.title
                      , s = t.titleId
                      , o = function(t, e) {
                        if (null == t)
                            return {};
                        var n, i, s = function(t, e) {
                            if (null == t)
                                return {};
                            var n, i, s = {}, o = Object.keys(t);
                            for (i = 0; i < o.length; i++)
                                e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                            return s
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(t);
                            for (i = 0; i < o.length; i++)
                                e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                        }
                        return s
                    }(t, ["title", "titleId"]);
                    return i.createElement("svg", Pe({
                        id: "Layer_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 68.7 68.7",
                        style: {
                            enableBackground: "new 0 0 68.7 68.7"
                        },
                        xmlSpace: "preserve",
                        ref: e,
                        "aria-labelledby": s
                    }, o), n ? i.createElement("title", {
                        id: s
                    }, n) : null, Ie || (Ie = i.createElement("g", {
                        id: "_x33_r6LBk.tif"
                    })), Oe || (Oe = i.createElement("g", {
                        id: "_x33_r6LBk.tif_1_"
                    })), i.createElement("path", {
                        id: "Shape_3781_copy_2",
                        style: {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#1B2F39"
                        },
                        d: "M34.5,0.8c18.6,0,33.6,15,33.6,33.6 S53.1,68,34.5,68S1,53,1,34.4S16.1,0.8,34.5,0.8L34.5,0.8z"
                    }), i.createElement("path", {
                        id: "Shape_3781_copy_2_1_",
                        style: {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#FFFFFF"
                        },
                        d: "M36.8,48.7c-0.8,0.7-1.8,1-2.8,1l0,0 c-1,0-2-0.3-2.7-1s-1.1-1.6-1.1-2.6s0.4-1.9,1.1-2.6c0.8-0.7,1.7-1,2.7-0.9c1-0.1,2,0.3,2.8,0.9c0.7,0.7,1.1,1.6,1.1,2.6 C37.9,47.1,37.5,48.1,36.8,48.7z M43.3,30.9c-0.3,0.9-0.8,1.6-1.4,2.4c-0.6,0.6-1.2,1.2-1.8,1.7c-0.6,0.4-1.1,0.9-1.7,1.4 c-0.5,0.5-0.9,1-1.2,1.7s-0.5,1.5-0.5,2.3V41H31l-0.1-0.6c0-0.5-0.1-0.9-0.1-1.3c0-0.8,0.1-1.5,0.3-2.3c0.2-0.9,0.6-1.8,1.2-2.6 c0.5-0.7,1-1.3,1.7-1.9c0.6-0.5,1.1-1,1.6-1.4s0.8-0.8,1.2-1.3c0.3-0.4,0.4-0.9,0.4-1.4c0-0.6-0.2-1.2-0.6-1.7 c-0.6-0.5-1.5-0.7-2.3-0.6c-0.4,0-0.8,0-1.2,0.1s-0.9,0.2-1.3,0.4c-0.4,0.2-0.9,0.3-1.3,0.5s-0.7,0.4-1.1,0.6l-0.6,0.4l-2.6-4.8 l0.5-0.3c1.1-0.7,2.3-1.3,3.6-1.7c1.6-0.5,3.3-0.7,4.9-0.7c2.2-0.1,4.4,0.5,6.2,1.9c1.5,1.3,2.4,3.2,2.3,5.1 C43.9,28.6,43.7,29.8,43.3,30.9L43.3,30.9z"
                    }))
                }
                )),
                noFill: xe,
                custom: st
            }
        }
          , Re = i.memo((({chats: t, currentConv: e, handleChangingConversation: n, cdn: i, isRoomThemeConf: s, ownId: o})=>(0,
        c.jsx)("div", {
            className: r()("notifications-bar_notifications-bar__2Cu0y"),
            children: t && t.map((t=>{
                const r = t.users && Object.keys(t.users).filter((t=>"" + t != "" + o))[0]
                  , a = (0,
                p.bN)(i, t.avatar);
                let l = s ? e.id === t.id ? "custom-chat-notification-icon custom-chat-notification-icon-active" : "custom-chat-notification-icon" : "";
                return l += e.id === t.id ? " chat-icon-active" : " chat-icon",
                (0,
                c.jsx)(Ae, {
                    chat: t,
                    avatar: t.conversation_type === E.Z.conversationTypes.private ? a || (0,
                    c.jsx)(w, {
                        userId: r,
                        className: "notifications-bar_notification-bar-user-avatar__92exZ"
                    }) : s ? je[t.conversation_type] && je[t.conversation_type].custom : e.id === t.id ? je[t.conversation_type] && je[t.conversation_type].noFill : je[t.conversation_type] && je[t.conversation_type].fill,
                    isUserAvatar: t.conversation_type === E.Z.conversationTypes.private,
                    customClassName: l,
                    handleOnClick: n
                }, t.id)
            }
            ))
        })))
          , Te = (0,
        b.P1)([t=>t], (t=>t && t.substring(0, t.length - 1)))
          , Le = (0,
        b.P1)([t=>t], (t=>t && t.general && t.general.theme === E.Z.roomTheme.CONF))
          , Ze = (0,
        s.$j)((function(t) {
            const e = Le(t.settings.generalSettings);
            return {
                chats: (0,
                U.zj)(t),
                cdn: Te(t.settings.roomMetadata.files_url),
                currConv: (0,
                U.mA)(t.chat.conversations),
                ownId: (0,
                U.I5)(t),
                isRoomThemeConf: e
            }
        }
        ))(class extends i.Component {
            constructor(t) {
                super(t),
                this.changeCurrConversation = this.changeCurrConversation.bind(this)
            }
            changeCurrConversation(t) {
                this.props.changeCurrConversation && this.props.changeCurrConversation(t)
            }
            render() {
                return (0,
                c.jsx)(Re, {
                    chats: this.props.chats,
                    currentConv: this.props.currConv,
                    handleChangingConversation: this.changeCurrConversation,
                    cdn: this.props.cdn,
                    isRoomThemeConf: this.props.isRoomThemeConf,
                    ownId: this.props.ownId
                })
            }
        }
        );
        var $e = n("v2iy");
        const Ue = (0,
        b.wN)(b.PW, ae.isEqual)
          , Ve = (0,
        b.P1)([t=>t.general.nr1_alignment_in_nr2], (t=>t === E.Z.permissionValues.ON))
          , Fe = (0,
        b.P1)([t=>t.chat_module, (t,e)=>e, (t,e,n)=>n], ((t,e,n)=>{
            const i = n && n.user_permissions && n.user_permissions.chat_module && n.user_permissions.chat_module.start_private_chat;
            return !(!t || !t.default_settings) && !(!e && i && i === E.Z.permissionValues.OFF) && (!(e || !i || i !== E.Z.permissionValues.ON) || (!i || i === E.Z.permissionValues.UNSET) && (t.default_settings.start_private_chat === E.Z.permissionValues.ONLY_MODERATORS && e || t.default_settings.start_private_chat === E.Z.permissionValues.ON))
        }
        ))
          , ze = (0,
        b.P1)([t=>t.user_id], (t=>t))
          , He = Ue([function(t) {
            return Object.keys(t.list).map((e=>t.list[e])).map((t=>t.user_id))
        }
        ], (t=>t))
          , Ge = (0,
        $e.compose)((0,
        te.Z)(), (0,
        s.$j)((t=>{
            const {participants: e, settings: n} = t
              , i = e.list ? e.list : {}
              , s = ze(n.ownData)
              , o = (0,
            ct.S_)(i, s)
              , r = i[s];
            return {
                participants: He(e),
                hideNewFeatures: Ve(n.generalSettings),
                hasPrivateChatPermission: Fe(n.generalSettings, o, r)
            }
        }
        )))(class extends i.Component {
            constructor(t) {
                super(t),
                this.state = {
                    hideStartDM: !1,
                    showQnAReplyButtons: !1
                },
                this.handleDelete = this.handleDelete.bind(this),
                this.handleReply = this.handleReply.bind(this),
                this.handlePrivateChat = this.handlePrivateChat.bind(this),
                this.onShow = this.onShow.bind(this),
                this.handleReplyAll = this.handleReplyAll.bind(this)
            }
            handleReply(t, e) {
                this.props.handleReply && this.props.handleReply(e.message)
            }
            handleDelete(t, e) {
                this.props.handleDelete && this.props.handleDelete(e.message)
            }
            handleReplyAll(t, e) {
                "function" == typeof this.props.handleReply && this.props.handleReply(Object.assign({}, e.message, {
                    reply_all: !0
                }))
            }
            handlePrivateChat(t, e) {
                this.props.changeCurrConversation && O({
                    target_user_id: e.message.user.id
                })
            }
            onShow(t) {
                t && t.detail && t.detail.data && t.detail.data.message && t.detail.data.message.user && (!this.props.participants.includes(t.detail.data.message.user.id) || this.props.ownUserId === t.detail.data.message.user.id) ? this.setState({
                    hideStartDM: !0
                }) : this.setState({
                    hideStartDM: !1
                }),
                this.setState(t.detail && t.detail.data && t.detail.data.showReplyInContext ? {
                    showQnAReplyButtons: !0
                } : {
                    showQnAReplyButtons: !1
                })
            }
            render() {
                return (0,
                c.jsxs)(Ht, {
                    id: "message-menu",
                    className: r()("context-menu_context-menu__7otmS"),
                    onShow: this.onShow,
                    children: [(this.props.allowReply || this.state.showQnAReplyButtons) && (0,
                    c.jsx)(Pt, {
                        onClick: this.handleReply,
                        attributes: {
                            className: r()("context-menu_context-menu-item__3STz2")
                        },
                        children: this.props.t("reply")
                    }), this.state.showQnAReplyButtons && (0,
                    c.jsx)(Pt, {
                        onClick: this.handleReplyAll,
                        attributes: {
                            className: r()("context-menu_context-menu-item__3STz2")
                        },
                        children: this.props.t("replyAll")
                    }), this.props.hasPrivateChatPermission && !this.props.hideNewFeatures && !this.state.hideStartDM && (0,
                    c.jsx)(Pt, {
                        onClick: this.handlePrivateChat,
                        attributes: {
                            className: r()("context-menu_context-menu-item__3STz2", {
                                "context-menu_not-moderator__2vO85": !this.props.hasPrivateChatPermission
                            })
                        },
                        children: this.props.t("startPrivateChat")
                    }), this.props.isModarator && (0,
                    c.jsx)(Pt, {
                        onClick: this.handleDelete,
                        attributes: {
                            className: r()("context-menu_context-menu-item__3STz2", {
                                "context-menu_not-moderator__2vO85": !this.props.isModarator
                            })
                        },
                        children: this.props.t("delete")
                    })]
                })
            }
        }
        );
        n("AkLc");
        const We = i.memo((({title: t, onClick: e})=>(0,
        c.jsx)("li", {
            className: "filter-dropdown-item",
            tabIndex: 0,
            "data-text": t,
            "aria-label": t,
            onKeyDown: t=>m.Z.emulateButtonKeydown(t, e),
            onClick: e,
            children: t
        })))
          , Ye = (0,
        te.Z)()(class extends i.PureComponent {
            constructor() {
                super()
            }
            componentDidMount() {
                this.props.shouldCloseOnOutsideClick && setTimeout((()=>{
                    document.addEventListener("click", this.props.toggleDropdown)
                }
                ))
            }
            componentWillUnmount() {
                this.props.shouldCloseOnOutsideClick && document.removeEventListener("click", this.props.toggleDropdown)
            }
            render() {
                const {items: t, onDropDownItemClick: e} = this.props;
                return (0,
                c.jsx)("ul", {
                    className: "chat-filter-bar-dropdown",
                    children: t && t.map((t=>(0,
                    c.jsx)(We, {
                        title: this.props.i18n.exists(t) ? this.props.t(t) : t,
                        onClick: ()=>e(t)
                    }, t)))
                })
            }
        }
        );
        var qe, Ke;
        function Qe() {
            return (Qe = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var Je = i.forwardRef((function(t, e) {
            var n = t.title
              , s = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return i.createElement("svg", Qe({
                xmlns: "http://www.w3.org/2000/svg",
                width: 10,
                height: 10.25,
                viewBox: "0 0 10 10.25",
                ref: e,
                "aria-labelledby": s
            }, o), n ? i.createElement("title", {
                id: s
            }, n) : null, qe || (qe = i.createElement("defs", null, i.createElement("style", null, ".a{fill:#101b21;}"))), Ke || (Ke = i.createElement("path", {
                className: "a",
                d: "M9.569,0H.43A.429.429,0,0,0,.047.233.435.435,0,0,0,.081.686L3.429,5.4l0,0a.956.956,0,0,1,.188.568V9.82a.427.427,0,0,0,.427.43.441.441,0,0,0,.169-.034L6.1,9.5a.408.408,0,0,0,.28-.4V5.975a.957.957,0,0,1,.188-.568l0,0L9.917.686A.435.435,0,0,0,9.951.233.429.429,0,0,0,9.569,0Zm0,0",
                transform: "translate(0.001 0)"
            })))
        }
        ));
        const Xe = (0,
        te.Z)()((({selectedFilter: t, isActive: e, onDropDownClick: n, t: i, i18n: s})=>(0,
        c.jsxs)("div", {
            tabIndex: 0,
            "aria-label": "Open chat filter",
            className: "chat-filter-bar " + (e ? "active" : ""),
            onClick: n,
            children: [(0,
            c.jsxs)("p", {
                className: "title",
                children: [s.exists(t) ? i(t) : t, " ", i("Questions")]
            }), (0,
            c.jsx)("div", {
                className: "dropdown-container",
                children: (0,
                c.jsx)(Je, {})
            })]
        })))
          , tn = class extends i.Component {
            constructor(t) {
                super(t),
                this.state = {
                    isActive: !1,
                    dropDownItems: this.props.items,
                    selectedItem: this.props.initialItem
                },
                this.toggleDropdown = this.toggleDropdown.bind(this),
                this.onItemSelected = this.onItemSelected.bind(this)
            }
            onItemSelected(t) {
                this.props.onItemSelected && this.props.onItemSelected(t),
                this.setState({
                    selectedItem: t
                }),
                this.toggleDropdown()
            }
            toggleDropdown() {
                this.setState({
                    isActive: !this.state.isActive
                })
            }
            handleButtonKeyDown(t) {
                "Escape" === t.key ? this.setState({
                    isActive: !1
                }) : m.Z.emulateButtonKeydown(t, this.toggleDropdown)
            }
            render() {
                return (0,
                c.jsx)("div", {
                    className: "chat-filter-bar-container",
                    onKeyDown: this.handleButtonKeyDown.bind(this),
                    onClick: this.toggleDropdown,
                    children: (0,
                    c.jsxs)("div", {
                        className: "filter-bar-holder",
                        children: [(0,
                        c.jsx)(Xe, {
                            selectedFilter: this.state.selectedItem,
                            isActive: this.state.isActive
                        }), this.state.isActive && (0,
                        c.jsx)(Ye, {
                            shouldCloseOnOutsideClick: !0,
                            toggleDropdown: this.toggleDropdown,
                            items: this.state.dropDownItems,
                            onDropDownItemClick: this.onItemSelected
                        })]
                    })
                })
            }
        }
        ;
        var en = n("OuN6");
        const nn = (0,
        b.P1)([t=>t], (t=>t && t.accessTochat))
          , sn = (0,
        b.P1)([t=>!!(t && t.chat_module && t.chat_module.default_settings && t.chat_module.default_settings.terms) && t.chat_module.default_settings.terms === E.Z.permissionValues.ON], (t=>t))
          , on = (0,
        s.$j)((function(t) {
            const {chat: e, settings: n} = t;
            return {
                isEnabledCurrentChat: nn(e.conversations),
                shouldShowChatTermsPopup: sn(n.generalSettings)
            }
        }
        ))(class extends i.Component {
            constructor(t) {
                super(t),
                this.state = {
                    replyMessage: null,
                    selectedFilter: "All"
                },
                this.chatIsActive = null,
                this.messageTextAreaRef = i.createRef(),
                this.handleReply = this.handleReply.bind(this),
                this.handleDelete = this.handleDelete.bind(this),
                this.handleClearInput = this.handleClearInput.bind(this),
                this.handleCloseConv = this.handleCloseConv.bind(this),
                this.handleChangeConv = this.handleChangeConv.bind(this),
                this.onFilterItemSelected = this.onFilterItemSelected.bind(this),
                this.getNRSDKSessionId = this.getNRSDKSessionId.bind(this)
            }
            componentDidMount() {
                this.messageTextAreaRef && this.messageTextAreaRef.current && this.props.platformType !== E.Z.platformTypes.MOBILE && this.messageTextAreaRef.current.focus()
            }
            componentDidUpdate(t) {
                (this.props.conversation && t.conversation.id !== this.props.conversation.id || t.isEnabledCurrentChat !== this.props.isEnabledCurrentChat) && this.messageTextAreaRef && this.messageTextAreaRef.current && this.props.platformType !== E.Z.platformTypes.MOBILE && this.messageTextAreaRef.current.focus()
            }
            handleDelete(t) {
                this.props.handleDeleteMessage && this.props.handleDeleteMessage(t)
            }
            handleReply(t) {
                this.setState({
                    replyMessage: t
                }),
                this.messageTextAreaRef && this.messageTextAreaRef.current && this.props.platformType !== E.Z.platformTypes.MOBILE && this.messageTextAreaRef.current.focus()
            }
            handleCloseConv() {
                this.handleReply(null),
                this.props.handleCloseConv && this.props.handleCloseConv()
            }
            handleClearInput() {
                this.handleReply(null)
            }
            handleChangeConv(t) {
                this.props.changeCurrConversation && this.props.changeCurrConversation(t),
                this.handleClearInput()
            }
            onFilterItemSelected(t) {
                this.setState({
                    selectedFilter: t
                })
            }
            getNRSDKSessionId() {
                if (en.session && 0 !== en.session.roomSessionId) {
                    this.sessionId = en.session.roomSessionId;
                    try {
                        this.chatIsActive = sessionStorage.getItem(this.sessionId + "_chatIsActive")
                    } catch (t) {
                        console.error(`Caught the following exception ${t.message} while reading chat session storage`, t),
                        this.chatIsActive = "false"
                    }
                    return "true" === this.chatIsActive
                }
                return !1
            }
            shoudDisplayMessageDropdown() {
                return !(!this.props.isModerator && this.props.conversation.conversation_type === E.Z.conversationTypes.qna)
            }
            render() {
                const {conversation: t, ownUserId: e, ownUser: n, isModerator: i} = this.props
                  , s = this.getNRSDKSessionId()
                  , o = this.props.shouldShowChatTermsPopup ? s : this.props.platformType !== E.Z.platformTypes.MOBILE
                  , a = this.props.shouldShowChatTermsPopup && !s
                  , p = !a && this.shoudDisplayMessageDropdown();
                return (0,
                c.jsxs)("div", {
                    className: "conversation " + r()("conversation_conversation__1BOyr"),
                    role: this.props.shouldShowChatTermsPopup ? "button" : null,
                    tabIndex: this.props.shouldShowChatTermsPopup ? 0 : null,
                    onKeyDown: this.props.shouldShowChatTermsPopup ? t=>m.Z.emulateButtonKeydown(t, this.props.showAWSAgreementPopup) : null,
                    onClick: this.props.shouldShowChatTermsPopup ? this.props.showAWSAgreementPopup : null,
                    children: [(0,
                    c.jsx)(Ze, {
                        currConvId: t.id,
                        changeCurrConversation: this.handleChangeConv
                    }), t.conversation_type === E.Z.conversationTypes.qna && (0,
                    c.jsx)("div", {
                        className: r()("conversation_filter-bar-container__BxZOg"),
                        children: (0,
                        c.jsx)(tn, {
                            onItemSelected: this.onFilterItemSelected,
                            items: Object.values(re),
                            initialItem: re.ALL
                        })
                    }), (0,
                    c.jsx)("div", {
                        className: r()("conversation_conversationListContainer__3urEi"),
                        children: (0,
                        c.jsx)(de, {
                            isModerator: i,
                            disableMessageDropdown: !p,
                            ownUserId: e,
                            filterType: this.state.selectedFilter,
                            handleReply: this.handleReply
                        })
                    }), (0,
                    c.jsx)(oe, {
                        textareaRef: this.messageTextAreaRef,
                        conversation: t,
                        ownUserId: e,
                        ownUser: n,
                        replyMessage: this.state.replyMessage,
                        handleReply: this.handleReply,
                        disabled: a,
                        autoFocus: o,
                        platformType: this.props.platformType
                    }), (0,
                    c.jsx)(Ge, {
                        allowReply: this.props.conversation.conversation_type !== E.Z.conversationTypes.qna,
                        isModarator: i,
                        handleReply: this.handleReply,
                        handleDelete: this.handleDelete,
                        ownUserId: e,
                        changeCurrConversation: this.handleChangeConv
                    })]
                })
            }
        }
        )
          , rn = (0,
        b.P1)(((t,e)=>t[e]), (t=>t))
          , an = (0,
        b.P1)([t=>t.user_id], (t=>t))
          , pn = (0,
        b.P1)((t=>t.platform && t.platform.type), (t=>t || E.Z.platformTypes.DESKTOP))
          , cn = (0,
        s.$j)((function(t) {
            const {participants: e, settings: n} = t
              , i = e.list ? e.list : {}
              , s = an(n.ownData);
            return {
                isModerator: (0,
                ct.S_)(i, n.ownData.user_id),
                ownUserId: s,
                ownUser: rn(e.list, s),
                platformType: pn(n.browserInfo)
            }
        }
        ))(class extends i.Component {
            constructor(t) {
                super(t),
                this.state = {}
            }
            componentDidMount() {
                this.props.dispatch(M(this.props.conversation.id, 0))
            }
            componentDidUpdate(t) {
                this.props.conversation.id !== t.conversation.id && this.props.dispatch(M(this.props.conversation.id, 0))
            }
            render() {
                return (0,
                c.jsx)(on, {
                    showAWSAgreementPopup: this.props.showAWSAgreementPopup,
                    handleDeleteMessage: this.props.handleDeleteMessage,
                    conversation: this.props.conversation,
                    handleCloseConv: this.props.handleCloseConv,
                    ownUser: this.props.ownUser,
                    ownUserId: this.props.ownUserId,
                    isModerator: this.props.isModerator,
                    shouldShowChatTermsPopup: this.props.shouldShowChatTermsPopup,
                    changeCurrConversation: this.props.changeCurrConversation,
                    platformType: this.props.platformType
                })
            }
        }
        )
          , ln = {
            conversations: {},
            systemConversations: {},
            loading: !1,
            currConv: null,
            isChatActive: !1
        }
          , dn = {
            loading: !1,
            fontSize: 100,
            list: {}
        }
          , hn = {
            loading: !1,
            term: ""
        }
          , An = {
            title: "",
            conversationId: null,
            options: {},
            author: {}
        }
          , un = (0,
        $e.combineReducers)({
            conversations: function(t=ln, e) {
                switch (e.type) {
                case "START_LOADING_CONVERSATIONS":
                    return Object.assign({}, t, {
                        loading: !0
                    });
                case "FINISH_LOADING_CONVERSATIONS":
                    return Object.assign({}, t, {
                        loading: !1
                    });
                case "CLEAR_CONVERSATION":
                    {
                        const n = Object.assign({}, t.conversations, {
                            [e.payload.conversationId]: Object.assign({}, t.conversations[e.payload.conversationId], {
                                lastMessage: {}
                            })
                        });
                        return Object.assign({}, t, {
                            conversations: n
                        })
                    }
                case "SET_CHAT_ACTIVE":
                    return Object.assign({}, t, {
                        isChatActive: e.payload.isActive
                    });
                case "SET_CONVERSATIONS":
                    {
                        let n = {};
                        return e.payload.forEach((e=>{
                            if (e.system)
                                e.active = !0;
                            else if (t.conversations) {
                                const n = Object.keys(t.conversations).includes(e.id);
                                e.active = !!n && t.conversations[e.id].active
                            } else
                                e.active = !1;
                            n[e.id] = e
                        }
                        )),
                        n = Object.assign({}, t.conversations, n),
                        Object.assign({}, t, {
                            conversations: n
                        })
                    }
                case "SET_SYSTEM_CONVERSATIONS":
                    {
                        let n = {};
                        return e.payload.conversations.forEach((t=>{
                            t.active = !0,
                            n[t.id] = t
                        }
                        )),
                        n = Object.assign({}, t.conversations, n),
                        Object.assign({}, t, {
                            conversations: n
                        })
                    }
                case "SET_LAST_MESSAGE":
                    {
                        const {conversations: n} = t
                          , {message: i} = e.payload
                          , s = n[i.conversation_id];
                        return s ? (s.lastMessage = i,
                        Object.assign({}, t, {
                            conversations: Object.assign({}, t.conversations, {
                                [s.id]: s
                            })
                        })) : t
                    }
                case "RECIVE_MESSAGE":
                    {
                        const {currConv: n, conversations: i, isChatActive: s} = t
                          , o = e.payload;
                        if (!i[o.conversation_id])
                            return t;
                        let r = {};
                        return r[o.conversation_id] = i[o.conversation_id],
                        s && n && o.conversation_id === n.id || (r[o.conversation_id].unreadMessages = parseInt(i[o.conversation_id].unreadMessages, 0) + 1),
                        r[o.conversation_id].active = !0,
                        r[o.conversation_id].lastMessage = o,
                        r = Object.assign({}, i, r),
                        Object.assign({}, t, {
                            conversations: r
                        })
                    }
                case "SET_CURRENT_CONVERSATION":
                    {
                        const n = Object.assign({}, e.payload)
                          , {conversations: i} = t;
                        return i[n.id] && (n.unreadMessages = 0),
                        Object.assign({}, t, {
                            currConv: n
                        })
                    }
                case "CLEAR_CURRENT_CONVERSATION":
                    return Object.assign({}, t, {
                        currConv: ln.currConv,
                        loading: !1
                    });
                case "SET_UNREAD_MESSAGES_COUNT":
                    const n = Object.assign({}, t.conversations[e.payload.conversation_id]);
                    return n.unreadMessages = e.payload.count,
                    Object.assign({}, t, {
                        conversations: Object.assign({}, t.conversations, {
                            [n.id]: n
                        })
                    });
                case "CREAT_DM_CONVERSATION":
                    {
                        const n = e.payload
                          , {conversations: i} = t;
                        let s = {};
                        return s[n.id] || (s[n.id] = n),
                        s = Object.assign({}, i, s),
                        Object.assign({}, t, {
                            conversations: s
                        })
                    }
                case "HAS_CHAT_TERMS_PERMISSION":
                    return Object.assign({}, t, {
                        ["accessTo" + e.payload.chatType]: e.payload.chatPermission
                    });
                default:
                    return t
                }
            },
            messages: function(t=dn, e) {
                switch (e.type) {
                case "SET_MESSAGES":
                    {
                        const n = {};
                        return e.payload.messages.forEach((t=>{
                            n[t.id] = t,
                            n[t.id].timestamp = t.timestamp
                        }
                        )),
                        Object.assign({}, t, {
                            list: Object.assign({}, t.list, {
                                [e.payload.conversation_id]: Object.assign({}, t.list[e.payload.conversation_id], n)
                            })
                        })
                    }
                case "INCREASE_CHAT_FONT_SIZE":
                    return Object.assign({}, t, {
                        fontSize: Math.min(t.fontSize + (e.payload.rate ? e.payload.rate : 10), 200)
                    });
                case "DECREASE_CHAT_FONT_SIZE":
                    return Object.assign({}, t, {
                        fontSize: Math.max(t.fontSize - (e.payload.rate ? e.payload.rate : 10), 50)
                    });
                case "CLEAR_CONVERSATION":
                    {
                        const n = Object.assign({}, t.list);
                        return Reflect.deleteProperty(n, e.payload.conversationId),
                        Object.assign({}, t, {
                            list: n
                        })
                    }
                case "RECIVE_MESSAGE":
                    {
                        const n = e.payload;
                        return Object.assign({}, t, {
                            isNewMessage: !0,
                            list: Object.assign({}, t.list, {
                                [n.conversation_id]: Object.assign({}, t.list[n.conversation_id], {
                                    [n.id]: n
                                })
                            })
                        })
                    }
                case "RESET_NEW_MESSAGE":
                    return Object.assign({}, t, {
                        isNewMessage: !1
                    });
                case "MESSAGE_DELETED":
                case "DELETE_MESSAGE_ACK":
                    {
                        const n = Object.assign({}, t.list[e.payload.conversation_id]);
                        return Reflect.deleteProperty(n, e.payload.message_id),
                        Object.assign({}, t, {
                            list: Object.assign({}, t.list, {
                                [e.payload.conversation_id]: n
                            })
                        })
                    }
                case "CLEAR_MESSAGES":
                    return Object.assign({}, t, {
                        list: {}
                    });
                case "START_LOADING_MESSAGES":
                    return Object.assign({}, t, {
                        loading: !0
                    });
                case "FINISH_LOADING_MESSAGES":
                    return Object.assign({}, t, {
                        loading: !1
                    });
                default:
                    return t
                }
            },
            search: function(t=hn, e) {
                switch (e.type) {
                case "SEARCH_CONVERSATIONS":
                    return Object.assign({}, t, {
                        term: e.payload.newTerm
                    });
                case "SET_CURRENT_CONVERSATION":
                    return Object.assign({}, t, {
                        loading: !1,
                        term: ""
                    });
                default:
                    return t
                }
            },
            notifications: (t=An,e)=>{
                switch (e.type) {
                case "SHOW_NOTIFICATION":
                    return Object.assign({}, t, {
                        notification: e.payload
                    });
                case "SHOW_NEW_MSG_NOTIFICATION":
                    {
                        const n = e.payload
                          , i = Object.assign({}, t, {
                            conversationId: n.conversation_id,
                            options: {
                                body: n.message
                            },
                            author: e.payload.user
                        });
                        return Object.assign({}, t, i)
                    }
                default:
                    return t
                }
            }
        });
        var mn = n("0v/C")
          , gn = n("Axej")
          , Cn = n("CDIo");
        const fn = (0,
        n("tfci").P1)([t=>t.chat, (0,
        Cn.UU)("conversationId")], ((t,e)=>{
            var n, i;
            const s = null == t || null == (n = t.messages) || null == (i = n.list) ? void 0 : i[e];
            if (!s)
                return null;
            let o = null;
            for (const r in s)
                o || (o = s[r]),
                s[r].timestamp > o.timestamp && (o = s[r]);
            return o || null
        }
        ))
          , bn = ({dispatch: t},e)=>{
            t({
                type: "SET_CONVERSATIONS",
                payload: e.conversations
            }),
            t({
                type: "FINISH_LOADING_CONVERSATIONS",
                payload: {}
            })
        }
          , vn = {
            receiveSystemConversations: (t,e)=>{
                const n = e.conversations.filter((t=>t.is_system));
                t.dispatch({
                    type: "SET_SYSTEM_CONVERSATIONS",
                    payload: {
                        conversations: n
                    }
                });
                for (const i of e.conversations)
                    if (i.conversation_type === E.Z.conversationTypes.public)
                        break;
                bn(t, e)
            }
            ,
            receiveConversations: bn,
            loadMessages: ({dispatch: t},e)=>{
                e.messages && (e.messages = e.messages.map((t=>(t.message_metadata && (t.message_metadata = JSON.parse(t.message_metadata)),
                t)))),
                t({
                    type: "SET_MESSAGES",
                    payload: e
                }),
                t({
                    type: "FINISH_LOADING_MESSAGES",
                    payload: {}
                })
            }
            ,
            receiveMessage: ({dispatch: t},e)=>{
                e.message_metadata && (e.message_metadata = JSON.parse(e.message_metadata)),
                t({
                    type: "RECIVE_MESSAGE",
                    payload: e
                }),
                t((t=>({
                    type: "SHOW_NEW_MSG_NOTIFICATION",
                    payload: t
                }))(e)),
                ce.F.actionReceived(E.Z.genericEventModule.NOTIFICATION, E.Z.genericEventAction.showChatNotification, e)
            }
            ,
            createdDMConversation: ({dispatch: t},e)=>{
                const {conversation: n} = e;
                t(T(n)),
                t(R(n))
            }
            ,
            deleteMessageACK: function(t, e) {
                t.dispatch(j(e))
            },
            deletedMessage: function(t, e) {
                t.dispatch({
                    type: "MESSAGE_DELETED",
                    payload: e
                });
                const n = Cn.Mv.getStore().getState();
                let i = fn(n, {
                    conversationId: e.conversation_id
                });
                t.dispatch({
                    type: "SET_LAST_MESSAGE",
                    payload: {
                        message: i || {
                            conversation_id: e.conversation_id,
                            message: ""
                        }
                    }
                })
            },
            deleteMessage: function(t, e) {
                t.dispatch(j(e))
            },
            createDMConversation: (t,e)=>{
                t.dispatch(T(e))
            }
            ,
            createDMConversationACK: (t,e)=>{
                t.dispatch(T(e))
            }
            ,
            clearAllMessages: function(t, e) {
                t.dispatch(P(e.conversation_id))
            },
            clearAllMessagesACK: function(t, e) {
                t.dispatch(P(e.conversation_id))
            },
            clearedAllMessages: function(t, e) {
                t.dispatch(P(e.conversation_id))
            },
            gotDMConversation: ({dispatch: t},e)=>{
                const {conversation: n} = e;
                t(T(n)),
                t(R(n))
            }
        };
        var wn = n("ZVMP");
        n("RTi4");
        const yn = (0,
        te.Z)()((({currentFontSize: t, onClearClicked: e, displayClearBtn: n, onSizeIncreaseClicked: i, onSizeDecreaseClicked: s, t: o})=>(0,
        c.jsx)("ul", {
            className: "message-list-dropdown",
            children: n && (0,
            c.jsx)("li", {
                onClick: e,
                tabIndex: 0,
                onKeyDown: t=>m.Z.emulateButtonKeydown(t, e),
                "aria-label": o("clearAll"),
                className: "dropdown-list-item",
                children: o("clearAll")
            })
        })));
        var xn = n("6MZh")
          , _n = n("SO+G")
          , kn = (n("WTrO"),
        n("HGsk"));
        const Sn = (0,
        te.Z)()(class extends i.Component {
            constructor(t) {
                super(t),
                this.letsGoBtnAws = this.letsGoBtnAws.bind(this),
                this.handleScrollTop = this.handleScrollTop.bind(this),
                this.handleScrollBottom = this.handleScrollBottom.bind(this),
                this.handleClosePopup = this.handleClosePopup.bind(this),
                this.state = {
                    scrolledToBottom: !1,
                    isErrorVisible: !1
                }
            }
            letsGoBtnAws() {
                this.state.scrolledToBottom ? (this.props.activateChat(),
                kn.Z.dispatch((0,
                xn.hj)())) : this.setState({
                    isErrorVisible: !0
                })
            }
            handleScrollTop() {
                this.state.scrolledToBottom && this.setState({
                    scrolledToBottom: !1
                })
            }
            handleScrollBottom() {
                this.state.scrolledToBottom || this.setState({
                    scrolledToBottom: !0,
                    isErrorVisible: !1
                })
            }
            handleClosePopup() {
                kn.Z.dispatch((0,
                xn.hj)())
            }
            render() {
                return (0,
                c.jsxs)("div", {
                    className: "aws-agreement-popup-container",
                    children: [(0,
                    c.jsx)("div", {
                        className: "aws-agreement-popup-close-btn",
                        role: "button",
                        tabIndex: 0,
                        onKeyDown: t=>m.Z.emulateButtonKeydown(t, this.handleClosePopup),
                        onClick: this.handleClosePopup,
                        children: (0,
                        c.jsx)(_n.r, {
                            className: "aws-agreement-popup-close-icon"
                        })
                    }), (0,
                    c.jsx)("div", {
                        className: "aws-agreement-popup-content-container",
                        children: (0,
                        c.jsx)(Y(), {
                            id: "aws-agreement-perfect-scrollbar",
                            className: "aws-agreement-content-container",
                            ref: this.awsAgreementRef,
                            onYReachStart: this.handleScrollTop,
                            onYReachEnd: this.handleScrollBottom,
                            children: (0,
                            c.jsxs)("div", {
                                className: "perfect-scrollbar-content-wrapper",
                                children: [(0,
                                c.jsx)("div", {
                                    className: "aws-agreement-popup-content-container-heading",
                                    children: this.props.t("connectingWithSponsors")
                                }), (0,
                                c.jsxs)("p", {
                                    className: "aws-agreement-content",
                                    children: ["Yes, I\u2019d like ", (0,
                                    c.jsx)("b", {
                                        children: this.props.t("amazonWebServices")
                                    }), " (AWS) to provide my contact information to ", (0,
                                    c.jsx)("b", {
                                        children: this.props.t("awsReInvent2020")
                                    }), " Sponsors (Sponsor) if I choose to enter its virtual event booth or enter its sponsored content page so Sponsor may send me news and offers by email, or telephone."]
                                }), (0,
                                c.jsxs)("p", {
                                    className: "aws-agreement-content",
                                    children: ["There is no difference in the event experience if you decline to share your information. You may unsubscribe from receiving news and offers from a Sponsor at any time by following the instructions in the communications received. AWS handles your information as described in the ", (0,
                                    c.jsx)("b", {
                                        children: this.props.t("awsPrivacyNotice")
                                    }), ". Providing a Sponsor with your information may involve transferring it to another country. For questions about how a Sponsor will handle your information, please contact the Sponsor directly or refer to its privacy policy."]
                                }), (0,
                                c.jsxs)("p", {
                                    className: "aws-agreement-content",
                                    children: ["Yes, I\u2019d like ", (0,
                                    c.jsx)("b", {
                                        children: this.props.t("amazonWebServices")
                                    }), " (AWS) to provide my contact information to ", (0,
                                    c.jsx)("b", {
                                        children: this.props.t("awsReInvent2020")
                                    }), " Sponsors (Sponsor) if I choose to enter its virtual event booth or enter its sponsored content page so Sponsor may send me news and offers by email, or telephone."]
                                }), (0,
                                c.jsxs)("p", {
                                    className: "aws-agreement-content",
                                    children: ["There is no difference in the event experience if you decline to share your information. You may unsubscribe from receiving news and offers from a Sponsor at any time by following the instructions in the communications received. AWS handles your information as described in the ", (0,
                                    c.jsx)("b", {
                                        children: this.props.t("awsPrivacyNotice")
                                    }), ". Providing a Sponsor with your information may involve transferring it to another country. For questions about how a Sponsor will handle your information, please contact the Sponsor directly or refer to its privacy policy."]
                                }), (0,
                                c.jsxs)("p", {
                                    className: "aws-agreement-content aws-agreement-content-greyed",
                                    children: ["By registering, you agree to the ", (0,
                                    c.jsx)("b", {
                                        children: this.props.t("awsTermsAndConditions")
                                    }), "  and the ", this.props.t("awsCommunityConduct")]
                                })]
                            })
                        })
                    }), (0,
                    c.jsxs)("div", {
                        className: "aws-agreement-popup-btn-container",
                        children: [(0,
                        c.jsx)(Qt.z, {
                            classes: "aws-agreement-popup-btn " + (this.state.scrolledToBottom ? "aws-agreement-popup-btn-active" : "aws-agreement-popup-btn-disabled"),
                            onClick: this.letsGoBtnAws,
                            children: this.props.t("btnLetsGo")
                        }), !this.state.scrolledToBottom && this.state.isErrorVisible ? (0,
                        c.jsx)("p", {
                            className: "aws-agreement-error",
                            children: this.props.t("pleaseFinishReadingTerms")
                        }) : null]
                    })]
                })
            }
        }
        );
        mn.Z.register("chat", un),
        (0,
        gn.HR)("Chat", vn);
        const En = (0,
        b.P1)([t=>t.user_id], (t=>t))
          , Bn = (0,
        b.P1)([t=>!!(t && t.chat_module && t.chat_module.default_settings && t.chat_module.default_settings.terms) && t.chat_module.default_settings.terms === E.Z.permissionValues.ON], (t=>t))
          , In = (0,
        $e.compose)((0,
        te.Z)(), (0,
        s.$j)((t=>{
            const {chat: e, settings: n, participants: i} = t
              , {conversations: s} = e;
            let o = null;
            e.notifications.conversationId && ((0,
            U.OH)(s, e.notifications.conversationId),
            o = (0,
            U.hD)(e.notifications));
            const r = i.list ? i.list : {}
              , a = En(n.ownData)
              , p = (0,
            ct.S_)(r, a)
              , c = r[a]
              , l = Bn(n.generalSettings);
            return {
                fontSize: (0,
                U.tb)(t),
                conversations: (0,
                U.yg)(t),
                unreadMessages: (0,
                U.vq)(s.conversations),
                currConv: (0,
                U.mA)(s),
                hasCurrentConversationAccess: (0,
                U._U)((0,
                U.mA)(e.conversations), n.generalSettings, c, p),
                notificationOptions: (0,
                U.St)(t),
                notificationTitle: (0,
                U.Ws)(t),
                isModerator: p,
                notificationAuthor: o,
                ownId: a,
                shouldShowChatTermsPopup: l
            }
        }
        ), (t=>({
            increaseFontSize: ()=>t(((t=10)=>({
                type: "INCREASE_CHAT_FONT_SIZE",
                payload: {
                    rate: t
                }
            }))()),
            decreaseFontSize: ()=>t(((t=10)=>({
                type: "DECREASE_CHAT_FONT_SIZE",
                payload: {
                    rate: t
                }
            }))()),
            addNotificationToModule: e=>t((0,
            wn.$W)(e)),
            removeNotificationFromModule: e=>t((0,
            wn.yi)(e)),
            startLoadingConversations: ()=>t((setTimeout((()=>{
                B.log({
                    payload: {
                        system_conversations: Z,
                        conversations: $
                    }
                }),
                S.B.emit(E.Z.internalEvents.outgoingEvent, {
                    module: "Chat",
                    type: E.Z.outboundEvents.types.callback,
                    name: E.Z.outboundEvents.eventNames.loadConversations,
                    payload: {}
                })
            }
            ), 1e3),
            {
                type: "START_LOADING_CONVERSATIONS",
                payload: {}
            })),
            clearCoversation: ()=>{
                t({
                    type: "CLEAR_CURRENT_CONVERSATION",
                    payload: {}
                })
            }
            ,
            setCurrentConversation: e=>{
                t(R(e))
            }
            ,
            dispatch: t
        }))))(class extends i.Component {
            constructor(t) {
                super(t),
                this.handleConvChange = this.handleConvChange.bind(this),
                this.handleCloseConv = this.handleCloseConv.bind(this),
                this.handleDeleteMessage = this.handleDeleteMessage.bind(this),
                this.handleSearchItemClicked = this.handleSearchItemClicked.bind(this),
                this.clearConversation = this.clearConversation.bind(this),
                this.onTextSizeIncreased = this.onTextSizeIncreased.bind(this),
                this.onTextSizeDecreased = this.onTextSizeDecreased.bind(this),
                this.handleTopbar = this.handleTopbar.bind(this),
                this.renderAwsAgreementBanner = this.renderAwsAgreementBanner.bind(this),
                this.activateChat = this.activateChat.bind(this),
                this.getNRSDKSessionId = this.getNRSDKSessionId.bind(this),
                this.lastShownNotificationId = null,
                this.props.shouldShowChatTermsPopup && this.getNRSDKSessionId(),
                this.sessionId = null
            }
            componentDidMount() {
                null !== this.props.conversations && 0 !== Object.keys(this.props.conversations).length || (this.props.startLoadingConversations(),
                this.setChatTermsPermission()),
                this.props.onBackButtonClick && this.props.onBackButtonClick(this.handleCloseConv),
                this.handleTopbar(),
                this.props.dispatch(D(!0)),
                this.getNRSDKSessionId()
            }
            getNRSDKSessionId() {
                if (en.session && 0 !== en.session.roomSessionId) {
                    this.sessionId = en.session.roomSessionId;
                    try {
                        this.chatIsActive = sessionStorage.getItem(this.sessionId + "_chatIsActive"),
                        this.chatIsActive = "false"
                    } catch (t) {
                        console.error("Caught the following exception while get chat session storage " + t.message, t)
                    }
                    return "true" === this.chatIsActive
                }
                return !1
            }
            setChatTermsPermission() {
                this.chatIsActive && this.props.dispatch(N("chat", !0))
            }
            componentWillUnmount() {
                this.props.dispatch(D(!1))
            }
            componentDidUpdate(t) {
                t.fontSize !== this.props.fontSize && this.props.setDropdown && this.props.currConv && this.props.setDropdown((0,
                c.jsx)(yn, {
                    onClearClicked: this.clearConversation,
                    displayClearBtn: this.props.isModerator,
                    onSizeIncreaseClicked: this.onTextSizeIncreased,
                    onSizeDecreaseClicked: this.onTextSizeDecreased,
                    currentFontSize: this.props.fontSize
                })),
                t.currConv === this.props.currConv && this.props.isModerator === t.isModerator || this.handleTopbar(),
                (!this.props.hasCurrentConversationAccess && t.hasCurrentConversationAccess || !this.props.hasCurrentConversationAccess && null !== this.props.currConv) && this.handleCloseConv()
            }
            handleSearchItemClicked(t) {
                this.props.conversations[t.user_id] || (O({
                    target_user_id: t.user_id,
                    target_user_type: t.user_type
                }),
                this.props.updateTitle(t.full_name),
                this.props.setBackButtonVisible(!0))
            }
            handleTopbar(t=!1) {
                if (this.props.currConv && this.props.updateTitle) {
                    const t = this.props.i18n.exists(this.props.currConv.conversation_type) ? this.props.t(this.props.currConv.conversation_type) : this.props.currConv.name;
                    this.props.updateTitle(t),
                    this.props.setBackButtonVisible(!0),
                    this.props.setDropdown && this.props.isModerator && this.props.setDropdown((0,
                    c.jsx)(yn, {
                        onClearClicked: this.clearConversation,
                        displayClearBtn: this.props.isModerator,
                        onSizeIncreaseClicked: this.onTextSizeIncreased,
                        onSizeDecreaseClicked: this.onTextSizeDecreased,
                        currentFontSize: this.props.fontSize
                    }))
                } else
                    this.props.updateTitle && this.props.updateTitle(null),
                    this.props.setBackButtonVisible && this.props.setBackButtonVisible(!1),
                    this.props.setDropdown && this.props.setDropdown(null)
            }
            renderAwsAgreementBanner() {
                this.getNRSDKSessionId(),
                this.chatIsActive || this.props.dispatch((0,
                xn.U)("AwsAgreement", {
                    popupContent: (0,
                    c.jsx)(Sn, {
                        currentConv: this.props.conversation,
                        activateChat: this.activateChat.bind(this, E.Z.conversationTypes.public)
                    })
                }, 2))
            }
            activateChat() {
                if (en.session && 0 !== en.session.roomSessionId) {
                    this.sessionId = en.session.roomSessionId;
                    try {
                        sessionStorage.setItem(this.sessionId + "_chatIsActive", "true")
                    } catch (t) {
                        console.error("Caught the following exception while setting chat session storage " + t.message, t)
                    }
                }
                this.props.dispatch(N("chat", !0))
            }
            handleConvChange(t) {
                this.props.setCurrentConversation(t),
                this.props.shouldShowChatTermsPopup && this.renderAwsAgreementBanner()
            }
            onTextSizeDecreased() {
                this.props.decreaseFontSize()
            }
            onTextSizeIncreased() {
                this.props.increaseFontSize()
            }
            clearConversation() {
                S.B.emit(E.Z.internalEvents.outgoingEvent, {
                    module: "Chat",
                    type: E.Z.outboundEvents.types.void,
                    name: E.Z.outboundEvents.eventNames.clearAllMessages,
                    constraint: E.Z.outboundEvents.constraints.includeSelf,
                    payload: {
                        conversation_id: this.props.currConv.id,
                        ack_id: void 0
                    }
                }),
                this.handleCloseConv()
            }
            handleCloseConv() {
                this.props.clearCoversation(),
                null !== this.props.conversations && 0 !== Object.keys(this.props.conversations).length || this.props.startLoadingConversations()
            }
            handleDeleteMessage(t) {
                S.B.emit(E.Z.internalEvents.outgoingEvent, {
                    module: "Chat",
                    type: E.Z.outboundEvents.types.void,
                    name: E.Z.outboundEvents.eventNames.deleteMessage,
                    constraint: E.Z.outboundEvents.constraints.includeSelf,
                    payload: {
                        conversation_id: this.props.currConv.id,
                        message_id: t.id,
                        ack_id: `del_message_${this.props.currConv.id}_${t.id}`
                    }
                })
            }
            render() {
                return (0,
                c.jsx)(i.Fragment, {
                    children: this.props.currConv ? (0,
                    c.jsx)(cn, {
                        conversation: this.props.currConv,
                        handleDeleteMessage: this.handleDeleteMessage,
                        changeCurrConversation: this.handleConvChange,
                        showAWSAgreementPopup: this.renderAwsAgreementBanner,
                        shouldShowChatTermsPopup: this.props.shouldShowChatTermsPopup,
                        handleCloseConv: this.handleCloseConv
                    }) : (0,
                    c.jsx)(At, {
                        handleConvSelect: this.handleConvChange,
                        showAWSAgreementPopup: this.renderAwsAgreementBanner,
                        shouldShowChatTermsPopup: this.props.shouldShowChatTermsPopup,
                        handleSearchItemClicked: this.handleSearchItemClicked
                    })
                })
            }
        }
        )
    }
    ,
    "9Nti": (t,e,n)=>{
        "use strict";
        n.d(e, {
            vq: ()=>A,
            OH: ()=>u,
            cZ: ()=>y,
            yg: ()=>O,
            mA: ()=>N,
            Lo: ()=>D,
            zj: ()=>M,
            tb: ()=>j,
            Ws: ()=>R,
            St: ()=>T,
            _U: ()=>L,
            yZ: ()=>Z,
            Hw: ()=>U,
            QH: ()=>V,
            aX: ()=>G,
            hm: ()=>W,
            L4: ()=>Y,
            sH: ()=>q,
            I5: ()=>K,
            hD: ()=>Q,
            xQ: ()=>J
        });
        var i = n("t1lN")
          , s = n("svWY")
          , o = n("ID3L")
          , r = n.n(o)
          , a = (n("UmR+"),
        n("ziYR"))
          , p = n("TDzD")
          , c = n("6jGC");
        const l = (0,
        i.wN)(i.PW, ((t,e)=>Array.isArray(t) ? (0,
        s.isEqual)(t, e) : !!t.conversations && (0,
        s.isEqual)(Object.keys(t.messages), Object.keys(e.messages))))
          , d = (0,
        i.wN)(i.PW, ((t,e)=>Array.isArray(t) ? (0,
        s.isEqual)(t, e) : !!t.conversations && (0,
        s.isEqual)(Object.keys(t.conversations.conversations), Object.keys(e.conversations.conversations))))
          , h = t=>t.chat
          , A = (0,
        i.P1)((t=>t ? Object.values(t).reduce(((t,e)=>t + Number(e.unreadMessages)), 0) : 0), (t=>t))
          , u = (0,
        i.P1)(((t,e)=>t.conversations[e]), (t=>t))
          , m = (0,
        i.P1)(h, (t=>t.conversations.conversations))
          , g = t=>t.participants.list
          , C = t=>t.settings.ownData.user_id
          , f = (0,
        i.P1)(g, C, ((t,e)=>$(t[e])))
          , b = (0,
        i.P1)(g, C, ((t,e)=>t[e]))
          , v = (0,
        i.P1)((t=>t.settings.generalSettings.chat_module && t.settings.generalSettings.chat_module && t.settings.generalSettings.chat_module.default_settings && t.settings.generalSettings.chat_module.default_settings.public_chat), (t=>t === a.Z.permissionValues.ON))
          , w = (0,
        i.P1)(b, (t=>t && t.user_permissions && t.user_permissions.chat_module && t.user_permissions.chat_module.public_chat))
          , y = (0,
        i.P1)(v, w, ((t,e)=>e && e !== a.Z.permissionValues.UNSET ? e === a.Z.permissionValues.ON : t))
          , x = (0,
        i.P1)((t=>t.settings.generalSettings.chat_module && t.settings.generalSettings.chat_module && t.settings.generalSettings.chat_module.default_settings && t.settings.generalSettings.chat_module.default_settings.qna_chat), (t=>t === a.Z.permissionValues.ON))
          , _ = (0,
        i.P1)(b, (t=>t && t.user_permissions && t.user_permissions.chat_module && t.user_permissions.chat_module.qna_chat))
          , k = (0,
        i.P1)(x, _, ((t,e)=>e && e !== a.Z.permissionValues.UNSET ? e === a.Z.permissionValues.ON : t))
          , S = (0,
        i.P1)((t=>t.settings && t.settings.generalSettings && t.settings.generalSettings.chat_module && t.settings.generalSettings.chat_module.default_settings && t.settings.generalSettings.chat_module.default_settings.moderator_chat), (t=>t === a.Z.permissionValues.ON))
          , E = (0,
        i.P1)(m, k, y, f, c.oh, S, ((t,e,n,i,s,o)=>!!t && Object.keys(t).filter((r=>{
            const p = t[r];
            return !(!p.is_system || p.conversation_type === a.Z.conversationTypes.qna && !e || p.conversation_type === a.Z.conversationTypes.qna && s || p.conversation_type === a.Z.conversationTypes.public && !n || !(p.conversation_type !== a.Z.conversationTypes.moderators || i && !s && o))
        }
        ))))
          , B = (0,
        i.P1)(m, (t=>t && Object.keys(t).filter((e=>!t[e].is_system))))
          , I = (0,
        i.P1)(B, m, ((t,e)=>e && t.sort(((t,n)=>e[n].lastMessage && e[n].lastMessage.timestamp ? e[t].lastMessage && e[t].lastMessage.timestamp ? e[n].lastMessage.timestamp - e[t].lastMessage.timestamp : 0 : 1))))
          , O = d((0,
        i.P1)(E, I, ((t,e)=>t && e && [].concat(t).concat(e))), m, ((t,e)=>e && t && t.map((t=>{
            const n = e[t];
            return {
                id: t,
                name: n.name,
                time: n.lastMessage && n.lastMessage.timestamp ? n.lastMessage.timestamp : null,
                lastMessage: n.lastMessage && n.lastMessage.message ? `${n.lastMessage.user.name}: ${n.lastMessage.message}` : "",
                unreadMessages: n.unreadMessages,
                avatar: n.avatar,
                active: n.active,
                system: n.is_system,
                conversation_type: n.conversation_type,
                users: n.conversation_type === a.Z.conversationTypes.private && n.conversationUser1 && n.conversationUser2 ? {
                    [n.conversationUser1.user_id]: n.conversationUser1,
                    [n.conversationUser2.user_id]: n.conversationUser2
                } : null
            }
        }
        ))))
          , N = (0,
        i.P1)((t=>t.currConv), (t=>t))
          , D = (0,
        i.P1)(h, (t=>t.conversations.loading))
          , M = (0,
        i.P1)(O, (t=>t.length <= 9 ? t.sort(((t,e)=>t.conversation_type === a.Z.conversationTypes.public ? -1 : e.conversation_type === a.Z.conversationTypes.public ? 1 : t.conversation_type === a.Z.conversationTypes.qna ? -1 : e.conversation_type === a.Z.conversationTypes.qna ? 1 : t.conversation_type === a.Z.conversationTypes.moderators ? -1 : e.conversation_type === a.Z.conversationTypes.moderators ? 1 : 0)) : t.sort(((t,e)=>t.conversation_type === a.Z.conversationTypes.public ? -1 : e.conversation_type === a.Z.conversationTypes.public ? 1 : t.conversation_type === a.Z.conversationTypes.qna ? -1 : e.conversation_type === a.Z.conversationTypes.qna ? 1 : t.conversation_type === a.Z.conversationTypes.moderators ? -1 : e.conversation_type === a.Z.conversationTypes.moderators ? 1 : t.time > e.time ? -1 : 1)).slice(0, 9)))
          , P = t=>{
            var e, n, i;
            return null != (e = null == (n = t.conversations) || null == (i = n.currConv) ? void 0 : i.id) ? e : null
        }
          , j = (0,
        i.P1)((t=>t.chat.messages.fontSize), (t=>t))
          , R = (0,
        i.P1)((t=>t.chat.notifications.title), (t=>t))
          , T = (0,
        i.P1)((t=>t.chat.notifications.options), (t=>t))
          , L = (0,
        i.P1)(((t,e,n,i)=>{
            if (t) {
                const i = n && n.user_permissions ? n.user_permissions.chat_module : {}
                  , s = e && e.chat_module ? e.chat_module.default_settings : {};
                return t.conversation_type === a.Z.conversationTypes.qna ? i.qna_chat && i.qna_chat !== a.Z.permissionValues.UNSET ? i.qna_chat === a.Z.permissionValues.ON : s.qna_chat === a.Z.permissionValues.ON : t.conversation_type !== a.Z.conversationTypes.public || (i.public_chat && i.public_chat !== a.Z.permissionValues.UNSET ? i.public_chat === a.Z.permissionValues.ON : s.public_chat === a.Z.permissionValues.ON)
            }
            return !1
        }
        ), (t=>t))
          , Z = (0,
        i.P1)(((t,e,n)=>{
            const i = t && t.general && t.general.nr1_alignment_in_nr2 === a.Z.permissionValues.OFF;
            if (n) {
                const s = n && n.user_permissions && n.user_permissions.chat_module && n.user_permissions.chat_module.start_private_chat;
                if (e)
                    return i && t.chat_module && t.chat_module.default_settings && (t.chat_module.default_settings.start_private_chat === a.Z.permissionValues.ON || t.chat_module.default_settings.start_private_chat === a.Z.permissionValues.ONLY_MODERATORS);
                if (!e && s === a.Z.permissionValues.ON)
                    return i;
                if (!e && (!s || s === a.Z.permissionValues.UNSET) && t.chat_module && t.chat_module.default_settings)
                    return i && t.chat_module.default_settings.start_private_chat === a.Z.permissionValues.ON
            }
            return !1
        }
        ), (t=>t))
          , $ = t=>!!t && ((0,
        p.Rz)(t) || t.is_moderator === a.Z.permissionValues.ON || !0 === t.is_moderator)
          , U = (0,
        i.P1)(((t,e,n,i,s)=>s && s.length > 0 ? Object.values(t).filter((n=>i !== n.user_id && ($(t[i]) || e.chat_module && e.chat_module.default_settings.start_private_chat === a.Z.permissionValues.ON || !(!e.chat_module || e.chat_module.default_settings.moderator_chat !== a.Z.permissionValues.ON || !$(n))) && ((t,e)=>t.full_name && t.full_name.toUpperCase().includes(e.toUpperCase()))(n, s))) : []), (t=>t))
          , V = l((t=>{
            const e = h(t)
              , n = P(e);
            return n && t.chat.messages.list[n] ? Object.keys(t.chat.messages.list[n]) : []
        }
        ), h, ((t,e)=>t.map((t=>{
            const n = P(e);
            return F(e.messages.list[n][t])
        }
        )).sort(((t,e)=>t.timestamp - e.timestamp))))
          , F = t=>t ? {
            id: t.id,
            user: z(t.user),
            time: r()(new Date("string" == typeof t.timestamp ? parseInt(t.timestamp, 10) : t.timestamp)),
            timestamp: t.timestamp,
            message: t.message,
            message_metadata: F(t.message_metadata)
        } : null
          , z = t=>({
            id: parseInt(t.id, 0),
            name: t.name,
            avatar: t.avatar
        })
          , H = t=>t.chat.search.term
          , G = (0,
        i.P1)(H, (t=>t))
          , W = (0,
        i.P1)(H, (t=>t && t.length > 0))
          , Y = (0,
        i.P1)(h, (t=>t.messages.loading))
          , q = (0,
        i.P1)(h, (t=>t.messages.isNewMessage))
          , K = (0,
        i.P1)(C, (t=>t))
          , Q = (0,
        i.P1)((t=>t.author), (t=>t))
          , J = (0,
        i.P1)([t=>t.generalSettings, (t,e)=>e], (t=>Boolean(t.chat_module && t.chat_module.default_settings && (t.chat_module.default_settings.qna_chat === a.Z.permissionValues.ON || t.chat_module.default_settings.start_private_chat === a.Z.permissionValues.ON || t.chat_module.default_settings.public_chat === a.Z.permissionValues.ON)) && t.chat_module.visibility !== a.Z.moduleVisibilityValues.NONE && t.chat_module.is_active !== a.Z.permissionValues.OFF))
    }
    ,
    gSzm: (t,e,n)=>{
        "use strict";
        n.d(e, {
            S: ()=>i
        });
        const i = new class {
            constructor() {
                this.listeners = []
            }
            actionReceived(t, e) {
                this.listeners.forEach((n=>{
                    n && "function" == typeof n && n(t, e)
                }
                ))
            }
            addOnEventReceivedListener(t) {
                this.listeners.push(t)
            }
            removeOnEventReceivedListener(t) {
                this.listeners = this.listeners.filter((e=>t !== e))
            }
        }
    }
    ,
    "+0J0": (t,e,n)=>{
        "use strict";
        n.d(e, {
            Z: ()=>k,
            w: ()=>y
        });
        var i = n("r0ML")
          , s = n("Vptf")
          , o = (n("MO23"),
        n("t1lN"))
          , r = n("UmR+")
          , a = n("zSAs")
          , p = n("uagT")
          , c = n("Axej")
          , l = n("o4/b")
          , d = n("ziYR")
          , h = n("HGsk");
        const A = (0,
        o.P1)([t=>t.user_id], (t=>t));
        var u = n("ZVMP");
        const m = new (n("4AhL").u)({
            module: "Notes"
        })
          , g = {
            subscribeToNote: function(t, e) {
                e ? l.B.emit(d.Z.internalEvents.outgoingEvent, {
                    module: "notes",
                    type: d.Z.outboundEvents.types.void,
                    name: d.Z.outboundEvents.eventNames.subscribeToNote,
                    constraint: d.Z.outboundEvents.constraints.includeSelf,
                    payload: {
                        eventData: {
                            noteId: e.noteId,
                            isSubscribeToNote: e.isSubscribeToNote
                        }
                    }
                }) : m.error("Received notes legacy event but no payload present. eventName: subscribeToNote")
            },
            sendNotesToListeners: function(t, e) {
                e ? function(t, e, n) {
                    const i = h.Z.getState()
                      , s = A(i.settings.ownData)
                      , o = (r = i.participants.list)[a = s] && r[a].user_role;
                    var r, a;
                    const p = function(t, e) {
                        return t[e] && t[e].full_name
                    }(i.participants.list, s);
                    l.B.emit(d.Z.internalEvents.outgoingEvent, {
                        module: "notes",
                        type: d.Z.outboundEvents.types.void,
                        name: d.Z.outboundEvents.eventNames.sendNotesToListeners,
                        constraint: d.Z.outboundEvents.constraints.includeSelf,
                        payload: {
                            eventData: {
                                deltas: t,
                                manifest: e,
                                noteId: n,
                                editor: {
                                    userId: s,
                                    userType: o,
                                    userName: p
                                }
                            }
                        }
                    })
                }(e.editorDeltasForSignal, e.manifestForSignal, e.selectedNoteId) : m.error("Received notes legacy event but no payload present. eventName: sendNotesToListeners")
            },
            sendCreatedNote: function(t, e) {
                e ? l.B.emit(d.Z.internalEvents.outgoingEvent, {
                    module: "notes",
                    type: d.Z.outboundEvents.types.void,
                    name: d.Z.outboundEvents.eventNames.sendCreatedNote,
                    constraint: d.Z.outboundEvents.constraints.includeSelf,
                    payload: {
                        newNote: {
                            newNote: e.newNote
                        }
                    }
                }) : m.error("Received notes legacy event but no payload present. eventName: sendCreatedNote")
            },
            closeNotesModule: function(t, e) {
                e ? t.dispatch((0,
                u.Z6)(e.moduleName)) : m.error("Received notes legacy event but no payload present. eventName: closeNotesModule")
            },
            sendRename: function(t, e) {
                e ? l.B.emit(d.Z.internalEvents.outgoingEvent, {
                    module: "notes",
                    type: d.Z.outboundEvents.types.void,
                    name: d.Z.outboundEvents.eventNames.sendRename,
                    constraint: d.Z.outboundEvents.constraints.includeSelf,
                    payload: {
                        eventData: {
                            noteId: e.selectedNoteId,
                            noteNewName: e.newName
                        }
                    }
                }) : m.error("Received notes legacy event but no payload present. eventName: sendRename")
            },
            sendDeletedNote: function(t, e) {
                e ? l.B.emit(d.Z.internalEvents.outgoingEvent, {
                    module: "notes",
                    type: d.Z.outboundEvents.types.void,
                    name: d.Z.outboundEvents.eventNames.sendDeletedNote,
                    constraint: d.Z.outboundEvents.constraints.includeSelf,
                    payload: {
                        eventData: {
                            noteId: e.selectedNoteId
                        }
                    }
                }) : m.error("Received notes legacy event but no payload present. eventName: sendDeletedNote")
            },
            broadcastNoteToAll: function(t, e) {
                e ? l.B.emit(d.Z.internalEvents.outgoingEvent, {
                    module: "notes",
                    type: d.Z.outboundEvents.types.void,
                    name: d.Z.outboundEvents.eventNames.broadcastNoteToAll,
                    constraint: d.Z.outboundEvents.constraints.includeSelf,
                    payload: {
                        eventData: {
                            noteId: e.noteId,
                            noteName: e.noteName
                        }
                    }
                }) : m.error("Received notes legacy event but no payload present. eventName: broadcastNoteToAll")
            }
        };
        var C = n("gSzm");
        const f = {
            subscribedToNote: function(t, e) {
                e ? C.S.actionReceived("subscribeToNote", e.eventData) : m.error("Received notes event from RS but no payload present. eventName: subscribedToNote")
            },
            subscribeToNote: function(t, e) {
                e ? C.S.actionReceived("subscribeToNote", e.eventData) : m.error("Received notes event from RS but no payload present. eventName: subscribeToNote")
            },
            notesToListenersSent: function(t, e) {
                e ? C.S.actionReceived("sendNotesToListeners", e.eventData) : m.error("Received notes event from RS but no payload present. eventName: notesToListenersSent")
            },
            sendNotesToListeners: function(t, e) {
                e ? C.S.actionReceived("sendNotesToListeners", e.eventData) : m.error("Received notes event from RS but no payload present. eventName: sendNotesToListeners")
            },
            createdNotesSent: function(t, e) {
                e ? C.S.actionReceived("handleCreateNote", e.newNote) : m.error("Received notes event from RS but no payload present. eventName: createdNotesSent")
            },
            sendCreatedNote: function(t, e) {
                e ? C.S.actionReceived("handleCreateNote", e.newNote) : m.error("Received notes event from RS but no payload present. eventName: sendCreatedNote")
            },
            renameSent: function(t, e) {
                e ? C.S.actionReceived("handleReceivedNewName", e.eventData) : m.error("Received notes event from RS but no payload present. eventName: renameSent")
            },
            sendRename: function(t, e) {
                e ? C.S.actionReceived("handleReceivedNewName", e.eventData) : m.error("Received notes event from RS but no payload present. eventName: sendRename")
            },
            deletedNoteSent: function(t, e) {
                e ? C.S.actionReceived("handleDeleteNote", e.eventData) : m.error("Received notes event from RS but no payload present. eventName: deletedNoteSent")
            },
            sendDeletedNote: function(t, e) {
                e ? C.S.actionReceived("handleDeleteNote", e.eventData) : m.error("Received notes event from RS but no payload present. eventName: sendDeletedNote")
            },
            noteBroadcastedToAll: function(t, e) {
                e ? C.S.actionReceived("handleBroadcastNote", e.eventData) : m.error("Received notes event from RS but no payload present. eventName: noteBroadcastedToAll")
            },
            broadcastNoteToAll: function(t, e) {
                e ? C.S.actionReceived("handleBroadcastNote", e.eventData) : m.error("Received notes event from RS but no payload present. eventName: broadcastNoteToAll")
            }
        };
        var b = n("svWY")
          , v = n("6jGC")
          , w = n("BqyK");
        (0,
        c.sB)("notes", g),
        (0,
        c.HR)("notes", f);
        const y = (0,
        o.P1)([t=>t], (t=>t))
          , x = (0,
        o.wN)(o.PW, b.isEqual)([(t,e)=>{
            const n = t[e];
            return !!(n && n.user_permissions && n.user_permissions.notes_module) && n.user_permissions.notes_module.is_moderator === d.Z.permissionValues.ON
        }
        ], (t=>t))
          , _ = (0,
        o.P1)([function(t) {
            return t && Object.keys(t) && t[Object.keys(t)[0]]
        }
        ], (t=>t))
          , k = (0,
        s.$j)((function(t) {
            const {settings: e, participants: n} = t
              , i = n.list ? n.list : {}
              , s = e.ownData.user_id
              , o = (0,
            v.oh)(t) && (0,
            r.kk)(t, d.Z.roomDefaultPermissions.notes_module)
              , a = (0,
            r.S_)(i, s)
              , p = (0,
            r.BV)(n.list, e.ownData.user_id, e.generalSettings, "notes") === d.Z.permissionValues.ON
              , c = a || p || o;
            return {
                roomData: y(e.roomData),
                isUserNotesModerator: c,
                notesPermissions: x(i, s)
            }
        }
        ))(class extends i.Component {
            constructor(t) {
                super(t),
                this.state = {},
                this.actionReceived = this.actionReceived.bind(this),
                this.onKeyUp = this.onKeyUp.bind(this)
            }
            componentDidMount() {
                C.S.addOnEventReceivedListener(this.actionReceived),
                window.RoomNotes && (this.component = window.RoomNotes.getNotes(this.props.roomData, this.props.isUserNotesModerator))
            }
            componentWillUnmount() {
                C.S.removeOnEventReceivedListener(this.actionReceived)
            }
            actionReceived(t, e) {
                this.component && this.component.child && ("handleReceivedNewName" === t || "handleDeleteNote" === t || "handleCreateNote" === t ? this.component.child.sendStoreEventFromRoom("note", t, e) : "handleBroadcastNote" !== t || this.props.isUserNotesModerator ? "sendNotesToListeners" === t ? this.component.child.sendStoreEventFromRoom("note", "handleReceivedDeltas", e) : "subscribeToNote" === t && this.component.child.sendStoreEventFromRoom("note", t, e) : this.component.child.sendStoreEventFromRoom("note", t, e))
            }
            componentDidUpdate(t, e, n) {
                t.isUserNotesModerator !== this.props.isUserNotesModerator && this.component && this.component.child && this.component.child.sendStoreEventFromRoom("note", "setModerator", {
                    isModerator: this.props.isUserNotesModerator
                })
            }
            onKeyUp(t) {
                37 !== t.keyCode && 39 !== t.keyCode || (t.preventDefault(),
                t.stopPropagation(),
                t.nativeEvent.stopImmediatePropagation())
            }
            render() {
                return (0,
                w.jsx)(i.Fragment, {
                    children: (0,
                    w.jsx)("div", {
                        id: "notesContainer",
                        className: "legacy-component-holder ",
                        onKeyUp: this.onKeyUp,
                        tabIndex: 0,
                        children: (0,
                        w.jsx)("div", {
                            className: "notesContent",
                            children: (0,
                            w.jsx)(a.e, {})
                        })
                    })
                })
            }
        }
        );
        p.Z.setProviderForMethod("isNotesDisplayed", (function(t, e) {
            return {
                isNotesDisplayed: _(t.sideMenu.activeModules)
            }
        }
        ))
    }
    ,
    QITW: (t,e,n)=>{
        "use strict";
        n.d(e, {
            H: ()=>o
        });
        var i = n("t1lN")
          , s = n("ziYR");
        const o = (0,
        i.P1)([t=>t.notes_module, (t,e)=>e], ((t,e)=>Boolean(t && t.visibility && (t.visibility === s.Z.moduleVisibilityValues.INSTRUCTORS && e || t.visibility === s.Z.moduleVisibilityValues.MODERATORS && e || t.visibility === s.Z.moduleVisibilityValues.ALL))))
    }
    ,
    fS4U: (t,e,n)=>{
        "use strict";
        n.d(e, {
            Z: ()=>k
        });
        var i = n("r0ML")
          , s = n("ziYR")
          , o = n("Nm5u")
          , r = n("Axej")
          , a = n("L6BW");
        const p = new (n("4AhL").u)({
            module: "Notifications"
        })
          , c = {
            notifyDeviceMute: function(t, e) {
                e ? a.F.actionReceived(s.Z.notification.container.STAGE, s.Z.sdkOutboundEvents.notifyDeviceMute, e) : p.error("Received stage notification event from SDK but no payload present. eventName: notifyDeviceMute")
            },
            notifyDeviceUnmute: function(t, e) {
                e ? a.F.actionReceived(s.Z.notification.container.STAGE, s.Z.sdkOutboundEvents.notifyDeviceUnmute, e) : p.error("Received stage notification event from SDK but no payload present. eventName: notifyDeviceUnmute")
            },
            notifyMediaTrackEnded: function(t, e) {
                e ? a.F.actionReceived(s.Z.notification.container.STAGE, s.Z.sdkOutboundEvents.notifyMediaTrackEnded, e) : p.error("Received stage notification event from SDK but no payload present. eventName: notifyMediaTrackEnded")
            },
            notifyMissingSelectedDevices: function(t, e) {
                e ? a.F.actionReceived(s.Z.notification.container.STAGE, s.Z.sdkOutboundEvents.notifyMissingSelectedDevices, e) : p.error("Received stage notification event from SDK but no payload present. eventName: notifyMissingSelectedDevices")
            },
            notifyMissingDeviceTypes: function(t, e) {
                e ? a.F.actionReceived(s.Z.notification.container.STAGE, s.Z.sdkOutboundEvents.notifyMissingDeviceTypes, e) : p.error("Received stage notification event from SDK but no payload present. eventName: notifyMissingDeviceTypes")
            }
        };
        n("8atT");
        var l = n("t1lN")
          , d = n("Vptf")
          , h = n("6MZh")
          , A = n("6oez")
          , u = n("dbHG")
          , m = n("MI44")
          , g = n("UmR+")
          , C = n("QSAl")
          , f = n("BqyK");
        const b = i.memo((t=>(0,
        f.jsxs)("div", {
            className: "breakout-message-container",
            children: [(0,
            f.jsx)("div", {
                className: "breakout-message-container-title",
                children: `Instructor ${t.name}:`
            }), (0,
            f.jsx)("div", {
                className: "breakout-message-container-message",
                children: "" + t.message
            })]
        })));
        var v = n("fIjO")
          , w = n("v2iy")
          , y = n("sZRZ");
        (0,
        r.oD)(c);
        const x = ()=>Math.random().toString(36).substring(2)
          , _ = (0,
        l.P1)([t=>t.user_id], (t=>t))
          , k = (0,
        w.compose)((0,
        v.Z)(), (0,
        d.$j)((t=>{
            const {settings: e, participants: n} = t
              , i = n.list ? n.list : {}
              , s = _(e.ownData)
              , o = (0,
            g.S_)(i, s);
            return {
                participant: (0,
                C.vu)(i, s),
                ownId: s,
                isModerator: o,
                hasK12Support: (0,
                g.fl)(e.generalSettings, "k12_support"),
                muteMode: (0,
                g.$H)(e.generalSettings, "mute_mode")
            }
        }
        )))(class extends i.Component {
            constructor(t) {
                super(t),
                this.onNotification = this.onNotification.bind(this),
                this.onContactSupportClick = this.onContactSupportClick.bind(this),
                this.getSupportLink = this.getSupportLink.bind(this),
                this.handleSessionSettingsNotifications = this.handleSessionSettingsNotifications.bind(this),
                this.handleStandardMuteAllNotifications = this.handleStandardMuteAllNotifications.bind(this),
                this.handleStandardIndividualMuteNotification = this.handleStandardIndividualMuteNotification.bind(this),
                this.handleUserMediaStateChangeNotifications = this.handleUserMediaStateChangeNotifications.bind(this),
                this.handleMissingDeviceTypeNotification = this.handleMissingDeviceTypeNotification.bind(this),
                this.handleNotifyMissingSelectedDevices = this.handleNotifyMissingSelectedDevices.bind(this),
                a.F.addOnEventReceivedListener(s.Z.notification.container.STAGE, this.onNotification)
            }
            componentWillUnmount() {
                a.F.removeOnEventReceivedListener(s.Z.notification.container.STAGE, this.onNotification)
            }
            onNotification(t, e) {
                switch (t) {
                case s.Z.sdkOutboundEvents.notifyDeviceMute:
                    this.props.dispatch((0,
                    m.wN)(s.Z.notification.container.STAGE, {
                        id: e.deviceType + "-device-mute",
                        title: `Your ${e.deviceType} device is muted. Try to change your device in settings, `,
                        actionButtons: [{
                            id: x(),
                            text: this.props.t("settingsPopupContactSupport"),
                            onClick: this.onContactSupportClick,
                            classes: "btn-clear"
                        }],
                        type: s.Z.notification.type.INFO,
                        additionalContent: this.getSupportLink()
                    }, !1));
                    break;
                case s.Z.sdkOutboundEvents.notifyDeviceUnmute:
                    this.props.dispatch((0,
                    m.FV)(s.Z.notification.container.STAGE, e.deviceType + "-device-mute")),
                    this.props.dispatch((0,
                    m.wN)(s.Z.notification.container.STAGE, {
                        id: e.deviceType + "-device-unmute",
                        title: `Your ${e.deviceType} device is un-muted.`,
                        type: s.Z.notification.type.SUCCESS
                    }, !1)),
                    setTimeout((()=>{
                        this.props.dispatch((0,
                        m.FV)(s.Z.notification.container.STAGE, e.deviceType + "-device-unmute"))
                    }
                    ), 5e3);
                    break;
                case s.Z.sdkOutboundEvents.notifyMediaTrackEnded:
                    const t = this.props.t(e.mediaType) || e.mediaType;
                    this.props.dispatch((0,
                    m.wN)(s.Z.notification.container.STAGE, {
                        id: e.mediaType + "-track-end",
                        title: `${this.props.t("Your")} ${t} ${this.props.t("stoppedWorking")}`,
                        actionButtons: [{
                            id: x(),
                            text: this.props.t("settingsPopupContactSupport"),
                            onClick: this.onContactSupportClick,
                            classes: "btn-clear"
                        }],
                        type: s.Z.notification.type.INFO,
                        additionalContent: this.getSubmitLogsAndRejoin()
                    }, !1));
                    break;
                case s.Z.notification.names.breakoutInstructorMessage:
                    this.props.dispatch((0,
                    m.wN)(s.Z.notification.container.SIDE_STAGE, {
                        id: "breakout-instructor-message-" + e.id,
                        title: (0,
                        f.jsx)(b, {
                            name: e.name,
                            message: e.message
                        }),
                        actionButtons: [],
                        type: s.Z.notification.type.MESSAGE,
                        timeout: 10,
                        isSideNotification: !0
                    }, !0));
                    break;
                case s.Z.sdkOutboundEvents.notifyMissingSelectedDevices:
                    this.handleNotifyMissingSelectedDevices(e);
                    break;
                case s.Z.sdkOutboundEvents.notifyMissingDeviceTypes:
                    this.handleMissingDeviceTypeNotification(e);
                    break;
                case s.Z.sdkOutboundEvents.allParticipantsMuted:
                    this.handleStandardMuteAllNotifications(e);
                    break;
                case s.Z.sdkOutboundEvents.participantMuted:
                    this.handleStandardIndividualMuteNotification(e);
                    break;
                case s.Z.sdkOutboundEvents.sessionSettingsChanged:
                    this.handleSessionSettingsNotifications(e);
                    break;
                case s.Z.sdkOutboundEvents.userMediaStateChanged:
                    this.handleUserMediaStateChangeNotifications(e)
                }
            }
            handleNotifyMissingSelectedDevices(t) {
                const e = t.missingDevices ? t.missingDevices.join(", ") : "unknown device";
                this.props.dispatch((0,
                m.wN)(s.Z.notification.container.STAGE, {
                    id: "selected-device-missing",
                    title: `Your ${e} ${t.missingDevices && t.missingDevices.length > 1 ? "are missing" : "is missing"}. Update your device settings `,
                    actionButtons: [{
                        id: x(),
                        text: this.props.t("settingsPopupContactSupport"),
                        onClick: this.onContactSupportClick,
                        classes: "btn-clear"
                    }],
                    type: s.Z.notification.type.INFO,
                    additionalContent: this.getSupportLink()
                }, !1))
            }
            handleMissingDeviceTypeNotification(t) {
                const e = t.missingDevices && t.missingDevices.length > 0 && t.missingDevices.includes(s.Z.deviceTypeNames.audioOutput)
                  , n = t.missingDeviceTypes ? t.missingDeviceTypes.join(", ") : "unknown";
                this.props.dispatch((0,
                m.wN)(s.Z.notification.container.STAGE, {
                    id: "device-type-missing",
                    title: `Could not find any device of the following ${t.missingDeviceTypes && t.missingDeviceTypes.length > 1 ? "types" : "type"}: ${n}.`,
                    actionButtons: [{
                        id: x(),
                        text: this.props.t("settingsPopupContactSupport"),
                        onClick: this.onContactSupportClick,
                        classes: "btn-clear"
                    }],
                    type: e ? s.Z.notification.type.ERROR : s.Z.notification.type.INFO,
                    additionalContent: this.getSupportLink()
                }, !1))
            }
            handleUserMediaStateChangeNotifications(t) {
                const e = this.props.participant.webcam_state === s.Z.mediaDeviceState.UNLIVE
                  , n = this.props.participant.mic_state === s.Z.mediaDeviceState.UNLIVE
                  , i = t.media_value === s.Z.mediaDeviceState.DISABLED_LIVE;
                if (t && Number(t.participant_id) === Number(this.props.ownId) && (t.media_type !== s.Z.mediaStateTypes.webcam_state || !this.props.isMobile)) {
                    let o = null;
                    t.media_type === s.Z.mediaStateTypes.liveMediaState ? o = this.props.t(t.media_value === s.Z.liveMediaState.UNLIVE ? "youHaveBeenSetToViewerMode" : "youAreNowInLiveMode") : t.media_type === s.Z.mediaStateTypes.webcam_state && t.media_value === s.Z.liveMediaState.UNLIVE ? this.props.muteMode === s.Z.muteMode.HARD && (o = this.props.t("videoStreamStoppedByInstructor" + y.k.mode)) : t.media_type === s.Z.mediaStateTypes.webcam_state && i && e ? o = this.props.t("videoStreamNoLongerDisabledInstructor" + y.k.mode) : t.media_type === s.Z.mediaStateTypes.mic_state && i && n ? o = this.props.t("microphoneNoLongerDisabledInstructor" + y.k.mode) : t.media_type === s.Z.mediaStateTypes.mic_state && this.props.muteMode === s.Z.muteMode.HARD && t.media_value === s.Z.liveMediaState.UNLIVE && (o = this.props.t("microphoneMutedBytInstructor" + y.k.mode)),
                    o && this.props.dispatch((0,
                    m.wN)(s.Z.notification.container.STAGE, {
                        id: t.media_type + "-device",
                        title: o,
                        actionButtons: [],
                        hideCloseButton: !0,
                        type: s.Z.notification.type.DARK,
                        timeout: 6
                    }, !1))
                }
            }
            handleStandardIndividualMuteNotification(t) {
                !this.props.participant || this.props.participant.user_id !== Number(t.user_id) || this.props.participant.live_media_state === s.Z.liveMediaState.UNLIVE || t.media_type === s.Z.mediaStateTypes.webcam_state && this.props.isMobile || this.props.dispatch((0,
                m.wN)(s.Z.notification.container.STAGE, {
                    id: t.media_type + "-device",
                    title: t.media_type === s.Z.mediaStateTypes.mic_state ? "You have been muted, click the microphone icon to talk" : this.props.t("yourCameraHasBeenDisabledByHost" + y.k.mode),
                    actionButtons: [],
                    hideCloseButton: !0,
                    type: s.Z.notification.type.DARK,
                    timeout: 6
                }, !1))
            }
            handleStandardMuteAllNotifications(t) {
                !this.props.participant || !t || this.props.participant.user_id !== t.user_id || t.media_type === s.Z.mediaStateTypes.webcam_state && this.props.isMobile ? !this.props.participant || this.props.participant.user_id === t.user_id || this.props.participant.live_media_state === s.Z.liveMediaState.UNLIVE || t.media_type === s.Z.mediaStateTypes.webcam_state && this.props.isMobile || this.props.dispatch((0,
                m.wN)(s.Z.notification.container.STAGE, {
                    id: t.media_type + "-device",
                    title: t.media_type === s.Z.mediaStateTypes.mic_state ? "You have been muted, click the microphone icon to talk" : this.props.t("yourCameraHasBeenDisabledByHost" + y.k.mode),
                    actionButtons: [],
                    hideCloseButton: !0,
                    type: s.Z.notification.type.DARK,
                    timeout: 6
                }, !1)) : this.props.dispatch((0,
                m.wN)(s.Z.notification.container.STAGE, {
                    id: t.media_type + "-device",
                    title: "Participants' " + (t.media_type === s.Z.mediaStateTypes.mic_state ? "microphones have been muted" : "webcams have been disabled"),
                    actionButtons: [],
                    hideCloseButton: !0,
                    type: s.Z.notification.type.DARK,
                    timeout: 6
                }, !1))
            }
            handleSessionSettingsNotifications(t) {
                if (!this.props.isModerator && this.props.participant.live_media_state !== s.Z.liveMediaState.UNLIVE) {
                    let e = null;
                    t && "mute_all_mics" === t.changedRoomSetting ? t.roomSettingValue === s.Z.permissionValues.ON ? e = this.props.t("microphoneMutedBytInstructor" + y.k.mode) : t.roomSettingValue === s.Z.permissionValues.OFF && (e = this.props.t("microphoneNoLongerDisabledInstructor" + y.k.mode)) : t && "mute_all_cams" === t.changedRoomSetting && (e = this.props.t(t.roomSettingValue === s.Z.permissionValues.ON ? "videoStreamStoppedByInstructor" + y.k.mode : "videoStreamNoLongerDisabledInstructor" + y.k.mode)),
                    e && this.props.dispatch((0,
                    m.wN)(s.Z.notification.container.STAGE, {
                        id: t.media_type + "-device",
                        title: e,
                        actionButtons: [],
                        hideCloseButton: !0,
                        type: s.Z.notification.type.DARK,
                        timeout: 6
                    }, !1))
                }
            }
            onContactSupportClick() {
                this.props.dispatch(this.props.hasK12Support ? (0,
                h.U)("SubmitSupportLogsPopup", {
                    popupTitle: this.props.t("settingsPopupContactSupport"),
                    popupContent: (0,
                    f.jsx)(A.Z, {}),
                    popupLeftButtons: [],
                    popupRightButtons: [],
                    shouldDisplayCloseIcon: !0
                }) : (0,
                h.U)("ContactSupportPopup", {
                    popupTitle: this.props.t("settingsPopupContactSupport"),
                    popupContent: (0,
                    f.jsx)(u.Z, {}),
                    popupLeftButtons: [],
                    popupRightButtons: []
                }))
            }
            getSubmitLogsAndRejoin() {
                return (0,
                f.jsx)("span", {
                    className: "device-notification-help",
                    children: this.props.t("andQuitYourBrowserAndThenRejoin")
                })
            }
            getSupportLink() {
                return (0,
                f.jsxs)("span", {
                    className: "device-notification-help",
                    children: ["or checkout this", (0,
                    f.jsx)("a", {
                        className: "device-notification-support-link",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: "https://support.newrow.com/en/article/manage-your-device-settings",
                        children: "support page"
                    })]
                })
            }
            render() {
                return (0,
                f.jsx)(o.Z, {
                    isMobile: this.props.isMobile,
                    containerName: s.Z.notification.container.STAGE
                })
            }
        }
        )
    }
    ,
    "2vZU": (t,e,n)=>{
        "use strict";
        n.d(e, {
            Z: ()=>Oe
        });
        var i, s = n("r0ML"), o = n("Vptf"), r = n("U9yb"), a = n("mAh1"), p = n("LgT2"), c = n("ziYR"), l = n("Pc05"), d = n.n(l);
        function h() {
            return (h = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var A, u = s.forwardRef((function(t, e) {
            var n = t.title
              , o = t.titleId
              , r = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return s.createElement("svg", h({
                id: "Capa_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                viewBox: "0 0 507.451 507.45",
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": o
            }, r), n ? s.createElement("title", {
                id: o
            }, n) : null, i || (i = s.createElement("g", null, s.createElement("g", {
                id: "settings"
            }, s.createElement("path", {
                d: "M440.813,280.5c0-7.65,2.55-15.3,2.55-25.5s0-17.85-2.55-25.5l53.55-43.35c5.1-5.1,5.1-10.2,2.55-15.3l-51-89.25 c-2.55-2.55-7.649-5.1-15.3-2.55l-63.75,25.5c-12.75-10.2-28.05-17.85-43.35-25.5l-10.2-66.3C315.863,5.1,308.212,0,303.113,0 h-102c-5.101,0-12.75,5.1-12.75,10.2l-10.2,68.85c-15.3,5.1-28.05,15.3-43.35,25.5l-61.2-25.5c-7.65-2.55-12.75,0-17.851,5.1 l-51,89.25c-2.55,2.55,0,10.2,5.1,15.3l53.55,40.8c0,7.65-2.55,15.3-2.55,25.5s0,17.85,2.55,25.5l-53.55,43.35 c-5.1,5.101-5.1,10.2-2.55,15.301l51,89.25c2.55,2.55,7.649,5.1,15.3,2.55l63.75-25.5c12.75,10.2,28.05,17.85,43.35,25.5 l10.2,66.3c0,5.1,5.1,10.2,12.75,10.2h102c5.101,0,12.75-5.101,12.75-10.2l10.2-66.3c15.3-7.65,30.6-15.3,43.35-25.5l63.75,25.5 c5.101,2.55,12.75,0,15.301-5.101l51-89.25c2.55-5.1,2.55-12.75-2.551-15.3L440.813,280.5z M252.113,344.25 c-48.45,0-89.25-40.8-89.25-89.25s40.8-89.25,89.25-89.25s89.25,40.8,89.25,89.25S300.563,344.25,252.113,344.25z"
            })))))
        }
        ));
        function m() {
            return (m = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var g = s.forwardRef((function(t, e) {
            var n = t.title
              , i = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return s.createElement("svg", m({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 68.7 68.7",
                style: {
                    enableBackground: "new 0 0 68.7 68.7"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": i
            }, o), n ? s.createElement("title", {
                id: i
            }, n) : null, A || (A = s.createElement("g", {
                id: "_x33_r6LBk.tif"
            })), s.createElement("path", {
                id: "banUserOn.png_1_",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#E42525"
                },
                d: "M34.3,0.5c18.7,0,33.9,15.2,33.9,33.9 S53,68.4,34.3,68.4S0.3,53.2,0.3,34.5S15.5,0.5,34.3,0.5z"
            }), s.createElement("path", {
                id: "banUserOn.png",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#FFFFFF"
                },
                d: "M11.5,28.4h45.8v11.6H11.5V28.4z"
            }))
        }
        ));
        n("GLL4");
        var C = n("TDzD")
          , f = n("BqyK");
        function b(t) {
            const {item: e, index: n} = t
              , i = (t,e)=>{
                "function" == typeof t && t(e)
            }
            ;
            let s = "permission-item-" + n;
            return e.id ? s = e.id : e.desc && (s = (0,
            C.rX)(e.desc)),
            (0,
            f.jsxs)("li", {
                className: `settings-list-item clearFix ${e.classes ? e.classes : ""}\n        ${e.disabled ? "temporarily-disabled" : ""}`,
                id: s,
                title: e.desc,
                role: e.role || "menuitem",
                tabIndex: e.tabIndex || 0,
                onKeyDown: t=>((t,e,n)=>{
                    "Enter" !== t.key && " " !== t.key || i(e, n)
                }
                )(t, e.onClick, e.params),
                onClick: ()=>i(e.onClick, e.params),
                children: [(0,
                f.jsxs)("span", {
                    className: "box-item participant-settings-box-item",
                    children: [" ", e.icon, " "]
                }), (0,
                f.jsxs)("div", {
                    className: "settings-list-permission-description-wrapper",
                    children: [(0,
                    f.jsx)("span", {
                        className: "permission-description",
                        children: e.desc
                    }), (0,
                    f.jsx)("span", {
                        className: "participant-settings-box-item-underline",
                        children: " "
                    })]
                }), (0,
                f.jsx)("span", {
                    className: "permission-secondary-description",
                    children: e.secondaryDesc
                }), e.content]
            }, "settings-list-item-" + n)
        }
        n("5N2E");
        var v = n("jMeI")
          , w = n("fIjO")
          , y = n("+QeV");
        const x = t=>!(!t || !t.participant) && (!!t.isBreakoutRoom || t.ownUserId === t.participant.user_id || (0,
        y.Rz)(t.participant));
        class _ extends s.Component {
            constructor(t) {
                super(t),
                this.changeUserPermissions = this.changeUserPermissions.bind(this),
                this.toggleToViewOnly = this.toggleToViewOnly.bind(this),
                this.checkIfViewOnlyIsActive = this.checkIfViewOnlyIsActive.bind(this),
                this.onRemoveParticipant = this.onRemoveParticipant.bind(this),
                this.onCancelButtonClick = this.onCancelButtonClick.bind(this),
                this.renderShortenedNameIfNeeded = this.renderShortenedNameIfNeeded.bind(this),
                this.handleListKeyDown = this.handleListKeyDown.bind(this),
                this.setModerator = this.setModerator.bind(this),
                this.setCaptioner = this.setCaptioner.bind(this),
                this.morePermissions = this.morePermissions.bind(this),
                this.demoteToViewOnly = this.demoteToViewOnly.bind(this),
                this.removeFromRoom = this.removeFromRoom.bind(this),
                this.getPermissionList = this.getPermissionList.bind(this),
                this.listRef = (0,
                s.createRef)(),
                this.state = {
                    currentOption: null
                },
                this.permissionsList = this.getPermissionList(this.props)
            }
            getPermissionList(t) {
                return x(t) ? [{
                    key: "set-captioner",
                    action: this.setCaptioner
                }] : [{
                    key: "set-moderator",
                    action: this.setModerator
                }, {
                    key: "more-permissions",
                    action: this.morePermissions
                }, {
                    key: "remove-from-room",
                    action: this.removeFromRoom
                }]
            }
            componentDidMount() {
                this.listRef.current && this.listRef.current.focus(),
                this.setState({
                    currentOption: this.permissionsList[0].key
                })
            }
            setModerator() {
                this.changeUserPermissions(c.Z.partialPermissionsValue.moderator),
                this.setState({
                    currentOption: "set-moderator"
                })
            }
            setCaptioner() {
                this.changeUserPermissions(c.Z.partialPermissionsValue.captioner),
                this.setState({
                    currentOption: "set-captioner"
                })
            }
            morePermissions() {
                this.props.openParticipantsPermissionsPopup(),
                this.setState({
                    currentOption: "more-permissions"
                })
            }
            demoteToViewOnly() {
                this.toggleToViewOnly(c.Z.partialPermissionsValue.moderator),
                this.setState({
                    currentOption: "demote-to-view-only"
                })
            }
            removeFromRoom() {
                this.props.removeParticipantFromRoomPopup(),
                this.setState({
                    currentOption: "remove-from-room"
                })
            }
            changeUserPermissions(t) {
                this.props.changeUserPermissions && (this.props.isModerator && t !== c.Z.partialPermissionsValue.moderator && t !== c.Z.partialPermissionsValue.captioner || this.props.changeUserPermissions(t))
            }
            onRemoveParticipant() {
                this.props.onRemoveParticipant()
            }
            onCancelButtonClick() {
                this.props.dismissParticipantsPermissionsPopup()
            }
            toggleToViewOnly(t) {
                this.props.isModerator || t !== c.Z.partialPermissionsValue.moderator ? (this.props.changeUserPermissions(t),
                this.props.toggleViewOnly(t)) : this.props.toggleViewOnly(t)
            }
            checkIfViewOnlyIsActive() {
                return !!this.props.permissions && Object.values(this.props.permissions).includes(c.Z.permissionValues.ON)
            }
            renderShortenedNameIfNeeded(t="") {
                return t.length > 7 ? t.substring(0, 7).concat("..") : t
            }
            selectNextOption() {
                const t = this.permissionsList.findIndex((({key: t})=>t === this.state.currentOption))
                  , e = -1 !== t && t < this.permissionsList.length - 1 ? t + 1 : 0;
                this.setState({
                    currentOption: this.permissionsList[e] ? this.permissionsList[e].key : 0
                })
            }
            selectPreviousOption() {
                const t = this.permissionsList.findIndex((({key: t})=>t === this.state.currentOption))
                  , e = t > 0 ? t - 1 : this.permissionsList.length - 1;
                this.setState({
                    currentOption: this.permissionsList[e] ? this.permissionsList[e].key : 0
                })
            }
            executeCurrentOptionAction() {
                const t = this.permissionsList.find((({key: t})=>t === this.state.currentOption));
                t && "function" == typeof t.action && !t.disabled && t.action()
            }
            closeContent() {
                this.setState({
                    currentOption: null
                }),
                "function" == typeof this.props.onClose && this.props.onClose()
            }
            handleListKeyDown(t) {
                switch (t.key) {
                case "ArrowDown":
                case "ArrowRight":
                    this.selectNextOption();
                    break;
                case "ArrowUp":
                case "ArrowLeft":
                    this.selectPreviousOption();
                    break;
                case "Escape":
                    t.preventDefault(),
                    t.stopPropagation(),
                    t.nativeEvent.stopImmediatePropagation(),
                    this.closeContent();
                    break;
                case "Enter":
                    t.preventDefault(),
                    this.executeCurrentOptionAction()
                }
            }
            render() {
                const t = x(this.props)
                  , e = {
                    id: "participant-permission-item-set-moderator",
                    classes: d()("full-moderation-container participant-permissions-partial-moderation-item moderation-item", {
                        highlighted: "set-moderator" === this.state.currentOption
                    }),
                    desc: `${this.props.t("permissionsSet")} ${this.props.t("permissionsModerator")}`,
                    params: c.Z.partialPermissionsValue.moderator,
                    isActive: this.props.participant && (!0 === Boolean(this.props.participant.is_moderator) || this.props.participant.is_moderator === c.Z.permissionValues.ON),
                    onClick: this.setModerator,
                    disabled: this.props.isViewOnly || this.props.isBreakoutActive || this.props.isBreakoutRoom,
                    tabIndex: -1
                }
                  , n = {
                    id: "participant-permission-item-set-captioner",
                    classes: d()("full-moderation-container participant-permissions-partial-moderation-item moderation-item", {
                        highlighted: "set-captioner" === this.state.currentOption
                    }),
                    desc: `${this.props.t("permissionsSet")} ${this.props.t("permissionsCaptioner")}`,
                    params: c.Z.partialPermissionsValue.captioner,
                    isActive: this.props.participant && this.props.participant.is_captioner,
                    onClick: this.setCaptioner,
                    disabled: this.props.isViewOnly || this.props.isBreakoutActive && this.props.isUserInBreakout && !this.props.isBreakoutRoom,
                    tabIndex: -1
                }
                  , i = {
                    id: "participant-permission-item-more-permissions",
                    classes: d()("more-permissions-container participant-permissions-partial-moderation-item moderation-item", {
                        highlighted: "more-permissions" === this.state.currentOption
                    }),
                    desc: this.props.t("morePermissions"),
                    onClick: this.morePermissions,
                    icon: (0,
                    f.jsx)(u, {
                        className: "participant-icon-more-settings"
                    }),
                    tabIndex: -1
                }
                  , o = {
                    id: "participant-permission-item-remove-from-room",
                    classes: d()("remove-from-room-container participant-permissions-partial-moderation-item moderation-item", {
                        highlighted: "remove-from-room" === this.state.currentOption
                    }),
                    desc: this.props.t("removeFromRoom"),
                    onClick: this.removeFromRoom,
                    icon: (0,
                    f.jsx)(g, {
                        className: "participant-icon-remove-from-room"
                    }),
                    tabIndex: -1
                };
                return (0,
                f.jsx)("div", {
                    className: "participant-permissions-container",
                    children: (0,
                    f.jsx)("ul", {
                        className: "participant-permissions-wrapper",
                        tabIndex: -1,
                        role: "menu",
                        ref: this.listRef,
                        "aria-activedescendant": "participant-permission-item-" + this.state.currentButton,
                        onKeyDown: this.handleListKeyDown,
                        children: t ? (0,
                        f.jsx)(v.Z, {
                            item: n,
                            index: 0
                        }) : (0,
                        f.jsxs)(s.Fragment, {
                            children: [(0,
                            f.jsx)(v.Z, {
                                item: e,
                                index: 0
                            }), !this.props.isBreakoutRoom && (0,
                            f.jsxs)(f.Fragment, {
                                children: [this.props.isClosedCaptioningActive && (0,
                                f.jsx)(v.Z, {
                                    item: n,
                                    index: 0
                                }), this.props.settingsVisible ? (0,
                                f.jsx)(b, {
                                    item: i,
                                    index: 1
                                }) : null, (0,
                                f.jsx)("div", {
                                    className: "participant-permissions-divisor"
                                }), (0,
                                f.jsx)(b, {
                                    item: o,
                                    index: 3
                                })]
                            })]
                        })
                    })
                })
            }
        }
        _.defaultProps = {
            permissions: {
                screen_share: !1,
                notes: !1,
                whiteboard: !1,
                files: !1
            },
            isModerator: !1
        };
        const k = (0,
        w.Z)()(_);
        var S = n("UmR+")
          , E = n("t1lN")
          , B = n("svWY")
          , I = n("pLtp")
          , O = n("Fna7")
          , N = (n("iaY/"),
        n("6P3E"),
        n("S1x0"));
        const D = (0,
        E.P1)([t=>t], (t=>t))
          , M = (0,
        E.P1)((t=>t.user_id), (t=>t))
          , P = (0,
        o.$j)((()=>{
            const t = (0,
            S.Pb)();
            return (e,n)=>{
                const {participants: i, settings: s} = e;
                return {
                    browserFocusPermission: (0,
                    S.fl)(s.generalSettings, "browser_focus_participant_list"),
                    analyticsModule: D(s.roomSettings.analytics_module),
                    participantIsModerator: t(i.list, n.participantId),
                    ownUserId: M(s.ownData)
                }
            }
        }
        ))(class extends s.Component {
            renderIcon() {
                return (0,
                f.jsxs)(s.Fragment, {
                    children: [(0,
                    f.jsx)("div", {
                        className: this.props.className,
                        "data-tip": "react-tooltip",
                        "data-for": "react-tooltip-participant-focused-wrapper",
                        children: this.props.icon ? this.props.icon : (0,
                        f.jsx)("div", {
                            className: this.props.iconClassName
                        })
                    }), (0,
                    f.jsx)(N.Z, {
                        id: "react-tooltip-participant-focused-wrapper",
                        className: "participant-focused-tooltip",
                        type: "light",
                        effect: "solid",
                        "aria-haspopup": "true",
                        children: this.props.tooltipText
                    })]
                })
            }
            render() {
                return (0,
                f.jsx)(s.Fragment, {
                    children: !this.props.participantIsModerator && this.props.ownUserId !== this.props.participantId && 0 === this.props.participantIsFocused && this.props.browserFocusPermission && this.renderIcon()
                })
            }
        }
        );
        var j = n("pbLZ")
          , R = (n("aofU"),
        n("G6fJ"))
          , T = n("QSAl")
          , L = n("6MZh")
          , Z = n("OeOp");
        const $ = (t,e,n)=>{
            switch (t) {
            case c.Z.partialPermissionsValue.moderator:
                return e && e.is_moderator;
            case c.Z.partialPermissionsValue.captioner:
                return e && e.is_captioner;
            default:
                return n[t]
            }
        }
        ;
        function U(t) {
            return !!t && ((0,
            C.Rz)(t) || t.is_moderator)
        }
        function V(t) {
            return !!t && ["notes_module", "screen_share_module", "whiteboard_module", "participants_module", "chat_module", "analytics_module", "files_module"].some((e=>t.user_permissions && t.user_permissions[e] && t.user_permissions[e].default_settings && t.user_permissions[e].default_settings.is_moderator === c.Z.permissionValues.ON))
        }
        function F(t) {
            return !!t && t.is_captioner
        }
        function z(t, e, n) {
            if (U(e) && !U(n))
                return -1;
            if (!U(e) && U(n))
                return 1;
            if (V(e) && !V(n))
                return -1;
            if (!V(e) && V(n))
                return 1;
            if (F(e) && !F(n))
                return -1;
            if (!F(e) && F(n))
                return 1;
            if (e && n && e.full_name && n.full_name) {
                const i = e.full_name && e.full_name.toLowerCase()
                  , s = n.full_name && n.full_name.toLowerCase();
                if (t === c.Z.participantsSortingOrder.alphabetical) {
                    if (i < s)
                        return -1;
                    if (i > s)
                        return 1
                } else if (t === c.Z.participantsSortingOrder.timeJoined) {
                    if (e.join_time < n.join_time)
                        return -1;
                    if (e.join_time > n.join_time)
                        return 1
                }
            }
            return 0
        }
        function H(t, e) {
            if (t && e) {
                if (0 === t.time_hand_raised && 0 !== e.time_hand_raised)
                    return 1;
                if (0 !== t.time_hand_raised && 0 === e.time_hand_raised)
                    return -1;
                if (0 !== t.time_hand_raised && 0 !== e.time_hand_raised && t.time_hand_raised < e.time_hand_raised)
                    return -1;
                if (0 !== t.time_hand_raised && 0 !== e.time_hand_raised && t.time_hand_raised > e.time_hand_raised)
                    return 1
            }
            return 0
        }
        var G = n("v2iy")
          , W = n("sZRZ");
        const Y = (0,
        E.P1)([t=>t.generalSettings], (t=>t))
          , q = (0,
        E.wN)(E.PW, B.isEqual)
          , K = q([(t,e)=>{
            const n = {
                notes: e.notes_module && e.notes_module.default_settings && e.notes_module.default_settings.is_moderator ? e.notes_module.default_settings.is_moderator : c.Z.permissionValues.UNSET,
                screen_share: e.screen_share_module && e.screen_share_module.default_settings && e.screen_share_module.default_settings.is_moderator ? e.screen_share_module.default_settings.is_moderator : c.Z.permissionValues.UNSET,
                whiteboard: e.whiteboard_module && e.whiteboard_module.default_settings && e.whiteboard_module.default_settings.is_moderator ? e.whiteboard_module.default_settings.is_moderator : c.Z.permissionValues.UNSET,
                playlist: e.playlist_module && e.playlist_module.default_settings && e.playlist_module.default_settings.is_moderator ? e.playlist_module.default_settings.is_moderator : c.Z.permissionValues.UNSET,
                participants: e.participants_module && e.participants_module.visibility ? e.participants_module.visibility : c.Z.permissionValues.UNSET,
                public_chat: e.chat_module && e.chat_module.default_settings && e.chat_module.default_settings.public_chat ? e.chat_module.default_settings.public_chat : c.Z.permissionValues.UNSET,
                qna_chat: e.chat_module && e.chat_module.default_settings && e.chat_module.default_settings.qna_chat ? e.chat_module.default_settings.qna_chat : c.Z.permissionValues.UNSET,
                start_private_chat: e.chat_module && e.chat_module.default_settings && e.chat_module.default_settings.start_private_chat ? e.chat_module.default_settings.start_private_chat : c.Z.permissionValues.UNSET
            }
              , i = {
                notes: t && t.user_permissions && t.user_permissions.notes_module && t.user_permissions.notes_module.is_moderator ? t.user_permissions.notes_module.is_moderator : c.Z.permissionValues.UNSET,
                screen_share: t && t.user_permissions && t.user_permissions.screen_share_module && t.user_permissions.screen_share_module.is_moderator ? t.user_permissions.screen_share_module.is_moderator : c.Z.permissionValues.UNSET,
                playlist: t && t.user_permissions && t.user_permissions.playlist_module && t.user_permissions.playlist_module.is_moderator ? t.user_permissions.playlist_module.is_moderator : c.Z.permissionValues.UNSET,
                whiteboard: t && t.user_permissions && t.user_permissions.whiteboard_module && t.user_permissions.whiteboard_module.is_moderator ? t.user_permissions.whiteboard_module.is_moderator : c.Z.permissionValues.UNSET,
                participants: t && t.user_permissions && t.user_permissions.participants_module && t.user_permissions.participants_module.is_moderator ? t.user_permissions.participants_module.is_moderator : c.Z.permissionValues.UNSET,
                public_chat: t && t.user_permissions && t.user_permissions.chat_module && t.user_permissions.chat_module.public_chat ? t.user_permissions.chat_module.public_chat.toLowerCase() : c.Z.permissionValues.UNSET,
                qna_chat: t && t.user_permissions && t.user_permissions.chat_module && t.user_permissions.chat_module.qna_chat ? t.user_permissions.chat_module.qna_chat.toLowerCase() : c.Z.permissionValues.UNSET,
                start_private_chat: t && t.user_permissions && t.user_permissions.chat_module && t.user_permissions.chat_module.start_private_chat ? t.user_permissions.chat_module.start_private_chat.toLowerCase() : c.Z.permissionValues.UNSET
            };
            return {
                notes: i.notes === c.Z.permissionValues.UNSET ? n.notes : i.notes,
                screen_share: i.screen_share === c.Z.permissionValues.UNSET ? n.screen_share : i.screen_share,
                playlist: i.playlist === c.Z.permissionValues.UNSET ? n.playlist : i.playlist,
                whiteboard: i.whiteboard === c.Z.permissionValues.UNSET ? n.whiteboard : i.whiteboard,
                participants: i.participants === c.Z.permissionValues.UNSET ? n.participants : i.participants,
                public_chat: i.public_chat === c.Z.permissionValues.UNSET ? n.public_chat : i.public_chat,
                qna_chat: i.qna_chat === c.Z.permissionValues.UNSET ? n.qna_chat : i.qna_chat,
                start_private_chat: i.start_private_chat === c.Z.permissionValues.UNSET ? n.start_private_chat : i.start_private_chat
            }
        }
        ], (t=>t))
          , Q = q([t=>t], (t=>t))
          , J = (0,
        E.P1)([t=>t.generalSettings], (t=>t))
          , X = (0,
        G.compose)((0,
        w.Z)(), (0,
        o.$j)((function(t, e) {
            const {settings: n, participants: i} = t
              , s = Q((i.list ? i.list : {})[e.participantId])
              , o = Y(n)
              , r = !(0,
            S.kk)(t, c.Z.roomDefaultPermissions.chat_module)
              , a = (0,
            S.kk)(t, c.Z.roomDefaultPermissions.closed_captioning_module);
            return {
                participant: s,
                permissions: K(s, o),
                moduleSettings: J(n),
                hiddenChat: r,
                isClosedCaptioningActive: a
            }
        }
        )))(class extends s.Component {
            constructor(t) {
                super(t),
                this.changeParticipantPermissions = this.changeParticipantPermissions.bind(this),
                this.toggleViewOnly = this.toggleViewOnly.bind(this),
                this.moduleNotVisible = this.moduleNotVisible.bind(this),
                this.privateChatNotVisible = this.privateChatNotVisible.bind(this)
            }
            changeParticipantPermissions(t) {
                const e = !!this.props.participant && this.props.participant.is_moderator;
                let n = !!this.props.participant && this.props.participant.is_captioner;
                const {permissions: i} = this.props;
                let s = $(t, this.props.participant, i);
                if ("object" == typeof t && t.permKey) {
                    const {permKey: e} = t;
                    s = $(e, this.props.participant, i)
                }
                const o = s && (s === c.Z.permissionValues.ON ? c.Z.permissionValues.OFF : c.Z.permissionValues.ON);
                if (this.props.participant)
                    if (t !== c.Z.partialPermissionsValue.is_moderator || this.props.isBreakoutActive)
                        if (t === c.Z.partialPermissionsValue.captioner)
                            n = !n,
                            this.props.dispatch((0,
                            r.c9)(this.props.participant.user_id, this.props.participant.user_type, this.props.room_id, n));
                        else if ("object" == typeof t) {
                            const {permKey: e, permValue: n} = t;
                            this.props.dispatch((0,
                            r.o1)(this.props.participant.user_id, this.props.room_id, n + "_module", e, o))
                        } else
                            this.props.dispatch((0,
                            r.o1)(this.props.participant.user_id, this.props.room_id, t + "_module", "is_moderator", o));
                    else
                        this.props.dispatch((0,
                        r.Yq)(this.props.participant.user_id, this.props.participant.user_type, this.props.room_id, !e))
            }
            toggleViewOnly(t) {
                this.props.participantIsModerator && this.changeParticipantPermissions(t),
                this.props.toggleViewOnly(t)
            }
            moduleNotVisible(t) {
                return !(!this.props.moduleSettings || !this.props.moduleSettings[t] || this.props.moduleSettings[t].visibility !== c.Z.moduleVisibilityValues.NONE && this.props.moduleSettings[t].is_active !== c.Z.permissionValues.OFF)
            }
            privateChatNotVisible(t) {
                return !(!this.props.moduleSettings || !this.props.moduleSettings[t]) && this.props.moduleSettings[t].start_private_chat === c.Z.permissionValues.OFF
            }
            render() {
                const {participant: t} = this.props
                  , e = {
                    checkboxClasses: "full-moderation-container",
                    listClasses: "participant-permissions-list-container",
                    listItems: [{
                        classes: "participant-permissions-partial-moderation-item moderation-item",
                        desc: `${this.props.t("permissionsSet")} ${this.props.t("permissionsModerator")}`,
                        params: c.Z.partialPermissionsValue.is_moderator,
                        isActive: this.props.participantIsModerator,
                        onClick: this.changeParticipantPermissions,
                        disabled: !this.props.participant || this.props.participant.is_viewOnly || this.props.isBreakoutActive
                    }]
                };
                this.props.isClosedCaptioningActive && e.listItems.push({
                    classes: "participant-permissions-partial-moderation-item moderation-item",
                    desc: `${this.props.t("permissionsSet")} ${this.props.t("permissionsCaptioner")}`,
                    params: c.Z.partialPermissionsValue.captioner,
                    isActive: this.props.participantIsCaptioner,
                    onClick: this.changeParticipantPermissions,
                    disabled: this.props.participant && this.props.participant.is_viewOnly
                });
                const n = {
                    checkboxClasses: "participant-settings-container",
                    listClasses: "participant-permissions-list-container",
                    listItems: [{
                        classes: "default-room-permissions-item",
                        desc: this.props.t("permissionsSettingsWhiteboard"),
                        secondaryDesc: this.props.t("permissionsSettingsWhiteboardSecondaryDesc"),
                        params: c.Z.partialPermissionsValue.whiteboard,
                        isActive: this.props.permissions && this.props.permissions.whiteboard && this.props.permissions.whiteboard === c.Z.permissionValues.ON || this.props.participantIsModerator,
                        onClick: this.changeParticipantPermissions,
                        notVisible: this.moduleNotVisible("whiteboard_module")
                    }, {
                        classes: "default-room-permissions-item",
                        desc: this.props.t("permissionsSettingsPlaySharedFiles"),
                        secondaryDesc: this.props.t("permissionsSettingsPlaySharedFilesSecondaryDesc"),
                        params: c.Z.partialPermissionsValue.playlist,
                        isActive: this.props.permissions && this.props.permissions.playlist && this.props.permissions.playlist === c.Z.permissionValues.ON || this.props.participantIsModerator,
                        onClick: this.changeParticipantPermissions,
                        notVisible: this.moduleNotVisible("playlist_module")
                    }, {
                        classes: "default-room-permissions-item",
                        desc: this.props.t("permissionsSettingsScreenShare"),
                        secondaryDesc: this.props.t("permissionsSettingsScreenShareSecondaryDesc"),
                        params: c.Z.partialPermissionsValue.screen_share,
                        isActive: this.props.permissions && this.props.permissions.screen_share && this.props.permissions.screen_share === c.Z.permissionValues.ON || this.props.participantIsModerator,
                        onClick: this.changeParticipantPermissions,
                        notVisible: this.moduleNotVisible("screen_share_module")
                    }, {
                        classes: "default-room-permissions-item",
                        desc: this.props.t("permissionsSettingsWriteNotes"),
                        secondaryDesc: this.props.t("permissionsSettingsWriteNotesSecondaryDesc"),
                        params: c.Z.partialPermissionsValue.notes,
                        isActive: this.props.permissions && this.props.permissions.notes && this.props.permissions.notes === c.Z.permissionValues.ON || this.props.participantIsModerator,
                        onClick: this.changeParticipantPermissions,
                        notVisible: this.moduleNotVisible("notes_module")
                    }, {
                        classes: "default-room-permissions-item",
                        desc: this.props.t("permissionsSettingsParticipantsList" + W.k.mode),
                        secondaryDesc: this.props.t("permissionsSettingsParticipantsListSecondaryDesc" + W.k.mode),
                        params: c.Z.partialPermissionsValue.participants,
                        isActive: this.props.permissions && this.props.permissions.participants && (this.props.permissions.participants === c.Z.permissionValues.ON || this.props.permissions.participants === c.Z.moduleVisibilityValues.ALL) || this.props.participantIsModerator,
                        onClick: this.changeParticipantPermissions,
                        notVisible: this.moduleNotVisible("participants_module")
                    }]
                }
                  , i = {
                    checkboxClasses: "participant-settings-container",
                    titleClasses: "default-room-permissions-title",
                    listClasses: "participant-permissions-list-container",
                    listItems: [{
                        classes: "default-room-permissions-item",
                        desc: this.props.t("chatSettingsGroupChat"),
                        secondaryDesc: this.props.t("chatSettingsGroupChatSecondaryDesc" + W.k.mode),
                        params: {
                            permValue: c.Z.partialPermissionsValue.chat,
                            permKey: "public_chat"
                        },
                        onClick: this.changeParticipantPermissions,
                        isActive: this.props.permissions.public_chat && this.props.permissions.public_chat === c.Z.permissionValues.ON || this.props.participantIsModerator
                    }, {
                        classes: "default-room-permissions-item",
                        desc: this.props.t("chatSettingsAskQuestions"),
                        secondaryDesc: this.props.t("chatSettingsAskQuestionsSecondaryDesc"),
                        params: {
                            permValue: c.Z.partialPermissionsValue.chat,
                            permKey: "qna_chat"
                        },
                        onClick: this.changeParticipantPermissions,
                        isActive: this.props.permissions.qna_chat && this.props.permissions.qna_chat === c.Z.permissionValues.ON || this.props.participantIsModerator
                    }, {
                        classes: "default-room-permissions-item",
                        desc: this.props.t("chatSettingsStart1to1Chat"),
                        secondaryDesc: this.props.t("chatSettingsStart1to1ChatSecondaryDesc" + W.k.mode),
                        params: {
                            permValue: c.Z.partialPermissionsValue.chat,
                            permKey: "start_private_chat"
                        },
                        onClick: this.changeParticipantPermissions,
                        isActive: this.props.permissions.start_private_chat && this.props.permissions.start_private_chat === c.Z.permissionValues.ON || this.props.participantIsModerator
                    }]
                };
                return this.props.t("demoteToViewOnly"),
                (0,
                f.jsxs)(s.Fragment, {
                    children: [(0,
                    f.jsxs)("div", {
                        className: "participant-permissions-popup-content",
                        children: [(0,
                        f.jsx)("div", {
                            className: "participant-permissions-part-wrapper participant-set-moderator-wrapper",
                            children: (0,
                            f.jsx)(Z.Z, {
                                listItems: e.listItems,
                                listClasses: e.listClasses,
                                checkboxClasses: e.checkboxClasses
                            })
                        }), (0,
                        f.jsx)("div", {
                            className: "participant-permissions-part-wrapper participant-default-permissions-wrapper",
                            children: (0,
                            f.jsx)(Z.Z, {
                                listItems: n.listItems.filter((t=>t && !t.notVisible)),
                                checkboxClasses: n.checkboxClasses,
                                listClasses: n.listClasses,
                                title: n.title
                            })
                        }), !this.props.hiddenChat && (0,
                        f.jsxs)("div", {
                            className: "participant-permissions-part-wrapper participant-chat-permissions-wrapper",
                            children: [(0,
                            f.jsx)("p", {
                                className: "chat-permissions-heading",
                                children: this.props.t("chatPermissions")
                            }), (0,
                            f.jsx)(Z.Z, {
                                listItems: i.listItems.filter((t=>!t.notVisible)),
                                checkboxClasses: i.checkboxClasses,
                                listClasses: i.listClasses,
                                disabled: i.disabled,
                                title: i.title
                            })]
                        })]
                    }), (0,
                    f.jsxs)("div", {
                        className: "participant-permissions-popup-footer",
                        children: [(0,
                        f.jsxs)(p.z, {
                            classes: "footer-eject-participant-button btn-red",
                            onClick: this.props.onRemoveParticipant,
                            children: [(0,
                            f.jsx)(g, {
                                className: "participant-icon-remove-from-room"
                            }), this.props.t("removeFromRoom")]
                        }), (0,
                        f.jsx)(p.z, {
                            classes: "footer-close-button",
                            onClick: this.props.onClosePopup,
                            children: this.props.t("popupButtonClose")
                        })]
                    })]
                })
            }
        }
        )
          , tt = (0,
        E.wN)(E.PW, B.isEqual)([t=>t], (t=>t))
          , et = (0,
        E.P1)([t=>t], (t=>t && t.substring(0, t.length - 1)))
          , nt = (0,
        E.P1)([t=>t], (t=>t))
          , it = (0,
        o.$j)(((t,e)=>{
            const {settings: n, participants: i} = t
              , s = i.list ? i.list : {}
              , o = tt(s[e.participantId]);
            let r = !1
              , a = !1;
            return o && (r = (0,
            S.S_)(s, o.user_id),
            a = (0,
            S.r$)(s, o.user_id)),
            {
                participant: o,
                participants: (0,
                T.H3)(s),
                cdn: et(n.roomMetadata.files_url),
                isModerator: r,
                isCaptioner: a,
                room_id: nt(n.roomData.id)
            }
        }
        ))(class extends s.Component {
            constructor(t) {
                super(t),
                this.toggleParticipantsPermissionsDropdown = this.toggleParticipantsPermissionsDropdown.bind(this),
                this.renderParticipants = this.renderParticipants.bind(this),
                this.onClosePopup = this.onClosePopup.bind(this),
                this.state = {
                    isParticipantListShown: !1,
                    participant: this.props.participant
                }
            }
            componentDidUpdate(t) {
                t.participant && !this.props.participant && this.props.dispatch((0,
                L.hj)())
            }
            toggleParticipantsPermissionsDropdown() {}
            changeParticipant(t) {
                this.setState({
                    participant: t
                }),
                this.toggleParticipantsPermissionsDropdown()
            }
            onClosePopup() {
                this.props.dispatch((0,
                L.hj)())
            }
            renderParticipants() {
                const {cdn: t} = this.props;
                return (0,
                f.jsx)("ul", {
                    className: "users-wrapper",
                    children: this.props.participants && Object.values(this.props.participants).map(((e,n)=>(0,
                    f.jsx)(st, {
                        participant: e,
                        avatarStyle: {
                            backgroundImage: `url(${t}/${e && e.avatar ? e.avatar : ""})`
                        },
                        fullName: e && e.full_name,
                        changeActiveParticipant: this.changeParticipant.bind(this, e)
                    }, n)))
                })
            }
            render() {
                const {cdn: t} = this.props
                  , {participant: e} = this.state
                  , n = {
                    backgroundImage: `url(${t}/${e && e.avatar ? e.avatar : ""})`
                };
                return (0,
                f.jsxs)("div", {
                    className: `participant-permissions-popup-container ${this.state.isParticipantListShown ? "popup-content-blur" : ""} `,
                    children: [this.state.isParticipantListShown && (0,
                    f.jsx)("div", {
                        className: "overlay-layer",
                        children: " "
                    }), (0,
                    f.jsxs)("div", {
                        className: "participant-permissions-popup-header",
                        children: [(0,
                        f.jsxs)("div", {
                            className: "participant-header-left-container",
                            children: [(0,
                            f.jsxs)("div", {
                                className: "participant-avatar-name-wrapper",
                                children: [(0,
                                f.jsx)(st, {
                                    fullName: this.state.participant && this.state.participant.full_name,
                                    changeActiveParticipant: this.changeParticipant.bind(this, this.state.participant),
                                    avatarStyle: n
                                }), (0,
                                f.jsx)(p.z, {
                                    tabIndex: -1,
                                    onClick: this.toggleParticipantsPermissionsDropdown,
                                    id: "participant-toggle-permissions-" + (this.state.participant ? this.state.participant.user_id : 0),
                                    classes: "permissions-view-toggle-btn",
                                    children: (0,
                                    f.jsx)("div", {
                                        className: "down-arrow-white icon-grey"
                                    })
                                })]
                            }), (0,
                            f.jsx)(R.UnmountClosed, {
                                isOpened: this.state.isParticipantListShown,
                                className: "participants-list-collapse",
                                children: (0,
                                f.jsx)("div", {
                                    className: "collapse-open-users",
                                    children: this.renderParticipants()
                                })
                            })]
                        }), (0,
                        f.jsx)("div", {
                            className: "participant-header-right-container",
                            children: (0,
                            f.jsx)(p.z, {
                                onClick: this.onClosePopup,
                                children: (0,
                                f.jsx)(j.r, {
                                    className: "participant-permissions-close-btn"
                                })
                            })
                        })]
                    }), (0,
                    f.jsx)(X, {
                        toggleViewOnly: this.props.toggleViewOnly,
                        isViewOnly: this.props.isViewOnly,
                        room_id: this.props.room_id,
                        participantId: this.state.participant && this.state.participant.user_id,
                        participantIsCaptioner: this.props.isCaptioner,
                        participantIsModerator: this.props.isModerator,
                        isBreakoutActive: this.props.isBreakoutActive,
                        isParticipantListShown: this.state.isParticipantListShown,
                        onRemoveParticipant: this.props.onRemoveParticipant,
                        onClosePopup: this.onClosePopup
                    })]
                })
            }
        }
        );
        function st(t) {
            return (0,
            f.jsxs)("li", {
                className: "user-wrapper",
                onClick: t.changeActiveParticipant,
                children: [(0,
                f.jsx)("div", {
                    className: "user-avatar",
                    style: t.avatarStyle,
                    children: " "
                }), (0,
                f.jsx)("p", {
                    className: "user-full-name",
                    children: t.fullName
                })]
            }, t.key)
        }
        var ot = n("6jGC")
          , rt = n("FwFB")
          , at = n("Zt7a");
        function pt() {
            return (pt = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var ct = s.forwardRef((function(t, e) {
            var n = t.title
              , i = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return s.createElement("svg", pt({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 68.7 68.7",
                style: {
                    enableBackground: "new 0 0 68.7 68.7"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": i
            }, o), n ? s.createElement("title", {
                id: i
            }, n) : null, s.createElement("path", {
                id: "Shape_2686_copy_3",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#8D9799"
                },
                d: "M54.8,51.3c3,0,6.8-0.4,6.8-3.4 c0,0,0.4-30,0-30.7c-0.3-3.5-0.5-3.5-3.4-3.4H10.5c-3,0-3.4,0.4-3.4,3.4v30.7c0,3,3.8,3.4,6.8,3.4H0.3v3.4h68.1v-3.4H54.8z  M10.5,17.2h47.7v30.7H10.5V17.2z"
            }))
        }
        ));
        function lt() {
            return (lt = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var dt = s.forwardRef((function(t, e) {
            var n = t.title
              , i = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return s.createElement("svg", lt({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 68.7 68.7",
                style: {
                    enableBackground: "new 0 0 68.7 68.7"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": i
            }, o), n ? s.createElement("title", {
                id: i
            }, n) : null, s.createElement("path", {
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#8F989B"
                },
                d: "M46.9,0.3L20.5,0.2c-3.1,0.3-5.5,3.1-5.2,6.3v55.9 c-0.3,3.2,2.1,5.9,5.2,6.3h26.4c3.2-0.3,5.5-3.1,5.3-6.3V6.5C52.4,3.3,50.1,0.5,46.9,0.3z M46.9,58.1H20.6V10.7h26.3V58.1z"
            }))
        }
        ));
        function ht() {
            return (ht = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var At = s.forwardRef((function(t, e) {
            var n = t.title
              , i = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return s.createElement("svg", ht({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 68.7 68.7",
                style: {
                    enableBackground: "new 0 0 68.7 68.7"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": i
            }, o), n ? s.createElement("title", {
                id: i
            }, n) : null, s.createElement("path", {
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#8D9799"
                },
                d: "M61.5,11.1H7.3c-3.8,0-6.9,3.1-7,6.9v33c0,3.8,3.1,6.9,7,6.9 h54.2c3.8,0,6.9-3.1,7-6.9V18C68.4,14.1,65.3,11.1,61.5,11.1z M59.8,53.6h-51V15.3h51V53.6z"
            }))
        }
        ))
          , ut = n("LQGJ")
          , mt = n("Axej");
        n("Culp");
        const gt = (0,
        G.compose)((0,
        w.Z)(), (0,
        o.$j)())(class extends s.Component {
            constructor(t) {
                super(t),
                this.getUserName = this.getUserName.bind(this),
                this.closePopup = this.closePopup.bind(this)
            }
            getUserName(t) {
                return t && t.split && t.split(" ")[0]
            }
            closePopup() {
                this.props.dispatch((0,
                L.hj)())
            }
            render() {
                return (0,
                f.jsxs)("div", {
                    className: "remove-participant-container",
                    children: [(0,
                    f.jsxs)("div", {
                        className: "remove-participant-container-header",
                        children: [(0,
                        f.jsx)(g, {
                            className: "eject-participant-icon"
                        }), (0,
                        f.jsx)("h1", {
                            className: "remove-participant-heading-text",
                            children: this.props.t("removeParticipant" + W.k.mode)
                        }), (0,
                        f.jsx)(p.z, {
                            onClick: this.closePopup,
                            children: (0,
                            f.jsx)(j.r, {
                                className: "close-icon"
                            })
                        })]
                    }), (0,
                    f.jsx)("div", {
                        className: "remove-participant-container-content",
                        children: (0,
                        f.jsxs)("div", {
                            className: "remove-participant-content-text",
                            children: [this.props.t("areYouSureYouWantTo"), (0,
                            f.jsx)("span", {
                                className: "remove-participant-text-red",
                                children: this.props.t("areYouSureRemove")
                            }), (0,
                            f.jsx)("span", {
                                className: "remove-participant-text-red",
                                children: this.getUserName(this.props.name)
                            }), this.props.t("areYouSureFromTheRoom")]
                        })
                    })]
                })
            }
        }
        );
        var Ct = n("q5Lo")
          , ft = n("wDyN")
          , bt = n("qlhH")
          , vt = n("WCY7")
          , wt = n("xVvj")
          , yt = n("+RdP")
          , xt = n("2cpu");
        const _t = (0,
        E.P1)((t=>t.isActive), (t=>t));
        var kt = n("WynP")
          , St = n("xIgP")
          , Et = n("pdWX")
          , Bt = n("Gwo8")
          , It = n("rMot");
        (0,
        mt.HR)("roomparticipants", a.Z);
        const Ot = (0,
        p.l)()
          , Nt = (0,
        E.wN)(E.PW, B.isEqual)([(t,e)=>{
            const n = {
                notes: e.notes_module && e.notes_module.default_settings && e.notes_module.default_settings.is_moderator ? e.notes_module.default_settings.is_moderator : c.Z.permissionValues.OFF,
                screen_share: e.screen_share_module && e.screen_share_module.default_settings && e.screen_share_module.default_settings.is_moderator ? e.screen_share_module.default_settings.is_moderator : c.Z.permissionValues.OFF,
                whiteboard: e.whiteboard_module && e.whiteboard_module.default_settings && e.whiteboard_module.default_settings.is_moderator ? e.whiteboard_module.default_settings.is_moderator : c.Z.permissionValues.OFF,
                playlist: e.playlist_module && e.playlist_module.default_settings && e.playlist_module.default_settings.is_moderator ? e.playlist_module.default_settings.is_moderator : c.Z.permissionValues.OFF
            };
            if (t && t.user_permissions) {
                const {user_permissions: e} = t
                  , i = {
                    notes: e.notes_module && e.notes_module.is_moderator ? e.notes_module.is_moderator : c.Z.permissionValues.UNSET,
                    screen_share: e.screen_share_module && e.screen_share_module.is_moderator ? e.screen_share_module.is_moderator : c.Z.permissionValues.UNSET,
                    whiteboard: e.whiteboard_module && e.whiteboard_module.is_moderator ? e.whiteboard_module.is_moderator : c.Z.permissionValues.UNSET,
                    playlist: e.playlist_module && e.playlist_module.is_moderator ? e.playlist_module.is_moderator : c.Z.permissionValues.UNSET
                };
                return {
                    notes: i.notes === c.Z.permissionValues.OFF || i.notes === c.Z.permissionValues.ON ? i.notes : n.notes,
                    screen_share: i.screen_share === c.Z.permissionValues.OFF || i.screen_share === c.Z.permissionValues.ON ? i.screen_share : n.screen_share,
                    whiteboard: i.whiteboard === c.Z.permissionValues.OFF || i.whiteboard === c.Z.permissionValues.ON ? i.whiteboard : n.whiteboard,
                    playlist: i.playlist === c.Z.permissionValues.OFF || i.playlist === c.Z.permissionValues.ON ? i.playlist : n.playlist
                }
            }
            return {
                notes: n.notes,
                screen_share: n.screen_share,
                whiteboard: n.whiteboard,
                playlist: n.playlist
            }
        }
        ], (t=>t))
          , Dt = (0,
        E.P1)([t=>t], (t=>t && t.substring(0, t.length - 1)))
          , Mt = (0,
        E.P1)((t=>t.general && t.general.speaker_indicator_type), (t=>t))
          , Pt = (0,
        E.P1)([St.bh], (t=>(null == t ? void 0 : t.type) || "desktop"))
          , jt = (0,
        E.P1)([t=>t ? Object.keys(t).map((e=>t[e])).filter((t=>(0,
        C.ib)(t, [c.Z.liveMediaState.LIVE_INIT, c.Z.liveMediaState.LIVE_SUCCESS]))) : []], (t=>t))
          , Rt = (0,
        E.P1)([jt], (t=>t.length))
          , Tt = (0,
        E.P1)([jt, (t,e)=>(0,
        S.ke)(e.generalSettings, "participants_module", "default_participant_sort")], ((t,e)=>(t.sort(z.bind(null, e)).sort(H),
        t.length > 0 ? t[t.length - 1] : null)))
          , Lt = (0,
        E.P1)((t=>(0,
        S.fl)(t.generalSettings, c.Z.roomSettingsKey.PUSH_TO_UNMUTE)), (t=>t))
          , Zt = (0,
        E.P1)([xt.ec, (t,e,n)=>{
            const {quickPoll: i} = t;
            if (!i)
                return null;
            let s = null;
            return i.answerByStudents && i.answerByStudents[n] && i.answerByStudents[n].isDisplayed && "number" == typeof i.answerByStudents[n].value && (s = i.answerByStudents[n].value),
            {
                pollType: i.pollType,
                isAnonymous: i.isAnonymous,
                isActive: [vt.XO.Active, vt.XO.Presented, vt.XO.InitialActive].includes(i.pollStatus),
                answer: s
            }
        }
        ], ((t,e)=>{
            if (!t || !e)
                return null;
            const {pollType: n, isAnonymous: i, isActive: s, answer: o} = e;
            return !i && s && null !== o ? {
                pollType: n,
                answer: o
            } : null
        }
        ))
          , $t = (0,
        G.compose)((0,
        w.Z)(), (0,
        o.$j)((()=>{
            const t = (0,
            E.P1)(((t,e)=>t[e]), (t=>null != t ? t.is_focused : 1));
            return (e,n)=>{
                const {settings: i, breakout: s, browser_focus: o} = e
                  , r = (0,
                y.iO)(e)
                  , a = (0,
                y.S0)(e, n)
                  , p = (0,
                St.w7)(e)
                  , l = (0,
                ot.Gs)()
                  , d = (0,
                ot.Id)()
                  , h = (0,
                y.eW)(e, n)
                  , A = (0,
                St._W)(e)
                  , u = Zt(e, e.settings.ownData, n.participantId)
                  , m = (0,
                kt.c2)(e, n);
                return {
                    participant: a,
                    isAdmin: h,
                    participants: r,
                    breakoutStatus: (0,
                    kt._R)(e, n),
                    isBreakoutActive: _t(s.info) || (0,
                    kt.oR)(e),
                    isBreakoutV2: (0,
                    kt.t5)(e),
                    isModerator: (0,
                    y.Qc)(e),
                    isClosedCaptioningActive: (0,
                    S.kk)(e, c.Z.roomDefaultPermissions.closed_captioning_module),
                    cdn: Dt(i.roomMetadata.files_url),
                    permissions: Nt(a, p),
                    ownUserId: (0,
                    St.rc)(e),
                    breakoutInfo: (0,
                    ot.Ch)(s),
                    isBreakoutRoom: (0,
                    ot.oh)(e),
                    isParticipantFocused: t(o, n.participantId),
                    breakoutParticipant: l(s.participants, n.participantId),
                    participantIsModerator: (0,
                    y.mP)(e, n),
                    participantIsCaptioner: (0,
                    y.oj)(e, n),
                    room_id: (0,
                    St.ey)(e),
                    room_index: (0,
                    kt.IV)(e, n),
                    settingsVisibility: (0,
                    S.$H)(i.generalSettings, "settings_visibility"),
                    platformType: Pt(e),
                    breakoutModerator: d(s.moderators, n.participantId),
                    speakerIndicatorType: Mt(i.generalSettings),
                    liveParticipantsCount: Rt(r),
                    liveParticipant: Tt(r, i),
                    isWebinarMode: (0,
                    S.gF)(i),
                    isPushToUnmuteRoom: Lt(i),
                    isHardMute: A,
                    quickPollAnswer: u,
                    userInBreakout: m,
                    isMediaPlaying: (0,
                    Bt.nP)(e),
                    muteOnPlay: (0,
                    It.vn)(e)
                }
            }
        }
        )))(class extends s.Component {
            constructor(t) {
                super(t),
                this.dispatchParticipantLiveStateChange = this.dispatchParticipantLiveStateChange.bind(this),
                this.changePermissionsView = this.changePermissionsView.bind(this),
                this.checkUserIsPermittedToSetModeration = this.checkUserIsPermittedToSetModeration.bind(this),
                this.checkUserIsPermittedToSetCaptioner = this.checkUserIsPermittedToSetCaptioner.bind(this),
                this.changeUserPermissions = this.changeUserPermissions.bind(this),
                this.renderParticipantDeviceIcon = this.renderParticipantDeviceIcon.bind(this),
                this.toggleViewOnly = this.toggleViewOnly.bind(this),
                this.dispatchLiveDisableChange = this.dispatchLiveDisableChange.bind(this),
                this.onRemoveParticipant = this.onRemoveParticipant.bind(this),
                this.renderParticipantTopLineName = this.renderParticipantTopLineName.bind(this),
                this.renderParticipantTopLineIcons = this.renderParticipantTopLineIcons.bind(this),
                this.renderParticipantsStreamingButtons = this.renderParticipantsStreamingButtons.bind(this),
                this.renderPermissionsDropdownToggle = this.renderPermissionsDropdownToggle.bind(this),
                this.openParticipantsPermissionsPopup = this.openParticipantsPermissionsPopup.bind(this),
                this.dismissParticipantsPermissionsPopup = this.dismissParticipantsPermissionsPopup.bind(this),
                this.dismissParticipantsRemovePopup = this.dismissParticipantsRemovePopup.bind(this),
                this.removeParticipantFromRoomPopup = this.removeParticipantFromRoomPopup.bind(this),
                this.isSettingsVisibleForUser = this.isSettingsVisibleForUser.bind(this),
                this.saveParticipantColor = this.saveParticipantColor.bind(this),
                this.dominantSpeakerChanged = this.dominantSpeakerChanged.bind(this),
                this.getUserAvatar = this.getUserAvatar.bind(this),
                this.userInBreakout = this.userInBreakout.bind(this),
                this.handleListKeyDown = this.handleListKeyDown.bind(this),
                this.handlePermissionsDropdownClose = this.handlePermissionsDropdownClose.bind(this),
                this.filterButtons = this.filterButtons.bind(this),
                this.raisedHandButton = null,
                this.participantRef = (0,
                s.createRef)(),
                this.state = {
                    permissionsShown: !1,
                    mouseOver: !1,
                    liveStateChangeClicked: !1,
                    participant: this.props.participant,
                    isSpeaking: !1,
                    volume: 0,
                    currentButton: null,
                    isMicDisabledOnPlay: !1
                },
                this.buttonsList = [{
                    key: "toggle-live",
                    action: this.dispatchParticipantLiveStateChange
                }, {
                    key: "toggle-cam",
                    action: this.dispatchMediaStateChange.bind(this, c.Z.mediaStateTypes.webcam_state)
                }, {
                    key: "toggle-mic",
                    action: this.dispatchMediaStateChange.bind(this, c.Z.mediaStateTypes.mic_state)
                }]
            }
            changePermissionsView() {
                this.setState({
                    permissionsShown: !this.state.permissionsShown,
                    currentButton: this.state.permissionsShown ? "toggle-permissions" : null
                }, (()=>{
                    this.props.onSettingsMenuOpened(this.state.permissionsShown ? this.props.participantId : null)
                }
                ))
            }
            dispatchParticipantLiveStateChange() {
                this.props.isPushToUnmuteRoom && this.props.isWebinarMode && !this.props.breakoutInfo.isActive && (0,
                C.ib)(this.props.participant, [c.Z.liveMediaState.UNLIVE]) && this.props.liveParticipant && this.props.liveParticipantsCount >= c.Z.maxStreamsInCarousel && this.props.dispatch((0,
                r.AV)(this.props.liveParticipant)),
                this.props.dispatch((0,
                r.AV)(this.props.participant)),
                this.setState({
                    liveStateChangeClicked: !0
                })
            }
            componentDidMount() {
                ft.F.addOnEventReceivedListener(c.Z.modules.roomParticipants, this.dominantSpeakerChanged),
                this.props.breakoutInfo.isActive || !this.checkUserIsPermittedToSetModeration() && !this.checkUserIsPermittedToSetCaptioner() || this.buttonsList.push({
                    key: "toggle-permissions",
                    action: this.changePermissionsView
                }),
                this.updateHandRaisedBtnInList();
                const {isMediaPlaying: t, muteOnPlay: e} = this.props;
                this.setState({
                    isMicDisabledOnPlay: t && "on" === e
                })
            }
            dominantSpeakerChanged(t, e) {
                if (t === c.Z.sdkOutboundEvents.userVolumeLevelChanged)
                    "" + this.props.participantId == "" + e.user_id && this.setState({
                        volume: e.volume
                    })
            }
            componentWillUnmount() {
                ft.F.removeOnEventReceivedListener(c.Z.modules.roomParticipants, this.dominantSpeakerChanged)
            }
            componentDidUpdate(t, e, n) {
                const {participant: i} = this.props
                  , {participant: s} = t;
                i && s && i.live_media_state && s.live_media_state && i.live_media_state !== s.live_media_state && this.setState({
                    liveStateChangeClicked: !1
                }),
                (!t.breakoutInfo.isActive && this.props.breakoutInfo.isActive || null !== this.props.currentMenuUserId && t.currentMenuUserId !== this.props.currentMenuUserId && this.props.currentMenuUserId !== this.props.participantId) && this.setState({
                    permissionsShown: !1
                }),
                i && s && (i.time_hand_raised !== s.time_hand_raised || i.isModerator !== s.isModerator) && this.updateHandRaisedBtnInList();
                const {isMediaPlaying: o, muteOnPlay: r} = this.props;
                (t.muteOnPlay !== r && !o || t.isMediaPlaying !== o) && this.setState({
                    isMicDisabledOnPlay: o && "on" === r
                })
            }
            updateHandRaisedBtnInList() {
                if (this.props.participant && this.props.participant.time_hand_raised > 0 && this.props.isModerator)
                    this.buttonsList.push({
                        key: "hand-raised",
                        action: ()=>{
                            this.raisedHandButton && "function" == typeof this.raisedHandButton.toggleHandRaise && this.raisedHandButton.toggleHandRaise()
                        }
                    });
                else {
                    const t = this.buttonsList.findIndex((({key: t})=>"hand-raised" === t));
                    -1 !== t && this.buttonsList.splice(t, 1),
                    "hand-raised" === this.state.currentButton && this.setState({
                        currentButton: null
                    })
                }
            }
            dispatchMediaStateChange(t) {
                if (this.props.isHardMute) {
                    if (this.props.participant && (this.props.participant[t] === c.Z.mediaDeviceState.LIVE || this.props.participant[t] === c.Z.mediaDeviceState.DISABLED_LIVE || this.props.participant[t] === c.Z.mediaDeviceState.UNLIVE)) {
                        const e = (0,
                        C.uo)(this.props.participant[t]);
                        this.props.dispatch((0,
                        r.Zu)(this.props.participant, e, c.Z.mediaStateTypes[t]))
                    }
                } else
                    this.props.dispatch((0,
                    r.FM)(this.props.participant, t))
            }
            dispatchMediaDisableChange(t, e) {
                !this.props.participant || this.props.participant[t] !== c.Z.mediaDeviceState.LIVE && this.props.participant[t] !== c.Z.mediaDeviceState.UNLIVE && this.props.participant[t] !== c.Z.mediaDeviceState.DISABLED_NO_PERMISSIONS || (this.nextState = "",
                e ? (this.nextState = c.Z.mediaDeviceState.LIVE,
                this.props.dispatch((0,
                r.Zu)(this.props.participant, this.nextState, c.Z.mediaStateTypes[t]))) : (this.nextState = c.Z.mediaDeviceState.DISABLED_NO_PERMISSIONS,
                this.props.dispatch((0,
                r.Zu)(this.props.participant, this.nextState, c.Z.mediaStateTypes[t]))))
            }
            dispatchLiveDisableChange() {
                this.props.dispatch((0,
                r.AV)(this.props.participant))
            }
            checkUserIsPermittedToSetModeration() {
                const t = (0,
                C.Rz)(this.props.participant);
                return !(!this.props.participant || this.props.ownUserId === this.props.participant.user_id || !this.props.isModerator || t)
            }
            checkUserIsPermittedToSetCaptioner() {
                return this.props.isClosedCaptioningActive && this.props.participant && (this.props.isModerator || this.props.ownParticipantRole === c.Z.userRoles.admin || this.props.ownParticipantRole === c.Z.userRoles.instructor || this.props.ownParticipantRole === c.Z.userRoles.owner)
            }
            changeUserPermissions(t) {
                let {is_moderator: e, is_captioner: n} = this.props.participant ? this.props.participant : {};
                const {permissions: i} = this.props
                  , s = $(t, this.props.participant, i);
                if (this.props.participant)
                    switch (t) {
                    case c.Z.partialPermissionsValue.moderator:
                        e = !e,
                        this.props.dispatch((0,
                        r.Yq)(this.props.participant.user_id, this.props.participant.user_type, this.props.room_id, e));
                        break;
                    case c.Z.partialPermissionsValue.captioner:
                        n = !n,
                        this.props.dispatch((0,
                        r.c9)(this.props.participant.user_id, this.props.participant.user_type, this.props.room_id, n));
                        break;
                    default:
                        this.props.dispatch((0,
                        r.ae)(this.props.participant.user_id, t + "_module", s === (c.Z.permissionValues.UNSET || c.Z.permissionValues.OFF) ? c.Z.permissionValues.ON : c.Z.permissionValues.OFF, "moderator"))
                    }
            }
            toggleViewOnly() {
                const {is_viewOnly: t, user_id: e} = this.props.participant ? this.props.participant : {};
                this.dispatchMediaDisableChange("webcam_state", t),
                this.dispatchMediaDisableChange("mic_state", t),
                this.props.participant && this.props.participant.live_media_state !== c.Z.mediaDeviceState.DISABLED && this.dispatchLiveDisableChange(),
                this.props.dispatch((0,
                r.wr)(e, !t))
            }
            onRemoveParticipant() {
                this.props.participant && (0,
                bt.f7)(this.props.ownUserId, this.props.participant.user_id),
                this.dismissParticipantsPermissionsPopup(),
                this.dismissParticipantsRemovePopup()
            }
            renderParticipantDeviceIcon() {
                return this.props.participant && this.props.participant.device_type && "mobile" === this.props.participant.device_type ? (0,
                f.jsx)(dt, {
                    className: "browser-type-icon"
                }) : this.props.participant && this.props.participant.device_type && "tablet" === this.props.participant.device_type ? (0,
                f.jsx)(At, {
                    className: "browser-type-icon"
                }) : this.props.participant && this.props.participant.user_type === c.Z.userRoles.dialIn ? (0,
                f.jsx)(ut.r, {
                    className: "browser-type-icon browser-type-icon-dial-in"
                }) : (0,
                f.jsx)(ct, {
                    className: "browser-type-icon"
                })
            }
            renderParticipantTopLineIcons() {
                const {participant: t} = this.props
                  , e = this.props.isModerator && (0,
                f.jsx)(P, {
                    participantId: t && t.user_id ? t.user_id : 0,
                    participantIsFocused: this.props.isParticipantFocused,
                    className: "participant-not-present-wrapper",
                    tooltipText: this.props.t("browserFocusTooltipText" + W.k.mode),
                    icon: (0,
                    f.jsx)(at.r, {
                        className: "participant-not-present-icon"
                    })
                })
                  , n = this.props.isModerator ? (0,
                f.jsx)(O.Z, {
                    onRef: t=>{
                        this.raisedHandButton = t
                    }
                    ,
                    tabIndex: -1,
                    actionPerformerId: this.props.ownUserId,
                    targetUserId: t && t.user_id ? t.user_id : 0,
                    handRaiseTime: t && t.time_hand_raised ? t.time_hand_raised : 0,
                    className: d()("participant-hand-raise", {
                        "participant-control-btn-highlighted": "hand-raised" === this.state.currentButton
                    }),
                    iconClassName: "participant-hand-raise-icon"
                }) : (0,
                f.jsx)(I.r, {
                    "aria-label": "Raised Hand",
                    className: "participant-hand-raise-icon"
                });
                return (0,
                f.jsxs)(f.Fragment, {
                    children: [e, t && t.time_hand_raised > 0 && !t.is_moderator && n, this.props.isModerator && this.props.quickPollAnswer ? (0,
                    f.jsx)(yt.l, {
                        className: "participant-poll-answer",
                        svgComponent: wt.N[this.props.quickPollAnswer.pollType].enabled[this.props.quickPollAnswer.answer]
                    }) : null, this.renderParticipantDeviceIcon()]
                })
            }
            renderParticipantTopLineName() {
                const {participant: t, breakoutStatus: e, room_index: n, t: i, isBreakoutV2: s, isBreakoutActive: o} = this.props
                  , r = this.props.permissions && Object.values(this.props.permissions).filter((t=>t === c.Z.permissionValues.ON));
                return (0,
                f.jsxs)(f.Fragment, {
                    children: [this.props.participantIsCaptioner && (0,
                    f.jsx)(rt.r, {
                        className: "participant-captioner-mark"
                    }), !this.props.participantIsCaptioner && this.props.participantIsModerator && (0,
                    f.jsx)(Et.$Y, {
                        className: "participant-moderation-mark participant-moderator-mark"
                    }), !this.props.participantIsCaptioner && r && r.length > 0 && !this.props.participantIsModerator && (0,
                    f.jsx)(Et.$Y, {
                        className: "participant-moderation-mark participant-partial-moderator-mark"
                    }), (0,
                    f.jsx)("div", {
                        className: "participant-user-name",
                        children: t && t.full_name ? t.full_name : ""
                    }), (0,
                    f.jsxs)("div", {
                        className: "participant-breakout-info",
                        children: [s && o && (0,
                        f.jsx)("span", {
                            children: "joined" !== e ? e ? i("breakout." + e) : "" : i("breakout.joinedBreakoutRoom", {
                                room_index: n
                            })
                        }), this.userInBreakout() && !s ? `${i("inBreakoutRoom")} ${this.props.participantIsModerator ? this.props.breakoutModerator.roomNumber : this.props.breakoutParticipant.roomNumber}` : null]
                    })]
                })
            }
            renderParticipantsStreamingButtons() {
                const {participant: t} = this.props
                  , e = t && (t.webcam_state === c.Z.mediaDeviceState.LIVE || t.webcam_state === c.Z.mediaDeviceState.UNLIVE || t.webcam_state === c.Z.mediaDeviceState.DISABLED_LIVE) && t.live_media_state !== c.Z.liveMediaState.UNLIVE && t.live_media_state !== c.Z.liveMediaState.DISABLED && t.live_media_state !== c.Z.liveMediaState.LIVE_INIT
                  , n = t && (t.mic_state === c.Z.mediaDeviceState.LIVE || t.mic_state === c.Z.mediaDeviceState.UNLIVE || t.mic_state === c.Z.mediaDeviceState.DISABLED_LIVE) && t.live_media_state !== c.Z.liveMediaState.UNLIVE && t.live_media_state !== c.Z.liveMediaState.DISABLED && t.live_media_state !== c.Z.liveMediaState.LIVE_INIT
                  , i = t && t.mic_state === c.Z.mediaDeviceState.UNLIVE && t.live_media_state !== c.Z.liveMediaState.UNLIVE
                  , s = t && t.webcam_state === c.Z.mediaDeviceState.UNLIVE && t.live_media_state !== c.Z.liveMediaState.UNLIVE
                  , o = t && (t.live_media_state === c.Z.liveMediaState.LIVE_SUCCESS || t.live_media_state === c.Z.liveMediaState.LIVE_INIT && "" + t.user_id == "" + this.props.ownUserId)
                  , r = t && t.live_media_state === c.Z.liveMediaState.LIVE_INIT && "" + t.user_id != "" + this.props.ownUserId
                  , a = this.userInBreakout()
                  , l = a || r
                  , h = a || !e
                  , A = a || !n
                  , u = d()("participant-media-control-container", {
                    "participant-control-btn-highlighted": "toggle-cam" === this.state.currentButton,
                    "participant-media-control-disabled": h,
                    "participant-media-disabled-by-moderator": s
                })
                  , m = d()("participant-media-control-container", {
                    "participant-control-btn-highlighted": "toggle-mic" === this.state.currentButton,
                    "participant-media-control-disabled": A,
                    "participant-media-disabled-by-moderator": i
                })
                  , g = d()("live-buttons", o && !a ? "btn-red" : "btn-trans", {
                    "participant-control-btn-highlighted": "toggle-live" === this.state.currentButton,
                    disabled: l
                })
                  , C = this.props.t(o && !a ? "unsetLive" : "setLive")
                  , b = !this.userInBreakout() && t && t.webcam_state === c.Z.mediaDeviceState.LIVE ? this.props.t("muteAllWebcams") : this.props.t("unmuteAllWebcams")
                  , v = !this.userInBreakout() && t && t.mic_state === c.Z.mediaDeviceState.LIVE ? this.props.t("muteAllMicrophones") : this.props.t("enableAllMicrophones")
                  , w = t && t.user_type === c.Z.userRoles.dialIn;
                return (0,
                f.jsxs)("ul", {
                    role: "group",
                    className: "participant-stream-actions-wrapper " + (t && t.is_viewOnly ? "participant-stream-actions-buttons-disabled" : ""),
                    children: [w ? null : (0,
                    f.jsx)("li", {
                        className: "btn-list-item",
                        role: "menuitem",
                        id: "participant-active-btn-toggle-live",
                        children: (0,
                        f.jsx)(Ot, {
                            tabIndex: -1,
                            label: C,
                            onClick: this.dispatchParticipantLiveStateChange,
                            classes: g,
                            disabled: l,
                            isLoading: this.state.liveStateChangeClicked,
                            loaderClasses: "live-buttons",
                            children: "LIVE"
                        })
                    }), (t && t.user_id !== this.props.ownUserId || s) && !w ? (0,
                    f.jsx)("li", {
                        className: "btn-list-item",
                        role: "menuitem",
                        id: "participant-active-btn-toggle-cam",
                        children: (0,
                        f.jsx)(p.z, {
                            tabIndex: -1,
                            label: b,
                            onClick: this.dispatchMediaStateChange.bind(this, c.Z.mediaStateTypes.webcam_state),
                            id: "participant-video-" + this.props.participantId,
                            disabled: h,
                            classes: u,
                            children: (0,
                            f.jsx)("div", {
                                className: "participant-media-control " + (!this.userInBreakout() && t && t.webcam_state === c.Z.mediaDeviceState.LIVE ? "participants-video-on" : "participants-video-off")
                            })
                        })
                    }) : null, t && t.user_id !== this.props.ownUserId || i ? (0,
                    f.jsx)("li", {
                        className: "btn-list-item",
                        role: "menuitem",
                        id: "participant-active-btn-toggle-mic",
                        children: (0,
                        f.jsx)(p.z, {
                            tabIndex: -1,
                            label: v,
                            onClick: this.dispatchMediaStateChange.bind(this, c.Z.mediaStateTypes.mic_state),
                            id: "participant-audio-" + this.props.participantId,
                            disabled: A,
                            classes: m,
                            children: (0,
                            f.jsx)("div", {
                                className: "participant-media-control " + (!this.userInBreakout() && t && t.mic_state === c.Z.mediaDeviceState.LIVE ? "participants-audio-on" : "participants-audio-off")
                            })
                        })
                    }) : null]
                })
            }
            renderPermissionsDropdownToggle() {
                const t = this.state.permissionsShown ? "Hide User Permissions" : "Display User Permissions"
                  , e = this.checkUserIsPermittedToSetModeration()
                  , n = this.checkUserIsPermittedToSetCaptioner();
                return (this.props.isBreakoutRoom ? n : e || n) ? (0,
                f.jsx)("div", {
                    className: "btn-list-item permissions-toggle-container",
                    role: "menuitem",
                    id: "participant-active-btn-toggle-permissions",
                    children: (0,
                    f.jsx)(p.z, {
                        onClick: this.changePermissionsView,
                        tabIndex: -1,
                        label: t,
                        id: "participant-toggle-permissions-" + this.props.participantId,
                        classes: d()("permissions-view-toggle-btn", {
                            "participant-control-btn-highlighted": "toggle-permissions" === this.state.currentButton
                        }),
                        children: (0,
                        f.jsx)("div", {
                            className: "down-arrow-white icon-grey"
                        })
                    })
                }) : null
            }
            openParticipantsPermissionsPopup() {
                this.props.dispatch((0,
                L.U)("ParticipantPermissionsPopup", {
                    popupContent: (0,
                    f.jsx)(it, {
                        participantIsModerator: this.props.participantIsModerator,
                        isBreakoutActive: this.props.isBreakoutActive,
                        isViewOnly: Boolean(this.props.participant && this.props.participant.is_viewOnly),
                        participantId: this.props.participantId,
                        changeUserPermissions: this.changeUserPermissions,
                        onRemoveParticipant: this.removeParticipantFromRoomPopup,
                        onClosePopup: this.onCancelButtonClick,
                        toggleViewOnly: this.toggleViewOnly
                    })
                }, 1))
            }
            dismissParticipantsPermissionsPopup() {
                this.props.dispatch((0,
                L.hj)("ParticipantPermissionsPopup"))
            }
            dismissParticipantsRemovePopup() {
                this.props.dispatch((0,
                L.hj)())
            }
            removeParticipantFromRoomPopup() {
                this.dismissParticipantsPermissionsPopup(),
                this.props.dispatch((0,
                L.U)("removeParticipant", {
                    popupContent: (0,
                    f.jsx)(gt, {
                        name: this.props.participant ? this.props.participant.full_name : ""
                    }),
                    popupLeftButtons: [],
                    popupRightButtons: [{
                        key: "rr2w3e",
                        title: this.props.t("popupButtonRemove"),
                        onClick: this.onRemoveParticipant,
                        classes: "btn-remove-participant btn-red"
                    }, {
                        key: "rr2w4r",
                        title: this.props.t("popupButtonCancel"),
                        onClick: this.dismissParticipantsRemovePopup,
                        classes: "btn-remove-participant btn-transparent"
                    }]
                }, 2))
            }
            saveParticipantColor(t, e) {
                this.props.dispatch((0,
                r.GD)(t, e))
            }
            getUserAvatar() {
                return this.props.participant ? (0,
                C.bN)(this.props.cdn, this.props.participant.avatar) : ""
            }
            userInBreakout() {
                return this.props.isBreakoutV2 ? this.props.userInBreakout : !!this.props.breakoutInfo.isActive && (this.props.participantIsModerator ? void 0 !== this.props.breakoutModerator : void 0 !== this.props.breakoutParticipant)
            }
            handleListKeyDown(t) {
                if (!this.state.permissionsShown)
                    switch (t.key) {
                    case "ArrowDown":
                    case "ArrowRight":
                        this.selectNextOption();
                        break;
                    case "ArrowLeft":
                    case "ArrowUp":
                        this.selectPreviousOption();
                        break;
                    case "Enter":
                    case " ":
                        t.preventDefault(),
                        this.executeCurrentOptionAction()
                    }
            }
            filterButtons(t) {
                if (t) {
                    const {participant: e} = this.props
                      , n = this.userInBreakout()
                      , i = e && (e.live_media_state === c.Z.liveMediaState.LIVE_INIT || e.live_media_state === c.Z.liveMediaState.LIVE_SUCCESS);
                    switch (t.key) {
                    case "toggle-live":
                        {
                            const t = e && (e.webcam_state !== c.Z.mediaDeviceState.DISABLED_NO_PERMISSIONS || e.mic_state !== c.Z.mediaDeviceState.DISABLED_NO_PERMISSIONS);
                            return !n && t
                        }
                    case "toggle-cam":
                        {
                            const t = e && (e.webcam_state === c.Z.mediaDeviceState.LIVE || e.webcam_state === c.Z.mediaDeviceState.UNLIVE);
                            return !n && t && i
                        }
                    case "toggle-mic":
                        {
                            const t = e && (e.mic_state === c.Z.mediaDeviceState.LIVE || e.mic_state === c.Z.mediaDeviceState.UNLIVE);
                            return !n && t && i
                        }
                    case "toggle-permissions":
                    case "hand-raised":
                        return !0;
                    default:
                        return !1
                    }
                }
                return !1
            }
            selectNextOption() {
                const t = this.buttonsList.filter(this.filterButtons);
                if (t.length) {
                    const e = t.findIndex((({key: t})=>t === this.state.currentButton))
                      , n = -1 !== e && e < t.length - 1 ? e + 1 : 0;
                    this.setState({
                        currentButton: t[n] ? t[n].key : 0
                    })
                }
            }
            selectPreviousOption() {
                const t = this.buttonsList.filter(this.filterButtons);
                if (t.length) {
                    const e = t.findIndex((({key: t})=>t === this.state.currentButton))
                      , n = e > 0 ? e - 1 : t.length - 1;
                    this.setState({
                        currentButton: t[n] ? t[n].key : 0
                    })
                }
            }
            executeCurrentOptionAction() {
                if (this.props.isModerator) {
                    const t = this.buttonsList.filter(this.filterButtons).find((({key: t})=>t === this.state.currentButton));
                    t && "function" == typeof t.action && t.action()
                }
            }
            handlePermissionsDropdownClose() {
                this.participantRef.current && this.participantRef.current.focus(),
                this.setState({
                    permissionsShown: !1,
                    currentButton: "toggle-permissions"
                }),
                this.props.onSettingsMenuOpened(null)
            }
            isSettingsVisibleForUser() {
                return this.props.settingsVisibility && this.props.settingsVisibility !== c.Z.permissionValues.ON ? this.props.settingsVisibility !== c.Z.permissionValues.OFF && (this.props.settingsVisibility === c.Z.moduleVisibilityValues.ADMIN_ONLY.toLowerCase() ? this.props.isAdmin : this.props.isModerator) : this.props.isModerator
            }
            render() {
                const {participant: t} = this.props
                  , e = this.userInBreakout()
                  , n = this.state.permissionsShown ? "permissions-expanded" : ""
                  , i = this.props.isModerator ? "moderator-view" : "participant-view"
                  , s = this.getUserAvatar();
                return (0,
                f.jsxs)("li", {
                    id: "participant-" + this.props.participantId,
                    tabIndex: 0,
                    role: "menu",
                    ref: this.participantRef,
                    "aria-label": t && t.full_name,
                    className: `participant ${i} ${n}`,
                    onKeyDown: this.handleListKeyDown,
                    children: [(0,
                    f.jsxs)("div", {
                        className: "participant-avatar-and-settings-container",
                        children: [(0,
                        f.jsxs)("div", {
                            className: "user-avatar " + (this.state.volume && t.live_media_state === c.Z.liveMediaState.LIVE_SUCCESS && !this.state.isMicDisabledOnPlay ? "is-dominant" : "not-dominant"),
                            style: this.props.speakerIndicatorType === c.Z.speakerIndicatorType.DOT ? {
                                boxShadow: `0 0 0 2px rgba(0, 202, 0, ${this.state.volume})`,
                                border: `1px solid rgba(0, 0, 0, ${this.state.volume})`
                            } : null,
                            children: [(0,
                            f.jsx)(Ct.Z, {
                                participant: t,
                                participantFullName: t && t.full_name,
                                participantColor: t && t.uniqueColor,
                                participantId: this.props.participantId,
                                avatarURL: s,
                                avatarBackground: {
                                    backgroundImage: `url(${s})`
                                },
                                saveParticipantColor: this.saveParticipantColor,
                                isDialIn: t && t.user_type === c.Z.userRoles.dialIn
                            }), (0,
                            f.jsx)("span", {
                                className: "dominant-dot"
                            })]
                        }), (0,
                        f.jsxs)("div", {
                            className: "participant-settings",
                            children: [(0,
                            f.jsxs)("div", {
                                className: "participant-top-line",
                                children: [this.renderParticipantTopLineName(), this.renderParticipantTopLineIcons()]
                            }), this.props.isModerator ? (0,
                            f.jsxs)("div", {
                                className: "participant-stream-actions",
                                children: [this.renderParticipantsStreamingButtons(), this.renderPermissionsDropdownToggle()]
                            }) : null]
                        })]
                    }), (0,
                    f.jsx)("div", {
                        className: "participant-quick-settings-container",
                        children: (0,
                        f.jsx)("div", {
                            className: "participant-quick-settings-wrapper " + (this.state.permissionsShown ? "quick-settings-expanded" : "quick-settings-collapsed"),
                            children: this.state.permissionsShown && (0,
                            f.jsx)(k, {
                                name: t && t.full_name ? t.full_name : "",
                                participant: t,
                                isUserInBreakout: e,
                                isBreakoutRoom: this.props.isBreakoutRoom,
                                isBreakoutActive: this.props.isBreakoutActive,
                                permissions: this.props.permissions,
                                isModerator: t && t.is_moderator,
                                ownUserId: this.props.ownUserId,
                                isViewOnly: Boolean(t && t.is_viewOnly),
                                settingsVisible: this.isSettingsVisibleForUser(),
                                isClosedCaptioningActive: this.props.isClosedCaptioningActive,
                                toggleViewOnly: this.toggleViewOnly,
                                onRemoveParticipant: this.onRemoveParticipant,
                                changeUserPermissions: this.changeUserPermissions,
                                openParticipantsPermissionsPopup: this.openParticipantsPermissionsPopup,
                                dismissParticipantsPermissionsPopup: this.dismissParticipantsPermissionsPopup,
                                removeParticipantFromRoomPopup: this.removeParticipantFromRoomPopup,
                                onClose: this.handlePermissionsDropdownClose
                            })
                        })
                    })]
                }, "participant-" + this.props.participantId)
            }
        }
        );
        var Ut, Vt = n("h5V4"), Ft = n("k6h8"), zt = n("+5C1");
        function Ht() {
            return (Ht = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var Gt, Wt, Yt, qt, Kt = s.forwardRef((function(t, e) {
            var n = t.title
              , i = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return s.createElement("svg", Ht({
                id: "Layer_2",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 16 11.5",
                style: {
                    enableBackground: "new 0 0 16 11.5"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": i
            }, o), n ? s.createElement("title", {
                id: i
            }, n) : null, Ut || (Ut = s.createElement("path", {
                d: "M15.8,0.4C15.4,0,14.8,0,14.4,0h-2.4c-0.3,0-0.3,0-0.3,0.4c0,0.1,0,0.5-0.1,0.5c-0.1,0-0.2,0-0.3,0H4.6 c-0.1,0-0.2,0-0.3-0.1C4.2,0.7,4.4,0,4.1,0H2.3C1.9,0,1.5,0,1.2,0C0.6,0,0.1,0.5,0,1c0,0.2,0,1.1,0,1.3v1c0,0.1,0,0.2,0,0.3 c0,0.1,0.1,0.1,0.2,0.1c0.1,0,0.4,0,0.5,0.1c0,0.2,0,0.4,0,0.6v3.1c0,0.2-0.2,0.2-0.4,0.2c-0.1,0-0.2,0-0.3,0C0,7.9,0,8,0,8.1v1.6 c0,0.4,0,0.9,0.3,1.2c0.3,0.4,0.6,0.6,1.3,0.6H4c0.3,0,0.3-0.3,0.3-0.6c0-0.3,0.2-0.3,0.4-0.3h6.7c0.1,0,0.2,0,0.3,0.1 c0.1,0.1-0.1,0.8,0.2,0.8c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0h2.7c0.5-0.1,1-0.5,1.2-1c0-0.2,0-1.1,0-1.3V8c0-0.2-0.1-0.2-0.2-0.2 c-0.1,0-0.4,0-0.5-0.1c-0.1-0.1-0.1-0.2-0.1-0.3V4c0-0.3,0.2-0.3,0.4-0.3c0.1,0,0.1,0,0.2,0C16,3.7,16,3.6,16,3.5V1.8 C16.1,1.3,16,0.8,15.8,0.4z M11.1,8C11,7.9,11,7.9,11,7.8c0.3-0.1,0.5-0.3,0.6-0.5c0.2-0.2,0.3-0.5,0.3-0.8c0.1,0,0.2,0,0.2,0 c0.2,0.2,0.1,0.6-0.2,1C11.6,8,11.2,8.2,11.1,8z M11.1,8l2.3,2H1.5c-0.2,0-0.2-0.3-0.2-0.5V1.7c0-0.2,0.1-0.2,0.2-0.2h12.9 c0.2,0,0.2,0.3,0.2,0.5v6.8l-2.5-2.2L12,6.4L9.9,5.6l1,2.3L11.1,8L11.1,8z"
            })))
        }
        ));
        function Qt() {
            return (Qt = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var Jt, Xt, te = s.forwardRef((function(t, e) {
            var n = t.title
              , i = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return s.createElement("svg", Qt({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 17.5 12.5",
                style: {
                    enableBackground: "new 0 0 17.5 12.5"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": i
            }, o), n ? s.createElement("title", {
                id: i
            }, n) : null, Gt || (Gt = s.createElement("style", {
                type: "text/css"
            }, "\n\t.st0{fill:#0E1A21;}\n\t.st1{fill:#EF2826;}\n")), Wt || (Wt = s.createElement("path", {
                className: "st0",
                d: "M3.4,12H2.6c-0.7,0-1.1-0.1-1.3-0.6C1.1,11.1,1,10.7,1,10.3V8.6c0,0,0,0,0-0.1c0-0.1,0-0.2,0.1-0.2 c0.1,0,0.1,0,0.2,0h0.1h0.1c0.2,0,0.3,0,0.3-0.2V4.9c0-0.2,0-0.4,0-0.6c0-0.1-0.1-0.1-0.3-0.1c-0.1,0-0.1,0-0.1,0H1.3H1.2 c-0.1,0-0.2,0-0.2-0.1C1,4,1,3.9,1,3.9c0,0,0-0.1,0-0.1V3.4l1.3,0.9v5.7c0,0,0,0.1,0,0.1v0c0,0.1,0,0.3,0,0.3c0,0,0.1,0,0.1,0h8.7 l0.8,0.6H5.7H5.6H5.6c-0.2,0-0.3,0-0.3,0.3c0,0,0,0.1,0,0.1c0,0.2,0,0.3-0.1,0.5C5.1,12,5.1,12,5,12L3.4,12L3.4,12z"
            })), Yt || (Yt = s.createElement("path", {
                className: "st0",
                d: "M15.7,9.3V2.4c0,0,0-0.1,0-0.1v0c0-0.1,0-0.3,0-0.3c0,0-0.1,0-0.1,0H3.1L1.4,0.8c0.2-0.2,0.5-0.3,0.7-0.3 c0.1,0,0.2,0,0.4,0H3h0h0.4h1.2c0,0,0.5,0,0.6,0c0.2,0,0.2,0.3,0.2,0.5c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0.1,0 c0,0,0,0,0.1,0h6.7c0,0,0.1,0,0.1,0s0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.1,0,0.1-0.3,0.1-0.5v0c0-0.3,0-0.4,0.3-0.4h2.6 c0.4-0.1,0.8,0.1,1.1,0.4C17,1.2,17.1,1.7,17,2.1c0,0.1,0,0.2,0,0.2V4c0,0.1,0,0.2-0.1,0.2c0,0-0.1,0-0.1,0h-0.1h-0.1 c-0.2,0-0.3,0-0.3,0.3v3.4c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0.1,0.2c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.1,0,0.2,0s0.1,0,0.1,0 c0.1,0,0.2,0,0.2,0.2v1.3c0,0.2,0,1.1,0,1.3c0,0.1-0.1,0.3-0.2,0.4l0,0l0,0l-4.3-3c0.2-0.1,0.3-0.2,0.4-0.4c0.3-0.4,0.4-0.9,0.2-1 l0,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0.3-0.1,0.5-0.3,0.8c-0.1,0.2-0.3,0.3-0.5,0.4h0l0,0l-0.5-0.3l-0.8-1.8L13,6.9L13.1,7 L15.7,9.3z"
            })), qt || (qt = s.createElement("path", {
                className: "st1",
                d: "M16.1,12.4l0.4-0.6L0.4,1L0,1.6L16.1,12.4z"
            })))
        }
        ));
        function ee() {
            return (ee = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var ne, ie, se = s.forwardRef((function(t, e) {
            var n = t.title
              , i = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return s.createElement("svg", ee({
                xmlns: "http://www.w3.org/2000/svg",
                width: 14.909,
                height: 11.172,
                viewBox: "0 0 14.909 11.172",
                ref: e,
                "aria-labelledby": i
            }, o), n ? s.createElement("title", {
                id: i
            }, n) : null, Jt || (Jt = s.createElement("defs", null, s.createElement("style", null, ".a{fill:#fff;}"))), Xt || (Xt = s.createElement("g", {
                transform: "translate(-8 -13.824)"
            }, s.createElement("path", {
                d: "M9.984,0H1.992C1.084,0,0,.721,0,1.573V9.6c0,.852,1.084,1.573,1.992,1.573H9.984A1.6,1.6,0,0,0,11.625,9.63V8.088c0-.736,3.283-2.509,3.283-2.506,0,.081-3.283-2.153-3.283-3.044v-1A1.594,1.594,0,0,0,9.984,0Z",
                transform: "translate(8 13.824)"
            }), s.createElement("rect", {
                className: "a",
                width: 8,
                height: 1,
                transform: "translate(10 15.804)"
            }), s.createElement("rect", {
                className: "a",
                width: 8,
                height: 1,
                transform: "translate(10 18.804)"
            }), s.createElement("rect", {
                className: "a",
                width: 4.013,
                height: 1,
                transform: "translate(10 21.818)"
            }))))
        }
        ));
        function oe() {
            return (oe = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var re = s.forwardRef((function(t, e) {
            var n = t.title
              , i = t.titleId
              , o = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return s.createElement("svg", oe({
                xmlns: "http://www.w3.org/2000/svg",
                width: 18.476,
                height: 12.412,
                viewBox: "0 0 18.476 12.412",
                ref: e,
                "aria-labelledby": i
            }, o), n ? s.createElement("title", {
                id: i
            }, n) : null, ne || (ne = s.createElement("defs", null, s.createElement("style", null, ".a{stroke:rgba(0,0,0,0);stroke-miterlimit:10;}.b{fill:#ef2826;}"))), ie || (ie = s.createElement("g", {
                transform: "translate(-5.987 -13.323)"
            }, s.createElement("g", {
                transform: "translate(8 13.823)"
            }, s.createElement("path", {
                className: "a",
                d: "M-4120.481,246.442h-7.994c-.9,0-1.992-.726-1.992-1.574v-5.989l2,1.383v.987h1.427l7.279,5.035A1.7,1.7,0,0,1-4120.481,246.442Zm-7.985-3.18h0v1h4.014v-1Zm9.625.736h0l-3.972-2.747h2.348v-1h-3.794l-2.894-2h6.688v-1h-8v.091l-1.744-1.206a2.328,2.328,0,0,1,1.735-.866h7.994a1.6,1.6,0,0,1,1.64,1.543v1c0,.459.865,1.257,1.59,1.846a12.62,12.62,0,0,0,1.689,1.2c-.032.019-3.279,1.768-3.279,2.5V244Z",
                transform: "translate(4130.466 -235.268)"
            })), s.createElement("path", {
                className: "b",
                d: "M17.875,23.731l.445-.648L2.245,12.3l-.445.648Z",
                transform: "translate(4.187 2.004)"
            }))))
        }
        ));
        const ae = (0,
        E.P1)([function(t) {
            return t && t.general && t.general.mute_mode === c.Z.muteMode.HARD
        }
        ], (t=>t))
          , pe = (0,
        E.P1)([function(t) {
            return t && t.general && t.general.mute_mode === c.Z.muteMode.HARD && t.general.mute_all_mics === c.Z.permissionValues.ON
        }
        ], (t=>t))
          , ce = (0,
        E.P1)([function(t) {
            return t && t.general && t.general.mute_mode === c.Z.muteMode.HARD && t.general.mute_all_cams === c.Z.permissionValues.ON
        }
        ], (t=>t))
          , le = (0,
        E.P1)((t=>t.user_id), (t=>t))
          , de = (0,
        E.P1)([t=>t.generalSettings], (t=>t))
          , he = (0,
        E.P1)([t=>t], (t=>t))
          , Ae = (0,
        E.P1)((t=>t.type), (t=>t))
          , ue = (0,
        E.P1)((t=>t.platform && t.platform.type), (t=>t || c.Z.platformTypes.DESKTOP))
          , me = (0,
        E.P1)([t=>t], (t=>t && (t.user_role === c.Z.userRoles.admin || t.user_role === c.Z.userRoles.owner)))
          , ge = (0,
        E.P1)([(t,e)=>t[e]], (t=>t))
          , Ce = (0,
        G.compose)((0,
        w.Z)(), (0,
        o.$j)((function(t) {
            const {settings: e, participants: n} = t
              , i = n.list ? n.list : {}
              , s = le(e.ownData)
              , o = ge(i, s)
              , r = (0,
            S.Ef)(n.list, s, e.generalSettings, "whiteboard")
              , a = (0,
            S.kk)(t, c.Z.roomDefaultPermissions.whiteboard_module)
              , p = me(o)
              , l = ae(e.generalSettings);
            return {
                muteState: pe(e.generalSettings),
                hardMuteEnabled: l,
                camState: ce(e.generalSettings),
                searchTerm: n.search.term,
                pushToUnmute: (0,
                S.wq)(e),
                moduleSettings: de(e),
                room_id: he(e.roomData && e.roomData.id),
                settingsVisibility: (0,
                S.$H)(e.generalSettings, "settings_visibility"),
                isWhiteboardOn: r,
                isModuleActiveWhiteboard: a,
                roomType: Ae(e.roomData),
                platformType: ue(e.browserInfo),
                isAdmin: p,
                ownId: s
            }
        }
        )))(class extends s.Component {
            constructor(t) {
                super(t),
                this.dispatchMuteAll = this.dispatchMuteAll.bind(this),
                this.dispatchCameraOffAll = this.dispatchCameraOffAll.bind(this),
                this.onSearchChange = this.onSearchChange.bind(this),
                this.changeRoomDefaultPermissions = this.changeRoomDefaultPermissions.bind(this),
                this.dispatchSetRaisedHandClear = this.dispatchSetRaisedHandClear.bind(this),
                this.renderPermissionButtons = this.renderPermissionButtons.bind(this),
                this.state = {
                    showSearchBar: !1
                }
            }
            dispatchMuteAll() {
                this.props.dispatch(this.props.hardMuteEnabled ? (0,
                Vt.eO)(!this.props.muteState) : (0,
                Vt.om)(c.Z.mediaStateTypes.mic_state, this.props.ownId))
            }
            dispatchCameraOffAll() {
                this.props.dispatch(this.props.hardMuteEnabled ? (0,
                Vt.zw)(!this.props.camState) : (0,
                Vt.om)(c.Z.mediaStateTypes.webcam_state, this.props.ownId))
            }
            dispatchSetRaisedHandClear() {
                this.props.dispatch((0,
                Vt.qn)())
            }
            changeRoomDefaultPermissions(t, e, n) {
                this.props.dispatch((0,
                Vt.a1)(this.props.room_id, t, e, n === c.Z.permissionValues.ON ? c.Z.permissionValues.OFF : c.Z.permissionValues.ON))
            }
            isSettingsVisibleForUser() {
                return this.props.settingsVisibility && this.props.settingsVisibility !== c.Z.permissionValues.ON ? this.props.settingsVisibility !== c.Z.permissionValues.OFF && (this.props.settingsVisibility === c.Z.moduleVisibilityValues.ADMIN_ONLY.toLowerCase() ? this.props.isAdmin : this.props.isModerator) : this.props.isModerator
            }
            onSearchChange(t) {
                this.props.dispatch((0,
                r.oS)(t))
            }
            renderPermissionButtons() {
                const t = this.props.moduleSettings && this.props.moduleSettings.whiteboard_module && this.props.moduleSettings.whiteboard_module.default_settings && this.props.moduleSettings.whiteboard_module.default_settings.is_moderator === c.Z.permissionValues.ON
                  , e = this.props.moduleSettings && this.props.moduleSettings.chat_module && this.props.moduleSettings.chat_module.default_settings && this.props.moduleSettings.chat_module.default_settings.public_chat === c.Z.permissionValues.ON;
                return (0,
                f.jsxs)(s.Fragment, {
                    children: [this.props.isModuleActiveWhiteboard && (0,
                    f.jsx)(p.z, {
                        classes: "participant-media-control-wrapper",
                        label: this.props.t(t ? "disableWhiteboard" : "enableWhiteboard"),
                        hasTooltip: !0,
                        name: "whiteboard",
                        customTooltipClass: "participant-media-control-tooltip",
                        onClick: this.changeRoomDefaultPermissions.bind(this, c.Z.roomDefaultPermissions.whiteboard_module, c.Z.roomDefaultPermissions.keys.moderator, this.props.moduleSettings && this.props.moduleSettings.whiteboard_module && this.props.moduleSettings.whiteboard_module.default_settings && this.props.moduleSettings.whiteboard_module.default_settings.is_moderator),
                        children: (0,
                        f.jsx)("div", {
                            className: "participant-media-control participants-tool-status " + (t ? "whiteboard-status-on" : "whiteboard-status-off"),
                            children: t ? (0,
                            f.jsx)(Kt, {
                                className: "participants-whiteboard-on"
                            }) : (0,
                            f.jsx)(te, {
                                className: "participants-whiteboard-off"
                            })
                        })
                    }), (0,
                    f.jsx)(p.z, {
                        classes: "participant-media-control-wrapper",
                        label: this.props.t(e ? "disableChat" : "enableChat"),
                        hasTooltip: !0,
                        name: "chat",
                        customTooltipClass: "participant-media-control-tooltip",
                        onClick: this.changeRoomDefaultPermissions.bind(this, c.Z.roomDefaultPermissions.chat_module, "public_chat", this.props.moduleSettings && this.props.moduleSettings.chat_module && this.props.moduleSettings.chat_module.default_settings && this.props.moduleSettings.chat_module.default_settings.public_chat),
                        children: (0,
                        f.jsx)("div", {
                            className: "participant-media-control participants-tool-status " + (e ? "chat-status-on" : "chat-status-off"),
                            children: e ? (0,
                            f.jsx)(se, {
                                className: "participants-chat-on"
                            }) : (0,
                            f.jsx)(re, {
                                className: "participants-chat-off"
                            })
                        })
                    })]
                })
            }
            render() {
                return (0,
                f.jsxs)("div", {
                    id: "participants-control-bar",
                    className: this.props.isModerator ? "" : "guest-view",
                    children: [(0,
                    f.jsx)(Ft.Z, {
                        onChange: this.onSearchChange,
                        scope: "participants",
                        autoFocus: this.props.platformType !== c.Z.platformTypes.MOBILE,
                        icon: (0,
                        f.jsx)(zt.r, {
                            className: "search-bar-icon"
                        }),
                        clearIcon: !0,
                        value: this.props.searchTerm
                    }), this.props.isModerator ? (0,
                    f.jsxs)("div", {
                        className: "mute-controls",
                        children: [(0,
                        f.jsx)("div", {
                            className: "mute-all-control-container",
                            children: this.props.t("muteAll")
                        }), this.props.roomType !== c.Z.roomTypes.breakout && (0,
                        f.jsxs)(f.Fragment, {
                            children: [this.isSettingsVisibleForUser() ? this.renderPermissionButtons() : null, (0,
                            f.jsx)(p.z, {
                                classes: "participant-media-control-wrapper " + (this.props.camState ? "active" : ""),
                                label: this.props.t(this.props.camState ? "unmuteAllWebcams" : "muteAllWebcams"),
                                hasTooltip: !0,
                                name: "webcam",
                                customTooltipClass: "participant-media-control-tooltip",
                                onClick: this.dispatchCameraOffAll,
                                children: (0,
                                f.jsx)("div", {
                                    className: "participant-media-control " + (this.props.camState ? "participants-video-off" : "participants-video-on")
                                })
                            })]
                        }), (0,
                        f.jsx)(p.z, {
                            classes: "participant-media-control-wrapper " + (this.props.muteState ? "active" : ""),
                            label: this.props.t(this.props.muteState ? "unmuteAllMicrophones" : "muteAllMicrophones"),
                            hasTooltip: !0,
                            name: "microphone",
                            customTooltipClass: "participant-media-control-tooltip",
                            onClick: this.dispatchMuteAll,
                            children: (0,
                            f.jsx)("div", {
                                className: "participant-media-control " + (this.props.muteState ? "participants-audio-off" : "participants-audio-on")
                            })
                        })]
                    }) : null]
                })
            }
        }
        );
        n("gV3G");
        var fe = n("Xfyp")
          , be = n("ZVMP")
          , ve = n("oIiO");
        n("lpDJ");
        const we = class extends s.Component {
            onClick(t) {
                t.clickFunction && t.clickFunction(t.name ? t.name : null)
            }
            render() {
                return (0,
                f.jsx)("ul", {
                    className: "participants-dropdown participants-dropdown-list",
                    children: this.props.items.map(((t,e)=>(0,
                    f.jsx)("li", {
                        onKeyDown: e=>ve.Z.emulateButtonKeydown(e, t, this.onClick),
                        onClick: ()=>this.onClick(t),
                        className: "dropdown-list-item participants-dropdown-list-item",
                        children: t.title
                    }, e)))
                })
            }
        }
        ;
        var ye = n("Ln8+");
        (0,
        mt.oD)(fe.Z);
        const xe = (0,
        E.wN)(E.PW, B.isEqual)
          , _e = xe([function(t, e) {
            if (t.search.term && "" !== t.search.term) {
                const n = t.search.term.toUpperCase();
                return Object.keys(t.list).filter((e=>{
                    const i = t.list[e];
                    return i.full_name && i.full_name.toUpperCase().includes(n)
                }
                )).map((e=>t.list[e])).sort(z.bind(null, e)).sort(H).map((t=>t.user_id))
            }
            return Object.keys(t.list).map((e=>t.list[e])).sort(z.bind(null, e)).sort(H).map((t=>t.user_id))
        }
        ], (t=>t))
          , ke = (0,
        E.P1)([t=>t.user_id], (t=>t))
          , Se = xe([function(t, e) {
            return t[e] ? t[e].user_role : "student"
        }
        ], (t=>t))
          , Ee = (0,
        E.P1)([t=>t], (t=>{
            const e = Object.values(t).filter((t=>0 !== t.time_hand_raised));
            return !(!e || !e.length) && 0 !== e.length
        }
        ))
          , Be = (0,
        E.P1)((t=>t.type), (t=>t))
          , Ie = (0,
        E.P1)([t=>(0,
        xt.E2)(t.settings.generalSettings), xt.zQ], ((t,{pollStatus: e})=>t && [vt.XO.Active, vt.XO.Presented, vt.XO.InitialActive].includes(e)))
          , Oe = (0,
        G.compose)((0,
        w.Z)(), (0,
        o.$j)((function(t) {
            const {settings: e, participants: n} = t
              , i = ke(e.ownData)
              , s = n.list ? n.list : {}
              , o = (0,
            S.ke)(e.generalSettings, "participants_module", "default_participant_sort")
              , r = Ee(s);
            return {
                participantsSortOption: o,
                participants: _e(n, o),
                ownUserId: i,
                ownParticipantRole: Se(n.list, i),
                isModerator: (0,
                S.S_)(s, e.ownData.user_id),
                handRaisedParticipants: r,
                roomType: Be(e.roomData),
                isQuickPollActive: Ie(t)
            }
        }
        )))(class extends s.Component {
            constructor(t) {
                super(t),
                this.state = {
                    participantsDropdownItems: this.getBuildParticipantsDropdownItem(),
                    currentMenuUserId: null
                },
                this.handleKeyUp = this.handleKeyUp.bind(this),
                this.handleKeyDown = this.handleKeyDown.bind(this),
                this.setDropdown = this.setDropdown.bind(this),
                this.setShouldCloseOnContentClick = this.setShouldCloseOnContentClick.bind(this),
                this.clearAll = this.clearAll.bind(this),
                this.putDownAllHands = this.putDownAllHands.bind(this),
                this.getDropdownItems = this.getDropdownItems.bind(this),
                this.handleParticipantSettingsMenu = this.handleParticipantSettingsMenu.bind(this)
            }
            clearAll() {
                this.putDownAllHands(),
                this.clearQuickPollAnswers()
            }
            putDownAllHands() {
                this.props.handRaisedParticipants && this.props.dispatch((0,
                Vt.qn)())
            }
            clearQuickPollAnswers() {
                this.props.isQuickPollActive && this.props.dispatch((0,
                ye.eL)())
            }
            participantsClear(t) {
                switch (t) {
                case c.Z.participants.participantsDropdownItems.all:
                    this.clearAll();
                    break;
                case c.Z.participants.participantsDropdownItems.raisedHands:
                    this.putDownAllHands();
                    break;
                case c.Z.participants.participantsDropdownItems.emotions:
                    break;
                case c.Z.participants.participantsDropdownItems.pollRequests:
                    this.clearQuickPollAnswers()
                }
            }
            componentDidMount() {
                this.props.participants && this.props.changeCounter(Object.keys(this.props.participants).length),
                this.setDropdown(),
                this.setShouldCloseOnContentClick()
            }
            getDropdownItems() {
                return this.state.participantsDropdownItems.filter((t=>!t.hidden)).length > 0
            }
            setDropdown() {
                this.props.setDropdown && this.props.isModerator && this.getDropdownItems() && this.props.setDropdown((0,
                f.jsx)(we, {
                    items: this.state.participantsDropdownItems.filter((t=>!t.hidden))
                }))
            }
            setShouldCloseOnContentClick() {
                this.props.setShouldCloseOnContentClick && this.props.setShouldCloseOnContentClick(!0)
            }
            handleKeyUp(t) {
                !t || 37 !== t.keyCode && 39 !== t.keyCode || (t.preventDefault(),
                t.stopPropagation(),
                t.nativeEvent.stopImmediatePropagation())
            }
            handleKeyDown(t) {
                t && "Escape" === t.key && this.props.dispatch && this.props.dispatch((0,
                be.Z6)(this.props.moduleId))
            }
            getBuildParticipantsDropdownItem() {
                return [{
                    id: "participants-clear-all",
                    name: c.Z.participants.participantsDropdownItems.all,
                    title: this.props.t("participantsClearAll"),
                    clickFunction: this.participantsClear.bind(this, c.Z.participants.participantsDropdownItems.all),
                    hidden: !0
                }, {
                    id: "participants-clear-raised-hands",
                    name: c.Z.participants.participantsDropdownItems.raisedHands,
                    title: this.props.t("participantsClearRaisedHands"),
                    clickFunction: this.participantsClear.bind(this, c.Z.participants.participantsDropdownItems.raisedHands),
                    hidden: this.props.roomType === c.Z.roomTypes.breakout
                }, {
                    id: "participants-clear-emotions",
                    name: c.Z.participants.participantsDropdownItems.emotions,
                    title: this.props.t("participantsClearEmotions"),
                    clickFunction: this.participantsClear.bind(this, c.Z.participants.participantsDropdownItems.emotions),
                    hidden: !0
                }, {
                    id: "participants-clear-poll-results",
                    name: c.Z.participants.participantsDropdownItems.pollRequests,
                    title: this.props.t("participantsClearPollResults"),
                    clickFunction: this.participantsClear.bind(this, c.Z.participants.participantsDropdownItems.pollRequests),
                    hidden: !this.props.isQuickPollActive
                }]
            }
            componentDidUpdate(t, e, n) {
                this.props.participants && (this.props.changeCounter(this.props.participants.length),
                this.setShouldCloseOnContentClick()),
                t.isQuickPollActive !== this.props.isQuickPollActive && (this.setState({
                    participantsDropdownItems: this.getBuildParticipantsDropdownItem()
                }),
                this.props.updateTitle(null)),
                (!t.isModerator && this.props.isModerator || t.isQuickPollActive !== this.props.isQuickPollActive) && this.setDropdown()
            }
            handleParticipantSettingsMenu(t) {
                this.setState({
                    currentMenuUserId: t
                })
            }
            renderParticipants(t) {
                return (0,
                f.jsx)("ul", {
                    className: "participants-content",
                    children: (t ? t.length : 0) > 0 ? t.map(((e,n)=>{
                        const i = t[n];
                        return (0,
                        f.jsx)($t, {
                            participantId: i,
                            ownUserId: this.props.ownUserId,
                            currentMenuUserId: this.state.currentMenuUserId,
                            onSettingsMenuOpened: this.handleParticipantSettingsMenu,
                            ownParticipantRole: this.props.ownParticipantRole
                        }, "participant-container-" + i)
                    }
                    )) : (0,
                    f.jsx)("div", {
                        className: "no-participants",
                        children: this.props.t("noParticipantsFound" + W.k.mode)
                    })
                })
            }
            render() {
                return (0,
                f.jsxs)("div", {
                    id: "participantsList",
                    role: "button",
                    tabIndex: 0,
                    onKeyUp: this.handleKeyUp,
                    onKeyDown: this.handleKeyDown,
                    children: [(0,
                    f.jsx)(Ce, {
                        isModerator: this.props.isModerator
                    }), this.renderParticipants(this.props.participants)]
                })
            }
        }
        )
    }
    ,
    E6V6: (t,e,n)=>{
        "use strict";
        n.d(e, {
            Z: ()=>x
        });
        var i = n("r0ML")
          , s = n("t1lN")
          , o = n("svWY")
          , r = n("TDzD")
          , a = n("Vptf")
          , p = n("6MZh")
          , c = (n("7xoy"),
        n("UmR+"))
          , l = n("3a6k")
          , d = n("6jGC")
          , h = n("/bce")
          , A = n("ziYR")
          , u = n("jjVI")
          , m = n("Pc05")
          , g = n.n(m)
          , C = n("fIjO")
          , f = n("v2iy")
          , b = n("sZRZ")
          , v = n("BqyK");
        const w = (0,
        s.wN)(s.PW, o.isEqual)(((t,e)=>t[e]), (t=>t))
          , y = (0,
        s.P1)([t=>t], (t=>t))
          , x = (0,
        f.compose)((0,
        C.Z)(), (0,
        a.$j)((function(t) {
            const {participants: e, settings: n, breakout: i, activeContent: s} = t
              , o = e.list ? e.list : {}
              , a = (0,
            c.S_)(o, n.ownData.user_id)
              , p = w(o, n.ownData.user_id);
            return {
                isModerator: a,
                isInstructor: (0,
                r.Rz)(p),
                ownParticipant: p,
                breakoutInfo: (0,
                d.Ch)(i),
                breakoutModeratorIds: (0,
                d.q3)(i),
                breakoutParticipantIds: (0,
                d.tC)(i),
                contentType: y(s.contentType),
                platformType: (0,
                u.q$)(n.browserInfo)
            }
        }
        )))(class extends i.Component {
            constructor(t) {
                super(t),
                this.onCancelButtonClick = this.onCancelButtonClick.bind(this),
                this.onConfirmEndSession = this.onConfirmEndSession.bind(this),
                this.onConfirmLeaveSessionMe = this.onConfirmLeaveSessionMe.bind(this),
                this.userInBreakout = this.userInBreakout.bind(this),
                this.replaceModeratorButtons = this.replaceModeratorButtons.bind(this),
                this.state = {}
            }
            onCancelButtonClick() {
                this.props.dispatch((0,
                p.hj)())
            }
            onConfirmEndSession() {
                this.props.dispatch((0,
                p.hj)()),
                this.userInBreakout(this.props.ownParticipant) && this.props.isInstructor || (this.props.breakoutInfo.isActive && window.RoomBreakout && window.RoomBreakout.endBreakout && window.RoomBreakout.endBreakout(),
                this.props.contentType === A.Z.activeContentTypes.desktopShare && (0,
                h.Tv)(!1, this.props.ownParticipant.user_id),
                (0,
                l.lP)("instructor_ended_session"))
            }
            onConfirmLeaveSessionMe() {
                this.props.dispatch((0,
                p.hj)()),
                this.userInBreakout(this.props.ownParticipant) || (0,
                l.Ks)("user_leave_session")
            }
            userInBreakout(t) {
                return !(!t || !this.props.breakoutInfo.isActive) && ((0,
                r.gS)(t) ? this.props.breakoutModeratorIds.includes(t.user_id.toString()) : this.props.breakoutParticipantIds.includes(t.user_id.toString()))
            }
            componentDidMount() {
                this.props.isInstructor ? this.props.dispatch((0,
                p.eB)([], [{
                    key: "132w34e",
                    title: this.props.t("endSessionBtnEveryone"),
                    onClick: this.onConfirmEndSession,
                    classes: "btn-green end-session-btn-everyone"
                }, {
                    key: "132w44e",
                    title: this.props.t("endSessionBtnOnlyMe" + b.k.mode),
                    onClick: this.onConfirmLeaveSessionMe,
                    classes: "btn-green end-session-btn-me"
                }, {
                    key: "132w4r",
                    title: this.props.t("endSessionBtnNo"),
                    onClick: this.onCancelButtonClick,
                    classes: "btn-localization btn-transparent end-session-cancel"
                }], "EndSessionPopup")) : this.props.isModerator ? this.replaceModeratorButtons() : this.props.dispatch((0,
                p.eB)([], [{
                    key: "132w34e",
                    title: this.props.t("endSessionBtnYes"),
                    onClick: this.onConfirmLeaveSessionMe,
                    classes: "btn-green " + (this.userInBreakout(this.props.ownParticipant) && "hidden-end-session-button")
                }, {
                    key: "132w4r",
                    title: this.props.t("endSessionBtnNo"),
                    onClick: this.onCancelButtonClick,
                    classes: "btn-localization btn-transparent end-session-cancel"
                }], "EndSessionPopup"))
            }
            replaceModeratorButtons() {
                this.props.dispatch((0,
                p.eB)([], [{
                    key: "132w34e",
                    title: this.props.t(this.props.isModerator ? "endSessionBtnOnlyMe" + b.k.mode : "endSessionBtnYes"),
                    onClick: this.onConfirmLeaveSessionMe,
                    classes: "btn-green " + (this.userInBreakout(this.props.ownParticipant) && "hidden-end-session-button")
                }, {
                    key: "132w4r",
                    title: this.props.t("endSessionBtnNo"),
                    onClick: this.onCancelButtonClick,
                    classes: "btn-localization btn-transparent end-session-cancel"
                }], "EndSessionPopup"))
            }
            componentDidUpdate(t) {
                t.isModerator !== this.props.isModerator && this.replaceModeratorButtons()
            }
            render() {
                return (0,
                v.jsx)("div", {
                    className: g()("session-end-popup-container", this.props.isInstructor ? "session-end-instructor" : "session-end-student", {
                        mobile: (0,
                        r.xB)(this.props.platform)
                    }),
                    children: (0,
                    v.jsx)("div", {
                        className: "session-end-popup-wrapper",
                        children: (0,
                        v.jsx)("span", {
                            children: this.props.t(this.props.isInstructor ? "wantToEndSession" + b.k.mode : "wantToLeaveSession" + b.k.mode)
                        })
                    })
                })
            }
        }
        )
    }
    ,
    EQhy: (t,e,n)=>{
        "use strict";
        n.d(e, {
            Z: ()=>l
        });
        var i = n("r0ML")
          , s = n("LgT2")
          , o = n("S1x0")
          , r = n("zSAs")
          , a = n("Pc05")
          , p = n.n(a)
          , c = n("BqyK");
        const l = class extends i.Component {
            constructor(t) {
                super(t),
                this.toolTipRef = i.createRef(),
                this.toolTipContainerRef = i.createRef(),
                this.buttonRef = i.createRef(),
                this.onMouseEnter = this.onMouseEnter.bind(this),
                this.onMouseLeave = this.onMouseLeave.bind(this),
                this.isButtonClickDisabled = this.isButtonClickDisabled.bind(this),
                this.state = {
                    showCount: 0,
                    isHovering: !1
                }
            }
            componentDidMount() {
                this.props.setToolTipRef && this.props.setToolTipRef(this.toolTipRef)
            }
            componentDidUpdate(t, e, n) {
                t.displayMicToolTip !== this.props.displayMicToolTip && this.props.displayMicToolTip ? this.setState({
                    showCount: this.state.showCount + 1
                }, (()=>{
                    o.Z.show(this.toolTipRef),
                    this.toolTipRef && this.toolTipRef.current && this.toolTipRef.current.showTooltip && this.toolTipRef.current.showTooltip({
                        currentTarget: this.toolTipContainerRef.current
                    })
                }
                )) : t.displayMicToolTip === this.props.displayMicToolTip || this.props.displayMicToolTip || o.Z.hide(this.toolTipRef),
                this.props.itemPopupShown !== t.itemPopupShown && !this.props.itemPopupShown && this.buttonRef.current && this.buttonRef.current.focus()
            }
            getDataFor(t) {
                return "mic-status" === t ? "push-to-unmute-tooltip" : "webcam-status" === t && "push-to-go-live-tooltip"
            }
            renderTalkingMutedBanner() {
                return (0,
                c.jsx)(i.Fragment, {
                    children: (0,
                    c.jsxs)("div", {
                        className: "speaking-muted",
                        children: [(0,
                        c.jsx)("div", {
                            className: "arrow-right"
                        }), (0,
                        c.jsx)("div", {
                            className: "arrow-right-border"
                        }), (0,
                        c.jsx)("div", {
                            className: "speaking-muted-message",
                            children: this.props.tooltipText
                        })]
                    })
                })
            }
            onMouseEnter() {
                this.setState({
                    isHovering: !0
                })
            }
            onMouseLeave() {
                this.setState({
                    isHovering: !1
                })
            }
            isButtonClickDisabled() {
                return this.props.isDisabled && !this.props.catchDisabledClick
            }
            render() {
                return (0,
                c.jsxs)("div", {
                    className: "top-bar-icon-btn top-bar-item " + (this.props.classes ? this.props.classes : ""),
                    id: this.props.id ? this.props.id : "",
                    "data-tip": "react-tooltip",
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    ref: this.toolTipContainerRef,
                    "data-for": this.getDataFor(this.props.id),
                    children: [this.props.animationLoaderClass ? (0,
                    c.jsx)("div", {
                        className: "animation-btn " + this.props.animationLoaderClass
                    }) : null, this.props.showTooltipOnHover && this.state.isHovering || this.props.forceShowTooltip ? this.renderTalkingMutedBanner() : null, "mic-status" === this.props.id && this.props.isMicLoading ? (0,
                    c.jsx)(r.e, {
                        classes: "participant-media-control-loader active",
                        isLoaderWhite: !0
                    }) : (0,
                    c.jsxs)(s.z, {
                        onClick: this.props.invokeNavItemFunction,
                        buttonRef: this.buttonRef,
                        isDisabled: this.isButtonClickDisabled(),
                        label: this.props.label,
                        classes: p()("participant-media-control-container", this.props.buttonClassNames, {
                            "btn-disabled-styling": this.props.isDisabled
                        }),
                        children: [this.props.iconElement ? this.props.iconElement : (0,
                        c.jsx)("div", {
                            className: "participant-media-control " + (this.props.itemBackgroundIcon ? this.props.itemBackgroundIcon : "")
                        }, `${this.props.id}-${this.props.itemBackgroundIcon}`), this.props.textDesc ? (0,
                        c.jsx)("span", {
                            className: "participants-media-control-text",
                            children: this.props.textDesc
                        }) : null]
                    }, this.props.id), this.props.animationLoaderClass ? (0,
                    c.jsx)("div", {
                        className: "animation-bottom-line " + this.props.animationLoaderClass
                    }) : null, "mic-status" === this.props.id && this.props.showToolTip ? (0,
                    c.jsx)(o.Z, {
                        id: "push-to-unmute-tooltip",
                        type: "light",
                        place: "bottom",
                        effect: "solid",
                        border: !0,
                        borderColor: "#A7A7A7",
                        arrowColor: "red",
                        ref: this.toolTipRef,
                        offset: {
                            top: 20,
                            left: -45
                        },
                        className: "push-to-unmute-tooltip-content " + (this.props.displayMicToolTip ? "show" : ""),
                        children: this.props.tooltipText
                    }) : null, "webcam-status" === this.props.id && this.props.showToolTip ? (0,
                    c.jsx)(o.Z, {
                        id: "push-to-go-live-tooltip",
                        type: "light",
                        place: "bottom",
                        effect: "solid",
                        border: !0,
                        borderColor: "#A7A7A7",
                        arrowColor: "red",
                        ref: this.toolTipRef,
                        offset: {
                            top: 20,
                            left: -45
                        },
                        children: this.props.tooltipText
                    }) : null]
                })
            }
        }
    }
    ,
    aNlF: (t,e,n)=>{
        "use strict";
        n.d(e, {
            r: ()=>r
        });
        var i, s = n("r0ML");
        function o() {
            return (o = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var r = s.forwardRef((function(t, e) {
            var n = t.title
              , r = t.titleId
              , a = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return s.createElement("svg", o({
                width: "18px",
                height: "18px",
                viewBox: "0 0 18 18",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                ref: e,
                "aria-labelledby": r
            }, a), void 0 === n ? s.createElement("title", {
                id: r
            }, "icons/exit3") : n ? s.createElement("title", {
                id: r
            }, n) : null, i || (i = s.createElement("g", {
                id: "icons/exit3",
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd"
            }, s.createElement("rect", {
                fill: "none",
                x: 0,
                y: 0,
                width: 16,
                height: 18
            }), s.createElement("path", {
                d: "M13.2345405,10.9775936 C13.4397074,11.0405998 13.5780593,10.9594733 13.7627004,10.8614766 C14.27925,10.5873225 14.6891447,10.1822574 15.2724095,9.81321957 C15.750461,9.51075136 16.3904428,9.20203512 16.7625383,8.90454335 C17.0797871,8.65093545 17.0780231,8.35040577 16.7640309,8.09740958 C16.4944102,7.88018045 15.7398176,7.5294725 15.4295403,7.34234894 C14.837445,6.98526513 14.3218482,6.44060181 13.7315364,6.11748319 C13.5634916,6.02550058 13.4248717,5.96646271 13.2374352,6.02367561 C13.048461,6.08139228 12.9607585,6.20110759 12.9550594,6.35932466 C12.951848,6.44906617 12.9540643,6.53887963 12.9540643,6.6286931 C12.9539739,6.85409036 12.97184,6.73970633 12.97184,6.98406661 C12.8574966,6.98406661 13.2722414,6.98406658 13.1912783,6.98406658 C12.2659467,6.9842465 11.3878989,6.98237541 10.4625674,6.98406661 C10.1294878,6.98464234 10.0218838,7.07287256 10.0210244,7.34234894 C10.0192152,7.88709497 10.0031582,9.11243151 10.0045151,9.65714156 C10.0052388,9.93302291 10.1166875,10.0199577 10.4657335,10.0201736 C11.3760485,10.0207494 11.7422862,10.0201736 12.6526011,10.0201736 C12.7414344,10.0201377 12.8302677,10.0201736 12.9540643,10.0201736 C12.9540643,10.3431207 12.9549689,10.2948889 12.9508982,10.5873225 C12.9484557,10.7646105 13.0154877,10.9102695 13.2345405,10.9775936 Z M10.1568106,5.00596217 L10.1568106,4.77118143 C10.1566187,3.58683518 9.95824237,3.40778575 9.95997009,2.22347862 C9.96016206,2.09629105 9.96373269,1.99843641 9.78673709,1.99882751 C7.63437846,2.00363811 6.32675578,1.98897165 4.15412739,1.99882751 C4.13531448,1.99891285 3.64938461,1.98897165 3.58227218,1.99882751 C3.68628109,2.04349178 4.22299011,2.25381061 4.28983378,2.28001469 C5.42636821,2.72532763 6.37120846,3.05264864 7.50793486,3.49741402 C7.92635092,3.66116998 7.98223298,3.81391708 7.98223298,4.27682977 C7.98227137,7.86236938 7.98200262,9.15636162 7.98223298,12.7418621 L7.98223298,12.9652226 C8.05694739,12.9701114 8.11254167,12.9768384 8.16817434,12.9769166 C8.88348996,12.9776206 9.02569441,12.9690554 9.74093324,12.9769166 C9.90798483,12.9787939 9.96089154,12.92752 9.95997009,12.7552379 C9.9536735,11.5644776 9.9599317,13.3683216 9.95997009,12.177483 L9.95997009,11.9677331 L11.9783153,11.9677331 C11.9821163,12.0255385 11.9890272,12.081623 11.9890272,12.1377467 C11.9894111,13.56935 12.0003917,13.0659296 11.999739,14.4975329 C11.9995471,14.9036962 11.8159093,15.0208393 11.4173429,15.0220126 C10.4912451,15.0247112 9.09427214,15.0361406 8.16817434,15.0364926 L7.95743056,15.0364926 C7.95286169,15.1184684 7.94171002,15.1869544 7.94572044,15.2547687 C7.98223298,15.8721782 7.98499734,16.8935684 7.98223298,17.5247738 C7.98031329,17.964846 7.85766434,18.0467175 7.45253255,17.8880851 C5.29829262,17.0447048 3.48483015,16.2371381 1.33116613,15.3922325 C1.06544237,15.2880029 1.00051839,15.1889749 1.00048,14.8925168 C1.00013445,10.1031539 1,5.31375184 1,0.524388925 C1,0.116700357 1.11301234,0.000268193758 1.51119485,0.00022908319 C4.8131802,-0.000201133066 8.11508877,0 11.4170741,0.000620188877 C11.8067332,0.000698410015 11.9993935,0.192105533 11.999739,0.581294803 C12.0009292,2.02592188 11.9965907,3.40391505 11.9964756,4.84854213 C11.9964756,4.89375395 11.992329,4.93892666 11.9890272,5.00596217 L10.1568106,5.00596217 Z",
                id: "Fill-1",
                fill: "#FFFFFF"
            }))))
        }
        ))
    }
    ,
    NOi6: (t,e,n)=>{
        "use strict";
        n.d(e, {
            r: ()=>o
        });
        var i = n("r0ML");
        function s() {
            return (s = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var o = i.forwardRef((function(t, e) {
            var n = t.title
              , o = t.titleId
              , r = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = function(t, e) {
                    if (null == t)
                        return {};
                    var n, i, s = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++)
                        e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
                }
                return s
            }(t, ["title", "titleId"]);
            return i.createElement("svg", s({
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 68.7 68.7",
                style: {
                    enableBackground: "new 0 0 68.7 68.7"
                },
                xmlSpace: "preserve",
                ref: e,
                "aria-labelledby": o
            }, r), n ? i.createElement("title", {
                id: o
            }, n) : null, i.createElement("path", {
                id: "Rectangle_1368_copy_4",
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#F2F2F2"
                },
                d: "M42.1,62.9H68V68H42.1V62.9z  M62.9,42.1H68v20.7h-5.2V42.1z M42.1,0.6H68v5.2H42.1V0.6z M62.9,5.8H68v20.7h-5.2V5.8z M0.7,62.9h25.9V68H0.7V62.9z M0.7,42.1h5.2 l0,20.7H0.7L0.7,42.1z M0.7,0.6h25.9v5.2H0.7V0.6z M0.7,5.8h5.2v20.7H0.7V5.8z"
            }))
        }
        ))
    }
    ,
    RBRZ: function(t) {
        t.exports = function() {
            "use strict";
            var t = "millisecond"
              , e = "second"
              , n = "minute"
              , i = "hour"
              , s = "day"
              , o = "week"
              , r = "month"
              , a = "quarter"
              , p = "year"
              , c = "date"
              , l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
              , d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
              , h = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            }
              , A = function(t, e, n) {
                var i = String(t);
                return !i || i.length >= e ? t : "" + Array(e + 1 - i.length).join(n) + t
            }
              , u = {
                s: A,
                z: function(t) {
                    var e = -t.utcOffset()
                      , n = Math.abs(e)
                      , i = Math.floor(n / 60)
                      , s = n % 60;
                    return (e <= 0 ? "+" : "-") + A(i, 2, "0") + ":" + A(s, 2, "0")
                },
                m: function t(e, n) {
                    if (e.date() < n.date())
                        return -t(n, e);
                    var i = 12 * (n.year() - e.year()) + (n.month() - e.month())
                      , s = e.clone().add(i, r)
                      , o = n - s < 0
                      , a = e.clone().add(i + (o ? -1 : 1), r);
                    return +(-(i + (n - s) / (o ? s - a : a - s)) || 0)
                },
                a: function(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                },
                p: function(l) {
                    return {
                        M: r,
                        y: p,
                        w: o,
                        d: s,
                        D: c,
                        h: i,
                        m: n,
                        s: e,
                        ms: t,
                        Q: a
                    }[l] || String(l || "").toLowerCase().replace(/s$/, "")
                },
                u: function(t) {
                    return void 0 === t
                }
            }
              , m = "en"
              , g = {};
            g[m] = h;
            var C = function(t) {
                return t instanceof w
            }
              , f = function(t, e, n) {
                var i;
                if (!t)
                    return m;
                if ("string" == typeof t)
                    g[t] && (i = t),
                    e && (g[t] = e,
                    i = t);
                else {
                    var s = t.name;
                    g[s] = t,
                    i = s
                }
                return !n && i && (m = i),
                i || !n && m
            }
              , b = function(t, e) {
                if (C(t))
                    return t.clone();
                var n = "object" == typeof e ? e : {};
                return n.date = t,
                n.args = arguments,
                new w(n)
            }
              , v = u;
            v.l = f,
            v.i = C,
            v.w = function(t, e) {
                return b(t, {
                    locale: e.$L,
                    utc: e.$u,
                    x: e.$x,
                    $offset: e.$offset
                })
            }
            ;
            var w = function() {
                function h(t) {
                    this.$L = f(t.locale, null, !0),
                    this.parse(t)
                }
                var A = h.prototype;
                return A.parse = function(t) {
                    this.$d = function(t) {
                        var e = t.date
                          , n = t.utc;
                        if (null === e)
                            return new Date(NaN);
                        if (v.u(e))
                            return new Date;
                        if (e instanceof Date)
                            return new Date(e);
                        if ("string" == typeof e && !/Z$/i.test(e)) {
                            var i = e.match(l);
                            if (i) {
                                var s = i[2] - 1 || 0
                                  , o = (i[7] || "0").substring(0, 3);
                                return n ? new Date(Date.UTC(i[1], s, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)) : new Date(i[1],s,i[3] || 1,i[4] || 0,i[5] || 0,i[6] || 0,o)
                            }
                        }
                        return new Date(e)
                    }(t),
                    this.$x = t.x || {},
                    this.init()
                }
                ,
                A.init = function() {
                    var t = this.$d;
                    this.$y = t.getFullYear(),
                    this.$M = t.getMonth(),
                    this.$D = t.getDate(),
                    this.$W = t.getDay(),
                    this.$H = t.getHours(),
                    this.$m = t.getMinutes(),
                    this.$s = t.getSeconds(),
                    this.$ms = t.getMilliseconds()
                }
                ,
                A.$utils = function() {
                    return v
                }
                ,
                A.isValid = function() {
                    return !("Invalid Date" === this.$d.toString())
                }
                ,
                A.isSame = function(t, e) {
                    var n = b(t);
                    return this.startOf(e) <= n && n <= this.endOf(e)
                }
                ,
                A.isAfter = function(t, e) {
                    return b(t) < this.startOf(e)
                }
                ,
                A.isBefore = function(t, e) {
                    return this.endOf(e) < b(t)
                }
                ,
                A.$g = function(t, e, n) {
                    return v.u(t) ? this[e] : this.set(n, t)
                }
                ,
                A.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                ,
                A.valueOf = function() {
                    return this.$d.getTime()
                }
                ,
                A.startOf = function(t, a) {
                    var l = this
                      , d = !!v.u(a) || a
                      , h = v.p(t)
                      , A = function(t, e) {
                        var n = v.w(l.$u ? Date.UTC(l.$y, e, t) : new Date(l.$y,e,t), l);
                        return d ? n : n.endOf(s)
                    }
                      , u = function(t, e) {
                        return v.w(l.toDate()[t].apply(l.toDate("s"), (d ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), l)
                    }
                      , m = this.$W
                      , g = this.$M
                      , C = this.$D
                      , f = "set" + (this.$u ? "UTC" : "");
                    switch (h) {
                    case p:
                        return d ? A(1, 0) : A(31, 11);
                    case r:
                        return d ? A(1, g) : A(0, g + 1);
                    case o:
                        var b = this.$locale().weekStart || 0
                          , w = (m < b ? m + 7 : m) - b;
                        return A(d ? C - w : C + (6 - w), g);
                    case s:
                    case c:
                        return u(f + "Hours", 0);
                    case i:
                        return u(f + "Minutes", 1);
                    case n:
                        return u(f + "Seconds", 2);
                    case e:
                        return u(f + "Milliseconds", 3);
                    default:
                        return this.clone()
                    }
                }
                ,
                A.endOf = function(t) {
                    return this.startOf(t, !1)
                }
                ,
                A.$set = function(o, a) {
                    var l, d = v.p(o), h = "set" + (this.$u ? "UTC" : ""), A = (l = {},
                    l[s] = h + "Date",
                    l[c] = h + "Date",
                    l[r] = h + "Month",
                    l[p] = h + "FullYear",
                    l[i] = h + "Hours",
                    l[n] = h + "Minutes",
                    l[e] = h + "Seconds",
                    l[t] = h + "Milliseconds",
                    l)[d], u = d === s ? this.$D + (a - this.$W) : a;
                    if (d === r || d === p) {
                        var m = this.clone().set(c, 1);
                        m.$d[A](u),
                        m.init(),
                        this.$d = m.set(c, Math.min(this.$D, m.daysInMonth())).$d
                    } else
                        A && this.$d[A](u);
                    return this.init(),
                    this
                }
                ,
                A.set = function(t, e) {
                    return this.clone().$set(t, e)
                }
                ,
                A.get = function(t) {
                    return this[v.p(t)]()
                }
                ,
                A.add = function(t, a) {
                    var c, l = this;
                    t = Number(t);
                    var d = v.p(a)
                      , h = function(e) {
                        var n = b(l);
                        return v.w(n.date(n.date() + Math.round(e * t)), l)
                    };
                    if (d === r)
                        return this.set(r, this.$M + t);
                    if (d === p)
                        return this.set(p, this.$y + t);
                    if (d === s)
                        return h(1);
                    if (d === o)
                        return h(7);
                    var A = (c = {},
                    c[n] = 6e4,
                    c[i] = 36e5,
                    c[e] = 1e3,
                    c)[d] || 1
                      , u = this.$d.getTime() + t * A;
                    return v.w(u, this)
                }
                ,
                A.subtract = function(t, e) {
                    return this.add(-1 * t, e)
                }
                ,
                A.format = function(t) {
                    var e = this;
                    if (!this.isValid())
                        return "Invalid Date";
                    var n = t || "YYYY-MM-DDTHH:mm:ssZ"
                      , i = v.z(this)
                      , s = this.$locale()
                      , o = this.$H
                      , r = this.$m
                      , a = this.$M
                      , p = s.weekdays
                      , c = s.months
                      , l = function(t, i, s, o) {
                        return t && (t[i] || t(e, n)) || s[i].substr(0, o)
                    }
                      , h = function(t) {
                        return v.s(o % 12 || 12, t, "0")
                    }
                      , A = s.meridiem || function(t, e, n) {
                        var i = t < 12 ? "AM" : "PM";
                        return n ? i.toLowerCase() : i
                    }
                      , u = {
                        YY: String(this.$y).slice(-2),
                        YYYY: this.$y,
                        M: a + 1,
                        MM: v.s(a + 1, 2, "0"),
                        MMM: l(s.monthsShort, a, c, 3),
                        MMMM: l(c, a),
                        D: this.$D,
                        DD: v.s(this.$D, 2, "0"),
                        d: String(this.$W),
                        dd: l(s.weekdaysMin, this.$W, p, 2),
                        ddd: l(s.weekdaysShort, this.$W, p, 3),
                        dddd: p[this.$W],
                        H: String(o),
                        HH: v.s(o, 2, "0"),
                        h: h(1),
                        hh: h(2),
                        a: A(o, r, !0),
                        A: A(o, r, !1),
                        m: String(r),
                        mm: v.s(r, 2, "0"),
                        s: String(this.$s),
                        ss: v.s(this.$s, 2, "0"),
                        SSS: v.s(this.$ms, 3, "0"),
                        Z: i
                    };
                    return n.replace(d, (function(t, e) {
                        return e || u[t] || i.replace(":", "")
                    }
                    ))
                }
                ,
                A.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }
                ,
                A.diff = function(t, c, l) {
                    var d, h = v.p(c), A = b(t), u = 6e4 * (A.utcOffset() - this.utcOffset()), m = this - A, g = v.m(this, A);
                    return g = (d = {},
                    d[p] = g / 12,
                    d[r] = g,
                    d[a] = g / 3,
                    d[o] = (m - u) / 6048e5,
                    d[s] = (m - u) / 864e5,
                    d[i] = m / 36e5,
                    d[n] = m / 6e4,
                    d[e] = m / 1e3,
                    d)[h] || m,
                    l ? g : v.a(g)
                }
                ,
                A.daysInMonth = function() {
                    return this.endOf(r).$D
                }
                ,
                A.$locale = function() {
                    return g[this.$L]
                }
                ,
                A.locale = function(t, e) {
                    if (!t)
                        return this.$L;
                    var n = this.clone()
                      , i = f(t, e, !0);
                    return i && (n.$L = i),
                    n
                }
                ,
                A.clone = function() {
                    return v.w(this.$d, this)
                }
                ,
                A.toDate = function() {
                    return new Date(this.valueOf())
                }
                ,
                A.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }
                ,
                A.toISOString = function() {
                    return this.$d.toISOString()
                }
                ,
                A.toString = function() {
                    return this.$d.toUTCString()
                }
                ,
                h
            }()
              , y = w.prototype;
            return b.prototype = y,
            [["$ms", t], ["$s", e], ["$m", n], ["$H", i], ["$W", s], ["$M", r], ["$y", p], ["$D", c]].forEach((function(t) {
                y[t[1]] = function(e) {
                    return this.$g(e, t[0], t[1])
                }
            }
            )),
            b.extend = function(t, e) {
                return t.$i || (t(e, w, b),
                t.$i = !0),
                b
            }
            ,
            b.locale = f,
            b.isDayjs = C,
            b.unix = function(t) {
                return b(1e3 * t)
            }
            ,
            b.en = g[m],
            b.Ls = g,
            b.p = {},
            b
        }()
    },
    "9JSU": (t,e,n)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.Collapse = void 0;
        var i, s = (i = n("r0ML")) && i.__esModule ? i : {
            default: i
        };
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function r(t, e) {
            return (r = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function a(t, e) {
            return !e || "object" !== o(e) && "function" != typeof e ? p(t) : e
        }
        function p(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function c(t) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        function l(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        var d = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && r(t, e)
            }(d, t);
            var e, n, i, o = (n = d,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            function() {
                var t, e = c(n);
                if (i) {
                    var s = c(this).constructor;
                    t = Reflect.construct(e, arguments, s)
                } else
                    t = e.apply(this, arguments);
                return a(this, t)
            }
            );
            function d(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, d),
                l(p(e = o.call(this, t)), "timeout", void 0),
                l(p(e), "container", void 0),
                l(p(e), "content", void 0),
                l(p(e), "onResize", (function() {
                    if (global.clearTimeout(e.timeout),
                    e.container && e.content) {
                        var t = e.props
                          , n = t.isOpened
                          , i = t.checkTimeout
                          , s = e.container.clientHeight
                          , o = e.content.clientHeight
                          , r = n && o === s
                          , a = !n && 0 === s;
                        r || a ? e.onRest({
                            isFullyOpened: r,
                            isFullyClosed: a,
                            isOpened: n,
                            containerHeight: s,
                            contentHeight: o
                        }) : (e.onWork({
                            isFullyOpened: r,
                            isFullyClosed: a,
                            isOpened: n,
                            containerHeight: s,
                            contentHeight: o
                        }),
                        e.timeout = setTimeout((function() {
                            return e.onResize()
                        }
                        ), i))
                    }
                }
                )),
                l(p(e), "onRest", (function(t) {
                    var n = t.isFullyOpened
                      , i = t.isFullyClosed
                      , s = t.isOpened
                      , o = t.containerHeight
                      , r = t.contentHeight;
                    if (e.container && e.content && (s && e.container.style.height === "".concat(r, "px") || !s && "0px" === e.container.style.height)) {
                        e.container.style.overflow = s ? "initial" : "hidden",
                        e.container.style.height = s ? "auto" : "0px";
                        var a = e.props.onRest;
                        a && a({
                            isFullyOpened: n,
                            isFullyClosed: i,
                            isOpened: s,
                            containerHeight: o,
                            contentHeight: r
                        })
                    }
                }
                )),
                l(p(e), "onWork", (function(t) {
                    var n = t.isFullyOpened
                      , i = t.isFullyClosed
                      , s = t.isOpened
                      , o = t.containerHeight
                      , r = t.contentHeight;
                    if (e.container && e.content && (!s || e.container.style.height !== "".concat(r, "px")) && (s || "0px" !== e.container.style.height)) {
                        e.container.style.overflow = "hidden",
                        e.container.style.height = s ? "".concat(r, "px") : "0px";
                        var a = e.props.onWork;
                        a && a({
                            isFullyOpened: n,
                            isFullyClosed: i,
                            isOpened: s,
                            containerHeight: o,
                            contentHeight: r
                        })
                    }
                }
                )),
                l(p(e), "onRefContainer", (function(t) {
                    e.container = t
                }
                )),
                l(p(e), "onRefContent", (function(t) {
                    e.content = t
                }
                )),
                e.initialStyle = t.initialStyle ? t.initialStyle : t.isOpened ? {
                    height: "auto",
                    overflow: "initial"
                } : {
                    height: "0px",
                    overflow: "hidden"
                },
                e
            }
            return (e = [{
                key: "componentDidMount",
                value: function() {
                    this.onResize()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(t) {
                    var e = this.props
                      , n = e.theme;
                    return e.children !== t.children || e.isOpened !== t.isOpened || Object.keys(n).some((function(e) {
                        return n[e] !== t.theme[e]
                    }
                    ))
                }
            }, {
                key: "getSnapshotBeforeUpdate",
                value: function() {
                    return this.container && this.content ? ("auto" === this.container.style.height && (this.container.style.height = "".concat(this.content.clientHeight, "px")),
                    null) : null
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.onResize()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    global.clearTimeout(this.timeout)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props
                      , e = t.theme;
                    return s.default.createElement("div", {
                        ref: this.onRefContainer,
                        className: e.collapse,
                        style: this.initialStyle,
                        "aria-hidden": !t.isOpened
                    }, s.default.createElement("div", {
                        ref: this.onRefContent,
                        className: e.content
                    }, t.children))
                }
            }]) && function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }(d.prototype, e),
            d
        }(s.default.Component);
        e.Collapse = d,
        l(d, "defaultProps", {
            theme: {
                collapse: "ReactCollapse--collapse",
                content: "ReactCollapse--content"
            },
            initialStyle: void 0,
            onRest: void 0,
            onWork: void 0,
            checkTimeout: 50
        })
    }
    ,
    L8dN: (t,e,n)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.UnmountClosed = void 0;
        var i, s = (i = n("r0ML")) && i.__esModule ? i : {
            default: i
        }, o = n("9JSU");
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function a() {
            return (a = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function p(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? p(Object(n), !0).forEach((function(e) {
                    m(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function l(t, e) {
            if (null == t)
                return {};
            var n, i, s = function(t, e) {
                if (null == t)
                    return {};
                var n, i, s = {}, o = Object.keys(t);
                for (i = 0; i < o.length; i++)
                    e.indexOf(n = o[i]) >= 0 || (s[n] = t[n]);
                return s
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (i = 0; i < o.length; i++)
                    e.indexOf(n = o[i]) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
            }
            return s
        }
        function d(t, e) {
            return (d = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function h(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? A(t) : e
        }
        function A(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        function m(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        var g = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && d(t, e)
            }(p, t);
            var e, n, i, r = (n = p,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            function() {
                var t, e = u(n);
                if (i) {
                    var s = u(this).constructor;
                    t = Reflect.construct(e, arguments, s)
                } else
                    t = e.apply(this, arguments);
                return h(this, t)
            }
            );
            function p(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, p),
                m(A(e = r.call(this, t)), "onWork", (function(t) {
                    var n = t.isOpened
                      , i = l(t, ["isOpened"]);
                    e.setState({
                        isResting: !1,
                        isOpened: n
                    });
                    var s = e.props.onWork;
                    s && s(c({
                        isOpened: n
                    }, i))
                }
                )),
                m(A(e), "onRest", (function(t) {
                    var n = t.isOpened
                      , i = l(t, ["isOpened"]);
                    e.setState({
                        isResting: !0,
                        isOpened: n,
                        isInitialRender: !1
                    });
                    var s = e.props.onRest;
                    s && s(c({
                        isOpened: n
                    }, i))
                }
                )),
                m(A(e), "getInitialStyle", (function() {
                    var t = e.state;
                    return t.isInitialRender && t.isOpened ? {
                        height: "auto",
                        overflow: "initial"
                    } : {
                        height: "0px",
                        overflow: "hidden"
                    }
                }
                )),
                e.state = {
                    isResting: !0,
                    isOpened: t.isOpened,
                    isInitialRender: !0
                },
                e
            }
            return (e = [{
                key: "componentDidUpdate",
                value: function(t) {
                    var e = this.props.isOpened;
                    t.isOpened !== e && this.setState({
                        isResting: !1,
                        isOpened: e,
                        isInitialRender: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.state;
                    return t.isResting && !t.isOpened ? null : s.default.createElement(o.Collapse, a({}, this.props, {
                        initialStyle: this.getInitialStyle(),
                        onWork: this.onWork,
                        onRest: this.onRest
                    }))
                }
            }]) && function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }(p.prototype, e),
            p
        }(s.default.PureComponent);
        e.UnmountClosed = g,
        m(g, "defaultProps", {
            onWork: void 0,
            onRest: void 0
        })
    }
    ,
    G6fJ: (t,e,n)=>{
        "use strict";
        var i = n("9JSU").Collapse
          , s = n("L8dN").UnmountClosed;
        t.exports = s,
        s.Collapse = i,
        s.UnmountClosed = s
    }
    ,
    GLL4: (t,e,n)=>{
        var i = n("T18L");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    YvY4: (t,e,n)=>{
        var i = n("a1WG");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    "6P3E": (t,e,n)=>{
        var i = n("O+rK");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    WTrO: (t,e,n)=>{
        var i = n("wnV+");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    AkLc: (t,e,n)=>{
        var i = n("lcfy");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    RTi4: (t,e,n)=>{
        var i = n("gRiU");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    L19K: (t,e,n)=>{
        var i = n("HiER");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    MO23: (t,e,n)=>{
        var i = n("R5rV");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    "8atT": (t,e,n)=>{
        var i = n("mLw6");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    aofU: (t,e,n)=>{
        var i = n("UY6L");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    Culp: (t,e,n)=>{
        var i = n("nC8l");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    "iaY/": (t,e,n)=>{
        var i = n("pgGo");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    lpDJ: (t,e,n)=>{
        var i = n("7B0B");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    gV3G: (t,e,n)=>{
        var i = n("i9Wr");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
    ,
    "7xoy": (t,e,n)=>{
        var i = n("HaE/");
        "string" == typeof i && (i = [[t.id, i, ""]]),
        n("LPAU")(i, {
            insert: "head",
            singleton: !1
        }),
        i.locals && (t.exports = i.locals)
    }
}]);
//# sourceMappingURL=124.a66302547b84a9b9170f.esm.js.map
