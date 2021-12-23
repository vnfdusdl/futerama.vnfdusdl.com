import type { NextPage } from 'next';
import { Info } from '../types/info';
import { useFuteramaData } from '../../hooks/useFuteramaData';

const InfoPage : NextPage = (page) => {
    const { data, error } = useFuteramaData('info');

    if(error) return <div>Failed to Loading...</div>
    if(!data) return <div>Loading...</div>

    return (
        <div>
            <h1>Information</h1>
            <main>
                {data.map((InfoData : Info) => {
                    const {id, synopsis, yearsAired, creators} = InfoData;
                    console.log(InfoData);
                    return (
                        <div key={`port-wine-list-${id}`}>
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