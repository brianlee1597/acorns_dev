import './DonationPage.scss'

const DonationPage = () => {

    function handleClick() {
        console.log('in cardClick');
    } 

    return (
        <div id="donation-container">
            <div id="header-container">
                <h1>전체</h1>
                <div className="sort">
                    <div onClick={handleClick}>아티스트별</div>
                </div>
                <div className="sort">
                    <div onClick={handleClick}>마감일순</div>
                </div>
                <div className="sort">
                    <div onClick={handleClick}>목표금액순</div>
                </div>
                <div className="sort">
                    <div onClick={handleClick}>분야별</div>
                </div>
            </div>
            <div id="donation-entire-list">
                <div id="artist-list">
                    <div className="donation-list">

                    </div>
                </div>

            </div>
        </div>

    )
}

export default DonationPage