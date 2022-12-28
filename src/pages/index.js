import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
      </main>
    </div>
  );
}
