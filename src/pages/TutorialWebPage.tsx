import { FunctionComponent } from "react";
import styles from "./TutorialWebPage.module.css";

const TutorialWebPage: FunctionComponent = () => {
  return (
    <div className={styles.tutorialWebPage}>
      <div className={styles.kryptoDiv}>krypto</div>
      <div className={styles.joinOurNewsletter}>Join our newsletter</div>
      <div className={styles.homeAboutBuyNFTsSellNFTs}>
        <p className={styles.homeP}>Home</p>
        <p className={styles.homeP}>About</p>
        <p className={styles.homeP}>Buy NFTs</p>
        <p className={styles.sellNFTsP}>Sell NFTs</p>
      </div>
      <div className={styles.browseNFTsBuyNFTsSellNFTs}>
        <p className={styles.homeP}>Browse NFTs</p>
        <p className={styles.homeP}>Buy NFTs</p>
        <p className={styles.sellNFTsP}>Sell NFTs</p>
      </div>
      <div className={styles.emailLinkedInInstagramTwitt}>
        <p className={styles.homeP}>Email</p>
        <p className={styles.homeP}>LinkedIn</p>
        <p className={styles.homeP}>Instagram</p>
        <p className={styles.sellNFTsP}>Twitter</p>
      </div>
      <div className={styles.kryptoDiv1}>krypto</div>
      <div className={styles.marketDiv}>Market</div>
      <div className={styles.contactDiv}>contact</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.buttonDiv}>
        <div className={styles.submitDiv}>submit</div>
      </div>
      <div className={styles.emailAddressDiv}>Email Address</div>
      <div className={styles.getStatedDiv}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.rectangleDiv2} />
        <div className={styles.areYouReady}>are you ready?</div>
        <b className={styles.beAPartOfTheNextBigThin}>
          <p className={styles.homeP}>be a part of the</p>
          <p className={styles.sellNFTsP}>next big thing</p>
        </b>
        <div className={styles.buttonDiv1}>
          <div className={styles.submitDiv}>get started</div>
        </div>
      </div>
      <div className={styles.navBarDiv}>
        <b className={styles.kryptoB}>krypto</b>
        <div className={styles.aboutDiv}>about</div>
        <div className={styles.pricingDiv}>pricing</div>
        <div className={styles.contactDiv1}>contact</div>
        <div className={styles.buyNFTDiv}>buy NFT</div>
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
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. `}</div>
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
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. `}</div>
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
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. `}</div>
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
          <img
            className={styles.objectOther17Icon}
            alt=""
            src={require('./images/objectother-18@2x.png')}
          />
        </div>
        <div className={styles.buttonDiv3}>
          <div className={styles.submitDiv}>View our pricing</div>
        </div>
        <div className={styles.useOurBuiltInAnalyticsDas}>
          Use your built-in analytics dashboard to pull valuable insights and
          monitor the value of your Krypto portfolio over time.
        </div>
        <b className={styles.builtInAnalyticsToTrackYo}>
          <span
            className={styles.browseSpan}
          >{`built-in analytics to track your `}</span>
          <span className={styles.nftSpan}>nft</span>
          <span className={styles.browseSpan}>s</span>
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
          discover and collect rare NFTs
        </b>
        <div className={styles.theMostSecureMarketplaceFo}>
          <p className={styles.homeP}>The most secure marketplace for buying</p>
          <p className={styles.sellNFTsP}>and selling unique crypto assets.</p>
        </div>
        <div className={styles.bUYNFTSDiv}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.buyNftsDiv}>buy nfts</div>
        </div>
        <div className={styles.sellNFTSDiv}>
          <div className={styles.rectangleDiv8} />
          <div className={styles.sellNftsDiv}>sell nfts</div>
        </div>
      </div>
    </div>
  );
};

export default TutorialWebPage;
