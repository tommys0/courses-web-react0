import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../index.css'

const Logo = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faGraduationCap} className={'logo'}/>
        </div>
    );
};

export default Logo;
