import type { NextPage } from 'next';
import { Characters } from '../types/characters';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import { Error, Loading } from '../components';
import styled from '@emotion/styled';

const CharactersPage: NextPage = (page) => {
    const { data, error } = useFuteramaData('characters');

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <CharacterContainer>
                {data.map((CharacterData: Characters) => {
                    const {
                        name,
                        images,
                        gender,
                        species,
                        homePlanet,
                        occupation,
                        age,
                        id,
                        sayings,
                    } = CharacterData;
                    return (
                        <CharacterCard  key={`character-list-${id}`}>
                                <CharacterImg src={images.main} alt="" />
                                <CharacterName>
                                    {name.first} {name.middle} {name.last}
                                </CharacterName>
                                <p>gender : {gender}</p>
                                <p>age : {age}</p>
                                <p>species : {species}</p>
                                <p>occupation : {occupation}</p>
                                <SayingList>
                                    {
                                        CharacterData.sayings.map(
                                            (saying: string, index: number) => {
                                                return (
                                                    <SayinsListItem
                                                        key={`character-saying-${id}`}
                                                    >
                                                        {index+1}. {saying}
                                                    </SayinsListItem>
                                                );
                                            }
                                        )
                                    }
                                </SayingList>
                        </CharacterCard>
                    );
                })}
            </CharacterContainer>
        </div>
    );
};

const CharacterContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding-top: 180px;
    background-color: #BFA2DB;
`;

const CharacterCard = styled.article`
    width: 90%;
    margin: 10px auto;
    padding: 30px 10px;
    border: 3px solid #6155a6;
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
    background-color: #fff;
`
const CharacterName = styled.h2`
    font-size: 1.4rem;
`
const SayingList = styled.ul`
    max-height: 200px;
    overflow: scroll;
    padding: 0 5px;
`
const SayinsListItem = styled.li`
    list-style: none;
    margin: 0 10px;
`

const CharacterImg = styled.img`
    height: 300px;
    aspect-ratio : 9/16;
    object-fit: contain;
`
export default CharactersPage;
