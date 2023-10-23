/* eslint-disable no-unused-vars */
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

// eslint-disable-next-line react/prop-types
const UpdateOrder = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
