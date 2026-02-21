

type ErrorProps = {
  message: string;
};

const Error = ({ message }: ErrorProps) => {
  return <h3>Error: {message}</h3>;
};

export default Error;