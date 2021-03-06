import styled from "styled-components";

export default styled.button.attrs(({ type = "button" }) => ({ type }))`
  transition: all 0.3s ease;
  font-size: 1.6em;
  background-color:  #ff324d;
  color: ${props => (props.disabled ? " #fff;" : " #fff;")};
  box-shadow: 0 0 2px 0px #333;
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  min-width: 50px;
  line-height: 50px;
  align-self: center;
  cursor: pointer;
  outline: none;
  &:hover:enabled,
  &:focus:enabled {
    color: #ff324d;
    background-color: #fff;
    box-shadow: 0 0 2px 0 #333;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
