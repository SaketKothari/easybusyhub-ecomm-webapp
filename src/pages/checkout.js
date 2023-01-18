import Image from 'next/image';
import Header from '../components/Header';
import CheckoutProduct from '../components/CheckoutProduct';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import { groupBy } from 'lodash';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Checkout() {
  const items = useSelector(selectItems);
  const groupedItems = Object.values(groupBy(items, 'id'));

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-50 bg-white">
            <h1
              className={`text-3xl ${
                items.length > 0 ? 'border-b pb-4' : 'pb-2'
              }`}
            >
              {items.length === 0
                ? 'Your Amazon Basket is empty.'
                : 'Shopping Basket'}
            </h1>

            <TransitionGroup>
              {groupedItems.map((group, i) => (
                <CSSTransition
                  key={group[0].image}
                  timeout={500}
                  classNames="item"
                >
                  <CheckoutProduct
                    id={group[0].id}
                    title={group[0].title}
                    rating={group[0].rating}
                    price={group[0].price}
                    description={group[0].description}
                    category={group[0].category}
                    image={group[0].image}
                    hasPrime={group[0].hasPrime}
                    quantity={group.length}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>

        {/* Right */}
        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
