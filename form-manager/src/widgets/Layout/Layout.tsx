import Navigation from "./ui/Navigation";

const Layout = () => {
  return (
    <div className="layout">
      <div className="content-wrapper">
        <Navigation />
        <main className="content">
        </main>
      </div>
    </div>
  );
};

export default Layout;