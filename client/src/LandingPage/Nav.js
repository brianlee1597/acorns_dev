import './Nav.css'

const Nav = () => {
    return (
        <section id="nav-container">
            <div id="logo-left">
                <a href="/"><img src="https://img.icons8.com/material-outlined/100/000000/nut.png" alt="logo"/></a>
                {/* <h2><span>A</span>corns</h2> */}
            </div>
            <div id="rightside-container">
                <div className="profile-container">
                    <h4>Welcome Back Brian!</h4>
                    <div className="profile-bar"/>
                </div>
                <div className="navlink-container">
                    <a href="/">Donations</a>
                    <a href="/">Gifts</a>
                    <a href="/">Campaigns</a>
                    <a href="/">Community</a>
                </div>
            </div>
        </section>
    )
}

export default Nav