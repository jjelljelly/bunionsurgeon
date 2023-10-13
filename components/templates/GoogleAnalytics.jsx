export function setGoogleAnalytics() {
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-84DQJ0644W";
  script.async = true;
  const script2 = document.createElement("script");
  script2.text = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-84DQJ0644W');`;
  document.head.appendChild(script);
  document.head.appendChild(script2);
}


<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XZSPGZ1KVC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XZSPGZ1KVC');
</script>
