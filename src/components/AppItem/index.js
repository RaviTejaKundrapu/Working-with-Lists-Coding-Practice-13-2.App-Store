// Write your code here
import './index.css'

// category appId

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList
  return (
    <li className="appContainerSpecific">
      <img src={imageUrl} alt={appName} className="appimage" />
      <p className="appname">{appName}</p>
    </li>
  )
}

export default AppItem
