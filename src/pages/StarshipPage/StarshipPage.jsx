import { useState, useEffect } from "react"
import { getDetails } from "../../services/sw-api"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

const StarshipPage = () => {
  const [starship, setStarshipPage] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipPage(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])
  

  return (
    <div class='detail-container'>
      {starship.name ?
        <div class='detail-card'>
          <h3>Name: {starship.name}</h3>
          <h3>Model: {starship.model}</h3>
          <Link to="/">Return</Link>
        </div>
      :
        <>
          <h3>Loading</h3>
        </>
      }
    </div>
  )
}

export default StarshipPage