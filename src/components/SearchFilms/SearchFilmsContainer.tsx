import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store"
import { fetchSearchFilms } from "../../store/reducers/filmsReducer"
import SearchFilms from "./SearchFilms"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../../provider/ThemeProvider"
import { useTranslation } from "react-i18next"

const SearchFilmsContainer = () => {
    const [query, setQuery] = useState('')
    const { searchFilms } = useSelector((s: RootState) => s.films)
    const { theme } = useTheme()
    const { i18n } = useTranslation()
    const lang = i18n.language
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchSearchFilms({ query, lang }))
    }, [query, lang])

    return (
        <SearchFilms query={query} searchFilms={searchFilms} theme={theme} setQuery={setQuery} navigate={navigate} />
    )
}

export default SearchFilmsContainer