import { HeroesList } from "../heroes/HeroesList";

export const MarvelScreen = () => {
    return (
        <>
            <h1>Marvel Comics</h1>
            <hr/>
            <HeroesList publisher={'Marvel Comics'} />
        </>
    );
};
