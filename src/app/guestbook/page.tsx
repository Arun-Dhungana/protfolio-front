import { Data } from "@/components/dataguestbook";

import { Form } from "@/components/guestbookform";
import { Suspense } from "react";
import { Ske } from "@/components/skeleton/guestbooks";
const GuestBook = async () => {
  return (
    <div className="p-3">
      <Form></Form>
      <Suspense fallback={<Ske></Ske>}>
        <Data></Data>
      </Suspense>
    </div>
  );
};
export default GuestBook;
