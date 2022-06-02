import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const hero = useMemo(() => getHeroById(id), [id]);

    if (!hero) return <Navigate to="/" />;

    const {superhero, publisher, alter_ego, first_appearance, characters} = hero;
    const imgPath = `/assets/${id}.jpg`;

    const handleReturn = () => navigate(`/${id.split('-')[0]}`);

    return (
        <div className="row">
            <div className="col-4">
                <img src={imgPath} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft animate__faster" />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button onClick={handleReturn} className="btn btn-outline-dark">
                    Back
                </button>
            </div>
        </div>
    );
};
