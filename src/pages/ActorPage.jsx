import { Container, Image } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


// Services & utilitys
import { getActor } from '../services/TmdbAPI.js'

// Assets
import placeholder from '../assets/img/poster_placeholder.png'

const ActorPage = () => {
    const { id } = useParams()

    const { data, error, isLoading, isFetching, isError } = useQuery(['get-actor', id], getActor)

    const BASE_URL = 'https://image.tmdb.org/t/p/w200'

    return (
        <Container>

            {isLoading && (<ClimbingBoxLoader size={10} />)}

            {error && (<p>Error! {error}</p>)}

            {data && (
                <Container className="d-flex">
                    <div>
                        <Image src={data.profile_path ? BASE_URL + data.profile_path : placeholder} fluid></Image>
                    </div>
                    <div>
                        <h2>{data.name}</h2>
                        <p>{data.birthday}</p>
                        <p>{data.place_of_birth}</p>
                        <p>{data.biography}</p>

                        <ul>
                            {data.movie_credits.cast.map(movie =>
                                <li key={movie.id}><Link to={`/movie/${data.id}`} >{movie.title}</Link></li>
                            )}
                        </ul>



                        {/* {data.genres.map(genre =>
                            <p key={genre.id} className="d-inline px-2" >{genre.name}</p>

                            // <Link to={`/search&with_genres=${genre.id}`} key={genre.id} className="d-inline px-2" >{genre.name}</Link>

                        )} */}


                        {/* <ul>
                            {data.credits.cast.map(cast => (
                                <li key={cast.id} className="d-flex">
                                    <p> Actor: {cast.name} as {cast.character}</p>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                </Container>
            )}
        </Container>
    )
}

export default ActorPage