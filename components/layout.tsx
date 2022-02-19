import { FC } from 'react';
import NewTodo from './new-todo';

const Layout: FC = ({ children }) => {
  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTodo />
        </header>
      </section>
      {children}
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
};

export default Layout;
