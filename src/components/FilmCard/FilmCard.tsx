import type { NavigateFunction } from "react-router-dom"
import { IoPlay, IoClose } from "react-icons/io5"
import { FaHeart } from "react-icons/fa6"
import { IoMdHeartEmpty } from "react-icons/io"
import { MdOutlineRateReview } from "react-icons/md"

type Props = {
  id: number
  title: string
  img: string | null
  navigate: NavigateFunction
  isFavorite?: boolean
  toggleFavorite?: () => void
  onRemove?: (id: number) => void
  onWatchTrailer?: (title: string, date?: string) => void
  releaseDate?: string
  className?: string
}

const FilmCard = ({
  id,
  title,
  img,
  navigate,
  isFavorite,
  toggleFavorite,
  onRemove,
  onWatchTrailer,
  releaseDate,
  className,
}: Props) => {
  const fullImg = img ? `https://image.tmdb.org/t/p/w500${img}` : "https://placehold.co/300x450?text=Brak+plakatu&font=roboto"

  const hasFavoriteActions = typeof toggleFavorite === "function" && typeof isFavorite === "boolean"

  const hasRemoveAction = typeof onRemove === "function"
  const hasAnyActions = Boolean(onWatchTrailer) || hasFavoriteActions || hasRemoveAction

  return (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-[2/3] ${className ?? "w-[230px]"}`}
      onClick={() => navigate(`/details/${id}`)}
    >
      <img
        src={fullImg}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {hasAnyActions && (
        <div
          className="absolute inset-y-0 right-0 flex flex-col items-center justify-center gap-4 bg-black/50 w-[60px] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {onWatchTrailer && (
            <button
              onClick={() =>
                onWatchTrailer(title, releaseDate)
              }
              className="p-2 text-white text-3xl hover:text-blue-400 transition"
            >
              <IoPlay />
            </button>
          )}

          <button
            onClick={() => navigate(`/opinions/${id}`)}
            className="p-2 text-white text-3xl hover:text-green-400 transition"
          >
            <MdOutlineRateReview />
          </button>

          {hasFavoriteActions && (
            <button
              onClick={toggleFavorite}
              className={`p-2 text-3xl transition ${isFavorite ? "text-yellow-400 hover:text-yellow-300" : "text-white hover:text-yellow-400"}`}
            >
              {isFavorite ? <FaHeart /> : <IoMdHeartEmpty />}
            </button>
          )}

          {hasRemoveAction && !hasFavoriteActions && (
            <button
              onClick={() => onRemove?.(id)}
              className="p-2 text-white text-3xl hover:text-red-400 transition"
            >
              <IoClose />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default FilmCard