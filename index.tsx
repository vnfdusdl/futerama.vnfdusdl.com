import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { Info } from './src/types/info';
import { useFuteramaData } from './hooks/useFuteramaData';
import {Error, Loading } from './src/components';
import { Navigation } from './src/components/layouts';
import { stringify } from 'querystring';
const InfoPage : NextPage = (page) => {
    const { data, error } = useFuteramaData('info');

    if(error) return <Error />
    if(!data) return <Loading />
    interface Creator {
            name: string,
            url: string
        
    }
    return (
            <IndexContainer>
                {data.map((InfoData : Info) => {
                    const {id, synopsis, yearsAired, creators} = InfoData;
                    return (
                        <div key={`info-list-${id}`}>
                            <YearsAiredTitle>방영 기간</YearsAiredTitle> 
                            <p>{yearsAired}</p>
                            <SynopsisTitle>줄거리</SynopsisTitle>
                            <Synopsis>{synopsis}</Synopsis>
                            <CreatorTitle>제작진</CreatorTitle>
                            {creators.map((creator : Creator) => {
                                return (
                                    <p> 
                                        <span>{creator.name} </span>
                                        <span>{creator.url}</span>
                                    </p>
                                )
                            })}
                        </div>
                    )
                })}
            </IndexContainer>
    )
}

const IndexContainer = styled.div`
    /* background-color: #A685E2; */
    background-color: #BFA2DB;
    min-height: 100vh;
    text-align: center;
    margin-top: 20px;
    line-height: 180%;
    padding: 150px 20px 0;
`
const YearsAiredTitle = styled.h2`
    font-size: 1.6rem;
`

const SynopsisTitle = styled.h2`
    display: block;
    font-size: 1.6rem;
    line-height : 180%;
    margin: 20px 0 0;
    text-align: center;
`

const Synopsis = styled.p`
    text-align: center;
    font-size: 1rem;
`
const CreatorTitle = styled.h2`
    font-size: 1.6rem;
`
export default InfoPage;