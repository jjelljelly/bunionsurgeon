import React, { useState, useEffect } from "react";
import { CookieConsent } from "../components/templates/CookieConsent";

const setGoogleAnalytics = () => {
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-84DQJ0644W";
  script.async = true;
  console.log("check for set google analytics");
  const script2 = document.createElement("script");
  script2.text = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-84DQJ0644W');`;
  document.head.appendChild(script);
  document.head.appendChild(script2);
};

export default function Cookies() {
  const [cookieConsent, setCookieConsent] = useState("false");

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    console.log(localStorage.getItem("cookieConsent"));
    setGoogleAnalytics();
    setCookieConsent(true);
  };

  useEffect(() => {
    const hasDoneBefore = localStorage.getItem("cookieConsent");
    if (Boolean(hasDoneBefore)) {
      setGoogleAnalytics();
    } else {
      setCookieConsent(false);
    }
    setCookieConsent(hasDoneBefore);
  }, []);

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setCookieConsent(true);
  };

  return (
    <div>
      {!cookieConsent && (
        <CookieConsent
          setCookies={acceptCookies}
          declineCookies={declineCookies}
        />
      )}
    </div>
  );
}
