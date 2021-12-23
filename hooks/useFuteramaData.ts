import useSWR from 'swr';
import { fetcher } from '../src/utils/fetcher';
import { FUTERAMA_API_ENDPOINT } from '../src/constants';

export const useFuteramaData = (path : string) => {
    return useSWR(`${FUTERAMA_API_ENDPOINT}${path}`, fetcher);
}
