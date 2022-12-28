// Write your code here
import './index.css'

const DestinationSearch = props => {
  const {userDetails} = props

  const {name, imgUrl} = userDetails

  return (
    <li className="sub-div">
      <img className="image" src={imgUrl} alt={name} />
      <p className="heading">{name}</p>
    </li>
  )
}

export default DestinationSearch
