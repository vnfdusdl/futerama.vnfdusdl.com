import type { NextPage } from 'next';
import { Info } from '../types/info';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import {Error, Loading } from '../components';

const InfoPage : NextPage = (page) => {
    const { data, error } = useFuteramaData('info');

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
            <h1>Information</h1>
            <main>
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
            </main>
        </div>
    )
}
export default InfoPage;