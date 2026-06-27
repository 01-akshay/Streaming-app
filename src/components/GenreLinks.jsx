import { Link } from "react-router-dom"

const GenreLinks=({genres, platform}) => {
    return(
        <div className="py-3 flex gap-2 items-center">
            {
                genres.map((genres) => (
                    <Link to={`/browsebygenre/${platform}/${genres.id}`} key={genres.id} className="px-4 py-1 bg-yellow-400 rounded-full text-slate-950 font-semibold">{genres.name}</Link>
                ))
            }
        </div>
    )
}
export default GenreLinks;