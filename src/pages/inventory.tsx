import type { NextPage } from 'next';
import { InventoryData } from '../types/inventory';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import { Error, Loading } from '../components';

const InventoryPage: NextPage = (page) => {
    const { data, error } = useFuteramaData('inventory');

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>Inventory</h1>
            <main>
                {data.map((InventoryData: InventoryData) => {
                    const { title, category, description, slogan, price, stock, id } = InventoryData;
                    return (
                        <div key={`inventory-list-${id}`}>
                            <article>
                                <h2>{title}</h2>
                                <p>{category}</p>
                                <p>description</p>
                                <p>slogan</p>
                                <p>price</p>
                                <p>stock</p>
                            </article>
                        </div>
                    );
                })}
            </main>
        </div>
    );
};
export default InventoryPage;