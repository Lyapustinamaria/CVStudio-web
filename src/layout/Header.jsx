function Header() {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light cvs-color">
            <div class="container">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link text-uppercase" href="#">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-uppercase" href="#">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
                <a class="navbar-brand" href="#">
                    <img
                        src="./img/cvs_icon.svg"
                        width="50"
                        height="50"
                        class="d-inline-block align-top"
                        alt=""
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-uppercase" href="#">
                                About Us
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-uppercase" href="#">
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export { Header };
