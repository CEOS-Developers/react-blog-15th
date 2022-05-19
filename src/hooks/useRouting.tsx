import { useRouter } from 'next/router';

export default function useRouting(){

    const router = useRouter();
    const { id } = router.query;
    const numbering = Number(id);
    

    return(numbering);
}