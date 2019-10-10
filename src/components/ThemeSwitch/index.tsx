import * as React from 'react'
import Switch from 'react-switch'

const DARK_MODE_KEY = 'dark-mode'

const ThemeSwitch: React.FunctionComponent = () => {
  const [hasActiveDarkMode, activateDarkMode] = React.useState<boolean>(false)

  const toggleDarkMode = () => {
    if (hasActiveDarkMode) {
      document.body.classList.remove(DARK_MODE_KEY)
    } else {
      document.body.classList.add(DARK_MODE_KEY)
    }
    activateDarkMode(!hasActiveDarkMode)
  }

  React.useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      toggleDarkMode()
    }
  }, [])

  return (
    <Switch
      onChange={toggleDarkMode}
      checked={hasActiveDarkMode}
      checkedIcon={null}
      uncheckedIcon={null}
      onColor="#f7fafc"
      offColor="#1a202c"
      onHandleColor="#1a202c"
      offHandleColor="#ffffff"
    />
  )
}

export default ThemeSwitch
