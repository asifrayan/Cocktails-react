import { NavLink } from 'react-router-dom';

function Cocktail({
  idDrink,
  strDrinkThumb,
  strDrink,
  strGlass,
  strAlcoholic,
}) {
  return (
    <div className="card">
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="cocktail-info">
        <h2>{strDrink}</h2>
        <h3>{strGlass}</h3>
        <span>{strAlcoholic}</span>
        <NavLink to={`/cocktails/${idDrink}`}>Details</NavLink>
      </div>
    </div>
  );
}
export default Cocktail;
