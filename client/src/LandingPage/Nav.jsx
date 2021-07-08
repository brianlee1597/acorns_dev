import './Nav.scss'

const Nav = () => {
    return (
        <section id="nav-container">
            <div id="logo-left">
                <a href="/"><img src="https://img.icons8.com/material-outlined/100/000000/nut.png" alt="logo"/></a>
                {/* <h2><span>A</span>corns</h2> */}
            </div>
            <div id="rightside-container">
                <div className="profile-container">
                    <h4>Welcome, Engineer!</h4>
                    <div className="profile-bar"/>
                </div>
                <div className="navlink-container">
                    <a href="/">팬덤기부</a>
                    <a href="/">선물하기</a>
                    <a href="/">캄페인</a>
                    <a href="/">커뮤니티</a>
                </div>
            </div>
        </section>
    )
}

export default Nav