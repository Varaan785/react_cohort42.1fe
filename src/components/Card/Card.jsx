import './styles.css'





function Card() {

    const user = {
        firstName: "Homer",
        lastName: "Simpson",
        age: 40,
        job: "Sicherheitsinspektor im Atomkraftwerk von Springfield",
        hobbys: "Bier trinken und Fernsehen",
        avatarURL: "https://i.etsystatic.com/26158159/r/il/bb237e/4614533009/il_794xN.4614533009_alyq.jpg"
    };

    const getFullName = () => {
        return `${user.firstName} ${user.lastName}`
    }

    return (
        <div className="card-container">
        <h1 className='cardH1'>User Card</h1>
        <img className="avatar" src={user.avatarURL} alt="User Avatar" />
        <p className="card-info">Full Name: {getFullName()}</p>
        <p className="card-info">Age: {user.age}</p>
        <p className="card-info">Job: {user.job}</p>
        <p className="card-info">
          Hobbys: {user.hobbys}
        </p>
      </div>
    );

}

export default Card;