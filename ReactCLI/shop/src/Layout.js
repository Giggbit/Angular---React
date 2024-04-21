import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/"><i className="bi bi-shop-window"></i> Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/category">Category</Link>
                        <Link className="nav-link" to="/notfound">NotFound</Link>
                        <Link className="nav-link" to="/cart">Cart</Link>
                        <Link className="nav-link" to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </nav>  

        <div className="container">
            <div><Outlet /></div>           
        </div>

        <div className="spacer"></div>

        <footer>
            &copy; 2024 IT Step University
        </footer>
    </>
  )
};

export default Layout;