import type { TFilmDetails } from "../../types/TFilms"

type Props = {
    filmDetails: TFilmDetails
    watchTrailer: (title: string, date: string) => void
    addFilmToFavorites: (film: any) => void
}

const FilmDetails = ({ filmDetails, watchTrailer, addFilmToFavorites }: Props) => {
    const imgBase = "https://image.tmdb.org/t/p/original";

    return (
        <div className="w-full my-5">
            <div
                className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center"
                style={{ backgroundImage: `url(${imgBase}${filmDetails.backdrop_path})` }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="
                max-w-6xl mx-auto px-4 sm:px-6 
                -mt-32 sm:-mt-40 
                relative z-10 
                flex flex-col md:flex-row gap-10
            ">
                <div className="flex flex-col items-start mx-auto md:mx-0">
                    <img
                        src={filmDetails.poster_path ? imgBase + filmDetails.poster_path : 'https://placehold.co/300x450?text=Brak+plakatu&font=roboto'}
                        alt={filmDetails.title}
                        className="w-[200px] sm:w-[250px] md:w-[300px] rounded-lg shadow-lg"
                    />

                    <button
                        onClick={() => watchTrailer(filmDetails.title, filmDetails.release_date)}
                        className="mt-6 w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg shadow transition-all duration-200 text-center cursor-pointer"
                    >
                        Oglądaj zwiastun
                    </button>
                </div>

                <div className="flex-1 text-white">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{filmDetails.title}</h1>

                    {filmDetails.tagline && (
                        <p className="text-lg sm:text-xl italic mt-2">
                            {filmDetails.tagline}
                        </p>
                    )}

                    <div className={`flex gap-3 flex-wrap ${filmDetails.tagline ? "mt-4" : "mt-6"}`}>
                        {filmDetails.genres.map((g) => (
                            <span key={g.id} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                                {g.name}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-3">
                        <span>⭐ {filmDetails.vote_average.toFixed(1)}</span>
                        <span>{filmDetails.runtime} min</span>
                        <span>{filmDetails.release_date}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-2">Opis</h2>

                    <p className="leading-relaxed text-sm sm:text-base">
                        {filmDetails.overview}
                    </p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-lg sm:text-xl">Budżet</h3>
                            <p>${filmDetails.budget.toLocaleString()}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg sm:text-xl">Opłaty</h3>
                            <p>${filmDetails.revenue.toLocaleString()}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg sm:text-xl">Kraj</h3>
                            <p>
                                {filmDetails.production_countries.map((c) => c.name).join(", ")}
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg sm:text-xl">Firmy</h3>
                            <p>
                                {filmDetails.production_companies.map((c) => c.name).join(", ")}
                            </p>
                        </div>

                        {filmDetails.homepage && (
                            <div className="col-span-1 sm:col-span-2">
                                <h3 className="font-semibold text-lg sm:text-xl">Oficjalna strona internetowa</h3>
                                <a href={filmDetails.homepage} target="_blank" className="text-blue-400 underline break-all">
                                    {filmDetails.homepage}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-6">
                <button
                    onClick={() => addFilmToFavorites(filmDetails)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
                >
                    Add to favorites
                </button>
            </div>
        </div>
    )
}

export default FilmDetails