import styled from 'styled-components';

export const Tag = ({ tag }) => {
  return <TagName>@{tag}</TagName>;
};

const TagName = styled.p`
  text-align: center;
`;
