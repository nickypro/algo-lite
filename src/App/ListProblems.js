import React from 'react';
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'

const Title = styled.h1`
    font-family: sans serif;
    font-weight: normal;
    margin-left: 0.5rem;
    color: darkslateblue;
    border-bottom: 2px solid darkslateblue;
    text-transform: capitalize;
  `;
  
  const Item = styled.div`
    width: 100%;
    border-radius: 0.3rem;
    margin: 0.5rem;
    background-color: white;
    display: flex;
    box-sizing: border-box;
    box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.05);

    &:hover {
      box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.1);
    }
    align-items: flex-grow;
  `;
  const Link = styled.a`
    text-decoration: none;
    color: black;
    font-family: sans serif;
    display: block;
    padding: 0.5rem 0rem;
    margin: auto 0px;
    font-size: 0.9rem;
  `;
  const FlexGrow = styled.div`
    flex: 1;
  `;
  const Side = styled.div`
    width: 2rem;
    box-sizing: border-box;
    border-left: 0.3rem solid rgba(255, 255, 255, 0.2);
    background-color: #aaa;
    border-radius: 0rem 0.4rem 0.4rem 0rem;
`;

const ListProblems = ({list, color, difficulty, toggleChecked}) => {
  return (
    <div>
      <Title>{difficulty.replace(/([A-Z]+)/g, ' $1')}</Title>
      {list.map((item, index) =>
        <Item key={`${color}${index}`}> 
          <Checkbox color="primary" checked={item.checked} onChange={() => toggleChecked(difficulty, index)}/>
          <Link href={item.link} style={{textDecoration: "none"}}>  
            {item.title} 
          </Link>
          <FlexGrow/>
          <Side style={item.link ? {backgroundColor: color} : {}}/>
        </Item>
      )}
    </div>
  )
}

export default ListProblems;
