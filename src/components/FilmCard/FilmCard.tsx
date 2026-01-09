import type { NavigateFunction } from "react-router-dom"

type Props = {
    id: number
    title: string
    img: string | null
    navigate: NavigateFunction
}

const FilmCard = ({id, title, img, navigate}: Props) => {
    console.log(img)
    const fullImg = img ? `https://image.tmdb.org/t/p/w500${img}` : "https://placehold.co/300x450?text=Brak+plakatu&font=roboto"

    return (
        <div className="cursor-pointer" onClick={() => navigate(`/details/${id}`)}>
            <img alt={title} src={fullImg} width={'230px'} height={'auto'} />
        </div>
    )
}

export default FilmCard