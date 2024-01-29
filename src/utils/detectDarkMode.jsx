
const detectDarkMode = () => {

  // if (
  //   window.matchMedia &&
  //   window.matchMedia('(prefers-color-scheme: dark)').matches
  // ) {
  //   return 'dark'
  // } 

  // return 'light'

  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
    

  return (isDarkMode ? 'dark' : 'light')

}

export default detectDarkMode