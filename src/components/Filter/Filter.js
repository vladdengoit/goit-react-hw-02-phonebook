import { Inputtitle, Inputname, LabelInput } from './Filter.styled';

export const Filter = ({ propsOnChange }) => {
  return (
    <>
      <Inputtitle> Find contact by name :</Inputtitle>
      <LabelInput>
        <Inputname type="text" onChange={propsOnChange}></Inputname>
      </LabelInput>
    </>
  );
};
