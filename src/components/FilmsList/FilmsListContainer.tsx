import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { AppDispatch, RootState } from "../../store";
import FilmsList from "./FilmsList";
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";

type Props = {
    action: ActionCreatorWithPayload<{ lang: string; }, string>,
    selectorKey: "upcoming" | "popular" | "rated" | "playing"
}

const FilmsListContainer = ({ action, selectorKey }: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const { i18n } = useTranslation()
    const navigate = useNavigate();
    const films = useSelector((s: RootState) => s.films[selectorKey]);
    const lang = i18n.language

    const containerRef = useRef<HTMLDivElement>(null);

    const CARD_WIDTH = 230;
    const GAP = 20;

    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);

    const total = films?.results.length ?? 0;

    useEffect(() => {
        dispatch(action({lang}));
    }, [dispatch, lang]);

    useEffect(() => {
        const update = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                const count = Math.floor(width / (CARD_WIDTH + GAP));
                setVisibleCount(Math.max(count, 1));
            }
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const handleLeft = () => {
        setIndex((prev) => Math.max(prev - visibleCount, 0));
    };

    const handleRight = () => {
        setIndex((prev) =>
            Math.min(prev + visibleCount, total - visibleCount)
        );
    };

    return (
        <div ref={containerRef} className="w-full">
            <FilmsList
                films={films}
                index={index}
                visibleCount={visibleCount}
                cardWidth={CARD_WIDTH}
                gap={GAP}
                onLeft={handleLeft}
                onRight={handleRight}
                navigate={navigate}
            />
        </div>
    );
};

export default FilmsListContainer;