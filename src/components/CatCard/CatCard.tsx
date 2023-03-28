import "./CatCard.scss";

import catImg from "@/assets/images/cat.jpg";

export type CatData = {
    imgUrl: string;
    fact: string;
};

type CatCardProps = Partial<CatData>;

export function CatCard(props: CatCardProps) {
    const {
        imgUrl = catImg,
        fact = `The oldest cat on record was Crème Puff from Austin, Texas, who lived from 1967 to August 6, 2005, three days after her 38th birthday. A cat typically can live up to 20 years, which is equivalent to about 96 human years.`,
    } = props;

    return (
        <div className="c-cat-card">
            <img className="c-cat-card__img" src={imgUrl} alt="cat image" />
            <q className="c-cat-card__fact">{fact}</q>
        </div>
    );
}
