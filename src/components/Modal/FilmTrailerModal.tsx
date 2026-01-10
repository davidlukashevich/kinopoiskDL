type Props = {
  videoId: string | undefined
  onClose: () => void
}

const FilmTrailerModal = ({ videoId, onClose }: Props) => {
  if (!videoId) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-black rounded-lg overflow-hidden w-[90%] max-w-3xl aspect-video shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default FilmTrailerModal