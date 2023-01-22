import styled from "styled-components";

const StyledDialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;

  background-color: var(--background);
  border-radius: 0.4rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Dialog = ({ title, children, closeable, onClose }) => {
  return (
    <StyledDialog>
      <StyledHeader>
        <h2>{title}</h2>
        {closeable && <button onClick={onClose}></button>}
      </StyledHeader>
      {children}
    </StyledDialog>
  );
};

Dialog.defaultProps = {
  onClose: () => {},
};

export default Dialog;
