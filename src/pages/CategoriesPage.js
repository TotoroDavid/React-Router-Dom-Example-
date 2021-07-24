import { useLocation, useHistory } from "react-router-dom"

const CategoriesPage = () => {
    const location = useLocation()
    const history = useHistory()

    const query = new URLSearchParams(location.search)
    const skip = parseInt(query.get('skip')) || 0
    const limit = parseInt(query.get('limit')) || 15

    const handleNext = () => {
        query.set('skip', skip + limit)
        // query.set('limit', 200)
        history.push({ search: query.toString() })
    }

    return (
        <div>
            <h2>skip : {skip}</h2>
            <h2>limit : {limit}</h2>

            <button onClick={handleNext}>
                next
            </button>
        </div>
    )
}

export default CategoriesPage
