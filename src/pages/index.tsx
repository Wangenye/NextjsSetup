import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '@/pages/page';
import { Button, Card, Input } from '@nextui-org/react';
import { useState } from 'react';
import styles from '../app/page.module.css';

const Home: NextPageWithLayout = () => {
  const [newtodo, setNewTodo] = useState('');
  return (
    <section className={styles.main}>
      <div className="md:container md:mx-auto">Yellow</div>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <div
        className="container mx-auto text-black  flex flex-col items-center p-28 "
        style={{
          width: '100%',
        }}
      >
        <div className="w-full">
          <h1 className="text-3xl">Todo</h1>
        </div>
        <div className="mt-2 flex items-center w-full m-4">
          <Input
            value={newtodo}
            onChange={(e) => setNewTodo(e.target.value)}
            fullWidth
            placeholder="Enter TODO"
            clearable
          />
          <Button shadow className="mt-2">
            ADD
          </Button>
        </div>
        <div className="mt-5 w-full flex items-center">
          <Card className="w-full">
            <Card.Body>Todo One</Card.Body>
          </Card>
          <Button size="lg" shadow auto color="error" className="m-2">
            Delete
          </Button>
        </div>
      </div>
      <main className={styles.main2}></main>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
