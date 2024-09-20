import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'


const Background = ({playStatus, heroCount}) => {

    if (playStatus){ //return the video tag if play status is true
        return(
            <video className='background' autoPlay loop muted>
                <source src={video1} type='video/mp4'/>
            </video>
        )
    }
    else if(heroCount===0){//if hero count is 0, provide the image 1
        return <img src={image1} className='background fade-in' alt=""/>
    }
    else if(heroCount===1){//if hero count is 1, provide the image 2
        return <img src={image2} className='background fade-in' alt=""/>
    }
    else if(heroCount===2){//if hero count is 2, provide the image 3
        return <img src={image3} className='background fade-in' alt=""/>
    }
}

export default Background;