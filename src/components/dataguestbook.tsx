import { fetchMessage } from "@/utils/message";
import moment from "moment";
export const Data = async () => {
  const data = await fetchMessage();
  return (
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
                    {moment(datas.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </h5>
                </span>
              </div>
            );
          }
        )}
    </div>
  );
};
