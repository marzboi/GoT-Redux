import { Character } from "../models/character";

type PropsType = {
  item: Character;
};

export function CharacterCard({ item }: PropsType) {
  function handleClick() {
    console.log("cum");
  }

  return (
    <li className="character col" key={item.id}>
      <div className="card character__card">
        <img
          src={`img/${item.name.toLowerCase()}.jpg`}
          alt={`${item.name} ${item.family}`}
          className={`character__picture card-img-top ${
            !item.alive ? "dead" : ""
          }`}
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {item.name} {item.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {item.age}</li>
              <li>
                Estado:
                {item.alive ? (
                  <i className="fas fa-thumbs-up"></i>
                ) : (
                  <i className="fas fa-thumbs-down"></i>
                )}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              <li>Años de reinado: </li>
              <li>Arma:</li>
              <li>Destreza:</li>
              <li>Asesora a:</li>
              <li>Peloteo: </li>
            </ul>
            <div className="character__actions">
              <button className="character__action btn">habla</button>
              <button className="character__action btn" onClick={handleClick}>
                muere
              </button>
            </div>
          </div>
        </div>
        <i className="emoji">👑</i>
        <i className="emoji">🗡️</i>
        <i className="emoji">🗿</i>
        <i className="emoji">🛡️</i>
      </div>
    </li>
  );
}
