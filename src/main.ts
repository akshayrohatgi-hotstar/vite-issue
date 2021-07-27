import { setup } from "axios-cache-adapter";

const instance = setup({});

instance.get("test");
