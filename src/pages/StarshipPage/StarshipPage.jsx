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
    <>
      {starship.name ?
        <>
          <h3>{starship.name}</h3>
          <h3>{starship.model}</h3>
          <Link to="/">Return</Link>
        </>
      :
        <>
          <h3>Loading</h3>
        </>
      }
    </>
  )
}

export default StarshipPage