import { FunctionComponent } from "react";
import styles from "./TutorialWebPage.module.css";
import { useNavigate } from "react-router-dom";

const TutorialWebPage: FunctionComponent = () => {
  let navigate = useNavigate(); 
  const handleMenuClick = () => window.open("https://yongjian-yj.github.io/reactProject/", "_blank");

  return (
    <div className={styles.tutorialWebPage}>
      <div className={styles.getStatedDiv}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.rectangleDiv2} />
        <div className={styles.areYouReady}>are you ready?</div>
        <b className={styles.beAPartOfTheNextBigThin}>
          <p className={styles.homeP}>Win the next rank games</p>
          <p className={styles.sellNFTsP}>Impress your teammate!</p>
        </b>
        <div className={styles.buttonDiv1}>
          <div className={styles.submitDiv}>get started</div>
        </div>
      </div>
      <div className={styles.navBarDiv}>
        <b className={styles.kryptoB}>ML_Trainer</b>
        <div className={styles.aboutDiv}>about</div>
        <div className={styles.pricingDiv}>pricing</div>
        <div className={styles.contactDiv1}>contact</div>
        <div className={styles.buyNFTDiv}>Trainers</div>
      </div>
      <div className={styles.tesimonialSectionDiv}>
        <div className={styles.tESTIMONIALDiv}>TESTIMONIAL</div>
        <b className={styles.readWhatOthersHaveToSay}>
          <p className={styles.homeP}>read what others</p>
          <p className={styles.sellNFTsP}>have to say</p>
        </b>
        <div className={styles.testimonialItemDiv}>
          <div className={styles.rectangleDiv3} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src={require('./images/mask-group@2x.png')}
          />
          <div className={styles.oliviaColeDiv}>olivia cole</div>
          <div
            className={styles.loremIpsumDolorSitAmetCo}
          >{`With the help of those trainers, I have forgotten when was the last time being called 'epic kontol' `}</div>
        </div>
        <div className={styles.testimonialItemDiv1}>
          <div className={styles.rectangleDiv3} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src={require('./images/mask-group1@2x.png')}
          />
          <div className={styles.oliviaColeDiv}>evan White</div>
          <div
            className={styles.loremIpsumDolorSitAmetCo}
          >{`Reaching legend is not a dream anymore, I am confident that I will be able to step through the gate of mythic one day `}</div>
        </div>
        <div className={styles.testimonialItemDiv2}>
          <div className={styles.rectangleDiv3} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src={require('./images/mask-group2@2x.png')}
          />
          <div className={styles.oliviaColeDiv}>Jessica Page</div>
          <div
            className={styles.loremIpsumDolorSitAmetCo}
          >{`The Kagura skill of one of the trainer has seriously impressed me! Wow..just Wow.. `}</div>
        </div>
      </div>
      <div className={styles.sectionGetOurApp}>
        <div className={styles.buttonDiv2}>
          <div className={styles.submitDiv}>Download on ios</div>
        </div>
        <div className={styles.ourKryptoAppIsTheEasiest}>
          Our Krypto app is the easiest way to keep track of your assets when
          you’re on the go.
        </div>
        <b className={styles.browseNftsFromYourSmartpho}>
          <span className={styles.browseSpan}>{`browse `}</span>
          <span className={styles.nftSpan}>nft</span>
          <span className={styles.browseSpan}>s from your smartphone</span>
        </b>
        <div className={styles.getOurApp}>get our app</div>
        <div className={styles.objectOther17Div}>
          <img
            className={styles.objectOther17Icon}
            alt=""
            src={require('./images/objectother-17@2x.png')}
          />
        </div>
      </div>
      <div className={styles.sectionAnalyticsDiv}>
        <div className={styles.objectOther18Div}>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/MK8ss8JLPO8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className={styles.buttonDiv3}>
          <div className={styles.submitDiv}>View our pricing</div>
        </div>
        <div className={styles.useOurBuiltInAnalyticsDas}>
          We believe the best way to learn is through observing how others applying the hero's capabilities to the maximum.
        </div>
        <b className={styles.builtInAnalyticsToTrackYo}>
          <span
            className={styles.browseSpan}
          >{`Fantastic videos from our trainers `}</span>
        </b>
        <div className={styles.aNALYTICSDiv}>ANALYTICS</div>
      </div>

      <div className={styles.referenceDiv}>
        <div className={styles.featuredOnDiv}>Featured on</div>
        <div className={styles.rectangleDiv6} />
        <img className={styles.image5Icon} alt="" src={require('./images/image-5@2x.png')} />
        <img className={styles.image6Icon} alt="" src={require('./images/image-6@2x.png')} />
        <img className={styles.image7Icon} alt="" src={require('./images/image-7@2x.png')} />
        <img className={styles.image8Icon} alt="" src={require('./images/image-8@2x.png')} />
      </div>
      <div className={styles.heroDiv}>
        <div className={styles.objectOther07Div}>
          <img
            className={styles.objectOther07Icon}
            alt=""
            src={require('./images/objectother-07@2x.png')}
          />
        </div>
        <b className={styles.discoverAndCollectRareNFTs}>
          Wondering why you suck in Mobile Legends?
        </b>
        <div className={styles.theMostSecureMarketplaceFo}>
          <p className={styles.homeP}>Tired of being called "Epic kontol"?</p>
          <p className={styles.sellNFTsP}>Fred not...We are here to help :)</p>
        </div>
        <div className={styles.bUYNFTSDiv}>
          <div className={styles.rectangleDiv7} />
          <div onClick={handleMenuClick} className={styles.buyNftsDiv}>Watch and Learn</div>
        </div>
        <div className={styles.sellNFTSDiv}>
          <div className={styles.rectangleDiv8} />
          <div className={styles.sellNftsDiv}>Hero Ranking</div>
        </div>
      </div>
    </div>
  );
};

export default TutorialWebPage;
