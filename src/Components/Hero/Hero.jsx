import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the features</p>
            <img src={arrow_btn} alt="" />
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0 ? "hero-dot orange" : "hero-dot"}></li> {/*when we click on the 1st li tag, it will set the count to 0 and show 1st image (and so on...)*/}
                <li onClick={()=>setHeroCount(1)} className={heroCount===1 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2 ? "hero-dot orange" : "hero-dot"}></li>
            </ul>
            <div className="hero-play">
                 <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="" /> {/*once user clicks on play, it will show pause button and viceversa */}
                <p>See The Video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero