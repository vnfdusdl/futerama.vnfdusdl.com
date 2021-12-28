import type { NextPage } from 'next';
import { Episode } from '../types/episode';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import { Error, Loading } from '../components';
import styled from '@emotion/styled';


const EpisodePage: NextPage = (page) => {
    const { data, error } = useFuteramaData('episodes');

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
            <EpisodeContainer>
                {data.map((EpisodeData: Episode) => {
                    const { number, title, writers, originalAirDate, desc, id } = EpisodeData;
                    return (
                        <div key={`episode-list-${id}`}>
                            <EpisodeCard>
                                <EpisodeTitle>{title}
                                </EpisodeTitle>
                                <EpisodeNumber> {number} </EpisodeNumber>
                                <p>작가 : {writers}</p>
                                <p>방영일 : {originalAirDate}</p>
                                <div>
                                    <span>줄거리 :</span>
                                    <p>{desc}</p>
                                </div>
                            </EpisodeCard>
                        </div>
                    );
                })}
            </EpisodeContainer>
    );
};

const EpisodeContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(1fr,1);
    padding-top: 180px;
    background-color: #BFA2DB;
`
const EpisodeCard = styled.article`
    background-color: #fff;
    border: 3px solid #6155a6;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px 15px;
    `
const EpisodeTitle = styled.h2`
    font-size: 1.3rem;
`
const EpisodeNumber = styled.span`
    top: 3px;
    background-color: #F0D9FF;
    padding: 5px 8px;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: 700;
`
export default EpisodePage;