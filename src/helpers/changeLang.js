import i18n from '../i18n';

export const changeLang = (ln) => {
    return () => {
      i18n.changeLanguage(ln)
    }
  }