export const LargePersonListItem = ({person}) =>{

const {name, age, haircolor, hobbies} = person;
return(
<>
<h3>{name}</h3>
<p>Age: {age} Years</p>
<p>Hair Color: {haircolor}</p>
<p>Hobbies:</p>
<ul>
    {hobbies.map(hobby=><li key ={hobby}>{hobby}</li>)}
</ul>
</>

);



}