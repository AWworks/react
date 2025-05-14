interface GreetUserProps {
  name: string;
}
const GreetUser = ({ name }: GreetUserProps) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>We are pleased to see you back!</p>
    </div>
  );
}

export default GreetUser;