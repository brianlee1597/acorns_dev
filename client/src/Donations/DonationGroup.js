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
                    <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/127046787_2907720446115008_6361009810562103148_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=M-tSIaZmQvsAX_jGJ7G&_nc_ht=scontent-ssn1-1.xx&oh=85792a85ef6f72a0c0e6d21f2852584c&oe=60EDAA9C" alt="aespadonation" />
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