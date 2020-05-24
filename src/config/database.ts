import "dotenv/config";
import { createPool, Pool } from "mysql2/promise";

class Connect {
  public async connected(): Promise<Pool> {
    const conexion = await createPool({
      host: "localhost",
      user: "root",
      password: process.env.DB_PASSWORD,
      database: "node_mysql_ts",
      connectionLimit: 10,
    });

    return conexion;
  }
}

const dbConnected = new Connect();
export default dbConnected.connected();
