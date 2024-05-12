// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, onChangeItemsByTab, isAccessing} = props
  const {tabId, displayText} = tabsList
  const changeappByTabSelection = () => {
    onChangeItemsByTab(tabId)
  }
  const applyBorderBottonStyle = isAccessing ? 'border-bottom-color' : ''
  return (
    <li>
      <button
        type="button"
        className={`tab-style ${applyBorderBottonStyle}`}
        onClick={changeappByTabSelection}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
