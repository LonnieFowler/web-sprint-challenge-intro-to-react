// Write your Character component here
import react from "react"
import styled from "styled-components"

const BrightDiv = styled.div`
    background-color: lemonchiffon;
    width: 50%;
    margin-left: 25%;
`;
const BirthYear = styled.p`
    color: blue;
`;
const Films = styled.p`
    color: green;
`;
const Header = styled.h2`
    color: orange;
`;


function Character (props){
    return (
        <BrightDiv className='Character-wrapper'>
            <Header>{props.name}</Header>
            <BirthYear>{props.birth_year}</BirthYear>
            {props.films.map((el) => (
                <Films>{el}</Films>
            ))}
        </BrightDiv>
    )
}


/*birth_year: "19BBY"
created: "2014-12-09T13:50:51.644000Z"
edited: "2014-12-20T21:17:56.891000Z"
eye_color: "blue"
films: (4) ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'Revenge of the Sith']
gender: "male"
hair_color: "blond"
height: "172"
homeworld: "http://swapi.dev/api/planets/1/"
mass: "77"
name: "Luke Skywalker"
skin_color: "fair"
species: Array(0)
length: 0
[[Prototype]]: Array(0)
starships: Array(2)
0: "http://swapi.dev/api/starships/12/"
1: "http://swapi.dev/api/starships/22/"
length: 2
[[Prototype]]: Array(0)
url: "http://swapi.dev/api/people/1/"
vehicles: (2) ['http://swapi.dev/api/vehicles/14/', 'http://swapi.dev/api/vehicles/30/'
*/



export default Character