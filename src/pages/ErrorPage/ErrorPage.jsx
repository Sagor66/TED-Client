import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center my-32">
      <img
        className="w-[400px] h-[400px] object-cover rounded-full"
        src='https://i.ibb.co/1GNyh75/error-robot.gif'
        alt=""
      />
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-6">
          Error Status <span className="font-thin">{status}</span>
        </h2>
        <p>{error?.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
