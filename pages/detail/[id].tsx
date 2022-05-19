import styled from 'styled-components';
import { useRouter } from 'next/router';

function Detail() {
    const router = useRouter();
    console.log(router);
    return (
        <Wrapper>
            <h1>Detail Page {router.query.id}</h1>
        </Wrapper>
    );
}

export default Detail;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    h1 {
        color: ${({ theme }) => theme.color.blue};
        font-size: 2rem;
        font-weight: 700;
        padding: 50px 0;
    }
`;
