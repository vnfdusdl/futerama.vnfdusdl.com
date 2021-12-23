import type { NextPage } from 'next';
import { Cast } from '../types/cast';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import { Error, Loading } from '../components';

const CastPage: NextPage = (page) => {
    const { data, error } = useFuteramaData('cast');

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>Cast</h1>
            <main>
                {data.map((CastData: Cast) => {
                    const { name, born, bio, id } = CastData;
                    return (
                        <div key={`cast-list-${id}`}>
                            <article>
                                <h2>{name}</h2>
                                <p>{born}</p>
                                <a href="{bio.url}">bio 링크</a>
                            </article>
                        </div>
                    );
                })}
            </main>
        </div>
    );
};
export default CastPage;
