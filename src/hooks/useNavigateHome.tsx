import { useRouter } from 'next/router';

export default function useNavigateHome(){

    const router = useRouter();
    const navigateHome = () => router.push('/MainPage')
    

    return(navigateHome);
}

