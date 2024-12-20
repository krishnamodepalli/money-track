
import PocketBase from "pocketbase";

const pb_url = process.env.NEXT_PUBLIC_PB_URL as string;

const pb = new PocketBase(pb_url);

export default pb;
