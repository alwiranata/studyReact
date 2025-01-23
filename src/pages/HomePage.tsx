import { Link } from "react-router"

const HomePage = () => {
    return (
        <div>
            <h1> Ini Home Page</h1>
            <p>Isi Halaman Di Bawah Ini</p>
            <Link to="/terms">Menuju Halaman Terms</Link>
        </div>
    )
}

export default HomePage