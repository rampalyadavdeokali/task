import { Caterer } from "@/lib/types";

type CatererCardProps = {
  caterer: Caterer;
};

export function CatererCard({ caterer }: CatererCardProps) {
  return (
    <article className="caterer-card">
      <div className="card-top">
        <div>
          <h2>{caterer.name}</h2>
          <p className="card-location">{caterer.location}</p>
        </div>
        <div className="rating-badge">{caterer.rating.toFixed(1)} / 5</div>
      </div>

      <div className="card-price">₹{caterer.pricePerPlate} per plate</div>

      <div className="cuisine-list">
        {caterer.cuisines.map((cuisine) => (
          <span key={cuisine} className="cuisine-pill">
            {cuisine}
          </span>
        ))}
      </div>
    </article>
  );
}
