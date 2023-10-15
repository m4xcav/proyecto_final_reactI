export default function Galeria({heroes, children}) {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className=" mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {heroes?.map((heroe) => (
              <li key={heroe.id}>
                <img
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={heroe.thumbnail.path+"."+heroe.thumbnail.extension}
                  alt={`heroe de api Marvel: ${heroe.name}`}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {heroe.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {heroe.description}
                </p>
              </li>
            ))}
            {}
          </ul>
        </div>
    );
  }