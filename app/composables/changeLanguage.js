import { useState } from '#app'

// Provide a simple language state to be used globally
export const useChangeLanguage = () => {
  const language = useState('language', () => 'en')

  const toggleLanguage = () => {
    language.value = language.value === 'en' ? 'es' : 'en'
  }

  return {
    language,
    toggleLanguage
  }
}
