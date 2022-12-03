import Head from 'next/head';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Abla Malki • Web Designer & Developer</title>
        <meta
          name="description"
          content="Front-end web developer based in Algeria.I combine User
        Experience and Creative modern design to build websites and web
        applications that are user-focused, responsive, and delightful to use."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />
      <main className="max-w-6xl mx-auto px-8 pb-8 md:px-16 md:pb-16 ">
        <Tab.Group>
          <Tab.List className="flex justify-between gap-2 rounded-xl bg-textColrAlt p-[0.375rem] mt-8 mx-0 mb-10 md:w-[360px] md:my-12 md:mx-auto">
            <Tab className={({ selected }) => classNames(
              'w-full p-4 font-abla font-medium text-base rounded-xl transition duration-300 outline-none',
              selected ? 'bg-white' : 'text-titleColor hover:bg-white ',
            )}
            >
              Projects
            </Tab>
            <Tab className={({ selected }) => classNames(
              'w-full p-4 font-abla font-medium text-base rounded-xl transition duration-300 outline-none',
              selected ? 'bg-white' : 'text-titleColor hover:bg-white ',
            )}
            >Skills
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel><Portfolio /></Tab.Panel>
            <Tab.Panel><Skills /></Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
      <Footer />
    </div>
  );
}
