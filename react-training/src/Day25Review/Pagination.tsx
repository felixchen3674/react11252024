import { useState } from "react";

export default function Pagination(props: any) {
  const { items, itemsPerPage, renderItem } = props;
  const [currPage, setCurrPage] = useState(0);

  const start = currPage * itemsPerPage;
  const end = start + itemsPerPage;

  const itemsToDisplay = items.slice(start, end);

  const totalPages = Math.floor(items.length / itemsPerPage);

  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i);
  }

  const handleChangePage = (newPage: number) => {
    setCurrPage(newPage);
  };

  return (
    <div>
      <h3>Pagination</h3>
      <div>
        {itemsToDisplay.map((item: any) => {
          return renderItem(item);
        })}
      </div>
      <div>
        {pages.map((page) => {
          return (
            <button onClick={() => handleChangePage(page)} key={page}>
              {page + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
