import loadingAnimation from '../../static/dots.gif';
import './LoadingAnimation.css';

export default function LoadingAnimation() {
    return (
        <div id='loading-div'>
            <div id='loading-image-div'>
                <img src={loadingAnimation} alt='loading' />
            </div>
            <h1>Loading your content...</h1>
        </div>
    )
}
