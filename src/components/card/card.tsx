import {Guitar} from '../../types/types';
import {adaptImgPath} from '../../utils';
import {Link} from 'react-router-dom';

type CardProps = {
  guitar: Guitar,
}

function Card (props: CardProps): JSX.Element {
  const {guitar} = props;
  const {previewImg, name, price, rating, id, comments, type} = guitar;
  const imgPath = adaptImgPath(previewImg);
  const newRating = new Array(5).fill(null).fill('full', 0, rating);

  return (
    <div className="product-card">
      <img src={imgPath} width="75" height="190" alt={`${name} ${type}`}/>
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <span className="visually-hidden">Рейтинг:</span>
          {newRating.map((item, index) => {
            if (!item) {
              return (
                <svg key={`${index + id}`} width="12" height="11" aria-hidden="true">
                  <use xlinkHref="#icon-star"/>
                </svg>
              );
            }
            return (
              <svg key={`${index + id}`} width="12" height="11" aria-hidden="true">
                <use xlinkHref="#icon-full-star"/>
              </svg>
            );
          })}
          <span className="rate__count">{comments.length}</span><span className="rate__message"/>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <div className="product-card__buttons"><Link className="button button--mini" to={'#'}>Подробнее</Link>
        <Link className="button button--red button--mini button--add-to-cart" to={'#'}>Купить</Link>
      </div>
    </div>
  );
}

export default Card;
