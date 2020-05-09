import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://kit.fontawesome.com/d7bee25b49.js"
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, ["https://kit.fontawesome.com/d7bee25b49.js"]);
};

export default useScript;