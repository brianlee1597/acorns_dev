import './DonationGroup.scss'
import BTSDonationImage from '../images/btsdonation.jpg'

const DonationGroup = () => {
    return (
        <div className="donation-grid-container">
            <div className="donation-gridbox">
                <div className="graphics">
                    <img src={BTSDonationImage} alt="btsdonation" />
                    <div>
                        <h1>BTS</h1>
                    </div>
                </div>
            </div>
            <div className="donation-gridbox">
                <div className="graphics">
                    <img src="https://www.iwmbuzz.com/wp-content/uploads/2020/11/in-pics-blackpink-girls-look-stunning-while-twinning-in-white-2.jpg" alt="bpdonation" />
                    <div>
                        <h1>Blackpink</h1>
                    </div>
                </div>
            </div>
            <div className="donation-gridbox">
                <div className="graphics">
                    <img src="https://pbs.twimg.com/media/EvoVw8UVEAMr6Sw?format=jpg&name=orig" alt="aespadonation" />
                    <div>
                        <h1>Aespa</h1>
                    </div>
                </div>
            </div>
            <div className="donation-gridbox">
                <div className="graphics">
                    <img src="https://lastfm.freetls.fastly.net/i/u/770x0/f53bf0af41f6baeca6a4aa8b5c4a9aae.webp#f53bf0af41f6baeca6a4aa8b5c4a9aae" alt="exodonation" />
                    <div>
                        <h1>EXO</h1>
                    </div>
                </div>
            </div>
            <div className="donation-gridbox">
                <div className="graphics">
                    <img src="https://vignette.wikia.nocookie.net/kpop/images/4/42/Jessi_Down_promo_photo.png/revision/latest?cb=20180719044133" alt="btsdonation" />
                    <div>
                        <h1>Jessi</h1>
                    </div>
                </div>
            </div>
            <div className="donation-gridbox">
                <div className="graphics">
                    <img className="Got7" src="https://kpopgotmyseoul.weebly.com/uploads/2/5/6/0/25604243/9987248_orig.jpg" alt="btsdonation" />
                    <div>
                        <h1>Got7</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonationGroup