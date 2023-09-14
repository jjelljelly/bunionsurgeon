import { CookieModal } from "./CookieModal";
import { useState } from "react";
import style from "./CookieConsent.module.css";

export function CookieConsent({ setCookies, declineCookies }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className={style.cookieCont}>
      <h2>We value your privacy</h2>
      <div className={style.buttonCont}>
        <div className={style.textCont}>
          <p className={style.cookieText}>
            We use cookies to enhance your browsing experience and to analyze
            our traffic. We will not directly market you. By clicking "Accept
            All", you consent to our use of cookies.
          </p>
        </div>
        <div className={style.cookieButton}>
          <p
            onClick={() => {
              setVisible(true);
            }}
            className={style.options}
          >
            More options
          </p>
          <button className={style.button} onClick={setCookies}>
            Accept All
          </button>
        </div>
        <CookieModal visible={Boolean(visible)} setVisible={setVisible}>
          {Boolean(visible) && (
            <div>
              <p>
                If you would like to reject cookies please select the button
              </p>
              <button className={style.button} onClick={declineCookies}>
                Reject All
              </button>
            </div>
          )}
        </CookieModal>
      </div>
    </div>
  );
}
