import { RichText, RichTextComponent, LoaderRequest } from '@kiwi-app/nextjs';

// Component
interface ItemCategory {
  id: number;
  name: string;
  image: string;
}

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: ItemCategory;
}

export interface WithLoaderProps {
  title: RichText;
  loader: Item[];
}

const WithLoader = ({ title, loader }: WithLoaderProps) => (
  <div className="w-full flex flex-col gap-4 items-center justify-center my-4">
    <RichTextComponent className="text-3xl" text={title} />
    <div className="flex flex-wrap gap-4 justify-center mt-4">
      {loader?.map((item) => (
        <div key={item.id} className="card w-full sm:w-[20%] bg-base-100 shadow-xl">
          <figure>
            <img src={item.images[0]} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">
                {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                  item.price,
                )}
              </div>
            </h2>
            <p className="line-clamp-2">{item.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{item.category?.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Loader
export interface WithLoaderLoaderProps {
  /** @description amount of products loaded. default: 5 */
  items: number;
}

export async function Loader(_: LoaderRequest, props: WithLoaderLoaderProps): Promise<Item[]> {
  try {
    const response = await fetch(
      ` https://api.escuelajs.co/api/v1/products?offset=0&limit=${props.items ?? 5}`,
    );

    const data = response.json();
    return data;
  } catch (_) {
    return [];
  }
}

// Loading
export function Loading() {
  return <p>You will see me while this section is loading</p>;
}

export default WithLoader;
