import { Low } from "lowdb";
import { JSONFilePreset } from "lowdb/node";
import path from "node:path";
export interface RecentRecord {
  key: string;
  url: string;
  name: string;
  time: string;
  transfer: string[];
}
export type Data = {
  recent: RecentRecord[];
  customStyles: string[];
};
const PATH = path.resolve(__dirname, "../dist-electron/data/recent.json");
const defaultData = {
  recent: [
    {
      key: "1",
      url: "1",
      name: "1",
      time: "4/28",
      transfer: [],
    },
  ],
};

export async function initDB() {
  const db = await JSONFilePreset<Data>(PATH, defaultData);
  return db;
}

export function getValue(db: Low<Data>, key: keyof Data) {
  return db.data[key];
}
