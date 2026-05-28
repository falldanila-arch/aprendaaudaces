import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <meta name="keywords" content="modelagem digital, moldes em pdf, cursos de modelagem, curso modelagem, audaces moldes, curso audaces, costura, costura criativa, curso de costura, curso de costura criativa, aprender costura, curso audaces online" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
    </>
  );
};

export default NotFound;
