import { Link, useNavigate } from "react-router"

const HomePage = () => {

    const navigate = useNavigate()

    const handleNavigateToTerms =() =>{
        navigate({
            pathname: "/terms"
        })
    }

    return (
        <div>
            <h1> Ini Home Page</h1>
            <p>Isi Halaman Di Bawah Ini</p>
            <Link to="/terms">Menuju Halaman Terms</Link>
            <br/>
            <button  onClick={handleNavigateToTerms}>To Terms</button>
        </div>
    )
}

export default HomePage