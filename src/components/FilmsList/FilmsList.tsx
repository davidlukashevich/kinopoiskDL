import FilmCard from "../FilmCard/FilmCard";
import type { FilmsResponse } from "../../types/TFilms";
import type { NavigateFunction } from "react-router-dom";

type Props = {
  films: FilmsResponse | null;
  index: number;
  visibleCount: number;
  cardWidth: number;
  gap: number;
  onLeft: () => void;
  onRight: () => void;
  navigate: NavigateFunction
};

const FilmsList = ({
  films,
  index,
  visibleCount,
  cardWidth,
  gap,
  onLeft,
  onRight,
  navigate
}: Props) => {
  const total = films?.results.length ?? 0;

  const canGoLeft = index > 0;
  const canGoRight = index + visibleCount < total;

  return (
    <div className="relative mt-5 w-full flex items-center">
      {canGoLeft && (
        <button
          onClick={onLeft}
          className="absolute left-0 z-10 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition"
        >
          ◀
        </button>
      )}

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (cardWidth + gap)}px)`,
            gap: `${gap}px`,
            width: total * (cardWidth + gap),
          }}
        >
          {films?.results.map((film) => (
            <div key={film.id} style={{ width: cardWidth, flexShrink: 0 }}>
              <FilmCard id={film.id} title={film.title} img={film.poster_path} navigate={navigate} />
            </div>
          ))}
        </div>
      </div>

      {canGoRight && (
        <button
          onClick={onRight}
          className="absolute right-0 z-10 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition"
        >
          ▶
        </button>
      )}
    </div>
  );
};

export default FilmsList;