import type { Opinions } from "../../types/TOpinions";
import type { Theme } from "../../types/TTheme";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

type Props = {
  title: string | undefined;
  poster: string | undefined | null;
  opinions: Opinions[];
  text: string;
  rating: number;
  theme: Theme;
  setText: (value: string) => void;
  setRating: (value: number) => void;
  addOpinions: () => void;
  removeOpinions: (id: number) => void;
};

const FilmsOpinions = ({
  title,
  poster,
  opinions,
  text,
  rating,
  theme,
  setText,
  setRating,
  addOpinions,
  removeOpinions
}: Props) => {
  const { t } = useTranslation();
  const isLight = theme === "light";

  const fullImg = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : "https://placehold.co/300x450?text=Brak+plakatu&font=roboto";

  return (
    <div className="w-full py-8">
      <div
        className={`mb-10 flex flex-col md:flex-row gap-6 rounded-2xl p-4 border bg-white/10 ${
          isLight ? "border-black/20 text-black" : "border-white/20 text-white"
        }`}
      >
        <div className="w-32 md:w-40 shrink-0 mx-auto md:mx-0">
          <img
            src={fullImg}
            alt={title || "poster"}
            className="w-full aspect-[2/3] object-cover rounded-xl shadow-lg"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/300x450?text=Brak+plakatu&font=roboto";
            }}
          />
        </div>

        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            {title || t("opinions.unknownFilm")}
          </h1>
          <p className="mt-2 opacity-70">{t("opinions.subtitle")}</p>
        </div>
      </div>

      <h2
        className={`text-3xl font-bold mb-6 text-center md:text-left ${
          isLight ? "text-black" : "text-white"
        }`}
      >
        {t("opinions.title")}
      </h2>

      <div className="max-w-3xl mx-auto md:mx-0 mb-10">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t("opinions.placeholder")}
          className={`w-full px-4 py-3 rounded-lg bg-white/10 border outline-none resize-none ${
            isLight
              ? "text-black placeholder-gray-500 border-black/20 focus:border-black/40"
              : "text-white placeholder-gray-300 border-white/20 focus:border-white/40"
          }`}
        />

        <div className="flex gap-2 mt-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-2xl transition ${
                rating >= star
                  ? "text-yellow-400"
                  : isLight
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              <FaStar />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={addOpinions}
          className={`mt-4 px-6 py-3 rounded-lg transition w-full md:w-auto ${
            isLight
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {t("opinions.add")}
        </button>
      </div>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto md:mx-0">
        {opinions.length === 0 && (
          <p
            className={`opacity-70 text-center md:text-left ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            {t("opinions.empty")}
          </p>
        )}

        {opinions.map((r) => (
          <div
            key={r.id}
            className={`p-4 rounded-lg border flex flex-col gap-2 relative bg-white/10 ${
              isLight
                ? "text-black border-black/20"
                : "text-white border-white/20"
            }`}
          >
            <div className="flex gap-1 text-yellow-400 text-xl">
              {Array.from({ length: r.rating }, (_, i) => (
                <span key={i}><FaStar /></span>
              ))}
            </div>

            <p className="text-lg break-words">{r.text}</p>
            <span className="text-sm opacity-70">{r.date}</span>

            <button
              type="button"
              onClick={() => removeOpinions(r.id)}
              className={`absolute top-2 right-2 text-xl transition ${
                isLight
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmsOpinions;