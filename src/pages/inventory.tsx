import type { NextPage } from 'next';
import { InventoryData } from '../types/inventory';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import { Error, Loading } from '../components';
import styled from '@emotion/styled';

const InventoryPage: NextPage = (page) => {
    const { data, error } = useFuteramaData('inventory');

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <InventoryContainer>
                {data.map((InventoryData: InventoryData) => {
                    const { title, category, description, slogan, price, stock, id } = InventoryData;
                    return (
                        <InventoryCard key={`inventory-list-${id}`}>
                                <h2>{title}</h2>
                                <p>catogory : {category}</p>
                                <p>description : {description}</p>
                                <p>slogan : {slogan}</p>
                                <p>price : {price}</p>
                                <p>stock : {stock}</p>
                        </InventoryCard>
                    );
                })}
        </InventoryContainer>
    );
};

const InventoryContainer = styled.main`
    display: grid;
    padding-top: 180px;
    background-color: #BFA2DB;
    `

const InventoryCard = styled.article`
    border-radius: 10px;
    padding: 0px 20px;
    margin: 10px 15px;
    text-align: center;
    background-color: #fff;
    border: 3px solid #6155a6;
`
export default InventoryPage;