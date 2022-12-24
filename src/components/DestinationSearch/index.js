// Write your code here
import './index.css'

const DestinationSearch = props => {
  const {userDetails} = props

  const {name, imgUrl} = userDetails

  return (
    <li className="sub-div">
      <img className="image" src={imgUrl} alt="places" />
      <h1 className="heading">{name}</h1>
    </li>
  )
}

export default DestinationSearch
