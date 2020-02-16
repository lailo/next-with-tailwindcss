import * as React from 'react'
import Switch from 'react-switch'
import { FiMoon, FiSun } from 'react-icons/fi'

const DARK_MODE_CLASS_NAME = 'dark-mode'
const DARK_MODE_TRANSITION_CLASS_NAME = 'dark-mode-transition'
const DARK_MODE_TRANSITION_DURATION = 500

const ThemeSwitch: React.FC = () => {
  const [hasActiveDarkMode, activateDarkMode] = React.useState(false)

  const toggleDarkMode = () => {
    document.documentElement.classList.add(DARK_MODE_TRANSITION_CLASS_NAME)
    if (hasActiveDarkMode) {
      document.documentElement.classList.remove(DARK_MODE_CLASS_NAME)
    } else {
      document.documentElement.classList.add(DARK_MODE_CLASS_NAME)
    }
    activateDarkMode(!hasActiveDarkMode)
    setTimeout(
      () =>
        document.documentElement.classList.remove(
          DARK_MODE_TRANSITION_CLASS_NAME
        ),
      DARK_MODE_TRANSITION_DURATION
    )
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
      className="text-white dark:text-black"
    />
  )
}

export default ThemeSwitch
