import { fetchMessage } from "../../utils/message";
import { Form } from "@/components/guestbookform";
import moment from "moment";

const GuestBook = async () => {
  const data = await fetchMessage();

  return (
    <div className="p-3">
      <Form></Form>
      <div>
        {data
          ?.reverse()
          .map(
            (datas: {
              id: number;
              name: string;
              message: string;
              createdAt: string;
            }) => {
              return (
                <div className="mb-7" key={datas.id}>
                  <h1 className="mb-3 text-lg">{datas.message}</h1>
                  <span className="flex flex-row space-x-6 text-sm text-gray-500">
                    <h4>{datas.name} </h4>
                    <h1>/</h1>
                    <h5>
                      {moment(datas.createdAt).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    </h5>
                  </span>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};
export default GuestBook;
