import { useLanguage } from '../context/LanguageContext';
import { profileDataByLang } from '../constants/profile';

export function useProfile() {
    const { language } = useLanguage();
    return profileDataByLang[language];
}
