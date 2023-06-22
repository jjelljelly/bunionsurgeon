import style from "./CookieConsent.module.css";

export function CookieConsent({ setCookies, declineCookies }) {
  return (
    <div className={style.cookieCont}>
      <h2>We value your privacy</h2>
      <div className={style.buttonCont}>
        <div className={style.textCont}>
          <p className={style.cookieText}>
            We use cookies to enhance your browsing experience, serve
            personalized ads or content, and analyze our traffic. By clicking
            "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className={style.cookieButton}>
          <button className={style.button} onClick={declineCookies}>
            Reject All
          </button>
          <button className={style.button} onClick={setCookies}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
