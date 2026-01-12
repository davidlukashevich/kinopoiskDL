import type { Opinions } from "../../types/TOpinions"
import type { Theme } from "../../types/TTheme"

type Props = {
    opinions: Opinions[]
    text: string
    rating: number
    theme: Theme
    setText: (value: string) => void
    setRating: (value: number) => void
    addOpinions: () => void
    removeOpinions: (id: number) => void
}

const FilmsOpinions = ({
    opinions,
    text,
    rating,
    theme,
    setText,
    setRating,
    addOpinions,
    removeOpinions
}: Props) => {
    const isLight = theme === "light"

    return (
        <div className="w-full py-8">
            <h2 className={`text-3xl font-bold mb-6 text-center md:text-left ${isLight ? "text-black" : "text-white"}`}>Opinie o filmie</h2>
            <div className="max-w-xl mx-auto md:mx-0 mb-10">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Napisz swoją opinię..."
                    className={`w-full max-w-[700px] md:w-700 px-4 py-3 rounded-lg bg-white/10 border outline-none resize-none ${theme === 'light' ? 'text-black placeholder-gray-500 border-black/20 focus:border-black/40' : 'text-white placeholder-gray-300 border-white/20 focus:border-white/40'}`}/>
                <div className="flex gap-2 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onClick={() => setRating(star)}
                            className={`
                                text-2xl transition
                                ${rating >= star ? "text-yellow-400" : isLight ? "text-gray-400" : "text-gray-500"}
                            `}
                        >
                            ★
                        </button>
                    ))}
                </div>
                <button
                    onClick={addOpinions}
                    className={`
                        mt-4 px-6 py-3 rounded-lg transition w-full md:w-auto
                        ${isLight
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-blue-500 hover:bg-blue-600 text-white"
                        }
                    `}
                >
                    Dodaj opinię
                </button>
            </div>
            <div className="flex flex-col gap-6 max-w-3xl mx-auto md:mx-0">
                {opinions.length === 0 && (
                    <p className={`opacity-70 text-center md:text-left ${isLight ? "text-black" : "text-white"}`}>
                        Brak opinii
                    </p>
                )}

                {opinions.map((r) => (
                    <div
                        key={r.id}
                        className={`p-4 rounded-lg border flex flex-col gap-2 relative bg-white/10 ${theme === 'light' ? 'text-black border-black/20' : 'text-white border-white/20'}`}
                    >
                        <div className="flex gap-1 text-yellow-400 text-xl">
                            {Array.from({ length: r.rating }, (_, i) => <span key={i}>★</span>)}
                        </div>

                        <p className="text-lg">{r.text}</p>

                        <span className="text-sm opacity-70">{r.date}</span>

                        <button
                            onClick={() => removeOpinions(r.id)}
                            className={` absolute top-2 right-2 text-xl transition ${theme === 'light' ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'} `}
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilmsOpinions