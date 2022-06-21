import { gql, useQuery } from "@apollo/client"; // gql traz uma sintaxe highlight para a query

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`

interface Lesson {
  id: string,
  title: string
}
// 'interface' é uma definição de tipos para o typescript
// Podemos indicar o tipo passando 'x: Tipo' ou indicando o retorno
// assim:

function App() {

  // React.useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(response => console.log(response.data));
  // }, []);

  // Ao invé do useEffect, vamos usar um Hook (useQuery) trazido pelo apollo para fazer as querys;
  // Para isso, precisamos envolver o App (no main.tsx) por um componente chamado <ApolloProvider />;
  // Este component/context deve receber uma propriedade 'client', contento o client exportado no lib/apollo.ts

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <ul>
      {/*
          Passamos o tipo no retorno do useQuery, então não é necessário passar o tipo no 'lesson';
          Caso contrário podemos fazer: (lesson: Lesson) referênciando à interface
      */}
      {data?.lessons.map((lesson) => {
        return <li>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App;
