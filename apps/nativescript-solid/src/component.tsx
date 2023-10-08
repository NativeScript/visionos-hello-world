export const Component = (props: any) => {
  const { count } = props;
  return (
    <button
      style={{
        color: 'green',
      }}
      text={`You have tapped ${count()} time${count() === 1 ? '' : 's'}`}
      on:tap={() => {
        alert(`You have tapped ${count()} time${count() === 1 ? '' : 's'}`);
      }}
    />
  );
};
