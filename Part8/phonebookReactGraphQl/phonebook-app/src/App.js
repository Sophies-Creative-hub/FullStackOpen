import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      phone
      id
    }
  }
`;

const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`


const Person = ({ name, address, phone, onClose }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        {address?.street} {address?.city}
      </div>
      <div>{phone}</div>
      <button onClick={onClose}>close</button>
    </div>
  );
};

const Persons = ({ persons }) => {
  const [nameToSearch, setNameToSearch] = useState(null);

  const { data, loading, error } = useQuery(FIND_PERSON, {
    variables: { nameToSearch },
    skip: !nameToSearch,
  });

  if (nameToSearch && loading) {
    return <div>Loading...</div>;
  }

  if (nameToSearch && error) {
    return <div>Error: {error.message}</div>;
  }

  if (nameToSearch && data) {
    return (
      <Person
        name={data.findPerson.name}
        address={data.findPerson.address}
        phone={data.findPerson.phone}
        onClose={() => setNameToSearch(null)}
      />
    );
  }

  return (
    <div>
      <h2>Persons</h2>
      {persons.map(({ name, phone }) => (
        <div key={name}>
          {name} {phone}
          <button onClick={() => setNameToSearch(name)}>show address</button>
        </div>
      ))}
    </div>
  );
};

function App() {
  const { loading, error, data } = useQuery(ALL_PERSONS);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.allPersons.map((person) => (
        <div key={person.id}>
          <p>{person.name}</p>
          <p>{person.phone}</p>
        </div>
      ))}
      <Persons persons={data.allPersons} />
    </div>
  );
}

export default App;
