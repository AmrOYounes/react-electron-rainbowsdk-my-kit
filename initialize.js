

    document.addEventListener('DOMContentLoaded', () => {
      
        var applicationID = 'da08203056d111e9959047751de2fb98';
        var applicationSecret = 'JtUbeBs2wsomWGQMexjg4Us4BBRLpCpTjk84IB4uwBiZCtOz5gsqz6LscEuDzsG3';
    
        angular.bootstrap(document, ["sdk"]).get("rainbowSDK");
    
        var onReady = function onReady() {
            console.log("[DEMO] :: On SDK Ready !");
        };
    
        var onLoaded = function onLoaded() {
            console.log("[DEMO] :: On SDK Loaded !");
    
            rainbowSDK.initialize(applicationID, applicationSecret).then(function() {
                console.log("[DEMO] :: Rainbow SDK is initialized!");
            }).catch(function(err) {
                console.log("[DEMO] :: Something went wrong with the SDK...", err);
            });
        };
    
        document.addEventListener(rainbowSDK.RAINBOW_ONREADY, onReady);
    
        document.addEventListener(rainbowSDK.RAINBOW_ONLOADED, onLoaded);
    
        rainbowSDK.load();
      
    });


