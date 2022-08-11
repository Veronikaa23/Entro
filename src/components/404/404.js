import "./404.css";

const Page404 = () => {
  return (
    <main>
      <section id="not-found-page">
        <div className="not-found-page-container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            The Page you are looking for doesn't exist or another error
            occurred. Go to <a href="/">ENTRO</a>.
          </p>
        </div>
      </section>
    </main>
  );
};
export default Page404;
