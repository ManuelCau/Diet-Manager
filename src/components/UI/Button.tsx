type Props = {
  buttonText: string;
};
export function Button({ buttonText }: Props) {
  return (
    <button className="bg-amber-300 hover:bg-amber-600">{buttonText}</button>
  );
}
