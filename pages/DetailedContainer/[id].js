import {useRouter} from 'next/router';

function DetailContainer(){
    
    const router = useRouter();
    const {id} = router.query;

    return(
        <>
        <div>{id}</div>
        </>
    );
}

export default DetailContainer;