import type { NextPage } from 'next';
import { Episode } from '../types/episode';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import { Error, Loading } from '../components';

const EpisodePage: NextPage = (page) => {
    const { data, error } = useFuteramaData('episodes');

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>Episode</h1>
            <main>
                {data.map((EpisodeData: Episode) => {
                    const { number, title, writers, originalAirDate, desc, id } = EpisodeData;
                    return (
                        <div key={`episode-list-${id}`}>
                            <article>
                                <h2>{title}</h2>
                                <p>작가 : {writers}</p>
                                <p>방영일 : {originalAirDate}</p>
                                <div>
                                    <span>줄거리</span>
                                    <p>{desc}</p>
                                </div>
                            </article>
                        </div>
                    );
                })}
            </main>
        </div>
    );
};
export default EpisodePage;