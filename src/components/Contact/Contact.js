import { Phonetitle, Ulcontacts, ButtonDEL } from './Contact.styled';

export const Contact = ({ contacArray, clickByDelete }) => {
  return (
    <>
      <Phonetitle>Contacts list :</Phonetitle>
      <Ulcontacts>
        {contacArray.map(el => {
          return (
            <li key={el.id}>
              {el.name} : {el.phone} ,
              <ButtonDEL
                onClick={() => {
                  console.log(el.id);
                  clickByDelete(el.id);
                }}
              >
                Delete
              </ButtonDEL>
            </li>
          );
        })}
      </Ulcontacts>
    </>
  );
};
