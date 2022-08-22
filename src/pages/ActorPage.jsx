import { Container, Image } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'

// Services & utilitys
import { getActor } from '../services/TmdbAPI.js'

// Assets
import placeholder from '../assets/img/poster_placeholder.png'

const ActorPage = () => {
    const { id } = useParams()

    const { data, error, isLoading, isFetching, isError } = useQuery(['get-movie', id], getActor)

    const BASE_URL = 'https://image.tmdb.org/t/p/w200'

    return (
        <Container>

            {error && (<p>Error! {error}</p>)}

            {data && (
                <Container className="d-flex">
                    <div>
                        <Image src={data.poster_path ? BASE_URL + data.poster_path : placeholder} fluid></Image>
                    </div>
                    <div>
                        <h2>{data.original_title}</h2>
                        <h3>{data.tagline}</h3>

                        <p>{data.release_date}</p>

                        {data.genres.map(genre =>
                            <p key={genre.id} className="d-inline px-2" >{genre.name}</p>

                            // <Link to={`/search&with_genres=${genre.id}`} key={genre.id} className="d-inline px-2" >{genre.name}</Link>

                        )}
                        <p>{data.overview}</p>

                        <ul>
                            {data.credits.cast.map(cast => (
                                <li key={cast.id} className="d-flex">
                                    <p> Actor: {cast.name} as {cast.character}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            )}
        </Container>
    )
}

export default ActorPage