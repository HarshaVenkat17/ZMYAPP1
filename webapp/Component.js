sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "myapp1/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("myapp1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                this.getmychatbot();
            },
            getmychatbot: function () {
                if(!document.getElementById('chatbot')){
                    //var newChatbot = document.createElement("script");
                    //newChatbot.setAttribute("id","cai-webchat");
                    //newChatbot.setAttribute("src","https://cdn.cai.tools.sap/webchat/webchat.js");
                    //newChatbot.setAttribute("token","4d99039d981496ce4bfef16b81be4bed");
                    //newChatbot.setAttribute("channelId","b6a7d68a-7719-4098-81f2-c4d1c98b5731");
                    //document.body.appendChild(newChatbot);
                }
            }
        });
    }
);