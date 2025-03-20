import { useEffect } from "react";

const TabSpoofer = () => {
  useEffect(() => {
    const originalTitle = document.title;
    const originalFavicon = document.querySelector("link[rel='icon']").href;

    // ✅ Easily add more spoofing options here
    const spoofOptions = [
      { title: "Inbox (5) - Gmail", icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" },
      { title: "(2) Facebook", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png" },
      { title: "X / Home", icon: "https://abs.twimg.com/favicons/twitter.2.ico" },
      { title: "Yahoo Mail", icon: "https://s.yimg.com/cv/apiv2/myc/mail/Mail_iOS_app_icon.png" },
      { title: "(1) LinkedIn", icon: "https://store-images.s-microsoft.com/image/apps.1719.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.abf46174-2d32-4f53-a6cd-644d5b2be452" },
      { title: "WhatsApp", icon: "https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png" }
    ];

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Randomly pick one spoof option
        const randomSpoof = spoofOptions[Math.floor(Math.random() * spoofOptions.length)];
        document.title = randomSpoof.title;
        document.querySelector("link[rel='icon']").href = randomSpoof.icon;
      } else {
        // Restore original title and icon when user returns
        document.title = originalTitle;
        document.querySelector("link[rel='icon']").href = originalFavicon;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
};

export default TabSpoofer;
