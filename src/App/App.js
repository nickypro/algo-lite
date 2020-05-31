import React from 'react'
import styled from 'styled-components'
import problemsList from './problems'
import ListProblems from './ListProblems'

function useLocaleObjectState(localItem, defaultValue = {}) {
  //turn string to object
  const savedValue = localStorage.getItem(localItem)
  const [loc, setState] = React.useState( savedValue ? JSON.parse(savedValue) : defaultValue )

  //turn object to string
  const setLoc = (newItem) => {
    setState(newItem)
    localStorage.setItem(localItem, JSON.stringify(newItem))
  }

  return [loc, setLoc]
}

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ghostwhite;
  min-height: 100vh;
  margin: 0px;
  z-index: 1000;
`;

const TopBar = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 4rem;
  background-color: DARKSLATEBLUE;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopBarTitle = styled.h1`
  font-weight: normal;
  font-family: sans serif;
  color: white;
`;

const ItemGrid = styled.div`
  display: grid;
  margin-top: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  grid-gap: 1rem;
  width: 80%;
`; 

const App = () => {
  const [problems, setProblems] = useLocaleObjectState("problems", problemsList)

  const toggleChecked = (difficulty, index) => {
    let temp = problems;
    temp[difficulty][index].checked = !temp[difficulty][index].checked;
    setProblems(temp)
  }

  return (
    <View>
      <TopBar>
        <TopBarTitle>AlgoLite</TopBarTitle>
      </TopBar>
      <ItemGrid>
        <ListProblems list={problems.easy}     difficulty="easy"      toggleChecked={toggleChecked} color="green"/>
        <ListProblems list={problems.medium}   difficulty="medium"    toggleChecked={toggleChecked} color="dodgerblue"/>
        <ListProblems list={problems.hard}     difficulty="hard"      toggleChecked={toggleChecked} color="crimson"/>
        <ListProblems list={problems.veryHard} difficulty="veryHard"  toggleChecked={toggleChecked} color="purple"/>
      </ItemGrid>
    </View>
  )
}
export default App;