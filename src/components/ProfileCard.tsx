type ProfileCardProps ={
    name?: string;
    year?: number;
    job? : string;
}

const ProfileCard = (props : ProfileCardProps) => {
    const { 
        name = "Anonymus",
        year = "2000",
        job  =  "No JOBS"
    } = props

    return (
        <div className="card">
            <p>Name    : {name}</p>
            <p>Year    : {year}</p>
            {<p>Job     :{job}</p>}
        </div>
    )
}

export default ProfileCard

