import { useContext } from 'react';
import Loading from './Loading';
import Cocktail from './Cocktail';
import { GlobalContext } from '../App';

function Cocktails() {
  const { data } = useContext(GlobalContext);

  if (!data) {
    return (
      <h3 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
        No cocktails matched your search criteria
      </h3>
    );
  }

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <section className="section-cocktails container">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-list">
        {data.map((cocktail) => {
          return <Cocktail key={cocktail.idDrink} {...cocktail} />;
        })}
      </div>
    </section>
  );
}
export default Cocktails;
