import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllStarships } from "../../services/sw-api"

const AllStarships = () => {
  const [allStarships, setAllStarships] = useState([])

  useEffect(() => {
    const fetchallStarships = async () => {
      const starshipData = await getAllStarships()
      setAllStarships(starshipData.results)
    }
    fetchallStarships()
  }, [])

  return (
    <>
      {allStarships.length ?
      <div className='container'>
        {allStarships.map(starship =>
          <div key={starship.name} className='starship-card'>
            <Link to="/starships" state={{starship}}>{starship.name}</Link>
            <br/>
          </div>
        )}
      </div>
      :
      <>
        <h4>Loading starships</h4>
      </>
      }
    </>
  )
}

export default AllStarships