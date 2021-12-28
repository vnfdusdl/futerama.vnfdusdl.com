import type { NextPage } from 'next';
import { Cast } from '../types/cast';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import { Error, Loading } from '../components';
import styled from '@emotion/styled';


const CastPage: NextPage = (page) => {
    const { data, error } = useFuteramaData('cast');

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <CastContainer>
            <main>
                {data.map((CastData: Cast) => {
                    const { name, born, bio, id } = CastData;
                    return (
                        <div key={`cast-list-${id}`}>
                            <CastCard>
                                <CastName>{name}</CastName>
                                <p>{born}</p>
                                <a href={bio.url}>bio 링크</a>
                            </CastCard>
                        </div>
                    );
                })}
            </main>
        </CastContainer>
    );
};
export default CastPage;

const CastContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    padding-top: 180px;
    background-color: #BFA2DB;
`

const CastCard = styled.article`
    border: 3px solid #6155a6;
    border-radius: 10px;
    margin: 15px;
    padding-bottom: 20px;
    background-color: #fff;
`

const CastName = styled.h2`
    font-size: 1.2rem;
`