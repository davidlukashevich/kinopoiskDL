import type { NavigateFunction } from "react-router-dom"
import FilmCard from "./FilmCard"
import { useFavorite } from "../../hooks/useFavorite"

type Props = {
  id: number
  title: string
  img: string | null
  navigate: NavigateFunction
  removeFilm?: (id: number) => void
  watchTrailer?: (title: string, date?: string) => void
  releaseDate?: string
  className?: string
}

const FilmCardContainer = ({
  id,
  title,
  img,
  navigate,
  removeFilm,
  watchTrailer,
  releaseDate,
  className,
}: Props) => {
  const { isFavorite, toggleFavorite } = useFavorite({id, title, poster_path: img, release_date: releaseDate})

  const isRemoveMode = typeof removeFilm === "function"

  return (
    <FilmCard
      id={id}
      title={title}
      img={img}
      navigate={navigate}
      onWatchTrailer={watchTrailer}
      releaseDate={releaseDate}
      isFavorite={!isRemoveMode ? isFavorite : undefined}
      toggleFavorite={!isRemoveMode ? toggleFavorite : undefined}
      onRemove={isRemoveMode ? removeFilm : undefined}
      className={className}
    />
  )
}

export default FilmCardContainer