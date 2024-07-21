
import { Button, Card } from "flowbite-react";

export function MainCard() {
  return (
    <Card className="w-full h-full">
      <h5 className="text-7xl font-semibold font-serif tracking-tight text-gray-900 dark:text-white">
      Learn without limits
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button className="w-fit">
        <span className="mb-1 py-1 px-1">Read more</span>
        <svg className="-mr-1 ml-2 h-4 w-4 my-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
}
export default MainCard;
