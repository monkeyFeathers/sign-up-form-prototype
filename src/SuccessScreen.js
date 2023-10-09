export function SuccessScreen({ setSuccess }) {
  return (
    <>
      <h1>Success!</h1>
      <button onClick={() => setSuccess(false)}>Sign up again!</button>
    </>
  );
}
