import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8">
      <h1 className="font-bold text-5xl">Oops!</h1>
      <p className="text-base">Sorry, an unexpected error has occurred.</p>
      {isRouteErrorResponse(error) ? (
        <p>
          <i>{error.statusText || error.data}</i>
        </p>
      ) : null}
    </div>
  );
}
