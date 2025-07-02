import { useCallback } from "react";

const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const close = () => {
    tg.close();
  };

  const toggleMainBtn = useCallback(() => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, []);

  return {
    tg,
    close,
    toggleMainBtn,
    user: tg.initDataUnsafe.user,
  };
};
