import { getAll, remove } from './actions';
import CreateForm from './create-form';

export default async function Home() {
  const todos = await getAll();

  return (
    <main>
      <CreateForm />
      <div>
        { todos.map(todo => (
          <div key={todo.title}>
            <div>{todo.title}</div>
            <form action={remove.bind(null, todo.title)}>
              <button type="submit">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </main>
  );
}
