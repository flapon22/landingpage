import { useEffect } from "react";
import styles from "../form-style";

const Hubform = () => {
  useEffect(() => {
    const script = document.createElement("script");
    const style = document.createElement("style");
    const mainNode = document.createElement("hubspotForm");
    let frameListener;

    script.src = "https://js.hsforms.net/forms/v2.js";
    script.defer = true;

    if (!mainNode.hasChildNodes()) {
      document.body.appendChild(script);
    }

    const frameLoaded = () => {
      var frame = document.querySelector("iframe");
      if (frame != null) {
        var frmHead = frame.contentDocument.querySelector("head");

        if (frmHead != null) {
          clearInterval(frameListener); // stop the listener
          frmHead.appendChild(style);
          style.appendChild(document.createTextNode(styles));
        }
      }
    };

    frameListener = () => setInterval(frameLoaded(), 50);

    window.addEventListener("load", () => {
      let ready = null;
      if (window.hbspt) {
        ready = window.hbspt.forms.create({
          region: "na1",
          portalId: "6553628",
          formId: "7a53f2e8-6e1f-4235-93d4-17f48b91a62e",
          target: "#hubspotForm",
        });
      }

      ready.onReady(() => {
        frameListener();
      });
    });
  }, []);

  return <div id="hubspotForm"></div>;
};

export default Hubform;
