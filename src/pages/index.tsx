import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { Info } from '../types/info';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import {Error, Loading } from '../components';
import { Navigation } from '../components/layouts';
const InfoPage : NextPage = (page) => {
    const { data, error } = useFuteramaData('info');

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <IndexContainer>
            <IndexTitle>Information</IndexTitle>
                {data.map((InfoData : Info) => {
                    const {id, synopsis, yearsAired, creators} = InfoData;
                    return (
                        <div key={`info-list-${id}`}>
                            <h2>{synopsis}</h2>
                            <p>{yearsAired}</p>
                            <p>{creators[0].name}</p>
                            <span>{creators[0].url}</span> 
                            <p>{creators[1].name}</p>
                            <span>{creators[1].url}</span> 
                        </div>
                    )
                })}
            </IndexContainer>
        </div>
    )
}

const IndexContainer = styled.div`
    /* background-color: #A685E2; */
    /* min-height: 100vh; */
    text-align: center;
    padding: 30px 50px;
    /* background-color: #fff; */
    font-size: 20px;
    line-height: 180%;
`


const IndexTitle = styled.h2`
    display: inline-block;
    font-size: 2rem;
    line-height : 180%;
    margin: 20px 0 0;
`

export default InfoPage;