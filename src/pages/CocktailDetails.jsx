import { useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { GlobalContext } from '../App';
import Loading from '../components/Loading';

function CocktailDetails() {
  const { cocktailId } = useParams();
  const { data } = useContext(GlobalContext);

  if (data.length === 0) {
    return <Loading />;
  }

  const drink = data?.find((drink) => drink.idDrink === cocktailId);

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = drink;

  return (
    <section className="section-cocktail-details container">
      <NavLink to="/" className="back-link">
        Back home
      </NavLink>
      <span className="cocktail-name">{strDrink}</span>
      <article className="cocktail-container">
        <div className="cocktail-img-wrapper">
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <div className="cocktail-description">
          <div className="tag">
            <span className="tag-name">Name :</span>
            <span className="tag-value">{strDrink}</span>
          </div>
          <div className="tag">
            <span className="tag-name">Category :</span>
            <span className="tag-value">{strCategory}</span>
          </div>
          <div className="tag">
            <span className="tag-name">Info :</span>
            <span className="tag-value">{strAlcoholic}</span>
          </div>
          <div className="tag">
            <span className="tag-name">Glass :</span>
            <span className="tag-value">{strGlass}</span>
          </div>
          <div className="tag">
            <span className="tag-name">Instructions :</span>
            <span className="tag-value">{strInstructions}</span>
          </div>
          <div className="tag">
            <span className="tag-name">Ingredients :</span>
            <span className="tag-value">{`${strIngredient1} ${strIngredient2} ${strIngredient3}`}</span>
          </div>
        </div>
      </article>
    </section>
  );
}
export default CocktailDetails;
