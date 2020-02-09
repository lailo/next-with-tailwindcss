import * as React from 'react'
import Switch from 'react-switch'
import { FiMoon, FiSun } from 'react-icons/fi'

const DARK_MODE_KEY = 'dark-mode'

const ThemeSwitch: React.FC = () => {
  const [hasActiveDarkMode, activateDarkMode] = React.useState(false)

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
      checkedIcon={<FiSun className="inline-block mx-2" />}
      uncheckedIcon={<FiMoon className="inline-block mx-2" />}
      onColor="#f7fafc"
      offColor="#1a202c"
      onHandleColor="#1a202c"
      offHandleColor="#ffffff"
      className="text-white"
    />
  )
}

export default ThemeSwitch
