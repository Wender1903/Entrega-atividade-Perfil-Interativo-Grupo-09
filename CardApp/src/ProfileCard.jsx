import './ProfileCard.css';

function ProfileCard({ name, age, isStudent }) {
  const handleClick = () => {
    alert(`Nome: ${name}`);
  };

  return (
    <div className="card">
      <div className="border"></div>
      <div className="profile-name"> {name} – {age} anos</div>
      <div className="profile-status">
        {isStudent ? "É estudante" : "Não é estudante"}
      </div>
      <button onClick={handleClick}>Ver nome</button>
    </div>
  );
}

export default ProfileCard;