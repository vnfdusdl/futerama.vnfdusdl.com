import type { NextPage } from 'next';
import { Characters } from '../types/characters';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import { Error, Loading } from '../components';

const CharactersPage : NextPage = (page) => {
    const { data, error } = useFuteramaData('characters');

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
        <h1>characters</h1>
        <main>
            {data.map((CharacterData : Characters) => {
                const { name, images, gender, species, homePlanet, occupation,age, id, sayings} = CharacterData;
                return (
                    <div key={`character-list-${id}`}>
                        <article>
                        <img src="{images.main}" alt="" />
                        <h2>{name.first} {name.middle} {name.last}</h2>
                        <p>gender : {gender}</p>
                        <p>age : {age}</p>
                        <p>species : {species}</p>
                        <p>occupation : {occupation}</p>
                        <ul>sayings
                            <li>{sayings[0]}</li>
                            <li>{sayings[1]}</li>
                            <li>{sayings[2]}</li>
                        </ul>
                        </article>
                    </div>
                )
            })}
        </main>
        </div>
    )
}
export default CharactersPage;